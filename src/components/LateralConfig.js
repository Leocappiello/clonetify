import { useEffect, useState } from "react"
import { Avatar } from "@mui/material"
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const LateralConfig = () => {

    const [equipo, setEquipo] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/users')
        const users = await data.json()
        setEquipo(users)
    }

    const styles = {
        li: {
            listStyleType: 'none',
            marginLeft: '1em',
            lineHeight: '2.5em',
        },
        iconInvisible: {
            visibility: 'hidden'
        },
        addPeople: {
            cursor: 'pointer',
            marginRight: '0.7em'
        },
        scroll: {
            maxHeight: '80vh',
            overflow: 'auto'
        },
        friends: {
            marginLeft: '10%'
        }
    }

    return (
        <div style={styles.scroll}>
            <div className="d-flex justify-content-between py-3">
                <PersonAddIcon style={styles.iconInvisible}></PersonAddIcon>
                <h5>Actividad de tus amigos</h5>
                <PersonAddIcon style={styles.addPeople} className="addIcon"></PersonAddIcon>
            </div>
            <div className="friends" style={styles.friends}>
                {
                    equipo.map(item => (
                        <div key={item.id} className="friend d-flex my-4">
                            <Avatar>{item.name[0]}</Avatar>
                            <li style={styles.li} key={item.id}>{item.name}</li>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default LateralConfig