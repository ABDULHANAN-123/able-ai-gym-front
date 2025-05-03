
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="absolute inset-0 bg-gradient-to-b from-gym-dark/70 to-gym-dark/90" />
      <div className="gym-container relative z-10 text-center pt-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          Transform Your Body, <span className="text-gym-purple">Transform Your Life</span>
        </h1>
        <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
          Join our community of fitness enthusiasts and achieve your health goals with expert guidance and state-of-the-art facilities.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/membership">
            <Button size="lg" className="btn-primary px-8 py-6 text-lg">
              Join Now
            </Button>
          </Link>
          <Link to="/schedule">
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-gym-dark px-8 py-6 text-lg"
            >
              View Schedule
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
