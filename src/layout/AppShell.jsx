import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";

const titles = {
  "/dashboard": "Physician Dashboard",
  "/patients": "Patients",
  "/schedule": "Schedule",
  "/visits": "Visits",
  "/prescriptions": "Prescriptions",
  "/billing": "Billing",
  "/reports": "Reports",
  "/admin": "Admin",
};

export default function AppShell() {
  const { pathname } = useLocation();
  const base = "/" + pathname.split("/")[1];
  const title = titles[base] || "AIMRS";

  return (
    <div className="flex h-screen bg-slate-100">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <TopBar title={title} />
        <main className="flex-1 overflow-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
