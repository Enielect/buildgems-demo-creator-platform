"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  Upload,
  DollarSign,
  Users,
  Eye,
  Heart,
  TrendingUp,
  Plus,
  MoreHorizontal,
  Edit,
  Trash2,
  Lock,
  Unlock,
} from "lucide-react"
import Link from "next/link"

// Simulated API data
const dashboardStats = {
  totalEarnings: 12450,
  monthlyEarnings: 3200,
  totalSubscribers: 8900,
  newSubscribers: 234,
  totalViews: 45600,
  monthlyViews: 12300,
  contentCount: 47,
}

const recentContent = [
  {
    id: 1,
    title: "Advanced Portrait Lighting Setup",
    thumbnail: "/photography-lighting-setup.png",
    views: 1234,
    likes: 89,
    earnings: 450,
    isPremium: true,
    status: "published",
    publishedAt: "2024-01-15",
  },
  {
    id: 2,
    title: "Camera Settings for Beginners",
    thumbnail: "/camera-settings.jpg",
    views: 2156,
    likes: 156,
    earnings: 0,
    isPremium: false,
    status: "published",
    publishedAt: "2024-01-12",
  },
  {
    id: 3,
    title: "Editing Workflow in Lightroom",
    thumbnail: "/lightroom-editing.jpg",
    views: 892,
    likes: 67,
    earnings: 320,
    isPremium: true,
    status: "draft",
    publishedAt: null,
  },
]

const recentSubscribers = [
  {
    id: 1,
    name: "Alex Johnson",
    avatar: "/diverse-user-avatars.png",
    joinedAt: "2024-01-20",
    tier: "Premium",
  },
  {
    id: 2,
    name: "Maria Garcia",
    avatar: "/female-user-avatar.png",
    joinedAt: "2024-01-19",
    tier: "Basic",
  },
  {
    id: 3,
    name: "David Chen",
    avatar: "/male-user-avatar.png",
    joinedAt: "2024-01-18",
    tier: "Premium",
  },
]

export default function CreatorDashboard() {
  const [selectedTab, setSelectedTab] = useState("overview")

  // Simulated API call
  const handleUploadContent = async () => {
    console.log("Simulated API call: POST /api/content/upload")
    // Backend will handle file upload and content creation
  }

  const handleDeleteContent = async (contentId: number) => {
    console.log(`Simulated API call: DELETE /api/content/${contentId}`)
    // Backend will handle content deletion
  }

  const handleTogglePremium = async (contentId: number, isPremium: boolean) => {
    console.log(`Simulated API call: PATCH /api/content/${contentId}`, { isPremium: !isPremium })
    // Backend will handle premium status toggle
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Upload className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">CreatorHub</span>
            </Link>
            <Badge variant="secondary">Creator Dashboard</Badge>
          </div>

          <div className="flex items-center space-x-3">
            <Button onClick={handleUploadContent} className="animate-pulse-subtle">
              <Plus className="w-4 h-4 mr-2" />
              Upload Content
            </Button>
            <Avatar>
              <AvatarImage src="/creator-avatar.png" />
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome back, Sarah!</h1>
          <p className="text-muted-foreground">Here's how your content is performing</p>
        </div>

        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="content">Content</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="earnings">Earnings</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="animate-fade-in-up">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Earnings</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">${dashboardStats.totalEarnings.toLocaleString()}</div>
                  <p className="text-xs text-muted-foreground">+${dashboardStats.monthlyEarnings} this month</p>
                </CardContent>
              </Card>

              <Card className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Subscribers</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{dashboardStats.totalSubscribers.toLocaleString()}</div>
                  <p className="text-xs text-muted-foreground">+{dashboardStats.newSubscribers} this month</p>
                </CardContent>
              </Card>

              <Card className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Views</CardTitle>
                  <Eye className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{dashboardStats.totalViews.toLocaleString()}</div>
                  <p className="text-xs text-muted-foreground">
                    +{dashboardStats.monthlyViews.toLocaleString()} this month
                  </p>
                </CardContent>
              </Card>

              <Card className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Content</CardTitle>
                  <Upload className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{dashboardStats.contentCount}</div>
                  <p className="text-xs text-muted-foreground">Total uploads</p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                <CardHeader>
                  <CardTitle>Recent Content</CardTitle>
                  <CardDescription>Your latest uploads and their performance</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentContent.map((content) => (
                    <div
                      key={content.id}
                      className="flex items-center space-x-4 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <img
                        src={content.thumbnail || "/placeholder.svg"}
                        alt={content.title}
                        className="w-16 h-12 object-cover rounded"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2 mb-1">
                          <h4 className="font-medium truncate">{content.title}</h4>
                          {content.isPremium ? (
                            <Lock className="w-3 h-3 text-primary" />
                          ) : (
                            <Unlock className="w-3 h-3 text-green-600" />
                          )}
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span className="flex items-center">
                            <Eye className="w-3 h-3 mr-1" />
                            {content.views}
                          </span>
                          <span className="flex items-center">
                            <Heart className="w-3 h-3 mr-1" />
                            {content.likes}
                          </span>
                          {content.earnings > 0 && (
                            <span className="text-green-600 font-medium">${content.earnings}</span>
                          )}
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
                <CardHeader>
                  <CardTitle>Recent Subscribers</CardTitle>
                  <CardDescription>New members who joined your community</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentSubscribers.map((subscriber) => (
                    <div
                      key={subscriber.id}
                      className="flex items-center space-x-4 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <Avatar>
                        <AvatarImage src={subscriber.avatar || "/placeholder.svg"} />
                        <AvatarFallback>
                          {subscriber.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h4 className="font-medium">{subscriber.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          Joined {new Date(subscriber.joinedAt).toLocaleDateString()}
                        </p>
                      </div>
                      <Badge variant={subscriber.tier === "Premium" ? "default" : "secondary"}>{subscriber.tier}</Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="content" className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">Content Management</h2>
                <p className="text-muted-foreground">Manage your uploads and track performance</p>
              </div>
              <Button onClick={handleUploadContent}>
                <Plus className="w-4 h-4 mr-2" />
                Upload New Content
              </Button>
            </div>

            <div className="grid gap-4">
              {recentContent.map((content, index) => (
                <Card key={content.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <img
                        src={content.thumbnail || "/placeholder.svg"}
                        alt={content.title}
                        className="w-24 h-16 object-cover rounded"
                      />
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="font-semibold">{content.title}</h3>
                          <Badge variant={content.status === "published" ? "default" : "secondary"}>
                            {content.status}
                          </Badge>
                          {content.isPremium ? (
                            <Badge variant="outline">
                              <Lock className="w-3 h-3 mr-1" />
                              Premium
                            </Badge>
                          ) : (
                            <Badge variant="outline" className="text-green-600">
                              <Unlock className="w-3 h-3 mr-1" />
                              Free
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                          <span className="flex items-center">
                            <Eye className="w-4 h-4 mr-1" />
                            {content.views.toLocaleString()} views
                          </span>
                          <span className="flex items-center">
                            <Heart className="w-4 h-4 mr-1" />
                            {content.likes} likes
                          </span>
                          {content.earnings > 0 && (
                            <span className="flex items-center text-green-600 font-medium">
                              <DollarSign className="w-4 h-4 mr-1" />${content.earnings}
                            </span>
                          )}
                          {content.publishedAt && (
                            <span>Published {new Date(content.publishedAt).toLocaleDateString()}</span>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleTogglePremium(content.id, content.isPremium)}
                        >
                          {content.isPremium ? <Unlock className="w-4 h-4" /> : <Lock className="w-4 h-4" />}
                        </Button>
                        <Button variant="outline" size="sm">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="sm" onClick={() => handleDeleteContent(content.id)}>
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">Analytics</h2>
              <p className="text-muted-foreground">Track your performance and growth</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Growth Overview</CardTitle>
                  <CardDescription>Your subscriber growth this month</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Subscriber Growth</span>
                        <span className="text-sm text-muted-foreground">+{dashboardStats.newSubscribers}</span>
                      </div>
                      <Progress value={75} className="h-2" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Engagement Rate</span>
                        <span className="text-sm text-muted-foreground">8.4%</span>
                      </div>
                      <Progress value={84} className="h-2" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Content Performance</span>
                        <span className="text-sm text-muted-foreground">92%</span>
                      </div>
                      <Progress value={92} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Top Performing Content</CardTitle>
                  <CardDescription>Your most successful uploads</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentContent.slice(0, 3).map((content, index) => (
                      <div key={content.id} className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-medium">
                          {index + 1}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium truncate">{content.title}</p>
                          <p className="text-sm text-muted-foreground">{content.views.toLocaleString()} views</p>
                        </div>
                        <TrendingUp className="w-4 h-4 text-green-600" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="earnings" className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">Earnings</h2>
              <p className="text-muted-foreground">Track your revenue and payouts</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm font-medium">This Month</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600">
                    ${dashboardStats.monthlyEarnings.toLocaleString()}
                  </div>
                  <p className="text-sm text-muted-foreground">+12% from last month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-sm font-medium">Total Earnings</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">${dashboardStats.totalEarnings.toLocaleString()}</div>
                  <p className="text-sm text-muted-foreground">All time</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-sm font-medium">Next Payout</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$2,450</div>
                  <p className="text-sm text-muted-foreground">Available Feb 1st</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Recent Transactions</CardTitle>
                <CardDescription>Your latest earnings from content sales</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      id: 1,
                      content: "Advanced Portrait Lighting",
                      amount: 29.99,
                      date: "2024-01-20",
                      buyer: "Alex Johnson",
                    },
                    {
                      id: 2,
                      content: "Camera Settings Guide",
                      amount: 19.99,
                      date: "2024-01-19",
                      buyer: "Maria Garcia",
                    },
                    { id: 3, content: "Lightroom Workflow", amount: 39.99, date: "2024-01-18", buyer: "David Chen" },
                  ].map((transaction) => (
                    <div
                      key={transaction.id}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <div>
                        <p className="font-medium">{transaction.content}</p>
                        <p className="text-sm text-muted-foreground">
                          Purchased by {transaction.buyer} • {new Date(transaction.date).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-green-600">+${transaction.amount}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
