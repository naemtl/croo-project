import React, { useState } from 'react'
import moment from 'moment';

import { createComment, getComments } from "../../services";

import "./styles.css"

const Form = ({ setComments }) => {

    const [content, setContent] = useState("")
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")

    const handleSubmit = e => {
        e.preventDefault()

        const data = {
            content,
            datetime: moment(),
            email,
            name
        }

        createComment(data).then(message => {
            console.log(message)
            setContent("")
            setEmail("")
            setName("")
            getComments().then(data => setComments(data))
        })
    }

    return (
        <div className="form-container">
            <h4 className="form-title">Leave a Comment</h4>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name *" onChange={e => setName(e.target.value)} value={name} maxLength="30" required />
                <input type="email" placeholder="E-mail *" onChange={e => setEmail(e.target.value)} value={email} maxLength="50" required />
                <textarea name="content" cols="30" rows="5" placeholder="Comment here... *" onChange={e => setContent(e.target.value)} value={content} maxLength="500" required />
                <input className="button" type="submit" />
            </form>
        </div>
    )
}

export default Form
