import React from 'react'
import ChartedAccountantShimmer from '../Shimmer/ChartedAccountantShimmer'

const ChartedAccountantDetails = ({ data, loading }) => {

    if (data == null) {
        return <ChartedAccountantShimmer/>
    }
    const { name, image, intro, rating, reviewCount, about, price, taskComplexity, testimonial, deliveryTime } = data
    const { text, author } = testimonial
    const {from,partnerSince,averageResponseTime,description,services,benefits} = about


    return (
        <div className='md:w-3/5 w-full'>
            <div>
                <img src={image} alt="detailImg" />
            </div>
            <div>
                <h1 className='text-3xl font-bold py-8'>About Michael Jackson</h1>
                <div className='flex gap-4 justify-between pb-10'>
                    <div>
                        <p className='text-gray-400 text-base font-bold pb-4 md:h-auto h-16 '>FROM</p>
                        <p className='text-xl'>{from}</p>
                    </div>
                    <div>
                        <p className='text-gray-400 text-base font-bold pb-4 md:h-auto h-16'>PARTNER SINCE</p>
                        <p className='text-xl'>{partnerSince}</p>
                    </div>
                    <div>
                        <p className='text-gray-400 text-base font-bold pb-4 md:h-auto h-16'>AVERAGE RESPONSE TIME</p>
                        <p className='text-xl'>{averageResponseTime}</p>
                    </div>
                </div>
                <div>
                    <p className='text-gray-400 text-base font-bold pb-4'>ABOUT</p>
                    <p className='text-xl'>{description}</p>
                </div>
            </div>

            <div className='flex gap-4 justify-between py-10'>
                <div>
                    <p className='text-gray-400 text-base font-bold pb-4 '>SERVICES OFFERS</p>
                    <ul className='list-disc md:px-10 px-2 text-xl'>
                        {services.map(service =>(
                            <li key={service}>{service}</li>
                        ))}
                      
                    </ul>
                </div>
                <div >
                    <p className='text-gray-400 text-base font-bold pb-4 '>WHY ME?</p>
                    <ul className='list-disc md:px-10 px-2 text-xl'>
                    {benefits.map(benifit =>(
                            <li key={benifit}>{benifit}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ChartedAccountantDetails