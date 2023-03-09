import React from 'react'

const PostCard = ({ post }) => {
  return (
    <div>
        {post.title}
        <hr />
        {post.excerpt}
    </div>
  )
}

export default PostCard