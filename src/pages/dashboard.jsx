import Card from "../components/Elements/Card"; 
import MainLayout from "../components/Layouts/MainLayout";
import CardBill from "../components/Fragments/Dashboard/CardBill";
import CardExpenseBreakdown from "../components/Fragments/Dashboard/CardExpenseBreakdown";
import CardTransaction from "../components/Fragments/Dashboard/CardTransaction";
import CardBalance from "../components/Fragments/Dashboard/CardBalance";
import CardStatistic from "../components/Fragments/Dashboard/CardStatistic";
import CardGoal from "../components/Fragments/Dashboard/CardGoal";
import * as motion from "motion/react-client";

const DashboardPage = () => {

  return (
    <MainLayout type="dashboard">
      {/* top content start */}
      <motion.div
          initial={{ opacity: 0, y: 20 }} // Start faded and slightly shifted down
          animate={{ opacity: 1, y: 0 }}  // Fade in and move into place
          transition={{ duration: 0.6, ease: "easeOut" }} // Smooth timing
        className="md:grid md:grid-cols-3 md:gap-x-6"
      >
        <CardBalance />
        <CardGoal />
        <CardBill /> 
        <CardTransaction />
        <CardStatistic />
        <CardExpenseBreakdown />
      </motion.div>
      {/* bottom content end */}
    </MainLayout>
  );
};

export default DashboardPage;
