import AdminLayout from "@/components/admin/AdminLayout";
import AdminRoleGuard from "@/components/admin/AdminRoleGuard";
import UserManagement from "@/components/admin/UserManagement";

const AdminUsers = () => {
  return (
    <AdminRoleGuard>
      <AdminLayout>
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">User Management</h1>
          </div>
          <UserManagement />
        </div>
      </AdminLayout>
    </AdminRoleGuard>
  );
};

export default AdminUsers;