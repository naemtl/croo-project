import React from 'react'
import moment from 'moment';

import "./styles.css"

const CommentCard = ({ comment }) => {
    const { content, datetime, email, name } = comment

    return (
        <div className="comment-card">
            <div className="comment-info">
                <div>{moment(datetime).format("DD MMMM YYYY")}</div>
                <div>By <a href={`mailto:${email}`}>{name}</a></div>
            </div>
            <div className="comment-body">{content}</div>
        </div>
    )
}

export default CommentCard
