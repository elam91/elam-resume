import { useQuery } from "@tanstack/react-query";
import django from "../apiClient/django/HttpClient";

const useGetSkills = () => {
  const { data, ...query } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const res = await django.projects.projectsList();

      return res.data;
    },

    placeholderData: {
      results: [],
      count: 0,
    },
    initialData: {
      results: [],
      count: 0,
    },
  });

  return {
    data,
    ...query,
  };
};
export default useGetSkills;
