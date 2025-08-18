import { Project } from "../apiClient/django/Api";
import useGetProjects from "../apiHooks/useGetProjects";
import ProjectCard from "../components/Projects/ProjectCard";
import ProjectSkeleton from "../components/Projects/ProjectSkeleton";
import range from "lodash.range";

const Projects = () => {
  const { data, isFetching } = useGetProjects();

  return (
    <div className="grid w-full min-w-full grid-cols-3 justify-between gap-4 pb-5 lg:grid-cols-4 xl:grid-cols-3">
      {isFetching || !data?.results
        ? range(4).map((skelProject) => <ProjectSkeleton key={skelProject} />)
        : data.results?.map((project: Project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
    </div>
  );
};

export default Projects;
