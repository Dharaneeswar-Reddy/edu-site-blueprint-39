export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.4"
  }
  public: {
    Tables: {
      announcements: {
        Row: {
          content: string
          created_at: string
          id: string
          is_active: boolean | null
          priority: number | null
          title: string
          type: string
          updated_at: string
        }
        Insert: {
          content: string
          created_at?: string
          id?: string
          is_active?: boolean | null
          priority?: number | null
          title: string
          type?: string
          updated_at?: string
        }
        Update: {
          content?: string
          created_at?: string
          id?: string
          is_active?: boolean | null
          priority?: number | null
          title?: string
          type?: string
          updated_at?: string
        }
        Relationships: []
      }
      department_timetables: {
        Row: {
          academic_year: string | null
          created_at: string
          department: string
          description: string | null
          file_url: string
          id: string
          is_active: boolean | null
          semester: string | null
          title: string
          updated_at: string
        }
        Insert: {
          academic_year?: string | null
          created_at?: string
          department: string
          description?: string | null
          file_url: string
          id?: string
          is_active?: boolean | null
          semester?: string | null
          title: string
          updated_at?: string
        }
        Update: {
          academic_year?: string | null
          created_at?: string
          department?: string
          description?: string | null
          file_url?: string
          id?: string
          is_active?: boolean | null
          semester?: string | null
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      examination_documents: {
        Row: {
          academic_year: string | null
          department: string | null
          description: string | null
          document_type: string
          file_url: string
          id: string
          semester: string | null
          title: string
          updated_at: string
          uploaded_at: string
        }
        Insert: {
          academic_year?: string | null
          department?: string | null
          description?: string | null
          document_type: string
          file_url: string
          id?: string
          semester?: string | null
          title: string
          updated_at?: string
          uploaded_at?: string
        }
        Update: {
          academic_year?: string | null
          department?: string | null
          description?: string | null
          document_type?: string
          file_url?: string
          id?: string
          semester?: string | null
          title?: string
          updated_at?: string
          uploaded_at?: string
        }
        Relationships: []
      }
      gallery_images: {
        Row: {
          category: string | null
          created_at: string
          description: string | null
          display_order: number | null
          id: string
          image_url: string
          is_active: boolean | null
          title: string
          updated_at: string
        }
        Insert: {
          category?: string | null
          created_at?: string
          description?: string | null
          display_order?: number | null
          id?: string
          image_url: string
          is_active?: boolean | null
          title: string
          updated_at?: string
        }
        Update: {
          category?: string | null
          created_at?: string
          description?: string | null
          display_order?: number | null
          id?: string
          image_url?: string
          is_active?: boolean | null
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      iqac_documents: {
        Row: {
          academic_year: string | null
          description: string | null
          document_type: string
          file_url: string
          id: string
          title: string
          updated_at: string
          uploaded_at: string
        }
        Insert: {
          academic_year?: string | null
          description?: string | null
          document_type: string
          file_url: string
          id?: string
          title: string
          updated_at?: string
          uploaded_at?: string
        }
        Update: {
          academic_year?: string | null
          description?: string | null
          document_type?: string
          file_url?: string
          id?: string
          title?: string
          updated_at?: string
          uploaded_at?: string
        }
        Relationships: []
      }
      leadership: {
        Row: {
          achievements: string[] | null
          bio: string | null
          created_at: string
          department: string | null
          designation: string
          email: string | null
          experience: string | null
          id: string
          is_active: boolean | null
          message: string | null
          name: string
          phone: string | null
          photo_url: string | null
          position: string
          qualifications: string | null
          specialization: string | null
          updated_at: string
        }
        Insert: {
          achievements?: string[] | null
          bio?: string | null
          created_at?: string
          department?: string | null
          designation: string
          email?: string | null
          experience?: string | null
          id?: string
          is_active?: boolean | null
          message?: string | null
          name: string
          phone?: string | null
          photo_url?: string | null
          position: string
          qualifications?: string | null
          specialization?: string | null
          updated_at?: string
        }
        Update: {
          achievements?: string[] | null
          bio?: string | null
          created_at?: string
          department?: string | null
          designation?: string
          email?: string | null
          experience?: string | null
          id?: string
          is_active?: boolean | null
          message?: string | null
          name?: string
          phone?: string | null
          photo_url?: string | null
          position?: string
          qualifications?: string | null
          specialization?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      ncc_events: {
        Row: {
          created_at: string
          description: string | null
          event_date: string
          event_time: string | null
          event_type: string | null
          id: string
          is_active: boolean | null
          location: string | null
          title: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          event_date: string
          event_time?: string | null
          event_type?: string | null
          id?: string
          is_active?: boolean | null
          location?: string | null
          title: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          event_date?: string
          event_time?: string | null
          event_type?: string | null
          id?: string
          is_active?: boolean | null
          location?: string | null
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          created_at: string
          email: string | null
          full_name: string | null
          id: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          email?: string | null
          full_name?: string | null
          id: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          email?: string | null
          full_name?: string | null
          id?: string
          updated_at?: string
        }
        Relationships: []
      }
      staff: {
        Row: {
          bio: string | null
          created_at: string
          department: string | null
          designation: string
          email: string | null
          experience: string | null
          id: string
          is_active: boolean | null
          name: string
          phone: string | null
          photo_url: string | null
          qualification: string | null
          staff_type: string
          updated_at: string
        }
        Insert: {
          bio?: string | null
          created_at?: string
          department?: string | null
          designation: string
          email?: string | null
          experience?: string | null
          id?: string
          is_active?: boolean | null
          name: string
          phone?: string | null
          photo_url?: string | null
          qualification?: string | null
          staff_type?: string
          updated_at?: string
        }
        Update: {
          bio?: string | null
          created_at?: string
          department?: string | null
          designation?: string
          email?: string | null
          experience?: string | null
          id?: string
          is_active?: boolean | null
          name?: string
          phone?: string | null
          photo_url?: string | null
          qualification?: string | null
          staff_type?: string
          updated_at?: string
        }
        Relationships: []
      }
      student_achievements: {
        Row: {
          academic_year: string | null
          achievement_date: string | null
          created_at: string
          department: string
          description: string | null
          display_order: number | null
          file_type: string
          file_url: string
          id: string
          is_active: boolean | null
          title: string
          updated_at: string
        }
        Insert: {
          academic_year?: string | null
          achievement_date?: string | null
          created_at?: string
          department: string
          description?: string | null
          display_order?: number | null
          file_type: string
          file_url: string
          id?: string
          is_active?: boolean | null
          title: string
          updated_at?: string
        }
        Update: {
          academic_year?: string | null
          achievement_date?: string | null
          created_at?: string
          department?: string
          description?: string | null
          display_order?: number | null
          file_type?: string
          file_url?: string
          id?: string
          is_active?: boolean | null
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      student_support_galleries: {
        Row: {
          created_at: string
          description: string | null
          display_order: number | null
          id: string
          image_url: string
          is_active: boolean | null
          service_name: string
          title: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          display_order?: number | null
          id?: string
          image_url: string
          is_active?: boolean | null
          service_name: string
          title: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          display_order?: number | null
          id?: string
          image_url?: string
          is_active?: boolean | null
          service_name?: string
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      student_support_reports: {
        Row: {
          academic_year: string
          created_at: string
          description: string | null
          file_url: string
          id: string
          is_active: boolean | null
          service_name: string
          title: string
          updated_at: string
        }
        Insert: {
          academic_year: string
          created_at?: string
          description?: string | null
          file_url: string
          id?: string
          is_active?: boolean | null
          service_name: string
          title: string
          updated_at?: string
        }
        Update: {
          academic_year?: string
          created_at?: string
          description?: string | null
          file_url?: string
          id?: string
          is_active?: boolean | null
          service_name?: string
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      student_support_services: {
        Row: {
          created_at: string
          description: string | null
          id: string
          is_active: boolean | null
          mission: string | null
          objectives: string[] | null
          service_name: string
          title: string
          updated_at: string
          vision: string | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          is_active?: boolean | null
          mission?: string | null
          objectives?: string[] | null
          service_name: string
          title: string
          updated_at?: string
          vision?: string | null
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          is_active?: boolean | null
          mission?: string | null
          objectives?: string[] | null
          service_name?: string
          title?: string
          updated_at?: string
          vision?: string | null
        }
        Relationships: []
      }
      student_support_staff: {
        Row: {
          created_at: string
          department: string | null
          designation: string
          display_order: number | null
          email: string | null
          id: string
          is_active: boolean | null
          name: string
          phone: string | null
          photo_url: string | null
          service_name: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          department?: string | null
          designation: string
          display_order?: number | null
          email?: string | null
          id?: string
          is_active?: boolean | null
          name: string
          phone?: string | null
          photo_url?: string | null
          service_name: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          department?: string | null
          designation?: string
          display_order?: number | null
          email?: string | null
          id?: string
          is_active?: boolean | null
          name?: string
          phone?: string | null
          photo_url?: string | null
          service_name?: string
          updated_at?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_public_leadership_data: {
        Args: Record<PropertyKey, never>
        Returns: {
          achievements: string[]
          bio: string
          created_at: string
          department: string
          designation: string
          experience: string
          id: string
          is_active: boolean
          message: string
          name: string
          photo_url: string
          position: string
          qualifications: string
          specialization: string
          updated_at: string
        }[]
      }
      get_public_staff_data: {
        Args: Record<PropertyKey, never>
        Returns: {
          bio: string
          created_at: string
          department: string
          designation: string
          experience: string
          id: string
          name: string
          photo_url: string
          qualification: string
          staff_type: string
          updated_at: string
        }[]
      }
      get_public_staff_data_secure: {
        Args: Record<PropertyKey, never>
        Returns: {
          bio: string
          created_at: string
          department: string
          designation: string
          experience: string
          id: string
          name: string
          photo_url: string
          qualification: string
          staff_type: string
          updated_at: string
        }[]
      }
      get_public_student_support_staff: {
        Args: Record<PropertyKey, never>
        Returns: {
          created_at: string
          department: string
          designation: string
          display_order: number
          id: string
          is_active: boolean
          name: string
          photo_url: string
          service_name: string
          updated_at: string
        }[]
      }
      get_user_role: {
        Args: { user_id: string }
        Returns: Database["public"]["Enums"]["app_role"]
      }
      is_admin: {
        Args: { user_id?: string }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "moderator" | "user" | "super_admin"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "moderator", "user", "super_admin"],
    },
  },
} as const
