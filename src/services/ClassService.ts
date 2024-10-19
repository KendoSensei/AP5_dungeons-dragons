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
  async getProfiencies(className: string) {
    const res = await fetch(`https://www.dnd5eapi.co/api/classes/${className}/proficiencies`);
    const bodyResponse = await res.json();
    return bodyResponse;
  }
  async getLevelRessources(className: string) {
    const res = await fetch(`https://www.dnd5eapi.co/api/classes/${className}/levels`);
    const bodyResponse = await res.json();
    return bodyResponse;
  }

  async allGet() {
    const classes = [
      "barbarian",
      "bard",
      "cleric",
      "druid",
      "fighter",
      "monk",
      "paladin",
      "ranger",
      "rogue",
      "sorcerer",
      "warlock",
      "wizard",
    ];

    const results = [];

    for (const className of classes) {
      try {
        const [subclasses, spells, features, proficiencies, ressources] = await Promise.all([
          this.getSubClasse(className),
          this.getSpells(className),
          this.getFeatures(className),
          this.getProfiencies(className),
          this.getLevelRessources(className),
        ]);
        results.push({
          className,
          subclasses,
          spells,
          features,
          proficiencies,
          ressources,
        });
      } catch (error) {
        console.error(`Erreur lors de la récupération des données pour ${className} :`, error);
        throw error;
      }
    }
    return results;
  }
}
