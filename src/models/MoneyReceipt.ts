import mongoose from "mongoose";

const moneyReceipt = new mongoose.Schema( {
    uid: { type: String, required: true, unique: true },
    patientName: { type: String, required: true, trim: true },
    careOfName: { type: String, trim: true },
    phone: { type: String, required: true }, 
    totalPrice: { type: String, required: true },
    amountInWord: { type: String, required: true },
    destination: { type: String, trim: true },
    address: { type: String, trim: true },
    carType: { type: String, trim: true },
    carNo: { type: String, trim: true },
    paymentMethod: { type: String, enum: ['Bkash', 'Nagad', 'Bank','Cash'], required: true },
    serviceType: { type: String, trim: true },
    date: { type: String, required: true },
  },{timestamps:true})

export default mongoose.models.MoneyReceipt || mongoose.model('MoneyReceipt',moneyReceipt)
