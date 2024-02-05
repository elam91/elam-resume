import range from "lodash.range";

const SkillSkeleton = () => {
  return (
    <div className="animate-pulse px-4 col-span-3 lg:col-span-2 xl:col-span-1  pb-6  text-ellipsis overflow-hidden  bg-white  bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-40  min-h-full rounded-xl   max-w-none">
      <div className="w-full flex flex-row justify-between items-center h-20">
        <h2 className="text-lg text-gray-200 bg-gray-200 rounded-xl">
          dfgdfgdfdfdf! dff{" "}
        </h2>
        <div className="rounded-2xl w-14 text-gray-200 bg-gray-200">dddd</div>
      </div>

      <div className=" prose  rounded-xl !font-light prose-p:text-xs prose-li:text-xs prose-pi:font-light prose-li:font-light prose-headings:font-extralight  prose-li:marker:text-black">
        {range(5).map((skeletonText) => (
          <p
            key={skeletonText}
            className="bg-gray-200 text-gray-200 rounded-xl"
          >
            Bla bla bla bla bla
          </p>
        ))}
      </div>
    </div>
  );
};

export default SkillSkeleton;
