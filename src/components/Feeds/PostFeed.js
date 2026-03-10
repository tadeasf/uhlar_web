import React from "react"
import PostItem from "../Post/PostItem"
import useAllPost from "../../hooks/use-all-blog-post"

const PostFeed = () => {
  const allPost = useAllPost()
  return (
    <>
      {allPost.map((node, index) => (
        <PostItem key={index} node={node} />
      ))}
    </>
  )
}

export default PostFeed
