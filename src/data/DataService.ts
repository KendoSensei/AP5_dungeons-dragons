import { AlignmentsResponse } from "../interfaces/alignment.interface";
import { IRace, RacesResponse } from "../interfaces/race.interface";
import { ClassesResponse } from "../interfaces/class.interface";

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
      return await this.fetchData<IRace>("/api/races/" + name);
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async getRaces() {
    return await this.fetchData<RacesResponse>("/api/races");
  }

  async getClass(name: string) {
    try {
      return await this.fetchData<IRace>("/api/classes/" + name);
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async getClasses() {
    return await this.fetchData<ClassesResponse>("/api/classes");
  }

  async getAlignments(): Promise<AlignmentsResponse | null> {
    return await this.fetchData<AlignmentsResponse>("/api/alignments");
  }
}
