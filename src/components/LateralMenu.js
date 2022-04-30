import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import AddBoxIcon from '@mui/icons-material/AddBox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';

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
                <Button style={styles.button['& Button']}><HomeIcon style={styles.icon}/>Inicio</Button>
                <Button style={styles.button['& Button']}><SearchIcon style={styles.icon}/>Buscar</Button>
                <Button style={styles.button['& Button']}><LibraryBooksIcon style={styles.icon}/>Tu biblioteca</Button>
            </div>
            <div className="options text-white text-start">
                <Button style={styles.button['& Button']}><AddBoxIcon style={styles.icon}/>Crear lista</Button>
                <Button style={styles.button['& Button']}><FavoriteBorder style={styles.icon}/>Canciones que te gustan</Button>
                
            </div>
            <Divider style={styles.divider}></Divider>
            
        </div>
    )
}

export default LateralMenu