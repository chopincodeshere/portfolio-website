import React from 'react';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import WorkIcon from '@mui/icons-material/Work';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

function Info() {
  return (
    <div className='about__info grid'>
      <div className="about__box">
        <EmojiEventsIcon className='about__icon' />
        <h3 className='about__title'>Experience</h3>
        <span className='about__subtitle'>Junior Developer</span>
      </div>

      <div className="about__box">
        <WorkIcon className='about__icon' />
        <h3 className='about__title'>Completed</h3>
        <span className='about__subtitle'>10+ Projects</span>
      </div>

      <div className="about__box">
        <SupportAgentIcon className='about__icon' />
        <h3 className='about__title'>Support</h3>
        <span className='about__subtitle'>Online 24/7</span>
      </div>
    </div>
  )
}

export default Info;