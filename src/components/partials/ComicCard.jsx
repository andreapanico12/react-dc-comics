const ComicCard = ({ series, thumb }) => {
  return (
    <div className="card">
      <img src={thumb} alt={series} className="card-image" />
      <h4 className="card-title">{series}</h4>
    </div>
  );
};

export default ComicCard