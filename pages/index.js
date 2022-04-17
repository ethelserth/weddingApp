import Hero from '../components/sections/Hero';
import TimeLine from '../components/sections/TimeLine';
import Marriage from '../components/sections/Marriage';
import TrackVisibility from 'react-on-screen';

export default function Home() {

  return (
    <div className="main">
      <Hero />
      <TrackVisibility offset={1000} once>
        <TimeLine />
      </TrackVisibility>
      <Marriage />
    </div>
  )
} 
