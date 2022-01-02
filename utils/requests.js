const IMDB_KEY = process.env.REACT_APP_IMDB_KEY
const pageNumber = 1


const requestObj = {
    fetchTrending: {
        title: 'Trending',
        url: `/trending/all/week?api_key=${IMDB_KEY}&language=en-US`,
    },
    fetchTopRated: {
        title: 'Top Rated',
        url: `/movie/top_rated?api_key=${IMDB_KEY}&language=en-US`,
    },
    fetchActionMovies: {
        title: 'Action',
        url: `/discover/movie?api_key=${IMDB_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNumber}&with_genres=28`,
    },
    fetchComedyMovies: {
        title: 'Comedy',
        url: `/discover/movie?api_key=${IMDB_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNumber}&with_genres=35`,
    },
    fetchHorrorMovies: {
        title: 'Horror',
        url: `/discover/movie?api_key=${IMDB_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNumber}&with_genres=27`,
    },
    fetchRomanceMovies: {
        title: 'Romance',
        url: `/discover/movie?api_key=${IMDB_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNumber}&with_genres=10749`,
    },
    fetchDocumentaries: {
        title: 'Documentaries',
        url: `/discover/movie?api_key=${IMDB_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNumber}&with_genres=99`,
    },
    fetchTV: {
        title: 'TV',
        url: `/discover/tv?api_key=${IMDB_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNumber}&with_genres=10770`,
    },
    fetchTopRatedTV: {
        title: 'Top Rated TV',
        url: `/tv/top_rated?api_key=${IMDB_KEY}&language=en-US&page=${pageNumber}`,
    },
    fetchTrendingTV: {
        title: 'Trending TV',
        url: `/tv/on_the_air?api_key=${IMDB_KEY}&language=en-US&page=${pageNumber}`,
    },
    fetchActionTV: {
        title: 'Action TV',
        url: `/discover/tv?api_key=${IMDB_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNumber}&with_genres=28`,
    },
    fetchComedyTV: {
        title: 'Comedy TV',
        url: `/discover/tv?api_key=${IMDB_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNumber}&with_genres=35`,
    },
    fetchHorrorTV: {
        title: 'Horror TV',
        url: `/discover/tv?api_key=${IMDB_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNumber}&with_genres=27`,
    },
    fetchRomanceTV: {
        title: 'Romance TV',
        url: `/discover/tv?api_key=${IMDB_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNumber}&with_genres=10749`,
    },
    fetchDocumentariesTV: {
        title: 'Documentaries TV',
        url: `/discover/tv?api_key=${IMDB_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNumber}&with_genres=99`,
    },
    // fetchTopRatedPeople: {
    //     title: 'Top Rated People',
    //     url: `/person/popular?api_key=${IMDB_KEY}&language=en-US&page=${pageNumber}`,
    // },
    // fetchPopularPeople: {
    //     title: 'Popular People',
    //     url: `/person/popular?api_key=${IMDB_KEY}&language=en-US&page=${pageNumber}`,
    // }
}

export {
    requestObj
}