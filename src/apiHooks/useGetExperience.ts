import { useQuery } from "@tanstack/react-query";
import django from "../apiClient/django/HttpClient";
import { ExperienceTypeEnum } from "../apiClient/django/Api";

const useGetExperience = () => {
  const { data, ...query } = useQuery({
    queryKey: ["experience"],
    queryFn: async () => {
      const [workRes, eduRes] = await Promise.all([
        django.experiences.experiencesList({
          experienceType: ExperienceTypeEnum.WORK,
        }),
        django.experiences.experiencesList({
          experienceType: ExperienceTypeEnum.EDU,
        }),
      ]);

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
