import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AppShell from "./layout/AppShell";
import Dashboard from "./screens/Dashboard";
import Patients from "./screens/Patients";
import PatientChart from "./screens/PatientChart";
import Schedule from "./screens/Schedule";
import Visits from "./screens/Visits";
import VisitNote from "./screens/VisitNote";
import Prescriptions from "./screens/Prescriptions";
import Billing from "./screens/Billing";
import InvoiceDetail from "./screens/InvoiceDetail";
import Reports from "./screens/Reports";
import Admin from "./screens/Admin";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppShell />}>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/patients/:patientId" element={<PatientChart />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/visits" element={<Visits />} />
          <Route path="/visits/:visitId" element={<VisitNote />} />
          <Route path="/prescriptions" element={<Prescriptions />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/billing/:invoiceId" element={<InvoiceDetail />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/admin" element={<Admin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
