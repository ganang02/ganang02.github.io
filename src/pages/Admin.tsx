
import React, { useState } from 'react';
import { useTaskContext } from '@/contexts/TaskContext';
import { useAuth } from '@/contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Task, DayOfWeek } from '@/types/task';
import { useToast } from '@/components/ui/use-toast';

const Admin = () => {
  const { addTask } = useTaskContext();
  const { logout } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [newTask, setNewTask] = useState({
    title: '',
    subject: '',
    day: 'Senin' as DayOfWeek,
    dueDate: '',
    dueTime: '',
    imageUrl: '',
    driveUrl: ''  // Menambahkan field untuk Google Drive URL
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addTask({ ...newTask, isCompleted: false });
    setNewTask({
      title: '',
      subject: '',
      day: 'Senin',
      dueDate: '',
      dueTime: '',
      imageUrl: '',
      driveUrl: ''
    });
    toast({
      description: "Tugas berhasil ditambahkan",
    });
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-indigo-100 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <Link to="/" className="flex items-center text-primary hover:text-primary-hover">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Kembali ke Tugas
          </Link>
          <button
            onClick={handleLogout}
            className="px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
          >
            Keluar
          </button>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-textPrimary mb-6">Tambah Tugas Baru</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-textSecondary mb-1">
                Judul Tugas
              </label>
              <input
                type="text"
                value={newTask.title}
                onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                className="w-full p-2 border rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-textSecondary mb-1">
                Mata Pelajaran
              </label>
              <input
                type="text"
                value={newTask.subject}
                onChange={(e) => setNewTask({ ...newTask, subject: e.target.value })}
                className="w-full p-2 border rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-textSecondary mb-1">
                URL Gambar (opsional)
              </label>
              <input
                type="url"
                value={newTask.imageUrl}
                onChange={(e) => setNewTask({ ...newTask, imageUrl: e.target.value })}
                className="w-full p-2 border rounded-lg"
                placeholder="https://example.com/image.jpg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-textSecondary mb-1">
                Link Google Drive Jawaban (opsional)
              </label>
              <input
                type="url"
                value={newTask.driveUrl}
                onChange={(e) => setNewTask({ ...newTask, driveUrl: e.target.value })}
                className="w-full p-2 border rounded-lg"
                placeholder="https://drive.google.com/..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-textSecondary mb-1">
                Hari
              </label>
              <select
                value={newTask.day}
                onChange={(e) => setNewTask({ ...newTask, day: e.target.value as DayOfWeek })}
                className="w-full p-2 border rounded-lg"
                required
              >
                <option value="Senin">Senin</option>
                <option value="Selasa">Selasa</option>
                <option value="Rabu">Rabu</option>
                <option value="Kamis">Kamis</option>
                <option value="Jumat">Jumat</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-textSecondary mb-1">
                Tanggal Pengumpulan
              </label>
              <input
                type="date"
                value={newTask.dueDate}
                onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })}
                className="w-full p-2 border rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-textSecondary mb-1">
                Waktu Pengumpulan
              </label>
              <input
                type="time"
                value={newTask.dueTime}
                onChange={(e) => setNewTask({ ...newTask, dueTime: e.target.value })}
                className="w-full p-2 border rounded-lg"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              Tambah Tugas
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Admin;
