import React from "react";
import MainLayout from "../Components/Layouts/MainLayout";
import Card from "../Components/Elements/Card";


const GoalsPage = () => {
  return (
    <MainLayout type="dashboard">

        {/* bottom content start*/}
      <div className=" md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
        <Card
          title ="Goals"
          desc = "Lorem ipsum dolor sit, amet consectetur adipisici amet consectetur adipisicing elit. Commodi, delectus. Perspiciatis aspernatur minus autem maxime vel dolor alias amet rerum.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, delectus. Perspiciatis aspernatur minus autem maxime vel dolor alias amet rerum.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, delectus. Perspiciatis aspernatur minus autem maxime vel dolor alias amet rerum."
           />
        </div>
        <div className="md:col-span-2 flex flex-col flex-1">
        <Card
          title ="Saving Summary"
          desc = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, delectus. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, delectus. Perspiciatis aspernatur minus autem maxime vel dolor alias amet rerum.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, delectus. Perspiciatis aspernatur minus autem maxime vel dolor alias amet rerum. Perspiciatis aspernatur minus autem maxime vel dolor alias amet rerum."/>

        </div>
        
      
        
      </div>
      {/* bottom content end*/}
      {/* top content start*/}
      <div className="md:grid md:grid-cols-3 md:gap-x-4  mb-4">
        <Card title="Expencess By Category" />
        <Card title="&nbsp;" />
        <Card title="&nbsp;" 
        desc = ", "/> 
        {/* </div>
        <div className="md:grid md:grid-cols-3 md:gap-x-1 md:gap-y-1 mt-1"> */}
        <Card title="" 
        desc = "Lorem ipsum dolor sit amet, "/> 
        <Card title="" 
        desc = "Lorem ipsum dolor sit amet, "/> 
        <Card title="" 
        desc = "Lorem ipsum dolor sit amet, "/> 
        </div>
        {/* top content end*/}

      {/* top content end*/}
      
    </MainLayout>
  );
};

export default GoalsPage;
