import { ambulanceTypes } from '@/const-data/statick'
import Link from 'next/link'
import React from 'react'

const TypesOfAmbulance = () => {
    return (
        <section>
            <div className="container ">
                <h2 className="text-2xl font-bold text-center">
                    Types of Ambulance Services
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
    )
}

export default TypesOfAmbulance