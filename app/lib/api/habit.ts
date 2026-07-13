interface Habit {
  _id: string;
  category: string;
  description: string;
  name: string;
  target: string;
  createdAt: string;
}

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const getHabit = async (): Promise<Habit[]> => {
  const res = await fetch(`${baseUrl}/habit`);
  return res.json();
};