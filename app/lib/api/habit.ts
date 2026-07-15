export interface Habit {
  _id: string;
  category: string;
  description: string;
  name: string;
  target: string;
  frequency: "daily" | "weekly" | "monthly";
  createdAt: string;
}

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const getHabit = async (): Promise<Habit[]> => {
  const res = await fetch(`${baseUrl}/habit`, { cache: "no-store" });
  return res.json();
};
