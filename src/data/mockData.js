export const patients = [
  { id: "p1", name: "John Doe", dob: "1987-03-14", mrn: "MRN-10021", phone: "(555) 013-1002", status: "Active" },
  { id: "p2", name: "Jane Smith", dob: "1992-09-02", mrn: "MRN-10034", phone: "(555) 013-1009", status: "Active" },
  { id: "p3", name: "Mark Allen", dob: "1979-12-21", mrn: "MRN-10077", phone: "(555) 013-1044", status: "Active" },
  { id: "p4", name: "Nia Carter", dob: "1984-06-11", mrn: "MRN-10101", phone: "(555) 013-1050", status: "Inactive" },
];

export const appointments = [
  { id: "a1", time: "09:00", patientId: "p1", patient: "John Doe", type: "Follow-up", status: "Confirmed", provider: "Dr. Harper", room: "Rm 2" },
  { id: "a2", time: "10:00", patientId: "p2", patient: "Jane Smith", type: "Initial Eval", status: "Confirmed", provider: "Dr. Harper", room: "Rm 1" },
  { id: "a3", time: "11:30", patientId: "p3", patient: "Mark Allen", type: "Medication Review", status: "Pending", provider: "Dr. Harper", room: "Rm 2" },
];

export const visits = [
  { id: "v1", date: "2026-01-03", patientId: "p1", patient: "John Doe", type: "Follow-up", status: "Draft" },
  { id: "v2", date: "2026-01-02", patientId: "p2", patient: "Jane Smith", type: "Initial Eval", status: "Locked" },
  { id: "v3", date: "2025-12-28", patientId: "p3", patient: "Mark Allen", type: "Medication Review", status: "Draft" },
];

export const prescriptions = [
  { id: "rx1", patientId: "p3", patient: "Mark Allen", medication: "Sertraline", dose: "50 mg", directions: "Take 1 tablet daily", status: "Sent", date: "2026-01-02" },
  { id: "rx2", patientId: "p1", patient: "John Doe", medication: "Hydroxyzine", dose: "25 mg", directions: "Take as needed for anxiety", status: "Draft", date: "2026-01-03" },
];

export const invoices = [
  { id: "inv1", patientId: "p1", patient: "John Doe", date: "2026-01-03", amount: 160, status: "Unbilled", visitId: "v1" },
  { id: "inv2", patientId: "p2", patient: "Jane Smith", date: "2026-01-02", amount: 250, status: "Submitted", visitId: "v2" },
  { id: "inv3", patientId: "p3", patient: "Mark Allen", date: "2025-12-28", amount: 140, status: "Paid", visitId: "v3" },
];

export function findPatient(patientId) {
  return patients.find((p) => p.id === patientId);
}
