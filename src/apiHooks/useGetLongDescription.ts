import { useQuery } from "@tanstack/react-query";
import django from "../apiClient/django/HttpClient";
import { PageEnum } from "../apiClient/django/Api";

const useGetLongDescription = ({ page }: { page: PageEnum }) => {
  const { data, ...query } = useQuery({
    queryKey: ["LongDescription", page],
    queryFn: async () => {
      const res = await django.longDescriptions.longDescriptionsRetrieve(page);
      return res.data;
    },
    placeholderData: {
      id: 0,
      body: `<h1>Hello!</h1> <p>My name is Elam, and I am a full-stack developer with 3+ years of experience. Specializing in React.js (javascript or typescript) in the frontend and Django (Python) in the backend.</p> <p>I am passionate about building real solutions to real people's real problems through code, and strive to learn and grow while writing clean, efficient and well tested code. I am a team player that also knows to take on individual challenges and a self-learner when needed.<br />I love problem solving, delivering results at a quick pace, and helping turn designs and ideas into real products and services.</p> <p>I've taken on big projects building backend and frontend apps from the ground up. And handled complex design needs, as well as backend logic that goes beyond simple REST practices.</p> <p>Feel free to contact me for new opportunities and challenges.</p> <div> <div class="pvs-list__outer-container"> <div class="artdeco-card full-width overflow-hidden display-flex flex-column"> <div class="qTlUOsyCvIdqJNkCTjouDRnnCpJITFWR pvs-entity--padded NJLZBTnsswGLhDTOrdIMQaYfdintuGYY " data-view-name="profile-component-entity"> <div class="display-flex flex-column full-width align-self-center"> <div class="display-flex flex-row justify-space-between"> <div class=" display-flex flex-column full-width"> <div class="display-flex flex-wrap align-items-center full-height"> <div class="display-flex "> <div class=" display-flex full-width"> <div class="display-flex align-items-center mr1 t-bold">&nbsp;</div> </div> </div> </div> </div> </div> </div> </div> </div> </div> </div>`,
      page: PageEnum.INTRO,
      image: null,
    },
    initialData: {
      id: 0,
      body: `<h1>Hello!</h1> <p>My name is Elam, and I am a full-stack developer with 3+ years of experience. Specializing in React.js (javascript or typescript) in the frontend and Django (Python) in the backend.</p> <p>I am passionate about building real solutions to real people's real problems through code, and strive to learn and grow while writing clean, efficient and well tested code. I am a team player that also knows to take on individual challenges and a self-learner when needed.<br />I love problem solving, delivering results at a quick pace, and helping turn designs and ideas into real products and services.</p> <p>I've taken on big projects building backend and frontend apps from the ground up. And handled complex design needs, as well as backend logic that goes beyond simple REST practices.</p> <p>Feel free to contact me for new opportunities and challenges.</p> <div> <div class="pvs-list__outer-container"> <div class="artdeco-card full-width overflow-hidden display-flex flex-column"> <div class="qTlUOsyCvIdqJNkCTjouDRnnCpJITFWR pvs-entity--padded NJLZBTnsswGLhDTOrdIMQaYfdintuGYY " data-view-name="profile-component-entity"> <div class="display-flex flex-column full-width align-self-center"> <div class="display-flex flex-row justify-space-between"> <div class=" display-flex flex-column full-width"> <div class="display-flex flex-wrap align-items-center full-height"> <div class="display-flex "> <div class=" display-flex full-width"> <div class="display-flex align-items-center mr1 t-bold">&nbsp;</div> </div> </div> </div> </div> </div> </div> </div> </div> </div> </div>`,
      page: PageEnum.INTRO,
      image: null,
    },
  });

  return {
    data,
    ...query,
  };
};
export default useGetLongDescription;
