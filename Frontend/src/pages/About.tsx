
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <Layout>
      <div className="container py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">About CiviConnect</h1>
          
          <div className="prose max-w-none">
            <p className="text-lg text-muted-foreground mb-8">
              CiviConnect is a citizen engagement platform designed to streamline communication between citizens and government agencies, ensuring public issues are addressed efficiently and effectively.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Our Mission</h2>
            <p className="mb-6">
              Our mission is to transform how citizens interact with government services by creating a transparent, efficient, and responsive complaint management system. We believe that when citizens can easily report issues and track their resolution, communities thrive.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">How CiviConnect Works</h2>
            <ol className="space-y-4 mb-6">
              <li>
                <strong>Submit:</strong> Citizens submit complaints or feedback about public services through our user-friendly web platform.
              </li>
              <li>
                <strong>Categorize:</strong> The system automatically categorizes submissions and routes them to the appropriate government department.
              </li>
              <li>
                <strong>Track:</strong> Citizens can track the status of their submissions in real-time, from submission to resolution.
              </li>
              <li>
                <strong>Respond:</strong> Government agencies review submissions, take action, and provide updates through the platform.
              </li>
              <li>
                <strong>Resolve:</strong> Once the issue is addressed, the complaint is marked as resolved, and citizens can provide feedback on the resolution.
              </li>
            </ol>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-2">For Citizens</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Easy submission of complaints</li>
                  <li>Real-time tracking of complaint status</li>
                  <li>Direct communication with relevant departments</li>
                  <li>Transparent resolution process</li>
                  <li>Improved public services</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">For Government</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Centralized complaint management</li>
                  <li>Efficient routing to appropriate departments</li>
                  <li>Data-driven insights for service improvement</li>
                  <li>Increased citizen satisfaction</li>
                  <li>Better resource allocation</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border mb-8">
              <h2 className="text-xl font-bold mb-3">Our Commitment to Privacy</h2>
              <p>
                We take data privacy seriously. All personal information submitted through CiviConnect is securely stored and only used for the purpose of addressing your complaint. We never share your data with third parties without your consent.
              </p>
            </div>
          </div>
          
          <div className="flex gap-4 mt-12">
            <Button asChild>
              <Link to="/submit">Submit a Complaint</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/faq">Read FAQs</Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
