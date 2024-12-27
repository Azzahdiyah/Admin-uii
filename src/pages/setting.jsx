import { useState } from "react";
import { motion } from "framer-motion";
import MainLayout from "../components/Layouts/MainLayout";

const SettingPage = () => {
    const [activeTab, setActiveTab] = useState("Account");

    const tabs = ["Account", "Security"];

    function handleClick(e) {
        setActiveTab(e.target.value);
    }

    return (
        <MainLayout type="setting">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <h2 className="text-2xl font-semibold mb-4">Settings</h2>
                <motion.div
                    className="flex space-x-4 mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {tabs.map((tab) => (
                        <motion.button
                            key={tab}
                            className={
                                activeTab === tab
                                    ? "text-teal-900 border-b-2 border-teal-500 pb-2"
                                    : "text-gray-900 pb-2"
                            }
                            value={tab}
                            onClick={handleClick}
                            whileHover={{
                                scale: 1.1,
                                color: "#319795", // Teal color
                            }}
                            transition={{ duration: 0.2 }}
                        >
                            {tab}
                        </motion.button>
                    ))}
                </motion.div>
                <motion.div
                    className="bg-primary rounded-lg shadow-xl p-6"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {activeTab === "Account" && (
                        <motion.div
                            className="space-y-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.4 }}
                        >
                            <div className="flex flex-col items-center">
                                <label className="text-gray-900 font-medium mb-2">
                                    Your Profile Picture
                                </label>
                                <motion.div
                                    className="border-dashed border-2 border-gray-400 rounded-lg p-6 w-40 h-40 flex items-center text-gray-400"
                                    whileHover={{
                                        scale: 1.05,
                                        borderColor: "#319795", // Teal border
                                    }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <span>Upload your photo</span>
                                </motion.div>
                            </div>
                            <div className="flex flex-col">
                                <label className="text-gray-900 font-medium">Full Name</label>
                                <input
                                    type="text"
                                    value="Tanzir Rahman"
                                    readOnly
                                    className="border rounded-lg p-2 mt-1"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-gray-600 font-medium">Email</label>
                                <input
                                    type="email"
                                    value="tanzir.rahman@email.com"
                                    readOnly
                                    className="border rounded-lg p-2 mt-1"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-gray-900 font-medium">Username</label>
                                <input
                                    type="text"
                                    value="tanzir.rahman"
                                    readOnly
                                    className="border rounded-lg p-2 mt-1"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-gray-900 font-medium">Phone Number</label>
                                <input
                                    type="text"
                                    value="+880 | 51547 58868"
                                    readOnly
                                    className="border rounded-lg p-2 mt-1"
                                />
                            </div>
                            <div className="flex mt-6">
                                <motion.button
                                    className="bg-teal-500 text-gray-900 py-2 px-4 rounded"
                                    whileHover={{
                                        scale: 1.05,
                                        backgroundColor: "#38b2ac", // Darker teal
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    Update Profile
                                </motion.button>
                            </div>
                        </motion.div>
                    )}
                    {activeTab === "Security" && (
                        <motion.div
                            className="space-y-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.4 }}
                        >
                            <div className="flex flex-col">
                                <label className="text-gray-900 font-medium">Old Password</label>
                                <input
                                    type="text"
                                    value="**********"
                                    readOnly
                                    className="border rounded-lg p-2 mt-1"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-gray-900 font-medium">New Password</label>
                                <input
                                    type="email"
                                    value="**********"
                                    readOnly
                                    className="border rounded-lg p-2 mt-1"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-gray-900 font-medium">Retype Password</label>
                                <input
                                    type="text"
                                    value="********"
                                    readOnly
                                    className="border rounded-lg p-2 mt-1"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-gray-900 font-medium">Phone Number</label>
                                <input
                                    type="text"
                                    value="+880 | 51547 58868"
                                    readOnly
                                    className="border rounded-lg p-2 mt-1"
                                />
                            </div>
                            <div className="flex mt-6">
                                <motion.button
                                    className="bg-teal-500 text-gray-900 py-2 px-4 rounded"
                                    whileHover={{
                                        scale: 1.05,
                                        backgroundColor: "#38b2ac", // Darker teal
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    Update Profile
                                </motion.button>
                            </div>
                        </motion.div>
                    )}
                </motion.div>
            </motion.div>
        </MainLayout>
    );
};

export default SettingPage;
