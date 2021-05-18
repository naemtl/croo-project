import React, { useEffect, useState } from 'react'
import CommentCard from "../Components/CommentCard";

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
        <div>
            {comments.map(comment => <CommentCard comment={comment} key={comment.id} />)}
        </div>
    )
}

export default CommentsPage
