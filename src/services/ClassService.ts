export class ClassService {
  async getSubClasse(className: string) {
    const res = await fetch(`https://www.dnd5eapi.co/api/classes/${className}/subclasses`);
    const bodyResponse = await res.json();
    return bodyResponse;
  }
  async getSpells(className: string) {
    const res = await fetch(`https://www.dnd5eapi.co/api/classes/${className}/spells`);
    const bodyResponse = await res.json();
    return bodyResponse;
  }
  async getFeatures(className: string) {
    const res = await fetch(`https://www.dnd5eapi.co/api/classes/${className}/features`);
    const bodyResponse = await res.json();
    return bodyResponse;
  }
  async getProfienciencies(className: string) {
    const res = await fetch(`https://www.dnd5eapi.co/api/classes/${className}/proficiencies`);
    const bodyResponse = await res.json();
    return bodyResponse;
  }
  async getLevelRessources(className: string) {
    const res = await fetch(`https://www.dnd5eapi.co/api/classes/${className}/levels`);
    const bodyResponse = await res.json();
    return bodyResponse;
  }
}
