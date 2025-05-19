
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { mockCategories } from "@/data/mockData";
import { toast } from "sonner";
import axios from "axios";


export default function ComplaintForm() {
const navigate = useNavigate()
  
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    category: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleCategoryChange = (value: string) => {
    setFormData((prev) => ({ ...prev, category: value }));
  };
  
  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
    
      const response = await axios.post(`${import.meta.env.VITE_API_BACKEND_URL}user/complaints/02db2c24-136f-4f47-9a60-aec7c68b7e29`, 
        formData, {
        withCredentials: true,  
      });

      if (response.status === 201) {
       
        toast.success('Complaint Submitted Successfully');
        navigate("/track");  
      }
    } catch (error) {
      setIsSubmitting(false);
      toast.error('Failed to submit complaint. Please try again.');
      console.error('Error submitting complaint:', error);
    }
  };
  
  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Submit your Complaint</CardTitle>
        <CardDescription>
          Please provide details about the issue you would like to report. The more specific you are, the better we can assist you on that issue,
           Glad to here from you!
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                name="title"
                placeholder="Brief summary of your complaint"
                required
                value={formData.title}
                onChange={handleChange}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Select
                value={formData.category}
                onValueChange={handleCategoryChange}
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  {mockCategories.map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {formData.category && (
                <p className="text-sm text-muted-foreground mt-1">
                  {mockCategories.find(c => c.id === formData.category)?.description}
                </p>
              )}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                name="location"
                placeholder="Where is this issue located?"
                required
                value={formData.location}
                onChange={handleChange}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                name="description"
                placeholder="Please provide detailed information about the issue"
                rows={5}
                required
                value={formData.description}
                onChange={handleChange}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="photos">Photos (Optional)</Label>
              <Input
                id="photos"
                name="photos"
                type="file"
                multiple
                accept="image/*"
              />
              <p className="text-xs text-muted-foreground">
                Upload up to 3 photos to help us understand the issue better.
              </p>
            </div>
          </div>

          <CardFooter className="flex justify-end gap-4 px-0 pt-6">
            <Button variant="outline" type="button" onClick={() => navigate("/")}>
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit Complaint"}
            </Button>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  );
}
