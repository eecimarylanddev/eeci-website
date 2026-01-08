import './Intro.css';

export function Intro({title, subtitle, children}) {
  return (
    <section className="intro">
      <div className="intro-container">
        <h1 className="intro-title">
          {title}
        </h1>
        <p className="intro-subtitle">
          {subtitle}
        </p>
        {children}
      </div>
    </section>
  );
}
