export default function SectionTitle({ children, sub }) {
  return (
    <div className="mb-6">
      <h2 className="font-serif text-2xl font-bold text-brand-deep md:text-3xl">
        {children}
      </h2>
      {sub && <p className="mt-1 text-gray-600">{sub}</p>}
      <div className="mt-3 h-1 w-16 rounded bg-brand" />
    </div>
  );
}
