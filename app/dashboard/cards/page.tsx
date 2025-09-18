export default function CardsPage() {
  return (
    <div className="w-full">
      <h1 className="text-xl md:text-2xl font-bold text-black mb-6">Cards</h1>
      <div className="bg-white rounded shadow p-4 md:p-6 border border-gray-200 w-full max-w-2xl mx-auto">
        <p className="text-gray-500 text-sm md:text-base">
          No cards available. Request a new card to get started.
        </p>
      </div>
    </div>
  );
}
