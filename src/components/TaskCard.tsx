
import React from 'react';
import { Task } from '@/types/task';
import { Check, Clock, BookOpen } from 'lucide-react';

interface TaskCardProps {
  task: Task;
  onToggleComplete: () => void;
}

export function TaskCard({ task, onToggleComplete }: TaskCardProps) {
  return (
    <div 
      className={`p-4 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md cursor-pointer
        ${task.isCompleted 
          ? 'bg-gradient-to-r from-green-50 to-emerald-50 border border-green-100' 
          : 'bg-gradient-to-r from-white to-slate-50 border border-slate-100 hover:bg-slate-50'}`}
      onClick={onToggleComplete}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">{task.subject}</span>
        </div>
        <div className="flex items-center space-x-2 bg-white/80 px-2 py-1 rounded-full">
          <Clock className="w-3 h-3 text-textSecondary" />
          <span className="text-xs text-textSecondary">{task.dueTime}</span>
        </div>
      </div>
      <h3 className="text-base font-medium text-textPrimary mb-2">{task.title}</h3>
      {task.isCompleted && (
        <div className="flex items-center text-green-600 bg-green-50 px-2 py-1 rounded-full w-fit">
          <Check className="w-3 h-3 mr-1" />
          <span className="text-xs">Selesai</span>
        </div>
      )}
    </div>
  );
}
