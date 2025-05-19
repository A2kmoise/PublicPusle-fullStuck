
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import Layout from "@/components/layout/Layout";
import axios from 'axios';


export default function SignIn() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("signin");
  
  const [signInData, setSignInData] = useState({
    email: "",
    password: ""
  });
  
  const [signUpData, setSignUpData] = useState({
    firstName: "",
    lastName:"",
    email: "",
    password: "",
    confirmPassword: ""
  });
  
  const handleSignInChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignInData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSignUpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignUpData(prev => ({ ...prev, [name]: value }));
  };
  

const handleSignIn = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsLoading(true);

  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_BACKEND_URL}user/login`,
      signInData,
      { withCredentials: true }
    );

    toast.success("Signed in successfully");
    navigate("/track");
  } catch (error: any) {
    const message =
      error.response?.data?.message || "Sign in failed. Please check your credentials.";
    toast.error(message);
  } finally {
    setIsLoading(false);
  }
};

const handleSignUp = async (e: React.FormEvent) => {
  e.preventDefault();

  if (signUpData.password !== signUpData.confirmPassword) {
    toast.error("Passwords do not match");
    return;
  }

  setIsLoading(true);

  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_BACKEND_URL}user/signup`,
      {
        firstName: signUpData.firstName,
        lastName: signUpData.lastName,
        email: signUpData.email,
        password: signUpData.password,
      },
      { withCredentials: true }
    );

    toast.success("Account created successfully");
    navigate("/track");
  } catch (error: any) {
      console.error("Signup error:", error.response?.data || error.message);
    const message =
      error.response?.data?.message || "Sign up failed. Please try again.";
    toast.error(message);
  } finally {
    setIsLoading(false);
  }
};

  return (
    <Layout>
      <div className="container py-12 flex justify-center">
        <Card className="w-full max-w-md">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="signin">Sign In</TabsTrigger>
              <TabsTrigger value="signup">Create Account</TabsTrigger>
            </TabsList>
            
            <TabsContent value="signin">
              <form onSubmit={handleSignIn}>
                <CardHeader>
                  <CardTitle>Sign In</CardTitle>
                  <CardDescription>
                    Welcome back to the PublicPulse
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      required
                      value={signInData.email}
                      onChange={handleSignInChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password">Password</Label>
                      <Link to="/forgot-password" className="text-sm text-primary hover:underline">
                        Forgot password?
                      </Link>
                    </div>
                    <Input 
                      id="password"
                      name="password"
                      type="password"
                      placeholder=". . . . . . "
                      required
                      value={signInData.password}
                      onChange={handleSignInChange}
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" type="submit" disabled={isLoading}>
                    {isLoading ? "Signing in..." : "Sign In"}
                  </Button>
                </CardFooter>
              </form>
            </TabsContent>
            
            <TabsContent value="signup">
              <form onSubmit={handleSignUp}>
                <CardHeader>
                  <CardTitle>Create Account</CardTitle>
                  <CardDescription>
                    Create an account to track and manage your complaints
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">First Name</Label>
                    <Input 
                      id="firstName"
                      name="firstName"
                      placeholder="John"
                      required
                      value={signUpData.firstName}
                      onChange={handleSignUpChange}
                    />
                  </div>
                    <div className="space-y-2">
                    <Label htmlFor="name">Last Name</Label>
                    <Input 
                      id="lastName"
                      name="lastName"
                      placeholder="Doe"
                      required
                      value={signUpData.lastName}
                      onChange={handleSignUpChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      required
                      value={signUpData.email}
                      onChange={handleSignUpChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="Password">Password</Label>
                    <Input 
                      id="Password"
                      name="password"
                      type="password"
                      placeholder=". . . . . ."
                      required
                      value={signUpData.password}
                      onChange={handleSignUpChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <Input 
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      placeholder=". . . . . ."
                      required
                      value={signUpData.confirmPassword}
                      onChange={handleSignUpChange}
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" type="submit" disabled={isLoading}>
                    {isLoading ? "Creating Account..." : "Create Account"}
                  </Button>
                </CardFooter>
              </form>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </Layout>
  );
}
