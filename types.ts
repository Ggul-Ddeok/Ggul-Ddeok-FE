export interface Policy {
  id: number;
  name: string;
  summary: string;
  tags: string[];
  region: string;
  details: string;
}

export type PageState = "main" | "policyList" | "policyDetail" | "myPage";
