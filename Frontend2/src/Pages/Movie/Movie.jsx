import tare from '../../asset/images/tzp.png';
import n1 from '../../asset/images/n1.jpg';
import n2 from '../../asset/images/n2.jpg';
import n3 from '../../asset/images/n3.jpg';
import n4 from '../../asset/images/n4.jpg';
import n5 from '../../asset/images/n5.jpg';
import { Link } from 'react-router-dom'; 

const movies = [
  {
    id: 1,
    title: 'End Game',
    href: '#',
    imageSrc: tare,
    imageAlt: "Poster for End Game movie.",
    duration: '1h 4min',
    releaseDate: '2019',
  },
  {
    id: 2,
    title: 'Frozen 2',
    href: '#',
    imageSrc: n1,
    imageAlt: "Poster for Frozen 2 movie.",
    duration: '1h 43min',
    releaseDate: '2019',
  },
  {
    id: 3,
    title: 'Doctor Sleep',
    href: '#',
    imageSrc: n2,
    imageAlt: "Poster for Doctor Sleep movie.",
    duration: '2h 31min',
    releaseDate: '2019',
  },
  {
    id: 4,
    title: 'Toy Story 4',
    href: '#',
    imageSrc: n3,
    imageAlt: "Poster for Toy Story 4 movie.",
    duration: '1h 40min',
    releaseDate: '2019',
  },
  {
    id: 4,
    title: 'Toy Story 4',
    href: '#',
    imageSrc: n4,
    imageAlt: "Poster for Toy Story 4 movie.",
    duration: '1h 40min',
    releaseDate: '2019',
  },
  {
    id: 4,
    title: 'Toy Story 4',
    href: '#',
    imageSrc: n5,
    imageAlt: "Poster for Toy Story 4 movie.",
    duration: '1h 40min',
    releaseDate: '2019',
  },
  // Add more movies as needed
];

export default function Movie() {
  return (
    <div className="bg-black py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white mb-8">MOVIES</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {movies.map((movie) => (
            <div key={movie.id} className="relative group rounded-lg overflow-hidden bg-gray-800" style={{ width: '258px', height: '400px' }}>
              <div className="relative h-full w-full overflow-hidden rounded-lg bg-gray-800 transition-transform duration-300 ease-in-out transform group-hover:scale-105">
                <img
                  alt={movie.imageAlt}
                  src={movie.imageSrc}
                  className="h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-center p-4 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                  <h3 className="text-lg font-semibold text-white mb-2">{movie.title}</h3>
                  <p className="text-sm text-gray-300 mb-2">{movie.duration}</p>
                  <p className="text-sm text-gray-300 mb-4">{movie.releaseDate}</p>
                  <Link to="/showselection">
                    <button className="mt-4 text-white bg-red-600 px-4 py-2 rounded-lg text-lg font-bold transition-transform duration-300 ease-in-out transform hover:scale-105">
                      Book Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
