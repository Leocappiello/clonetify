const Album = ({ albums, loading }) => {
    if (loading) {
        return (<h2>Loading...</h2>)
    }

    const styles = {
        card: {
            height: '100%',
            minHeight: '60%',
        },
        btn: {
            scale: '0.9',
            border: '0.19em solid black',
            width: '2vw',
            height: '2vw'
        }

    }

    return (
        <>
            {
                albums.map((album) => {
                    return (
                        <div key={album.id} className="col-lg-3 album col-6 my-2 p-0 animate__animated animate__fadeInLeft">
                            <div className="card bg-dark m-3" style={styles.card}>
                                <div className="overlay rounded-top text-center">
                                    <button type="button" style={styles.btn} className="btn p-0 animate__animated animate__zoomIn mx-1 animate__faster bg-white rounded-circle">+</button>
                                    <button type="button" style={styles.btn} className="btn p-0 animate__animated animate__zoomIn animate__faster btn-danger rounded-circle text-white">X</button>
                                </div>
                                <img src={album.thumbnailUrl} className="card-img-top p-3" alt="" />
                                <div className="description m-2 px-2">
                                    <h6>{album.title}</h6>
                                    <div>
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci, quos tempora ullam distinctio aliquid est eveniet ab.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>)
}

export default Album