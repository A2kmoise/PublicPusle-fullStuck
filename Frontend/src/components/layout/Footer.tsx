
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-white py-6">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="rounded-full bg-gov-blue p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0m9 -2.5v5"></path>
                <path d="M12 17.5v.01"></path>
              </svg>
            </div>
            <span className="font-semibold text-gov-darkblue">PublicPulse</span>
          </Link>
          <p className="text-sm text-muted-foreground">
            Connecting citizens with their government for better public services.
          </p>
        </div>
        
        <div>
          <h3 className="text-sm font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary">
                Home
              </Link>
            </li>
            <li>
              <Link to="/submit" className="text-sm text-muted-foreground hover:text-primary">
                Submit Complaint
              </Link>
            </li>
            <li>
              <Link to="/track" className="text-sm text-muted-foreground hover:text-primary">
                Track Complaints
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-sm text-muted-foreground hover:text-primary">
                About
              </Link>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-sm font-semibold mb-3">Resources</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/faq" className="text-sm text-muted-foreground hover:text-primary">
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-sm font-semibold mb-3">Contact</h3>
          <ul className="space-y-2">
            <li className="text-sm text-muted-foreground">
              Email: support@PublicPulse.gov
            </li>
            <li className="text-sm text-muted-foreground">
              Phone: 9099
            </li>
            <li className="text-sm text-muted-foreground">
              Hours: Mon-Fri, 7am-6pm
            </li>
          </ul>
        </div>
      </div>
      
      <div className="container mt-8 pt-4 border-t">
        <p className="text-xs text-center text-muted-foreground">
          © {new Date().getFullYear()} PublicPulse. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
