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
      <div
        id="work_container"
        className={clsx(
          "z-10 grid max-h-full grid-cols-4 rounded-xl p-2",
          isFetching ? "min-h-[d70vh] w-full" : "",
        )}
      >
        <div className="col-span-4 mb-5 text-xl font-light md:col-span-1">
          <GlassCard>
            <p className="px-4 py-6 text-left">Work Experience</p>
          </GlassCard>
        </div>

        <div className="col-span-4 flex w-full flex-col items-start justify-start gap-y-4 font-light">
          {isFetching || !data ? (
            <div className="animate-bounce">
              <GlassCard>
                <p className="p-4 text-2xl">Loading...</p>
              </GlassCard>
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
                  className="col-span-4 w-full flex-1 first:pt-0"
                  key={workEntry.id}
                >
                  <GlassCard>
                    <div className="z-10 col-span-4 flex flex-1 flex-col items-start px-6 py-4">
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
                        {(yearDiff && yearDiff > 0) ||
                        (monthDiff && monthDiff > 0) ? (
                          <p className="xl font-bold text-black">·</p>
                        ) : null}
                        <p>{`${yearDiff && yearDiff > 0 ? `${yearDiff} yrs` : ""}  ${
                          monthDiff && monthDiff > 0 ? `${monthDiff} mos` : ""
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
                  </GlassCard>
                </div>
              );
            })
          )}
        </div>
      </div>

      {!isFetching && !!data?.educationData?.length ? (
        <div
          id="education_container"
          className="z-10 grid w-full grid-cols-4 bg-clip-padding"
        >
          <div className="col-span-4 flex flex-col justify-start">
            <div className="col-span-4 mb-5 w-full text-xl font-light md:col-span-1 md:w-fit">
              <GlassCard>
                <p className="px-6 py-4 text-left">Education</p>
              </GlassCard>
            </div>

            <GlassCard>
              <div className="col-span-4 flex flex-1 flex-col items-start justify-start px-6 py-4 font-light">
                {data.educationData?.map((educationEntry) => {
                  return (
                    <div key={educationEntry.id}>
                      <h2 className="text-xl font-light">
                        {educationEntry.titleName}
                      </h2>
                      <p className="flex flex-row items-center gap-x-2 font-light">
                        {educationEntry.image ? (
                          <img
                            className="h-8 w-8"
                            src={educationEntry.image}
                          ></img>
                        ) : null}
                        {educationEntry.organizationName}
                      </p>
                      <div className="flex flex-row gap-x-2 text-black"></div>
                    </div>
                  );
                })}
              </div>
            </GlassCard>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Experience;
