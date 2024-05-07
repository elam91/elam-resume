import { useQuery } from "@tanstack/react-query";
import django from "../apiClient/django/HttpClient";
import npoint from "../apiClient/django/npoint/npoint";

const useGetSkills = () => {
  const { data, ...query } = useQuery({
    queryKey: ["skills"],
    queryFn: async () => {
      const res = import.meta.env.VITE_SAVER_MODE
        ? await npoint.get("d09d6a3cae4901e24e05")
        : await django.skills.skillsList();

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
