const URL = "https://futuramaapi.com/api/characters/1";


fetch (URL)
.then((response) => {
    if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
    }
    return response.json(); 
})
.then((data) => { 
    console.log(data);
    /* const character = data[0];
    const characterDiv = document.getElementById("character");
    characterDiv.innerHTML = `
        <h2>${character.Name}</h2>
        <img src="${character.PicUrl}" alt="${character.Name}">
        <p>${character.Quote}</p>
    `; */
})
.catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
});

