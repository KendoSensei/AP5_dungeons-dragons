import axios from "axios"; // Importer axios pour faire des requêtes HTTP

class getSubClassInfos {
  className: string;

  // Constructeur qui prend en paramètre className
  constructor(className: string) {
    this.className = className;
  }

  // Méthode pour faire l'appel GET et renvoyer les données JSON
  async getClassData(): Promise<unknown> {
    const apiUrl = `https://www.dnd5eapi.co/api/classes/${this.className}/subclasses`;

    try {
      const response = await axios.get(apiUrl); // Effectuer l'appel GET
      return response.data; // Renvoyer les données JSON
    } catch (error) {
      console.error("Error fetching data from API:", error);
      throw new Error("API request failed");
    }
  }
}
