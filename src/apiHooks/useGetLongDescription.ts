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
      body: "",
      page: PageEnum.INTRO,
      image: null,
    },
    initialData: {
      id: 0,
      body: "",
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
