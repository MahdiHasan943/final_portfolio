import { model, models, Schema } from "mongoose";

const WorksSchema = new Schema(
  {
    id: Number,
    name: String,
    ref: String,
    button: String,
    details: String,
    number: String,
    title: String,
    image: String,
  },
  { strict: false }
);

const Works = models?.Works || model("Works", WorksSchema);

export default Works;