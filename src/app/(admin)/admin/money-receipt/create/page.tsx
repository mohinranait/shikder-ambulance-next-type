'use client';
import InputElement from "@/components/elements/InputElement"
import { Button } from "@nextui-org/button";
import Image from "next/image";
import { FormEvent, useState } from "react"
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const MoneyReceiptPage = () => {
    const [form, setForm] = useState({
        uid: '',
        patientName: '',
        careOfName: '',
        phone: '',
        totalPrice: '',
        amountInWord: '',
        address: '',
        destination: '',
        carType: '',
        carNo: '',
        paymentMethod: '', // Bkash, Nagad, Bank
        serviceType: '' // Patient, Dead body
    })

    // handle submit form
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        console.log({ form });
        generatePDF()

    }

    // Function to generate PDF
    const generatePDF = async () => {
        const receiptElement = document.getElementById("money_receip");
        if (!receiptElement) return;

        const canvas = await html2canvas(receiptElement, { scale: 2 });
        const imgData = canvas.toDataURL("image/png");

        const pdf = new jsPDF("p", "mm", "a4");
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
        pdf.save("money_receipt.pdf");
    };

    return <div>
        <div className="mb-3">
            <p className="text-3xl font-semibold text-slate-800 text-center">Money Receipt </p>
        </div>
        <form onSubmit={handleSubmit} className="max-w-[850px] mx-auto mb-10">
            <div className="space-y-6">
                <div className=" ">
                    <InputElement
                        label="Patient Name"
                        name="patientName"
                        type="text"
                        placeholder="Patient Name"
                        className="border-slate-200 !border focus-visible:border-1 focus-visible:border-primary"
                        value={form?.patientName}
                        onChange={(e) =>
                            setForm((prev) => ({
                                ...prev,
                                patientName: e,
                            }))
                        }
                    />


                </div>
                <div className="grid grid-cols-2 gap-5">

                    <InputElement
                        name="careOfName"
                        label="Care of Name (C/o)"
                        type="text"
                        placeholder="Care of Name (C/o)"
                        className="border-slate-200 !border focus-visible:border-1 focus-visible:border-primary"
                        value={form?.careOfName}
                        onChange={(e) =>
                            setForm((prev) => ({
                                ...prev,
                                careOfName: e,
                            }))
                        }
                    />
                    <InputElement
                        label="Phone"
                        name="phone"
                        type="number"
                        placeholder="Phone"
                        className="border-slate-200 !border focus-visible:border-1 focus-visible:border-primary"
                        value={form?.phone}
                        onChange={(e) =>
                            setForm((prev) => ({
                                ...prev,
                                phone: e,
                            }))
                        }
                    />
                </div>


                <div className="grid grid-cols-2 gap-5">
                    <div>
                        <label htmlFor="" className="  mb-1">Car type</label>
                        <select name="" id="" className="w-full py-[14px] rounded border border-slate-300 focus-visible:border-primary focus-visible:outline-none focus:outline-none px-2">
                            <option value="Ac Ambulance"> Ac Ambulance </option>
                            <option value="Non-Ac Ambulance"> Non-Ac Ambulance </option>
                            <option value="Freezing Ambulance"> Freezing Ambulance </option>
                            <option value="Life Support Ambulance"> Life Support Ambulance </option>
                        </select>
                    </div>
                    <InputElement
                        name="carNo"
                        label="Car No"
                        type="text"
                        placeholder="Car No"
                        className="border-slate-200 !border focus-visible:border-1 focus-visible:border-primary"
                        value={form?.carNo}
                        onChange={(e) =>
                            setForm((prev) => ({
                                ...prev,
                                carNo: e,
                            }))
                        }
                    />
                </div>
                <div className="">

                    <InputElement
                        label="Address"
                        name="address"
                        type="text"
                        placeholder="Address"
                        className="border-slate-200 !border focus-visible:border-1 focus-visible:border-primary"
                        value={form?.address}
                        onChange={(e) =>
                            setForm((prev) => ({
                                ...prev,
                                address: e,
                            }))
                        }
                    />

                </div>
                <div className="">

                    <InputElement
                        name="destination"
                        type="text"
                        label="Destination"
                        placeholder="Destination"
                        className="border-slate-200 !border focus-visible:border-1 focus-visible:border-primary"
                        value={form?.destination}
                        onChange={(e) =>
                            setForm((prev) => ({
                                ...prev,
                                destination: e,
                            }))
                        }
                    />
                </div>
                <div className=" grid grid-cols-2 gap-5  ">
                    <InputElement
                        label="Rent"
                        name="totalPrice"
                        type="number"
                        placeholder="Rent"
                        className="border-slate-200 !border focus-visible:border-1 focus-visible:border-primary"
                        value={form?.totalPrice}
                        onChange={(e) =>
                            setForm((prev) => ({
                                ...prev,
                                totalPrice: e,
                            }))
                        }
                    />
                    <InputElement
                        label="Amount in word"
                        name="amountInWord"
                        type="text"
                        placeholder="Amount in word"
                        className="border-slate-200 !border focus-visible:border-1 focus-visible:border-primary"
                        value={form?.amountInWord}
                        onChange={(e) =>
                            setForm((prev) => ({
                                ...prev,
                                amountInWord: e,
                            }))
                        }
                    />
                </div>
                <div>
                    <Button type="submit" className="bg-primary text-white rounded px-6">Submit</Button>
                </div>
            </div>
        </form>

        {/* Receipt preview */}
        <div>
            <div id="money_receip" className="max-w-[850px] relative pt-[80px]  mx-auto">
                <div className="w-full h-full flex items-center justify-center absolute top-0 left-0 bottom-0 right-0 z-[0]">
                    <Image src={'/logo.jpg'} className="w-[300px] h-[300px] mx-auto opacity-[0.1]" width={200} height={200} alt="logo" />
                </div>
                <div className=" z-[2]  p-10">
                    <div className="">
                        <p className="uppercase text-4xl font-bold text-center mb-2 text-primary">Shikder Ambulance Service</p>
                        <p className=" text-lg  text-center font-semibold">Address: Eskaton Road, Mogbazar, Dhaka-1217</p>
                        <p className=" text-lg  text-center font-semibold">Helpline: 01710060020, 01911148584</p>
                        <p className=" text-lg  text-center font-semibold">www.shikderambulance.com</p>

                        <div className="flex mt-3 items-center justify-center">
                            <p className=" px-6 bg-blue-200 leading-[50px] w-[280px] h-[60px] flex items-center justify-center  border font-bold text-slate-900 text-2xl ">Money  Receipt</p>
                        </div>

                        <div className="flex justify-between items-center">
                            <p><span className="font-semibold ">SL.No</span> 11 </p>
                            <p className="mr-10"><span className="font-semibold ">Date:</span> Jun 10, 123 </p>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <div>
                            <p><span className="font-semibold">Name: </span> Shek Hasina </p>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            <p><span className="font-semibold">C/o:</span> Md. Rakibul Islam </p>
                            <p><span className="font-semibold">Phone:</span> 017246787878 </p>
                        </div>
                        <div>
                            <p><span className="font-semibold">Address:</span> 240/2, Ambagan Mogbazar Road, Dhaka-1217 </p>
                        </div>
                        <div>
                            <p><span className="font-semibold">Destination:</span> Dhaka to Kalkata, India </p>
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                            <p><span className="font-semibold">Ambulance Type:</span> Ac Ambulance </p>
                            <p><span className="font-semibold">Ambulance No:</span> Dhaka Metro Cho-750 426 </p>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            <p><span className="font-semibold">Rental Price:</span> 10,000 (Waitiong: 4 Hours)</p>
                            <p><span className="font-semibold">Total Amount In Word:</span> Ten Thousand Taka </p>
                        </div>
                    </div>

                    <div className="mt-16  grid grid-cols-2 justify-between ">
                        <div className="pl-10">
                            <p className="text-base font-semibold">Received By</p>
                        </div>
                        <div className="flex justify-center">
                            <p className="text-base font-semibold">Authorized Signature</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}


export default MoneyReceiptPage