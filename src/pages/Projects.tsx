import { Project } from "../apiClient/django/Api";
import useGetProjects from "../apiHooks/useGetProjects";
import ProjectCard from "../components/Projects/ProjectCard";

const Projects = () => {
  const { data, isFetching } = useGetProjects();

  return (
    <div className="grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 w-full min-w-full  justify-between gap-4 pb-5">
      {data.results?.map((project: Project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default Projects;
