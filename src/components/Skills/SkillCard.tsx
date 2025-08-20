import { Skill } from "../../apiClient/django/Api";
import GlassCard from "../glass-card/glass-card";

const SkillsCard = ({ skill }: { skill: Skill }) => {
  return (
    <GlassCard className="col-span-3 md:col-span-2 lg:col-span-2 xl:col-span-2 2xl:col-span-1">
      <div className="z-10 min-h-full w-full max-w-none overflow-hidden text-ellipsis rounded-xl px-4 pb-6">
        <div className="flex h-20 w-full flex-row items-center justify-between">
          <h2 className="text-lg text-black">{skill.name}</h2>
          {skill.image ? (
            <img
              className="w-14 rounded-2xl"
              src={skill.image ? skill.image : ""}
            ></img>
          ) : null}
        </div>

        <div
          className="prose-pi:font-light prose !font-light text-black prose-headings:font-extralight prose-p:text-xs prose-li:text-xs prose-li:font-light prose-li:marker:text-black"
          dangerouslySetInnerHTML={{ __html: skill.description || "" }}
        ></div>
      </div>
    </GlassCard>
  );
};

export default SkillsCard;
