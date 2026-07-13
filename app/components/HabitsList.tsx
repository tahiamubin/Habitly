"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { 
  FaEye, 
  FaTrash, 
  FaFire, 
  FaCalendarAlt,
  FaTimes,
  FaCheckCircle,
  FaClock,
  FaPlus
} from "react-icons/fa";
import { deleteHabit } from "../lib/actions/habits";
import toast from "react-hot-toast";

interface Habit {
  _id: object;
  name: string;
  description?: string;
  frequency: "daily" | "weekly" | "monthly";
  target?: string;
  category?: string;
  streak: number;
  completed: boolean;
  createdAt: string;
  history?: string[];
}

interface HabitsListProps {
  habits: Habit[];
}

const HabitsList = ({ habits }: HabitsListProps) => {
  const router = useRouter();
  const [selectedHabit, setSelectedHabit] = useState<Habit | null>(null);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleView = (habit: Habit) => {
    setSelectedHabit(habit);
  };

  const handleDelete = async(id: string) => {
    
   await deleteHabit(id)
   toast.success("Deleted")
  };

  const confirmDelete = () => {
    if (!deleteId) return;
    
    setIsDeleting(true);
    
    setTimeout(() => {
      const existingHabits = JSON.parse(localStorage.getItem("habitly_habits") || "[]");
      const updatedHabits = existingHabits.filter((h: Habit) => h.id !== deleteId);
      localStorage.setItem("habitly_habits", JSON.stringify(updatedHabits));
      
      setIsDeleting(false);
      setDeleteId(null);
      router.refresh();
    }, 500);
  };

  const cancelDelete = () => {
    setDeleteId(null);
  };

  const frequencyColor = {
    daily: "#b6ffde",
    weekly: "#7283ff",
    monthly: "#ff6b6b"
  };

  const frequencyLabel = {
    daily: "Daily",
    weekly: "Weekly",
    monthly: "Monthly"
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <>
      {/* Mobile Add Button - Only visible on mobile */}
      <div className="md:hidden mb-4">
        <Link
          href="/my-habits"
          className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-medium text-white transition-all hover:opacity-90"
          style={{ backgroundColor: "#7283ff" }}
        >
          <FaPlus className="w-4 h-4" />
          Add New Habit
        </Link>
      </div>

      {/* Desktop Table View */}
      <div className="hidden md:block bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Habit</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Category</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Frequency</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Target</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Streak</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Status</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Created</th>
                <th className="px-6 py-4 text-right text-sm font-semibold text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {habits.map((habit) => (
                <tr key={habit._id} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-medium text-black">{habit.name}</p>
                      {habit.description && (
                        <p className="text-sm text-gray-500 truncate max-w-xs">{habit.description}</p>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-600">{habit.category || "—"}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span 
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium"
                      style={{ 
                        backgroundColor: frequencyColor[habit.frequency],
                        color: habit.frequency === "daily" ? "black" : "white"
                      }}
                    >
                      {frequencyLabel[habit.frequency]}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-600">{habit.target || "—"}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1.5">
                      <FaFire className="w-4 h-4" style={{ color: habit.streak > 0 ? "#ff6b6b" : "#d1d5db" }} />
                      <span className="font-medium text-black">{habit.streak}d</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    {habit.completed ? (
                      <span className="inline-flex items-center gap-1 text-sm text-green-600">
                        <FaCheckCircle className="w-4 h-4" />
                        Done
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-sm text-gray-400">
                        <FaClock className="w-4 h-4" />
                        Pending
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1.5">
                      <FaCalendarAlt className="w-3 h-3 text-gray-400" />
                      <span className="text-sm text-gray-500">{formatDate(habit.createdAt)}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => handleView(habit)}
                        className="p-2 rounded-lg text-gray-400 hover:text-[#7283ff] hover:bg-[#7283ff]/10 transition-all"
                        title="View"
                      >
                        <FaEye className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(habit._id)}
                        className="p-2 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 transition-all"
                        title="Delete"
                      >
                        <FaTrash className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden space-y-4">
        {habits.map((habit) => (
          <div key={habit._id} className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h3 className="font-bold text-black">{habit.name}</h3>
                {habit.description && (
                  <p className="text-sm text-gray-500 mt-0.5">{habit.description}</p>
                )}
              </div>
              <div className="flex items-center gap-1.5 text-xs text-gray-400">
                <FaCalendarAlt className="w-3 h-3" />
                <span>{formatDate(habit.createdAt)}</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span 
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium"
                style={{ 
                  backgroundColor: frequencyColor[habit.frequency],
                  color: habit.frequency === "daily" ? "black" : "white"
                }}
              >
                {frequencyLabel[habit.frequency]}
              </span>
              {habit.category && (
                <span className="text-xs text-gray-500">{habit.category}</span>
              )}
              {habit.target && (
                <span className="text-xs text-gray-500">🎯 {habit.target}</span>
              )}
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-gray-100">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  <FaFire className="w-4 h-4" style={{ color: habit.streak > 0 ? "#ff6b6b" : "#d1d5db" }} />
                  <span className="font-medium text-black">{habit.streak}d</span>
                </div>
                {habit.completed ? (
                  <span className="text-xs text-green-600 flex items-center gap-1">
                    <FaCheckCircle className="w-3 h-3" /> Done
                  </span>
                ) : (
                  <span className="text-xs text-gray-400 flex items-center gap-1">
                    <FaClock className="w-3 h-3" /> Pending
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleView(habit)}
                  className="p-2 rounded-lg text-gray-400 hover:text-[#7283ff] hover:bg-[#7283ff]/10 transition-all"
                >
                  <FaEye className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleDelete(habit._id)}
                  className="p-2 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 transition-all"
                >
                  <FaTrash className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View Modal */}
      {selectedHabit && (
        <ViewModal habit={selectedHabit} onClose={() => setSelectedHabit(null)} />
      )}

      {/* Delete Confirmation Modal */}
      {deleteId && (
        <DeleteModal 
          onConfirm={confirmDelete} 
          onCancel={cancelDelete}
          isDeleting={isDeleting}
        />
      )}
    </>
  );
};

// View Modal Component
const ViewModal = ({ habit, onClose }: { habit: Habit; onClose: () => void }) => {
  const frequencyLabel = {
    daily: "Daily",
    weekly: "Weekly",
    monthly: "Monthly"
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <div>
            <h2 className="text-2xl font-bold text-black">{habit.name}</h2>
            <div className="flex items-center gap-2 mt-1 text-sm text-gray-500">
              <FaCalendarAlt className="w-3 h-3" />
              <span>Created: {formatDate(habit.createdAt)} at {formatTime(habit.createdAt)}</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100 transition-all"
          >
            <FaTimes className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Description */}
          {habit.description && (
            <div>
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">
                Description
              </h4>
              <p className="text-gray-700">{habit.description}</p>
            </div>
          )}

          {/* Details Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">
                Category
              </h4>
              <p className="text-gray-700">{habit.category || "—"}</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">
                Frequency
              </h4>
              <p className="text-gray-700">{frequencyLabel[habit.frequency]}</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">
                Target
              </h4>
              <p className="text-gray-700">{habit.target || "—"}</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">
                Streak
              </h4>
              <p className="text-gray-700 flex items-center gap-1.5">
                <FaFire className="w-4 h-4" style={{ color: habit.streak > 0 ? "#ff6b6b" : "#d1d5db" }} />
                {habit.streak} days
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">
                Status
              </h4>
              <p className="text-gray-700">
                {habit.completed ? (
                  <span className="text-green-600 flex items-center gap-1">
                    <FaCheckCircle className="w-4 h-4" /> Completed
                  </span>
                ) : (
                  <span className="text-gray-400 flex items-center gap-1">
                    <FaClock className="w-4 h-4" /> Pending
                  </span>
                )}
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">
                ID
              </h4>
              <p className="text-gray-700 text-xs font-mono truncate">{habit.id}</p>
            </div>
          </div>

          {/* History */}
          {habit.history && habit.history.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                History ({habit.history.length} days)
              </h4>
              <div className="flex flex-wrap gap-2">
                {habit.history.map((date, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-full text-xs bg-gray-100 text-gray-600"
                  >
                    {formatDate(date)}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex justify-end p-6 border-t border-gray-100">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-lg font-medium text-white transition-all hover:opacity-90"
            style={{ backgroundColor: "#7283ff" }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

// Delete Modal Component
const DeleteModal = ({ 
  onConfirm, 
  onCancel, 
  isDeleting 
}: { 
  onConfirm: () => void; 
  onCancel: () => void; 
  isDeleting: boolean;
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl">
        <div className="text-center">
          <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-4">
            <FaTrash className="w-8 h-8 text-red-500" />
          </div>
          <h3 className="text-xl font-bold text-black mb-2">Delete Habit</h3>
          <p className="text-gray-600 mb-6">
            Are you sure you want to delete this habit? This action cannot be undone.
          </p>
          <div className="flex gap-3">
            <button
              onClick={onCancel}
              className="flex-1 px-4 py-2.5 rounded-lg font-medium text-gray-600 hover:bg-gray-50 transition-all border border-gray-200"
              disabled={isDeleting}
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
              disabled={isDeleting}
              className="flex-1 px-4 py-2.5 rounded-lg font-medium text-white bg-red-500 hover:bg-red-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isDeleting ? "Deleting..." : "Delete"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HabitsList;