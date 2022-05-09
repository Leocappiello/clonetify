import { ButtonGroup, Chip, Button } from "@mui/material"
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import HomeIcon from '@mui/icons-material/Home';
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
        <div className="d-flex justify-content-between py-2 mx-5">
            <div className="buttonNavigate">
                <ButtonGroup disableElevation variant="contained" className="buttonsBackNext" style={styles.buttonGroup}>

                    <Link to='/'>
                        <Button className="mx-1 bg-dark" style={styles.button['& Button']}><HomeIcon style={styles.icon} /></Button>
                    </Link>

                    <Link to='/library'>
                        <Button className="mx-1 bg-dark" style={styles.button['& Button']}><LibraryBooksIcon style={styles.icon} /></Button>
                    </Link>

                    <Link to='/profile'>
                        <Button className="mx-1 bg-dark" style={styles.button['& Button']}><AccountCircleIcon style={styles.icon} /></Button>
                    </Link>


                </ButtonGroup>
            </div >

            <Link to='/profile'>
                <Chip icon={<AccountCircleIcon className="bg-white rounded-circle" />} label="Usuario" style={styles.chip} className="chip bg-primary "></Chip>
            </Link>
        </div >
    )
}

export default BarTop