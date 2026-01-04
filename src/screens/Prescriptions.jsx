import { useMemo, useState } from "react";
import Section from "../components/Section";
import Badge from "../components/Badge";
import { prescriptions, patients } from "../data/mockData";

export default function Prescriptions() {
  const [patientId, setPatientId] = useState("p1");
  const [med, setMed] = useState("Sertraline");
  const [dose, setDose] = useState("50 mg");
  const [directions, setDirections] = useState("Take 1 tablet daily");

  const patientName = useMemo(() => patients.find((p) => p.id === patientId)?.name || "—", [patientId]);

  return (
    <div className="space-y-4">
      <Section title="Prescription Queue">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-slate-600">
            <tr>
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-left">Patient</th>
              <th className="p-3 text-left">Medication</th>
              <th className="p-3 text-left">Dose</th>
              <th className="p-3 text-left">Directions</th>
              <th className="p-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {prescriptions.map((r) => (
              <tr key={r.id} className="border-t hover:bg-slate-50">
                <td className="p-3">{r.date}</td>
                <td className="p-3 font-medium">{r.patient}</td>
                <td className="p-3">{r.medication}</td>
                <td className="p-3">{r.dose}</td>
                <td className="p-3">{r.directions}</td>
                <td className="p-3">
                  <Badge>{r.status === "Sent" ? "Completed" : "Draft"}</Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Section>

      <Section
        title="New Prescription (Demo UI)"
        right={
          <button className="text-sm px-3 py-2 rounded border bg-slate-900 text-white hover:bg-slate-800">
            Send to eRx (demo)
          </button>
        }
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Field label="Patient">
            <select
              className="w-full border rounded px-3 py-2 text-sm"
              value={patientId}
              onChange={(e) => setPatientId(e.target.value)}
            >
              {patients.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name} ({p.mrn})
                </option>
              ))}
            </select>
            <div className="text-xs text-slate-500 mt-1">Selected: {patientName}</div>
          </Field>

          <Field label="Medication">
            <input className="w-full border rounded px-3 py-2 text-sm" value={med} onChange={(e) => setMed(e.target.value)} />
          </Field>

          <Field label="Dose">
            <input className="w-full border rounded px-3 py-2 text-sm" value={dose} onChange={(e) => setDose(e.target.value)} />
          </Field>

          <Field label="Directions (Sig)">
            <input className="w-full border rounded px-3 py-2 text-sm" value={directions} onChange={(e) => setDirections(e.target.value)} />
          </Field>
        </div>

        <div className="mt-4 text-xs text-slate-500">
          Demo note: The production version embeds or integrates with a certified e-prescribing service; this UI shows the intended workflow without invoking external APIs.
        </div>
      </Section>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <div>
      <div className="text-xs text-slate-500 mb-1">{label}</div>
      {children}
    </div>
  );
}
