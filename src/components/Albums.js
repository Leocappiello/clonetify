import { useEffect, useState } from "react"
import Album from "./Pagination/Album"
import 'animate.css'
import Pagination from "./Pagination/Pagination"

const Albums = ({ library, setLibrary }) => {
    const [albums, setAlbums] = useState([])
    const [loading, setLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)
    const [albumPerPage] = useState(4)

    useEffect(() => {
        setLoading(true)
        fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
            .then((res) => res.json())
            .then(data => setAlbums(data))
        setLoading(false)
    }, [])


    const handleRemoveAlbum = (e) => {
        let newAlbums = albums.filter(elm => (String(elm.id) !== e.target.id))
        setAlbums(newAlbums)
    }

    const handleAddLibrary = (e) => {
        if(!library.includes(albums[e.target.id-1])){
            setLibrary([...library, albums[e.target.id - 1]])
        }
    }


    const indexLastAlbum = currentPage * albumPerPage
    const indexFirstAlbum = indexLastAlbum - albumPerPage
    const currentAlbum = albums.slice(indexFirstAlbum, indexLastAlbum)

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    return (
        <>
            <Album handleAddLibrary={handleAddLibrary} handleRemoveAlbum={handleRemoveAlbum} albums={currentAlbum} loading={loading} />
            <Pagination totalAlbums={albums.length} albumPerPages={albumPerPage} paginate={paginate} currentPage={currentPage}></Pagination>
        </>
    )
}

export default Albums