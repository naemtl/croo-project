export function getComments() {
    try {
        return fetch('/comments').then(response => {
            if (response.ok) {
                return response.json()
            }
        })
    } catch (error) {
        console.error(error)
    }
}

export function createComment(data) {
    try {
        return fetch('/comments/create', {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(response => response.json())
    } catch (error) {
        console.error(error)
    }
}