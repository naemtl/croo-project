import React from 'react'

import "./styles.css"

const Form = () => {
    return (
        <>
            <form>
                <input type="text" placeholder="Name" required />
                <input type="email" placeholder="E-mail" required />
                <textarea name="comment" cols="30" rows="10" placeholder="Comment here..." required />
                <input type="submit" />
            </form>
        </>
    )
}

export default Form
