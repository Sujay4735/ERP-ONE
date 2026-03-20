
  // import React, { useEffect, useState } from "react";
  // import GridLayout from "react-grid-layout";
  // import { motion } from "framer-motion";
  // import { FaEllipsisV } from "react-icons/fa";

  // import {
  //   LineChart,
  //   Line,
  //   XAxis,
  //   YAxis,
  //   Tooltip,
  //   ResponsiveContainer,
  //   PieChart,
  //   Pie,
  //   Cell,
  //   Legend
  // } from "recharts";

  // import "react-grid-layout/css/styles.css";
  // import "react-resizable/css/styles.css";

  // const salesData = [
  //   { name: "Jan", sales: 400 },
  //   { name: "Feb", sales: 300 },
  //   { name: "Mar", sales: 600 },
  //   { name: "Apr", sales: 500 },
  //   { name: "May", sales: 700 }
  // ];

  // const revenueData = [
  //   { name: "Services", value: 400 },
  //   { name: "Products", value: 300 },
  //   { name: "Subscriptions", value: 200 }
  // ];

  // const COLORS = ["#4F46E5", "#22C55E", "#F59E0B"];

  // const Tile = ({ title, children }) => (
  //   <motion.div
  //     whileHover={{ scale: 1.03 }}
  //     whileTap={{ scale: 0.98 }}
  //     className="card p-4 border border-gray-300 rounded-md bg-white shadow-sm h-full"
  //   >
  //     <div className="flex justify-between items-center mb-2">
  //       <span className="font-semibold text-sm">{title}</span>
  //       <FaEllipsisV className="opacity-50 hover:opacity-100 cursor-pointer" />
  //     </div>

  //     <div className="text-sm text-gray-500 h-full">
  //       {children || "No data available"}
  //     </div>
  //   </motion.div>
  // );

  // const Dashboard = () => {

  //   const [width, setWidth] = useState(window.innerWidth - 60);

  //   useEffect(() => {
  //     const handleResize = () => setWidth(window.innerWidth - 60);
  //     window.addEventListener("resize", handleResize);
  //     return () => window.removeEventListener("resize", handleResize);
  //   }, []);

  //   const layout = [
  //     { i: "reminders", x: 0, y: 0, w: 3, h: 2 },
  //     { i: "topItems", x: 3, y: 0, w: 3, h: 2 },
  //     { i: "search", x: 6, y: 0, w: 3, h: 2 },
  //     { i: "kpi", x: 9, y: 0, w: 3, h: 2 },

  //     { i: "recent", x: 0, y: 2, w: 4, h: 2 },
  //     { i: "settings", x: 4, y: 2, w: 4, h: 2 },
  //     { i: "shortcuts", x: 8, y: 2, w: 4, h: 2 },

  //     { i: "salesChart", x: 0, y: 4, w: 6, h: 3 },
  //     { i: "pieChart", x: 6, y: 4, w: 3, h: 3 },
  //     { i: "quickActions", x: 9, y: 4, w: 3, h: 3 }
  //   ];

  //   return (
  //     <div className="page-wrapper">

  //       <GridLayout
  //         className="layout"
  //         layout={layout}
  //         cols={12}
  //         rowHeight={90}
  //         width={width}
  //         draggableHandle=".card"
  //       >

  //         <div key="reminders">
  //           <Tile title="Reminders" />
  //         </div>

  //         <div key="topItems">
  //           <Tile title="Top 5 Items By Qty Sold" />
  //         </div>

  //         <div key="search">
  //           <Tile title="Quick Search" />
  //         </div>

  //         <div key="kpi">
  //           <Tile title="Key Performance Indicators" />
  //         </div>

  //         <div key="recent">
  //           <Tile title="Recent Records" />
  //         </div>

  //         <div key="settings">
  //           <Tile title="Settings" />
  //         </div>

  //         <div key="shortcuts">
  //           <Tile title="Shortcuts" />
  //         </div>

  //         {/* Sales Chart */}
  //         <div key="salesChart">
  //           <Tile title="Sales Trend">
  //             <ResponsiveContainer width="100%" height={220}>
  //               <LineChart data={salesData}>
  //                 <XAxis dataKey="name" />
  //                 <YAxis />
  //                 <Tooltip />
  //                 <Line
  //                   type="monotone"
  //                   dataKey="sales"
  //                   stroke="#2563eb"
  //                   strokeWidth={3}
  //                 />
  //               </LineChart>
  //             </ResponsiveContainer>
  //           </Tile>
  //         </div>

  //         {/* Revenue Pie Chart */}
  //         <div key="pieChart">
  //           <Tile title="Revenue Sources">
  //             <ResponsiveContainer width="100%" height={220}>
  //               <PieChart>
  //                 <Pie
  //                   data={revenueData}
  //                   dataKey="value"
  //                   cx="50%"
  //                   cy="50%"
  //                   outerRadius={70}
  //                   label
  //                 >
  //                   {revenueData.map((entry, index) => (
  //                     <Cell key={index} fill={COLORS[index]} />
  //                   ))}
  //                 </Pie>
  //                 <Legend />
  //               </PieChart>
  //             </ResponsiveContainer>
  //           </Tile>
  //         </div>

  //         {/* Quick Actions */}
  //         <div key="quickActions">
  //           <Tile title="Quick Actions">

  //             <div className="flex flex-wrap gap-3">

  //               <button className="btn-primary">
  //                 New Lead
  //               </button>

  //               <button className="btn-primary">
  //                 Create Invoice
  //               </button>

  //               <button className="btn-primary">
  //                 Add Task
  //               </button>

  //               <button className="btn-primary">
  //                 Add Company
  //               </button>

  //             </div>

  //           </Tile>
  //         </div>

  //       </GridLayout>

  //     </div>
  //   );
  // };

  // export default Dashboard;

