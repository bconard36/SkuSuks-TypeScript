import { useState } from "react";
import ImageCycler from "./ImageCycler";
import { ImageItem } from "../types";

const PreOrder = () => {
  // Store hero images for home page cycler
  const [preOrders] = useState<ImageItem[]>([
    {
      src: "../../Images/preOrder1.jpg",
      alt: "A black and white picture of T-Shirts hanging in front of a painted wall.",
      id: 1,
    },
    {
      src: "../../Images/preOrder2.jpg",
      alt: "A young woman holding her hat and posing in front of a wooden building.",
      id: 2,
    },
    {
      src: "../../Images/preOrder3.jpg",
      alt: "A young man wearing all black with a ski mask standing on railroad tracks.",
      id: 3,
    },
  ]);

  return (
    <div>
      <div className="header-container">
        <h3 className="page-header">PRE-ORDERS</h3>
      </div>

      <ImageCycler images={preOrders} />
    </div>
  );
};

export default PreOrder;
