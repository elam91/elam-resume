import clsx from "clsx";
import { Project } from "../../apiClient/django/Api";
import {
  CommandLineIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/outline";
import GlassCard from "../glass-card/glass-card";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <GlassCard className="col-span-3 lg:col-span-2 xl:col-span-1">
      <div
        key={project.id}
        className="z-10 col-span-3 flex h-full min-h-0 max-w-none flex-col justify-between overflow-hidden text-ellipsis rounded-xl px-0 pb-6 lg:col-span-2 xl:col-span-1"
      >
        <div>
          <div
            className={clsx({
              "flex h-[180px] w-full items-start overflow-hidden": true,
            })}
          >
            <img
              className="h-full w-full rounded-t-[30px] object-cover"
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
              className="prose-pi:font-light prose text-sm !font-light text-black prose-headings:font-extralight prose-p:text-xs prose-li:text-xs prose-li:font-light prose-li:marker:text-black lg:text-xs xl:text-sm"
              dangerouslySetInnerHTML={{ __html: project.description || "" }}
            ></div>
          </div>
        </div>
        <div
          className="mt-10 flex w-full min-w-full max-w-max flex-shrink flex-row flex-wrap justify-center gap-x-2 gap-y-2 p-2 px-4 text-xs font-light"
          id="buttonGroup"
        >
          {project.websiteLink ? (
            <a
              href={project.websiteLink}
              target="_blank"
              className="flex cursor-pointer flex-row items-center gap-2 rounded-xl bg-gradient-to-tr from-purple-400 to-violet-200 p-2 pr-4 nm-flat-violet-400-xs"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full nm-flat-violet-400-xs">
                <ComputerDesktopIcon className="h-6 w-6" />
              </div>
              Website
            </a>
          ) : null}
          {project.githubLink ? (
            <a
              href={project.githubLink}
              target="_blank"
              className="flex cursor-pointer flex-row items-center gap-2 rounded-xl bg-gradient-to-tr from-purple-400 to-violet-200 p-2 pr-4 nm-flat-violet-400-xs"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full nm-flat-violet-400-xs">
                <CommandLineIcon className="h-6 w-6" />
              </div>
              Github
            </a>
          ) : null}
          {project.githubLink2 ? (
            <a
              href={project.githubLink2}
              target="_blank"
              className="flex cursor-pointer flex-row items-center gap-2 rounded-xl bg-gradient-to-tr from-purple-400 to-violet-200 p-2 pr-4 nm-flat-violet-400-xs"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full nm-flat-violet-400-xs">
                <CommandLineIcon className="h-6 w-6" />
              </div>
              2nd Github
            </a>
          ) : null}
        </div>
      </div>
    </GlassCard>
  );
};

export default ProjectCard;
