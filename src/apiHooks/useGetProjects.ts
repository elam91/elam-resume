import { useQuery } from "@tanstack/react-query";
import django from "../apiClient/django/HttpClient";
import npoint from "../apiClient/django/npoint/npoint";

const useGetSkills = () => {
  const { data, ...query } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const res = import.meta.env.VITE_SAVER_MODE
        ? await npoint.get("785aaebc704f508c6a23")
        : await django.projects.projectsList();

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
