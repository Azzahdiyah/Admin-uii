import { useState } from "react";
import MainLayout from "../components/Layouts/MainLayout";

const SettingPage = () => {
    const [activeTab, setActiveTab] = useState("Account");

    const tabs = ["Account", "Security"];

    function handleClick(e) {
        setActiveTab(e.target.value);
    }

    return (
        <MainLayout type="setting">
            <div>
                <h2 className="text-2xl font-semibold mb-4">Settings</h2>
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
                <div className="bg-white rounded-lg shadow-xl p-6">
                    {activeTab === "Account" && (
                        <div className="space-y-4">
                            <div className="flex flex-col items-center">
                                <label className="text-gray-400 font-medium mb-2">
                                    Your Profile Picture
                                </label>
                                <div className="border-dashed border-2 border-gray-400 rounded-lg p-6 w-40 h-40 flex items-center  text-gray-400">
                                    <span>Upload your photo</span>
                                </div>
                            </div>                            
                            <div className="flex flex-col">
                                <label className="text-gray-600 font-medium">Full Name</label>
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
                                <label className="text-gray-600 font-medium">Username</label>
                                <input
                                    type="text"
                                    value="tanzir.rahman"
                                    readOnly
                                    className="border rounded-lg p-2 mt-1"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-gray-600 font-medium">Phone Number</label>
                                <input
                                    type="text"
                                    value="+880 | 51547 58868"
                                    readOnly
                                    className="border rounded-lg p-2 mt-1"
                                />
                            </div>

                            <div className="flex  mt-6">
                                <button className="bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600">
                                    Update Profile
                                </button>
                            </div>
                        </div>
                    )}
                    {activeTab === "Security" && (
                        <div className="space-y-4">
                        <div className="flex flex-col">
                            <label className="text-gray-600 font-medium">Old Password</label>
                            <input
                                type="text"
                                value="**********"
                                readOnly
                                className="border rounded-lg p-2 mt-1"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-gray-600 font-medium">New Password</label>
                            <input
                                type="email"
                                value="**********"
                                readOnly
                                className="border rounded-lg p-2 mt-1"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-gray-600 font-medium">Retype Password</label>
                            <input
                                type="text"
                                value="********"
                                readOnly
                                className="border rounded-lg p-2 mt-1"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-gray-600 font-medium">Phone Number</label>
                            <input
                                type="text"
                                value="+880 | 51547 58868"
                                readOnly
                                className="border rounded-lg p-2 mt-1"
                            />
                        </div>

                        <div className="flex  mt-6">
                            <button className="bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600">
                                Update Profile
                            </button>
                        </div>
                    </div>
                    )}
                </div>
            </div>
        </MainLayout>
    );
};

export default SettingPage;
