import RightSidebar from '@/components/RightSidebar'
import HeaderBox from '@/components/ui/HeaderBox'
import TotalBalanceBox from '@/components/ui/TotalBalanceBox'
import { getLoggedInUser } from '@/lib/actions/users.actions'
import React from 'react'

const Home = async () => {
    const loggedIn= await getLoggedInUser()
  return (
    <section className='home'> 
    <div className='home-content'>
      <header className='home-header'>
         <HeaderBox
         type="greeting"
         title="Welcome"
         user={loggedIn?.name || 'Guest'}
         subtext="Access and manage your account and transactions"
          />

          <TotalBalanceBox
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={1250.35}
          />

      </header>

      RECENT TRANSACTIONS
    </div>

    <RightSidebar 
    user={loggedIn}
    transactions={[]}
    banks={[{ currentBalance: 123.50}, {currentBalance: 500.50}]}/>
    </section>
  )
}

export default Home

function asnyc() {
  throw new Error('Function not implemented.')
}
