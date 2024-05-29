
import PostCard from "../component/Post";
import {useGetPosts} from "src/hooks/useGetPosts";
import {useGetComments} from "src/hooks/useGetComments";
import {useGetUser} from "src/hooks/useGetUsers";
import {useEffect, useState} from "react";

const TimeLine = () => {
    const [stortedPosts,setStortedPosts]=useState([])
    const {data}=useGetPosts()
    const {data:comments}=useGetComments()
    const {data:users}=useGetUser()
    const usersMap = users?.data?.reduce((acc, user) => {
        acc[user.id] = user;
        return acc;
    }, {});

    const getCommentsForPost=(postId)=>{
      return comments?.data?.filter(comment => comment.postId === postId)
    }
    useEffect(() => {
        if(data){
            const tempPosts=data?.data?.sort((a, b) => b.id - a.id)
            setStortedPosts(tempPosts)
        }
    }, [data?.data]);
    return (
        <>
            <h1 className="text-4xl font-bold py-2">
                Timeline
            </h1>
            <div className="grid gap-4 py-2">
                {stortedPosts?.map((post) => (
                    <PostCard getCommentsForPost={getCommentsForPost} key={post.id} post={post} user={usersMap[post.userId]} />
                ))}

            </div>

        </>
    );
};

export default TimeLine;
