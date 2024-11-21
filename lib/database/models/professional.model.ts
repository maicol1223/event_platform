import mongoose, { Document, Schema, model, models } from "mongoose";

export interface IProfessional extends Document {
  _id: string;  
  name: string;
  description: string;
  imageUrl: string;
  linkedinUrl?: string;
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
}

const ProfessionalSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  linkedinUrl: { type: String },
}, { timestamps: true });

const Professional = models.Professional || model<IProfessional>('Professional', ProfessionalSchema);

export default Professional;
