import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Users, Mail, Phone } from "lucide-react";
import { useStaff } from "@/hooks/useStaff";

interface DepartmentStaffProps {
  departmentName: string;
}

const DepartmentStaff = ({ departmentName }: DepartmentStaffProps) => {
  const { staff, loading, error } = useStaff(departmentName, "teaching");

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-6 w-6 text-college-blue" />
            Department Staff
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-card rounded-lg shadow-sm border p-6 text-center animate-pulse">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-3 bg-gray-200 rounded mb-1"></div>
                <div className="h-3 bg-gray-200 rounded mb-3"></div>
                <div className="h-3 bg-gray-200 rounded"></div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-6 w-6 text-college-blue" />
            Department Staff
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-red-600">Error loading staff: {error}</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Users className="h-6 w-6 text-college-blue" />
          Department Staff
        </CardTitle>
      </CardHeader>
      <CardContent>
        {staff.length === 0 ? (
          <p className="text-center text-muted-foreground">No staff members found for this department.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {staff.map((member) => (
              <div key={member.id} className="bg-card rounded-lg shadow-sm border p-6 text-center hover:shadow-md transition-shadow">
                <div className="mb-4">
                  <Avatar className="w-24 h-24 mx-auto">
                    <AvatarImage 
                      src={member.photo_url || undefined} 
                      alt={member.name}
                      className="object-cover"
                    />
                    <AvatarFallback className="text-lg font-semibold bg-primary/10 text-primary">
                      {getInitials(member.name)}
                    </AvatarFallback>
                  </Avatar>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">{member.name}</h3>
                <p className="text-primary font-medium text-sm mb-1">{member.designation}</p>
                <p className="text-muted-foreground text-sm mb-3">{member.department} Department</p>
                {member.email && (
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-1">
                    <Mail className="h-3 w-3" />
                    <span>{member.email}</span>
                  </div>
                )}
                {member.phone && (
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <Phone className="h-3 w-3" />
                    <span>{member.phone}</span>
                  </div>
                )}
                {member.qualification && (
                  <p className="text-xs text-muted-foreground mt-2">{member.qualification}</p>
                )}
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default DepartmentStaff;