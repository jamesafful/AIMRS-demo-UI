import { useNavigate, useLocation } from "react-router-dom";
import { useMemo, useState } from "react";
import { patients } from "../data/mockData";

export default function TopBar({ title }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [q, setQ] = useState("");

  const results = useMemo(() => {
    const t = q.trim().toLowerCase();
    if (!t) return [];
    return patients
      .filter((p) => p.name.toLowerCase().includes(t) || p.mrn.toLowerCase().includes(t))
      .slice(0, 6);
  }, [q]);

  return (
    <header className="bg-white border-b px-6 py-3 flex items-center gap-3">
      <div className="min-w-0">
        <div className="text-lg font-semibold truncate">{title}</div>
        <div className="text-xs text-slate-500 truncate">
          {pathname}
        </div>
      </div>

      <div className="flex-1" />

      <div className="relative w-[360px] max-w-full">
        <input
          className="w-full border rounded px-3 py-2 text-sm bg-slate-50 focus:bg-white outline-none"
          placeholder="Search patients by name or MRN..."
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
        {results.length > 0 && (
          <div className="absolute top-[44px] left-0 right-0 bg-white border rounded shadow overflow-hidden z-10">
            {results.map((p) => (
              <button
                key={p.id}
                onClick={() => {
                  navigate(`/patients/${p.id}`);
                  setQ("");
                }}
                className="w-full text-left px-3 py-2 hover:bg-slate-50"
              >
                <div className="text-sm font-medium">{p.name}</div>
                <div className="text-xs text-slate-500">MRN: {p.mrn} • DOB: {p.dob}</div>
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="flex items-center gap-2">
        <QuickButton onClick={() => navigate("/patients")} label="+ New Patient" />
        <QuickButton onClick={() => navigate("/schedule")} label="+ Appointment" />
        <QuickButton onClick={() => navigate("/visits")} label="+ Note" />
      </div>

      <div className="ml-3 text-sm">
        <div className="font-medium">Dr. Harper</div>
        <div className="text-xs text-slate-500">Physician</div>
      </div>
    </header>
  );
}

function QuickButton({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="text-sm px-3 py-2 rounded border bg-white hover:bg-slate-50"
    >
      {label}
    </button>
  );
}
