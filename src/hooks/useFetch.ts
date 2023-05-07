type typeData = {
    backdrop_path: string;
}

export const request = {
    getData: async (selectedAction?: string) => {

        let action;
        switch(selectedAction){
            case '1':
                action = "movie/now_playing";
                break;
            case '2':
                action = "movie/popular";
                break;
            case '3':
                action = "movie/top_rated";
                break;
            case '4':
                action = "tv/popular";
                break;
            case '5':
                action = "tv/popular";
                break;
            case '6':
                action = "tv/airing_today";
                break;
            case '7':
                action = "tv/top_rated";
                break;

            default: 
                action = "movie/now_playing";
                break;
        }

        let respone = await fetch("https://api.themoviedb.org/3/" + action + "?api_key=8cdeb4dea31d00d9f79772db9c9fa4a2&language=pt-br&page=1");
        let json = await respone.json();

        json.results.forEach((data: typeData) => {
            data.backdrop_path =  "https://image.tmdb.org/t/p/original" + data.backdrop_path;
        });
        return json;
    }
}