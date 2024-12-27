import MainLayout from "../components/Layouts/MainLayout";
import accounts from "../data/accounts";
import { Link } from "react-router-dom";
import { Icon } from "../components/Elements/Icon";
import * as motion from "motion/react-client";

const BalancePage = () => {
  const balanceCard = accounts.map((account, index) => (
    <motion.div
      key={account.id}
      className="bg-primary p-6 rounded-lg shadow-xl mb-6"
      initial={{ opacity: 0, y: 20 }} // Start faded and slightly moved down
      animate={{ opacity: 1, y: 0 }}  // Fade in and move into place
      transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }} // Staggered animation
      whileHover={{ scale: 1.05, boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.15)" }} // Hover effect
    >
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
      </div>

      <p className="text-gray-500">{account.accountNumber}</p>
      <p className="text-gray-900 text-sm">Account Number</p>
      <p className="text-2xl text-gray-900 font-semibold mt-4">${account.balance}</p>
      <p className="text-gray-900 text-sm">Total amount</p>
      <div className="flex justify-between items-center mt-4">
        <Link className="text-teal-900" to="#">
          Remove
        </Link>
        <Link className="text-teal-900 flex items-center" to="#">
          Details
          <Icon.ArrowUpRight className="ml-1" />
        </Link>
      </div>
    </motion.div>
  ));

  return (
    <MainLayout type="balance">
      <div className="p-6">
        {/* Header */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h1 className="text-xl font-semibold mb-2">Balances</h1>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {balanceCard}

          {/* Add Account Card */}
          <motion.div
            className="bg-primary rounded-lg shadow-xl mb-6 flex flex-col justify-center items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={{ scale: 1.05, boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.15)" }} // Hover effect
          >
            <button className="bg-teal-500 text-white px-4 py-2 rounded-full mb-4">
              Add Accounts
            </button>
            <Link className="text-gray-900 text-sm" to="#">
              Edit Accounts
            </Link>
          </motion.div>
        </div>
      </div>
    </MainLayout>
  );
};

export default BalancePage;
