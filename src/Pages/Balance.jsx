import React from 'react';
import Card from "../components/Elements/Card";
import MainLayout from "../Components/Layouts/MainLayout";

const Balance = () => {
  return (
    <MainLayout type="balance">
      {/* top content start*/}
      <div className="mb-8 sm:flex sm:gap-6">
        <div className="sm:w-1/3">
        <Card title= "&nbsp;"/>
        <Card       
          title ="&nbsp;"
          desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
           />
        </div>
        <div className="sm:w-1/3">
          <Card />
        </div>
        <div className="sm:w-1/3">
          <Card />
        </div>
      </div>
      {/* top content end*/}
      {/* bottom content start*/}
      <div className="mb-8 sm:flex sm:gap-6">
        <div className="sm:w-1/3">
          <Card desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor." />
        </div>
        <div className="sm:w-1/3">
          <Card />
        </div>
        <div className="sm:w-1/3">
          <Card />
        </div>
      </div>
      {/* bottom content end*/}
    </MainLayout>

  );
};

export default Balance;