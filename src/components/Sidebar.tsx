import clsx from "clsx";
import useGetPersonalInfo from "../apiHooks/useGetPersonalInfo";
import { differenceInYears, format } from "date-fns";
import useGetSocials from "../apiHooks/useGetSocials";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";

const Sidebar = () => {
  const { data, isFetching } = useGetPersonalInfo();
  const { data: socialsData, isFetching: socialsIsFetching } = useGetSocials();
  return (
    <aside
      id="sidebar"
      className={clsx({
        "hidden lg:fixed w-96 lg:mt-16  top-0 left-0 z-10 lg:flex flex-col  text-base whitespace-nowrap items-center justify-center  h-screen min-h-screen overflow-hidden":
          true,
      })}
    >
      <div className="py-32  px-10  bg-white  bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-500  rounded-xl flex flex-col justify-start items-center gap-y-10">
        <div className="flex flex-col items-center">
          <h1 className="text-5xl font-extralight">{`${data.firstName} ${data.lastName}`}</h1>
          <h2 className="text-base">{data.title}</h2>
          <h3>{`${differenceInYears(
            new Date(),
            new Date(data.birthdate)
          )} years old`}</h3>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-sm">
            Date of birth: {format(new Date(data.birthdate), "MMMM do y")}
          </p>
          <p className="text-sm">Current residence: {data.residence}</p>
        </div>
        <div className="w-full">
          <h2 className="text-lg font-semibold">Contact me:</h2>
          <div className="flex flex-col justify-center text-sm gap-y-2">
            <a
              href={`mailto:${data.email}`}
              className="flex flex-row items-center justify-start gap-x-2 w-full"
            >
              <EnvelopeIcon className="text-black h-5 w-5" />
              <p className="hover:underline">{data.email}</p>
            </a>
            <a
              href={`tel:${data.phoneNumber}`}
              className="flex flex-row items-center justify-start gap-x-2 w-full"
            >
              <PhoneIcon className="text-black h-5 w-5" />
              <p className="hover:underline">{data.phoneNumber}</p>
            </a>
            {socialsData?.results
              ? socialsData.results.map((social) => (
                  <a
                    key={social.id}
                    href={social.url}
                    className="flex flex-row items-center justify-start gap-x-2 w-full"
                  >
                    <img className="h-5 w-5" src={social?.icon || undefined} />
                    <p className="hover:underline">{social.name}</p>
                  </a>
                ))
              : null}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
