
import React from 'react';
import { DayOfWeek } from '@/types/task';
import { TaskCard } from './TaskCard';
import { useTaskContext } from '@/contexts/TaskContext';
import { Calendar } from 'lucide-react';

interface DayColumnProps {
  day: DayOfWeek;
}

export function DayColumn({ day }: DayColumnProps) {
  const { tasks, toggleTaskCompletion } = useTaskContext();
  const dayTasks = tasks.filter(task => task.day === day);

  return (
    <div className="w-full p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl 
      transition-all duration-300 border border-white/20 group hover:-translate-y-1">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-xl bg-primary/10 text-primary">
          <Calendar className="w-5 h-5" />
        </div>
        <h2 className="text-xl font-bold text-textPrimary group-hover:text-primary transition-colors">
          {day}
        </h2>
      </div>
      <div className="space-y-4">
        {dayTasks.map(task => (
          <TaskCard
            key={task.id}
            task={task}
            onToggleComplete={() => toggleTaskCompletion(task.id)}
          />
        ))}
        {dayTasks.length === 0 && (
          <div className="text-center py-8 text-textSecondary/60">
            <p className="text-sm">Tidak ada tugas untuk hari {day}</p>
          </div>
        )}
      </div>
    </div>
  );
}
