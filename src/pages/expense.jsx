import Card from "../components/Elements/Card";
import MainLayout from "../components/Layouts/MainLayout";
import { expensesStatistics, expensesBreakdowns } from "../data/expenses";
import BarsDataset from "../components/Elements/BarChart";
import { Icon } from "../components/Elements/Icon";

const ExpensePage = () => {
  const expenseCard = expensesBreakdowns.map((expensesBreakdown) => (
    <div
      key={expensesBreakdown.id}
      className="flex justify-between items-center pb-4 border-b border-gray-200"
    >

<div className="flex items-center gap-4">

<div className="bg-gray-100 w-12 h-12 rounded-lg flex items-center justify-center">
  {expensesBreakdown.icon}
</div>


<div>
  <span className="text-gray-500 text-sm font-medium">
    {expensesBreakdown.category}
  </span>
  <br />
  <span className="text-gray-800 font-bold text-lg">
    ${expensesBreakdown.amount}
  </span>
  <div className="flex items-center gap-2">
    <span className="text-gray-500 text-sm">
      {expensesBreakdown.percentage}%
    </span>
    {expensesBreakdown.arrow}
  </div>
</div>
</div>


<div className="flex place-content-center flex-col me-8 ">
<Icon.ArrowRight className="text-gray-400 text-xl" />
</div>
</div>

));

  return (
    <MainLayout type="expense">
      <Card 
        variant="md:col-span-2 min-h-max" title="Statistics" 
        desc = {
            <div className="h-72">
                <select className="font-bold text-lg ring-0 focus:outline-none bg-transparent">
                    <option >Weekly Comparison</option>
                </select>
                <BarsDataset desc={expensesStatistics} />
            </div>
        }
         /> 
         <Card variant="md:col-span-2" title="Expenses Breakdown" desc={<div className="h-full md:grid md:grid-cols-3">{expenseCard}</div>} />
    </MainLayout>
  );
};

export default ExpensePage;
