import Avatar from '../profilePhoto.png'
import { useState } from 'react'
import ModalComponent from './ModalComponent'

const Profile = ({ library }) => {
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

    const [profile, setProfile] = useState({
        username: 'user',
        registered: '01/01/2022',
        quantitySongs: 0,
        country: 'AR',
        birthday: '01/01/1999'
    })

    return (
        <>
            <div className="title py-4 mx-5" style={styles.container}>
                <div className="card text-dark shadow" style={styles.backgroundCard}>
                    <div className="row m-0 bg-dark rounded-start">
                        <div className="col-md-4 p-0 d-flex justify-content-center">
                            <img style={styles.avatar} src={Avatar} alt="" className='img img-fluid rounded-start m-4 avatar' />
                        </div>
                        <div className="col-md-8 bg-primary px-0 rounded-end">
                            <div className="text my-2 px-4 text-center text-md-start ">
                                <h1 className='text-white'>Username</h1>

                                <p className='mt-4'>Miembro desde: <span className='infoProfile'>{profile.registered}</span></p>



                                <p>Cantidad de canciones en tu biblioteca: <span className='infoProfile'>{library.length}</span>
                                </p>


                                <p>Pais: <span className='infoProfile'>{profile.country}</span></p>


                                <p>Fecha de nacimiento: <span className='infoProfile'>{profile.birthday}</span></p>

                                <ModalComponent library={library} profile={profile} setProfile={setProfile}></ModalComponent>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile