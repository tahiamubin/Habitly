import AddHabitForm from "../components/AddHabitForm";


export default function AddHabitPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-black">
            Add New <span style={{ color: "#7283ff" }}>Habit</span>
          </h1>
          <p className="text-gray-600 mt-1">
            Start building a new habit today
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
          <AddHabitForm />
        </div>
      </div>
    </div>
  );
}