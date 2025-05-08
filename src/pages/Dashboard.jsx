import React from 'react';
import Navbar from '../components/Navbar';
import BalanceCard from '../components/BalanceCard';
import QuickActions from '../components/QuickActions';
import RecentTransactions from '../components/RecentTransactions';
import Footer from '../components/Footer';

export default function Dashboard() {
  const dummyTransactions = ["Sent $50 to John", "Received $20 from Alice"];
  return (
    <div>
      <Navbar />
      <BalanceCard balance={123.45} />
      <QuickActions />
      <RecentTransactions transactions={dummyTransactions} />
      <Footer />
    </div>
  );
}
