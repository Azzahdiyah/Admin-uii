import { useState } from "react";
import MainLayout from "../components/Layouts/MainLayout";
import transactions from "../data/transactions";


const SettingPage = () => {
    const [trxs, setTrx] = useState(transactions);
    const [activeTab, setActiveTab] = useState("Account");

    const tabs = ["Account", "Security"];

    function handleClick(e) {
        const transactionsFiltered =
            e.target.value !== "Account"
                ? transactions.filter(({ type }) => type === e.target.value)
                : transactions;

        setActiveTab(e.target.value);
        setTrx(transactionsFiltered);
    }



    return (
        <MainLayout type="setting">

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
                <div className="bg-white rounded-lg shadow-xl flex-1 overflow-hidden">

                    <div className="flex justify-center mt-6 mb-6">
                    <button className="bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600">
                        Update Profile
                    </button>
                    </div>
                </div>

            </div>
        </MainLayout>
    );
};



export default SettingPage;

