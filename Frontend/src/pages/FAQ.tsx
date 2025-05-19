
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "How do I submit a complaint?",
    answer: "You can submit a complaint by clicking the 'Submit a Complaint' button on the homepage or in the navigation bar. Fill out the form with details about your issue, including the location and category. You can also upload photos if relevant. Once submitted, you'll receive a confirmation and a tracking ID."
  },
  {
    question: "How can I track my complaint?",
    answer: "You can track your complaint using the tracking ID provided when you submitted the complaint. Go to the 'Track Complaints' page and enter your tracking ID. You can also view all your submissions by signing in to your account."
  },
  {
    question: "What happens after I submit a complaint?",
    answer: "After submission, your complaint is categorized and routed to the appropriate government department. You'll receive updates as the status changes. The department will review your complaint and take appropriate action, then provide a response through the platform."
  },
  {
    question: "How long does it take to resolve a complaint?",
    answer: "Resolution times vary depending on the nature and complexity of the issue. Simple matters might be resolved within a few days, while more complex issues could take several weeks. You can always check the status of your complaint on the tracking page."
  },
  {
    question: "Do I need to create an account to submit a complaint?",
    answer: "No, you can submit a complaint without creating an account. However, creating an account makes it easier to track all your submissions in one place and receive updates on their status."
  },
  {
    question: "Can I submit anonymous complaints?",
    answer: "Yes, you can submit complaints anonymously. However, providing contact information allows us to follow up with you if we need more information or to notify you when your issue is resolved."
  },
  {
    question: "What types of issues can I report?",
    answer: "You can report a wide range of issues related to public services, including but not limited to: road maintenance, water and sewage, waste collection, public safety, parks and recreation, public transportation, and more. Check our categories section for a complete list."
  },
  {
    question: "Can I update my complaint after submission?",
    answer: "Yes, if you've created an account, you can add additional information or updates to your complaint. Simply log in, find your complaint in the dashboard, and click 'Update'."
  }
];

export default function FAQ() {
  return (
    <Layout>
      <div className="container py-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold mb-3">Frequently Asked Questions</h1>
            <p className="text-lg text-muted-foreground">
              Find answers to commonly asked questions about using CiviConnect
            </p>
          </div>
          
          <Accordion type="single" collapsible className="mb-12">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="mt-12 bg-gray-50 border rounded-lg p-6 text-center">
            <h2 className="text-xl font-bold mb-2">Still have questions?</h2>
            <p className="text-muted-foreground mb-4">
              Can't find the answer you're looking for? Feel free to contact our support team.
            </p>
            <Button asChild>
              <Link to="/contact">Contact Support</Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
