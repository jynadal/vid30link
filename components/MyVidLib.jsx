import MovieCard from "./MovieCard";

const MyVidLib = ({ moviesList }) => {
  return (
    <div className="bg-pink-700 container max-w-7xl mx-auto pb-10 px-4">
      <h1 className="text-white text-2xl mt-8 mb-5">My Vid&#39;s</h1>
      <p className="text-gray text-xl mt-4 mb-2">They are movies the Holder ever got somewhere in his house.</p>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {moviesList.map(movie => <MovieCard movie={movie} key={movie.id} />)}
      </div>
    </div>
  );
};

export default MyVidLib;