import Section from "../components/Section";

export default function Admin() {
  return (
    <div className="space-y-4">
      <Section title="Admin Settings (Demo)">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Setting label="Clinic Name" value="Apex Behavioral Associates" />
          <Setting label="Default Session Timeout" value="15 minutes (demo)" />
          <Setting label="Audit Logging" value="Enabled (demo)" />
          <Setting label="Backup Policy" value="Encrypted daily backups (demo)" />
          <Setting label="User Roles" value="Admin, Physician (demo)" />
          <Setting label="e-Prescribing Integration" value="Certified vendor integration (planned)" />
        </div>
        <div className="text-xs text-slate-500 mt-4">
          Demo note: Admin screens typically include users/roles, templates, billing codes, provider schedules, and audit exports.
        </div>
      </Section>

      <Section title="Users (Demo)">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-slate-600">
            <tr>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Role</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="p-3 font-medium">Dr. Harper</td>
              <td className="p-3">Physician</td>
              <td className="p-3">Active</td>
              <td className="p-3"><button className="text-sm px-3 py-1.5 rounded border bg-white hover:bg-slate-50">Edit (demo)</button></td>
            </tr>
            <tr className="border-t">
              <td className="p-3 font-medium">A. Reynolds</td>
              <td className="p-3">Admin</td>
              <td className="p-3">Active</td>
              <td className="p-3"><button className="text-sm px-3 py-1.5 rounded border bg-white hover:bg-slate-50">Edit (demo)</button></td>
            </tr>
          </tbody>
        </table>
      </Section>
    </div>
  );
}

function Setting({ label, value }) {
  return (
    <div className="border rounded p-3 bg-slate-50">
      <div className="text-xs text-slate-500">{label}</div>
      <div className="text-sm font-medium mt-1">{value}</div>
    </div>
  );
}
