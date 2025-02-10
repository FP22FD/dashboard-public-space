import data from './data-copy.json';

export function load(): Client[] {
  return data as Client[];
}

export interface Client {
  id: number;
  name: string;
  brands: Brand[];
  teamMembers: User[];
}

export interface Brand {
  id: number;
  name: string;
  campaigns: Campaign[];
}

export interface Campaign {
  id: number;
  name: string;
  startDate: string;
  endDate: string;
  product: string;
  targetGroup: string;
  periods: CampaignPeriod[];
}

export interface CampaignPeriod {
  id: number;
  startDate: string;
  endDate: string;
  channelType: 'SocialMedia' | 'Search' | 'TV' | 'Radio' | 'Podcast';
  budget: number;
  spend: { date: string; cost: number }[];
}

export interface User {
  id: number;
  name: string;
  email: string;
  role: 'ClientLead' | 'CampaignPlanner';
}
