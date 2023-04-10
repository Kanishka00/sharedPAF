import React from 'react'
import Post from '../Components/Post'

function Feed() {
  return (
    <>
    <div style={{textAlign : "center",fontSize : '40px',fontWeight : '500'}}>Feed</div>
        <div style={{display : 'block',backgroundColor:'white',padding:20,backgroundColor:'#e5f1fb'}}>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    </>
  )
}

export default Feed