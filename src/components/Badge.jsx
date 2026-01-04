const styles = {
  Confirmed: "bg-green-50 text-green-700 border-green-200",
  Pending: "bg-amber-50 text-amber-700 border-amber-200",
  Cancelled: "bg-rose-50 text-rose-700 border-rose-200",
  Completed: "bg-sky-50 text-sky-700 border-sky-200",
  Draft: "bg-slate-50 text-slate-700 border-slate-200",
  Locked: "bg-indigo-50 text-indigo-700 border-indigo-200",
  Unbilled: "bg-amber-50 text-amber-700 border-amber-200",
  Submitted: "bg-sky-50 text-sky-700 border-sky-200",
  Paid: "bg-green-50 text-green-700 border-green-200",
};

export default function Badge({ children }) {
  const cls = styles[children] || "bg-slate-50 text-slate-700 border-slate-200";
  return (
    <span className={`inline-flex items-center px-2 py-0.5 text-xs rounded border ${cls}`}>
      {children}
    </span>
  );
}
