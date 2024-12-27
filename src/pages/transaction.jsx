import { useState } from "react";
import * as motion from "motion/react-client";
import MainLayout from "../components/Layouts/MainLayout";
import transactions from "../data/transactions";

const TransactionPage = () => {
    const [trxs, setTrx] = useState(transactions);
    const [activeTab, setActiveTab] = useState("All");

    const tabs = ["All", "Revenue", "Expense"];

    function handleClick(e) {
        const transactionsFiltered =
            e.target.value !== "All"
                ? transactions.filter(({ type }) => type === e.target.value)
                : transactions;

        setActiveTab(e.target.value);
        setTrx(transactionsFiltered);
    }

    const transactionRows = trxs.map((transaction) => (
        <motion.tr
            key={transaction.id}
            className="text-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            <td className="py-2 px-4 flex items-center">
                <div className="mr-2">{transaction.icon}</div>
                {transaction.transactionName}
            </td>
            <td className="py-2 px-4">{transaction.shopName}</td>
            <td className="py-2 px-4">{transaction.date}</td>
            <td className="py-2 px-4">{transaction.paymentMethod}</td>
            <td className="py-2 px-4">${transaction.amount}</td>
        </motion.tr>
    ));

    return (
        <MainLayout type="transaction">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-2xl font-semibold mb-4">Recent Transaction</h2>
                <motion.div
                    className="flex space-x-4 mb-4"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {tabs.map((tab) => (
                        <motion.button
                            key={tab}
                            className={
                                activeTab === tab
                                    ? "text-teal-500 border-b-2 border-teal-500 pb-2"
                                    : "text-gray-500 pb-2"
                            }
                            value={tab}
                            onClick={handleClick}
                            whileHover={{ scale: 1.1 }}
                        >
                            {tab}
                        </motion.button>
                    ))}
                </motion.div>
                <motion.div
                    className="bg-primary rounded-lg shadow-xl flex-1 overflow-hidden"
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <table className="min-w-full bg-white">
                        <thead className="bg-primary">
                            <motion.tr
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4 }}
                            >
                                <th className="py-2 px-4 text-left text-sm font-semibold text-gray-900">
                                    Items
                                </th>
                                <th className="py-2 px-4 text-left text-sm font-semibold text-gray-900">
                                    Shop Name
                                </th>
                                <th className="py-2 px-4 text-left text-sm font-semibold text-gray-900">
                                    Date
                                </th>
                                <th className="py-2 px-4 text-left text-sm font-semibold text-gray-900">
                                    Payment Method
                                </th>
                                <th className="py-2 px-4 text-left text-sm font-semibold text-gray-900">
                                    Amount
                                </th>
                            </motion.tr>
                        </thead>
                        <tbody>{transactionRows}</tbody>
                    </table>
                    <motion.div
                        className="flex justify-center mt-6 mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <motion.button
                            className="bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-900"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Load More
                        </motion.button>
                    </motion.div>
                </motion.div>
            </motion.div>
        </MainLayout>
    );
};

export default TransactionPage;
