import React, { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { Trash2, Upload, FileText, Download } from 'lucide-react';

interface StudentAchievement {
  id: string;
  department: string;
  title: string;
  description?: string;
  file_url: string;
  file_type: string;
  academic_year?: string;
  achievement_date?: string;
  is_active: boolean;
  display_order: number;
  created_at: string;
}

const StudentAchievementsAdmin = () => {
  const [achievements, setAchievements] = useState<StudentAchievement[]>([]);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  
  const [formData, setFormData] = useState({
    department: '',
    title: '',
    description: '',
    academic_year: '',
    achievement_date: '',
    display_order: 0
  });
  
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  useEffect(() => {
    fetchAchievements();
  }, []);

  const fetchAchievements = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('student_achievements')
        .select('*')
        .order('department')
        .order('display_order');

      if (error) throw error;
      setAchievements(data || []);
    } catch (error) {
      console.error('Error fetching achievements:', error);
      toast.error('Failed to fetch achievements');
    } finally {
      setLoading(false);
    }
  };

  const uploadFile = async (file: File): Promise<string> => {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Math.random()}.${fileExt}`;
    const filePath = `achievements/${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from('admin-uploads')
      .upload(filePath, file);

    if (uploadError) {
      throw uploadError;
    }

    const { data } = supabase.storage
      .from('admin-uploads')
      .getPublicUrl(filePath);

    return data.publicUrl;
  };

  const getFileType = (fileName: string): string => {
    const ext = fileName.split('.').pop()?.toLowerCase();
    switch (ext) {
      case 'pdf':
        return 'pdf';
      case 'xlsx':
      case 'xls':
        return 'excel';
      case 'docx':
      case 'doc':
        return 'word';
      case 'jpg':
      case 'jpeg':
      case 'png':
      case 'gif':
        return 'image';
      default:
        return 'other';
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedFile || !formData.department || !formData.title) {
      toast.error('Please fill in all required fields and select a file');
      return;
    }

    setUploading(true);
    try {
      const fileUrl = await uploadFile(selectedFile);
      const fileType = getFileType(selectedFile.name);

      const { error } = await supabase
        .from('student_achievements')
        .insert({
          ...formData,
          file_url: fileUrl,
          file_type: fileType,
          is_active: true
        });

      if (error) throw error;

      toast.success('Achievement uploaded successfully');
      setFormData({
        department: '',
        title: '',
        description: '',
        academic_year: '',
        achievement_date: '',
        display_order: 0
      });
      setSelectedFile(null);
      fetchAchievements();
    } catch (error) {
      console.error('Error uploading achievement:', error);
      toast.error('Failed to upload achievement');
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const { error } = await supabase
        .from('student_achievements')
        .delete()
        .eq('id', id);

      if (error) throw error;

      toast.success('Achievement deleted successfully');
      fetchAchievements();
    } catch (error) {
      console.error('Error deleting achievement:', error);
      toast.error('Failed to delete achievement');
    }
  };

  const departments = [
    'Physical Education',
    'Computer Science',
    'Electronics',
    'Commerce',
    'History',
    'Political Science',
    'Economics',
    'English',
    'Telugu',
    'Hindi',
    'Mathematics',
    'Physics',
    'Chemistry',
    'Botany',
    'Zoology'
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Upload className="h-5 w-5" />
            Upload Student Achievement
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="department">Department *</Label>
                <Select 
                  value={formData.department} 
                  onValueChange={(value) => setFormData({...formData, department: value})}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select department" />
                  </SelectTrigger>
                  <SelectContent>
                    {departments.map((dept) => (
                      <SelectItem key={dept} value={dept}>{dept}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="title">Title *</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  placeholder="Achievement title"
                  required
                />
              </div>
            </div>

            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                placeholder="Achievement description"
                rows={3}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="academic_year">Academic Year</Label>
                <Input
                  id="academic_year"
                  value={formData.academic_year}
                  onChange={(e) => setFormData({...formData, academic_year: e.target.value})}
                  placeholder="2023-2024"
                />
              </div>
              
              <div>
                <Label htmlFor="achievement_date">Achievement Date</Label>
                <Input
                  id="achievement_date"
                  type="date"
                  value={formData.achievement_date}
                  onChange={(e) => setFormData({...formData, achievement_date: e.target.value})}
                />
              </div>
              
              <div>
                <Label htmlFor="display_order">Display Order</Label>
                <Input
                  id="display_order"
                  type="number"
                  value={formData.display_order}
                  onChange={(e) => setFormData({...formData, display_order: parseInt(e.target.value) || 0})}
                  placeholder="0"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="file">File *</Label>
              <Input
                id="file"
                type="file"
                onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
                accept=".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png,.gif"
                required
              />
              <p className="text-sm text-gray-500 mt-1">
                Accepted formats: PDF, Word, Excel, Images
              </p>
            </div>

            <Button type="submit" disabled={uploading} className="w-full">
              {uploading ? 'Uploading...' : 'Upload Achievement'}
            </Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Manage Student Achievements
          </CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <p>Loading achievements...</p>
          ) : (
            <div className="space-y-4">
              {achievements.map((achievement) => (
                <div key={achievement.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-medium">{achievement.title}</h4>
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                        {achievement.department}
                      </span>
                    </div>
                    {achievement.description && (
                      <p className="text-sm text-gray-600 mb-1">{achievement.description}</p>
                    )}
                    <div className="flex gap-4 text-sm text-gray-500">
                      {achievement.academic_year && <span>Year: {achievement.academic_year}</span>}
                      {achievement.achievement_date && <span>Date: {achievement.achievement_date}</span>}
                      <span>Type: {achievement.file_type}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(achievement.file_url, '_blank')}
                    >
                      <Download className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDelete(achievement.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
              
              {achievements.length === 0 && (
                <p className="text-center py-8 text-gray-500">
                  No student achievements uploaded yet.
                </p>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default StudentAchievementsAdmin;