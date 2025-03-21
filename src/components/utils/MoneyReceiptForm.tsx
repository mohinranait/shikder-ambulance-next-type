import InputElement from "../elements/InputElement";
import { Button } from "@nextui-org/button";
import PDFComponent from "./PDFComponent";
import toast from "react-hot-toast";
import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import useAxios from "@/hooks/useAxios";
import dayjs from "dayjs";
import { TReceipt } from "@/types/receip.type";

const generateUID = () => {
  const now = new Date();

  const year = now.getFullYear() % 10; // Last digit of the year
  const month = (now.getMonth() + 1) % 10; // Month (1-12) mod 10
  const date = now.getDate() % 10; // Date mod 10
  const hour = now.getHours() % 10; // Hour mod 10
  const minute = now.getMinutes() % 10; // Minute mod 10
  const second = now.getSeconds() % 10; // Second mod 10

  return `${year}${month}${date}${hour}${minute}${second}`;
};

type TProps = {
  data?: TReceipt;
  close?: () => void;
  setIsSelected?: Dispatch<SetStateAction<TReceipt | null>>;
};

const MoneyReceiptForm = ({ data, close, setIsSelected }: TProps) => {
  const axios = useAxios();
  const currentTime = new Date(Date.now());
  console.log("data", data);

  const [form, setForm] = useState({
    uid: data?.uid ? data?.uid : generateUID(),
    patientName: data?.patientName ? data?.patientName : "",
    careOfName: data?.careOfName ? data?.careOfName : "",
    phone: data?.phone ? data?.phone : "",
    totalPrice: data?.totalPrice ? data?.totalPrice : "",
    amountInWord: data?.amountInWord ? data?.amountInWord : "",
    address: data?.address ? data?.address : "",
    destination: data?.destination ? data?.destination : "",
    carType: data?.carType ? data?.carType : "Ac Ambulance",
    carNo: data?.carNo ? data?.carNo : "",
    date: data?.date ? data?.date : dayjs(currentTime),
    paymentMethod: data?.paymentMethod ? data?.paymentMethod : "Cash",
    serviceType: data?.serviceType ? data?.serviceType : "Patient",
  });

  // handle submit form
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Upload PDF to server
    if (data?._id) {
      try {
        if (!data?._id) return;
        const { data: getRes } = await axios.patch(
          `/money_receipt/${data?._id}`,
          {
            ...form,
          }
        );

        if (getRes?.success) {
          toast.success("Success");
          if (close) close();
          if (setIsSelected) setIsSelected(null);
          resetForm();
        }
      } catch (error) {
        console.error("Error uploading PDF:", error);
      }
    } else {
      try {
        const { data } = await axios.post(`/money_receipt`, {
          ...form,
        });

        if (data?.success) {
          toast.success("Success");
          resetForm();
          generatePDF();
        }
      } catch (error) {
        console.error("Error uploading PDF:", error);
      }
    }
  };

  // Function to generate PDF
  const generatePDF = async () => {
    const receiptElement = document.getElementById("money_receip");
    if (!receiptElement) return;

    const canvas = await html2canvas(receiptElement, {
      scale: 2,
      width: 700,
      height: 580,
      useCORS: true,
    });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("l", "px", [700, 580]);
    pdf.addImage(imgData, "PNG", 0, 0, 700, 580);
    pdf.save("money_receipt.pdf");
  };

  const resetForm = () => {
    setForm({
      uid: generateUID(),
      patientName: "",
      careOfName: "",
      phone: "",
      totalPrice: "",
      amountInWord: "",
      address: "",
      destination: "",
      carType: "",
      carNo: "",
      date: dayjs(currentTime),
      paymentMethod: "",
      serviceType: "",
    });
  };

  return (
    <div>
      <div className="mb-3">
        <p className="text-3xl font-semibold text-slate-800 text-center">
          Money Receipt{" "}
        </p>
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
              <label htmlFor="" className="  mb-1">
                Car type
              </label>
              <select
                name=""
                id=""
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, carType: e.target.value }))
                }
                className="w-full py-[14px] rounded border border-slate-300 focus-visible:border-primary focus-visible:outline-none focus:outline-none px-2"
              >
                <option
                  value="Ac Ambulance"
                  selected={form?.carType === "Ac Ambulance"}
                >
                  {" "}
                  Ac Ambulance{" "}
                </option>
                <option
                  value="Non-Ac Ambulance"
                  selected={form?.carType === "Non-Ac Ambulance"}
                >
                  {" "}
                  Non-Ac Ambulance{" "}
                </option>
                <option
                  value="Freezing Ambulance"
                  selected={form?.carType === "Freezing Ambulance"}
                >
                  {" "}
                  Freezing Ambulance{" "}
                </option>
                <option
                  value="Life Support Ambulance"
                  selected={form?.carType === "Life Support Ambulance"}
                >
                  {" "}
                  Life Support Ambulance{" "}
                </option>
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
              type="text"
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
          <div className=" grid grid-cols-2 gap-5  ">
            <div>
              <label htmlFor="" className="  mb-1">
                Payment
              </label>
              <select
                name="paymentMethod"
                id=""
                onChange={(e) =>
                  setForm((prev) => ({
                    ...prev,
                    paymentMethod: e.target.value,
                  }))
                }
                className="w-full py-[14px] rounded border border-slate-300 focus-visible:border-primary focus-visible:outline-none focus:outline-none px-2"
              >
                <option> Select method </option>
                <option value="Cash" selected={form?.paymentMethod === "Cash"}>
                  Cash
                </option>
                <option
                  value="Bkash"
                  selected={form?.paymentMethod === "Bkash"}
                >
                  Bkash
                </option>
                <option
                  value="Nagad"
                  selected={form?.paymentMethod === "Nagad"}
                >
                  Nagad
                </option>
                <option value="Bank" selected={form?.paymentMethod === "Bank"}>
                  Bank
                </option>
              </select>
            </div>
            <div>
              <label htmlFor="" className="  mb-1">
                Service Type
              </label>
              <select
                name="serviceType"
                id=""
                onChange={(e) =>
                  setForm((prev) => ({
                    ...prev,
                    serviceType: e.target.value,
                  }))
                }
                className="w-full py-[14px] rounded border border-slate-300 focus-visible:border-primary focus-visible:outline-none focus:outline-none px-2"
              >
                <option> Select Type </option>
                <option
                  value="Patient"
                  selected={form?.serviceType === "Patient"}
                >
                  Patient
                </option>
                <option
                  value="Dead body"
                  selected={form?.serviceType === "Dead body"}
                >
                  Dead Body
                </option>
              </select>
            </div>
          </div>
          <div className="flex justify-end">
            <Button
              type="submit"
              className="bg-primary text-white rounded px-6"
            >
              {!data?._id ? "Save and Download" : "Update"}
            </Button>
          </div>
        </div>
      </form>

      {!data?._id && (
        <>
          <div>
            <p className="text-2xl font-semibold text-center mb-4">Preview</p>
          </div>
          <PDFComponent data={form} />
        </>
      )}
    </div>
  );
};

export default MoneyReceiptForm;
