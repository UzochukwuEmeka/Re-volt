import HeaderBox from "@/components/HeaderBox";
import RightSideBar from "@/components/RightSideBar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

const Dashboard = () => {
  const loggedIn = {
    firstName: "Uzo ",
    lastName: "Emeka",
    email: "uzomaker516@gmail.com",
  };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transactions efficiently "
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={2000.12}
          />
        </header>
        Recent
      </div>

      <RightSideBar
        user={loggedIn}
        transaction={[]}
        banks={[{ currentBalance: 123.5 }, { currentBalance: 678.2 }]}
      />
    </section>
  );
};

export default Dashboard;
