import MovieCard from "./MovieCard";

const FriendsVidLib = ({ movies }) => {
  return (
    <div className="bg-purple-700 container max-w-7xl mx-auto pb-10 px-4">
      <h2 className="text-white text-2xl mt-8 mb-5">Friends Vid&#39;s</h2>
      <p className="text-gray text-xl mt-4 mb-2">They are movies owner by my friends. This is the next level of our plateform.</p>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {movies.map(movie => <MovieCard movie={movie} key={movie.id} />)}
      </div>
    </div>
  );
};

export default FriendsVidLib;