'use client'

import React, { useState } from 'react';
import { 
  Home, 
  CreditCard, 
  MessageCircle, 
  User, 
  Plus,
  ChevronRight,
  Star,
  Gift,
  Utensils,
  Users,
  ShoppingBag,
  Bell,
  Search,
} from 'lucide-react';

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('home');
  const [points] = useState(2850);

  const TabButton = ({ id, icon: Icon, label, isActive, onClick }: any) => (
    <button
      onClick={() => onClick(id)}
      className={`flex flex-col items-center px-4 py-2 rounded-lg transition-all ${
        isActive 
          ? 'text-green-600 bg-green-50' 
          : 'text-gray-600 hover:text-green-600'
      }`}
    >
      <Icon size={24} />
      <span className="text-xs mt-1 font-medium">{label}</span>
    </button>
  );

  const ServiceCard = ({ icon: Icon, title, subtitle, color = "green" }: any) => (
    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className={`w-12 h-12 rounded-full bg-${color}-100 flex items-center justify-center mb-3`}>
        <Icon className={`text-${color}-600`} size={24} />
      </div>
      <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
      <p className="text-sm text-gray-600">{subtitle}</p>
      <ChevronRight className="text-gray-400 mt-2" size={16} />
    </div>
  );

  const QuickAction = ({ icon: Icon, label }: any) => (
    <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-2">
        <Icon className="text-green-600" size={20} />
      </div>
      <span className="text-sm font-medium text-gray-700">{label}</span>
    </div>
  );

  const RecentActivity = ({ title, points, time, type }: any) => (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-100">
      <div className="flex items-center space-x-3">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
          type === 'earned' ? 'bg-green-100' : 'bg-orange-100'
        }`}>
          {type === 'earned' ? 
            <Plus className="text-green-600" size={16} /> : 
            <ShoppingBag className="text-orange-600" size={16} />
          }
        </div>
        <div>
          <p className="font-medium text-gray-900">{title}</p>
          <p className="text-sm text-gray-600">{time}</p>
        </div>
      </div>
      <span className={`font-semibold ${
        type === 'earned' ? 'text-green-600' : 'text-orange-600'
      }`}>
        {type === 'earned' ? '+' : '-'}{points} pts
      </span>
    </div>
  );

  const renderHomeContent = () => (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Good morning</h1>
          <p className="text-gray-600">Ready to spend your points?</p>
        </div>
        <div className="flex space-x-2">
          <button className="p-2 rounded-full bg-gray-100">
            <Search size={20} className="text-gray-600" />
          </button>
          <button className="p-2 rounded-full bg-gray-100 relative">
            <Bell size={20} className="text-gray-600" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
          </button>
        </div>
      </div>

      {/* Points Balance Card */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-6 text-white">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Points Balance</h2>
          <Gift size={24} />
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-3xl font-bold">{points.toLocaleString()}</p>
            <p className="text-green-100">Available Points</p>
          </div>
          <button className="bg-white bg-opacity-20 rounded-lg px-4 py-2 text-sm font-medium">
            Earn More
          </button>
        </div>
      </div>

      {/* Quick Actions */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-4 gap-3">
          <QuickAction icon={ShoppingBag} label="Shop" />
          <QuickAction icon={Utensils} label="Dine" />
          <QuickAction icon={Users} label="Clubs" />
          <QuickAction icon={Gift} label="Rewards" />
        </div>
      </div>

      {/* Featured Services */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Featured Services</h3>
        <div className="space-y-3">
          <ServiceCard 
            icon={Utensils}
            title="Restaurant Reservations"
            subtitle="Book tables at premium restaurants"
          />
          <ServiceCard 
            icon={ShoppingBag}
            title="Exclusive Shopping"
            subtitle="Premium brands with points discount"
            color="purple"
          />
          <ServiceCard 
            icon={Users}
            title="VIP Club Access"
            subtitle="Join exclusive member clubs"
            color="blue"
          />
        </div>
      </div>

      {/* Recent Activity */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
        <div className="space-y-3">
          <RecentActivity 
            title="Coffee Purchase"
            points="150"
            time="2 hours ago"
            type="spent"
          />
          <RecentActivity 
            title="Daily Login Bonus"
            points="50"
            time="Today"
            type="earned"
          />
          <RecentActivity 
            title="Restaurant Booking"
            points="300"
            time="Yesterday"
            type="spent"
          />
        </div>
      </div>
    </div>
  );

  const renderWalletContent = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">My Wallet</h2>
        <p className="text-gray-600">Manage your points and transactions</p>
      </div>

      {/* Points Overview */}
      <div className="bg-white rounded-2xl p-6 border border-gray-100">
        <div className="text-center mb-6">
          <p className="text-sm text-gray-600 mb-2">Total Points</p>
          <p className="text-4xl font-bold text-green-600">{points.toLocaleString()}</p>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <p className="text-2xl font-bold text-green-600">1,200</p>
            <p className="text-sm text-gray-600">Earned This Month</p>
          </div>
          <div className="text-center p-4 bg-orange-50 rounded-lg">
            <p className="text-2xl font-bold text-orange-600">800</p>
            <p className="text-sm text-gray-600">Spent This Month</p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-2 gap-4">
        <button className="bg-green-600 text-white p-4 rounded-xl font-semibold">
          Transfer Points
        </button>
        <button className="bg-gray-100 text-gray-700 p-4 rounded-xl font-semibold">
          Transaction History
        </button>
      </div>
    </div>
  );

  const renderMessagesContent = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Messages</h2>
        <p className="text-gray-600">Stay updated with notifications</p>
      </div>

      <div className="space-y-4">
        {[
          { title: "Welcome Bonus!", message: "You've earned 100 bonus points!", time: "2h ago", unread: true },
          { title: "Reservation Confirmed", message: "Your table at Sakura Restaurant is confirmed", time: "1d ago", unread: false },
          { title: "New Rewards Available", message: "Check out the latest rewards in our catalog", time: "2d ago", unread: false },
        ].map((item, index) => (
          <div key={index} className={`p-4 rounded-lg border ${item.unread ? 'bg-green-50 border-green-200' : 'bg-white border-gray-200'}`}>
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900">{item.title}</h4>
                <p className="text-sm text-gray-600 mt-1">{item.message}</p>
              </div>
              <span className="text-xs text-gray-500">{item.time}</span>
            </div>
            {item.unread && <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>}
          </div>
        ))}
      </div>
    </div>
  );

  const renderProfileContent = () => (
    <div className="space-y-6">
      {/* Profile Header */}
      <div className="text-center">
        <div className="w-24 h-24 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
          <User size={40} className="text-green-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900">John Doe</h2>
        <p className="text-gray-600">Premium Member</p>
        <div className="flex items-center justify-center mt-2">
          <Star className="text-yellow-500 fill-current" size={16} />
          <span className="text-sm text-gray-600 ml-1">VIP Status</span>
        </div>
      </div>

      {/* Profile Stats */}
      <div className="grid grid-cols-3 gap-4">
        <div className="text-center p-4 bg-white rounded-lg border border-gray-100">
          <p className="text-2xl font-bold text-green-600">2,850</p>
          <p className="text-sm text-gray-600">Total Points</p>
        </div>
        <div className="text-center p-4 bg-white rounded-lg border border-gray-100">
          <p className="text-2xl font-bold text-blue-600">15</p>
          <p className="text-sm text-gray-600">Bookings</p>
        </div>
        <div className="text-center p-4 bg-white rounded-lg border border-gray-100">
          <p className="text-2xl font-bold text-purple-600">3</p>
          <p className="text-sm text-gray-600">Clubs</p>
        </div>
      </div>

      {/* Menu Items */}
      <div className="space-y-2">
        {[
          { icon: User, label: "Edit Profile", color: "gray" },
          { icon: Bell, label: "Notifications", color: "gray" },
          { icon: Gift, label: "Rewards History", color: "gray" },
          { icon: CreditCard, label: "Payment Methods", color: "gray" },
          { icon: Users, label: "Invite Friends", color: "gray" },
        ].map((item, index) => (
          <button key={index} className="w-full flex items-center justify-between p-4 bg-white rounded-lg border border-gray-100 hover:bg-gray-50">
            <div className="flex items-center space-x-3">
              <item.icon className="text-gray-600" size={20} />
              <span className="font-medium text-gray-900">{item.label}</span>
            </div>
            <ChevronRight className="text-gray-400" size={16} />
          </button>
        ))}
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'home': return renderHomeContent();
      case 'wallet': return renderWalletContent();
      case 'messages': return renderMessagesContent();
      case 'profile': return renderProfileContent();
      default: return renderHomeContent();
    }
  };

  return (
    <div className="max-w-md mx-auto bg-gray-50 min-h-screen flex flex-col">
      {/* Status Bar */}
      <div className="bg-white px-4 py-2 flex justify-between items-center text-sm">
        <span className="font-semibold">9:41</span>
        <div className="flex space-x-1">
          <div className="flex space-x-1">
            <div className="w-1 h-1 bg-black rounded-full"></div>
            <div className="w-1 h-1 bg-black rounded-full"></div>
            <div className="w-1 h-1 bg-black rounded-full"></div>
            <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
          </div>
          <span className="ml-2">📶</span>
          <span>📶</span>
          <span>🔋</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-4 pb-20">
        {renderContent()}
      </div>

      {/* Bottom Navigation */}
      <div className="bg-white border-t border-gray-200 px-4 py-2 fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md">
        <div className="flex justify-around">
          <TabButton
            id="home"
            icon={Home}
            label="Home"
            isActive={activeTab === 'home'}
            onClick={setActiveTab}
          />
          <TabButton
            id="wallet"
            icon={CreditCard}
            label="Wallet"
            isActive={activeTab === 'wallet'}
            onClick={setActiveTab}
          />
          <TabButton
            id="messages"
            icon={MessageCircle}
            label="Messages"
            isActive={activeTab === 'messages'}
            onClick={setActiveTab}
          />
          <TabButton
            id="profile"
            icon={User}
            label="Profile"
            isActive={activeTab === 'profile'}
            onClick={setActiveTab}
          />
        </div>
      </div>
    </div>
  );
}