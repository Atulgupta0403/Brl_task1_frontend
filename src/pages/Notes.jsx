import React, { useState } from 'react'
import "../StyleSheet/note.css"
import axios from 'axios'

const notes = () => {

    const [data,setData] = useState({
        noteId : "",
        title : "",
        content : ""
    })

    
    const handleData = (e) => {
        const {name , value} = e.target;
        // console.log(name , " name")
        // console.log(value , " value")
        setData((prevData) => ({...prevData , [name] : value}))
    }

    const sendData = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:3000/api/notes",data)
    }
    
    
    // console.log(data);

    return (
        <div className='note'>
            <div className="container">
                <form action="" onChange={handleData}>
                    <input name="noteId" type="text" placeholder='NoteId' />
                    <input name="title" type="text" placeholder='Title' />
                    <textarea name="content" type="text" placeholder='Content' />
                    <button type='submit' onClick={sendData}>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default notes
