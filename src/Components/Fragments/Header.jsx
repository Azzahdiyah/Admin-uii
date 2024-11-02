import React from "react";
import Input from "../Elements/LabeledInput/Input";
const Header = () => {
  const date = new Date().toDateString().slice(4);

  return (
    <header className="border-b-2 p-6 flex items-center justify-between">
      <div className="flex">
        <div className="font-bold text-lg">Username</div>
        <div className="ms-6 text-gray-03">{date}</div>
      </div>

      <div className="flex">
        <div>Icon</div>
        <div className="ms-10 hidden sm:block">
          <Input variant="bg-white w-80" />
        </div>
      </div>
    </header>
  );
};

export default Header;
