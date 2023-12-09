import useGetSkills from "../apiHooks/useGetSkills";
import { Skill } from "../apiClient/django/Api";

const Skills = () => {
  const { data, isFetching } = useGetSkills();
  console.log(data);
  return (
    <div className="flex w-full min-w-full h-full flex-wrap justify-between gap-4">
      {data.results?.map((skill: Skill) => (
        <div key={skill.id} className="nm-flat-white rounded-xl p-6 w-[]">
          <h2 className="text-2xl">{skill.name}</h2>
          <div
            className="prose text-left text-sm"
            dangerouslySetInnerHTML={{ __html: skill.description || "" }}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
