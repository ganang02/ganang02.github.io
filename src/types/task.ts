
export interface Task {
  id: string;
  title: string;
  subject: string;
  day: DayOfWeek;
  dueTime: string;
  isCompleted: boolean;
}

export type DayOfWeek = 'Senin' | 'Selasa' | 'Rabu' | 'Kamis' | 'Jumat';
