import Section from "../components/Section";
import Badge from "../components/Badge";
import { patients } from "../data/mockData";
import { useNavigate } from "react-router-dom";
import { useMemo, useState } from "react";

export default function Patients() {
  const navigate = useNavigate();
  const [q, setQ] = useState("");

  const rows = useMemo(() => {
    const t = q.trim().toLowerCase();
    if (!t) return patients;
    return patients.filter(
      (p) =>
        p.name.toLowerCase().includes(t) ||
        p.mrn.toLowerCase().includes(t)
    );
  }, [q]);

  return (
    <div className="space-y-4">
      <Section
        title="Patient Directory"
        right={
          <>
            <input
              className="border rounded px-3 py-2 text-sm bg-slate-50 focus:bg-white outline-none w-[280px]"
              placeholder="Search name or MRN..."
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
            <button className="text-sm px-3 py-2 rounded border bg-white hover:bg-slate-50">
              + New Patient (demo)
            </button>
          </>
        }
      >
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-slate-600">
            <tr>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">MRN</th>
              <th className="p-3 text-left">DOB</th>
              <th className="p-3 text-left">Phone</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((p) => (
              <tr key={p.id} className="border-t hover:bg-slate-50">
                <td className="p-3 font-medium">
                  <button className="hover:underline" onClick={() => navigate(`/patients/${p.id}`)}>
                    {p.name}
                  </button>
                </td>
                <td className="p-3">{p.mrn}</td>
                <td className="p-3">{p.dob}</td>
                <td className="p-3">{p.phone}</td>
                <td className="p-3">
                  <Badge>{p.status === "Active" ? "Confirmed" : "Cancelled"}</Badge>
                </td>
                <td className="p-3">
                  <button
                    className="text-sm px-3 py-1.5 rounded border bg-white hover:bg-slate-50"
                    onClick={() => navigate(`/patients/${p.id}`)}
                  >
                    Open chart
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {rows.length === 0 && (
          <div className="text-sm text-slate-500">No matching patients.</div>
        )}
      </Section>
    </div>
  );
}
