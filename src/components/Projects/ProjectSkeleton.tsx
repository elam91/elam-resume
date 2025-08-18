import clsx from "clsx";
import range from "lodash.range";

const ProjectSkeleton = () => {
  return (
    <div className="col-span-3 flex h-[41rem] min-h-0 max-w-none animate-pulse flex-col justify-between overflow-hidden text-ellipsis rounded-xl bg-white bg-opacity-40 bg-clip-padding px-0 pb-6 backdrop-blur-lg backdrop-filter lg:col-span-2 xl:col-span-1">
      <div>
        <div
          className={clsx({
            "flex h-[200px] w-full items-start overflow-hidden bg-gray-200": true,
          })}
        >
          <div className="w-full rounded-t-xl bg-gray-200 object-cover" />
        </div>
        <div className="px-4 pt-1">
          <h2 className="my-3 w-1/3 rounded-lg bg-gray-200 text-xl text-black">
            d
          </h2>
          <div className="flex flex-col gap-2">
            {range(4).map((skelText) => (
              <div
                key={skelText}
                className="prose-pi:font-light prose rounded-lg bg-gray-200 text-sm !font-light text-black prose-headings:font-extralight prose-p:text-xs prose-li:text-xs prose-li:font-light prose-li:marker:text-black lg:text-xs xl:text-sm"
              >
                d
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        className="mt-10 flex w-full flex-shrink flex-row flex-wrap justify-center gap-x-2 gap-y-2 p-2 px-4 text-xs font-light xl:flex-nowrap 2xl:flex-wrap"
        id="buttonGroup"
      >
        <a
          target="_blank"
          className="flex cursor-pointer flex-row items-center gap-2 rounded-xl bg-gray-200 p-2 pr-4 text-black"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-300"></div>
          <div className="rounded-lg bg-gray-300 text-black">
            Link to website
          </div>
        </a>

        <a
          target="_blank"
          className="flex cursor-pointer flex-row items-center gap-2 rounded-xl bg-gray-200 p-2 pr-4 text-black"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-300"></div>
          <div className="rounded-lg bg-gray-300 text-black">Github</div>
        </a>

        <a
          target="_blank"
          className="flex cursor-pointer flex-row items-center gap-2 rounded-xl bg-gray-200 p-2 pr-4 text-black"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-300"></div>
          <div className="rounded-lg bg-gray-300 text-black">2nd Github</div>
        </a>
      </div>
    </div>
  );
};

export default ProjectSkeleton;
