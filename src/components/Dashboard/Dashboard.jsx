import React from 'react'
import "./Dashboard.css"


const Dashboard = () => {
    return (
        <>
            <div className="Dashboard">
                <div className='Frame1'>
                    <span className='Referral'>Referral Earning</span>
                    <span className='Priceframe1'>₹ 2,500</span>
                </div>
                <div className='Frame2'>
                    <span className='Total'>Total Referrals</span>
                    <span className='Priceframe2'>7</span>
                </div>
                <div className='Frame3'>
                    <span className='Wallet'>Wallet Balance</span>
                    <span className='Priceframe3'>₹500</span>
                </div>

                <a href='/' className='Frame4'>
                    <span className='btn'>
                        Withdraw Balance
                    </span>
                </a>
            </div>
            <div className="ReferralCode">
                <span className='YourReferral' >Your Referral Code</span>
                <div className="frem281">
                </div>

            </div>
        </>
    )
}

export default Dashboard