
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";
import { mockCategories } from "@/data/mockData";

export default function Home() {
  return (
    <Layout>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Your Voice Matters to Your Country
              </h1>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Report issues, track progress, and help improve your community. Our Citizen Engagement System connects you directly with local government services.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link to="/submit">Submit your Complaint</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/track">Track Existing Complaint</Link>
                </Button>
              </div>
            </div>
            <div className="mx-auto flex items-center justify-center">
              <div className="relative h-[350px] w-full max-w-[500px]">
                <div className="absolute  left-0 top-0 h-[290px] w-[320px] rounded-xl bg-gov-blue p-4  shadow-xl">
                  <div className="h-6 w-3/4 rounded-lg bg-white/20 mb-3"></div>
                  <div className="h-4 w-1/2 rounded-lg bg-white/20 mb-6"></div>
                  <div className="space-y-3">
                    <div className="h-12 rounded-lg bg-white/10"></div>
                    <div className="h-12 rounded-lg bg-white/10"></div>
                    <div className="h-12 rounded-lg bg-white/10"></div>
                    <div className="h-12 rounded-lg bg-white/10"></div>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <div className="h-10 w-24 rounded-lg bg-white"></div>
                  </div>
                </div>
                <div className="absolute  bottom-0 right-0 h-[240px] w-[260px] rounded-xl bg-white p-4 shadow-xl border border-gray-200">
                  <div className="h-5 w-1/2 rounded-lg bg-gray-200 mb-3"></div>
                  <div className="h-32 rounded-lg bg-gov-blue/10 mb-4 p-2">
                    <div className="h-3 w-3/4 rounded bg-gray-300 mb-2"></div>
                    <div className="h-3 w-1/2 rounded bg-gray-300 mb-4"></div>
                    <div className="h-3 w-full rounded bg-gray-300 mb-2"></div>
                    <div className="h-3 w-2/3 rounded bg-gray-300"></div>
                  </div>
                  <div className="flex justify-between">
                    <div className="h-5 w-16 rounded-lg bg-gray-200"></div>
                    <div className="h-8 w-24 rounded-lg bg-gov-blue"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our platform makes it easy to submit and track complaints and feedback
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
            <Card>
              <CardContent className="p-6  shadow-xl">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gov-blue text-white text-lg font-bold">1</div>
                <h3 className="text-xl font-bold mt-4">Submit</h3>
                <p className="text-gray-500 mt-2">
                  File a complaint or provide feedback through our easy-to-use form.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 hover:shadow-xl">
                <div className="flex h-12 w-12 items-center  justify-center rounded-lg bg-gov-blue text-white text-lg font-bold">2</div>
                <h3 className="text-xl font-bold mt-4">Track</h3>
                <p className="text-gray-500 mt-2">
                  Monitor the progress of your submission with real-time status updates.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6  shadow-xl">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gov-blue text-white text-lg font-bold">3</div>
                <h3 className="text-xl font-bold mt-4">Resolve</h3>
                <p className="text-gray-500 mt-2">
                  Get notified when your issue is addressed by the  department.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Categories</h2>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We solve a wide range of public service issues
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
            {mockCategories.map((category) => (
              <Link to={`/submit?category=${category.id}`} key={category.id}>
                <Card className="h-full hover:border-gov-blue hover:shadow-md transition-all">
                  <CardContent className="p-4 flex flex-col items-center text-center">
                    <div className="h-12 w-12 rounded-full bg-gov-blue/10 flex items-center justify-center mb-3">
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
                        className="text-gov-blue"
                      >
                        <path d="M16 6h6"></path>
                        <path d="M16 12h6"></path>
                        <path d="M16 18h6"></path>
                        <path d="M2 6s3-3 6-3 6 3 6 3"></path>
                        <path d="M2 12s3 4 6 4 6-4 6-4"></path>
                        <path d="M2 18s3 3 6 3 6-3 6-3"></path>
                      </svg>
                    </div>
                    <h3 className="text-base font-medium">{category.name}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{category.department}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-gov-blue text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to get started?</h2>
              <p className="text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join thousands of citizens already using our platform to improve their communities.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" variant="outline" className="bg-white text-gov-blue hover:bg-gray-100 hover:text-gov-blue">
                <Link to="/submit">Submit your Complaint</Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="text-white hover:bg-white/10">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
