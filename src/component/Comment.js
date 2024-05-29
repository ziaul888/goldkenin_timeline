import React from 'react';

const Comment = ({comment}) => {
    return (
        <div className="comment mb-4">
            <p className="font-semibold">{comment.name} <span
                className="text-sm text-gray-500">({comment.email})</span></p>
            <p>{comment.body}</p>
        </div>
    );
};

export default Comment;
