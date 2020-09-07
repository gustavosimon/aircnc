import mongoose from "mongoose";

interface Spot {
  thumbnail: string;
}

const SpotShema = new mongoose.Schema(
  {
    thumbnail: String,
    company: String,
    price: Number,
    techs: [String],
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

SpotShema.virtual("thumbnail_url").get(function (this: Spot) {
  const thumbnail_url = this.thumbnail;
  return `http://localhost:3333/files/${thumbnail_url}`;
});

export default mongoose.model("Spot", SpotShema);
