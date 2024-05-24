import React from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import { meal } from '../../constants';
import './Intro.css';

const Intro = () => {

  const [playVideo, setPlayVideo] = React.useState(false);
  const vidRef = React.useRef();

  const handleVideo = () => {
    //if playVideo is true(prevPlayVideo) we going to toggle it off and if playVideo is off(!prevPlayVideo) we going to toggle it on
    setPlayVideo((prevPlayVideo) => !prevPlayVideo)

    //if video is true(playing) then we can pause it else if video is false(!playing) then we can play it 
    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  }

  return (
    <div className='app__video'>
      <video 
        src={meal}
        ref={vidRef}
        type='video/mp4'
        loop
        controls={false}
        muted
      />

      <div className='app__video-overlay flex__center'>
        <div
          className='app__video-overlay_circle flex__center'
          onClick={handleVideo}
        >
          {/*if playVideo is true(?) render a pause button else(:) if playVideo is flase render a play button*/}
          {playVideo
            ? <BsPauseFill color='#fff' fontSize={30} />
            : <BsFillPlayFill color='#fff' fontSize={30} />
          }
        </div>
      </div>

    </div>
  )
};

export default Intro;
