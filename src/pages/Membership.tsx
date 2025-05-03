
import React from "react";
import PageLayout from "@/components/layout/PageLayout";
import PricingCard, { PricingPlan } from "@/components/membership/PricingCard";
import FAQAccordion from "@/components/membership/FAQAccordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const plans: PricingPlan[] = [
  {
    id: "basic",
    name: "Basic",
    price: 29.99,
    period: "month",
    description: "Perfect for beginners and casual gym-goers",
    features: [
      "Access 8 AM - 8 PM weekdays",
      "Access 10 AM - 6 PM weekends",
      "Basic fitness equipment",
      "2 group classes per week",
      "Fitness assessment",
      "Mobile app access"
    ],
    buttonText: "Start Basic",
  },
  {
    id: "standard",
    name: "Standard",
    price: 49.99,
    period: "month",
    description: "Our most popular plan for fitness enthusiasts",
    features: [
      "24/7 gym access",
      "Full access to all equipment",
      "5 group classes per week",
      "1 personal training session",
      "Nutrition consultation",
      "Full app features",
      "Body composition analysis"
    ],
    highlighted: true,
    buttonText: "Choose Standard",
  },
  {
    id: "premium",
    name: "Premium",
    price: 79.99,
    period: "month",
    description: "The ultimate fitness experience",
    features: [
      "24/7 gym access",
      "Priority class booking",
      "Unlimited group classes",
      "4 personal training sessions",
      "Customized nutrition plan",
      "Advanced fitness tracking",
      "Sauna & massage access",
      "Guest passes (2/month)"
    ],
    buttonText: "Go Premium",
  }
];

const Membership = () => {
  return (
    <PageLayout>
      {/* Page Header */}
      <div className="bg-gym-dark text-white py-16">
        <div className="gym-container">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4">Membership Plans</h1>
          <p className="text-lg text-center max-w-3xl mx-auto text-white/80">
            Choose the perfect membership plan to fit your fitness goals and lifestyle.
          </p>
        </div>
      </div>

      {/* Pricing Section */}
      <section className="section-padding bg-white">
        <div className="gym-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <PricingCard key={plan.id} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="section-padding bg-gym-light">
        <div className="gym-container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Plan Comparison</h2>
            <p className="text-gray-700">
              Compare our membership plans side by side to find the perfect fit for your fitness journey.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow">
              <thead>
                <tr className="bg-gym-dark text-white">
                  <th className="py-4 px-4 text-left">Features</th>
                  <th className="py-4 px-4 text-center">Basic</th>
                  <th className="py-4 px-4 text-center bg-gym-purple">Standard</th>
                  <th className="py-4 px-4 text-center">Premium</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-3 px-4 font-medium">Monthly Price</td>
                  <td className="py-3 px-4 text-center">$29.99</td>
                  <td className="py-3 px-4 text-center bg-gym-light">$49.99</td>
                  <td className="py-3 px-4 text-center">$79.99</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4 font-medium">Access Hours</td>
                  <td className="py-3 px-4 text-center">Limited (8 AM - 8 PM)</td>
                  <td className="py-3 px-4 text-center bg-gym-light">24/7</td>
                  <td className="py-3 px-4 text-center">24/7</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4 font-medium">Group Classes</td>
                  <td className="py-3 px-4 text-center">2 per week</td>
                  <td className="py-3 px-4 text-center bg-gym-light">5 per week</td>
                  <td className="py-3 px-4 text-center">Unlimited</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4 font-medium">Personal Training</td>
                  <td className="py-3 px-4 text-center">Not included</td>
                  <td className="py-3 px-4 text-center bg-gym-light">1 session / month</td>
                  <td className="py-3 px-4 text-center">4 sessions / month</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4 font-medium">Nutrition Guidance</td>
                  <td className="py-3 px-4 text-center">Basic tips</td>
                  <td className="py-3 px-4 text-center bg-gym-light">Consultation</td>
                  <td className="py-3 px-4 text-center">Custom plan</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4 font-medium">Sauna & Massage</td>
                  <td className="py-3 px-4 text-center">Not included</td>
                  <td className="py-3 px-4 text-center bg-gym-light">Add-on available</td>
                  <td className="py-3 px-4 text-center">Included</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4 font-medium">Guest Passes</td>
                  <td className="py-3 px-4 text-center">Not included</td>
                  <td className="py-3 px-4 text-center bg-gym-light">1 per month</td>
                  <td className="py-3 px-4 text-center">2 per month</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Contract Length</td>
                  <td className="py-3 px-4 text-center">Month-to-month</td>
                  <td className="py-3 px-4 text-center bg-gym-light">Month-to-month</td>
                  <td className="py-3 px-4 text-center">Month-to-month</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 text-center">
            <Link to="/register">
              <Button className="btn-primary px-8">Join Now</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Corporate Plans */}
      <section className="section-padding bg-white">
        <div className="gym-container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Corporate Memberships</h2>
              <p className="text-gray-700">
                Boost employee wellness and productivity with our tailored corporate fitness plans. We offer special rates for businesses of all sizes.
              </p>
            </div>

            <div className="bg-gym-light rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Looking for a custom solution for your team?</h3>
              <p className="text-gray-700 mb-6">
                Our corporate wellness specialists can create a customized plan that fits your company's needs and budget. Enjoy special group rates, team-building fitness events, and more.
              </p>
              <Link to="/contact">
                <Button className="btn-primary px-8">Contact Us</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FAQAccordion />
    </PageLayout>
  );
};

export default Membership;
