const Library = ({ library, setLibrary }) => {
    const styles = {
        card: {
            height: 'min-content',
            minHeight: '60%',
        },
        btn: {
            scale: '0.9',
            border: '0.19em solid #1b1c1E',
            minHeight: '2em',
            minWidth: '2em',
            width: '2vw',
            height: '2vw',
        },
        row: {
            height: '80vh',
            overflow: 'auto',
            overflowX: 'hidden',
            width: '100%',
        }

    }

    const handleRemoveOfLibrary = (e) => {
        let newLibrary = library.filter(elm => (String(elm.id) !== e.target.id))
        setLibrary(newLibrary)
    }

    if (library.length > 0) {
        return (
            <>
                <div className="row justify-content-start pt-2 mx-2" style={styles.row}>
                    {
                        library.map((album) => {
                            return (
                                <div key={album.id} className="col-lg-3 col-md-6 album col-12 my-2 p-0 animate__animated animate__fadeInLeft">
                                    <div className="card bg-dark m-3" style={styles.card}>
                                        <div className="overlayLibrary rounded-top text-center">
                                            <button id={album.id} onClick={handleRemoveOfLibrary} type="button" style={styles.btn} className="btn p-0 animate__animated animate__zoomIn animate__faster btn-danger rounded-circle text-white">X</button>
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
                </div>
            </>
        )
    } else {
        return (
            <div className="text-center row" style={styles.row}>
                <div className="container mt-5">
                    <h3 className="p-0 ">Aun no tienes agregados albumes a tu libreria</h3>
                </div>
            </div>
        )
    }
}

export default Library