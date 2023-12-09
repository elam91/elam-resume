import { useQuery } from "@tanstack/react-query";
import django from "../apiClient/django/HttpClient";

const useGetSkills = () => {
  const { data, ...query } = useQuery({
    queryKey: ["skills"],
    queryFn: async () => {
      const res = await django.skills.skillsList();

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
