
import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Member for 2 years",
    content: "I've tried many gyms before, but I Love Able AI Gym has completely changed my fitness journey. The trainers are exceptional and the atmosphere is always welcoming. I've lost 30 pounds and gained confidence!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Member for 1 year",
    content: "The personalized training program created for me has been incredible. I'm seeing results faster than I expected, and the trainers keep me motivated every step of the way. Worth every penny!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Member for 3 years",
    content: "The community at I Love Able AI Gym is what keeps me coming back. Everyone is supportive and the classes are both challenging and fun. It's not just a gym, it's a lifestyle!",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1061&q=80",
  },
];

const TestimonialsCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [isAuto, setIsAuto] = useState(true);
  const length = testimonials.length;

  useEffect(() => {
    if (!isAuto) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [isAuto, length]);

  const nextSlide = () => {
    setIsAuto(false);
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setIsAuto(false);
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <section className="section-padding bg-gym-light">
      <div className="gym-container">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our Members Say
        </h2>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="min-w-full px-4">
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-8">
                      <div className="flex flex-col md:flex-row items-center gap-6">
                        <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <p className="text-lg mb-4 text-gray-700">"{testimonial.content}"</p>
                          <div>
                            <h4 className="font-semibold text-gym-dark">{testimonial.name}</h4>
                            <p className="text-sm text-gray-500">{testimonial.role}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === current ? "bg-gym-purple" : "bg-gray-300"
                }`}
                onClick={() => {
                  setIsAuto(false);
                  setCurrent(index);
                }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 md:-translate-x-full rounded-full bg-white shadow-md border-gray-200"
            onClick={prevSlide}
            aria-label="Previous testimonial"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 md:translate-x-full rounded-full bg-white shadow-md border-gray-200"
            onClick={nextSlide}
            aria-label="Next testimonial"
          >
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
