
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

interface MembershipStatusProps {
  plan: string;
  startDate: string;
  expiryDate: string;
  daysRemaining: number;
  totalDays: number;
}

const MembershipStatus: React.FC<MembershipStatusProps> = ({
  plan,
  startDate,
  expiryDate,
  daysRemaining,
  totalDays,
}) => {
  const progressPercentage = Math.max(
    0,
    Math.min(100, 100 - (daysRemaining / totalDays) * 100)
  );

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl">Membership Status</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-muted-foreground">Started: {startDate}</span>
          <span className="text-sm text-muted-foreground">Expires: {expiryDate}</span>
        </div>
        
        <Progress value={progressPercentage} className="h-2 mb-2" />
        
        <div className="flex justify-between items-center text-sm mb-4">
          <span>{daysRemaining} days remaining</span>
          <span className="font-semibold">{plan} Plan</span>
        </div>
        
        <Button className="btn-accent w-full">Renew Membership</Button>
      </CardContent>
    </Card>
  );
};

export default MembershipStatus;
