
import React from 'react';
import { Task, DayOfWeek } from '@/types/task';
import { TaskCard } from './TaskCard';
import { useTaskContext } from '@/contexts/TaskContext';

interface DayColumnProps {
  day: DayOfWeek;
}

export function DayColumn({ day }: DayColumnProps) {
  const { tasks, toggleTaskCompletion } = useTaskContext();
  const dayTasks = tasks.filter(task => task.day === day);

  return (
    <div className="w-full p-4 bg-white rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold text-textPrimary mb-4">{day}</h2>
      <div className="space-y-4">
        {dayTasks.map(task => (
          <TaskCard
            key={task.id}
            task={task}
            onToggleComplete={() => toggleTaskCompletion(task.id)}
          />
        ))}
        {dayTasks.length === 0 && (
          <p className="text-textSecondary text-center py-4">No tasks for {day}</p>
        )}
      </div>
    </div>
  );
}
