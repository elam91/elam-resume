import {
  addYears,
  differenceInMonths,
  differenceInYears,
  format,
} from "date-fns";
import useGetExperience from "../apiHooks/useGetExperience";

const Experience = () => {
  const { data, isFetching } = useGetExperience();

  return (
    <div className="w-full bg-transparent rounded-xl flex flex-col justify-start gap-y-2 ">
      <div
        id="work_container"
        className="grid grid-cols-4 bg-white p-4   max-h-full  bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-40 border border-gray-500  rounded-xl"
      >
        <div className="col-span-4 lg:col-span-1 font-light text-xl mb-5 lg:mb-0">
          Work Experience
        </div>
        <div className="col-span-4 lg:col-span-3 flex flex-col font-light gap-y-4">
          {data.workData?.map((workEntry) => {
            const yearDiff = differenceInYears(
              workEntry.endDate ? new Date(workEntry.endDate) : new Date(),
              new Date(workEntry.startDate)
            );

            const monthDiff = differenceInMonths(
              workEntry.endDate ? new Date(workEntry.endDate) : new Date(),
              addYears(new Date(workEntry.startDate), yearDiff)
            );
            return (
              <div
                className="first:border-0 border-t first:pt-0 pt-2"
                key={workEntry.id}
              >
                <h2 className="text-xl font-normal">{workEntry.titleName}</h2>
                <p className="font-light flex flex-row gap-x-2 items-center">
                  {workEntry.image ? (
                    <img className="w-8 h-8" src={workEntry.image}></img>
                  ) : null}
                  {workEntry.organizationName}
                </p>
                <div className="flex flex-row gap-x-2 text-slate-800">
                  <p>
                    {`${format(new Date(workEntry.startDate), "MMMM y")} - ${
                      workEntry.endDate
                        ? format(new Date(workEntry.endDate), "MMMM y")
                        : "Present"
                    }  `}
                  </p>
                  <p className="xl font-bold text-slate-600">·</p>
                  <p>{`${yearDiff} yrs ${monthDiff} mos`}</p>
                </div>
                {workEntry.description ? (
                  <div
                    className="prose max-h-full"
                    dangerouslySetInnerHTML={{
                      __html: workEntry.description || "",
                    }}
                  ></div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
      <div
        id="education_container"
        className="grid grid-cols-4 bg-white p-4  bg-clip-padding backdrop-filter backdrop-blur-lg  bg-opacity-40 border border-gray-500  rounded-xl"
      >
        <div className="col-span-4 lg:col-span-1 font-light text-xl">
          Education
        </div>
        <div className="col-span-4 lg:col-span-3 flex flex-col font-light">
          {data.educationData?.map((educationEntry) => {
            return (
              <div key={educationEntry.id}>
                <h2 className="text-xl font-normal">
                  {educationEntry.titleName}
                </h2>
                <p className="font-light flex flex-row gap-x-2 items-center">
                  {educationEntry.image ? (
                    <img className="w-8 h-8" src={educationEntry.image}></img>
                  ) : null}
                  {educationEntry.organizationName}
                </p>
                <div className="flex flex-row gap-x-2 text-slate-800">
                  <p>
                    {`${format(new Date(educationEntry.startDate), "y")} - ${
                      educationEntry.endDate
                        ? format(new Date(educationEntry.endDate), "y")
                        : "Present"
                    }  `}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience;
