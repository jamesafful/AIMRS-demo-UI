import Section from "../components/Section";
import Badge from "../components/Badge";
import { appointments } from "../data/mockData";
import { useNavigate } from "react-router-dom";

export default function Schedule() {
  const navigate = useNavigate();

  return (
    <div className="space-y-4">
      <Section
        title="Schedule (Demo)"
        right={
          <div className="flex items-center gap-2">
            <select className="border rounded px-3 py-2 text-sm bg-white">
              <option>Dr. Harper</option>
              <option>Dr. Patel (demo)</option>
            </select>
            <button className="text-sm px-3 py-2 rounded border bg-white hover:bg-slate-50">
              + New Appointment (demo)
            </button>
          </div>
        }
      >
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-slate-600">
            <tr>
              <th className="p-3 text-left">Time</th>
              <th className="p-3 text-left">Patient</th>
              <th className="p-3 text-left">Type</th>
              <th className="p-3 text-left">Provider</th>
              <th className="p-3 text-left">Room</th>
              <th className="p-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((a) => (
              <tr key={a.id} className="border-t hover:bg-slate-50">
                <td className="p-3">{a.time}</td>
                <td className="p-3 font-medium">
                  <button className="hover:underline" onClick={() => navigate(`/patients/${a.patientId}`)}>
                    {a.patient}
                  </button>
                </td>
                <td className="p-3">{a.type}</td>
                <td className="p-3">{a.provider}</td>
                <td className="p-3">{a.room}</td>
                <td className="p-3"><Badge>{a.status}</Badge></td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="text-xs text-slate-500 mt-3">
          Demo note: A calendar view (day/week) can be added later; this table view keeps the demo simple and readable.
        </div>
      </Section>
    </div>
  );
}
