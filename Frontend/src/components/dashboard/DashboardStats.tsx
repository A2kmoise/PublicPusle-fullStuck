
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface StatCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon: React.ReactNode;
}

function StatCard({ title, value, description, icon }: StatCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {description && (
          <p className="text-xs text-muted-foreground">{description}</p>
        )}
      </CardContent>
    </Card>
  );
}

export default function DashboardStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <StatCard
        title="New Complaints"
        value="12"
        description="+2% from last month"
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 text-muted-foreground"
          >
            <path d="M16 16v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"></path>
            <path d="M12 6a2 2 0 0 0 2 2h4a2 2 0 0 1 2 2v8"></path>
            <path d="M9 10h.01"></path>
            <path d="M9 14h.01"></path>
            <path d="M14 10h.01"></path>
            <path d="m20 14 2 2v2h-6l-2-2"></path>
            <path d="M14 18H4a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4"></path>
          </svg>
        }
      />
      <StatCard
        title="In Progress"
        value="34"
        description="18 assigned to departments"
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 text-muted-foreground"
          >
            <path d="M12 2v4"></path>
            <path d="M12 18v4"></path>
            <path d="m4.93 4.93 2.83 2.83"></path>
            <path d="m16.24 16.24 2.83 2.83"></path>
            <path d="M2 12h4"></path>
            <path d="M18 12h4"></path>
            <path d="m4.93 19.07 2.83-2.83"></path>
            <path d="m16.24 7.76 2.83-2.83"></path>
          </svg>
        }
      />
      <StatCard
        title="Resolved"
        value="86"
        description="+12% increase this month"
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 text-muted-foreground"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
        }
      />
      <StatCard
        title="Avg. Response Time"
        value="1.6 days"
        description="5% faster than last month"
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 text-muted-foreground"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
        }
      />
    </div>
  );
}
