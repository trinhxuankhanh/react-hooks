import React from 'react';
import PropType from 'prop-types'

const PostList = (props) => {
    const { posts } = props

    return ( 
        <ul>
            {
                posts.map(post => <li key={post.id}>{post.title}</li>)
            }
        </ul>
    );
}

PostList.propType = {
    posts: PropType.array
}

PostList.defaultProps = {
    posts: []
}
 
export default PostList;