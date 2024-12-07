import bills from "../data/Bills";
import Card from "../components/Elements/Card";
import MainLayout from "../components/Layouts/MainLayout";

const BillPage = () => {
    const billCard = bills.map((bill) => (
        <div
            key={bill.id}
            className="grid grid-cols-1 sm:grid-cols-5 gap-4 items-center p-4 border-b border-gray-200"
        >
            <div className="text-center">
                <div className="bg-gray-100 rounded-lg p-3">
                    <div className="text-lg font-bold">{bill.month}</div>
                    <div className="text-2xl font-bold">{bill.date}</div>
                </div>
            </div>
            <div className="flex justify-center">
                <img
                    className="h-12 w-12 object-contain"
                    src={`/images/${bill.logo}`}
                    alt={`${bill.name} logo`}
                />
            </div>
            <div>
                <div className="font-semibold text-gray-800">{bill.name} - Yearly Plan</div>
                <div className="text-sm text-gray-500 mt-1">
                    For advanced security and more flexible controls, the Professional plan helps
                    you scale design processes company-wide.
                </div>
            </div>
            <div className="text-center text-gray-700">
                <div className="font-medium">{bill.lastCharge}</div>
            </div>
            <div className="text-center">
                <div className="bg-gray-100 rounded-lg p-3">
                    <div className="text-lg font-bold text-gray-800">${bill.amount}</div>
                </div>
            </div>
        </div>
    ));

    return (
        <MainLayout title="bills">
            <Card
                title="Upcoming Bills"
                desc={
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <div className="grid grid-cols-5 gap-4 text-gray-500 font-semibold border-b border-gray-300 pb-4 mb-4">
                            <div className="text-center">Due Date</div>
                            <div className="text-center">Logo</div>
                            <div>Item Description</div>
                            <div className="text-center">Last Charge</div>
                            <div className="text-center">Amount</div>
                        </div>
                        <div className="space-y-4">{billCard}</div>
                    </div>
                }
            />
        </MainLayout>
    );
};

export default BillPage;
