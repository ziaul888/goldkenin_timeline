import React, {useState} from 'react';
import Comment from "src/component/Comment";

const PostCard = ({post,user,getCommentsForPost,allComments}) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleExpandClick = () => setIsExpanded(!isExpanded)
    return (
        <div className="rounded-lg shadow-md bg-white overflow-hidden">
            <div className="flex px-6 py-4">
                <div className="ml-3 w-full">
                    <div className="font-bold text-gray-900">{user?.name}</div>
                    <div className="text-gray-700 text-sm">{post?.title}</div>
                </div>
            </div>
            <div className="px-6 py-4">
                <p className="text-gray-700 line-clamp-3">{post?.body}</p>
                <button
                    className=" mt-3 text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    onClick={handleExpandClick}
                >
                    {isExpanded ? 'Collapse' : 'Expand'}
                </button>
            </div>
            {isExpanded && (
                <div className="comments mt-4 pl-4 border-l-2 border-gray-200 p-3">
                    {getCommentsForPost(post.id).map(comment => (
                       <Comment key={comment.id} comment={comment}/>
                    ))}
                </div>
            )}
        </div>

    );
};

export default PostCard;
