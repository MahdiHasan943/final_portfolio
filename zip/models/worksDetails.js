import { model, models, Schema } from "mongoose";

const WorksDetailsSchema = new Schema(
  {
    name: String,
    details: String,
    title: String,
    image: String,
    figma: String,
    works: {
        title: {
          type: String,

        }
      }
    
  },
  { strict: false }
);

const WorksDetails = models?.WorksDetails || model("WorksDetails", WorksDetailsSchema);

export default WorksDetails;