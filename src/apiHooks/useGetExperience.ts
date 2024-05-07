import { useQuery } from "@tanstack/react-query";
import django from "../apiClient/django/HttpClient";
import { ExperienceTypeEnum } from "../apiClient/django/Api";
import npoint from "../apiClient/django/npoint/npoint";

const promiseList = import.meta.env.VITE_SAVER_MODE
  ? [npoint.get("6f5e73e0248a8c878a27"), npoint.get("2dd78bd7ad58bc8cc622")]
  : [
      django.experiences.experiencesList({
        experienceType: ExperienceTypeEnum.WORK,
      }),
      django.experiences.experiencesList({
        experienceType: ExperienceTypeEnum.EDU,
      }),
    ];

const useGetExperience = () => {
  const { data, ...query } = useQuery({
    queryKey: ["experience"],
    queryFn: async () => {
      const [workRes, eduRes] = await Promise.all(promiseList);

      return {
        workData: workRes.data.results,
        educationData: eduRes.data.results,
      };
    },

    placeholderData: {
      workData: [],
      educationData: [],
    },
    initialData: {
      workData: [],
      educationData: [],
    },
  });

  return {
    data,
    ...query,
  };
};
export default useGetExperience;
