import MainLayout from "../components/Layouts/MainLayout";
import accounts from "../data/accounts";
import { Link } from "react-router-dom";
import { Icon } from "../components/Elements/Icon";

const BalancePage = () => {
  const balanceCard = accounts.map((account) => (
    <div key={account.id} className="bg-white p-6 rounded-lg shadow mb-6">
    <div className="flex justify-between items-center mb-4">
    <h2 className="text-lg font-semibold">{account.accountType || "No Account Type"}</h2>
      <div className="flex items-center space-x-2">
        {/* Nama Bank */}
        <h2 className="text-lg font-semibold">{account.bankName || "No Bank Name"}</h2>
        {/* Logo Bank */}
        {account.logo && (
          <img
            className="h-6 w-6" 
            src={`/images/${account.logo}`}
            alt={`${account.bankName} logo`}
          />
        )}
      </div>

      {/* Account Type */}
      
    </div>

      <p className="text-gray-500">{account.accountNumber}</p>
      <p className="text-gray-400 text-sm">Account Number</p>
      <p className="text-2xl font-semibold mt-4">${account.balance}</p>
      <p className="text-gray-400 text-sm">Total amount</p>
      <div className="flex justify-between items-center mt-4">
        <Link className="text-teal-500" to="#">
          Remove
        </Link>
        <Link className="text-teal-500 flex items-center" to="#">
          Details
          <Icon.ArrowUpRight className="ml-1" />
        </Link>
      </div>
    </div>
  ));

  return (
    <MainLayout type="balance">
      <div className="p-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-semibold mb-2">Balances</h1>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {balanceCard}

          {/* Add Account Card */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-center items-center">
            <button className="bg-teal-500 text-white px-4 py-2 rounded-full mb-4">
              Add Accounts
            </button>
            <Link className="text-gray-400 text-sm" to="#">
              Edit Accounts
            </Link>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default BalancePage;
