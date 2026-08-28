/**
 * Renders the new drops page with an image carousel
 */
import ImageCycler from "./ImageCycler";
import { ImageItem } from "../types";

const NewDrops = () => {
  const newDrops: ImageItem[] = [
    {
      src: "../../Images/newDrop1.jpg",
      alt: "A collection of T-Shirts hanging in a store, with only the front in focus.",
      id: 1,
    },
    {
      src: "../../Images/newDrop3.jpg",
      alt: "A young woman sitting in a chair smiling with her limbs stretched out holding clothes.",
      id: 2,
    },
  ];

  return (
    <div>
      <div className="header-container">
        <h3 className="page-header">NEW DROPS</h3>
      </div>

      <ImageCycler images={newDrops} />
    </div>
  );
};

export default NewDrops;
