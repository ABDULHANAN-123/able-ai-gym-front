
import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  buttonText: string;
}

interface PricingCardProps {
  plan: PricingPlan;
}

const PricingCard: React.FC<PricingCardProps> = ({ plan }) => {
  return (
    <Card className={`overflow-hidden shadow-lg transition-all hover:shadow-xl ${
      plan.highlighted ? "border-gym-purple ring-1 ring-gym-purple" : "border-gray-200"
    }`}>
      {plan.highlighted && (
        <div className="bg-gym-purple text-white text-center py-2 text-sm font-medium">
          Most Popular
        </div>
      )}

      <CardHeader className="pt-6 pb-0">
        <CardTitle className="text-2xl text-center">{plan.name}</CardTitle>
      </CardHeader>

      <CardContent className="pt-6 space-y-6">
        <div className="text-center">
          <span className="text-4xl font-bold">${plan.price}</span>
          <span className="text-muted-foreground ml-1">/{plan.period}</span>
          <p className="text-muted-foreground mt-2 text-sm">{plan.description}</p>
        </div>

        <div className="space-y-2">
          {plan.features.map((feature, index) => (
            <div key={index} className="flex items-center">
              <Check className="mr-2 h-4 w-4 text-gym-purple" />
              <span className="text-sm">{feature}</span>
            </div>
          ))}
        </div>
      </CardContent>

      <CardFooter>
        <Link to="/register" className="w-full">
          <Button 
            className={`w-full ${plan.highlighted ? 'btn-primary' : 'btn-accent'}`}
          >
            {plan.buttonText}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default PricingCard;
