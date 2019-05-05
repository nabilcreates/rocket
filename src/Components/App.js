import React from 'react';
import Header from './Header.js'
import Post from './Post.js'

import '../styles.scss'

/*
COMPONENTS:
Navbar
Header
Posts
*/

export default class App extends React.Component{

    constructor(){
        super();

        this.state = {
            posts: [],
            subreddit: false,
            sort: false,
        }

        this.handleSort = this.handleSort.bind(this)
        this.handleSubreddit = this.handleSubreddit.bind(this)
    }
    
    componentDidMount(){
        this.setState({
            subreddit: 'dadjokes',
            sort: 'new',
        })

        setTimeout(() => {
            this.getSubreddit(this.state.subreddit, this.state.sort)
        }, 1);
    }
    
    getSubreddit(subreddit, sort){
        fetch(`https://www.reddit.com/r/${subreddit}/${sort}.json`)
        .then(r => r.json())
        .then(d => {
            let posts = d.data.children
            this.setState({
                posts: posts
            })
        })
    }

    handleSort(e){
        this.setState({
            sort: e.target.value,
        })

        setTimeout(() => {
            this.getSubreddit(this.state.subreddit, this.state.sort)
        }, 1);
    }

    handleSubreddit(e){
        this.setState({
            subreddit: e.target.value
        })

        setTimeout(() => {
            this.getSubreddit(this.state.subreddit, this.state.sort)
        }, 1);
    }
    
    render(){
        console.log(this.state)
        return(
            <div>
                <Header handleSort={this.handleSort} handleSubreddit={this.handleSubreddit} subreddit={this.state.subreddit} />
                
                {this.state.posts !== [] ? this.state.posts.map(post => {
                    let post_data = post.data
                    return(
                        <Post post={post_data} />
                    )
                }) : null}
            </div>
        )
    }
}