import React, { useEffect, useMemo, useState } from "react";
import GridLayout from "react-grid-layout";
import { motion } from "framer-motion";
import {
  FaEllipsisV,
  FaUserPlus,
  FaFileInvoice,
  FaTasks,
  FaBuilding,
} from "react-icons/fa";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

const salesData = [
  { name: "Jan", sales: 400 },
  { name: "Feb", sales: 300 },
  { name: "Mar", sales: 600 },
  { name: "Apr", sales: 500 },
  { name: "May", sales: 700 },
];

const revenueData = [
  { name: "Services", value: 400 },
  { name: "Products", value: 300 },
  { name: "Subscriptions", value: 200 },
];

const COLORS = ["#4F46E5", "#22C55E", "#F59E0B"];

const KPI_DATA = [
  { label: "Leads", value: "120", boxClass: "bg-blue-50", textClass: "text-blue-600" },
  { label: "Deals", value: "85", boxClass: "bg-green-50", textClass: "text-green-600" },
  { label: "Invoices", value: "32", boxClass: "bg-yellow-50", textClass: "text-yellow-600" },
  { label: "Revenue", value: "$24k", boxClass: "bg-purple-50", textClass: "text-purple-600" },
];

const QUICK_ACTIONS = [
  {
    label: "New Lead",
    icon: FaUserPlus,
    btnClass: "bg-blue-600 hover:bg-blue-700",
  },
  {
    label: "Invoice",
    icon: FaFileInvoice,
    btnClass: "bg-green-600 hover:bg-green-700",
  },
  {
    label: "Task",
    icon: FaTasks,
    btnClass: "bg-yellow-500 hover:bg-yellow-600",
  },
  {
    label: "Company",
    icon: FaBuilding,
    btnClass: "bg-purple-600 hover:bg-purple-700",
  },
];

const DASHBOARD_LAYOUT = [
  { i: "reminders", x: 0, y: 0, w: 3, h: 2 },
  { i: "topItems", x: 3, y: 0, w: 3, h: 2 },
  { i: "search", x: 6, y: 0, w: 3, h: 2 },
  { i: "kpi", x: 9, y: 0, w: 3, h: 2 },
  { i: "recent", x: 0, y: 2, w: 4, h: 2 },
  { i: "settings", x: 4, y: 2, w: 4, h: 2 },
  { i: "shortcuts", x: 8, y: 2, w: 4, h: 2 },
  { i: "salesChart", x: 0, y: 4, w: 6, h: 3 },
  { i: "pieChart", x: 6, y: 4, w: 3, h: 3 },
  { i: "quickActions", x: 9, y: 4, w: 3, h: 3 },
];

