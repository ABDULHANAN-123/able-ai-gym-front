
import React from "react";
import PageLayout from "@/components/layout/PageLayout";
import LoginForm from "@/components/auth/LoginForm";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <PageLayout>
      <div className="min-h-screen py-16 flex items-center">
        <div className="gym-container">
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gym-dark p-6">
              <h1 className="text-2xl font-bold text-white text-center">
                Welcome Back
              </h1>
              <p className="text-white/80 text-center mt-1">
                Sign in to access your account
              </p>
            </div>
            <div className="p-6 md:p-8">
              <LoginForm />
            </div>
            <div className="bg-gym-light px-6 py-4 text-center">
              <p className="text-sm text-gray-600">
                Need help?{" "}
                <Link to="/contact" className="text-gym-purple hover:text-gym-purple/80 font-medium">
                  Contact support
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Login;
