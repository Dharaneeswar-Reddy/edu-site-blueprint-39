import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

interface StudentSupportService {
  id: string;
  service_name: string;
  title: string;
  description?: string;
  vision?: string;
  mission?: string;
  objectives?: string[];
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

interface StudentSupportReport {
  id: string;
  service_name: string;
  title: string;
  description?: string;
  academic_year: string;
  file_url: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

interface StudentSupportStaff {
  id: string;
  service_name: string;
  name: string;
  designation: string;
  department?: string;
  email?: string;
  phone?: string;
  photo_url?: string;
  is_active: boolean;
  display_order: number;
  created_at: string;
  updated_at: string;
}

interface StudentSupportGallery {
  id: string;
  service_name: string;
  title: string;
  description?: string;
  image_url: string;
  is_active: boolean;
  display_order: number;
  created_at: string;
  updated_at: string;
}

export const useStudentSupportServices = (serviceName?: string) => {
  const [services, setServices] = useState<StudentSupportService[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchServices();
  }, [serviceName]);

  const fetchServices = async () => {
    setLoading(true);
    setError(null);

    try {
      let query = supabase
        .from("student_support_services")
        .select("*")
        .eq("is_active", true);

      if (serviceName) {
        query = query.eq("service_name", serviceName);
      }

      const { data, error: fetchError } = await query.order("created_at", { ascending: false });

      if (fetchError) throw fetchError;
      setServices(data || []);
    } catch (err) {
      console.error("Error fetching student support services:", err);
      setError(err instanceof Error ? err.message : "Failed to fetch services");
    } finally {
      setLoading(false);
    }
  };

  return { services, loading, error, refetch: fetchServices };
};

export const useStudentSupportReports = (serviceName?: string) => {
  const [reports, setReports] = useState<StudentSupportReport[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchReports();
  }, [serviceName]);

  const fetchReports = async () => {
    setLoading(true);
    setError(null);

    try {
      let query = supabase
        .from("student_support_reports")
        .select("*")
        .eq("is_active", true);

      if (serviceName) {
        query = query.eq("service_name", serviceName);
      }

      const { data, error: fetchError } = await query.order("academic_year", { ascending: false });

      if (fetchError) throw fetchError;
      setReports(data || []);
    } catch (err) {
      console.error("Error fetching student support reports:", err);
      setError(err instanceof Error ? err.message : "Failed to fetch reports");
    } finally {
      setLoading(false);
    }
  };

  return { reports, loading, error, refetch: fetchReports };
};

export const useStudentSupportStaff = (serviceName?: string) => {
  const [staff, setStaff] = useState<StudentSupportStaff[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchStaff();
  }, [serviceName]);

  const fetchStaff = async () => {
    setLoading(true);
    setError(null);

    try {
      let query = supabase
        .from("student_support_staff")
        .select("*")
        .eq("is_active", true);

      if (serviceName) {
        query = query.eq("service_name", serviceName);
      }

      const { data, error: fetchError } = await query
        .order("display_order", { ascending: true })
        .order("name", { ascending: true });

      if (fetchError) throw fetchError;
      setStaff(data || []);
    } catch (err) {
      console.error("Error fetching student support staff:", err);
      setError(err instanceof Error ? err.message : "Failed to fetch staff");
    } finally {
      setLoading(false);
    }
  };

  return { staff, loading, error, refetch: fetchStaff };
};

export const useStudentSupportGallery = (serviceName?: string) => {
  const [gallery, setGallery] = useState<StudentSupportGallery[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchGallery();
  }, [serviceName]);

  const fetchGallery = async () => {
    setLoading(true);
    setError(null);

    try {
      let query = supabase
        .from("student_support_galleries")
        .select("*")
        .eq("is_active", true);

      if (serviceName) {
        query = query.eq("service_name", serviceName);
      }

      const { data, error: fetchError } = await query
        .order("display_order", { ascending: true })
        .order("created_at", { ascending: false });

      if (fetchError) throw fetchError;
      setGallery(data || []);
    } catch (err) {
      console.error("Error fetching student support gallery:", err);
      setError(err instanceof Error ? err.message : "Failed to fetch gallery");
    } finally {
      setLoading(false);
    }
  };

  return { gallery, loading, error, refetch: fetchGallery };
};