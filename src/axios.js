import axios from "axios";

/**base url is set to make requests to the movie database */

const instance=axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

export default instance;