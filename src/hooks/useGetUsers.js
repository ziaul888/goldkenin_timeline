import { useQuery } from "react-query";
import MainApi from "../hooks/mainApi";

const getUserData = async () => {
    return await MainApi.get(`/users`);
};
export const useGetUser = () => {
    return useQuery("users", () => getUserData(), {
        staleTime: 1000 * 60 * 8,
        cacheTime: 1000 * 60 * 8,
    });
};