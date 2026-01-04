import { NavLink } from "react-router-dom";

const nav = [
  { label: "Dashboard", to: "/dashboard" },
  { label: "Patients", to: "/patients" },
  { label: "Schedule", to: "/schedule" },
  { label: "Visits", to: "/visits" },
  { label: "Prescriptions", to: "/prescriptions" },
  { label: "Billing", to: "/billing" },
  { label: "Reports", to: "/reports" },
  { label: "Admin", to: "/admin" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r p-4 flex flex-col">
      <div className="mb-6">
        <div className="text-xl font-bold tracking-tight">AIMRS</div>
        <div className="text-xs text-slate-500 mt-1">Apex Behavioral Associates</div>
      </div>

      <nav className="space-y-1">
        {nav.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              [
                "block px-3 py-2 rounded text-sm",
                isActive
                  ? "bg-slate-100 text-slate-900 font-medium"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900",
              ].join(" ")
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="mt-auto pt-6 text-xs text-slate-400">
        Demo build • UI only • No PHI
      </div>
    </aside>
  );
}
