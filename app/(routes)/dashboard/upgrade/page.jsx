import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
  
function page() {
  return (
    <div className='p-10'>
        <h2 className='font-bold text-3xl'>Upgrade Your Plan</h2>
        <Carousel className='p-10'>
            <CarouselContent>
                <CarouselItem className='justify-center'>
                    <Card className='p-5 text-center border-2 border-red-400'>
                        <CardHeader>
                            <CardTitle className='text-6xl font-bold text-red-500'>Free Plan</CardTitle>
                            <CardContent>
                                <p className='text-2xl font-bold'>$0 <span className='text-base'>USD / month</span></p>
                                <p className='text-gray-600 mt-2'>For individuals who need simple expense tracking</p>
                                <button className='mt-4 px-4 py-2 bg-red-100 text-red-500 font-semibold rounded'>Current Plan</button>
                                <ul className="text-gray-600 mt-5 flex flex-col items-center text-left w-fit mx-auto">
                                    <li className='w-full'>✅  Track up to 10 transactions per month</li>
                                    <li className='w-full'>✅  Light task management</li>
                                    <li className='w-full'>✅  Single-device access</li>
                                    <li className='w-full'>✅  Manual expense entry</li>
                                </ul>
                                <button className='mt-6 px-4 py-2 w-80 bg-red-500 text-white font-semibold rounded hover:bg-red-400'>Buy Now</button>
                            </CardContent>
                        </CardHeader>
                    </Card>
                </CarouselItem>
                <CarouselItem className='justify-center'>
                    <Card className='p-5 text-center border-2 border-yellow-400'>
                        <CardHeader>
                            <CardTitle className='text-6xl font-bold text-yellow-500'>Standard Plan</CardTitle>
                            <CardContent>
                                <p className='text-2xl font-bold'>$5 <span className='text-base'>USD / month</span></p>
                                <p className='text-gray-600 mt-2'>For users who need more insights and flexibility</p>
                                <button className='mt-4 px-4 py-2 bg-yellow-100 text-yellow-500 font-semibold rounded'>Choose Plan</button>
                                <ul className="text-gray-600 mt-5 flex flex-col items-center text-left w-fit mx-auto">
                                    <li className='w-full'>✅  Unlimited spaces</li>
                                    <li className='w-full'>✅  Multi-device sync (Web & Mobile)</li>
                                    <li className='w-full'>✅  Slack and Webex integration</li>
                                    <li className='w-full'>✅  Export reports (CSV, PDF)</li>
                                </ul>
                                <button className='mt-6 px-4 py-2 w-80 bg-yellow-500 text-white font-semibold rounded hover:bg-yellow-300'>Buy Now</button>
                            </CardContent>
                        </CardHeader>
                    </Card>
                </CarouselItem>
                <CarouselItem className='justify-center'>
                    <Card className='p-5 text-center border-2 border-green-400'>
                        <CardHeader>
                            <CardTitle className='text-6xl font-bold text-green-500'>Premium Plan</CardTitle>
                            <CardContent>
                                <p className='text-2xl font-bold'>$15 <span className='text-base'>USD / month</span></p>
                                <p className='text-gray-600 mt-2'>For power users who want complete control over their finances</p>
                                <button className='mt-4 px-4 py-2 bg-green-100 text-green-500 font-semibold rounded'>Choose Plan</button>
                                <ul className="text-gray-600 mt-5 flex flex-col items-center text-left w-fit mx-auto">
                                    <li className='w-full'>✅  Everything in Standard +</li>
                                    <li className='w-full'>✅  AI-powered budgeting suggestions</li>
                                    <li className='w-full'>✅  Bill reminders & recurring expenses</li>
                                    <li className='w-full'>✅  Bank account integration for auto-tracking</li>
                                </ul>
                                <button className='mt-6 px-4 py-2 w-80 bg-green-500 text-white font-semibold rounded hover:bg-green-300'>Buy Now</button>
                            </CardContent>
                        </CardHeader>
                    </Card>
                </CarouselItem>
                <CarouselItem className='justify-center'>
                    <Card className='p-5 text-center border-2 border-blue-400'>
                        <CardHeader>
                            <CardTitle className='text-6xl font-bold text-blue-500'>Family Plan</CardTitle>
                            <CardContent>
                                <p className='text-2xl font-bold'>$35 <span className='text-base'>USD / month</span></p>
                                <p className='text-gray-600 mt-2'>For families who want to track expenses collectively</p>
                                <button className='mt-4 px-4 py-2 bg-blue-100 text-blue-500 font-semibold rounded'>Choose Plan</button>
                                <ul className="text-gray-600 mt-5 flex flex-col items-center text-left w-fit mx-auto">
                                    <li className='w-full'>✅  Everything in Premium +</li>
                                    <li className='w-full'>✅  Up to 4 family members can share an account</li>
                                    <li className='w-full'>✅  Shared budgets & goals</li>
                                    <li className='w-full'>✅  Expense categorization for each member</li>
                                </ul>
                                <button className='mt-6 px-4 py-2 w-80 bg-blue-500 text-white font-semibold rounded hover:bg-blue-300'>Buy Now</button>
                            </CardContent>
                        </CardHeader>
                    </Card>
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
         </Carousel>
    </div>
  )
}

export default page