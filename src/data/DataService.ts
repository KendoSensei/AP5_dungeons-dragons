import { AlignmentsResponse } from "../interfaces/alignment.interface";
import { IRace, RacesResponse } from "../interfaces/race.interface";

export class DataService {
  private baseUrl = "https://www.dnd5eapi.co";

  async fetchData<T>(endpoint: string): Promise<T | null> {
    const response = await fetch(this.baseUrl + `${endpoint}`);
    if (!response.ok) {
      console.log(`Failed to fetch data from ${endpoint}`);
      return null;
    }
    return (await response.json()) as T;
  }

  async getRace(name: string) {
    try {
      const res = await this.fetchData<IRace>("/api/races/" + name);
      return res;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async getRaces() {
    return await this.fetchData<RacesResponse>("/api/races");
  }

  async getClasses() {
    return await this.fetchData("/api/classes");
  }

  async getAlignments(): Promise<AlignmentsResponse | null> {
    return await this.fetchData<AlignmentsResponse>("/api/alignments");
  }

  async getSkills() {
    return await this.fetchData("/api/skills");
  }

  async getTraits() {
    return await this.fetchData("/api/traits");
  }

  async getProficiencies() {
    return await this.fetchData("/api/proficiencies");
  }

  async getSubraces() {
    return await this.fetchData("/api/subraces");
  }
}
