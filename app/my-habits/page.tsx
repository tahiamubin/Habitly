import HabitsList from "../components/HabitsList";
import { getHabit } from "../lib/api/habit";


const Page = async () => {
  const habits = await getHabit();

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-black">
              My <span style={{ color: "#7283ff" }}>Habits</span>
            </h1>
            <p className="text-gray-600 mt-1">
              Track and manage all your habits in one place
            </p>
          </div>
          <div className="mt-4 sm:mt-0">
            <a
              href="/habits"
              className="inline-flex items-center px-4 py-2.5 rounded-lg font-medium text-white transition-all hover:opacity-90"
              style={{ backgroundColor: "#7283ff" }}
            >
              + Add New Habit
            </a>
          </div>
        </div>

        {habits.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-gray-100">
            <div className="text-6xl mb-4">🌱</div>
            <h3 className="text-xl font-semibold text-black mb-2">No habits yet</h3>
            <p className="text-gray-600 mb-6">Start building your first habit today</p>
            <a
              href="/habits/add"
              className="inline-flex items-center px-6 py-2.5 rounded-lg font-medium text-white transition-all hover:opacity-90"
              style={{ backgroundColor: "#7283ff" }}
            >
              + Create Habit
            </a>
          </div>
        ) : (
          <HabitsList   habits={habits} />
        )}
      </div>
    </div>
  );
};

export default Page;