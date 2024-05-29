import { useQuery } from "react-query";
import MainApi from "../hooks/mainApi";

const getPostsData = async () => {
    return await MainApi.get(`/posts`);
};
export const useGetPosts = () => {
    return useQuery("posts", () => getPostsData(), {
        staleTime: 1000 * 60 * 8,
        cacheTime: 1000 * 60 * 8,
    });
};