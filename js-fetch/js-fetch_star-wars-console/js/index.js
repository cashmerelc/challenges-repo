console.clear();

const url = "https://swapi.py4e.com/api/people";

async function fetchData() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const characters = data.results;
    console.log(characters);
    characters.forEach((character) => {
      console.log("Name: ", character.name);
      if (character.name === "R2-D2") {
        console.log("Eye Color: ", character["eye_color"]);
      }
    });
    return data;
  } catch (err) {
    console.log(err);
  }
}

fetchData();
