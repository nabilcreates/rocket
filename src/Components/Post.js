import React from 'react'

export default function Post(props){
    let post = props.post
    console.log(post)
    return(
        <div id='post'>

            <p id='subreddit' >{post.subreddit}</p>
            <h2 id='title'>{post.title}</h2>
            <p id='text' >{post.selftext}</p>

            <p id='author' >
                by {post.author}
            </p>
            
            <div id='info'>
                <p id='upvotes' >
                    <i class="fa fa-arrow-up" aria-hidden="true"></i> {post.ups}
                </p>

                <p id='downvotes' >
                    <i class="fa fa-arrow-down" aria-hidden="true"></i> {post.downs}
                </p>

                <p id='comments' >
                    <i class="fa fa-comment" aria-hidden="true"></i> {post.num_comments}
                </p>
            </div>
        </div>
    )
}