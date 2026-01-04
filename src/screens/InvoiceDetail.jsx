import { useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Section from "../components/Section";
import Badge from "../components/Badge";
import { invoices, visits } from "../data/mockData";

export default function InvoiceDetail() {
  const { invoiceId } = useParams();
  const navigate = useNavigate();

  const invoice = useMemo(() => invoices.find((i) => i.id === invoiceId), [invoiceId]);
  const visit = useMemo(() => visits.find((v) => v.id === invoice?.visitId), [invoice]);

  if (!invoice) return <div className="bg-white rounded border p-4">Invoice not found.</div>;

  return (
    <div className="space-y-4">
      <div className="bg-white rounded border shadow-sm p-4 flex items-center justify-between">
        <div>
          <div className="text-xl font-semibold">Invoice {invoice.id.toUpperCase()}</div>
          <div className="text-sm text-slate-500">
            {invoice.date} • {invoice.patient} • <Badge>{invoice.status}</Badge>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => navigate(`/patients/${invoice.patientId}`)}
            className="text-sm px-3 py-2 rounded border bg-white hover:bg-slate-50"
          >
            Open patient chart
          </button>
          <button className="text-sm px-3 py-2 rounded border bg-slate-900 text-white hover:bg-slate-800">
            Update status (demo)
          </button>
        </div>
      </div>

      <Section title="Charges (Demo)">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-slate-600">
            <tr>
              <th className="p-3 text-left">Line</th>
              <th className="p-3 text-left">Description</th>
              <th className="p-3 text-left">Code</th>
              <th className="p-3 text-left">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="p-3">1</td>
              <td className="p-3">Office/Outpatient visit (demo)</td>
              <td className="p-3">CPT 99213</td>
              <td className="p-3">${invoice.amount}</td>
            </tr>
          </tbody>
        </table>

        {visit && (
          <div className="text-xs text-slate-500 mt-3">
            Linked visit: {visit.date} • {visit.type} • Note status: {visit.status}
          </div>
        )}
      </Section>

      <Section title="Notes">
        <div className="text-sm text-slate-600">
          Demo invoice detail view. The full build can include payment posting, adjustments, statements, and exports (CSV/PDF).
        </div>
      </Section>
    </div>
  );
}
