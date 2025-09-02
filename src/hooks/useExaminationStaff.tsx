import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

interface ExaminationStaff {
  id: string;
  name: string;
  designation: string;
  department: string;
  email: string;
  phone: string;
  photo_url: string | null;
}

interface ExaminationStaffData {
  name: string;
  designation: string;
  email: string;
  phone: string;
  department: string;
  photo_url?: string; // Optional direct photo URL
}

export const useExaminationStaff = () => {
  const [staff, setStaff] = useState<ExaminationStaff[]>([]);
  const [loading, setLoading] = useState(true);

  // Examination office staff details with their names to match from staff table
  const examinationStaffData: ExaminationStaffData[] = [
    {
      name: "Dr. P. Srinivasa Rao",
      designation: "Controller of Examination",
      email: "sr.panchumarthi@gmail.com",
      phone: "94408 26791",
      department: "Examination Cell"
    },
    {
      name: "Sri U. Siva Prasad", 
      designation: "Addl. Controller of Examination",
      email: "spuppala@svrmc.edu.in",
      phone: "98490 55376",
      department: "Examination Cell",
      photo_url: "/lovable-uploads/2c855993-c706-465e-8f14-21984262356f.png" // Direct photo
    },
    {
      name: "Sri L. Suresh Babu",
      designation: "Office Assistant", 
      email: "lankojisureshbabu@gmail.com",
      phone: "98496 29431",
      department: "Examination Cell"
    },
    {
      name: "Sri A. Narasimha Rao",
      designation: "Computer Operator",
      email: "anr123447rao@gmail.com", 
      phone: "76599 50972",
      department: "Examination Cell"
    },
    {
      name: "Sri K.S.R. Murthy",
      designation: "Attender",
      email: "murhiksr145@gmail.com",
      phone: "96520 44526", 
      department: "Examination Cell"
    }
  ];

  useEffect(() => {
    const fetchExaminationStaff = async () => {
      try {
        // Get all staff members from the database
        const { data: allStaff, error } = await supabase
          .from('staff')
          .select('*')
          .eq('is_active', true);

        if (error) {
          console.error('Error fetching staff:', error);
          return;
        }

        // Match examination staff with existing staff records by name similarity
        const matchedStaff = examinationStaffData.map(examStaff => {
          const matchedRecord = allStaff?.find(dbStaff => 
            dbStaff.name.toLowerCase().includes(examStaff.name.toLowerCase()) ||
            examStaff.name.toLowerCase().includes(dbStaff.name.toLowerCase()) ||
            examStaff.email.toLowerCase() === dbStaff.email?.toLowerCase()
          );

          return {
            id: matchedRecord?.id || `exam-${examStaff.name.replace(/\s+/g, '-').toLowerCase()}`,
            name: examStaff.name,
            designation: examStaff.designation,
            department: examStaff.department,
            email: examStaff.email,
            phone: examStaff.phone,
            photo_url: examStaff.photo_url || matchedRecord?.photo_url || null // Prioritize direct photo
          };
        });

        setStaff(matchedStaff);
      } catch (error) {
        console.error('Error processing examination staff:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchExaminationStaff();
  }, []);

  return {
    staff,
    loading
  };
};