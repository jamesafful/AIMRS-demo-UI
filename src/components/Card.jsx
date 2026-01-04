export default function Card({ title, value, sub }) {
  return (
    <div className="bg-white rounded shadow-sm border p-4">
      <div className="text-slate-500 text-sm">{title}</div>
      <div className="text-3xl font-bold mt-2">{value}</div>
      {sub && <div className="text-xs text-slate-500 mt-2">{sub}</div>}
    </div>
  );
}
