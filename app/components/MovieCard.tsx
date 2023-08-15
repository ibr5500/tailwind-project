interface MovieCardItems {
  title: string;
  overview: string;
  posterPath: string;
}

const MovieCard = ({title, overview, posterPath}: MovieCardItems) => {
  const imageURL = posterPath
  ? posterPath
  : "https://images.pexels.com/photos/2910028/pexels-photo-2910028.jpeg?auto=compress&cs=tinysrgb&w=600";
  
  return (
    <div className="bg-white rounded shadow p-4">
      <img
        className="w-full h-64 rounded mb-4"
        src={imageURL}
        alt={title}
      />
      <h2 className="text-2xl text-black font-bold mb-2">
        {title}
      </h2>
      <p className="text-sm text-gray-500">
        {overview.substring(0, 150)}
      </p>
    </div>
  )
}

export default MovieCard
