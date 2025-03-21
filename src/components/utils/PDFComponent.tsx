import { TReceipt } from "@/types/receip.type";
import dayjs from "dayjs";
import Image from "next/image";
import React from "react";

type Props = {
  data: TReceipt;
};

const PDFComponent = ({ data: form }: Props) => {
  return (
    <div>
      <div
        id="money_receip"
        className="max-w-[700px] bg-white relative   mx-auto"
        style={{ width: "700px", height: "560px" }}
      >
        <div className="w-full h-full flex items-center justify-center absolute top-0 left-0 bottom-0 right-0 z-[0]">
          <Image
            src={"/logo.jpg"}
            className="w-[300px] h-[300px] z-0 mx-auto opacity-[0.1]"
            width={200}
            height={200}
            alt="logo"
          />
        </div>
        <div className=" z-[2]  relative p-10">
          <div className="">
            <div className="flex justify-between ">
              <div>
                <Image
                  src={"/logo.jpg"}
                  className="w-[120px] h-[120px] z-0 mx-auto "
                  width={200}
                  height={200}
                  alt="logo"
                />
              </div>
              <div>
                <p className="uppercase text-right text-[26px] font-bold  mb-1 text-primary">
                  Shikder Ambulance Service
                </p>
                <p className=" text-base text-right  font-medium">
                  Address: Eskaton Road, Mogbazar, Dhaka-1217
                </p>
                <p className=" text-base text-right   font-medium">
                  Helpline: 01710060020, 01911148584
                </p>
                <p className=" text-base text-right italic  font-medium">
                  www.shikderambulance.com
                </p>
              </div>
            </div>

            <div className="flex  items-center justify-center mt-2">
              <p className="px-6  w-[280px] h-[50px] flex items-center justify-center  font-bold text-slate-900 text-3xl">
                Money Receipt
              </p>
            </div>

            <div className="flex justify-between items-center mb-[10px]">
              <p>
                <span className="font-semibold ">SL.No: </span> {form.uid}
              </p>
              <p className="">
                <span className="font-semibold ">Date: </span>
                {dayjs(form.date).format("DD/MM/YYYY")}
              </p>
            </div>
          </div>

          <div className="space-y-[6px]">
            <div>
              <p>
                <span className="font-semibold">Name: </span>{" "}
                <span className="font-semibold ">{form.patientName}</span>
              </p>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <p>
                <span className="font-semibold">C/o:</span> {form?.careOfName}{" "}
              </p>
              <p>
                <span className="font-semibold">Phone:</span> {form?.phone}{" "}
              </p>
            </div>
            <div>
              <p>
                <span className="font-semibold">Address:</span> {form?.address}
              </p>
            </div>
            <div>
              <p>
                <span className="font-semibold">Destination:</span>{" "}
                {form?.destination}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <p>
                <span className="font-semibold">Ambulance Type:</span>{" "}
                {form?.carType}
              </p>
              <p>
                <span className="font-semibold">Ambulance No:</span>{" "}
                {form?.carNo}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <p>
                <span className="font-semibold">Service:</span>{" "}
                {form?.serviceType}
              </p>
              <p>
                <span className="font-semibold">Payment by:</span>{" "}
                {form?.paymentMethod}
              </p>
            </div>
            <div className="flex  gap-2">
              <p className="min-w-[250px]">
                <span className="font-semibold">Rental Price:</span>{" "}
                {form?.totalPrice}
              </p>
              <p>
                <span className="font-semibold">Amount In Word:</span>{" "}
                {form?.amountInWord}
              </p>
            </div>
          </div>

          <div className="mt-16  grid grid-cols-2 justify-between ">
            <div className="pl-10">
              <p className="text-base font-semibold">Received By</p>
            </div>
            <div className="flex relative justify-center">
              <Image
                src={"/signature.jpg"}
                width={160}
                height={100}
                alt="Signature"
                className=" absolute  right-2/4 transform translate-x-2/4 "
                style={{ bottom: "20px" }}
              />
              <p className="text-base font-semibold">Authorized Signature</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PDFComponent;
