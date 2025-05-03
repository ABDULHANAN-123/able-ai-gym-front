
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ClassInfo {
  id: string;
  name: string;
  date: string;
  time: string;
  trainer: string;
  category: string;
}

interface UpcomingClassesProps {
  classes: ClassInfo[];
}

const UpcomingClasses: React.FC<UpcomingClassesProps> = ({ classes }) => {
  return (
    <Card>
      <CardHeader className="pb-2 flex flex-row items-center justify-between">
        <CardTitle className="text-xl">Upcoming Classes</CardTitle>
        <Button variant="ghost" size="sm" className="text-gym-purple">
          View All
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {classes.length > 0 ? (
            classes.map((classInfo) => (
              <div
                key={classInfo.id}
                className="border rounded-md p-4 flex flex-col sm:flex-row justify-between gap-4"
              >
                <div>
                  <h3 className="font-semibold mb-1">{classInfo.name}</h3>
                  <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                    <span>{classInfo.date}</span>
                    <span>•</span>
                    <span>{classInfo.time}</span>
                    <span>•</span>
                    <span>Trainer: {classInfo.trainer}</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
                  <Badge variant="outline">{classInfo.category}</Badge>
                  <Button variant="outline" size="sm">
                    Cancel
                  </Button>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-8 text-muted-foreground">
              <p>No upcoming classes.</p>
              <Button variant="link" className="text-gym-purple mt-2">
                Browse classes
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default UpcomingClasses;
