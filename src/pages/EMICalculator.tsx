
import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Calculator, Percent, Calendar, DollarSign, TrendingUp } from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';

const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [loanTenure, setLoanTenure] = useState(20);

  const calculateEMI = () => {
    const principal = loanAmount;
    const rate = interestRate / 12 / 100;
    const time = loanTenure * 12;
    
    if (rate === 0) return principal / time;
    
    const emi = (principal * rate * Math.pow(1 + rate, time)) / (Math.pow(1 + rate, time) - 1);
    return emi;
  };

  const emi = calculateEMI();
  const totalAmount = emi * loanTenure * 12;
  const totalInterest = totalAmount - loanAmount;

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-200/20 to-sky-300/20 rounded-full blur-3xl animate-pulse float" />
          <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-br from-sky-200/15 to-cyan-300/15 rounded-full blur-3xl animate-bounce float-delayed" />
          <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-gradient-to-br from-cyan-200/20 to-blue-300/20 rounded-full blur-3xl animate-pulse float-delayed-2" />
        </div>

        <div className="container mx-auto px-4 py-24 relative z-10">
          {/* Hero Section with 3D elements */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="relative inline-block mb-6">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-sky-500/20 rounded-3xl blur-xl transform rotate-3 animate-pulse"></div>
              <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-blue-200/50 transform hover:scale-105 transition-all duration-500">
                <Calculator className="w-16 h-16 text-blue-600 mx-auto animate-bounce" />
              </div>
            </div>
            <h1 className="text-6xl font-black bg-gradient-to-r from-blue-800 via-sky-700 to-cyan-600 bg-clip-text text-transparent mb-6 animate-fade-in-delayed">
              EMI Calculator
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-delayed-2">
              Calculate your Equated Monthly Installments with our advanced 3D calculator. 
              Get instant results and plan your finances better.
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
            {/* Calculator Input Section */}
            <div className="space-y-8 animate-slide-in-left">
              <div className="bg-white/90 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl border border-blue-200/50 transform hover:scale-105 transition-all duration-500 hover:shadow-blue-200/50">
                <div className="space-y-8">
                  {/* Loan Amount */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-sky-600 rounded-2xl flex items-center justify-center shadow-lg transform hover:rotate-12 transition-transform duration-300">
                        <DollarSign className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <label className="text-lg font-semibold text-gray-800">Loan Amount</label>
                        <p className="text-sm text-gray-600">Enter the total loan amount</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="relative">
                        <Input
                          type="number"
                          value={loanAmount}
                          onChange={(e) => setLoanAmount(Number(e.target.value))}
                          className="text-lg font-semibold pl-8 h-14 rounded-2xl border-2 border-blue-200 focus:border-blue-500 transition-all duration-300"
                        />
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-600 font-semibold">₹</span>
                      </div>
                      <Slider
                        value={[loanAmount]}
                        onValueChange={(value) => setLoanAmount(value[0])}
                        max={10000000}
                        min={100000}
                        step={50000}
                        className="w-full"
                      />
                      <div className="flex justify-between text-sm text-gray-500">
                        <span>₹1L</span>
                        <span>₹1Cr</span>
                      </div>
                    </div>
                  </div>

                  {/* Interest Rate */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg transform hover:rotate-12 transition-transform duration-300">
                        <Percent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <label className="text-lg font-semibold text-gray-800">Interest Rate</label>
                        <p className="text-sm text-gray-600">Annual interest rate</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="relative">
                        <Input
                          type="number"
                          value={interestRate}
                          onChange={(e) => setInterestRate(Number(e.target.value))}
                          step="0.1"
                          className="text-lg font-semibold pr-8 h-14 rounded-2xl border-2 border-blue-200 focus:border-blue-500 transition-all duration-300"
                        />
                        <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-600 font-semibold">%</span>
                      </div>
                      <Slider
                        value={[interestRate]}
                        onValueChange={(value) => setInterestRate(value[0])}
                        max={20}
                        min={1}
                        step={0.1}
                        className="w-full"
                      />
                      <div className="flex justify-between text-sm text-gray-500">
                        <span>1%</span>
                        <span>20%</span>
                      </div>
                    </div>
                  </div>

                  {/* Loan Tenure */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg transform hover:rotate-12 transition-transform duration-300">
                        <Calendar className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <label className="text-lg font-semibold text-gray-800">Loan Tenure</label>
                        <p className="text-sm text-gray-600">Loan duration in years</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="relative">
                        <Input
                          type="number"
                          value={loanTenure}
                          onChange={(e) => setLoanTenure(Number(e.target.value))}
                          className="text-lg font-semibold pr-16 h-14 rounded-2xl border-2 border-blue-200 focus:border-blue-500 transition-all duration-300"
                        />
                        <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-600 font-semibold">Years</span>
                      </div>
                      <Slider
                        value={[loanTenure]}
                        onValueChange={(value) => setLoanTenure(value[0])}
                        max={30}
                        min={1}
                        step={1}
                        className="w-full"
                      />
                      <div className="flex justify-between text-sm text-gray-500">
                        <span>1 Year</span>
                        <span>30 Years</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Results Section */}
            <div className="space-y-8 animate-slide-in-right">
              <div className="bg-white/90 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl border border-blue-200/50 transform hover:scale-105 transition-all duration-500 hover:shadow-blue-200/50">
                <div className="text-center mb-8">
                  <div className="relative inline-block">
                    <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-sky-500/20 rounded-2xl blur-lg animate-pulse"></div>
                    <div className="relative bg-gradient-to-r from-blue-600 to-sky-600 rounded-2xl p-4">
                      <TrendingUp className="w-8 h-8 text-white mx-auto" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mt-4">Your EMI Results</h3>
                </div>

                <div className="space-y-6">
                  {/* Monthly EMI */}
                  <div className="bg-gradient-to-r from-blue-50 to-sky-50 rounded-2xl p-6 border border-blue-200/50 transform hover:scale-105 transition-all duration-300">
                    <div className="text-center">
                      <p className="text-sm text-gray-600 mb-2">Monthly EMI</p>
                      <p className="text-4xl font-black bg-gradient-to-r from-blue-600 to-sky-600 bg-clip-text text-transparent">
                        ₹{emi.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                      </p>
                    </div>
                  </div>

                  {/* Total Amount */}
                  <div className="bg-gradient-to-r from-sky-50 to-cyan-50 rounded-2xl p-6 border border-blue-200/50 transform hover:scale-105 transition-all duration-300">
                    <div className="text-center">
                      <p className="text-sm text-gray-600 mb-2">Total Amount Payable</p>
                      <p className="text-2xl font-bold text-gray-800">
                        ₹{totalAmount.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                      </p>
                    </div>
                  </div>

                  {/* Total Interest */}
                  <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-6 border border-blue-200/50 transform hover:scale-105 transition-all duration-300">
                    <div className="text-center">
                      <p className="text-sm text-gray-600 mb-2">Total Interest</p>
                      <p className="text-2xl font-bold text-gray-800">
                        ₹{totalInterest.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                      </p>
                    </div>
                  </div>

                  {/* Breakdown */}
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-200/50">
                    <h4 className="font-semibold text-gray-800 mb-4 text-center">Payment Breakdown</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Principal Amount:</span>
                        <span className="font-semibold text-blue-600">
                          {((loanAmount / totalAmount) * 100).toFixed(1)}%
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Interest Amount:</span>
                        <span className="font-semibold text-sky-600">
                          {((totalInterest / totalAmount) * 100).toFixed(1)}%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Tips */}
              <div className="bg-white/90 backdrop-blur-2xl rounded-3xl p-6 shadow-2xl border border-blue-200/50 transform hover:scale-105 transition-all duration-500">
                <h4 className="font-bold text-gray-800 mb-4 text-center">💡 Quick Tips</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Lower interest rates significantly reduce your EMI</li>
                  <li>• Shorter tenure saves on total interest paid</li>
                  <li>• Consider making prepayments to reduce total cost</li>
                  <li>• Compare rates from different lenders</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EMICalculator;
