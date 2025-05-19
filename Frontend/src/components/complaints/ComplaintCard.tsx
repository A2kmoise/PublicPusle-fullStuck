
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Complaint } from "@/types";
import { mockCategories, statusColors, statusLabels } from "@/data/mockData";

interface ComplaintCardProps {
  complaint: Complaint;
  isCompact?: boolean;
}

export default function ComplaintCard({ complaint, isCompact = false }: ComplaintCardProps) {
  const category = mockCategories.find(cat => cat.id === complaint.category);
  const statusClass = statusColors[complaint.status];
  const statusLabel = statusLabels[complaint.status];
  
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric'
    }).format(date);
  };

  return (
    <Card className={`border border-gray-200 shadow-sm hover:shadow-md transition-shadow ${isCompact ? 'h-full' : ''}`}>
      <CardHeader className={isCompact ? "p-4" : "p-6"}>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className={`mb-2 ${isCompact ? "text-lg" : "text-xl"}`}>
              {complaint.title}
            </CardTitle>
            <CardDescription className="flex items-center gap-2">
              <span>ID: {complaint.id}</span>
              <span>•</span>
              <span>{formatDate(complaint.createdAt)}</span>
            </CardDescription>
          </div>
          <Badge className={statusClass}>{statusLabel}</Badge>
        </div>
      </CardHeader>
      <CardContent className={isCompact ? "p-4 pt-0" : "p-6 pt-0"}>
        {!isCompact && (
          <p className="text-gray-700 mb-4 line-clamp-3">
            {complaint.description}
          </p>
        )}
        <div className="flex flex-wrap gap-2">
          <div className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-medium">
            {category?.name || "Unknown Category"}
          </div>
          <div className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-medium">
            {complaint.location}
          </div>
        </div>
      </CardContent>
      <CardFooter className={isCompact ? "p-4 pt-2" : "p-6 pt-2"}>
        <div className="w-full flex justify-between items-center">
          <span className="text-sm text-gray-500">
            {complaint.responses?.length 
              ? `${complaint.responses.length} response${complaint.responses.length > 1 ? 's' : ''}`
              : 'No responses yet'}
          </span>
          <Button asChild size="sm">
            <Link to={`/complaints/${complaint.id}`}>View Details</Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
