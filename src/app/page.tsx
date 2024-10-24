'use client'

import React, { useState } from "react"
import { ArrowRight, BarChart3, Brain, Database, LineChart, Smartphone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { LineChart as RechartsLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
// Mock data for price predictions
const mockPredictions = {
  wheat: {
    '1week': [
      { date: '2024-03-01', price: 220 },
      { date: '2024-03-02', price: 225 },
      { date: '2024-03-03', price: 223 },
      { date: '2024-03-04', price: 228 },
      { date: '2024-03-05', price: 230 },
      { date: '2024-03-06', price: 227 },
      { date: '2024-03-07', price: 232 },
    ],
    '1month': [
      { date: '2024-03-01', price: 220 },
      { date: '2024-03-08', price: 225 },
      { date: '2024-03-15', price: 230 },
      { date: '2024-03-22', price: 228 },
      { date: '2024-03-29', price: 235 },
    ],
    '3months': [
      { date: '2024-03-01', price: 220 },
      { date: '2024-04-01', price: 228 },
      { date: '2024-05-01', price: 235 },
      { date: '2024-06-01', price: 240 },
    ],
  },
  corn: {
    '1week': [
      { date: '2024-03-01', price: 180 },
      { date: '2024-03-02', price: 182 },
      { date: '2024-03-03', price: 185 },
      { date: '2024-03-04', price: 183 },
      { date: '2024-03-05', price: 187 },
      { date: '2024-03-06', price: 189 },
      { date: '2024-03-07', price: 188 },
    ],
    '1month': [
      { date: '2024-03-01', price: 180 },
      { date: '2024-03-08', price: 185 },
      { date: '2024-03-15', price: 188 },
      { date: '2024-03-22', price: 192 },
      { date: '2024-03-29', price: 195 },
    ],
    '3months': [
      { date: '2024-03-01', price: 180 },
      { date: '2024-04-01', price: 188 },
      { date: '2024-05-01', price: 195 },
      { date: '2024-06-01', price: 200 },
    ],
  },
  soybeans: {
    '1week': [
      { date: '2024-03-01', price: 350 },
      { date: '2024-03-02', price: 355 },
      { date: '2024-03-03', price: 358 },
      { date: '2024-03-04', price: 356 },
      { date: '2024-03-05', price: 360 },
      { date: '2024-03-06', price: 362 },
      { date: '2024-03-07', price: 365 },
    ],
    '1month': [
      { date: '2024-03-01', price: 350 },
      { date: '2024-03-08', price: 358 },
      { date: '2024-03-15', price: 365 },
      { date: '2024-03-22', price: 370 },
      { date: '2024-03-29', price: 375 },
    ],
    '3months': [
      { date: '2024-03-01', price: 350 },
      { date: '2024-04-01', price: 365 },
      { date: '2024-05-01', price: 380 },
      { date: '2024-06-01', price: 390 },
    ],
  },
}

export default function Component() {
  const [selectedCrop, setSelectedCrop] = useState<string>("")
  const [selectedTimeframe, setSelectedTimeframe] = useState<string>("")
  const [predictionData, setPredictionData] = useState<Array<{ date: string; price: number }>>([])

  const handleCropChange = (value: string) => {
    setSelectedCrop(value)
  }

  const handleTimeframeChange = (value: string) => {
    setSelectedTimeframe(value)
  }

  const handlePrediction = () => {
    if (selectedCrop && selectedTimeframe) {
      // In a real application, this would be an API call to the backend
      const predictions = mockPredictions[selectedCrop as keyof typeof mockPredictions][selectedTimeframe as keyof typeof mockPredictions['wheat']]
      setPredictionData(predictions)
    }
  }

  return (
    <div className="container mx-auto p-6 space-y-8">
      <h1 className="text-3xl font-bold text-center mb-8">AgriPredict: AI-Powered Agricultural Market Price Prediction</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Data Collection</CardTitle>
            <CardDescription>Gather relevant agricultural data</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>Historical price data</li>
              <li>Weather patterns</li>
              <li>Crop yield information</li>
              <li>Market demand trends</li>
              <li>Global trade data</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Data Preprocessing</CardTitle>
            <CardDescription>Clean and prepare data for analysis</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>Data cleaning and normalization</li>
              <li>Feature engineering</li>
              <li>Time series analysis</li>
              <li>Handling missing values</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>AI Model Development</CardTitle>
            <CardDescription>Create and train predictive models</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>Machine learning algorithms</li>
              <li>Deep learning neural networks</li>
              <li>Time series forecasting models</li>
              <li>Ensemble methods</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Price Prediction</CardTitle>
            <CardDescription>Generate market price forecasts</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>Short-term predictions (days/weeks)</li>
              <li>Medium-term forecasts (months)</li>
              <li>Long-term projections (seasons/years)</li>
              <li>Confidence intervals</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>User Interface</CardTitle>
            <CardDescription>Intuitive dashboard for users</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>Interactive charts and graphs</li>
              <li>Customizable reports</li>
              <li>Mobile app integration</li>
              <li>Alerts and notifications</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Continuous Improvement</CardTitle>
            <CardDescription>Enhance model accuracy over time</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>Regular model retraining</li>
              <li>Feedback incorporation</li>
              <li>Performance monitoring</li>
              <li>Adaptation to market changes</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Data Processing Pipeline</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap justify-center items-center gap-4">
            <Database className="w-12 h-12 text-blue-500" />
            <ArrowRight className="w-6 h-6" />
            <Brain className="w-12 h-12 text-green-500" />
            <ArrowRight className="w-6 h-6" />
            <BarChart3 className="w-12 h-12 text-purple-500" />
            <ArrowRight className="w-6 h-6" />
            <LineChart className="w-12 h-12 text-red-500" />
            <ArrowRight className="w-6 h-6" />
            <Smartphone className="w-12 h-12 text-yellow-500" />
          </div>
        </CardContent>
      </Card>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Price Prediction Demo</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex gap-4">
              <Select onValueChange={handleCropChange}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select crop" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="wheat">Wheat</SelectItem>
                  <SelectItem value="corn">Corn</SelectItem>
                  <SelectItem value="soybeans">Soybeans</SelectItem>
                </SelectContent>
              </Select>
              <Select onValueChange={handleTimeframeChange}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select timeframe" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1week">1 Week</SelectItem>
                  <SelectItem value="1month">1 Month</SelectItem>
                  <SelectItem value="3months">3 Months</SelectItem>
                </SelectContent>
              </Select>
              <Button onClick={handlePrediction}>Predict Price</Button>
            </div>
            <div className="h-64 bg-gray-100 rounded-lg">
              {predictionData.length > 0 ? (
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsLineChart data={predictionData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="price" stroke="#8884d8" />
                  </RechartsLineChart>
                </ResponsiveContainer>
              ) : (
                <div className="h-full flex items-center justify-center">
                  <span className="text-gray-500">Select a crop and timeframe to see price predictions</span>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}