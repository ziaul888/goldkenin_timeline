import { useQuery } from "react-query";
import MainApi from "../hooks/mainApi";

const getCommentsData = async () => {
    return await MainApi.get(`/comments`);
};
export const useGetComments = () => {
    return useQuery("comments", () => getCommentsData(), {
        staleTime: 1000 * 60 * 8,
        cacheTime: 1000 * 60 * 8,
    });
};