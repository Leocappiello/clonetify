import { ButtonGroup, Chip } from "@mui/material"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Albums from "./Albums";

const MainContent = () => {
    const styles = {
        container: {
            height: "85vh",
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

    }

    return (
        <>
            <div className="scrollable container-fluid mx-0 p-0" style={styles.container}>
                <div className="col-12 text-start px-5 ">
                    <div className="d-flex justify-content-between pt-3">
                        <div className="buttonNavigate">
                            <ButtonGroup disableElevation variant="contained" className="buttonsBackNext">
                                <button style={styles.button}><ArrowBackIosIcon></ArrowBackIosIcon></button>
                                <button style={styles.button}><ArrowForwardIosIcon></ArrowForwardIosIcon></button>

                            </ButtonGroup>
                        </div>
                        <Chip icon={<AccountCircleIcon />} label="Usuario" style={styles.chip} className="chip"/>
                    </div>

                    <h1 className="py-3" style={styles.h1}>Popular</h1>

                    <div className="card bg-dark py-3">
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
                        <div className="row justify-content-start">
                            <Albums></Albums>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainContent