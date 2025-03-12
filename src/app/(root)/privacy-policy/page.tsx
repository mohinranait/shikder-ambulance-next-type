import { ambulanceTypes } from '@/const-data/statick'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const PrivacyPolicy = () => {
    return (
        <>
            <section className="bg-primary">
                <div className="container py-16 ">
                    <h1 className="text-white mb-2 text-4xl font-semibold text-center">
                        Privacy Policy of Shikder Ambulance Service
                    </h1>
                    <p className="text-center text-slate-300">
                        Privacy Policy of Shikder Ambulance Company. We provide different types of Ambulance with Trusted. You can Ambulance booking with 100% Trust.
                    </p>
                    <ul className="flex items-center gap-2 pt-2 justify-center">
                        <li>
                            <Link href="/" className="font-medium text-base text-slate-200">
                                Home
                            </Link>
                        </li>
                        <li className="font-medium text-base text-slate-200">/</li>
                        <li className="font-medium text-base text-slate-200">Privacy Policy</li>
                    </ul>
                </div>
            </section>


            <section className="py-10">
                <div className="container">
                    <h2 className="text-center text-4xl font-bold mb-3"> Privacy Policy </h2>
                    <p className="text-center "> 100% Secure & Trusted Ambulance company </p>
                    <div className=" space-y-3 pt-5">
                        <div>
                            <h3 className="text-base font-bold">The privacy policy Online Ambulance</h3>
                            <p>
                                The privacy Policy is strong of online ambulance service company is largest and trusted company. When you visit this sites then you will be looked this company ' s Privacy Policy.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-base font-bold">The privacy policy Online Ambulance Company Bangladesh</h3>
                            <p>
                                The privacy Policy is strong of online ambulance service company is largest and trusted company. When you visit this sites then you will be looked this company ' s Privacy Policy.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container ">
                    <h2 className="text-2xl font-bold text-center">
                        Type of your service
                    </h2>
                    <div className="grid md:grid-cols-2 mt-3 lg:grid-cols-3 gap-5">
                        {ambulanceTypes?.map((item, index) => (
                            <div
                                key={index}
                                className="border space-y-3 border-slate-200 rounded p-5"
                            >
                                <div className="w-14 h-14 flex items-center justify-center mx-auto rounded-full bg-primary-mute">
                                    {item.icon}
                                </div>
                                <h3 className="text-base text-center font-normal text-slate-950">
                                    {item?.title}
                                </h3>
                                <p className="mb-4 text-sm text-center text-slate-700">
                                    {item?.content}
                                </p>
                                <div className="flex justify-center">
                                    <Link
                                        href={`${item?.url}`}
                                        className="py-1 inline-block px-2 bg-primary text-white text-xs rounded"
                                    >
                                        Learn more...
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-10">
                <div className="container">
                    <h2 className="text-center text-xl font-bold">
                        About Shikder ambulance
                    </h2>
                    <p className="text-center ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
                        doloribus.
                    </p>
                    <div className=" mt-5">
                        <div>
                            <h3 className="text-base font-bold">About us</h3>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil
                                voluptatum vitae ratione quaerat beatae amet. Nihil voluptatum vitae
                                ratione quaerat beatae amet.
                            </p>
                            <ul className="list-disc mt-2 pl-5">
                                <li>Lorem ipsum dolor sit amet.</li>
                                <li>Lorem ipsum dolor sit amet.</li>
                                <li>Lorem ipsum dolor sit amet.</li>
                                <li>Lorem ipsum dolor sit amet.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PrivacyPolicy