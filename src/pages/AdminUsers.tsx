import AdminLayout from "@/components/admin/AdminLayout";
import AdminRoleGuard from "@/components/admin/AdminRoleGuard";
import UserManagement from "@/components/admin/UserManagement";
import AdminInviteForm from "@/components/admin/AdminInviteForm";
import { useUserRole } from "@/hooks/useUserRole";

const AdminUsers = () => {
  const { isSuperAdmin, loading } = useUserRole();

  return (
    <AdminRoleGuard>
      <AdminLayout>
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">User Management</h1>
          </div>
          
          {loading ? (
            <div className="flex items-center justify-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2">
              <UserManagement />
              {isSuperAdmin && <AdminInviteForm />}
            </div>
          )}

          {!isSuperAdmin && !loading && (
            <div className="text-center py-8 text-muted-foreground">
              Only super administrators can invite new admins.
            </div>
          )}
        </div>
      </AdminLayout>
    </AdminRoleGuard>
  );
};

export default AdminUsers;