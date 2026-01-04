import Section from "../components/Section";
import Card from "../components/Card";
import { appointments, visits, invoices } from "../data/mockData";

export default function Reports() {
  const completedNotes = visits.filter((v) => v.status === "Locked").length;
  const draftNotes = visits.filter((v) => v.status === "Draft").length;
  const totalRevenue = invoices.reduce((sum, i) => sum + i.amount, 0);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card title="Appointments (demo day)" value={appointments.length} sub="Provider: Dr. Harper" />
        <Card title="Notes Locked" value={completedNotes} sub={`Draft remaining: ${draftNotes}`} />
        <Card title="Total Charges (demo)" value={`$${totalRevenue}`} sub="Not actual payments" />
      </div>

      <Section title="Operational Snapshot (Demo)">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-slate-600">
            <tr>
              <th className="p-3 text-left">Metric</th>
              <th className="p-3 text-left">Value</th>
              <th className="p-3 text-left">Notes</th>
            </tr>
          </thead>
          <tbody>
            <Row label="Unbilled invoices" value={invoices.filter((i) => i.status === "Unbilled").length} note="Ready for billing review" />
            <Row label="Submitted invoices" value={invoices.filter((i) => i.status === "Submitted").length} note="Awaiting payer/processing" />
            <Row label="Paid invoices" value={invoices.filter((i) => i.status === "Paid").length} note="Marked as paid (demo)" />
          </tbody>
        </table>
      </Section>
    </div>
  );
}

function Row({ label, value, note }) {
  return (
    <tr className="border-t">
      <td className="p-3 font-medium">{label}</td>
      <td className="p-3">{value}</td>
      <td className="p-3 text-slate-600">{note}</td>
    </tr>
  );
}
