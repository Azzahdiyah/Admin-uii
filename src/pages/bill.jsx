import bills from "../data/Bills";
import Card from "../components/Elements/Card";
import MainLayout from "../components/Layouts/MainLayout";
import * as motion from "motion/react-client";

const BillPage = () => {
    const billCard = bills.map((bill) => (
        <motion.div
            key={bill.id}
            className="grid grid-cols-1 sm:grid-cols-5 gap-4 items-center p-4 border-b border-gray-200"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: bill.id * 0.2 }}
        >
            <motion.div
                className="text-center"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4 }}
            >
                <div className="bg-gray-100 rounded-lg p-3">
                    <div className="text-lg font-bold">{bill.month}</div>
                    <div className="text-2xl font-bold">{bill.date}</div>
                </div>
            </motion.div>
            <motion.div
                className="flex justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: bill.id * 0.2 }}
            >
                <img
                    className="h-20 w-20 object-contain"
                    src={`/images/${bill.logo}`}
                    alt={`${bill.name} logo`}
                />
            </motion.div>
            <div>
                <div className="font-semibold text-gray-900">{bill.name} - Yearly Plan</div>
                <div className="text-sm text-gray-900 mt-1">
                    For advanced security and more flexible controls, the Professional plan helps
                    you scale design processes company-wide.
                </div>
            </div>
            <div className="text-center text-prymary">
                <div className="font-medium">{bill.lastCharge}</div>
            </div>
            <motion.div
                className="text-center"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4 }}
            >
                <div className="bg-gray-100 rounded-lg p-3">
                    <div className="text-lg font-bold text-gray-900">${bill.amount}</div>
                </div>
            </motion.div>
        </motion.div>
    ));

    return (
        <MainLayout title="bills">
            <Card
                title="Upcoming Bills"
                desc={
                    <motion.div
                        className="bg-primary rounded-lg shadow-md p-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="grid grid-cols-5 gap-4 text-gray-900 font-semibold border-b border-gray-300 pb-4 mb-4">
                            <div className="text-center">Due Date</div>
                            <div className="text-center">Logo</div>
                            <div>Item Description</div>
                            <div className="text-center">Last Charge</div>
                            <div className="text-center">Amount</div>
                        </div>
                        <div className="space-y-4">{billCard}</div>
                    </motion.div>
                }
            />
        </MainLayout>
    );
};

export default BillPage;
