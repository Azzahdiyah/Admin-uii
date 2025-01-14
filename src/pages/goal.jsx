import Card from "../components/Elements/Card";
import MainLayout from "../components/Layouts/MainLayout";
import { Icon } from "../components/Elements/Icon";
import axios from "axios";
import { useState, useEffect } from "react";
import CompositionExample from "../components/Elements/GaugeChart";

const GoalPage = () => {
  const [goals, setGoals] = useState({ presentAmount: 0, targetAmount: 0 });

  const getData = async () => {
    try {
      const refreshToken = localStorage.getItem("refreshToken");

      const response = await axios.get(
        "https://jwt-auth-eight-neon.vercel.app/goals",
        {
          headers: {
            Authorization: `Bearer ${refreshToken}`,
          },
        }
      );

      setGoals({
        presentAmount: response.data.data[0].present_amount,
        targetAmount: response.data.data[0].target_amount,
      });
    } catch (error) {
      if (error.response) {
        if (error.response.status == 401) {
          setOpen(true);
          setMsg({
            severity: "error",
            desc: "Session Has Expired. Please Login.",
          });
      
          setIsLoggedIn(false);
          setName("");
      
          localStorage.removeItem("refreshToken");
          navigate("/login");
        } else {
          console.log(error.response);
        }
      }
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // Ensure chartValue is calculated only when goals are loaded
  const chartValue =
    goals.targetAmount > 0
      ? (goals.presentAmount * 100) / goals.targetAmount
      : 0;

  return (
    <MainLayout type="goal">
      <div className="md:grid md:grid-cols-3 md:gap-x-6">
        <Card
          title="Goals"
          desc={
            <div className="p-2">
              <div className="flex justify-between">
                <div className="flex">
                  <span className="text-2xl font-bold me-4 self-center">
                    ${goals.presentAmount}
                  </span>
                  <div className="p-2 bg-gray-05 rounded-md box-border">
                    <Icon.Edit />
                  </div>
                </div>
                <div>Nov, 2023</div>
              </div>
              <div className="border-b-2 my-4"></div>
              <div className="flex justify-between">
                <div>
                  <div className="flex mt-3 mb-10">
                    <div>
                      <Icon.Award />
                    </div>
                    <div className="ms-2">
                      <span className="text-gray-02">Target Achieved</span>
                      <br />
                      <span className="font-bold text-xl">
                        ${goals.targetAmount}
                      </span>
                    </div>
                  </div>
                  <div className="flex">
                    <div>
                      <Icon.Target />
                    </div>
                    <div className="ms-2">
                      <span className="text-gray-02">This Month Target</span>
                      <br />
                      <span className="font-bold text-xl">
                        ${goals.presentAmount}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="ms-4 text-center">
                  <CompositionExample desc={chartValue} />
                  <div className="flex justify-between">
                    <span className="text-gray-03">$0</span>
                    <span className="font-bold text-2xl">12K</span>
                    <span className="text-gray-03">$20K</span>
                  </div>
                  <div className="mt-2">Target vs Achievement</div>
                </div>
              </div>
            </div>
          }
          variant="col-span-1"
        />
        <Card
          variant="md:col-span-2"
          title="&nbsp;"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni neque quam alias enim ullam deserunt ducimus consequatur cumque hic voluptatem totam ab quibusdam facilis distinctio ratione, sequi vel porro eum."
        />
        <Card title="Expenses Goals by Category" />
        <Card title="&nbsp;" />
        <Card
          title="&nbsp;"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni neque quam alias enim ullam deserunt ducimus consequatur cumque hic voluptatem totam ab quibusdam facilis distinctio ratione, sequi vel porro eum."
        />
        <Card />
        <Card desc="Lorem. ipsum dolor sit amet consectetur adipisicing elit. Magni neque quam alias enim ullam deserunt ducimus consequatur cumque hic voluptatem totam ab quibusdam facilis distinctio ratione, sequi vel porro eum." />
        <Card />
      </div>
    </MainLayout>
  );
};

export default GoalPage;
