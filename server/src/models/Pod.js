import { Schema } from "mongoose";

export const PodSchema = new Schema(
  {
    name: { type: String, required: true, minLength: 3, maxLength: 50 },
    tags: [{ type: String, required: true, maxLength: 20 }],
    coverImg: { type: String, required: true, maxLength: 1000 },
    creatorId: { type: Schema.ObjectId, required: true, ref: 'Account' }
  },
  {
    timestamps: true,
    toJSON: { virtuals: true, versionKey: false }
  }
)

PodSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  ref: 'Account',
  justOne: true,
  options: {
    select: 'name picture'
  }
})