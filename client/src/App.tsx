import { useEffect, useState } from "react"
import { getMovies } from "./config"
import { IMovie } from "./type"
import MovieCard from "./components/MovieCard"

export default function App() {
  
  const [moviesList,setMoviesList] = useState<IMovie[]>()

  useEffect(() => {
    const get = async () => {
      const movies =  await getMovies();
      setMoviesList(movies)
    }
    get()
  },[])

  return (
  <div className="grid lg:grid-cols-4 grid-cols-3 p-10 gap-10">
  {moviesList?.map((ele) => {
      // <MovieCard original_title={moviesList?.[0].original_title} id={moviesList?.[0].id} backdrop_path={moviesList?.[0].backdrop_path} /> 
     return <MovieCard key={ele.id} original_title={ele.original_title} id={ele.id} backdrop_path={ele.backdrop_path} />
   })}
  </div>
  )
}
