

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
interface Habit {
  category: string;
  description: string;
  name: string;
  target: string;
}
interface HabitResponse extends Habit {
  _id: string;
  createdAt: string;
}

export const creteHabit = async (data: Habit): Promise<HabitResponse> => {
  const res = await fetch(`${baseUrl}/habit`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res.json();
};
