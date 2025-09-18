export default function DashboardPage() {
  return (
    <div className="w-full">
      <h1 className="text-xl md:text-2xl font-bold text-black mb-6">
        Welcome to your Home
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        <div className="bg-white rounded shadow p-4 md:p-6 flex flex-col items-start border border-gray-200 min-w-0">
          <span className="text-gray-500 text-xs md:text-sm mb-2">Balance</span>
          <span className="text-lg md:text-2xl font-semibold text-black">
            ₦0.00
          </span>
        </div>
        <div className="bg-white rounded shadow p-4 md:p-6 flex flex-col items-start border border-gray-200 min-w-0">
          <span className="text-gray-500 text-xs md:text-sm mb-2">
            Accounts
          </span>
          <span className="text-lg md:text-2xl font-semibold text-black">
            0
          </span>
        </div>
        <div className="bg-white rounded shadow p-4 md:p-6 flex flex-col items-start border border-gray-200 min-w-0">
          <span className="text-gray-500 text-xs md:text-sm mb-2">
            Recent Transactions
          </span>
          <span className="text-lg md:text-2xl font-semibold text-black">
            0
          </span>
        </div>
      </div>
    </div>
  );
}
