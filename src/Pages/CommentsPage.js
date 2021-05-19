import React, { useEffect, useState } from 'react'
import CommentCard from "../Components/CommentCard";
import Form from "../Components/Form";

import { getComments } from "../services";
import "./styles.css"

const CommentsPage = () => {

    const [comments, setComments] = useState([])

    useEffect(() => {
        setInterval(() => {
            getComments().then(data => setComments(data))
        }, 1000);
    }, [])

    return (
        <div className="comments-page-container">
            <div className="comments-page-content">
                <h4>Comments</h4>
                <div className="comments-list">
                    {comments && comments.length > 1 ? comments.map(comment => <CommentCard comment={comment} key={comment.id} />) : "Loading..."}
                </div>
                <div className="comments-form">
                    <Form setComments={setComments} />
                </div>
            </div>
        </div>
    )
}

export default CommentsPage
