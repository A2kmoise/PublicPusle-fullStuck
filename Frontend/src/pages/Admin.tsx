
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";
import DashboardStats from "@/components/dashboard/DashboardStats";
import ComplaintCard from "@/components/complaints/ComplaintCard";
import { mockComplaints, mockCategories, statusLabels } from "@/data/mockData";
import type { ComplaintStatus } from "@/types";

export default function AdminDashboard() {
  const [statusFilter, setStatusFilter] = useState<ComplaintStatus | "all">("all");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [searchValue, setSearchValue] = useState("");
  
  const filteredComplaints = mockComplaints.filter(complaint => {
    const matchesSearch = complaint.title.toLowerCase().includes(searchValue.toLowerCase()) || 
                         complaint.id.toLowerCase().includes(searchValue.toLowerCase());
    
    const matchesStatus = statusFilter === "all" || complaint.status === statusFilter;
    const matchesCategory = categoryFilter === "all" || complaint.category === categoryFilter;
    
    return matchesSearch && matchesStatus && matchesCategory;
  });
  
  return (
    <Layout>
      <div className="container py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <div>
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <p className="text-muted-foreground">
              Manage and respond to citizen complaints
            </p>
          </div>
          <div>
            <Button>Export Report</Button>
          </div>
        </div>
        
        <div className="mb-8">
          <DashboardStats />
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Complaints Management</CardTitle>
            <CardDescription>
              View, filter, and respond to complaints from citizens
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="all" className="w-full">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                <TabsList>
                  <TabsTrigger value="all">All Complaints</TabsTrigger>
                  <TabsTrigger value="new">New</TabsTrigger>
                  <TabsTrigger value="in_progress">In Progress</TabsTrigger>
                  <TabsTrigger value="resolved">Resolved</TabsTrigger>
                </TabsList>
                
                <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
                  <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                    <SelectTrigger className="w-full md:w-[180px]">
                      <SelectValue placeholder="Filter by category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      {mockCategories.map((category) => (
                        <SelectItem key={category.id} value={category.id}>{category.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  
                  <div className="relative w-full md:w-[250px]">
                    <Input
                      placeholder="Search complaints..."
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
                {renderComplaintsList(filteredComplaints)}
              </TabsContent>
              
              <TabsContent value="new" className="mt-0">
                {renderComplaintsList(mockComplaints.filter(c => c.status === "new"))}
              </TabsContent>
              
              <TabsContent value="in_progress" className="mt-0">
                {renderComplaintsList(mockComplaints.filter(c => c.status === "in_progress" || c.status === "under_review"))}
              </TabsContent>
              
              <TabsContent value="resolved" className="mt-0">
                {renderComplaintsList(mockComplaints.filter(c => c.status === "resolved" || c.status === "closed"))}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}

function renderComplaintsList(complaints: typeof mockComplaints) {
  if (complaints.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-medium">No complaints found</h3>
        <p className="text-muted-foreground mt-1">Try adjusting your search or filters</p>
      </div>
    );
  }
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {complaints.map((complaint) => (
        <ComplaintCard key={complaint.id} complaint={complaint} />
      ))}
    </div>
  );
}
