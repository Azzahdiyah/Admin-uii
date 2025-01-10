import { useState, useEffect, useContext } from "react";
import axios from "axios";
import Card from "../../Elements/Card";
import { NotifContext } from "../../../context/notifContext";
import { AuthContext } from "../../../context/authContext";
import { useNavigate } from "react-router-dom";
import BillLoader from "../../Elements/BillLoader";
import * as motion from "motion/react-client";

const CardBill = () => {
    const [bills, setBills] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // Local loading state
    const { setMsg, setOpen } = useContext(NotifContext);
    const { setIsLoggedIn, setName } = useContext(AuthContext);
    const navigate = useNavigate();

    const getData = async () => {
        try {
            setIsLoading(true);
            const refreshToken = localStorage.getItem("refreshToken");

            const response = await axios.get(
                "https://jwt-auth-eight-neon.vercel.app/bills",
                {
                    headers: {
                        Authorization: `Bearer ${refreshToken}`,
                    },
                }
            );

            setBills(response.data.data);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            if (error.response) {
                if (error.response.status === 401) {
                    setOpen(true);
                    setMsg({
                        severity: "error",
                        desc: "Sesi telah berakhir. Silakan login kembali.",
                    });

                    setIsLoggedIn(false);
                    setName("");

                    localStorage.removeItem("refreshToken");
                    navigate("/login");
                } else {
                    setOpen(true);
                    setMsg({
                        severity: "error",
                        desc: "Terjadi kesalahan saat mengambil data tagihan.",
                    });
                }
            }
        }
    };

    useEffect(() => {
        getData();
    }, []);

    const billCard = bills.map((bill) => (
        <motion.div 
            key={bill.id} 
            className="lg:flex justify-between pt-3 pb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="flex">
                <div className="bg-special-bg me-3 px-4 rounded-lg flex place-content-center flex-col">
                    <span className="text-xs">{bill.month}</span>
                    <span className="text-2xl font-bold">{bill.date}</span>
                </div>
                <div className="">
                    <img className="h-6" src={`/images/${bill.logo}`} alt={bill.name} />
                    <span className="font-bold">{bill.name}</span>
                    <br />
                    <span className="text-xs">Last Charge - {bill.lastCharge}</span>
                </div>
            </div>
            <div className="flex place-content-center flex-col">
                <span className="p-2 border rounded-lg font-bold text-center">
                    ${bill.amount}
                </span>
            </div>
        </motion.div>
    ));

    return (
        <Card
            title="Upcoming Bill"
            desc={
                <div className="h-full flex flex-col justify-around">
                    {isLoading ? <BillLoader /> : billCard}
                </div>
            }
        />
    );
};

export default CardBill;