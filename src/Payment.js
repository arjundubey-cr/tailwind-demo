import React from 'react'
import mastercardLogo from './static/master_card.jpg'

const paymentCards = [
    {
        cardName: 'Credit Card',
        cardNumber: '2344 xxxx xxxx 8880',
    },
    {
        cardName: 'Credit Card',
        cardNumber: '8890 xxxx xxxx 1234',
    }
]

const Payment = () => {
    return (
        <div className='bg-white m-auto p-8 rounded-lg w-1/3 grid gap-5 justify-items-stretch'>
            {/* Upgrade Plan info */}
            <div className='grid gap-2'>
                <div className="font-bold text-xl">Upgrade your plan</div>
                <div className='text-gray-500'>Please make the payment to start enjoying all the features of our premium plan as soon as possible</div>
            </div>
            {/* Active Plan Details */}
            <div className='border-solid border-2 border-blue-600 bg-blue-100 grid grid-cols-2 px-2 py-4 items-center'>
                <div className='justify-self-start grid grid-cols-1 lg:grid-cols-3 Small Business'>
                    <img src={mastercardLogo} className="h-12 w-12 rounded-lg" alt='card logo'></img>
                    <div className='col-span-2 pl-1 font-medium'>
                        <span className=''>Small Business</span>
                        <br />
                        <span className='text-blue-500 uppercase text-xs'>Change Plan</span>
                    </div>
                </div>

                <div className='text-right text-sm text-gray-500 relative'>
                    <span>$</span> <span className='text-3xl text-black'>8350</span>/ year
                </div>
            </div>

            {/* Payment Details */}
            <div className='mt-2'>
                <div className='font-bold'>Payment Details</div>
                {paymentCards.map(ele => {
                    return (
                        <div className='grid grid-cols-1 lg:grid-cols-3 py-2 items-center justify-items-stretch items-center'>
                            <div className='justify-self-start grid grid-cols-3 col-span-2 items-center'>
                                <img width="50px" height="50px" src={mastercardLogo} alt='card logo'></img>
                                <div className='col-span-2'>
                                    <span className='font-medium'>{ele.cardName}</span>
                                    <br />
                                    <span className='text-gray-500'>{ele.cardNumber}</span>
                                </div>
                            </div>
                            <div className='justify-self-end w-full lg:w-2/5'>
                                <input className='border-2 block w-full border border-slate-300 py-2 pr-3 pl-3 rounded-md placeholder:text-slate-400' placeholder='CVC'/>
                            </div>

                        </div>
                    )
                })}
                <span className='uppercase text-sm text-blue-400'>
                    Add Payment Method
                </span>
            </div>
            
            {/* Email address Input */}
            <div className='mt-2 mb-3'>
                <input className='border-2 block w-full border border-slate-300 py-2 pr-3 pl-3 rounded-md placeholder:text-slate-400' placeholder='Email address' />
            </div>

            {/* Proceed to payment button */}
            <div className='grid grid-12 items-center'>
                <button className='bg-blue-700 text-white p-5 font-bold text-lg'>Proceed to payment </button>
            </div>
        </div>
    )
}

export default Payment