
import React from "react";

const IntroSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="gym-container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Welcome to I Love Able AI Gym</h2>
          <p className="text-gray-700">
            At I Love Able AI Gym, we believe in providing a holistic fitness experience that combines cutting-edge technology, expert guidance, and a supportive community. Our mission is to help you achieve your fitness goals in a motivating environment where every member feels valued and empowered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          <div className="text-center p-6">
            <div className="rounded-full bg-gym-purple/10 w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-gym-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Modern Equipment</h3>
            <p className="text-gray-600">
              State-of-the-art fitness equipment to ensure effective and safe workouts for all fitness levels.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="rounded-full bg-gym-purple/10 w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-gym-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Personalized Training</h3>
            <p className="text-gray-600">
              Customized workout plans and nutrition advice tailored to your specific goals and needs.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="rounded-full bg-gym-purple/10 w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-gym-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Expert Trainers</h3>
            <p className="text-gray-600">
              Certified fitness professionals dedicated to helping you reach your fullest potential safely.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
