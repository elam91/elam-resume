import { useQuery } from "@tanstack/react-query";
import django from "../apiClient/django/HttpClient";

const useGetPersonalInfo = () => {
  const { data, ...query } = useQuery({
    queryKey: ["personalInfo"],
    queryFn: async () => {
      const res = await django.personalInfo.personalInfoLatestRetrieve({});
      console.log(res);
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
