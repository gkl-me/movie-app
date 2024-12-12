import { useParams } from "react-router-dom"
import { movie_url } from "../config"

function VideoPlayer() {

    const {id} = useParams()
    console.log(id)

  return (
    <div
    className="w-full h-screen flex justify-center"
    >
        <iframe 
        className="w-full h-screen"

  src={movie_url+id}
  allowFullScreen
></iframe>
    </div>
  )
}

export default VideoPlayer