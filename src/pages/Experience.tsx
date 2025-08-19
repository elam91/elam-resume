import {
  addYears,
  differenceInCalendarMonths,
  differenceInMonths,
  differenceInYears,
  format,
} from "date-fns";
import useGetExperience from "../apiHooks/useGetExperience";
import clsx from "clsx";
import GlassCard from "../components/glass-card/glass-card";

const Experience = () => {
  const { data, isFetching } = useGetExperience();

  return (
    <div
      className={clsx(
        "flex w-full flex-col justify-start gap-y-2 rounded-xl bg-transparent text-black",
      )}
    >
      <GlassCard>
        <div
          id="work_container"
          className={clsx(
            "z-10 grid max-h-full grid-cols-4 rounded-xl p-4",
            isFetching ? "min-h-[d70vh] w-full" : "",
          )}
        >
          <div className="col-span-4 mb-5 text-xl font-light lg:col-span-1 lg:mb-0">
            Work Experience
          </div>
          <div className="col-span-4 flex flex-col gap-y-4 font-light lg:col-span-3">
            {isFetching || !data ? (
              <div className="animate-bounce">
                <p className="text-2xl">Loading...</p>
              </div>
            ) : (
              data.workData?.map((workEntry) => {
                const yearDiff = differenceInYears(
                  workEntry.endDate ? new Date(workEntry.endDate) : new Date(),
                  new Date(workEntry.startDate),
                );

                const monthDiff = differenceInCalendarMonths(
                  workEntry.endDate ? new Date(workEntry.endDate) : new Date(),
                  addYears(new Date(workEntry.startDate), yearDiff),
                );
                return (
                  <div
                    className="border-t border-slate-400 pt-2 first:border-0 first:pt-0"
                    key={workEntry.id}
                  >
                    <h2 className="text-xl font-medium">
                      {workEntry.titleName}
                    </h2>
                    <p className="flex flex-row items-center gap-x-2 font-normal">
                      {workEntry.image ? (
                        <img className="h-8 w-8" src={workEntry.image}></img>
                      ) : null}
                      {workEntry.organizationName}
                    </p>
                    <div className="flex flex-row gap-x-2 border-b border-slate-400 pb-2 text-black">
                      <p>
                        {`${format(new Date(workEntry.startDate), "MMMM y")} - ${
                          workEntry.endDate
                            ? format(new Date(workEntry.endDate), "MMMM y")
                            : "Present"
                        }  `}
                      </p>
                      {yearDiff || monthDiff ? (
                        <p className="xl font-bold text-black">·</p>
                      ) : null}
                      <p>{`${yearDiff ? `${yearDiff} yrs` : ""}  ${
                        monthDiff ? `${monthDiff} mos` : ""
                      }`}</p>
                    </div>
                    {workEntry.description ? (
                      <div
                        className="prose max-h-full prose-p:text-black prose-li:text-black"
                        dangerouslySetInnerHTML={{
                          __html: workEntry.description || "",
                        }}
                      ></div>
                    ) : null}
                  </div>
                );
              })
            )}
          </div>
        </div>
      </GlassCard>
      <GlassCard>
        <div
          id="education_container"
          className="z-10 grid w-full grid-cols-4 bg-clip-padding p-4"
        >
          <div className="col-span-4 text-xl font-light lg:col-span-1">
            Education
          </div>
          <div className="col-span-4 flex flex-col font-light lg:col-span-3">
            {data.educationData?.map((educationEntry) => {
              return (
                <div key={educationEntry.id}>
                  <h2 className="text-xl font-light">
                    {educationEntry.titleName}
                  </h2>
                  <p className="flex flex-row items-center gap-x-2 font-light">
                    {educationEntry.image ? (
                      <img className="h-8 w-8" src={educationEntry.image}></img>
                    ) : null}
                    {educationEntry.organizationName}
                  </p>
                  <div className="flex flex-row gap-x-2 text-black"></div>
                </div>
              );
            })}
          </div>
        </div>
      </GlassCard>
    </div>
  );
};

export default Experience;
