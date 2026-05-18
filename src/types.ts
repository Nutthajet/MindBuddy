export interface StressDataPoint {
  timestamp: string;
  intensity: number;
  type: 'squeeze' | 'movement';
}

export interface DollConfig {
  skin: string;
  outfit: string;
  name: string;
}

export interface Therapist {
  id: string;
  name: string;
  role: string;
  status: 'online' | 'offline' | 'busy';
  avatar: string;
}

export type View = 'dashboard' | 'stats' | 'consultation' | 'settings';
