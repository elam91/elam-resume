import { PageEnum } from "../apiClient/django/Api";
import useGetLongDescription from "../apiHooks/useGetLongDescription";
import Signature from "../components/Signature";

const Intro = () => {
  const { data, isFetching } = useGetLongDescription({ page: PageEnum.INTRO });
  return (
    <div className="min-h-full max-h-none w-full relative bg-white  bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-40  rounded-xl flex flex-col justify-start">
      {!data ? (
        <div className="animate-pulse w-full h-full flex justify-center mt-10">
          <p className="text-5xl ">Loading...</p>
        </div>
      ) : (
        <div className="flex flex-col h-full">
          <div
            className="p-5 min-h-max  prose lg:prose-sm prose-base xl:prose-base text-gray-800  font-light prose-headings:font-extralight prose-li:marker:text-black  max-w-none"
            dangerouslySetInnerHTML={{ __html: data?.body || "" }}
          ></div>
          <div className="w-full md:flex flex-row justify-end hidden  p-0 pb-4 pr-4 h-44 items-end">
            <Signature />
          </div>
        </div>
      )}
    </div>
  );
};

export default Intro;
