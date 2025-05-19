
import { Badge } from "@/components/ui/badge";
import { ComplaintStatus } from "@/types";
import { statusColors, statusLabels } from "@/data/mockData";

interface StatusBadgeProps {
  status: ComplaintStatus;
  size?: "sm" | "md" | "lg";
}

export default function StatusBadge({ status, size = "md" }: StatusBadgeProps) {
  const statusClass = statusColors[status];
  const statusLabel = statusLabels[status];
  
  const sizeClasses = {
    sm: "text-xs px-2 py-0.5",
    md: "text-sm px-2.5 py-0.5",
    lg: "px-3 py-1"
  };
  
  return (
    <Badge className={`${statusClass} ${sizeClasses[size]}`}>
      {statusLabel}
    </Badge>
  );
}
