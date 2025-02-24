
import React from 'react';
import { DayColumn } from '@/components/DayColumn';
import { DayOfWeek } from '@/types/task';
import { Plus } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';

const days: DayOfWeek[] = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat'];

const Index = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleAddTask = () => {
    if (!isAuthenticated) {
      navigate('/login');
      toast({
        description: "Silakan login terlebih dahulu untuk menambahkan tugas",
      });
    } else {
      navigate('/admin');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <h1 className="text-4xl font-bold text-textPrimary bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
            Tugas Sekolah
          </h1>
          <button
            onClick={handleAddTask}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-purple-600 text-white rounded-full 
            shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fadeIn"
          >
            <Plus className="w-5 h-5" />
            <span>Tambahkan Tugas</span>
          </button>
        </div>
        
        {/* Tambahkan deskripsi singkat */}
        <div className="text-center mb-8 animate-fadeIn">
          <p className="text-lg text-textSecondary mb-2">
            Kelola tugas sekolah dengan mudah dan terorganisir
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-600 mx-auto rounded-full" />
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
