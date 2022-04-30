import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Button from '@mui/material/Button'
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import RepeatIcon from '@mui/icons-material/Repeat';
import ShuffleIcon from '@mui/icons-material/Shuffle';

const BarPlay = () => {
    const styles = {
        container: {
            height: '10vh',
        },
        playButton: {
            padding: '0',
            margin: '1em 0',
            width: '3.4vw',
            height: '3.4vw',
            borderRadius: '50%',
            maxWidth: '4.5em', 
            maxHeight: '4.5em', 
            minWidth: '4.5em', 
            minHeight: '4.5em'
        },
        secondaryButtons: {
            transform: 'scale(0.8)',
        },
    }

    return (
        <div className="row w-100" style={styles.container}>
            <div className="col-12">
                <div className="buttons d-flex justify-content-center">
                    <Button style={{ ...styles.playButton, ...styles.secondaryButtons }}><ShuffleIcon /></Button>
                    <Button style={styles.playButton}><SkipPreviousIcon /></Button>
                    <Button style={styles.playButton}><PlayArrowIcon /></Button>
                    <Button style={styles.playButton}><SkipNextIcon /></Button>
                    <Button style={{ ...styles.playButton, ...styles.secondaryButtons }}><RepeatIcon /></Button>
                </div>
            </div>
        </div>
    )
}

export default BarPlay