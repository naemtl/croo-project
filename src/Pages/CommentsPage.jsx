import React, { useEffect, useState } from 'react'
import CommentCard from "../Components/CommentCard";
import Form from "../Components/Form";

import "./styles.css"

const CommentsPage = () => {

    const [comments, setComments] = useState([])

    useEffect(() => {
        try {
            fetch('/api').then(response => {
                if (response.ok) {
                    return response.json()
                }
            }).then(data => setComments(data))
        } catch (error) {
            console.error(error)
        }

    }, [])

    return (
        <div className="comments-page">
            <div className="comments-list">
                {comments.map(comment => <CommentCard comment={comment} key={comment.id} />)}
            </div>
            <div className="comments-form">
                <Form />
            </div>
        </div>
    )
}

export default CommentsPage
