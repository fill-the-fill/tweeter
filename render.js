  
const Renderer = function () {
    const renderPosts = function (posts) {
        $("#posts").empty();
        for (let post of posts) {
            const newPost = $(
                `<div data-id="${post.id}" class="post"><p class="post-text">${post.text}</p></div>`
            );
            for (let comment of post.comments) {
                const newComment = $(
                    `<div data-id="${comment.id}"class="comments"><span class=delete-comment>x</span>${comment.text}</div>`
                );
                $(newPost).append(newComment);
            }
            const activeCommentDiv = $(
                `<div class="add-comment"><input type="text" placeholder="Say something!"/><button>Comment</button>`
            );
            $(newPost).append(activeCommentDiv);
            const delButton = $(`<div class="delete">Delete Post</div>`);
            $(newPost).append(delButton);
            $("#posts").append(newPost);
        }
    };
    return { renderPosts };
};