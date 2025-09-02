import AdminLayout from "@/components/admin/AdminLayout";
import AdminRoleGuard from "@/components/admin/AdminRoleGuard";
import RecruiterLogosAdmin from "@/components/admin/RecruiterLogosAdmin";

const AdminRecruiters = () => {
  return (
    <AdminRoleGuard>
      <AdminLayout>
        <RecruiterLogosAdmin />
      </AdminLayout>
    </AdminRoleGuard>
  );
};

export default AdminRecruiters;