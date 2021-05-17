import React, { useEffect, useState } from 'react'
import Card from "../Components/Card";

const CommentsPage = () => {

    const [comment, setComment] = useState([])

    useEffect(() => {
        try {
            fetch('/api').then(response => {
                if (response.ok) {
                    return response.json()
                }
            }).then(data => console.log(data))
        } catch (error) {
            console.error(error)
        }

    }, [])

    return (
        <div>
            <Card />
        </div>
    )
}

export default CommentsPage
