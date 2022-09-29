import React, { useState, useEffect } from 'react'
import Items from "./Items";
// import JsonData from './data.json'

function Projects() {
    const [Data, fetchData] = useState([])
    const getData = () => {
        fetch('https://zainabaljifri.github.io/data/data.json')
            .then((res) => res.json())
            .then((res) => {
                // console.log(res)
                fetchData(res)
            })
    }
    useEffect(() => { 
        getData()
    }, [])
    return (
        <div className="container">
            <div className="row d-flex align-items-center justify-content-center">
                {Data.map(info =>
                    <Items key={info.id} name={info.name} description={info.description} url={info.url} />
                )
                }
            </div>
        </div>)
}
export default Projects;