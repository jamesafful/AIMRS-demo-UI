export default function Section({ title, right, children }) {
  return (
    <section className="bg-white rounded border shadow-sm">
      <div className="px-4 py-3 border-b flex items-center justify-between">
        <div className="font-semibold">{title}</div>
        {right ? <div className="flex items-center gap-2">{right}</div> : null}
      </div>
      <div className="p-4">{children}</div>
    </section>
  );
}
