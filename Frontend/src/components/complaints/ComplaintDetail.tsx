
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import StatusBadge from "./StatusBadge";
import { Complaint, Response } from "@/types";
import { mockCategories } from "@/data/mockData";

interface ComplaintDetailProps {
  complaint: Complaint;
}

export default function ComplaintDetail({ complaint }: ComplaintDetailProps) {
  const [newResponse, setNewResponse] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const category = mockCategories.find(cat => cat.id === complaint.category);
  
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', { 
      month: 'long', 
      day: 'numeric', 
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric'
    }).format(date);
  };
  
  const handleSubmitResponse = () => {
    if (!newResponse.trim()) return;
    
    setIsSubmitting(true);
    
    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setNewResponse("");
      
      toast.success("Your response has been submitted successfully");
    }, 1000);
  };
  
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg border p-6">
        <div className="flex justify-between items-start">
          <h1 className="text-2xl font-bold text-gray-900">{complaint.title}</h1>
          <StatusBadge status={complaint.status} size="lg" />
        </div>
        
        <div className="mt-2 flex items-center gap-4 text-sm text-muted-foreground">
          <span>Complaint ID: {complaint.id}</span>
          <span>•</span>
          <span>Submitted: {formatDate(complaint.createdAt)}</span>
        </div>
        
        <div className="mt-6 space-y-6">
          <div>
            <h3 className="text-lg font-medium">Description</h3>
            <p className="mt-2 text-gray-700 whitespace-pre-line">{complaint.description}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-medium text-gray-500">Category</h3>
              <p className="mt-1">{category?.name || "Unknown"}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Department</h3>
              <p className="mt-1">{category?.department || "Unassigned"}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Location</h3>
              <p className="mt-1">{complaint.location}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Last Updated</h3>
              <p className="mt-1">{formatDate(complaint.updatedAt)}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div>
        <h2 className="text-xl font-bold mb-4">Responses</h2>
        
        {complaint.responses && complaint.responses.length > 0 ? (
          <div className="space-y-4">
            {complaint.responses.map((response: Response) => (
              <Card key={response.id}>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium">{response.userName}</p>
                      <p className="text-sm text-muted-foreground">
                        {formatDate(response.createdAt)}
                      </p>
                    </div>
                    {response.userId === "user3" && (
                      <span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                        Official Response
                      </span>
                    )}
                  </div>
                  <p className="mt-2">{response.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground">No responses yet.</p>
        )}
        
        <Separator className="my-6" />
        
        <div className="space-y-4">
          <h3 className="font-medium">Add Response</h3>
          <Textarea
            placeholder="Type your response here..."
            value={newResponse}
            onChange={(e) => setNewResponse(e.target.value)}
            className="min-h-[120px]"
          />
          <div className="flex justify-end">
            <Button onClick={handleSubmitResponse} disabled={!newResponse.trim() || isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit Response"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
