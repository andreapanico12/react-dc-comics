import ComicCard from "./ComicCard";
import LoadMoreButton from "./LoadMoreBtn";

const CardGrid = (props) => {
  const comics = props.comics
  return (
    <div className="card-grid">
      {comics.map(comic => (
        <ComicCard key={`comic-${comic.id}`} series={comic.series} thumb={comic.thumb} />
      ))}
      <LoadMoreButton/>
    </div>
  );
};

export default CardGrid