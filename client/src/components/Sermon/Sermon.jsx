import './Sermon.css';

export function Sermon({ title, subtitle, videoId }) {
  return (
    <section className="sermon">
      <div className="sermon-container">
        <p className="sermon-subtitle">{subtitle}</p>
        <h2 className="sermon-title">{title}</h2>
        <div className="sermon-video">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
