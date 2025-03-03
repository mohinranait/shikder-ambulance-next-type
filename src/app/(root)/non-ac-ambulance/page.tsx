import { Button } from '@nextui-org/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


export const metadata = {
    title: "Best NON-AC Ambulance Service in Dhaka | 24/7 Support",
    description: "We provide 24/7 emergency ambulance service in Dhaka. Contact us for quick medical transportation.",
    keywords: ["ambulance service", "emergency ambulance", "Dhaka ambulance"],
    openGraph: {
        title: "Best Ambulance Service in Dhaka | 24/7 Support",
        description: "We provide 24/7 emergency ambulance service in Dhaka.",
        url: "https://yourwebsite.com",
        siteName: "Your Ambulance Service",
        images: [
            {
                url: "https://yourwebsite.com/your-image.jpg",
                width: 1200,
                height: 630,
                alt: "Ambulance Service Banner",
            },
        ],
        type: "website",
    },
};


const NonAcAmbulance = () => {
    return (
        <>
            <section
                className=" mb-6 bg-[#dfdffff7] bg-right-bottom overflow-hidden relative "
            >
                <span className="flex w-[300px] bg-primary-mute h-[200px] top-1/2 left-1/2 bg-opacity-10 -translate-y-1/2 -translate-x-1/2 backdrop-blur-2xl absolute"></span>
                <span className="flex w-[300px] bg-secondary h-[200px] top-1/2 left-1/2 mt-8 bg-opacity-10 rounded-full -translate-y-1/2 translate-x-1/2 backdrop-blur-2xl absolute"></span>
                <div className=" bg-opacity-50 backdrop-blur-[100px]">
                    <div className="container py-10 xl:min-h-[500px] 2xl:min-h-[600px] flex items-center justify-center">
                        <div className="">
                            <h1 className="text-3xl mb-3 sm:leading-[80px] sm:text-4xl dark:text-white md:text-6xl text-black font-semibold text-center">
                                Non-Ac Ambulance service in Bangladesh
                                <br />
                                <span className=" font-bold bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
                                    The Best Reliable 24/7
                                </span>{" "}

                            </h1>
                            <p className="text-base text-black text-center dark:text-white">
                                Non-Ac Ambulance service in Dhaka, Bangladesh. We provide different types of Ambulance service in all districts of Bangladesh. We Are Just A Call Away.
                            </p>
                            <div className="flex items-center justify-center gap-4 mt-4">
                                <Button size="lg" className="bg-secondary text-white">
                                    <Link href={'tel:01710060020'}>
                                        Contact Us Now
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='mb-4 pt-8'>
                <div className='container mb-4'>
                    <h2 className='text-center text-2xl md:text-4xl font-bold '> Emergency Non-Ac Ambulance service in Dhaka</h2>
                    <div className="grid md:grid-cols-2 gap-2 mt-5">
                        <div>
                            <h3 className=' text-2xl font-semibold mb-3'>Non-Ac Ambulance service</h3>
                            <p className='mb-2 text-sm'>Non-Ac ambulance service is for those who cannot afford the cost of an Ac ambulance. Though it does not cost you as Ac ambulance service, it serves you with everything except the facility of AC. Like Ac ambulance service, you will get all the important equipment such as wheelchairs, stretchers, oxygen cylinders etc. Also, our team members are highly trained. You can rely on us for any type of ambulance service.Our-Ac ambulance is 24/7 open for you. Call at our emergency number, we will be there for you.</p>

                            <p className='text-sm'>The Non-Ac ambulance service is simple and Normal. This rent is low of others ambulance, so it is very comfortable for all people. Non-Ac ambulance mainly provide for people and who wants to rent it. 24 hours ambulance available in Dhaka. You will be satisfied with all our arrangements. Our ambulances are full-furnished with all the necessary equipment such as stretchers, wheelchair, oxygen cylinders etc. Our ambulances are clean bed for the patients and comfortable seats for their companions. We ensure our valuable customers, all sort of hospital medical care.</p>

                            <p className='text-sm'>The ambulance service 24/7 Hours available in Dhaka city with all Zila sadar. We provide different types ambulance all districts of Bangladesh. We are always ready to provide emergency ambulance service for any patients.</p>
                        </div>
                        <div>
                            <Image src={"/images/ambulnace.jpg"} width={500} height={400} alt='Ac Ambulance Service' />
                        </div>
                    </div>
                </div>
                <div className="container mb-4">
                    <h3 className=' text-2xl font-semibold mb-3 '> Emergency Non-Ac Ambulance service in Bangladesh</h3>
                    <p>Emergency Ac Ambulance service is available in Dhaka City. This ambulance company provide Emergency ambulance service 24 hours in a day, 7 Days a week, and 365 days a year. The Emergency ambulance in cheap rent of ambulance services. We provide always a Standard ambulance with the proper requirements. Contact us to Get an Emergency ambulance service anywhere in Bangladesh. Fast ambulance service provider Company in Dhaka City. If you need an emergency ambulance than contact us.</p>
                </div>

                <div className="container grid sm:grid-cols-2 gap-3">
                    <div>
                        <h3 className='text-xl font-semibold '>Find Non-Ac Ambulance</h3>
                        <p className='text-sm'>
                            Emergency Ac Ambulance service is available in Dhaka City. This ambulance company provide Emergency ambulance service 24 hours in a day, 7 Days a week, and 365 days a year. The Emergency ambulance in cheap rent of ambulance services. We provide always a Standard ambulance with the proper requirements. Contact us to Get an Emergency ambulance service anywhere in Bangladesh. Fast ambulance service provider Company in Dhaka City. If you need an emergency ambulance than contact us.
                        </p>
                        <p className='text-sm'>
                            Online Ambulance service, Non-Ac Ambulance service, Ac Ambulance service. The best Ambulance servicein Bangladesh. Normal Ambulance service, Dhaka Ambulance service. Quality Ambulance service, Dhaka city Ambulance service.
                        </p>
                    </div>
                    <div>
                        <h3 className='text-xl font-semibold '>Find Ambulance Near Area you</h3>
                        <p className='text-sm'>
                            The Non-Ac Ambulance Online booking is available in Dhaka city. We provide emergency ambulance service to carry the patient a place to another. If you need any types of Ambulance service than contact us.
                        </p>
                        <p className='text-sm'>
                            Ambulance service in dhaka, air ambulance in dhaka, air ambulance bangladesh, sylhet ambulance service, best ambulance service, ambulance service bd, ambulance service in uttara dhaka, Ambulance service near me, ambulance service in mohammadpur, ambulance service in narayanganj, air ambulance, air ambulance service, 24 ambulance service, ambulances latest ambulance service, fast ambulance service in Dhaka
                        </p>
                    </div>
                </div>


            </section>

            <section className='mb-5'>
                <div className="container">
                    <h3 className='text-xl font-semibold mb-2'>Ovrview of Ac ambulance</h3>
                    <ul className='space-y-2'>
                        <li>
                            <p> <span className='font-semibold '>Available 24/7: </span> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima illo dolorem provident ut deleniti mollitia consectetur, quae voluptas sed fugiat.</p>
                        </li>
                        <li>
                            <p> <span className='font-semibold '>Available 24/7: </span> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima illo dolorem provident ut deleniti mollitia consectetur, quae voluptas sed fugiat.</p>
                        </li>
                        <li>
                            <p> <span className='font-semibold '>Available 24/7: </span> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima illo dolorem provident ut deleniti mollitia consectetur, quae voluptas sed fugiat.</p>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default NonAcAmbulance