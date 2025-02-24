
export interface Task {
  id: string;
  title: string;
  subject: string;
  day: DayOfWeek;
  dueDate: string;
  dueTime: string;
  isCompleted: boolean;
  imageUrl?: string;
  driveUrl?: string;  // Menambahkan field untuk link Google Drive
}

export type DayOfWeek = 'Senin' | 'Selasa' | 'Rabu' | 'Kamis' | 'Jumat';
