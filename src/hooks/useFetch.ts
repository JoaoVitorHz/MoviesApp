type Teste = {
    backdrop_path: string;
}

type MoviesTypes = {
    backdrop_path: string;
    title: string;
    release_date: string;
    vote_average: number;
    overview: string;
}

let number = 1;

export const api = {
    // getAll: async () => {
    //     let respone = await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=8cdeb4dea31d00d9f79772db9c9fa4a2&language=pt-br&page=1");
    //     let json = await respone.json();

    //     json.results.forEach((element: Teste) => {
    //         element.backdrop_path =  "https://image.tmdb.org/t/p/original" + element.backdrop_path;
    //     });
        
    //     return json;
    //     teste.afa(json)
    // },
    getPersonalApi: async (typeApi?: string) => {

        let api;
        switch(typeApi){
            case '1':
                api = "movie/now_playing";
                break;
            case '2':
                api = "movie/popular";
                break;
            case '3':
                api = "movie/top_rated";
                break;
            case '4':
                api = "tv/popular";
                break;
            case '5':
                api = "tv/popular";
                break;
            case '6':
                api = "tv/airing_today";
                break;
            
            case '7':
                api = "tv/top_rated";
                break;

            default: 
                api = "movie/now_playing";
                break;
        }

        let respone = await fetch("https://api.themoviedb.org/3/" + api + "?api_key=8cdeb4dea31d00d9f79772db9c9fa4a2&language=pt-br&page=1");
        let json = await respone.json();

        json.results.forEach((element: Teste) => {
            element.backdrop_path =  "https://image.tmdb.org/t/p/original" + element.backdrop_path;
        });
        
        return json;
    },


}