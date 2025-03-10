
import React from 'react';
import { Task } from '@/types/task';
import { Check, Clock, BookOpen, Download, Lock, Link } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

interface TaskCardProps {
  task: Task;
  onToggleComplete: () => void;
}

export function TaskCard({ task, onToggleComplete }: TaskCardProps) {
  const { isAuthenticated } = useAuth();

  const handleToggleComplete = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!isAuthenticated) {
      return;
    }
    onToggleComplete();
  };

  return (
    <div 
      className={`p-4 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md
        ${task.isCompleted 
          ? 'bg-gradient-to-r from-green-50 to-emerald-50 border border-green-100' 
          : 'bg-gradient-to-r from-white to-slate-50 border border-slate-100 hover:bg-slate-50'}`}
    >
      <div className="flex items-start gap-4">
        {task.imageUrl && (
          <div className="flex-shrink-0 w-24 h-24 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <img 
              src={task.imageUrl} 
              alt={task.title} 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        <div className="flex-grow">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-lg bg-primary/10">
                <BookOpen className="w-4 h-4 text-primary" />
              </div>
              <span className="text-sm font-medium text-primary">{task.subject}</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/90 px-3 py-1.5 rounded-full shadow-sm">
              <Clock className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">
                {task.dueDate && task.dueTime ? `${task.dueDate}, ${task.dueTime}` : task.dueTime}
              </span>
            </div>
          </div>
          <h3 className="text-base font-medium text-textPrimary mb-3 hover:text-primary transition-colors">
            {task.title}
          </h3>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {task.imageUrl && (
                <a 
                  href={task.imageUrl}
                  download
                  className="inline-flex items-center text-xs text-primary hover:text-primary/80 transition-colors"
                >
                  <Download className="w-3 h-3 mr-1" />
                  Unduh gambar
                </a>
              )}
            </div>
            <button
              onClick={handleToggleComplete}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-full transition-all
                ${task.isCompleted
                  ? 'bg-green-50 text-green-600 hover:bg-green-100'
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                } ${!isAuthenticated ? 'cursor-not-allowed opacity-70' : 'cursor-pointer'}`}
            >
              {task.isCompleted ? (
                <>
                  <Check className="w-3 h-3" />
                  <span className="text-xs">Selesai</span>
                </>
              ) : (
                <>
                  {!isAuthenticated && <Lock className="w-3 h-3" />}
                  <span className="text-xs">
                    {isAuthenticated ? 'Tandai selesai' : 'Hanya admin'}
                  </span>
                </>
              )}
            </button>
          </div>
          {task.driveUrl && (
            <div className="mt-4 pt-4 border-t border-slate-200">
              <h4 className="text-sm font-medium text-textSecondary mb-2">Jawaban Foto Tugas</h4>
              <a 
                href={task.driveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors group"
              >
                <Link className="w-4 h-4 mr-1 group-hover:scale-110 transition-transform" />
                Lihat di Google Drive
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
