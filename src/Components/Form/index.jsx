import React, { useState } from 'react'
import moment from 'moment';

import "./styles.css"

const Form = () => {

    const [content, setContent] = useState("")
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")

    const handleSubmit = e => {
        e.preventDefault('/api/create', {
            method: "POST",
            body: JSON.stringify({
                content,
                datetime: moment(),
                email,
                name
            })
        })
        fetch()
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" onChange={e => setName(e.target.value)} value={name} required />
                <input type="email" placeholder="E-mail" onChange={e => setEmail(e.target.value)} value={email} required />
                <textarea name="content" cols="30" rows="10" placeholder="Comment here..." onChange={e => setContent(e.target.value)} value={content} required />
                <input type="submit" />
            </form>
        </>
    )
}

export default Form
