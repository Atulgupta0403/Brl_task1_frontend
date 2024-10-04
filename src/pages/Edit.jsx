import React from 'react'
import "../StyleSheet/edit.css"
import axios from 'axios';
const Edit = () => {

    ( async () => {
        await axios.get("http://localhost:3000/api/edit")
        .then((data) => {
            console.log(data)
        })
        .catch((err) => {
            console.log("errorrrrrrrrr on edit wala is ", err)
        })
    })();

  return (
    <div className='edit_main'>
      <form action="">
        <input type="text" name='title' placeholder='title' defaultValue="title aayega backend se" />
        <textarea name="content" placeholder='Content' defaultValue="content aayega backend se "></textarea>
        <button className='update' ><a href="/">Update</a></button>
      </form>

    </div>
  )
}

export default Edit
