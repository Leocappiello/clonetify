const Pagination = ({ totalAlbums, albumPerPages, paginate, currentPage }) => {
    const pageNumbers = []

    for (let i = 1; i < Math.ceil(totalAlbums / albumPerPages); i++) {
        pageNumbers.push(i)
    }

    return (
        <>
            <nav>
                <ul className="pagination justify-content-center mt-4">
                    {pageNumbers.map((number) => {
                        if (number === currentPage) {
                            return (
                                <li key={number} className="page-item">
                                    <a href="!#" onClick={(e) => { 
                                            e.preventDefault()
                                            paginate(number) 
                                        }} className="page-link selected">
                                        {number}
                                    </a>
                                </li>
                            )
                        } else {
                            return (<li key={number} className="page-item">
                                <a href="!#" onClick={(e) => { 
                                        e.preventDefault()
                                        paginate(number) 
                                    }} className="page-link" >
                                    {number}
                                </a>
                            </li>)
                        }
                    })}
                </ul>
            </nav>
        </>
    )
}

export default Pagination