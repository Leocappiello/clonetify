import { Stack, Slider } from '@mui/material';
import VolumeDown from '@mui/icons-material/VolumeDown'
import VolumeUp from '@mui/icons-material/VolumeUp'

const BarReproduction = () => {
    const styles = {
        container: {
            height: '5vh'
        },
        slider: {
            width: '30vw'
        },
        sliderTwo: {
            width: '5vw',
        },

    }

    return (
        <div className="row w-100" style={styles.container}>
            <div className="col-4 offset-4">
                <div className="bar d-flex text-white justify-content-center">
                    <p className='m-0 pt-1'>0:00</p>
                    <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center" className="mx-4 my-0">
                        <Slider aria-label="Volume" style={styles.slider} 
                         min={1} max={100}/>
                    </Stack>
                </div>
            </div>
            <div className="col-4 text-white d-flex justify-content-end slider">
                <VolumeDown className="mx-4"/>
                <Slider aria-label="Volume" style={styles.sliderTwo}/>
                <VolumeUp className="mx-2"/>
            </div>
        </div>
    )
}

export default BarReproduction  