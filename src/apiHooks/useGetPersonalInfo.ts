import { useQuery } from "@tanstack/react-query";
import django from "../apiClient/django/HttpClient";
import npoint from "../apiClient/django/npoint/npoint";

const useGetPersonalInfo = () => {
  const { data, ...query } = useQuery({
    queryKey: ["personalInfo"],
    queryFn: async () => {
      const res = import.meta.env.VITE_SAVER_MODE
        ? await npoint.get("4fe90a21e6c98d2fd995")
        : await django.personalInfo.personalInfoLatestRetrieve({});

      return res.data;
    },

    placeholderData: {
      id: 0,
      firstName: "Elam",
      lastName: "Buteil",
      phoneNumber: "054-9747361",
      residence: "Haifa, Israel",
      email: "elam91@gmail.com",
      birthdate: "1991-11-05",
      createdAt: "2023-12-09T00:27:15.991673+02:00",
    },
    initialData: {
      id: 0,
      firstName: "Elam",
      lastName: "Buteil",
      phoneNumber: "054-9747361",
      residence: "Haifa, Israel",
      email: "elam91@gmail.com",
      birthdate: "1991-11-05",
      createdAt: "2023-12-09T00:27:15.991673+02:00",
    },
  });

  return {
    data,
    ...query,
  };
};
export default useGetPersonalInfo;
