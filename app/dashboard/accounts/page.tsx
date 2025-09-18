export default function AccountsPage() {
  return (
    <div className="w-full">
      <h1 className="text-xl md:text-2xl font-bold text-black mb-6">
        Accounts
      </h1>
      <div className="bg-white rounded shadow p-4 md:p-6 border border-gray-200 w-full max-w-2xl mx-auto">
        <p className="text-gray-500 text-sm md:text-base">
          No accounts found. Add a new account to get started.
        </p>
      </div>
    </div>
  );
}
