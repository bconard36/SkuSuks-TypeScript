import { useState } from "react";
import { ImageItem } from "../types";

/**
 * Renders an image carouosel with controls for navigating between images
 * @param images - array of images to display in the carousel
 */
const ImageCycler = ({ images }: { images: ImageItem[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const goPrev = () => {
    // Wrap to the last image when navigating backward from the first
    if (currentIndex - 1 < 0) {
      setCurrentIndex(images.length - 1);
    } else {
      setCurrentIndex((currentIndex - 1) % images.length);
    }
  };

  return (
    <div className="carousel-wrapper">
      <button className="prev-btn cycler-btn" onClick={() => goPrev()}>
        &lt;
      </button>
      {images.map((img, index) => (
        <div className="cycler-images" key={img.id}>
          <img
            src={img.src}
            alt={img.alt}
            className={
              index === currentIndex
                ? "carousel-image active"
                : "carousel-image"
            }
          />
        </div>
      ))}
      <button className="next-btn cycler-btn" onClick={() => goNext()}>
        &gt;
      </button>
    </div>
  );
};

export default ImageCycler;
