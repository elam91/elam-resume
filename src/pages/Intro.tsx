import { PageEnum } from "../apiClient/django/Api";
import useGetLongDescription from "../apiHooks/useGetLongDescription";

const Intro = () => {
  const { data, isFetching } = useGetLongDescription({ page: PageEnum.INTRO });
  return (
    <div className="w-full h-full  bg-white  bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-40 border border-gray-500 min-h-full rounded-xl">
      <div
        className="p-5 prose text-gray-800 lg:prose-xl font-light prose-headings:font-extralight prose-li:marker:text-black  max-w-none"
        dangerouslySetInnerHTML={{ __html: data?.body || "" }}
      ></div>
    </div>
  );
};

export default Intro;
