import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { TextField } from '@mui/material';

const ModalComponent = ({ profile, setProfile, library }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const changeValue = (attribute) => {
        let newAttribute = attribute.target.getAttribute('name')
        let indexAttribute = Object.keys(profile).indexOf(newAttribute)
        let key = Object.keys(profile)[indexAttribute]
        let value = attribute.target.value
        let obj = { ...profile }
        obj[key] = value
        setProfile(obj)
    }

    const styles = {
        modal: {
            color: 'white',
            backgroundColor: '#303030'
        }
    }

    return (
        <>
            <Button className="bg-black mt-3 buttonEdit" variant='outlined' onClick={handleShow}>Editar perfil</Button>

            <Modal show={show} onHide={handleClose}>
                <div>
                    <Modal.Header closeButton style={styles.modal}>
                        <Modal.Title>Modificar perfil</Modal.Title>
                    </Modal.Header>

                    <div className="d-flex flex-column justify-content-center text-center mx-3">
                        <TextField style={styles.textfield}
                            className="textfield username mt-3"
                            id="outlined-required"
                            label="Username"
                            name="username"
                            defaultValue={profile.username}
                            disabled
                        />
                        <TextField style={styles.textfield}
                            className="textfield registered mt-3"
                            id="outlined-required"
                            name="registered"
                            label="Miembro desde:"
                            defaultValue={profile.registered}
                            disabled
                        />
                        <TextField style={styles.textfield}
                            className="textfield quantitySongs mt-3"
                            id="outlined-required"
                            name="length"
                            label="Cantidad de canciones en tu biblioteca:"
                            defaultValue={library.length}
                            disabled
                        />
                        <TextField style={styles.textfield}
                            className="textfield country mt-3"
                            id="outlined-required"
                            name="country"
                            label="Pais:"
                            defaultValue={profile.country}
                            onChange={(e) => changeValue(e)}
                        />
                        <TextField style={styles.textfield}
                            className="textfield birthday my-3"
                            id="outlined-required"
                            name="birthday"
                            label="Fecha de nacimiento:"
                            defaultValue={profile.birthday}
                            onChange={(e) => changeValue(e)}
                        />
                    </div>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Cerrar
                        </Button>
                    </Modal.Footer>
                </div>
            </Modal>
        </>
    );
}

export default ModalComponent