export async function getCharacterInfo(className: string) {
  fetch(`https://www.dnd5eapi.co/api/classes/${className}`).then((response) =>
    response
      .json()
      .then((data) => console.log(data))
      .then((error) => console.log("Error : ", error)),
  );
}
