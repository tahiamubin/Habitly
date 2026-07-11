// /types/guide.ts

export interface Guide {
  id: string;
  title: string;
  category: "Health" | "Focus" | "Sleep" | "Fitness" | "Mindfulness";
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  shortDescription: string;
  fullDescription: string;
  image: string;
  images?: string[];
  steps: string[];
  durationDays?: number;
  rating: number;
}

export interface Review {
  id: string;
  guideId: string;
  reviewerName: string;
  rating: number;
  comment: string;
  createdAt: string;
}