
import React from 'react';
import { Task } from '@/types/task';
import { Check, Clock } from 'lucide-react';

interface TaskCardProps {
  task: Task;
  onToggleComplete: () => void;
}

export function TaskCard({ task, onToggleComplete }: TaskCardProps) {
  return (
    <div 
      className={`p-4 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md cursor-pointer
        ${task.isCompleted ? 'bg-task-complete' : 'bg-card hover:bg-card-hover'}`}
      onClick={onToggleComplete}
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-primary">{task.subject}</span>
        <div className="flex items-center space-x-2">
          <Clock className="w-4 h-4 text-textSecondary" />
          <span className="text-sm text-textSecondary">{task.dueTime}</span>
        </div>
      </div>
      <h3 className="text-base font-medium text-textPrimary mb-2">{task.title}</h3>
      {task.isCompleted && (
        <div className="flex items-center text-green-600">
          <Check className="w-4 h-4 mr-1" />
          <span className="text-sm">Completed</span>
        </div>
      )}
    </div>
  );
}
