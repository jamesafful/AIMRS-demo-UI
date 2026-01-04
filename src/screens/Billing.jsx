import Section from "../components/Section";
import Badge from "../components/Badge";
import { invoices } from "../data/mockData";
import { useNavigate } from "react-router-dom";

export default function Billing() {
  const navigate = useNavigate();

  return (
    <div className="space-y-4">
      <Section
        title="Billing (Demo)"
        right={
          <div className="flex items-center gap-2">
            <select className="border rounded px-3 py-2 text-sm bg-white">
              <option>Status: All</option>
              <option>Unbilled</option>
              <option>Submitted</option>
              <option>Paid</option>
            </select>
            <button className="text-sm px-3 py-2 rounded border bg-white hover:bg-slate-50">
              + New Invoice (demo)
            </button>
          </div>
        }
      >
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-slate-600">
            <tr>
              <th className="p-3 text-left">Invoice</th>
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-left">Patient</th>
              <th className="p-3 text-left">Amount</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((i) => (
              <tr key={i.id} className="border-t hover:bg-slate-50">
                <td className="p-3 font-medium">{i.id.toUpperCase()}</td>
                <td className="p-3">{i.date}</td>
                <td className="p-3">{i.patient}</td>
                <td className="p-3">${i.amount}</td>
                <td className="p-3"><Badge>{i.status}</Badge></td>
                <td className="p-3">
                  <button
                    className="text-sm px-3 py-1.5 rounded border bg-white hover:bg-slate-50"
                    onClick={() => navigate(`/billing/${i.id}`)}
                  >
                    View
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
