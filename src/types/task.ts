
export interface Task {
  id: string;
  title: string;
  subject: string;
  day: DayOfWeek;
  dueTime: string;
  isCompleted: boolean;
  imageUrl?: string;
}

export type DayOfWeek = 'Senin' | 'Selasa' | 'Rabu' | 'Kamis' | 'Jumat';

