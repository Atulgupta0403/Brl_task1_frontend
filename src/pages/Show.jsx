import React, { useState, useSyncExternalStore } from 'react'
import axios from 'axios'
import "../StyleSheet/show.css"


const Show = () => {

    const [allData, setAllData] = useState([])

    const getData = async () => {
        await axios.get("http://localhost:3000/api/notes")
            .then((res) => {
                setAllData([res.data]);
                // console.log(res.data)
            })
            .catch((err) => {
                console.log("error is ", err)
            })
    }
    // allData.map((e) => {
    //     e.map((elem) => {
    //         console.log(elem)
    //     })
    // })
    // // getData();


    return (
        <div className='show_main'>
            <button className='show_button' onClick={() => (getData())}>GetData</button>
            <div className="show_container">
                {allData.map((e) => {
                    return e.map((elem) => {
                        return <div className="show_card" key={elem.noteId}>
                            <h3>{elem.title}</h3>
                            <p>{elem.content}</p>
                        </div>
                    })
                })}


            </div>

        </div>
    )
}

export default Show
