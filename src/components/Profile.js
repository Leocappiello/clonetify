import * as React from 'react';
import Avatar from '../profilePhoto.png'
import Button from '@mui/material/Button'

const Profile = () => {
    //height: 85vh;
    const styles = {
        avatar: {
            maxWidth: '10vw',
            height: 'auto',
            border: '0.5em solid white',
        },
        container: {
            height: '80vh',
        },
        backgroundCard: {
            background: 'transparent'
        }
    }

    return (
        <>
            <div className="title py-4 mx-5" style={styles.container}>
                <div className="card text-dark shadow" style={styles.backgroundCard}>
                    <div className="row m-0 bg-dark rounded-start">
                        <div className="col-md-4 p-0 d-flex justify-content-center">
                            <img style={styles.avatar} src={Avatar} alt="" className='img-fluid rounded-start m-4 avatar' />
                        </div>
                        <div className="col-md-8 bg-primary px-0 rounded-end">
                            <div className="text my-2 px-4 text-center text-md-start ">
                                <h1 className='text-white'>Username</h1>
                                <div className="text-decoration-underline">
                                    <p className='mt-4'>Miembro desde:</p>
                                    <p>Cantidad de canciones en tu biblioteca:</p>
                                    <p>Pais:</p>
                                    <p>Fecha de nacimiento:</p>
                                    <Button className='bg-black mt-3 buttonEdit' variant='outlined'>Editar perfil</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile