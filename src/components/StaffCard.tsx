import { Mail, Phone, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

interface Staff {
  id: string;
  name: string;
  designation: string;
  department?: string;
  email?: string;
  phone?: string;
  photo_url?: string;
  bio?: string;
  qualification?: string;
  experience?: string;
}

interface StaffCardProps {
  staff: Staff;
  className?: string;
}

const StaffCard = ({ staff, className = "" }: StaffCardProps) => {
  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
  };

  return (
    <Card className={`hover:shadow-md transition-shadow ${className}`}>
      <CardContent className="p-6 text-center">
        <div className="mb-4">
          <Avatar className="w-24 h-24 mx-auto">
            <AvatarImage 
              src={staff.photo_url} 
              alt={staff.name}
              className="object-cover"
            />
            <AvatarFallback className="text-lg">
              {getInitials(staff.name)}
            </AvatarFallback>
          </Avatar>
        </div>
        
        <h3 className="text-lg font-semibold text-foreground mb-1">
          {staff.name}
        </h3>
        
        <p className="text-primary font-medium text-sm mb-1">
          {staff.designation}
        </p>
        
        {staff.department && (
          <p className="text-muted-foreground text-sm mb-3">
            {staff.department} Department
          </p>
        )}

        {staff.qualification && (
          <p className="text-muted-foreground text-xs mb-2">
            {staff.qualification}
          </p>
        )}

        <div className="space-y-1">
          {staff.email && (
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Mail className="h-3 w-3" />
              <span className="text-xs">{staff.email}</span>
            </div>
          )}
          
          {staff.phone && (
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Phone className="h-3 w-3" />
              <span className="text-xs">{staff.phone}</span>
            </div>
          )}
        </div>

        {staff.bio && (
          <p className="text-xs text-muted-foreground mt-3 text-left">
            {staff.bio.length > 100 ? `${staff.bio.substring(0, 100)}...` : staff.bio}
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default StaffCard;