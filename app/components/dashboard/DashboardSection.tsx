export default function DashboardSection({ title, description, children }: { title: string; description: string; children: React.ReactNode }) {
  return (
    <div className="bg-neutral-900 p-8 rounded-xl space-y-4">
      <h2 className="text-2xl font-light uppercase tracking-wide">{title}</h2>
      <p className="text-gray-400 text-sm">{description}</p>
      {children}
    </div>
  );
}