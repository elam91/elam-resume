import clsx from "clsx";
import { Project } from "../../apiClient/django/Api";
import {
  CommandLineIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/outline";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div
      key={project.id}
      className="flex flex-col min-h-0 col-span-3 lg:col-span-2 xl:col-span-1  justify-between px-0  pb-6  text-ellipsis overflow-hidden  bg-white  bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-40  rounded-xl   max-w-none"
    >
      <div>
        <div
          className={clsx({
            "flex  items-start w-full overflow-hidden h-[180px]": true,
          })}
        >
          <img
            className="object-cover h-full w-full rounded-t-xl "
            src={
              project.image
                ? project.image
                : "https://res.cloudinary.com/dgfu9yjis/image/upload/v1702067864/samples/dessert-on-a-plate.jpg"
            }
            alt={project.name}
          />
        </div>
        <div className="px-4 pt-1">
          <h2 className="text-xl text-black">{project.name}</h2>

          <div
            className=" prose text-gray-800 !font-light prose-p:text-xs text-sm lg:text-xs xl:text-sm prose-li:text-xs prose-pi:font-light prose-li:font-light prose-headings:font-extralight  prose-li:marker:text-black"
            dangerouslySetInnerHTML={{ __html: project.description || "" }}
          ></div>
        </div>
      </div>
      <div
        className="w-full flex flex-wrap min-w-full max-w-max gap-x-2 text-xs flex-shrink font-light p-2 px-4 gap-y-2 justify-center  flex-row mt-10"
        id="buttonGroup"
      >
        {project.websiteLink ? (
          <a
            href={project.websiteLink}
            target="_blank"
            className="flex items-center  pr-4 gap-2 flex-row rounded-xl bg-gradient-to-tr from-purple-400 to-violet-200 nm-flat-violet-400-xs p-2  cursor-pointer"
          >
            <div className="flex justify-center items-center nm-flat-violet-400-xs rounded-full h-8 w-8">
              <ComputerDesktopIcon className="h-6 w-6" />
            </div>
            Website
          </a>
        ) : null}
        {project.githubLink ? (
          <a
            href={project.githubLink}
            target="_blank"
            className="flex items-center pr-4  gap-2 flex-row rounded-xl bg-gradient-to-tr from-purple-400 to-violet-200 nm-flat-violet-400-xs p-2  cursor-pointer"
          >
            <div className="flex justify-center items-center nm-flat-violet-400-xs rounded-full h-8 w-8">
              <CommandLineIcon className="h-6 w-6" />
            </div>
            Github
          </a>
        ) : null}
        {project.githubLink2 ? (
          <a
            href={project.githubLink2}
            target="_blank"
            className="flex items-center pr-4  gap-2 flex-row rounded-xl bg-gradient-to-tr from-purple-400 to-violet-200 nm-flat-violet-400-xs p-2  cursor-pointer"
          >
            <div className="flex justify-center items-center nm-flat-violet-400-xs rounded-full h-8 w-8">
              <CommandLineIcon className="h-6 w-6" />
            </div>
            2nd Github
          </a>
        ) : null}
      </div>
    </div>
  );
};

export default ProjectCard;
