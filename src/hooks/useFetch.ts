type typeData = {
    backdrop_path: string;
}

function FormateUrlImage(data: any) {
    data.results.forEach((item: typeData) => {
        item.backdrop_path =  "https://image.tmdb.org/t/p/original" + item.backdrop_path;
    });
    return data;
}

export const request = {
    getData: async (selectedAction: number = 1) => {

        const getAction:any = {
            1: "movie/now_playing",
            2: "movie/popular",
            3: "movie/top_rated",
            4: "tv/popular",
            5: "tv/popular",
            6: "tv/airing_today",
            7: "tv/top_rated"
        }

        let action = getAction[selectedAction] ?? "movie/now_playing"

        let respone = await fetch("https://api.themoviedb.org/3/" + action + "?api_key=8cdeb4dea31d00d9f79772db9c9fa4a2&language=pt-br&page=1");
        let json = await respone.json();

        return FormateUrlImage(json);
    }
}