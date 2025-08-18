import range from "lodash.range";

const SkillSkeleton = () => {
  return (
    <div className="col-span-3 min-h-full max-w-none animate-pulse overflow-hidden text-ellipsis rounded-xl bg-white bg-opacity-40 bg-clip-padding px-4 pb-6 backdrop-blur-lg backdrop-filter lg:col-span-2 xl:col-span-1">
      <div className="flex h-20 w-full flex-row items-center justify-between">
        <h2 className="rounded-xl bg-gray-200 text-lg text-black">
          dfgdfgdfdfdf! dff{" "}
        </h2>
        <div className="w-14 rounded-2xl bg-gray-200 text-black">dddd</div>
      </div>

      <div className="prose-pi:font-light prose rounded-xl !font-light prose-headings:font-extralight prose-p:text-xs prose-li:text-xs prose-li:font-light prose-li:marker:text-black">
        {range(5).map((skeletonText) => (
          <p key={skeletonText} className="rounded-xl bg-gray-200 text-black">
            Bla bla bla bla bla
          </p>
        ))}
      </div>
    </div>
  );
};

export default SkillSkeleton;
