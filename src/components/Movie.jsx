import body from './body/body.module.css';
import movie from './movie/movie.module.css';
import movieImg from './imgcss/img.module.css';

export default function Movie({ movieObj }) {
  return (
    <div className="col mb-2">
      {movieObj.is_active && (
        <div className={`${movie['movie']} card position-relative h-100`}>
          <a
            href={movieObj.href}
            className={`${movie[`movie a`]} text-decoration-none`}
          >
            <img
              src={'/img/' + movieObj.image}
              alt={movieObj.title}
              className={`${movieImg['movie-img']} card-img-top`}
              loading="lazy"
              decoding="async"
              sizes="(min-width: 1200px) 25vw, (min-width: 992px) 33vw, (min-width: 576px) 50vw, 100vw"
            />
            <div
              className={`${body['card-body']} container bg-light text-dark pb-3`}
            >
              <h2 className="card-title h5">{movieObj.title}</h2>
              <p className="card-text mb-0">{movieObj.description}</p>
              <p className="imd">IMDb: {movieObj.imd}</p>
              {movieObj.is_new && (
                <span className="position-absolute badge bg-danger top-0 end-0 m-1">
                  New
                </span>
              )}
            </div>
          </a>
        </div>
      )}
    </div>
  );
}
