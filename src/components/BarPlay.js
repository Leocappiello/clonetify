import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Button from '@mui/material/Button'
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import RepeatIcon from '@mui/icons-material/Repeat';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import PauseIcon from '@mui/icons-material/Pause';

const BarPlay = ({ handleChangeIconPlay, icon, setIcon, clicked, setClicked }) => {
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
        buttonBar: {
            width: '20vw'
        }
    }

    
    const iconRepeat = document.getElementsByClassName('repeat')
    const iconShuffle = document.getElementsByClassName('shuffle')

    const handleClickButtonRepeat = () => {
        setIcon(!icon)
        icon ? iconRepeat[0].style.color = 'white' : iconRepeat[0].style.color = '#1976d2'
    }
    const handleClickButtonShuffle = () => {
        setIcon(!icon)
        icon ? iconShuffle[0].style.color = 'white' : iconShuffle[0].style.color = '#1976d2'
    }

   

    return (
        <div className="row w-100" style={styles.container}>
            <div className="col-12 d-flex justify-content-center">
                <div style={styles.buttonBar}>
                    <div className="buttons d-flex justify-content-evenly">
                        <Button onClick={handleClickButtonShuffle} className='shadow bg-dark buttonPlay' style={{ ...styles.playButton, ...styles.secondaryButtons }}><ShuffleIcon onClick={handleClickButtonShuffle} className='shuffle' /></Button>
                        <Button className='shadow bg-dark buttonPlay' style={styles.playButton}><SkipPreviousIcon /></Button>
                        <Button className='shadow bg-dark buttonPlay' style={styles.playButton} onClick={handleChangeIconPlay}>
                            {clicked ? <PlayArrowIcon onClick={handleChangeIconPlay} /> : <PauseIcon onClick={handleChangeIconPlay} />}
                        </Button>
                        <Button className='shadow bg-dark buttonPlay' style={styles.playButton}><SkipNextIcon /></Button>
                        <Button onClick={handleClickButtonRepeat} className='shadow bg-dark buttonPlay' style={{ ...styles.playButton, ...styles.secondaryButtons }}><RepeatIcon className='repeat' onClick={handleClickButtonRepeat} /></Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BarPlay