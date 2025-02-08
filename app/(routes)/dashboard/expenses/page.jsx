"use client"
import React, { useEffect, useState } from 'react'
import ExpenseListTable from './_components/ExpenseListTable';
import { desc, eq, getTableColumns, sql } from 'drizzle-orm';
import { db } from '@/utils/dbConfig';
import { Budget, Expenses } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
function page() {

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
    <div className='p-10'>
      <h2 className='font-bold text-3xl'>My Expenses</h2>
      <ExpenseListTable
          expensesList={expensesList}
          refreshData={()=>getBudgetList}
      />
    </div>
  )
}

export default page