
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface GymClass {
  id: string;
  name: string;
  time: string;
  duration: string;
  trainer: string;
  category: string;
  intensity: "Low" | "Medium" | "High";
}

// Sample schedule data
const weeklyClasses: Record<string, GymClass[]> = {
  monday: [
    { id: "m1", name: "Morning Yoga", time: "06:00 AM", duration: "60 min", trainer: "Emily R.", category: "Yoga", intensity: "Low" },
    { id: "m2", name: "HIIT Challenge", time: "08:30 AM", duration: "45 min", trainer: "Mike T.", category: "Cardio", intensity: "High" },
    { id: "m3", name: "Strength Basics", time: "10:00 AM", duration: "60 min", trainer: "Jason K.", category: "Strength", intensity: "Medium" },
    { id: "m4", name: "Spin Class", time: "12:30 PM", duration: "45 min", trainer: "Sarah L.", category: "Cardio", intensity: "High" },
    { id: "m5", name: "Power Lifting", time: "05:30 PM", duration: "75 min", trainer: "David M.", category: "Strength", intensity: "High" },
    { id: "m6", name: "Evening Flow", time: "07:00 PM", duration: "60 min", trainer: "Emma S.", category: "Yoga", intensity: "Low" },
  ],
  tuesday: [
    { id: "t1", name: "Circuit Training", time: "06:30 AM", duration: "45 min", trainer: "Mike T.", category: "Strength", intensity: "High" },
    { id: "t2", name: "Pilates", time: "09:00 AM", duration: "60 min", trainer: "Emma S.", category: "Yoga", intensity: "Medium" },
    { id: "t3", name: "Boxing Fundamentals", time: "11:30 AM", duration: "60 min", trainer: "David M.", category: "Cardio", intensity: "High" },
    { id: "t4", name: "Core Strength", time: "01:00 PM", duration: "30 min", trainer: "Sarah L.", category: "Strength", intensity: "Medium" },
    { id: "t5", name: "HIIT Extreme", time: "06:00 PM", duration: "45 min", trainer: "Jason K.", category: "Cardio", intensity: "High" },
    { id: "t6", name: "Restorative Yoga", time: "08:00 PM", duration: "60 min", trainer: "Emily R.", category: "Yoga", intensity: "Low" },
  ],
  wednesday: [
    { id: "w1", name: "Sunrise Stretch", time: "06:00 AM", duration: "45 min", trainer: "Emily R.", category: "Yoga", intensity: "Low" },
    { id: "w2", name: "Functional Fitness", time: "07:30 AM", duration: "60 min", trainer: "Jason K.", category: "Strength", intensity: "Medium" },
    { id: "w3", name: "Cardio Blast", time: "12:00 PM", duration: "45 min", trainer: "Sarah L.", category: "Cardio", intensity: "High" },
    { id: "w4", name: "Weight Training", time: "04:30 PM", duration: "60 min", trainer: "David M.", category: "Strength", intensity: "High" },
    { id: "w5", name: "Cycling", time: "06:00 PM", duration: "45 min", trainer: "Mike T.", category: "Cardio", intensity: "Medium" },
    { id: "w6", name: "Power Yoga", time: "07:30 PM", duration: "60 min", trainer: "Emma S.", category: "Yoga", intensity: "Medium" },
  ],
  thursday: [
    { id: "th1", name: "TRX Training", time: "07:00 AM", duration: "45 min", trainer: "David M.", category: "Strength", intensity: "Medium" },
    { id: "th2", name: "Dance Fitness", time: "09:30 AM", duration: "60 min", trainer: "Sarah L.", category: "Cardio", intensity: "Medium" },
    { id: "th3", name: "Kettlebell Circuit", time: "11:00 AM", duration: "45 min", trainer: "Jason K.", category: "Strength", intensity: "High" },
    { id: "th4", name: "Flexibility Flow", time: "01:30 PM", duration: "45 min", trainer: "Emily R.", category: "Yoga", intensity: "Low" },
    { id: "th5", name: "HIIT & Core", time: "05:30 PM", duration: "45 min", trainer: "Mike T.", category: "Cardio", intensity: "High" },
    { id: "th6", name: "Mobility Work", time: "07:30 PM", duration: "45 min", trainer: "Emma S.", category: "Yoga", intensity: "Medium" },
  ],
  friday: [
    { id: "f1", name: "Morning HIIT", time: "06:30 AM", duration: "30 min", trainer: "Mike T.", category: "Cardio", intensity: "High" },
    { id: "f2", name: "Vinyasa Yoga", time: "08:00 AM", duration: "60 min", trainer: "Emma S.", category: "Yoga", intensity: "Medium" },
    { id: "f3", name: "Strong & Fit", time: "12:00 PM", duration: "45 min", trainer: "David M.", category: "Strength", intensity: "High" },
    { id: "f4", name: "Spin & Sculpt", time: "03:30 PM", duration: "60 min", trainer: "Sarah L.", category: "Cardio", intensity: "High" },
    { id: "f5", name: "Olympic Lifting", time: "05:00 PM", duration: "75 min", trainer: "Jason K.", category: "Strength", intensity: "High" },
    { id: "f6", name: "Candlelight Yoga", time: "07:30 PM", duration: "60 min", trainer: "Emily R.", category: "Yoga", intensity: "Low" },
  ],
  saturday: [
    { id: "s1", name: "Weekend Warrior", time: "08:00 AM", duration: "60 min", trainer: "Mike T.", category: "Cardio", intensity: "High" },
    { id: "s2", name: "Yoga for Athletes", time: "09:30 AM", duration: "60 min", trainer: "Emily R.", category: "Yoga", intensity: "Medium" },
    { id: "s3", name: "Boot Camp", time: "11:00 AM", duration: "60 min", trainer: "David M.", category: "Strength", intensity: "High" },
    { id: "s4", name: "Boxing Conditioning", time: "01:00 PM", duration: "45 min", trainer: "Jason K.", category: "Cardio", intensity: "High" },
    { id: "s5", name: "Core & More", time: "02:30 PM", duration: "45 min", trainer: "Sarah L.", category: "Strength", intensity: "Medium" },
  ],
  sunday: [
    { id: "su1", name: "Gentle Yoga", time: "09:00 AM", duration: "60 min", trainer: "Emma S.", category: "Yoga", intensity: "Low" },
    { id: "su2", name: "Full Body Workout", time: "10:30 AM", duration: "60 min", trainer: "David M.", category: "Strength", intensity: "Medium" },
    { id: "su3", name: "Cardio Dance", time: "12:00 PM", duration: "45 min", trainer: "Sarah L.", category: "Cardio", intensity: "Medium" },
    { id: "su4", name: "Sunday Stretch", time: "04:00 PM", duration: "45 min", trainer: "Emily R.", category: "Yoga", intensity: "Low" },
  ],
};

