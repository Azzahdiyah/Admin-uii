import Card from "../Components/Elements/Card";
import MainLayout from "../Components/Layouts/MainLayout";

const BalancePage = () => {
  return (
    <MainLayout type="balance">
      {/* top content start*/}
      <div className="md:grid md:grid-cols-3 md:gap-x-6">
        <Card title="Balances" />
        <Card title="&nbsp;" />
        <Card title="&nbsp;" 
        desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod sansansma em ipsum dolorLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod sansansma em ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod sansansma sit amet, consectetur adipiscing elit, sed do eiusmod sansansma"/> 
        </div>
        {/* top content end*/}

        {/* bottom content start*/}
        <div className="md:grid md:grid-cols-3 md:gap-x-6">
        <Card desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod sansansma em ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod sansansma."/>
        <Card desc="
       ."/>
        <Card desc="
       ."/>
      </div>
      {/* bottom content end*/}
    </MainLayout>
  );
};

export default BalancePage;