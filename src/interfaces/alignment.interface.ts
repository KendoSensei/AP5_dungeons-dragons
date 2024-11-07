export interface AlignmentResult {
  index: string;
  name: string;
  url: string;
}

export interface AlignmentsResponse {
  count: number;
  results: AlignmentResult[];
}
