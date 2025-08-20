import clsx from "clsx";
import { PageEnum } from "../apiClient/django/Api";
import useGetLongDescription from "../apiHooks/useGetLongDescription";
import GlassCard from "../components/glass-card/glass-card";
import Signature from "../components/Signature";

const Intro = () => {
  const { data, isFetching } = useGetLongDescription({ page: PageEnum.INTRO });
  return (
    <div
      className={clsx(
        "scrollbar-hide flex h-screen w-full flex-col justify-start gap-y-2 scroll-auto bg-transparent",
      )}
    >
      <GlassCard className="h-full md:h-full">
        <div className="z-10 flex h-full w-full flex-col justify-start">
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
    </div>
  );
};

export default Intro;
