const Album = ({ albums, loading }) => {
    if (loading) {
        return (<h2>Loading...</h2>)
    }
    
    const styles = {
        card: {
            height: '100%',
            minHeight: '60%',
        },

    }

    return (
        <>
            {
                albums.map((album) => {
                    return (
                        <div key={album.id} className="col-lg-3 album col-6 my-2 animate__animated animate__fadeInLeft">
                            <div className="card bg-dark m-2" style={styles.card}>
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