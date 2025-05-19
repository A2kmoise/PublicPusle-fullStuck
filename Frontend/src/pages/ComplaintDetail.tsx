import  React from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import ComplaintDetailComponent from "@/components/complaints/ComplaintDetail";
import { mockComplaints } from "@/data/mockData";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ComplaintDetailPage() {
  const { userId } = useParams<{ userId: string }>();
  const navigate = useNavigate();
  
    const [complaint, setComplaint] = useState<any>(null);  
  const [loading, setLoading] = useState<boolean>(true);   
  const [error, setError] = useState<string | null>(null);  
  
  useEffect(() => {
    if (!userId) return; 

    
    axios
      .get(`${import.meta.env.VITE_API_BACKEND_URL}user/complaints/${userId}`)
      .then((response) => {
        setComplaint(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Failed to fetch complaint details");
        setLoading(false);
      });
  }, [userId]); 

  if (loading) {
    return (
      <Layout>
        <div className="container py-12 text-center">
          <h1 className="text-2xl font-bold mb-4">Loading Complaint...</h1>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="container py-12 text-center">
          <h1 className="text-2xl font-bold mb-4">Error</h1>
          <p className="text-muted-foreground mb-8">{error}</p>
          <Button onClick={() => navigate("/track")}>
            Back to Complaints
          </Button>
        </div>
      </Layout>
    );
  }
  
  if (!complaint) {
    return (
      <Layout>
        <div className="container py-12 text-center">
          <h1 className="text-2xl font-bold mb-4">Complaint Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The complaint you're looking for doesn't exist or has been removed.
          </p>
          <Button onClick={() => navigate("/track")}>
            Back to Complaints
          </Button>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <div className="container py-10">
        <Button
          variant="outline"
          className="mb-6"
          onClick={() => navigate(-1)}
        >
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
            className="mr-2"
          >
            <path d="m12 19-7-7 7-7"></path>
            <path d="M19 12H5"></path>
          </svg>
          Back
        </Button>
        
        <ComplaintDetailComponent complaint={complaint} />
      </div>
    </Layout>
  );
}
