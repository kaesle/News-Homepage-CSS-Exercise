import './ThumbnailStory.css';

type TNSProps = {
  imgSrc: string,
  number: number,
  headline: string,
  blurb: string
};

export default function ThumbnailStory({imgSrc, number, headline, blurb}: TNSProps) {
  return (
    <div id={`tns0${number}`} className="story">
      <img src={imgSrc} alt={headline} aria-hidden />
      <h2 className="number">0{number}</h2>
      <h3 className="headline">{headline}</h3>
      <p className="blurb">{blurb}</p>
    </div>
  );
};