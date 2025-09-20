"use client"
import { useState } from "react";
import { Button } from "./ui/button";
import {
  Home,
  PiggyBank,
  TrendingUp,
  User,
  Settings,
  Menu,
  X,
} from "lucide-react";

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

const Navigation = ({ currentPage, onPageChange }: NavigationProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigationItems = [
    { id: "dashboard", label: "Dashboard", icon: Home },
    { id: "savings", label: "Savings", icon: PiggyBank },
    { id: "stocks", label: "Stock Analysis", icon: TrendingUp },
    { id: "profile", label: "Profile", icon: User },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="bg-[hsl(0_0%_100%)] shadow-[0_4px_6px_-1px_hsl(0_0%_0%/0.1),_0_2px_4px_-1px_hsl(0_0%_0%/0.06)]"
        >
          {mobileMenuOpen ? (
            <X className="h-4 w-4" />
          ) : (
            <Menu className="h-4 w-4" />
          )}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-[hsl(0_0%_100%)/95] backdrop-blur-sm">
          <nav className="flex flex-col items-center justify-center h-full space-y-6">
            {navigationItems.map((item) => (
              <Button
                key={item.id}
                variant={currentPage === item.id ? "default" : "ghost"}
                size="lg"
                onClick={() => {
                  onPageChange(item.id);
                  setMobileMenuOpen(false);
                }}
                className="w-48 justify-start"
              >
                <item.icon className="h-5 w-5 mr-3" />
                {item.label}
              </Button>
            ))}
          </nav>
        </div>
      )}

      {/* Desktop Navigation */}
      <nav className="hidden md:flex fixed bottom-6 left-1/2 transform -translate-x-1/2 z-30">
        <div className="bg-[hsl(0_0%_100%)] border border-[hsl(0_0%_91%)] rounded-full px-2 py-2 shadow-[0_10px_25px_-5px_hsl(0_0%_0%/0.15)]">
          <div className="flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Button
                key={item.id}
                variant={currentPage === item.id ? "default" : "ghost"}
                size="sm"
                onClick={() => onPageChange(item.id)}
                className={`rounded-full ${
                  currentPage === item.id
                    ? "bg-[linear-gradient(135deg,hsl(0_0%_9%),hsl(0_0%_20%))] text-white shadow-[0_0_0_1px_hsl(0_0%_0%/0.05),_0_0_20px_hsl(0_0%_0%/0.1)]"
                    : "hover:bg-[hsl(0_0%_96%)] hover:text-[hsl(0_0%_9%)]"
                }`}
              >
                <item.icon className="h-4 w-4 md:mr-2" />
                <span className="hidden md:inline">{item.label}</span>
              </Button>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
