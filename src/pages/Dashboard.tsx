
import React from "react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import WelcomeBanner from "@/components/dashboard/WelcomeBanner";
import MembershipStatus from "@/components/dashboard/MembershipStatus";
import AttendanceLog from "@/components/dashboard/AttendanceLog";
import UpcomingClasses from "@/components/dashboard/UpcomingClasses";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Sample data for the dashboard
const userData = {
  firstName: "Alex",
  lastName: "Morgan",
  membershipType: "Premium",
  memberSince: "Jan 15, 2023",
  expiryDate: "Dec 31, 2025",
  daysRemaining: 245,
  totalDays: 365,
};

const attendanceLogs = [
  { id: "1", date: "May 2, 2025", time: "07:30 AM", activity: "Morning Yoga", duration: "60 min" },
  { id: "2", date: "May 1, 2025", time: "06:00 PM", activity: "HIIT Class", duration: "45 min" },
  { id: "3", date: "Apr 30, 2025", time: "08:15 AM", activity: "Spin Class", duration: "45 min" },
  { id: "4", date: "Apr 28, 2025", time: "05:30 PM", activity: "Weight Training", duration: "75 min" },
];

const upcomingClasses = [
  { 
    id: "c1", 
    name: "Power Yoga", 
    date: "May 4, 2025", 
    time: "08:00 AM", 
    trainer: "Emily R.", 
    category: "Yoga" 
  },
  { 
    id: "c2", 
    name: "HIIT Challenge", 
    date: "May 5, 2025", 
    time: "06:30 PM", 
    trainer: "Mike T.", 
    category: "Cardio" 
  },
  { 
    id: "c3", 
    name: "Strength Basics", 
    date: "May 7, 2025", 
    time: "07:00 AM", 
    trainer: "David M.", 
    category: "Strength" 
  },
];

const goals = [
  { id: "g1", title: "Weight Goal", current: 185, target: 170, unit: "lbs", progress: 60 },
  { id: "g2", title: "Weekly Workouts", current: 3, target: 5, unit: "sessions", progress: 60 },
  { id: "g3", title: "Monthly Classes", current: 8, target: 12, unit: "classes", progress: 67 },
];

const Dashboard = () => {
  return (
    <PageLayout>
      <div className="bg-gray-50 py-8">
        <div className="gym-container">
          <WelcomeBanner 
            firstName={userData.firstName} 
            membershipType={userData.membershipType} 
          />

          <div className="mt-8">
            <Tabs defaultValue="overview" className="space-y-6">
              <TabsList className="w-full md:w-auto">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="classes">My Classes</TabsTrigger>
                <TabsTrigger value="progress">Fitness Progress</TabsTrigger>
                <TabsTrigger value="profile">My Profile</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <MembershipStatus 
                    plan={userData.membershipType}
                    startDate={userData.memberSince}
                    expiryDate={userData.expiryDate}
                    daysRemaining={userData.daysRemaining}
                    totalDays={userData.totalDays}
                  />
                  
                  <Card className="col-span-1 md:col-span-2">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-semibold">Fitness Goals</h2>
                        <Button variant="ghost" size="sm" className="text-gym-purple">
                          Edit Goals
                        </Button>
                      </div>
                      
                      <div className="space-y-4">
                        {goals.map((goal) => (
                          <div key={goal.id}>
                            <div className="flex justify-between items-center mb-1">
                              <span className="font-medium">{goal.title}</span>
                              <span>
                                {goal.current} / {goal.target} {goal.unit}
                              </span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                              <div
                                className="bg-gym-purple h-2.5 rounded-full"
                                style={{ width: `${goal.progress}%` }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <AttendanceLog logs={attendanceLogs} />
                  <UpcomingClasses classes={upcomingClasses} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-3">Quick Links</h3>
                      <div className="space-y-2">
                        <Link to="/schedule" className="block text-gym-purple hover:text-gym-purple/80">
                          View Full Schedule
                        </Link>
                        <Link to="#" className="block text-gym-purple hover:text-gym-purple/80">
                          Book Personal Training
                        </Link>
                        <Link to="#" className="block text-gym-purple hover:text-gym-purple/80">
                          Update Payment Method
                        </Link>
                        <Link to="#" className="block text-gym-purple hover:text-gym-purple/80">
                          Download Workout Plan
                        </Link>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 text-center">
                      <h3 className="font-semibold mb-3">Refer a Friend</h3>
                      <p className="text-sm text-gray-600 mb-4">
                        Invite friends and earn free training sessions!
                      </p>
                      <Button className="btn-accent">Get Referral Link</Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 text-center">
                      <h3 className="font-semibold mb-3">Need Help?</h3>
                      <p className="text-sm text-gray-600 mb-4">
                        Our support team is ready to assist you.
                      </p>
                      <Link to="/contact">
                        <Button variant="outline">Contact Support</Button>
                      </Link>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="classes">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold mb-4">My Classes</h2>
                    <div className="space-y-6">
                      <div className="border-b pb-4">
                        <h3 className="text-lg font-medium mb-4">Upcoming Classes</h3>
                        <UpcomingClasses classes={upcomingClasses} />
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-medium mb-4">Book a Class</h3>
                        <Link to="/schedule">
                          <Button className="btn-primary">View Schedule</Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="progress">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold mb-4">Fitness Progress</h2>
                    <div className="text-center py-16">
                      <p className="text-gray-500">Progress tracking features coming soon!</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="profile">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold mb-4">My Profile</h2>
                    <div className="text-center py-16">
                      <p className="text-gray-500">Profile management features coming soon!</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Dashboard;
