import React from 'react'
import ContactUsForm from '../forms/ContactUsForm'

const ContactForm = () => {
    return (
        <section className="py-[100px] bg-white">
            <div className="container mx-auto max-w-[1200px]">
                <h2 className='text-4xl text-center font-bold mb-3'> How to Contact Us </h2>
                <div className="grid grid-cols-1 items-center gap-8 sm:gap-5 lg:grid-cols-2 lg:gap-10">
                    <div>
                        {/* <GoogleMapComponent /> */}
                        <h2 className="text-slate-900  text-2xl font-semibold mb-4">Google Map Location</h2>
                        <div>

                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14608.112294974906!2d90.395509727876!3d23.746378278268665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6cafeffc7145ade5%3A0x6f6919835e6914af!2sShikder%20Ambulance%20service%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1741597163128!5m2!1sen!2sbd" width="560" height="450" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                    <div>
                        <div className="form-wrapper">
                            <h2 className="text-slate-900 mb-2 text-2xl font-semibold">
                                Get Touch{" "}
                            </h2>
                            <p className="text-slate-700 text-base font-medium mb-8 md:pr-16 ">
                                Request a call back to get an Ambulnace
                            </p>
                            <ContactUsForm />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactForm