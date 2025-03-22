"use client";

import CustomTable, { Column } from "@/common/CustomTable";
import useAxios from "@/hooks/useAxios";
import { Cross, Delete, Edit, Eye, Plus, Trash, X } from "lucide-react";
import moment from "moment";
import Link from "next/link";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useEffect, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  ModalHeader,
} from "@nextui-org/react";
import PDFComponent from "@/components/utils/PDFComponent";
import { TReceipt } from "@/types/receip.type";
import MoneyReceiptForm from "@/components/utils/MoneyReceiptForm";

export type TMoneyReceipt = {
  _id: string;
  uid: string;
  patientName: string;
  careOfName: string;
  phone: string;
  totalPrice: string;
  amountInWord: string;
  destination: string;
  address: string;
  carType: string;
  carNo: string;
  paymentMethod: string;
  serviceType: string;
  date: string;
  createdAt: string;
  updatedAt: string;
};

const MoneyReceiptManage = () => {
  const [isSelected, setIsSelected] = useState<TReceipt | null>(null);
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  const {
    isOpen: deleteIsOpen,
    onOpen: deleteOnOpen,
    onClose: deleteOnClose,
    onOpenChange: deleteOnOpenChange,
  } = useDisclosure();
  const {
    isOpen: editIsOpen,
    onOpen: editOnOpen,
    onClose: editOnClose,
    onOpenChange: editOnOpenChange,
  } = useDisclosure();
  const [receipts, setReceipts] = useState<TReceipt[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState("");
  const axios = useAxios();

  // Search table data
  const filteredReceipts = receipts.filter((receipt) =>
    Object.values(receipt).some(
      (value) =>
        typeof value === "string" &&
        value.toLowerCase().includes(search.toLowerCase())
    )
  );

  useEffect(() => {
    (async function () {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`/money_receipt`);
        if (data.success) {
          setReceipts(data?.payload?.receipts);
          setIsLoading(false);
        }
      } catch (error) {
        console.log();
        setIsLoading(false);
      }
    })();
  }, []);

  // Delete receipt
  const handleDelete = async () => {
    try {
      const { data } = await axios.delete(`/money_receipt/${isSelected?._id}`);
      if (data.success) {
        setReceipts((prev) =>
          prev.filter((item) => item?._id !== isSelected?._id)
        );
        deleteOnClose();
        setIsSelected(null);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const columns: Column[] = [
    {
      title: "ID",
      dataIndex: "uid",
      key: "uid",
      render: (uid: string) => {
        return (
          <p title={uid} className="truncate  overflow-hidden">
            #{uid}
          </p>
        );
      },
    },
    {
      title: "Name",
      dataIndex: "patientName",
      key: "patientName",
      render: (patientName: string) => {
        return (
          <p
            title={patientName}
            className="truncate w-[150px] max-w-[250px] overflow-hidden"
          >
            {patientName}
          </p>
        );
      },
    },
    {
      title: "C/o",
      dataIndex: "careOfName",
      key: "careOfName",
      render: (careOfName: string) => {
        return (
          <p
            className={` truncate w-[100px] max-w-[250px] overflow-hidden `}
            title={careOfName}
          >
            {careOfName}
          </p>
        );
      },
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
      render: (phone: string) => {
        return (
          <p className={`  `} title={phone}>
            {phone}
          </p>
        );
      },
    },

    {
      title: "Destination",
      dataIndex: "destination",
      key: "destination",
      render: (destination: string) => {
        return (
          <p
            className={`  truncate w-[100px] max-w-[120px] overflow-hidden `}
            title={destination}
          >
            {destination}
          </p>
        );
      },
    },
    {
      title: "Date",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (createdAt: string) => {
        return (
          <>
            <p className="text-nowrap text-text-gray">
              {moment(createdAt).format("DD/MM/YYYY")}
            </p>
            <p className="text-sm text-text-gray">
              {moment(createdAt).format("hh:mm A")}
            </p>
          </>
        );
      },
    },
    {
      title: "Action",
      dataIndex: "Action",
      key: "action",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      render: (_: any, action: TReceipt) => {
        return (
          <div className="flex gap-2 items-center ">
            <button
              onClick={() => {
                editOnOpen();
                setIsSelected(action);
              }}
              type="button"
              className="max-w-8 w-8 flex items-center justify-center rounded bg-black text-white h-8"
            >
              <Edit size={18} />
            </button>
            <button
              onClick={() => {
                onOpen();
                setIsSelected(action);
              }}
              type="button"
              className="max-w-8 w-8 flex items-center justify-center rounded bg-primary text-white h-8"
            >
              <Eye size={18} />
            </button>
            <button
              onClick={() => {
                deleteOnOpen();
                setIsSelected(action);
              }}
              type="button"
              className="max-w-8 w-8 flex items-center justify-center rounded bg-red-500 text-white h-8"
            >
              <Trash size={18} />
            </button>
          </div>
        );
      },
    },
  ];

  // Function to generate PDF
  const generatePDF = async () => {
    const receiptElement = document.getElementById("money_receip");
    if (!receiptElement) return;

    const canvas = await html2canvas(receiptElement, {
      scale: 2,
      width: 700,
      height: 620,
      useCORS: true,
    });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("l", "px", [700, 620]);
    pdf.addImage(imgData, "PNG", 0, 0, 700, 620);
    pdf.save("money_receipt.pdf");
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <Link
          href={`/admin/money-receipt/create`}
          className="bg-primary flex items-center gap-1 text-sm text-white px-3 py-2 rounded"
        >
          <Plus />
          Add New Receipt
        </Link>
        <div>
          <input
            placeholder="Search..."
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border-slate-300 border py-1 px-2 focus-visible:outline-none focus-visible:border-primary rounded-l"
          />
        </div>
      </div>
      <div>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <CustomTable dataSource={filteredReceipts} columns={columns} />
        )}
      </div>

      {/* Edit MODAL */}
      <Modal
        hideCloseButton={true}
        backdrop="opaque"
        size="full"
        classNames={{
          backdrop:
            "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
        }}
        isOpen={editIsOpen}
        onOpenChange={editOnOpenChange}
      >
        <ModalContent className="">
          <>
            <ModalHeader className="flex justify-end ">
              <Button
                className="bg-red-100 h-8 px-0 max-w-8 min-w-8 rounded-full text-red-500 "
                variant="light"
                onPress={editOnClose}
              >
                <X />
              </Button>
            </ModalHeader>
            <ModalBody className="min-h-[100vh-100px]  overflow-y-auto bg-slate-100">
              {isSelected && (
                <MoneyReceiptForm
                  data={isSelected}
                  close={editOnClose}
                  setIsSelected={setIsSelected}
                />
              )}
            </ModalBody>
          </>
        </ModalContent>
      </Modal>

      {/* PDF MODAL */}
      <Modal
        hideCloseButton={true}
        backdrop="opaque"
        size="full"
        classNames={{
          backdrop:
            "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
        }}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent className="">
          <>
            <ModalHeader className="flex justify-end gap-7 ">
              <Button
                onClick={generatePDF}
                className="bg-primary text-white rounded"
              >
                Download PDF
              </Button>
              <Button
                className="bg-red-100 h-8 px-0 max-w-8 min-w-8 rounded-full text-red-500 "
                variant="light"
                onPress={onClose}
              >
                <X />
              </Button>
            </ModalHeader>
            <ModalBody className="min-h-[100vh-100px] overflow-y-auto bg-slate-100">
              {isSelected && <PDFComponent data={isSelected} />}
            </ModalBody>
          </>
        </ModalContent>
      </Modal>

      {/* DELETE MODAL */}
      <Modal
        hideCloseButton={true}
        backdrop="opaque"
        classNames={{
          backdrop:
            "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
        }}
        isOpen={deleteIsOpen}
        onOpenChange={deleteOnOpenChange}
      >
        <ModalContent className="">
          <>
            <ModalBody className=" py-10 overflow-y-auto bg-slate-100">
              <div>
                <p className="text-center text-xl font-semibold">
                  Are you Sure to Delete?
                </p>
                <p className="text-center text-slate-700">
                  {isSelected?.patientName}
                </p>
              </div>
              <div className="flex justify-center gap-4 mt-4">
                <Button
                  className="bg-primary h-8 px-0   rounded-full text-white hover:!bg-primary"
                  variant="light"
                  onPress={deleteOnClose}
                >
                  Cancel
                </Button>
                <Button
                  className="bg-red-500 h-8 px-0  rounded-full text-white hover:!bg-red-500"
                  variant="light"
                  onPress={handleDelete}
                >
                  Delete
                </Button>
              </div>
            </ModalBody>
          </>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default MoneyReceiptManage;
