import Card from "../components/Card";
import Badge from "../components/Badge";
import { appointments, visits, invoices } from "../data/mockData";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const todaysAppointments = appointments.length;
  const pendingNotes = visits.filter((v) => v.status === "Draft").length;
  const unbilled = invoices.filter((i) => i.status === "Unbilled").length;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card title="Today's Appointments" value={todaysAppointments} sub="Click an appointment to open chart" />
        <Card title="Pending Notes" value={pendingNotes} sub="Draft notes awaiting lock" />
        <Card title="Unbilled Visits" value={unbilled} sub="Visits needing billing review" />
      </div>

      <div className="bg-white rounded border shadow-sm overflow-hidden">
        <div className="px-4 py-3 border-b flex items-center justify-between">
          <div className="font-semibold">Today's Schedule</div>
          <button
            onClick={() => navigate("/schedule")}
            className="text-sm px-3 py-2 rounded border bg-white hover:bg-slate-50"
          >
            View full schedule
          </button>
        </div>
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-slate-600">
            <tr>
              <th className="p-3 text-left">Time</th>
              <th className="p-3 text-left">Patient</th>
              <th className="p-3 text-left">Type</th>
              <th className="p-3 text-left">Room</th>
              <th className="p-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((a) => (
              <tr key={a.id} className="border-t hover:bg-slate-50">
                <td className="p-3">{a.time}</td>
                <td className="p-3">
                  <button
                    className="text-slate-900 font-medium hover:underline"
                    onClick={() => navigate(`/patients/${a.patientId}`)}
                  >
                    {a.patient}
                  </button>
                </td>
                <td className="p-3">{a.type}</td>
                <td className="p-3">{a.room}</td>
                <td className="p-3"><Badge>{a.status}</Badge></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
