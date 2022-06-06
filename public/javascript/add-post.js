async function newestFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input [name="post-title"]').value;
    const post_body = document.querySelector('input [name="post-body"]').value;

    const response = await fetch(`/api/posts`, {
        method: 'Post',
        body: JSON.stringify({
            title,
            post_body
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('#newest-form').addEventListener('submit', newestFormHandler);