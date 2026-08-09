interface StatusBadgeProps {
  status: string;
}

export default function StatusBadge({
  status,
}: StatusBadgeProps) {
  const styles: Record<string, string> = {
    Applied: "bg-blue-50 text-blue-600",
    Screening: "bg-purple-50 text-purple-600",
    Interview: "bg-amber-50 text-amber-600",
    Offer: "bg-emerald-50 text-emerald-600",
    Rejected: "bg-red-50 text-red-600",
    Shortlisted: "bg-emerald-50 text-emerald-600",
    Reviewing: "bg-slate-100 text-slate-600",
  };

  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-semibold ${
        styles[status] || "bg-slate-100 text-slate-600"
      }`}
    >
      {status}
    </span>
  );
}