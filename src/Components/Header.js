import React from 'react';

export default function Header(props){
    return(
        <div id='header'>
            <h2 id='title'>
                Rocket
            </h2>

            <p>A fast reddit client (that aims to use less mobile data)</p>

            <div id='subreddit_form'>
                <select onClick={props.handleSort} >
                    <option value="new">New</option>
                    <option value="hot">Hot</option>
                    <option value="top">Top</option>
                </select>

                <input onChange={props.handleSubreddit} value={props.subreddit} ></input>
            </div>
        </div>
    )
}