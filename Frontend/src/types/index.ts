
export type ComplaintStatus = 'new' | 'under_review' | 'in_progress' | 'resolved' | 'closed';

export interface Category {
  id: string;
  name: string;
  description: string;
  department: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'citizen' | 'admin' | 'agency';
  department?: string;
}

export interface Complaint {
  id: string;
  title: string;
  description: string;
  location: string;
  category: string;
  status: ComplaintStatus;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
  assignedTo?: string;
  images?: string[];
  responses?: Response[];
}

export interface Response {
  id: string;
  text: string;
  createdAt: Date;
  userId: string;
  userName: string;
}

export interface DashboardStat {
  newComplaints: number;
  inProgress: number;
  resolved: number;
  overallSatisfaction: number;
  responseTime: number;
}
