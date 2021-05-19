import React from 'react'

import "./styles.css"

const CommentCard = ({ comment }) => {
    const { content, datetime, email, name } = comment

    return (
        <div>{content}</div>
    )
}

export default CommentCard
