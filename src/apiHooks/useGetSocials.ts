import { useQuery } from "@tanstack/react-query";
import django from "../apiClient/django/HttpClient";

const useGetSocials = () => {
  const { data, ...query } = useQuery({
    queryKey: ["socials"],
    queryFn: async () => {
      const res = await django.socials.socialsList();

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
