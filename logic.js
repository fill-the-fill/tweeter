const Tweeter = function () {

  let postIdCounter = 2
  let commentIdCounter = 6

  let posts = [
      {
          text: "First post!",
          id: "p1",
          comments: [
              { id: "c1", text: "First comment on first post!" },
              { id: "c2", text: "Second comment on first post!!" },
              { id: "c3", text: "Third comment on first post!!!" }
          ]
      },
      {
          text: "Aw man, I wanted to be first",
          id: "p2",
          comments: [
              { id: "c4", text: "Don't wory second poster, you'll be first one day." },
              { id: "c5", text: "Yeah, believe in yourself!" },
              { id: "c6", text: "Haha second place what a joke." }
          ]
      }
  ]
  const getPosts = function () { return posts }


  const addPost = function (text) {
      postIdCounter++
      let post = {
          text,
          id: `p` + postIdCounter,
          comments: []
      }
      posts.push(post)
  }


  const removePost = function (postID) {
      for (let i in posts) {
          if (posts[i].id === postID) {
              posts.splice(i, 1)
              return
          }
      }
  }

  const addComment = (text, postID) => {
      for (let i in posts) {
          if (posts[i].id === postID) {
              commentIdCounter++
              posts[i].comments.push({
                  id: 'c' + commentIdCounter,
                  text: text
              })
          }

      }
  }


  const removeComment = function (postID, commentID) {
      for (let post of posts) {
          if (post.id == postID) {
              const commentsArray = post.comments
              for (let i in commentsArray) {
                  if (commentsArray[i].id == commentID) {
                      commentsArray.splice(i, 1)
                      return
                  }
              }
          }

      }
  }



  return {
      getPosts,
      addPost,
      removePost,
      addComment,
      removeComment
  }
}