import React, { useState } from 'react';
import { Task, DayOfWeek } from '@/types/task';
import { useTaskContext } from '@/contexts/TaskContext';
import { Link } from 'react-router-dom';
import { Plus, ArrowLeft, Pencil, Trash } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const days: DayOfWeek[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

const Admin = () => {
  const { tasks, addTask, updateTask, deleteTask } = useTaskContext();
  const { toast } = useToast();
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    subject: '',
    day: 'Monday' as DayOfWeek,
    dueTime: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingTask) {
      updateTask({ ...editingTask, ...formData });
      toast({ description: 'Task updated successfully!' });
    } else {
      addTask({ ...formData, isCompleted: false });
      toast({ description: 'Task added successfully!' });
    }
    setFormData({ title: '', subject: '', day: 'Monday', dueTime: '' });
    setEditingTask(null);
  };

  const handleDelete = (id: string) => {
    deleteTask(id);
    toast({ description: 'Task deleted successfully!' });
  };

  const startEdit = (task: Task) => {
    setEditingTask(task);
    setFormData({
      title: task.title,
      subject: task.subject,
      day: task.day,
      dueTime: task.dueTime,
    });
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <Link to="/" className="flex items-center text-primary hover:text-primary-hover">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Tasks
          </Link>
          <button
            onClick={handleLogout}
            className="px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
          >
            Logout
          </button>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-bold text-textPrimary mb-6">
            {editingTask ? 'Edit Task' : 'Add New Task'}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-textSecondary mb-1">
                Subject
              </label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full p-2 border rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-textSecondary mb-1">
                Title
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full p-2 border rounded-lg"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-textSecondary mb-1">
                  Day
                </label>
                <select
                  value={formData.day}
                  onChange={(e) => setFormData({ ...formData, day: e.target.value as DayOfWeek })}
                  className="w-full p-2 border rounded-lg"
                >
                  {days.map(day => (
                    <option key={day} value={day}>{day}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-textSecondary mb-1">
                  Due Time
                </label>
                <input
                  type="time"
                  value={formData.dueTime}
                  onChange={(e) => setFormData({ ...formData, dueTime: e.target.value })}
                  className="w-full p-2 border rounded-lg"
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors"
            >
              {editingTask ? 'Update Task' : 'Add Task'}
            </button>
          </form>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-bold text-textPrimary mb-6">Task List</h2>
          <div className="space-y-4">
            {tasks.map(task => (
              <div
                key={task.id}
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
              >
                <div>
                  <p className="font-medium text-textPrimary">{task.title}</p>
                  <p className="text-sm text-textSecondary">
                    {task.subject} - {task.day} at {task.dueTime}
                  </p>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => startEdit(task)}
                    className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"
                  >
                    <Pencil className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(task.id)}
                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                  >
                    <Trash className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
            {tasks.length === 0 && (
              <p className="text-center text-textSecondary py-4">No tasks yet</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
