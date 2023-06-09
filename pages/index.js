import axios from "axios";
import Hero from "../components/Hero";
import MyVidLib from "../components/MyVidLib";
import FriendsVidLib from "../components/FriendsVidLib";

import { server } from "../config";

export default function Home({ movies,moviesList }) {
  return (
    <div className="bg-gray-700">
      <Hero />
       <MyVidLib moviesList={moviesList.results} />
      <FriendsVidLib movies={movies.results} />
    </div>
  )
}

export async function getStaticProps() {

  const res = await axios(`${server}/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`);
  const movies = res.data;

  const response = await axios(`${server}/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=2`)
  //https://api.themoviedb.org/3/account/9689296/lists'
  const moviesList = response.data;


  return {
    props: { movies,
     moviesList 
     }
  }
}