const dayLabels = {
  monday: "Monday",
  tuesday: "Tuesday",
  wednesday: "Wednesday",
  thursday: "Thursday",
  friday: "Friday",
  saturday: "Saturday",
  sunday: "Sunday",
};

const getIntensityColor = (intensity: string) => {
  switch (intensity) {
    case "Low":
      return "bg-green-100 text-green-800 hover:bg-green-200";
    case "Medium":
      return "bg-yellow-100 text-yellow-800 hover:bg-yellow-200";
    case "High":
      return "bg-red-100 text-red-800 hover:bg-red-200";
    default:
      return "bg-gray-100 text-gray-800 hover:bg-gray-200";
  }
};

const getCategoryColor = (category: string) => {
  switch (category) {
    case "Yoga":
      return "bg-purple-100 text-purple-800 hover:bg-purple-200";
    case "Cardio":
      return "bg-blue-100 text-blue-800 hover:bg-blue-200";
    case "Strength":
      return "bg-orange-100 text-orange-800 hover:bg-orange-200";
    default:
      return "bg-gray-100 text-gray-800 hover:bg-gray-200";
  }
};

const ClassSchedule = () => {
  const [activeDay, setActiveDay] = useState("monday");
  const [filter, setFilter] = useState<string | null>(null);

  // Get all unique categories from the classes
  const categories = Array.from(
    new Set(
      Object.values(weeklyClasses)
        .flat()
        .map((gymClass) => gymClass.category)
    )
  );

  // Filter classes based on selected category
  const filteredClasses = filter
    ? weeklyClasses[activeDay].filter((gymClass) => gymClass.category === filter)
    : weeklyClasses[activeDay];

  return (
    <div className="gym-container">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-center mb-4">Weekly Class Schedule</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto">
          Browse our weekly class schedule and find the perfect sessions to fit your fitness goals and schedule.
        </p>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-medium mb-3">Filter by Category:</h3>
        <div className="flex flex-wrap gap-2">
          <Badge
            className={`cursor-pointer ${
              filter === null ? "bg-gym-purple hover:bg-gym-purple/90" : "bg-gray-100 text-gray-800 hover:bg-gray-200"
            }`}
            onClick={() => setFilter(null)}
          >
            All
          </Badge>
          {categories.map((category) => (
            <Badge
              key={category}
              className={`cursor-pointer ${
                filter === category ? "bg-gym-purple hover:bg-gym-purple/90" : getCategoryColor(category)
              }`}
              onClick={() => setFilter(category)}
            >
              {category}
            </Badge>
          ))}
        </div>
      </div>

      <Tabs
        defaultValue="monday"
        value={activeDay}
        onValueChange={setActiveDay}
        className="w-full"
      >
        <TabsList className="w-full overflow-x-auto flex flex-nowrap space-x-1 mb-6">
          {Object.keys(weeklyClasses).map((day) => (
            <TabsTrigger
              key={day}
              value={day}
              className="flex-1 min-w-[100px] data-[state=active]:bg-gym-purple data-[state=active]:text-white"
            >
              {dayLabels[day as keyof typeof dayLabels]}
            </TabsTrigger>
          ))}
        </TabsList>

        {Object.keys(weeklyClasses).map((day) => (
          <TabsContent key={day} value={day} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredClasses.length > 0 ? (
                filteredClasses.map((gymClass) => (
                  <Card key={gymClass.id} className="overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold text-lg">{gymClass.name}</h4>
                        <Badge className={getIntensityColor(gymClass.intensity)}>
                          {gymClass.intensity}
                        </Badge>
                      </div>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex items-center">
                          <svg className="w-4 h-4 mr-2 text-gym-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>{gymClass.time} ({gymClass.duration})</span>
                        </div>
                        <div className="flex items-center">
                          <svg className="w-4 h-4 mr-2 text-gym-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                          <span>{gymClass.trainer}</span>
                        </div>
                      </div>
                      <div className="mt-4">
                        <Badge className={getCategoryColor(gymClass.category)}>
                          {gymClass.category}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <div className="col-span-3 py-12 text-center">
                  <p className="text-gray-500">No classes found with the selected filter.</p>
                </div>
              )}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default ClassSchedule;
