import React from 'react'

const CommentCard = ({ comment }) => {
    const { content, datetime, email, name } = comment

    return (
        <div>{content}</div>
    )
}

export default CommentCard
