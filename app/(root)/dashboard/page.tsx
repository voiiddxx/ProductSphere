import DashboardHome from '@/components/shared/DashboardHome'
import DashBoardNav from '@/components/shared/DashBoardNav'
import DashboardSidebar from '@/components/shared/DashboardSidebar'
import { currentUser } from '@clerk/nextjs'
import { Plus } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Gem, LayoutGrid, Rabbit, Sun, SunDim, User } from 'lucide-react'
import DashboardLogic from '@/components/shared/DashboardLogic'

const page = () => {

  return (
    <DashboardLogic/>
  )
}

export default page
