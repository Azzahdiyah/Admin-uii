import { Link } from "react-router-dom";
import Logo from "../Elements/Logo";
import { Icon } from "../Elements/Logo";
const Navbar = () => {
  const menus = [
    {
      id: "overview",
      link: "/",
      icon: <Icon.Overview />,
      label: "Overview",
    },
    {
      id: "balance",
      link: "/balance",
      icon: <Icon.Balance />,
      label: "Balance",
    },
    {
      id: "transaction",
      link: "/transaction",
      icon: <Icon.Transaction />,
      label: "Transaction",
    },
    {
      id: "Bill",
      link: "/transaction",
      icon: <Icon.Transaction />,
      label: "Bill",
    },
    {
      id: "Expenses",
      link: "/transaction",
      icon: <Icon.Transaction />,
      label: "Expenses",
    },
    {
      id: "Goals",
      link: "/transaction",
      icon: <Icon.Transaction />,
      label: "Goals",
    },
    {
      id: "Setttings",
      link: "/transaction",
      icon: <Icon.Transaction />,
      label: "Settings",
    },
  ];

  return (
    <nav className="bg-defaultBlack text-special-bg2 sm:w-72 w-28 min-h-screen px-7 py-12 flex flex-col justify-between">
      <div>
        <div className="flex justify-center mb-10">
          <Logo variant="text-white text:sm sm:text-2xl" />
        </div>
        {menus.map((menu) => (
          <Link key={menu.id} to={menu.link}>
            <div className="flex hover:bg-special-bg3 hover:text-white px-4 py-3 rounded-md">
              <div className="mx-auto sm:mx-0">{menu.icon}</div>
              <div className="ms-3 hidden sm:block">{menu.label}</div>
            </div>
          </Link>
        ))}
      </div>
      <div className="sticky bottom-12">
        <Link to="/logout">
          <div className="flex bg-special-bg3 px-4 py-3 rounded-md hover:text-white">
            <div className="mx-auto sm:mx-0">
            <Icon.Transaction />
            </div>
            <div className="ms-3 hidden sm:block">Logout</div>
          </div>
        </Link>
        <div className="border-b my-10 border-b-special-bg"></div>
        <div className="flex justify-between">
          <div className="mx-auto sm:mx-0">
            <img src="Images/i.png" alt="" />
          </div>
          <div className="hidden sm:block">
            Username
            <br />
            View Profile
          </div>
          <div className="hidden sm:block self-center justify-self-end"><Icon.Transaction /></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
