import useGetSkills from "../apiHooks/useGetSkills";
import { Skill } from "../apiClient/django/Api";

const Skills = () => {
  const { data, isFetching } = useGetSkills();

  return (
    <div className="grid grid-cols-3 w-full min-w-full flex-wrap justify-between gap-4 pb-5 ">
      {data.results?.map((skill: Skill) => (
        <div
          key={skill.id}
          className=" px-4 col-span-3 lg:col-span-1  pb-6  text-ellipsis overflow-hidden  bg-white  bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-40 border border-gray-500 min-h-full rounded-xl   max-w-none"
        >
          <div className="w-full flex flex-row justify-between items-center h-20">
            <h2 className="text-lg text-black">{skill.name}</h2>
            <img
              className="rounded-2xl w-14"
              src={
                skill.image
                  ? skill.image
                  : "https://res.cloudinary.com/dgfu9yjis/image/upload/v1702067864/samples/dessert-on-a-plate.jpg"
              }
            ></img>
          </div>

          <div
            className=" prose text-gray-800 !font-light prose-p:text-xs prose-li:text-xs prose-pi:font-light prose-li:font-light prose-headings:font-extralight  prose-li:marker:text-black"
            dangerouslySetInnerHTML={{ __html: skill.description || "" }}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
