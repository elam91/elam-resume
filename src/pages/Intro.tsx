import { PageEnum } from "../apiClient/django/Api";
import useGetLongDescription from "../apiHooks/useGetLongDescription";
import Signature from "../components/Signature";

const Intro = () => {
  const { data, isFetching } = useGetLongDescription({ page: PageEnum.INTRO });
  return (
    <div className="w-full h-full relative bg-white  bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-40 border border-gray-500 min-h-full rounded-xl flex flex-col">
      {isFetching || !data ? (
        <div className="animate-pulse w-full h-full flex justify-center mt-10">
          <p className="text-5xl ">Loading...</p>
        </div>
      ) : (
        <div>
          <div
            className="p-5  prose text-gray-800 lg:prose-xl font-light prose-headings:font-extralight prose-li:marker:text-black  max-w-none"
            dangerouslySetInnerHTML={{ __html: data?.body || "" }}
          ></div>
          <div className="w-full  flex-row justify-end hidden lg:flex  lg:relative lg:px-20 items-end lg:items-end h-12 lg:h-56">
            <Signature />
          </div>
        </div>
      )}
    </div>
  );
};

export default Intro;
