import './NewSection.css';

export default function NewSection() {
  return (
    <div className="new">
      <h2 className="new">New</h2>
      <div className="section withline">
        <h3 className="new">Hydrogen VS Electric Cars</h3>
        <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
      </div>
      <div className="section withline">
        <h3 className="new">The Downsides of AI Artistry</h3>
        <p>What are the possible adverse effects of on-demand AI image generation?</p>
      </div>
      <div className="section">
        <h3 className="new">Is VC Funding Drying Up?</h3>
        <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
      </div>
    </div>
  );
}
