
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Layout from "@/components/layout/Layout";
import ComplaintCard from "@/components/complaints/ComplaintCard";
import { mockComplaints, statusLabels } from "@/data/mockData";
import type { ComplaintStatus } from "@/types";

export default function Track() {
  const [searchValue, setSearchValue] = useState("");
  const [statusFilter, setStatusFilter] = useState<ComplaintStatus | "all">("all");

  const filteredComplaints = mockComplaints.filter(complaint => {
    const matchesSearch = complaint.title.toLowerCase().includes(searchValue.toLowerCase()) || 
                         complaint.id.toLowerCase().includes(searchValue.toLowerCase());
    
    const matchesStatus = statusFilter === "all" || complaint.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });
  
  return (
    <Layout>
      <div className="container py-10">
        <h1 className="text-3xl font-bold mb-2">Track Complaints</h1>
        <p className="text-muted-foreground mb-8">
          View and track the status of your submitted complaints
        </p>
        
        <div className="mb-8">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
              <TabsList>
                <TabsTrigger value="all">All Complaints</TabsTrigger>
                <TabsTrigger value="my">My Complaints</TabsTrigger>
              </TabsList>
              
              <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
                <Select value={statusFilter} onValueChange={(value) => setStatusFilter(value as ComplaintStatus | "all")}>
                  <SelectTrigger className="w-full md:w-[180px]">
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Statuses</SelectItem>
                    {(Object.entries(statusLabels) as [ComplaintStatus, string][]).map(([key, label]) => (
                      <SelectItem key={key} value={key}>{label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                
                <div className="relative w-full md:w-[300px]">
                  <Input
                    placeholder="Search by title or ID..."
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    className="pl-8"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="absolute left-2.5 top-1/2 transform -translate-y-1/2 text-gray-500"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                </div>
              </div>
            </div>
            
            <TabsContent value="all" className="mt-0">
              {filteredComplaints.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredComplaints.map((complaint) => (
                    <ComplaintCard key={complaint.id} complaint={complaint} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <h3 className="text-lg font-medium">No complaints found</h3>
                  <p className="text-muted-foreground mt-1">Try adjusting your search or filters</p>
                  
                  <Button className="mt-4" variant="outline" onClick={() => {
                    setSearchValue("");
                    setStatusFilter("all");
                  }}>
                    Clear Filters
                  </Button>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="my" className="mt-0">
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="rounded-full bg-muted p-3 mb-4">
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
                    className="h-6 w-6"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <h3 className="text-lg font-medium">Sign In Required</h3>
                <p className="text-muted-foreground mt-1 max-w-md">
                  You need to sign in to view your complaints. Sign in or create an account to track your submissions.
                </p>
                <Button className="mt-4">
                  Sign In
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
}
