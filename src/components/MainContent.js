import Albums from "./Albums";
const MainContent = ({library, setLibrary, notifyAdd}) => {
    const styles = {
        container: {
            height: "80vh",
            width: '100%',
            overflowY: 'auto'
        },
        h1: {
            fontSize: '3.2vw'
        },
        button: {
            border: 'none',
            padding: '0',
            font: 'inherit',
            cursor: 'pointer',
            outline: 'inherit',
            background: 'none',
            color: 'inherit',
        },
        chip: {
            backgroundColor: 'pink',
            color: 'white',
            fontWeight: 600,
            cursor: 'pointer',
        },
        square: {
            backgroundColor: 'pink',
            height: '20vh',
            width: '20vh'
        },
        row: {
            overflow: 'hidden'
        }

    }

    return (
        <>
            <div className="scrollable container-fluid mx-0 p-0" style={styles.container}>
                <div className="col-12 text-start">

                    <h1 className="pb-3 mx-4" style={styles.h1}>Popular</h1>

                    <div style={{ zIndex: 0 }} className="card bg-dark py-3 mx-4 animate__animated  animate__fadeInLeft animate__fast">
                        <div className="row mx-3 justify-content-around">
                            <div className="col-3 p-0 my-3 rounded" style={styles.square}>

                            </div>
                            <div className="col-9 p-0 px-4">
                                <h5 className="mt-3">Lorem Ipsum</h5>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam totam itaque ut cupiditate sint, ipsum eaque voluptates consequatur aliquam, voluptas illo beatae quibusdam accusamus eos dolorem consectetur ea a debitis.</p>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam totam itaque ut cupiditate sint, ipsum eaque voluptates consequatur aliquam, voluptas illo beatae quibusdam accusamus eos dolorem consectetur ea a debitis.</p>
                            </div>
                        </div>
                    </div>
                    <div className="card-albums pt-4 d-flex">
                        <div className="row justify-content-start pt-2 mx-2" style={styles.row}>
                            <Albums notifyAdd={notifyAdd} library={library} setLibrary={setLibrary}></Albums>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainContent