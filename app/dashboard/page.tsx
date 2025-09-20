"use client";
import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import Image from "next/image";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Progress } from "../components/ui/progress";
import {
  Wallet,
  Target,
  TrendingUp,
  Lock,
  Plus,
  PiggyBank,
  ArrowDownRight,
} from "lucide-react";
const Dashboard = () => {
  const [savingsAccounts, setSavingsAccounts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSavings = async () => {
      try {
        const response = await fetch('/api/dashboard');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setSavingsAccounts(data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to fetch savings"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchSavings();
  }, []);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const getSavingsTypeIcon = (type: string) => {
    switch (type) {
      case "AUTOMATED":
        return <Wallet className="h-5 w-5" />;
      case "SAFELOCK":
        return <Lock className="h-5 w-5" />;
      case "TARGET":
        return <Target className="h-5 w-5" />;
      default:
        return <PiggyBank className="h-5 w-5" />;
    }
  };

  const getSavingsTypeColor = (type: string) => {
    switch (type) {
      case "AUTOMATED":
        return "bg-[hsl(0_0%_9%)] text-[hsl(0_0%_98%)]";
      case "SAFELOCK":
        return "bg-[hsl(142_72%_29%)] text-white"; // success green
      case "TARGET":
        return "bg-[hsl(222_84%_55%)] text-white"; // blue for target
      default:
        return "bg-[hsl(0_0%_96%)] text-gray-800";
    }
  };

  // Show loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-[hsl(0_0%_100%)] text-[hsl(0_0%_9%)] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[hsl(0_0%_9%)] mx-auto mb-4"></div>
          <p className="text-lg">Loading your savings accounts...</p>
        </div>
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <div className="min-h-screen bg-[hsl(0_0%_100%)] text-[hsl(0_0%_9%)] flex items-center justify-center">
        <div className="text-center">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md">
            <h2 className="text-xl font-semibold text-red-800 mb-2">Error Loading Data</h2>
            <p className="text-red-600 mb-4">{error}</p>
            <Button
              onClick={() => window.location.reload()}
              className="bg-red-600 hover:bg-red-700 text-white"
            >
              Try Again
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[hsl(0_0%_100%)] text-[hsl(0_0%_9%)]">
      {/* Header */}
      <header className="border-b border-[hsl(0_0%_91%)] bg-[hsl(0_0%_100%)] shadow-[0_1px_2px_0_hsl(0_0%_0%/0.05)]">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-[linear-gradient(135deg,hsl(0_0%_9%),hsl(0_0%_20%))] p-2 rounded-xl">
                <Image
                  src="/favicon.ico"
                  alt="Project Logo"
                  width={40}
                  height={40}
                />
              </div>
              <h1 className="text-2xl font-bold">DIFFPaths</h1>
            </div>
            <Button
              size="sm"
              className="bg-[linear-gradient(135deg,hsl(0_0%_9%),hsl(0_0%_20%))] text-white hover:opacity-90 transition-all"
            >
              <Plus className="h-4 w-4 mr-2" />
              New Savings Plan
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-white text-black border-0 shadow-[0_10px_25px_-5px_hsl(0_0%_0%/0.15)]">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="bg-gray-300 p-3 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-black " />
                </div>
                <div>
                  <p className="text-sm text-gray-800">Total Savings</p>
                  <p className="text-2xl font-bold">
                    {formatCurrency(1830000)}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white text-black border-0 shadow-[0_10px_25px_-5px_hsl(0_0%_0%/0.15)]">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="bg-gray-300 p-3 rounded-lg">
                  <Target className="h-6 w-6 text-black" />
                </div>
                <div>
                  <p className="text-sm text-gray-800">Active Goals</p>
                  <p className="text-2xl font-bold">{savingsAccounts.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white text-black border-0 shadow-[0_10px_25px_-5px_hsl(0_0%_0%/0.15)]">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="bg-gray-300 p-3 rounded-lg">
                  <Wallet className="h-6 w-6 text-black" />
                </div>
                <div>
                  <p className="text-sm text-gray-800">
                    Monthly Interest
                  </p>
                  <p className="text-2xl font-bold">{formatCurrency(18500)}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Savings Accounts */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold">Your Savings Plans</h3>
            <Button
              variant="outline"
              size="sm"
              className="border border-[hsl(0_0%_91%)] bg-[hsl(0_0%_100%)] hover:bg-[hsl(0_0%_96%)] hover:text-[hsl(0_0%_9%)]"
            >
              View All
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {savingsAccounts.map((account) => (
              <Card
                key={account.id}
                className="shadow-[0_4px_6px_-1px_hsl(0_0%_0%/0.1),_0_2px_4px_-1px_hsl(0_0%_0%/0.06)] hover:shadow-[0_10px_25px_-5px_hsl(0_0%_0%/0.15)] transition-all"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg font-semibold">
                      {account.name}
                    </CardTitle>
                    <Badge className={getSavingsTypeColor(account.type)}>
                      {getSavingsTypeIcon(account.type)}
                      <span className="ml-2">{account.type}</span>
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-800">Progress</span>
                        <span className="font-medium">{account.progress}%</span>
                      </div>
                      <Progress value={account.progress} className="h-2" />
                    </div>

                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-gray-800">Current</p>
                        <p className="font-semibold">
                          {formatCurrency(account.currentAmount)}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-800">Goal</p>
                        <p className="font-semibold">
                          {formatCurrency(account.goalAmount)}
                        </p>
                      </div>
                    </div>

                    {account.interestRate && (
                      <div className="flex items-center justify-between pt-2 border-t border-[hsl(0_0%_91%)]">
                        <span className="text-sm text-gray-800">
                          Interest Rate
                        </span>
                        <span className="text-sm font-medium text-[hsl(142_72%_29%)]">
                          {account.interestRate}% p.a.
                        </span>
                      </div>
                    )}

                    {account.lockPeriod && (
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-800">
                          Lock Period
                        </span>
                        <span className="text-sm font-medium">
                          {account.lockPeriod}
                        </span>
                      </div>
                    )}

                    <div className="flex gap-2 pt-2">
                      <Button
                        size="sm"
                        className="flex-1 bg-[hsl(0_0%_9%)] text-[hsl(0_0%_98%)] hover:bg-[hsl(0_0%_9%)/90]"
                      >
                        <Plus className="h-4 w-4 mr-2" />
                        Add Funds
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 border border-[hsl(0_0%_91%)] bg-[hsl(0_0%_100%)] hover:bg-[hsl(0_0%_96%)] hover:text-[hsl(0_0%_9%)]"
                      >
                        <ArrowDownRight className="h-4 w-4 mr-2" />
                        Withdraw
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
