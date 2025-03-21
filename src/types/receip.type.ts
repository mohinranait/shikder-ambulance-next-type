import dayjs from "dayjs";

export type TReceipt = {
    date: dayjs.Dayjs;
    _id?: string;
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
    createdAt?: string;
    updatedAt?: string;
}