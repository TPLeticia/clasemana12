import axios from "axios";

const URL = "https://futuramaapi.com/api/characters/1";


axios.get(URL)
.then(response => {
    console.log(response.data);
})
.catch(error => {
    console.error("There was an error making the request:", error);
}); 
