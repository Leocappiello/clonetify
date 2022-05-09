import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import HomeIcon from '@mui/icons-material/Home';
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import { Link } from 'react-router-dom'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const LateralMenu = () => {
    const styles = {
        button: {
            '& Button': {
                padding: '0.6vw  0.6vw 0.6vw 0',
                marginLeft: '0.4vw',
                width: '15vw',
                justifyContent: 'flex-start'
            }
        },
        icon: {
            margin: '0 0.6vw 0 1vw'
        },
        divider: {
            border: '1px solid #fff',
            margin: '0.5em 1.6em'
        }
    }
    return (
        <div className="my-2">
            <div className="options text-white d-flex flex-column img-fluid">
                <Link to='/'>
                    <Button style={styles.button['& Button']}><HomeIcon style={styles.icon} />Inicio</Button>

                </Link>

                <Link to='/library'>
                    <Button style={styles.button['& Button']}><LibraryBooksIcon style={styles.icon} />Tu biblioteca</Button>
                </Link>
            </div>
            <Divider style={styles.divider}></Divider>

            <div className="options text-white d-flex flex-column img-fluid">
                <Link to='/profile'>
                    <Button style={styles.button['& Button']}><AccountCircleIcon style={styles.icon} />Tu perfil</Button>
                </Link>
            </div>
        </div>
    )
}

export default LateralMenu