import ImageCycler from "./ImageCycler";
import Mission from "./Mission";
import { ImageItem } from "../types";

const Home = () => {
  // Store hero images for home page cycler
  const heroImgs: ImageItem[] = [
    {
      src: "../../Images/skusuks_beach_day.png",
      alt: "A young man standing with his hands in pockets on a beach.",
      id: 1,
    },
    {
      src: "../../Images/skusuks_street.png",
      alt: "A man dancing in the street at nighttime with cars passing by.",
      id: 2,
    },
    {
      src: "../../Images/skusuks_beach_dusk.png",
      alt: "A young man facing the beach with his back to the camera at dusk.",
      id: 3,
    },
  ];

  return (
    <>
      <ImageCycler images={heroImgs} />
      <Mission />
    </>
  );
};

export default Home;
