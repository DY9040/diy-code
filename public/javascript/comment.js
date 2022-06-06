async function commentFormHandler(event) {
    event.preventDefault();

    const comment_txt = document.querySelector('textarea[name="comment-body"]').value.trim();

    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    if (comment_txt) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({
                post_id,
                comment_txt
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            window.location.reload();
        } else {
            alert('response.statusText');
        }
    }
}

document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);