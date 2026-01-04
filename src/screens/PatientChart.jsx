import { useMemo, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Section from "../components/Section";
import Badge from "../components/Badge";
import { findPatient, visits, prescriptions, invoices } from "../data/mockData";

const tabs = ["Summary", "Visits", "Medications", "Billing"];

export default function PatientChart() {
  const { patientId } = useParams();
  const navigate = useNavigate();
  const patient = findPatient(patientId);
  const [tab, setTab] = useState("Summary");

  const patientVisits = useMemo(() => visits.filter((v) => v.patientId === patientId), [patientId]);
  const patientRx = useMemo(() => prescriptions.filter((r) => r.patientId === patientId), [patientId]);
  const patientInvoices = useMemo(() => invoices.filter((i) => i.patientId === patientId), [patientId]);

  if (!patient) {
    return (
      <div className="bg-white rounded border p-4">
        Patient not found.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Patient header */}
      <div className="bg-white rounded border shadow-sm p-4 flex items-center justify-between">
        <div className="min-w-0">
          <div className="text-xl font-semibold truncate">{patient.name}</div>
          <div className="text-sm text-slate-500">
            MRN: {patient.mrn} • DOB: {patient.dob} • Phone: {patient.phone}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => navigate("/schedule")}
            className="text-sm px-3 py-2 rounded border bg-white hover:bg-slate-50"
          >
            Schedule
          </button>
          <button
            onClick={() => navigate("/visits")}
            className="text-sm px-3 py-2 rounded border bg-white hover:bg-slate-50"
          >
            Start Visit Note
          </button>
          <button
            onClick={() => navigate("/prescriptions")}
            className="text-sm px-3 py-2 rounded border bg-white hover:bg-slate-50"
          >
            New Rx
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={[
              "text-sm px-3 py-2 rounded border",
              tab === t ? "bg-white" : "bg-slate-50 hover:bg-white",
            ].join(" ")}
          >
            {t}
          </button>
        ))}
      </div>

      {tab === "Summary" && (
        <Section title="Clinical Summary">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <SummaryItem label="Primary Provider" value="Dr. Harper" />
            <SummaryItem label="Allergies" value="None reported (demo)" />
            <SummaryItem label="Flags" value="—" />
          </div>

          <div className="mt-4 text-sm text-slate-600">
            This is a demo patient chart view showing how AIMRS keeps scheduling, notes, prescriptions, and billing tied to the patient record.
          </div>
        </Section>
      )}

      {tab === "Visits" && (
        <Section title="Visits & Notes">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 text-slate-600">
              <tr>
                <th className="p-3 text-left">Date</th>
                <th className="p-3 text-left">Type</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {patientVisits.map((v) => (
                <tr key={v.id} className="border-t hover:bg-slate-50">
                  <td className="p-3">{v.date}</td>
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
      )}

      {tab === "Medications" && (
        <Section title="Medications">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 text-slate-600">
              <tr>
                <th className="p-3 text-left">Medication</th>
                <th className="p-3 text-left">Dose</th>
                <th className="p-3 text-left">Directions</th>
                <th className="p-3 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {patientRx.map((r) => (
                <tr key={r.id} className="border-t hover:bg-slate-50">
                  <td className="p-3 font-medium">{r.medication}</td>
                  <td className="p-3">{r.dose}</td>
                  <td className="p-3">{r.directions}</td>
                  <td className="p-3"><Badge>{r.status === "Sent" ? "Completed" : "Draft"}</Badge></td>
                </tr>
              ))}
            </tbody>
          </table>
        </Section>
      )}

      {tab === "Billing" && (
        <Section title="Billing Summary">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 text-slate-600">
              <tr>
                <th className="p-3 text-left">Invoice</th>
                <th className="p-3 text-left">Date</th>
                <th className="p-3 text-left">Amount</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {patientInvoices.map((i) => (
                <tr key={i.id} className="border-t hover:bg-slate-50">
                  <td className="p-3 font-medium">{i.id.toUpperCase()}</td>
                  <td className="p-3">{i.date}</td>
                  <td className="p-3">${i.amount}</td>
                  <td className="p-3"><Badge>{i.status}</Badge></td>
                  <td className="p-3">
                    <button
                      className="text-sm px-3 py-1.5 rounded border bg-white hover:bg-slate-50"
                      onClick={() => navigate(`/billing/${i.id}`)}
                    >
                      View invoice
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Section>
      )}
    </div>
  );
}

function SummaryItem({ label, value }) {
  return (
    <div className="border rounded p-3 bg-slate-50">
      <div className="text-xs text-slate-500">{label}</div>
      <div className="text-sm font-medium mt-1">{value}</div>
    </div>
  );
}
