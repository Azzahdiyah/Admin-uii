import { useState } from "react";
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
        <tr key={transaction.id} className="text-gray-700">
            <td className="py-2 px-4 flex items-center">
                <div className="mr-2">{transaction.icon}</div>
                {transaction.transactionName}
            </td>
            <td className="py-2 px-4">{transaction.shopName}</td>
            <td className="py-2 px-4">{transaction.date}</td>
            <td className="py-2 px-4">{transaction.paymentMethod}</td>
            <td className="py-2 px-4">${transaction.amount}</td>
        </tr>
    ));

    return (
        <MainLayout type="transaction">

            <div>
                <h2 className="text-2xl font-semibold mb-4">Recent Transaction</h2>
                <div className="flex space-x-4 mb-4">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            className={
                                activeTab === tab
                                    ? "text-teal-500 border-b-2 border-teal-500 pb-2"
                                    : "text-gray-500 pb-2"
                            }
                            value={tab}
                            onClick={handleClick}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
                <div className="bg-primary rounded-lg shadow-xl flex-1 overflow-hidden">
                    <table className="min-w-full bg-white">
                        <thead className="bg-primary">
                            <tr>
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
                            </tr>
                        </thead>
                        <tbody>{transactionRows}</tbody>
                    </table>
                    <div className="flex justify-center mt-6 mb-6">
                    <button className="bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-900">
                        Load More
                    </button>
                    </div>
                </div>

            </div>
        </MainLayout>
    );
};



export default TransactionPage;

