
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";

interface NavItem {
  title: string;
  href: string;
  isButton?: boolean;
}

const navItems: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "Submit Complaint", href: "/submit", isButton: true },
  { title: "Track Complaints", href: "/track" },
  { title: "About", href: "/about" },
  { title: "FAQ", href: "/faq" },
];

export default function Navbar() {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/90 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <div className="rounded-full bg-gov-blue p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
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
            <span className="font-semibold text-xl text-gov-darkblue">PublicPulse</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        {!isMobile && (
          <nav className="flex items-center gap-6">
            {navItems.map((item) =>
              item.isButton ? (
                <Button key={item.href} asChild>
                  <Link to={item.href}>{item.title}</Link>
                </Button>
              ) : (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  {item.title}
                </Link>
              )
            )}
            <Button variant="outline" asChild>
              <Link to="/signin">Sign In</Link>
            </Button>
          </nav>
        )}

        {/* Mobile Navigation */}
        {isMobile && (
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
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
                >
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                {navItems.map((item) =>
                  item.isButton ? (
                    <Button key={item.href} asChild onClick={() => setIsOpen(false)}>
                      <Link to={item.href}>{item.title}</Link>
                    </Button>
                  ) : (
                    <Link
                      key={item.href}
                      to={item.href}
                      className="text-base font-medium transition-colors hover:text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.title}
                    </Link>
                  )
                )}
                <Button variant="outline" asChild onClick={() => setIsOpen(false)}>
                  <Link to="/signin">Sign In</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        )}
      </div>
    </header>
  );
}
