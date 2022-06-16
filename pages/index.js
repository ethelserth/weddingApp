import Hero from '../components/sections/Hero';
import TimeLine from '../components/sections/TimeLine';
import Marriage from '../components/sections/Marriage';
import TrackVisibility from 'react-on-screen';
import MailchimpSubscribe from "react-mailchimp-subscribe";
import RSVP from "../components/sections/RSVP";
import Area from '../components/sections/Area';

export default function Home() {

  const url =
      "https://live.us14.list-manage.com/subscribe/post?u=39e5b609f70637a933548a958&amp;id=642619806c";

  return (
    <div className="main bg-slate-50">
      <Hero />
      <TrackVisibility offset={1000} once>
        <TimeLine />
      </TrackVisibility>
      <Marriage />
      <MailchimpSubscribe
        url={url}
        render={({ subscribe, status, message }) => (
          <RSVP
            status={status}
            message={message}
            onValidated={formData => subscribe(formData)}
          />
        )}
      />
      <Area />
    </div>
  )
} 


