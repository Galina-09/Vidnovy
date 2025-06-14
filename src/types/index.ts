export interface DamageObject {
  id: string;
  title: string;
  description: string;
  type: 'school' | 'hospital' | 'residential' | 'infrastructure' | 'cultural';
  location: {
    lat: number;
    lng: number;
  };
  address: string;
  estimatedCost: number;
  priority: 'low' | 'medium' | 'high' | 'critical';
  status: 'pending' | 'verified' | 'in_progress' | 'completed';
  supportCount: number;
  images: string[];
  dateReported: string;
  reporter: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'citizen' | 'activist' | 'official';
  verified: boolean;
}

export interface Discussion {
  id: string;
  title: string;
  content: string;
  author: User;
  replies: number;
  likes: number;
  views: number;
  createdAt: string;
  category: string;
  isHot: boolean;
}

export interface VotingProject {
  id: string;
  objectId: string;
  votes: number;
  totalVoters: number;
  endDate: string;
  status: 'active' | 'completed' | 'cancelled';
}