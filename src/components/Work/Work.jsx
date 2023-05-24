import React from 'react'
import "./Work.css"

const Work = () => {
    return (
        <div className="Work">
            <div className="Howdoes">How does it work ?</div>
            <div className="data1">
                <span className='Ellipse1'><span className='Groups'></span></span>
                <span className='Content'>
                    <p className='Invite'>Invite your Friends</p>
                    <p className='Share'>Share the link tutedude.com with your friends</p>
                </span>
            </div>
            <div className="data2">
                <span className='Ellipse2'><span className='₹'></span></span>
                <span className='Content'>
                    <p className='money'>You get ₹ 200 as referral money</p>
                    <p className='purchase'>On total purchase the friend makes, into your wallet</p>
                </span>
            </div>
            <div className="data3">
                <span className='Ellipse3'><span className='Accountbalancewallet'></span></span>
                <span className='Content'>
                    <p className='Transfer'>Transfer money from wallet</p>
                    <p className='reaches'>When the wallet balance reaches ₹200 or more, you can withdraw it</p>
                </span>
            </div>
            <div className="data4">
                <span className='Ellipse4'><span className='Localoffer'></span></span>
                <span className='Content'>
                    <p className='course'>Friend purchases any course</p>
                    <p className='payments'>Using your REFERRAL CODE in the payments page</p>
                </span>
            </div>
            <div className="data5">
                <span className='Ellipse5'><span className='bxs_offer'></span></span>
                <span className='Content'>
                    <p className='gets'>Your Friend gets ₹ 200 Off</p>
                    <p className='successful'>On his overall fee on successful purchase using your referral code</p>
                </span>
            </div>
        </div>
    )
}

export default Work