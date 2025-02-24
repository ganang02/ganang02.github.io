
import React from 'react';
import { DayColumn } from '@/components/DayColumn';
import { DayOfWeek } from '@/types/task';

const days: DayOfWeek[] = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat'];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-indigo-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-textPrimary bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
            Tugas Sekolah
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 animate-fadeIn">
          {days.map(day => (
            <DayColumn key={day} day={day} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
