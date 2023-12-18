import useGetSkills from "../apiHooks/useGetSkills";
import { Skill } from "../apiClient/django/Api";
import SkillCard from "../components/Skills/SkillCard";
import SkillSkeleton from "../components/Skills/SkillSkeleton";
import range from "lodash.range";

const Skills = () => {
  const { data, isFetching } = useGetSkills();

  return (
    <div className="grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 w-full min-w-full flex-wrap justify-between gap-4 pb-5 transition-transform ">
      {!data.results || isFetching
        ? range(9).map((skeletonSkill) => <SkillSkeleton key={skeletonSkill} />)
        : data.results?.map((skill: Skill) => (
            <SkillCard skill={skill} key={skill.id} />
          ))}
    </div>
  );
};

export default Skills;
