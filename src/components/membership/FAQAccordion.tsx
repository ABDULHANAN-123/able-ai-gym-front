
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What are the gym's operating hours?",
    answer: "Our gym is open 24/7 for Premium and Standard members. Basic members have access from 8:00 AM to 8:00 PM on weekdays, and 10:00 AM to 6:00 PM on weekends.",
  },
  {
    question: "Do you offer personal training sessions?",
    answer: "Yes, we offer personal training sessions with our certified trainers. Premium members receive 4 complimentary sessions per month, while other members can purchase sessions at additional cost.",
  },
  {
    question: "Can I freeze my membership?",
    answer: "Yes, all members can freeze their membership for up to 30 days per year. Premium members can freeze for up to 60 days. A small admin fee may apply depending on your membership plan.",
  },
  {
    question: "Is there a joining fee?",
    answer: "We occasionally waive our joining fee during promotions. Currently, there is a $49 joining fee for Basic and Standard plans, while Premium has no joining fee.",
  },
  {
    question: "Do you offer group fitness classes?",
    answer: "Yes, we offer a variety of group fitness classes including yoga, HIIT, spin, and strength training. Basic members can access 2 classes per week, Standard members get 5 classes, and Premium members have unlimited access.",
  },
  {
    question: "What amenities are included in the membership?",
    answer: "All memberships include access to our main workout floor with cardio and strength equipment. Additional amenities like sauna, pool, towel service, and shake bar vary by membership tier.",
  },
  {
    question: "What is your cancellation policy?",
    answer: "We require a 30-day notice for membership cancellations. Please visit the front desk or contact member services to process your cancellation request.",
  },
];

const FAQAccordion = () => {
  return (
    <section className="section-padding bg-white">
      <div className="gym-container">
        <h2 className="text-3xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;
