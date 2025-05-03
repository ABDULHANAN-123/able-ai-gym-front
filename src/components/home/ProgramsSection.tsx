
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface Program {
  id: string;
  title: string;
  description: string;
  image: string;
}

const programs: Program[] = [
  {
    id: "strength",
    title: "Strength Training",
    description: "Build muscle, increase strength, and improve overall fitness with our comprehensive strength training programs.",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: "cardio",
    title: "Cardio & HIIT",
    description: "Boost your endurance and burn calories with our high-energy cardio and interval training sessions.",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: "yoga",
    title: "Yoga & Flexibility",
    description: "Improve flexibility, balance, and mental well-being through our diverse yoga and stretch classes.",
    image: "https://images.unsplash.com/photo-1599447541321-54ef7fb37004?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: "personal",
    title: "Personal Training",
    description: "Get personalized attention and customized workout plans from our certified personal trainers.",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  }
];

const ProgramsSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="gym-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Programs</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Discover our diverse range of fitness programs designed to help you achieve your goals, whether you're looking to build strength, improve endurance, or enhance flexibility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program) => (
            <Card key={program.id} className="overflow-hidden border-0 shadow-lg">
              <div className="h-48 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-2">{program.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{program.description}</p>
                <Link to="/schedule">
                  <Button variant="link" className="p-0 text-gym-purple hover:text-gym-purple/80">
                    View Schedule →
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