const Tile = React.memo(({ title, children }) => (
  <motion.div
    whileHover={{ y: -3 }}
    className="bg-white border border-gray-200 rounded-lg shadow-sm h-full flex flex-col overflow-hidden"
  >
    <div className="flex justify-between items-center px-4 py-2 border-b">
      <span className="font-semibold text-gray-700 text-sm">{title}</span>
      <FaEllipsisV className="text-gray-400 cursor-pointer hover:text-gray-600" />
    </div>

    <div className="p-4 flex-1 text-sm text-gray-500">
      {children || "No data available"}
    </div>
  </motion.div>
));

const KpiCard = React.memo(({ item }) => (
  <div className={`${item.boxClass} rounded p-3 text-center`}>
    <p className={`text-xl font-bold ${item.textClass}`}>{item.value}</p>
    <p className="text-xs">{item.label}</p>
  </div>
));

const ActionButton = React.memo(({ action }) => {
  const Icon = action.icon;

  return (
    <button
      className={`flex items-center gap-2 ${action.btnClass} text-white px-3 py-2 rounded transition`}
      type="button"
    >
      <Icon />
      {action.label}
    </button>
  );
});

const SalesChart = React.memo(() => (
  <ResponsiveContainer width="100%" height={220}>
    <LineChart data={salesData}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Line
        type="monotone"
        dataKey="sales"
        stroke="#2563eb"
        strokeWidth={3}
        dot={{ r: 5 }}
      />
    </LineChart>
  </ResponsiveContainer>
));

const RevenuePieChart = React.memo(() => (
  <ResponsiveContainer width="100%" height={220}>
    <PieChart>
      <Pie
        data={revenueData}
        dataKey="value"
        cx="50%"
        cy="50%"
        outerRadius={70}
        label
      >
        {revenueData.map((entry, index) => (
          <Cell key={`${entry.name}-${index}`} fill={COLORS[index]} />
        ))}
      </Pie>
      <Legend />
    </PieChart>
  </ResponsiveContainer>
));

const Dashboard = () => {
  const [width, setWidth] = useState(() => window.innerWidth - 60);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth - 60);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const layout = useMemo(() => DASHBOARD_LAYOUT, []);

  const tileContent = useMemo(
    () => ({
      reminders: <Tile title="Reminders" />,
      topItems: <Tile title="Top 5 Items By Qty Sold" />,
      search: <Tile title="Quick Search" />,
      kpi: (
        <Tile title="Key Performance Indicators">
          <div className="grid grid-cols-2 gap-3">
            {KPI_DATA.map((item) => (
              <KpiCard key={item.label} item={item} />
            ))}
          </div>
        </Tile>
      ),
      recent: <Tile title="Recent Records" />,
      settings: <Tile title="Settings" />,
      shortcuts: <Tile title="Shortcuts" />,
      salesChart: (
        <Tile title="Sales Trend">
          <SalesChart />
        </Tile>
      ),
      pieChart: (
        <Tile title="Revenue Sources">
          <RevenuePieChart />
        </Tile>
      ),
      quickActions: (
        <Tile title="Quick Actions">
          <div className="grid grid-cols-2 gap-3">
            {QUICK_ACTIONS.map((action) => (
              <ActionButton key={action.label} action={action} />
            ))}
          </div>
        </Tile>
      ),
    }),
    []
  );

  return (
    <div className="page-wrapper p-2 bg-gray-50 min-h-screen">
      <GridLayout
        className="layout"
        layout={layout}
        cols={12}
        rowHeight={90}
        width={width}
        draggableHandle=".card"
      >
        {layout.map((item) => (
          <div key={item.i}>{tileContent[item.i]}</div>
        ))}
      </GridLayout>
    </div>
  );
};

export default Dashboard;