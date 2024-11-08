import React from "react";
import MainLayout from "../Components/Layouts/MainLayout";
import Card from "../Components/Elements/Card";


const Dashboard = () => {
  return (
    <MainLayout type="dashboard">
      {/* top content start*/}
      <div className="mb-4 sm:flex sm:gap-6">
        
        <Card
          title ="Total Balance"
          desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
           />
        
        
          <Card
          title ="Goals"
          desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, delectus. Perspiciatis aspernatur minus autem maxime vel dolor alias amet rerum."
           />
          
        
        
        <Card
          title ="Upcoming bill"
          desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
           />
        
      </div>
      {/* top content end*/}
      {/* bottom content start*/}
      <div className=" md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
        <Card
          title ="Recent Transaction"
          desc = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, delectus. Perspiciatis aspernatur minus autem maxime vel dolor alias amet rerumLorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, delectus. Perspiciatis aspernatur minus autem maxime vel dolor alias amet rerum.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, delectus. Perspiciatis aspernatur minus autem maxime vel dolor alias amet rerum.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, delectus. Perspiciatis aspernatur minus autem maxime vel dolor alias amet rerum."
           />
        </div>
        <div className="md:col-span-2 flex flex-col flex-1">
        <Card
          title ="Statistik"
          desc = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, delectus. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, delectus. Perspiciatis aspernatur minus autem maxime vel dolor alias amet rerum.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, delectus. Perspiciatis aspernatur minus autem maxime vel dolor alias amet rerum. Perspiciatis aspernatur minus autem maxime vel dolor alias amet rerum."/>

          <Card
          title ="Expenses Breakdown"
          desc = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi,Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, delectus. Perspiciatis aspernatur minus autem maxime vel dolor alias amet rerum.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, delectus. Perspiciatis aspernatur minus autem maxime vel dolor alias amet rerum. delectus. Perspiciatis aspernatur minus autem maxime vel dolor alias amet rerum."
           />
        </div>
        
      
        
      </div>
      {/* bottom content end*/}
    </MainLayout>
  );
};

export default Dashboard;
