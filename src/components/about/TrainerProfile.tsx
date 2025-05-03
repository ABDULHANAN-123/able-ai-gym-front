
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export interface Trainer {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  specialties: string[];
  certifications: string[];
}

interface TrainerProfileProps {
  trainer: Trainer;
}

const TrainerProfile: React.FC<TrainerProfileProps> = ({ trainer }) => {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all">
      <div className="aspect-[3/4] md:aspect-[4/3] overflow-hidden">
        <img
          src={trainer.image}
          alt={`${trainer.name}, ${trainer.role}`}
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="font-bold text-xl mb-1">{trainer.name}</h3>
        <p className="text-gym-purple font-medium text-sm mb-2">{trainer.role}</p>
        
        <p className="text-gray-700 text-sm mb-4">{trainer.bio}</p>
        
        <div className="mb-4">
          <h4 className="text-sm font-semibold mb-1">Specialties:</h4>
          <div className="flex flex-wrap gap-2">
            {trainer.specialties.map((specialty, index) => (
              <span key={index} className="bg-gym-light text-gym-dark text-xs px-2 py-1 rounded-full">
                {specialty}
              </span>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-semibold mb-1">Certifications:</h4>
          <ul className="text-xs text-gray-600 list-disc list-inside">
            {trainer.certifications.map((cert, index) => (
              <li key={index}>{cert}</li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default TrainerProfile;
