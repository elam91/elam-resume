import { PageEnum } from "../apiClient/django/Api";
import useGetLongDescription from "../apiHooks/useGetLongDescription";
import GlassCard from "../components/glass-card/glass-card";
import Signature from "../components/Signature";

const Intro = () => {
  const { data, isFetching } = useGetLongDescription({ page: PageEnum.INTRO });
  return (
    <GlassCard>
      <div className="relative z-10 flex max-h-none min-h-full w-full flex-col justify-start">
        {!data ? (
          <div className="mt-10 flex h-full w-full animate-pulse justify-center">
            <p className="text-5xl">Loading...</p>
          </div>
        ) : (
          <div className="z-10 flex h-full flex-col">
            <div
              className="prose prose-base min-h-max max-w-none p-5 font-light text-black lg:prose-sm xl:prose-base prose-headings:font-extralight prose-li:marker:text-black"
              dangerouslySetInnerHTML={{ __html: data?.body || "" }}
            ></div>
            <div className="hidden h-44 w-full flex-row items-end justify-end p-0 pb-4 pr-4 md:flex">
              <Signature />
            </div>
          </div>
        )}
      </div>
    </GlassCard>
  );
};

export default Intro;
