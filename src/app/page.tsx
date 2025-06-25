'use client'

import React, { useState } from 'react';
import { 
  Home, 
  CreditCard, 
  MessageCircle, 
  User, 
  Plus,
  ChevronRight,
  ArrowLeft,
  Star,
  Gift,
  Utensils,
  Users,
  ShoppingBag,
  Bell,
  Search,
  Car,
  MapPin,
  Calendar,
  Trophy,
  Activity,
  Zap,
  Target,
  Gamepad2,
  Music,
  Dumbbell
} from 'lucide-react';

type Car = { name: string; price: string; image: string };
type Shop = { id: number; name: string; image: string; rating: number; reviews: number; description: string; cars: Car[] };
type Club = {
  id: number;
  name: string;
  address: string;
  members: number;
  icon: any;
  description: string;
  upcomingGames: { title: string; date: string; time: string; players: number }[];
  pastGames: { title: string; date: string; winner: string }[];
};

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('home');
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedShop, setSelectedShop] = useState<Shop | null>(null);
  const [selectedClub, setSelectedClub] = useState<Club | null>(null);
  const [activeClubTab, setActiveClubTab] = useState('about');
  const [points] = useState(2850);

  // Car shops data
  const carShops = [
    {
      id: 1,
      name: "BYD Motors",
      image: "/byd-logo.jpeg",
      rating: 4.8,
      reviews: 156,
      description: "Leading electric vehicle manufacturer offering innovative and eco-friendly transportation solutions with cutting-edge technology.",
      cars: [
        { name: "BYD Seal", price: "850,000 pts", image: "/byd-01.jpeg" },
        { name: "BYD Tang", price: "720,000 pts", image: "/byd-02.webp" },
        { name: "BYD Han", price: "680,000 pts", image: "/byd-01.jpeg" },
        { name: "BYD Atto 3", price: "650,000 pts", image: "/byd-02.webp" }
      ]
    },
    {
      id: 2,
      name: "GWM Motors",
      image: "/gwm-logo.png",
      rating: 4.5,
      reviews: 89,
      description: "Great Wall Motors offering reliable SUVs and pickup trucks with robust performance and advanced safety features.",
      cars: [
        { name: "GWM Tank 500", price: "920,000 pts", image: "/gwm-01.jpg" },
        { name: "GWM Haval H6", price: "580,000 pts", image: "/gwm-02.webp" },
        { name: "GWM Ora Good Cat", price: "450,000 pts", image: "/gwm-01.jpg" },
        { name: "GWM Poer", price: "720,000 pts", image: "/gwm-02.webp" }
      ]
    },
    {
      id: 3,
      name: "Toyota Motors",
      image: "/toyota-logo.png",
      rating: 4.9,
      reviews: 234,
      description: "World-renowned automotive manufacturer known for reliability, quality, and innovative hybrid technology solutions.",
      cars: [
        { name: "Toyota Camry", price: "680,000 pts", image: "/toyota-01.jpg" },
        { name: "Toyota RAV4", price: "750,000 pts", image: "/toyota-02.jpg" },
        { name: "Toyota Prius", price: "580,000 pts", image: "/toyota-03.avif" },
        { name: "Toyota Corolla", price: "520,000 pts", image: "/toyota-01.jpg" }
      ]
    }
  ];

  // Clubs data
  const clubs = [
    {
      id: 1,
      name: "Elite Tennis Club",
      address: "Marina Bay, Singapore",
      members: 124,
      icon: Activity,
      description: "Premier tennis club with world-class facilities and professional coaching. Join our community of tennis enthusiasts and improve your game.",
      upcomingGames: [
        { title: "Singles Tournament", date: "June 28", time: "2:00 PM", players: 16 },
        { title: "Doubles Championship", date: "July 5", time: "10:00 AM", players: 32 }
      ],
      pastGames: [
        { title: "Summer Open", date: "June 15", winner: "Sarah Chen" },
        { title: "Club Championship", date: "May 28", winner: "Michael Wong" }
      ]
    },
    {
      id: 2,
      name: "Gaming Legends",
      address: "Orchard Road, Singapore",
      members: 89,
      icon: Gamepad2,
      description: "Competitive gaming club for esports enthusiasts. Participate in tournaments and connect with fellow gamers.",
      upcomingGames: [
        { title: "FIFA Tournament", date: "June 30", time: "7:00 PM", players: 24 },
        { title: "League of Legends", date: "July 8", time: "6:00 PM", players: 40 }
      ],
      pastGames: [
        { title: "Valorant Cup", date: "June 10", winner: "Team Phoenix" },
        { title: "Mobile Legends", date: "May 20", winner: "Team Alpha" }
      ]
    },
    {
      id: 3,
      name: "Music Harmony Club",
      address: "Clarke Quay, Singapore",
      members: 67,
      icon: Music,
      description: "Music lovers unite! From jam sessions to live performances, discover your musical talents with us.",
      upcomingGames: [
        { title: "Open Mic Night", date: "July 2", time: "8:00 PM", players: 15 },
        { title: "Band Battle", date: "July 12", time: "7:30 PM", players: 8 }
      ],
      pastGames: [
        { title: "Jazz Evening", date: "June 8", winner: "Blue Note Trio" },
        { title: "Acoustic Session", date: "May 25", winner: "Sarah's Strings" }
      ]
    },
    {
      id: 4,
      name: "Fitness Warriors",
      address: "Raffles Place, Singapore",
      members: 156,
      icon: Dumbbell,
      description: "Transform your fitness journey with our supportive community. Group workouts, challenges, and wellness programs.",
      upcomingGames: [
        { title: "CrossFit Challenge", date: "July 6", time: "6:00 AM", players: 20 },
        { title: "Marathon Prep", date: "July 15", time: "5:30 AM", players: 35 }
      ],
      pastGames: [
        { title: "Strength Challenge", date: "June 12", winner: "Marcus Tan" },
        { title: "Endurance Test", date: "May 30", winner: "Lisa Kumar" }
      ]
    },
    {
      id: 5,
      name: "Business Network Pro",
      address: "CBD District, Singapore",
      members: 203,
      icon: Target,
      description: "Professional networking club for business leaders and entrepreneurs. Expand your network and grow your business.",
      upcomingGames: [
        { title: "Pitch Competition", date: "July 10", time: "7:00 PM", players: 12 },
        { title: "Networking Mixer", date: "July 20", time: "6:30 PM", players: 50 }
      ],
      pastGames: [
        { title: "Startup Showcase", date: "June 5", winner: "TechFlow Solutions" },
        { title: "Innovation Awards", date: "May 18", winner: "GreenTech Ventures" }
      ]
    },
    {
      id: 6,
      name: "Adventure Seekers",
      address: "East Coast, Singapore",
      members: 78,
      icon: Zap,
      description: "For thrill-seekers and outdoor enthusiasts. Join us for hiking, water sports, and adventure activities.",
      upcomingGames: [
        { title: "Rock Climbing", date: "July 3", time: "9:00 AM", players: 15 },
        { title: "Kayak Adventure", date: "July 14", time: "8:00 AM", players: 20 }
      ],
      pastGames: [
        { title: "Mount Kinabalu Trek", date: "June 1", winner: "Team Summit" },
        { title: "Obstacle Course", date: "May 15", winner: "Adventure Squad" }
      ]
    }
  ];

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

  const QuickAction = ({ icon: Icon, label, onClick }: any) => (
    <button 
      onClick={onClick}
      className="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
    >
      <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-2">
        <Icon className="text-green-600" size={20} />
      </div>
      <span className="text-sm font-medium text-gray-700">{label}</span>
    </button>
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

  const ShopCard = ({ shop, onClick }: any) => (
    <button 
      onClick={() => onClick(shop)}
      className="flex items-center p-4 bg-white rounded-lg border border-gray-100 hover:shadow-md transition-shadow w-full"
    >
      <div className="w-16 h-16 rounded-lg bg-gray-100 overflow-hidden mr-4">
        <img 
          src={shop.image} 
          alt={shop.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left">
        <h3 className="font-semibold text-gray-900 mb-1">{shop.name}</h3>
        <div className="flex items-center">
          <Star className="text-yellow-400 fill-current" size={14} />
          <span className="text-sm text-gray-600 ml-1">{shop.rating} ({shop.reviews}+)</span>
        </div>
      </div>
      <ChevronRight className="text-gray-400" size={16} />
    </button>
  );

  const ClubCard = ({ club, onClick }: any) => (
    <button 
      onClick={() => onClick(club)}
      className="flex items-center p-4 bg-white rounded-lg border border-gray-100 hover:shadow-md transition-shadow w-full"
    >
      <div className="w-16 h-16 rounded-lg bg-green-100 flex items-center justify-center mr-4">
        {club && <club.icon className="text-green-600" size={24} />}
      </div>
      <div className="flex-1 text-left">
        <h3 className="font-semibold text-gray-900 mb-1">{club.name}</h3>
        <div className="flex items-center text-sm text-gray-600 mb-1">
          <MapPin size={12} className="mr-1" />
          <span>{club.address}</span>
        </div>
        <span className="text-xs text-green-600 font-medium">{club.members} Members</span>
      </div>
      <ChevronRight className="text-gray-400" size={16} />
    </button>
  );

  const CarCard = ({ car }: any) => (
    <div className="bg-white rounded-lg border border-gray-100 p-4 hover:shadow-md transition-shadow">
      <div className="w-full h-32 rounded-lg bg-gray-100 overflow-hidden mb-3">
        <img 
          src={car.image} 
          alt={car.name}
          className="w-full h-full object-cover"
        />
      </div>
      <h4 className="font-semibold text-gray-900 mb-1">{car.name}</h4>
      <p className="text-green-600 font-bold">{car.price}</p>
      <button className="w-full mt-3 bg-green-600 text-white py-2 rounded-lg font-medium hover:bg-green-700 transition-colors">
        Redeem with Points
      </button>
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
          <QuickAction 
            icon={ShoppingBag} 
            label="Shop" 
            onClick={() => setCurrentPage('shop')}
          />
          <QuickAction icon={Utensils} label="Dine" />
          <QuickAction 
            icon={Users} 
            label="Clubs" 
            onClick={() => setCurrentPage('clubs')}
          />
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

  const renderShopContent = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <button 
          onClick={() => setCurrentPage('home')}
          className="p-2 rounded-full bg-gray-100"
        >
          <ArrowLeft size={20} className="text-gray-600" />
        </button>
        <h2 className="text-xl font-bold text-gray-900">Car Shops</h2>
        <div className="w-10"></div>
      </div>

      <div className="space-y-4">
        {carShops.map((shop) => (
          <ShopCard 
            key={shop.id} 
            shop={shop} 
            onClick={(shop: any) => {
              setSelectedShop(shop);
              setCurrentPage('shopDetail');
            }} 
          />
        ))}
      </div>
    </div>
  );

  const renderShopDetailContent = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <button 
          onClick={() => setCurrentPage('shop')}
          className="p-2 rounded-full bg-gray-100"
        >
          <ArrowLeft size={20} className="text-gray-600" />
        </button>
        <h2 className="text-xl font-bold text-gray-900">{selectedShop?.name}</h2>
        <div className="w-10"></div>
      </div>

      {/* Shop Header */}
      <div className="text-center">
        <div className="w-24 h-24 rounded-lg bg-gray-100 overflow-hidden mx-auto mb-4">
          <img 
            src={selectedShop?.image} 
            alt={selectedShop?.name}
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedShop?.name}</h3>
        <p className="text-gray-600 mb-4">{selectedShop?.description}</p>
        <div className="flex items-center justify-center">
          <Star className="text-yellow-400 fill-current" size={16} />
          <span className="text-sm text-gray-600 ml-1">{selectedShop?.rating} ({selectedShop?.reviews}+ reviews)</span>
        </div>
      </div>

      {/* Cars Grid */}
      <div>
        <h4 className="text-lg font-semibold text-gray-900 mb-4">Available Cars</h4>
        <div className="grid grid-cols-2 gap-4">
          {selectedShop?.cars.map((car: any, index: number) => (
            <CarCard key={index} car={car} />
          ))}
        </div>
      </div>
    </div>
  );

  const renderClubsContent = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <button 
          onClick={() => setCurrentPage('home')}
          className="p-2 rounded-full bg-gray-100"
        >
          <ArrowLeft size={20} className="text-gray-600" />
        </button>
        <h2 className="text-xl font-bold text-gray-900">Clubs</h2>
        <div className="w-10"></div>
      </div>

      <div className="space-y-4">
        {clubs.map((club) => (
          <ClubCard 
            key={club.id} 
            club={club} 
            onClick={(club: any) => {
              setSelectedClub(club);
              setCurrentPage('clubDetail');
              setActiveClubTab('about');
            }} 
          />
        ))}
      </div>
    </div>
  );

  const renderClubDetailContent = () => (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-green-600 text-white p-6 rounded-t-2xl -mx-4">
        <div className="flex items-center justify-between mb-4">
          <button 
            onClick={() => setCurrentPage('clubs')}
            className="p-2 rounded-full bg-white bg-opacity-20"
          >
            <ArrowLeft size={20} className="text-white" />
          </button>
          <span className="text-sm font-medium">INVITED</span>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
            {selectedClub && <selectedClub.icon className="text-white" size={24} />}
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold">{selectedClub?.name}</h2>
            <p className="text-green-100 text-sm flex items-center">
              <MapPin size={12} className="mr-1" />
              {selectedClub?.address}
            </p>
            <p className="text-green-100 text-sm">{selectedClub?.members} Members</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
        <button
          onClick={() => setActiveClubTab('about')}
          className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
            activeClubTab === 'about' 
              ? 'bg-white text-gray-900 shadow-sm' 
              : 'text-gray-600'
          }`}
        >
          ABOUT
        </button>
        <button
          onClick={() => setActiveClubTab('activities')}
          className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
            activeClubTab === 'activities' 
              ? 'bg-white text-gray-900 shadow-sm' 
              : 'text-gray-600'
          }`}
        >
          ACTIVITIES
        </button>
        <button
          onClick={() => setActiveClubTab('members')}
          className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
            activeClubTab === 'members' 
              ? 'bg-white text-gray-900 shadow-sm' 
              : 'text-gray-600'
          }`}
        >
          MEMBERS
        </button>
      </div>

      {/* Tab Content */}
      {activeClubTab === 'about' && (
        <div className="bg-white rounded-lg p-6 border border-gray-100">
          <h3 className="font-semibold text-gray-900 mb-3">About This Club</h3>
          <p className="text-gray-600 leading-relaxed">{selectedClub?.description}</p>
        </div>
      )}

      {activeClubTab === 'activities' && (
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Upcoming Games</h3>
            <div className="space-y-3">
              {selectedClub?.upcomingGames.map((game: any, index: number) => (
                <div key={index} className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-blue-900">{game.title}</h4>
                      <p className="text-sm text-blue-700">
                        <Calendar size={12} className="inline mr-1" />
                        {game.date} • {game.time}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-blue-600">{game.players} Players</p>
                      <button className="text-xs bg-blue-600 text-white px-3 py-1 rounded-full mt-1">
                        Join
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Past Games</h3>
            <div className="space-y-3">
              {selectedClub?.pastGames.map((game: any, index: number) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-gray-900">{game.title}</h4>
                      <p className="text-sm text-gray-600">{game.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600">Winner:</p>
                      <p className="font-semibold text-gray-900">{game.winner}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeClubTab === 'members' && (
        <div className="space-y-3">
          {[
            { name: "Sarah Chen", role: "Club President", activities: 15 },
            { name: "Michael Wong", role: "Tournament Director", activities: 12 },
            { name: "Lisa Kumar", role: "Member", activities: 8 },
            { name: "David Tan", role: "Member", activities: 6 },
            { name: "Emma Rodriguez", role: "Member", activities: 4 }
          ].map((member, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-100">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <User className="text-green-600" size={16} />
                </div>
                <div>
                  <p className="font-medium text-gray-900">{member.name}</p>
                  <p className="text-sm text-gray-600">{member.role}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-green-600">{member.activities} Activities</p>
              </div>
            </div>
          ))}
        </div>
      )}
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
    if (currentPage === 'shop') return renderShopContent();
    if (currentPage === 'shopDetail') return renderShopDetailContent();
    if (currentPage === 'clubs') return renderClubsContent();
    if (currentPage === 'clubDetail') return renderClubDetailContent();
    
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
      {['home', 'shop', 'shopDetail', 'clubs', 'clubDetail'].includes(currentPage) ? (
        <div className="bg-white border-t border-gray-200 px-4 py-2 fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md">
          <div className="flex justify-around">
            <TabButton
              id="home"
              icon={Home}
              label="Home"
              isActive={activeTab === 'home' && currentPage === 'home'}
              onClick={(id: string) => {
                setActiveTab(id);
                setCurrentPage('home');
              }}
            />
            <TabButton
              id="wallet"
              icon={CreditCard}
              label="Wallet"
              isActive={activeTab === 'wallet' && currentPage === 'home'}
              onClick={(id: string) => {
                setActiveTab(id);
                setCurrentPage('home');
              }}
            />
            <TabButton
              id="messages"
              icon={MessageCircle}
              label="Messages"
              isActive={activeTab === 'messages' && currentPage === 'home'}
              onClick={(id: string) => {
                setActiveTab(id);
                setCurrentPage('home');
              }}
            />
            <TabButton
              id="profile"
              icon={User}
              label="Profile"
              isActive={activeTab === 'profile' && currentPage === 'home'}
              onClick={(id: string) => {
                setActiveTab(id);
                setCurrentPage('home');
              }}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
}