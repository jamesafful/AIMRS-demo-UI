import { useMemo, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Section from "../components/Section";
import Badge from "../components/Badge";
import { visits } from "../data/mockData";

export default function VisitNote() {
  const { visitId } = useParams();
  const navigate = useNavigate();

  const visit = useMemo(() => visits.find((v) => v.id === visitId), [visitId]);

  const [status, setStatus] = useState(visit?.status || "Draft");
  const [subjective, setSubjective] = useState("Reports improved sleep. Mild anxiety persists (demo).");
  const [objective, setObjective] = useState("Alert and oriented. No acute distress (demo).");
  const [assessment, setAssessment] = useState("Generalized anxiety disorder – improving (demo).");
  const [plan, setPlan] = useState("Continue current regimen. Follow up in 4 weeks (demo).");

  if (!visit) {
    return <div className="bg-white rounded border p-4">Visit not found.</div>;
  }

  return (
    <div className="space-y-4">
      <div className="bg-white rounded border shadow-sm p-4 flex items-center justify-between">
        <div>
          <div className="text-xl font-semibold">Visit Note</div>
          <div className="text-sm text-slate-500">
            {visit.date} • {visit.patient} • {visit.type} • <Badge>{status}</Badge>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => navigate(`/patients/${visit.patientId}`)}
            className="text-sm px-3 py-2 rounded border bg-white hover:bg-slate-50"
          >
            Open patient chart
          </button>
          <button
            onClick={() => setStatus("Draft")}
            className="text-sm px-3 py-2 rounded border bg-white hover:bg-slate-50"
          >
            Save Draft
          </button>
          <button
            onClick={() => setStatus("Locked")}
            className="text-sm px-3 py-2 rounded border bg-slate-900 text-white hover:bg-slate-800"
          >
            Lock Note
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Section title="Subjective">
          <textarea
            className="w-full min-h-[160px] border rounded p-3 text-sm outline-none bg-slate-50 focus:bg-white"
            value={subjective}
            onChange={(e) => setSubjective(e.target.value)}
          />
        </Section>

        <Section title="Objective">
          <textarea
            className="w-full min-h-[160px] border rounded p-3 text-sm outline-none bg-slate-50 focus:bg-white"
            value={objective}
            onChange={(e) => setObjective(e.target.value)}
          />
        </Section>

        <Section title="Assessment">
          <textarea
            className="w-full min-h-[160px] border rounded p-3 text-sm outline-none bg-slate-50 focus:bg-white"
            value={assessment}
            onChange={(e) => setAssessment(e.target.value)}
          />
        </Section>

        <Section title="Plan">
          <textarea
            className="w-full min-h-[160px] border rounded p-3 text-sm outline-none bg-slate-50 focus:bg-white"
            value={plan}
            onChange={(e) => setPlan(e.target.value)}
          />
        </Section>
      </div>

      <Section
        title="Visit Actions (Demo)"
        right={
          <button
            onClick={() => navigate("/billing")}
            className="text-sm px-3 py-2 rounded border bg-white hover:bg-slate-50"
          >
            Create billing entry (demo)
          </button>
        }
      >
        <div className="text-sm text-slate-600">
          In the full system, this screen connects to: e-prescribing, billing entries tied to the encounter, and audit logging for locking/amendments.
        </div>
      </Section>
    </div>
  );
}
