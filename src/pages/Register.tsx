
import React from "react";
import PageLayout from "@/components/layout/PageLayout";
import RegisterForm from "@/components/auth/RegisterForm";

const Register = () => {
  return (
    <PageLayout>
      <div className="min-h-screen py-16">
        <div className="gym-container">
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gym-dark p-6">
              <h1 className="text-2xl font-bold text-white text-center">
                Create Your Account
              </h1>
              <p className="text-white/80 text-center mt-1">
                Join I Love Able AI Gym and start your fitness journey today
              </p>
            </div>
            <div className="p-6 md:p-8">
              <RegisterForm />
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Register;
