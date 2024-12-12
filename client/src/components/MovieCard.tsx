import { useNavigate } from 'react-router-dom'
import { IMovie } from '../type'
import { image_url } from '../config'

function MovieCard({original_title,id,backdrop_path}:Partial<IMovie>) {
  
  const naviagate = useNavigate()

  function handleOnClick(id:string) {
    naviagate('/movie/'+id)
  }

  return (
      <div className='flex flex-col'>
    <div className='relative group hover:scale-110 transition ease-in-out duration-200 cursor-pointer'>
    <img className='rounded-md shadow-md' src={image_url+backdrop_path} alt={original_title} />
    <h2 className='w-full bg-gradient-to-b from-transparent to-black absolute bottom-0  py-4 font-semibold pl-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300'>{original_title}</h2>
  </div>
  <button onClick={() => handleOnClick(id!)} className='hover:bg-gray-950 hover:scale-105 ease-in-out transition mt-4 bg-gray-800 text-white p-2 rounded-md '>Watch Now</button>
  </div>

  )
}

export default MovieCard