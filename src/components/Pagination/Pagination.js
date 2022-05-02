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
                                    <a href="!#" onClick={() => { paginate(number) }} className="page-link bg-dark text-white">
                                        {number}
                                    </a>
                                </li>
                            )
                        } else {
                            return (<li key={number} className="page-item">
                                <a href="!#" onClick={() => { paginate(number) }} className="page-link bg-dark" >
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