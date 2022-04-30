import { useEffect } from "react"

const Pagination = ({totalAlbums, albumPerPages, paginate, currentPage}) => {
    const pageNumbers = []

    for(let i = 0; i<Math.ceil(totalAlbums / albumPerPages); i++){
        pageNumbers.push(i)
    }
    
    useEffect(() => {
        console.log(currentPage)
    })
    
    return(
        <>
        <nav>
            <ul className="pagination justify-content-center mt-3">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <a href="!#" onClick={() => {paginate(number)}} className="page-link bg-dark" >
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
        </>
    )
}

export default Pagination