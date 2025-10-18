import { useEffect, useState } from "react"

export default function Albums(){

    const [albums, setAlbums]=useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/albums')
        .then(res=>res.json())
        .then(data=>setAlbums(data))
    }, [])

    return(
        <div>
            <h3>Albums: {albums.length}</h3>
        </div>
    )
}