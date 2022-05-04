import { ButtonGroup, Chip } from "@mui/material"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from "react-router-dom";

const BarTop = () => {
    const styles = {
        bar: {
            height: "10vh",
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
            color: 'white',
            fontWeight: 600,
            cursor: 'pointer',
        },
        buttonGroup: {
            marginLeft: '-1.3em'
        }
    }
    return (
        <div className="d-flex justify-content-between pt-3 mx-5">
            <div className="buttonNavigate">
                <ButtonGroup disableElevation variant="contained" className="buttonsBackNext" style={styles.buttonGroup}>
                    <button style={styles.button}><ArrowBackIosIcon></ArrowBackIosIcon></button>
                    <button style={styles.button}><ArrowForwardIosIcon></ArrowForwardIosIcon></button>
                </ButtonGroup>
            </div>

            <Link to='/profile'>
                <Chip icon={<AccountCircleIcon className="bg-white rounded-circle" />} label="Usuario" style={styles.chip} className="chip bg-primary"></Chip>
            </Link>
        </div >
    )
}

export default BarTop