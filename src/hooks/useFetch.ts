type Teste = {
    backdrop_path: string;
}

export const api = {
    getAll: async () => {
        let respone = await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=8cdeb4dea31d00d9f79772db9c9fa4a2&language=pt-br&page=1");
        let json = await respone.json();

        json.results.forEach((element: Teste) => {
            element.backdrop_path =  "https://image.tmdb.org/t/p/original" + element.backdrop_path;
        });
        
        return json;
    }
}