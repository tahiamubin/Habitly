// src/data/guides.ts

import { Guide } from "../types/guide";

export const guides: Guide[] = [
  {
    id: "1",
    title: "Morning Pages: A 21-Day Journaling Habit",
    category: "Mindfulness",
    difficulty: "Beginner",
    shortDescription:
      "Build mental clarity by writing three pages every morning, distraction-free.",
    fullDescription:
      "Morning Pages is a stream-of-consciousness journaling technique practiced first thing after waking. Over 21 days, you'll train your mind to offload clutter, spot recurring thought patterns, and start each day with a clearer head. No editing, no judging — just writing.",
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db",
    steps: [
      "Keep a notebook and pen by your bed the night before",
      "Write exactly three pages by hand every morning before checking your phone",
      "Don't stop to edit, judge, or reread what you wrote",
      "Track your streak and reflect weekly on recurring themes",
    ],
    durationDays: 21,
    rating: 4.7,
  },
  {
    id: "2",
    title: "The 8-Glass Hydration Challenge",
    category: "Health",
    difficulty: "Beginner",
    shortDescription:
      "Build a consistent daily water intake habit using simple hourly reminders.",
    fullDescription:
      "Chronic mild dehydration is one of the most common (and overlooked) energy drains. This challenge helps you build a repeatable system for hitting 8 glasses of water a day using time-based triggers instead of relying on willpower alone.",
    image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d",
    steps: [
      "Fill a marked water bottle each morning",
      "Set reminders every 2 hours during waking hours",
      "Pair drinking water with an existing habit (e.g. after each meal)",
      "Log your glasses at the end of each day",
    ],
    durationDays: 14,
    rating: 4.3,
  },
  {
    id: "3",
    title: "Deep Work Blocks: 90-Minute Focus Sprints",
    category: "Focus",
    difficulty: "Intermediate",
    shortDescription:
      "Structure your day around distraction-free 90-minute blocks of deep concentration.",
    fullDescription:
      "Based on ultradian rhythm research, this guide teaches you to work in focused 90-minute sprints followed by real recovery breaks. You'll learn how to prep your environment, silence notifications, and protect your most valuable working hours.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643",
    steps: [
      "Choose your single most important task the night before",
      "Block 90 minutes on your calendar with notifications off",
      "Work only on that one task — no email, no tabs, no phone",
      "Take a genuine 15-20 minute break before your next block",
    ],
    durationDays: 30,
    rating: 4.8,
  },
  {
    id: "4",
    title: "Wind-Down Ritual for Better Sleep",
    category: "Sleep",
    difficulty: "Beginner",
    shortDescription:
      "A repeatable 30-minute pre-bed routine to fall asleep faster and sleep deeper.",
    fullDescription:
      "Your brain relies on consistent cues to know when it's time to sleep. This guide walks you through building a calming, screen-free wind-down ritual that signals bedtime to your body every single night.",
    image: "https://images.unsplash.com/photo-1585577529540-a8095ea25427?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    steps: [
      "Dim household lights 60 minutes before bed",
      "Put your phone on charge outside the bedroom",
      "Do 10 minutes of light stretching or reading",
      "Go to bed at the same time every night, even on weekends",
    ],
    durationDays: 21,
    rating: 4.6,
  },
  {
    id: "5",
    title: "Bodyweight Basics: 15-Minute Daily Fitness",
    category: "Fitness",
    difficulty: "Beginner",
    shortDescription:
      "A no-equipment daily routine to build strength and consistency from scratch.",
    fullDescription:
      "This guide is built for people who've never stuck to a fitness habit before. Using only bodyweight movements and a 15-minute daily commitment, you'll build the consistency muscle before worrying about intensity or equipment.",
    image: "https://plus.unsplash.com/premium_photo-1670505062582-fdaa83c23c9e?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    steps: [
      "Pick a fixed time slot each day for your 15 minutes",
      "Rotate through squats, push-ups, planks, and lunges",
      "Track reps, not perfection — consistency beats intensity",
      "Increase reps slightly every week",
    ],
    durationDays: 30,
    rating: 4.5,
  },
  {
    id: "6",
    title: "Single-Tasking: Breaking the Multitask Habit",
    category: "Focus",
    difficulty: "Intermediate",
    shortDescription:
      "Retrain your brain to focus on one thing at a time in a multitasking world.",
    fullDescription:
      "Multitasking feels productive but quietly destroys focus and work quality. This guide gives you a practical framework to catch yourself mid-switch and rebuild the habit of single-tasking, one task at a time.",
    image: "https://images.unsplash.com/photo-1517971071642-34a2d3ecc9cd",
    steps: [
      "Close every tab and app not needed for your current task",
      "Write your current task on a sticky note as a visual anchor",
      "When you notice yourself switching, pause and return to the note",
      "Log how many times you caught yourself each day",
    ],
    durationDays: 14,
    rating: 4.2,
  },
  {
    id: "7",
    title: "Digital Sunset: No Screens After 9 PM",
    category: "Sleep",
    difficulty: "Intermediate",
    shortDescription:
      "Cut evening screen time to improve sleep quality and reduce late-night scrolling.",
    fullDescription:
      "Blue light and endless scrolling are two of the biggest sleep disruptors. This guide helps you build a firm digital sunset habit, replacing screen time with wind-down activities that actually help you rest.",
    image: "https://images.unsplash.com/photo-1512438248247-f0f2a5a8b7f0",
    steps: [
      "Set a hard phone-down alarm for 9 PM",
      "Charge your phone in another room overnight",
      "Prepare an alternative activity (book, journal, stretching)",
      "Track how many nights you hit your digital sunset each week",
    ],
    durationDays: 21,
    rating: 4.4,
  },
  {
    id: "8",
    title: "5-Minute Meditation Starter Habit",
    category: "Mindfulness",
    difficulty: "Beginner",
    shortDescription:
      "Start a sustainable meditation practice with just five minutes a day.",
    fullDescription:
      "Most people quit meditation because they start too ambitious. This guide keeps sessions short and simple, focused purely on consistency, so the habit actually sticks before you scale up duration.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773",
    steps: [
      "Sit somewhere quiet for exactly 5 minutes",
      "Use a simple breath-count technique (in for 4, out for 6)",
      "Use a timer so you're not checking the clock",
      "Log your session immediately after, even if it felt hard",
    ],
    durationDays: 14,
    rating: 4.6,
  },
  {
    id: "9",
    title: "The 10,000 Steps Habit",
    category: "Fitness",
    difficulty: "Beginner",
    shortDescription:
      "Build daily movement into your routine without needing a gym.",
    fullDescription:
      "Walking is one of the most sustainable fitness habits because it requires no equipment and low recovery time. This guide helps you gradually work up to 10,000 daily steps using small, realistic increases.",
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8",
    steps: [
      "Track your current baseline daily steps for 3 days",
      "Add a 10-15 minute walk at a fixed time each day",
      "Take stairs and park farther away when possible",
      "Increase your daily target by 500 steps each week",
    ],
    durationDays: 30,
    rating: 4.5,
  },
  {
    id: "10",
    title: "Time Blocking for a Chaotic Schedule",
    category: "Focus",
    difficulty: "Advanced",
    shortDescription:
      "Take control of a packed calendar using structured time-blocking.",
    fullDescription:
      "For people juggling multiple responsibilities, reactive scheduling leads to burnout. This guide teaches advanced time-blocking techniques, including buffer blocks and weekly resets, to keep your calendar realistic and sane.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    steps: [
      "Do a weekly planning session every Sunday",
      "Block time for deep work, meetings, and admin separately",
      "Add 15-minute buffer blocks between meetings",
      "Review and adjust your blocks at the end of each day",
    ],
    durationDays: 30,
    rating: 4.7,
  },
  {
    id: "11",
    title: "Sugar Reset: 14 Days Without Added Sugar",
    category: "Health",
    difficulty: "Advanced",
    shortDescription:
      "Reset your palate and energy levels by cutting added sugar for two weeks.",
    fullDescription:
      "Added sugar is hidden in most processed foods and quietly fuels energy crashes. This structured 14-day reset helps you identify hidden sugar sources and replace them with more stable, whole-food alternatives.",
    image: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea",
    steps: [
      "Read labels and identify hidden sugar in your usual meals",
      "Swap sugary snacks for fruit, nuts, or plain yogurt",
      "Prep meals ahead to avoid reaching for convenience food",
      "Track energy levels daily to notice patterns",
    ],
    durationDays: 14,
    rating: 4.1,
  },
  {
    id: "12",
    title: "Power Nap Protocol",
    category: "Sleep",
    difficulty: "Beginner",
    shortDescription:
      "Use short, well-timed naps to boost afternoon energy without grogginess.",
    fullDescription:
      "A poorly timed nap can leave you groggier than before. This guide teaches the exact timing and duration for a power nap that restores energy without disrupting your nighttime sleep.",
    image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55",
    steps: [
      "Nap between 1 PM and 3 PM only",
      "Set an alarm for exactly 20 minutes",
      "Nap in a dim, quiet space to fall asleep faster",
      "Get up immediately when the alarm goes off, even if groggy",
    ],
    durationDays: 14,
    rating: 4.0,
  },
  {
    id: "13",
    title: "Gratitude Practice: 3 Things a Day",
    category: "Mindfulness",
    difficulty: "Beginner",
    shortDescription:
      "Shift your mindset by writing down three things you're grateful for daily.",
    fullDescription:
      "Gratitude journaling is one of the most researched habits for improving mood and outlook. This guide gives you a simple, repeatable format to keep the practice from becoming stale or generic.",
    image: "https://images.unsplash.com/photo-1519834785169-98be25ec3f84",
    steps: [
      "Keep a small notebook by your bed",
      "Each night, write down 3 specific things from that day",
      "Avoid repeating the same 3 things — get specific",
      "Reread a week's entries every Sunday",
    ],
    durationDays: 21,
    rating: 4.6,
  },
  {
    id: "14",
    title: "Strength Foundations: 3x a Week Routine",
    category: "Fitness",
    difficulty: "Intermediate",
    shortDescription:
      "Build a sustainable strength training habit with three sessions a week.",
    fullDescription:
      "This guide is for people ready to move beyond bodyweight basics into structured strength training. With just three sessions a week, you'll build consistency and confidence in the weight room or home gym.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48",
    steps: [
      "Schedule 3 fixed strength days per week with rest days between",
      "Focus on compound lifts: squat, deadlift, bench, row",
      "Track weights and reps in a simple log",
      "Increase load gradually once form feels solid",
    ],
    durationDays: 30,
    rating: 4.8,
  },
  {
    id: "15",
    title: "The Two-Minute Rule for Procrastination",
    category: "Focus",
    difficulty: "Beginner",
    shortDescription:
      "Beat procrastination by shrinking any habit down to its first two minutes.",
    fullDescription:
      "Starting is usually the hardest part of any habit. This guide teaches the two-minute rule: scale any task down until it takes less than two minutes to begin, making procrastination far easier to overcome.",
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
    steps: [
      "Identify the task you keep avoiding",
      "Shrink it down to a two-minute starting action",
      "Commit only to the two minutes, not the whole task",
      "Notice how often momentum carries you past the two minutes",
    ],
    durationDays: 14,
    rating: 4.4,
  },
  {
    id: "16",
    title: "Sunlight Reset: Morning Light Exposure",
    category: "Health",
    difficulty: "Beginner",
    shortDescription:
      "Regulate your body clock with 10 minutes of natural morning sunlight.",
    fullDescription:
      "Morning sunlight exposure helps anchor your circadian rhythm, improving both energy during the day and sleep quality at night. This guide builds a simple, low-effort daily habit around it.",
    image: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8",
    steps: [
      "Step outside within 30 minutes of waking",
      "Spend at least 10 minutes in natural light without sunglasses",
      "Pair it with a walk or morning coffee for consistency",
      "Track how you feel by early afternoon",
    ],
    durationDays: 21,
    rating: 4.3,
  },
  {
    id: "17",
    title: "Weekly Review Ritual",
    category: "Focus",
    difficulty: "Intermediate",
    shortDescription:
      "A structured 30-minute weekly check-in to reset priorities and clear mental clutter.",
    fullDescription:
      "Without regular review, priorities drift and small tasks pile up unnoticed. This guide gives you a simple weekly review structure to close open loops and enter each week with clarity.",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952",
    steps: [
      "Block 30 minutes every Friday or Sunday",
      "Review completed tasks and unfinished loose ends",
      "Clear your inbox and task list to zero",
      "Set your top 3 priorities for the coming week",
    ],
    durationDays: 30,
    rating: 4.5,
  },
  {
    id: "18",
    title: "Mindful Eating: Slow Down Your Meals",
    category: "Mindfulness",
    difficulty: "Intermediate",
    shortDescription:
      "Improve digestion and satisfaction by eating slower and with more attention.",
    fullDescription:
      "Eating on autopilot often leads to overeating and poor digestion. This guide helps you build the habit of slowing down, chewing thoroughly, and actually noticing your food.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    steps: [
      "Put your utensils down between bites",
      "Chew each bite fully before swallowing",
      "Remove screens and distractions during meals",
      "Pause halfway through your meal to check your hunger level",
    ],
    durationDays: 21,
    rating: 4.2,
  },
  {
    id: "19",
    title: "Stretch Break Habit for Desk Workers",
    category: "Fitness",
    difficulty: "Beginner",
    shortDescription:
      "Reduce stiffness and improve posture with short stretch breaks during work.",
    fullDescription:
      "Long sitting sessions lead to stiffness and poor posture over time. This guide builds a simple habit of short, regular stretch breaks that fit naturally into a desk-based workday.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b",
    steps: [
      "Set a timer for every 60 minutes of sitting",
      "Stand and do 5 stretches focused on neck, back, and hips",
      "Take a short walk if possible between meetings",
      "Track how many breaks you complete each day",
    ],
    durationDays: 14,
    rating: 4.1,
  },
  {
    id: "20",
    title: "No-Snooze Mornings: Fixing Your Wake-Up Habit",
    category: "Sleep",
    difficulty: "Advanced",
    shortDescription:
      "Break the snooze-button cycle and build a consistent, energized wake-up routine.",
    fullDescription:
      "Hitting snooze repeatedly fragments sleep and leaves you groggier than getting up on the first alarm. This guide walks through a full wake-up system redesign, from alarm placement to morning light.",
    image: "https://images.unsplash.com/photo-1541697030313-c55aac74fbae?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    steps: [
      "Move your alarm across the room so you must get up to stop it",
      "Set a consistent wake time, even on weekends",
      "Open curtains or get sunlight immediately after waking",
      "Avoid checking your phone for the first 10 minutes",
    ],
    durationDays: 21,
    rating: 4.4,
  },
];