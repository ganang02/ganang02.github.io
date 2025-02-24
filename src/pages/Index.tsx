
import React from 'react';
import { DayColumn } from '@/components/DayColumn';
import { DayOfWeek } from '@/types/task';
import { TaskProvider } from '@/contexts/TaskContext';
import { Link } from 'react-router-dom';
import { Settings } from 'lucide-react';

const days: DayOfWeek[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

const Index = () => {
  return (
    <TaskProvider>
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-textPrimary">School Tasks</h1>
            <Link
              to="/admin"
              className="flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors"
            >
              <Settings className="w-4 h-4 mr-2" />
              Admin Panel
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {days.map(day => (
              <DayColumn key={day} day={day} />
            ))}
          </div>
        </div>
      </div>
    </TaskProvider>
  );
};

export default Index;
