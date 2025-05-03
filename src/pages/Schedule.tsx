
import React from "react";
import PageLayout from "@/components/layout/PageLayout";
import ClassSchedule from "@/components/schedule/ClassSchedule";

const Schedule = () => {
  return (
    <PageLayout>
      {/* Page Header */}
      <div className="bg-gym-dark text-white py-16">
        <div className="gym-container">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4">Class Schedule</h1>
          <p className="text-lg text-center max-w-3xl mx-auto text-white/80">
            Find the perfect classes to fit your schedule and fitness goals.
          </p>
        </div>
      </div>

      {/* Schedule Section */}
      <section className="section-padding bg-white">
        <ClassSchedule />
      </section>

      {/* Private Sessions Section */}
      <section className="section-padding bg-gym-light">
        <div className="gym-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Private Sessions</h2>
            <p className="text-gray-700 mb-8">
              Looking for personalized attention? Our experienced trainers offer private sessions tailored to your specific needs and goals.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">Personal Training</h3>
                <p className="text-gray-700 mb-4">
                  One-on-one sessions with our expert trainers focused on your specific fitness goals and needs.
                </p>
                <p className="font-medium">From $60 per session</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">Private Group Classes</h3>
                <p className="text-gray-700 mb-4">
                  Book a private class for your group, team, or special event with a customized workout.
                </p>
                <p className="font-medium">From $120 per session</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Schedule;
