
import React from "react";
import PageLayout from "@/components/layout/PageLayout";
import TrainerProfile from "@/components/about/TrainerProfile";
import { Trainer } from "@/components/about/TrainerProfile";

const trainers: Trainer[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "Head Fitness Coach",
    bio: "With over 10 years of experience in fitness training, Sarah specializes in strength training and nutritional guidance. Her approach combines scientific principles with practical, sustainable methods.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    specialties: ["Strength Training", "Nutrition", "Weight Management"],
    certifications: ["NASM Certified Personal Trainer", "Precision Nutrition Level 2", "TRX Suspension Training"],
  },
  {
    id: "2",
    name: "Michael Chen",
    role: "Cardio & HIIT Specialist",
    bio: "Michael is known for his high-energy classes and personalized HIIT programs. He believes in pushing boundaries while maintaining proper form and technique for optimal results.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    specialties: ["HIIT", "Cardio Endurance", "Group Training"],
    certifications: ["ACE Certified Personal Trainer", "Crossfit Level 2", "Spinning Instructor"],
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    role: "Yoga & Flexibility Coach",
    bio: "Emily brings a holistic approach to fitness through her extensive knowledge of yoga and meditation. Her classes focus on building strength, flexibility, and mental wellness.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1061&q=80",
    specialties: ["Yoga", "Meditation", "Flexibility"],
    certifications: ["200hr RYT Certification", "Meditation Teacher", "Pilates Instructor"],
  },
  {
    id: "4",
    name: "David Miller",
    role: "Strength & Conditioning Coach",
    bio: "Former professional athlete turned fitness coach, David specializes in sports-specific training and rehabilitation. His programs are designed to enhance performance and prevent injuries.",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    specialties: ["Sports Performance", "Rehabilitation", "Olympic Lifting"],
    certifications: ["CSCS Certification", "USAW Level 1", "Functional Movement Specialist"],
  },
];

const About = () => {
  return (
    <PageLayout>
      {/* Page Header */}
      <div className="bg-gym-dark text-white py-16">
        <div className="gym-container">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4">About Us</h1>
          <p className="text-lg text-center max-w-3xl mx-auto text-white/80">
            Get to know our story, our mission, and the team that makes I Love Able AI Gym the perfect place for your fitness journey.
          </p>
        </div>
      </div>

      {/* Our Story Section */}
      <section className="section-padding bg-white">
        <div className="gym-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Founded in 2015, I Love Able AI Gym began with a simple mission: to create a fitness environment where technology and personal training work together to deliver exceptional results for our members.
              </p>
              <p className="text-gray-700 mb-4">
                Our founder, Alex Morgan, saw that traditional gyms often lacked the personalized approach needed for sustainable fitness success. Combining his background in fitness training and technology, Alex developed an innovative gym concept that uses AI to enhance the human touch of personal training.
              </p>
              <p className="text-gray-700">
                Since opening our doors, we've grown from a small local gym to a thriving fitness community, helping thousands of members transform their lives through intelligent, personalized fitness programs.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Gym interior"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="section-padding bg-gym-light">
        <div className="gym-container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Mission & Values</h2>
            <p className="text-gray-700">
              At I Love Able AI Gym, we're driven by a set of core values that shape everything we do. We believe that fitness is not just about physical strength, but about building a balanced, healthy lifestyle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-gradient">
              <h3 className="text-xl font-bold mb-3">Our Mission</h3>
              <p className="text-gray-700">
                To provide an innovative fitness environment where every member receives personalized guidance and support to achieve their unique health goals.
              </p>
            </div>
            <div className="card-gradient">
              <h3 className="text-xl font-bold mb-3">Our Vision</h3>
              <p className="text-gray-700">
                To become the leading fitness center that successfully combines technology and human expertise to transform lives and communities.
              </p>
            </div>
            <div className="card-gradient">
              <h3 className="text-xl font-bold mb-3">Core Values</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Personalized Excellence</li>
                <li>Innovation & Adaptability</li>
                <li>Community & Support</li>
                <li>Integrity & Transparency</li>
                <li>Continuous Improvement</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Trainers Section */}
      <section className="section-padding bg-white">
        <div className="gym-container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Expert Trainers</h2>
            <p className="text-gray-700">
              Our certified fitness professionals are passionate about helping you achieve your goals. With diverse specializations and years of experience, our trainers provide expert guidance tailored to your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trainers.map((trainer) => (
              <TrainerProfile key={trainer.id} trainer={trainer} />
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
