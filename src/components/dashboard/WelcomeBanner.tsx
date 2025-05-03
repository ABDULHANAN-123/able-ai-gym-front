
import React from "react";

interface WelcomeBannerProps {
  firstName: string;
  membershipType: string;
}

const WelcomeBanner: React.FC<WelcomeBannerProps> = ({ firstName, membershipType }) => {
  return (
    <div className="bg-gradient-to-r from-gym-purple to-gym-purple/70 rounded-lg p-6 text-white">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            Welcome back, {firstName}!
          </h1>
          <p className="text-white/90">
            You're currently on our <span className="font-semibold">{membershipType}</span> membership plan.
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <button className="bg-white text-gym-purple hover:bg-white/90 font-medium px-4 py-2 rounded-md transition-colors">
            Manage Membership
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeBanner;
