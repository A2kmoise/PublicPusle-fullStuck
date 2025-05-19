
import { Complaint, Category, User, ComplaintStatus } from "../types";

export const mockCategories: Category[] = [
  {
    id: "cat1",
    name: "Roads & Infrastructure",
    description: "Potholes, road damage, streetlights, bridges, etc.",
    department: "Public Works"
  },
  {
    id: "cat2",
    name: "Waste Management",
    description: "Garbage collection, illegal dumping, recycling issues",
    department: "Sanitation"
  },
  {
    id: "cat3",
    name: "Water & Sewage",
    description: "Water quality, leaks, flooding, drainage issues",
    department: "Utilities"
  },
  {
    id: "cat4",
    name: "Public Safety",
    description: "Suspicious activity, noise complaints, traffic issues",
    department: "Police Department"
  },
  {
    id: "cat5",
    name: "Parks & Recreation",
    description: "Park maintenance, playground equipment, public spaces",
    department: "Parks Department"
  },
  {
    id: "cat6",
    name: "Public Transport",
    description: "Bus, metro, transport infrastructure issues",
    department: "Transportation"
  },
  {
    id: "cat7",
    name: "Public Health",
    description: "Health concerns, clinic issues, healthcare access",
    department: "Health Department"
  },
  {
    id: "cat8",
    name: "Education",
    description: "School facilities, education quality, access issues",
    department: "Education Department"
  }
];

export const mockUsers: User[] = [
  {
    id: "user1",
    name: "John Citizen",
    email: "john@example.com",
    role: "citizen"
  },
  {
    id: "user2",
    name: "Admin User",
    email: "admin@example.com",
    role: "admin"
  },
  {
    id: "user3",
    name: "Public Works Agent",
    email: "works@example.com",
    role: "agency",
    department: "Public Works"
  }
];

export const statusLabels: Record<ComplaintStatus, string> = {
  new: "New",
  under_review: "Under Review",
  in_progress: "In Progress",
  resolved: "Resolved",
  closed: "Closed"
};

export const statusColors: Record<ComplaintStatus, string> = {
  new: "bg-blue-100 text-blue-800",
  under_review: "bg-yellow-100 text-yellow-800",
  in_progress: "bg-purple-100 text-purple-800",
  resolved: "bg-green-100 text-green-800",
  closed: "bg-gray-100 text-gray-800"
};

export const mockComplaints: Complaint[] = [
  {
    id: "comp1",
    title: "Large pothole on Main Street",
    description: "There is a large pothole on Main Street near the intersection with Oak Avenue that is causing traffic hazards.",
    location: "Main Street & Oak Avenue",
    category: "cat1",
    status: "new",
    createdAt: new Date("2023-05-15T10:30:00"),
    updatedAt: new Date("2023-05-15T10:30:00"),
    userId: "user1",
    responses: []
  },
  {
    id: "comp2",
    title: "Missed garbage collection",
    description: "Our street's garbage was not collected this week as scheduled.",
    location: "123 Pine Road",
    category: "cat2",
    status: "in_progress",
    createdAt: new Date("2023-05-10T08:15:00"),
    updatedAt: new Date("2023-05-12T14:20:00"),
    userId: "user1",
    assignedTo: "Sanitation Department",
    responses: [
      {
        id: "resp1",
        text: "We have notified the sanitation department about the missed collection. They will service your area within 48 hours.",
        createdAt: new Date("2023-05-12T14:20:00"),
        userId: "user2",
        userName: "Admin User"
      }
    ]
  },
  {
    id: "comp3",
    title: "Broken streetlight",
    description: "The streetlight at the corner of Elm Street and Pine Road has been flickering for weeks and now doesn't turn on at all.",
    location: "Elm Street & Pine Road",
    category: "cat1",
    status: "resolved",
    createdAt: new Date("2023-05-05T16:45:00"),
    updatedAt: new Date("2023-05-11T09:30:00"),
    userId: "user1",
    assignedTo: "Public Works",
    responses: [
      {
        id: "resp2",
        text: "A repair team has been dispatched to assess the streetlight issue.",
        createdAt: new Date("2023-05-07T11:20:00"),
        userId: "user3",
        userName: "Public Works Agent"
      },
      {
        id: "resp3",
        text: "The streetlight has been repaired. Please let us know if you notice any further issues.",
        createdAt: new Date("2023-05-11T09:30:00"),
        userId: "user3",
        userName: "Public Works Agent"
      }
    ]
  },
  {
    id: "comp4",
    title: "Water quality concern",
    description: "The tap water in our neighborhood has had a strange taste and odor for the past three days.",
    location: "Riverside District",
    category: "cat3",
    status: "under_review",
    createdAt: new Date("2023-05-14T13:10:00"),
    updatedAt: new Date("2023-05-15T09:45:00"),
    userId: "user1",
    assignedTo: "Utilities Department",
    responses: [
      {
        id: "resp4",
        text: "We've received your report about water quality issues. A water testing team will be sent to your area to collect samples for analysis.",
        createdAt: new Date("2023-05-15T09:45:00"),
        userId: "user2",
        userName: "Admin User"
      }
    ]
  }
];
