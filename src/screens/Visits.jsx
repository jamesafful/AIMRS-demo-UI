import Section from "../components/Section";
import Badge from "../components/Badge";
import { visits } from "../data/mockData";
import { useNavigate } from "react-router-dom";

export default function Visits() {
  const navigate = useNavigate();

  return (
    <div className="space-y-4">
      <Section
        title="Visits & Notes"
        right={
          <button className="text-sm px-3 py-2 rounded border bg-white hover:bg-slate-50">
            + New Visit Note (demo)
          </button>
        }
      >
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-slate-600">
            <tr>
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-left">Patient</th>
              <th className="p-3 text-left">Type</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {visits.map((v) => (
              <tr key={v.id} className="border-t hover:bg-slate-50">
                <td className="p-3">{v.date}</td>
                <td className="p-3 font-medium">{v.patient}</td>
                <td className="p-3">{v.type}</td>
                <td className="p-3"><Badge>{v.status}</Badge></td>
                <td className="p-3">
                  <button
                    className="text-sm px-3 py-1.5 rounded border bg-white hover:bg-slate-50"
                    onClick={() => navigate(`/visits/${v.id}`)}
                  >
                    Open note
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Section>
    </div>
  );
}
