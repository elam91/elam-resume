import clsx from "clsx";
import useGetPersonalInfo from "../apiHooks/useGetPersonalInfo";
import { differenceInYears, format } from "date-fns";
import useGetSocials from "../apiHooks/useGetSocials";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import GlassCard from "./glass-card/glass-card";

const Sidebar = ({ asPage }: { asPage?: boolean }) => {
  const { data, isFetching } = useGetPersonalInfo();
  const { data: socialsData, isFetching: socialsIsFetching } = useGetSocials();
  return (
    <aside
      id="sidebar"
      className={clsx({
        "left-0 top-0 z-10 min-h-[100dvh] w-96 flex-col items-center overflow-hidden whitespace-nowrap text-base md:pr-4 lg:mt-16": true,
        "top-8 hidden justify-start lg:fixed lg:flex": !asPage,
        "right-1/2 top-1/2 flex h-full w-full justify-start": asPage,
      })}
    >
      <GlassCard>
        <div
          className={clsx(
            "z-10 flex flex-col items-center justify-start gap-y-10 rounded-xl bg-clip-padding px-10",
            asPage
              ? "pb-24 pt-10"
              : "-mt-5 h-full flex-grow-0 rounded-none py-10",
          )}
        >
          <div className="flex flex-col items-center">
            <h1 className="text-5xl font-extralight">{`${data.firstName} ${data.lastName}`}</h1>
            <h2 className="text-base">{data.title}</h2>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-sm">
              Date of birth: {format(new Date(data.birthdate), "MMMM do y")}
            </p>
            <p className="text-sm">Current residence: {data.residence}</p>
          </div>
          <div className="w-full">
            <h2 className="text-lg font-semibold">Contact me:</h2>
            <div className="flex flex-col justify-center gap-y-2 text-sm">
              <a
                href={`mailto:${data.email}`}
                className="flex w-full flex-row items-center justify-start gap-x-2"
              >
                <EnvelopeIcon className="h-5 w-5 text-black" />
                <p className="hover:underline">{data.email}</p>
              </a>
              <a
                href={`tel:${data.phoneNumber}`}
                className="flex w-full flex-row items-center justify-start gap-x-2"
              >
                <PhoneIcon className="h-5 w-5 text-black" />
                <p className="hover:underline">{data.phoneNumber}</p>
              </a>
              {socialsData?.results
                ? socialsData.results.map((social) => (
                    <a
                      key={social.id}
                      href={social.url}
                      className="flex w-full flex-row items-center justify-start gap-x-2"
                    >
                      <img
                        className="h-5 w-5"
                        src={social?.icon || undefined}
                      />
                      <p className="hover:underline">{social.name}</p>
                    </a>
                  ))
                : null}
            </div>
          </div>
        </div>
      </GlassCard>
    </aside>
  );
};

export default Sidebar;
