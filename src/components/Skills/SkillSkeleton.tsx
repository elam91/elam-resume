import range from "lodash.range";

const SkillSkeleton = () => {
  return (
    <div className="overflow-hidde col-span-3 min-h-full max-w-none animate-pulse text-ellipsis rounded-xl bg-white bg-opacity-40 bg-clip-padding px-4 pb-6 text-gray-200 backdrop-blur-lg backdrop-filter lg:col-span-2 xl:col-span-1">
      <div className="flex h-20 w-full flex-row items-center justify-between">
        <h2 className="rounded-xl bg-gray-200 text-lg text-gray-200">
          dfgdfgdfdfdf! dff{" "}
        </h2>
        <div className="w-14 rounded-2xl bg-gray-200 text-gray-200">dddd</div>
      </div>

      <div className="prose-pi:font-light prose rounded-xl !font-light text-gray-200 prose-headings:font-extralight prose-p:text-xs prose-p:text-gray-200 prose-li:text-xs prose-li:font-light prose-li:marker:text-gray-300">
        {range(5).map((skeletonText) => (
          <p
            key={skeletonText}
            className="rounded-xl bg-gray-200 text-gray-200"
          >
            Bla bla bla bla bla
          </p>
        ))}
      </div>
    </div>
  );
};

export default SkillSkeleton;
