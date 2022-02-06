const api_KEY = `${process.env.REACT_APP_API_KEY}`

export const fetchUrl = {
    fetchTrendingMovies:`https://api.themoviedb.org/3/trending/movie/week?api_key=${api_KEY}&adult=false`,
    fetchTopRatedMovies:`https://api.themoviedb.org/3/movie/top_rated?api_key=${api_KEY}&language=en-US&page=1`,
    fetchPopularMovies:`https://api.themoviedb.org/3/movie/popular?api_key=${api_KEY}&language=en-US&page=1`,
    fetchTrendingSeries:`https://api.themoviedb.org/3/trending/tv/week?api_key=${api_KEY}&adult=false&include_video=true`,
    fetchAnimationMovies:`https://api.themoviedb.org/3/discover/movie?api_key=${api_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&page=1&with_genres=16`,
}
