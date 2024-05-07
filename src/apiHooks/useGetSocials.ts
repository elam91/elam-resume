import { useQuery } from "@tanstack/react-query";
import django from "../apiClient/django/HttpClient";
import npoint from "../apiClient/django/npoint/npoint";

const useGetSocials = () => {
  const { data, ...query } = useQuery({
    queryKey: ["socials"],
    queryFn: async () => {
      const res = import.meta.env.VITE_SAVER_MODE
        ? await npoint.get("7413a1e3b9ce27533d58")
        : await django.socials.socialsList();

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
export default useGetSocials;
