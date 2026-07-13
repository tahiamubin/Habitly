import { getToken } from "../api/token";

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
  const token = await getToken();
  console.log("got token:", token);
  const res = await fetch(`${baseUrl}/habit`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const deleteHabit = async (id: string) => {
  try {
    const res = await fetch(`${baseUrl}/habit/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};
