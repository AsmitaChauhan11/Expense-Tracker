"use client"
import { UserButton, useUser } from '@clerk/nextjs'
import React, { useEffect, useState } from 'react'
import CardInfo from './_components/CardInfo';
import { desc, eq, getTableColumns, sql } from 'drizzle-orm';
import { db } from '@/utils/dbConfig';
import { Budget, Expenses } from '@/utils/schema';
import BarChartDashboard from './_components/BarChartDashboard';
import BudgetItem from './budget/_components/BudgetItem';
import ExpenseListTable from './expenses/_components/ExpenseListTable';

function Dashboard() {
  const {user}=useUser();
  const [budgetList, setBudgetList] = useState([]);
  const [expensesList, setExpensesList] = useState([]);
    useEffect(()=>{
      user&&getBudgetList();
    },[user]);
  
    const getBudgetList = async () => {
  
      const result=await db.select({
        ...getTableColumns(Budget),
        totalSpend: sql `sum(${Expenses.amount})`.mapWith(Number),
        totalItem: sql `count(${Expenses.id})`.mapWith(Number)
      }).from(Budget)
      .leftJoin(Expenses,eq(Budget.id, Expenses.budgetId))
      .where(eq(Budget.createdBy, user?.primaryEmailAddress?.emailAddress))
      .groupBy(Budget.id)
      .orderBy(desc(Budget.id));
  
      setBudgetList(result);
      getAllExpenses();
    }

    const getAllExpenses=async()=>{
      const result=await db.select({
        id:Expenses.id,
        name:Expenses.name,
        amount:Expenses.amount,
        createdAt:Expenses.createdAt
      }).from(Budget)
      .rightJoin(Expenses,eq(Budget.id,Expenses.budgetId))
      .where(eq(Budget.createdBy,user?.primaryEmailAddress.emailAddress))
      .orderBy(desc(Expenses.id))
      setExpensesList(result);

      console.log(result);
    }

  return (
    <div className='p-8'>
      <h2 className='font-bold text-3xl'>Hi, {user?.fullName} 🥳</h2>
      <p className='text-gray-500'>Here's what happening with your money, Lets Manage your expenses</p>
      <CardInfo budgetList={budgetList}/>
      <div className='grid grid-cols-1 md:grid-cols-3 mt-6 gap-5'>
        <div className='md:col-span-2'>
          <BarChartDashboard
          budgetList={budgetList}
          />

          <ExpenseListTable
          expensesList={expensesList}
          refreshData={()=>getBudgetList}
          />

        </div>
        <div className='grid gap-5'>
          {budgetList.map((budget,index)=>(
            <BudgetItem budget={budget} key={index}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dashboard