import clsx from "clsx";
import range from "lodash.range";

const ProjectSkeleton = () => {
  return (
    <div className="animate-pulse h-[41rem] flex flex-col min-h-0 col-span-3 lg:col-span-2 xl:col-span-1  justify-between px-0  pb-6  text-ellipsis overflow-hidden  bg-white  bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-40 border border-gray-500 rounded-xl   max-w-none">
      <div>
        <div
          className={clsx({
            "flex  items-start w-full overflow-hidden h-[200px] bg-gray-200":
              true,
          })}
        >
          <div className="object-cover w-full rounded-t-xl bg-gray-200" />
        </div>
        <div className="px-4 pt-1">
          <h2 className="text-xl text-gray-200 bg-gray-200 my-3 rounded-lg w-1/3">
            d
          </h2>
          <div className="gap-2 flex flex-col">
            {range(4).map((skelText) => (
              <div
                key={skelText}
                className=" prose text-gray-200 rounded-lg bg-gray-200 !font-light prose-p:text-xs text-sm lg:text-xs xl:text-sm prose-li:text-xs prose-pi:font-light prose-li:font-light prose-headings:font-extralight  prose-li:marker:text-black"
              >
                d
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        className="w-full flex flex-wrap xl:flex-nowrap 2xl:flex-wrap gap-x-2 text-xs flex-shrink font-light p-2 px-4 gap-y-2 justify-center  flex-row mt-10"
        id="buttonGroup"
      >
        <a
          target="_blank"
          className="flex items-center  pr-4 gap-2 flex-row rounded-xl bg-gray-200 text-gray-200 p-2  cursor-pointer"
        >
          <div className="flex justify-center items-center bg-gray-300 rounded-full h-8 w-8"></div>
          <div className="bg-gray-300 text-gray-300 rounded-lg">
            Link to website
          </div>
        </a>

        <a
          target="_blank"
          className="flex items-center  pr-4 gap-2 flex-row rounded-xl bg-gray-200 text-gray-200 p-2  cursor-pointer"
        >
          <div className="flex justify-center items-center bg-gray-300 rounded-full h-8 w-8"></div>
          <div className="bg-gray-300 text-gray-300 rounded-lg">Github</div>
        </a>

        <a
          target="_blank"
          className="flex items-center  pr-4 gap-2 flex-row rounded-xl bg-gray-200 text-gray-200 p-2  cursor-pointer"
        >
          <div className="flex justify-center items-center bg-gray-300 rounded-full h-8 w-8"></div>
          <div className="bg-gray-300 text-gray-300 rounded-lg">2nd Github</div>
        </a>
      </div>
    </div>
  );
};

export default ProjectSkeleton;
