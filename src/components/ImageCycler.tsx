import { useState } from "react";
import { ImageItem } from "../types";

const ImageCycler = ({ images }: { images: ImageItem[] }) => {
  // Store the currentIndex and setCurrentIndex() method using state
  const [currentIndex, setCurrentIndex] = useState(0);

  // Next Image Logic (right arrow)
  const goNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  // Previous Image Logic (left arrow)
  const goPrev = () => {
    // Protect against negative indices
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
