import Movie from './Movie';
import { movie_list } from '../data';

export default function MovieList() {
  return (
    <>
      <div className="bg-light">
        <div className="container py-2">
          <h3 className="text-danger h4">Movies</h3>
          {movie_list.filter((m) => m.is_active).length == 0 ? (
            <p>Film Bulunamadı</p>
          ) : (
            <div className="moviList row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4 mb-5">
              {movie_list.map((m, index) => (
                <Movie key={index} movieObj={m} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
