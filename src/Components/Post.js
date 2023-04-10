import React, { useRef, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import burger from '../Images/img1.jpg'
import user from '../Icons/user.png'
import comment from '../Icons/comment.png'
import share from '../Icons/share.png'
import send from '../Icons/send.png'

import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form'; 
import Heart from 'react-heart';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';



function Post() {

  // const comments = [{text:'This is a sample Commnet'},{text : 'Looks Delecious'},{text:'How much and wht is the location'}]
  const [active, setActive] = useState(false)
  const [follow,setFollow] = useState(false)
  const [comments,setComment] = useState([{text:'This is a sample Commnet'},{text : 'Looks Delecious'},{text:'How much and wht is the location'}])
  const commentText = useRef();

  return (
    <div style={{margin:'15px',display:'flex',justifyContent:'center'}}>
      <div style={{backgroundColor:'white',width:700,border : '5px solid black',borderRadius:18,padding: 10}}>
        <div className='userProfileSection' style={{display:'flex',justifyContent:'space-between',marginTop:10}}>


          <div style={{fontSize:18,display:'flex',alignItems:'center',fontWeight:'700'}}>
            <img src={user} alt = ''/>
            Sample User
          <div>
            <sup style={{color:'blue',marginLeft:10,fontSize:12,fontWeight:'bold',cursor:'pointer'}} onClick={() => setFollow(!follow)}>
              
              {
                follow ? (<text style={{color:'blue',fontStyle : 'italic'}}>following</text>) : (<text style={{color:'Green'}}>follow</text>)
              }
             
              
            </sup>
          </div>
          </div>

          <DropdownButton id="dropdown-basic" variant='Info'>
            <Dropdown.Item >Delete</Dropdown.Item>
            <Dropdown.Item >Edit</Dropdown.Item>
          </DropdownButton>


        </div>


        <hr style={{marginTop:0}}></hr>
        <p style={{fontWeight:'500'}}>Try out this burger for just 450/= 🔥🔥😍😍</p>
        <hr style={{marginTop:0}}></hr>
        <div className='ImageSection' style={{display:'flex',justifyContent:'center'}}>
          <img src={burger} alt = '' width={500} style={{borderRadius:20}}/>
        </div>
        <hr style={{marginTop:10}}></hr>
        <div className='comment section' style={{display : 'block'}}>
          <div style={{display : 'flex',justifyContent:'space-evenly'}}>

              <div style={{display:'flex',marginBottom:20}}>

              <div style={{width : 20,marginLeft:10}}>
                <Heart isActive={active} onClick={() => setActive(!active)}/>
              </div>
                <div style={{marginLeft:10,cursor:'pointer'}} onClick={() => setActive(!active)}>
                  Like
                </div>
              </div>

              <div style={{cursor:'pointer'}}>
                <img src = {comment} alt = '' style={{width : 30,cursor:'pointer',marginRight:10}}/>
                Comment
              </div>
              <div style={{cursor:'pointer'}}>
              <img src = {share} alt = '' style={{width : 25,marginLeft:10,cursor:'pointer',marginRight:10}}/>
                Share
              </div>
          </div>

            <div className='commentInput' style={{display:'block'}}>

            <InputGroup size="sm" className="mb-3">
              <Form.Control
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
                placeholder='Write your comment...'
                ref = {commentText}
                name = {commentText}
              />

              <Button variant='warning' style={{marginLeft:10}} onClick={()=>setComment(OldComments =>[...OldComments,{text:commentText.current.value}])}><img src={send} alt = '' width={20} style={{borderRadius:30}}/></Button>
            </InputGroup>
            {comments.map((e,i)=>(

              
              <div className='commentTxts' style={{margin:15,backgroundColor:'beige',padding:7,borderRadius:20}}>
              <div style={{display:'flex',justifyContent:'space-between'}}>
                <div style={{fontSize : 15,fontStyle:'italic'}}>
                  {e.text}
                </div>
                <div>
                  <text style={{color:'gray',marginLeft:10,fontSize:12,fontWeight:'bold'}}>Edit</text>
                  <text style={{color:'red',marginLeft:10,fontSize:12,fontWeight:'bold'}}>Delete</text>
                </div>
              </div>
            </div>
              ))}
            </div>

        </div>
      </div>
    </div>
  )
}

export default Post