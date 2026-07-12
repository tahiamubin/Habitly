"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface HabitFormData {
  name: string;
  description: string;
  frequency: "daily" | "weekly" | "monthly";
  target: string;
  category: string;
}

const AddHabitForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<HabitFormData>({
    name: "",
    description: "",
    frequency: "daily",
    target: "",
    category: ""
  });

  const categories = [
    "Health",
    "Fitness",
    "Mindfulness",
    "Productivity",
    "Learning",
    "Finance",
    "Relationships",
    "Other"
  ];

  const frequencies = [
    { value: "daily", label: "Daily" },
    { value: "weekly", label: "Weekly" },
    { value: "monthly", label: "Monthly" }
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget)
    const habit = Object.fromEntries(formData.entries())
    console.log(habit)

  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Habit Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
          Habit Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="e.g., Morning Meditation"
          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7283ff] focus:border-transparent transition-all"
          required
        />
      </div>

      {/* Description */}
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1.5">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows={3}
          placeholder="Describe your habit goal..."
          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7283ff] focus:border-transparent transition-all resize-none"
        />
      </div>

      {/* Category */}
      <div>
        <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1.5">
          Category *
        </label>
        <select
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7283ff] focus:border-transparent transition-all bg-white"
          required
        >
          <option value="">Select a category</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Frequency */}
      <div>
        <label htmlFor="frequency" className="block text-sm font-medium text-gray-700 mb-1.5">
          Frequency *
        </label>
        <div className="grid grid-cols-3 gap-3">
          {frequencies.map((freq) => (
            <button
              key={freq.value}
              type="button"
              onClick={() => setFormData((prev) => ({ ...prev, frequency: freq.value as any }))}
              className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                formData.frequency === freq.value
                  ? "text-white shadow-sm"
                  : "bg-gray-50 text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}
              style={{
                backgroundColor: formData.frequency === freq.value ? "#7283ff" : "transparent"
              }}
            >
              {freq.label}
            </button>
          ))}
        </div>
      </div>

      {/* Target */}
      <div>
        <label htmlFor="target" className="block text-sm font-medium text-gray-700 mb-1.5">
          Target
        </label>
        <input
          type="text"
          id="target"
          name="target"
          value={formData.target}
          onChange={handleChange}
          placeholder="e.g., 10 minutes, 3 times, 5km"
          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7283ff] focus:border-transparent transition-all"
        />
      </div>

      {/* Submit Buttons */}
      <div className="flex gap-3 pt-4 border-t border-gray-100">
        <button
          type="submit"
          disabled={isLoading}
          className="flex-1 py-2.5 rounded-lg font-medium text-white transition-all hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
          style={{ backgroundColor: "#7283ff" }}
        >
          {isLoading ? "Creating..." : "Create Habit"}
        </button>
        <button
          type="button"
          onClick={() => router.back()}
          className="px-6 py-2.5 rounded-lg font-medium text-gray-600 hover:bg-gray-50 transition-all border border-gray-200"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default AddHabitForm;