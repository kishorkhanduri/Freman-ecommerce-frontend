import AliceCarousel from "react-alice-carousel";
import PropTypes from "prop-types";
import HomeProductCard from "./HomeProductCard";
import "./HomeProductSection.css";
import { Button } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState, useRef } from "react";

const HomeProductSection = ({ section, data }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);


  const responsive = {
    0: {
      items: 2,
      itemsFit: "contain",
    },
    568: {
      items: 3,
      itemsFit: "contain",
    },
    1024: {
      items: 5.5,
      itemsFit: "contain",
    },
  };

  const items = data?.slice(0, 10).map((item) => (
    <div className="" key={item.id}>
      {" "}
      <HomeProductCard key={item.id} product={item} />
    </div>
  ));

  const handleSlideTo = (index) => {
    setActiveIndex(index);
    carouselRef.current.slideTo(index);
  };

  return (
    <div className="relative px-4 sm:px-6 lg:px-8 ">
      <h2 className="text-2xl font-extrabold text-gray-900 py-5">{section}</h2>
      <div className="relative border p-5">
        <AliceCarousel
          items={items}
          disableButtonsControls
          disableDotsControls 
          activeIndex={activeIndex}
          responsive={responsive}
          ref={carouselRef}
        />
        {activeIndex !== items.length - 5 && (
          <Button
            onClick={() => handleSlideTo(activeIndex + 1)}
            variant="contained"
            className="z-50 bg-[]"
            sx={{
              position: "absolute",
              top: "8rem",
              right: "0rem",
              transform: "translateX(50%) rotate(90deg)",
            }}
            color="white"
            aria-label="next"
          >
            <ArrowForwardIosIcon
              className=""
              sx={{ transform: "rotate(-90deg)" }}
            />
          </Button>
        )}

        {activeIndex !== 0 && (
          <Button
            onClick={() => handleSlideTo(activeIndex - 1)}
            variant="contained"
            className="z-50 bg-[]"
            color="white"
            sx={{
              position: "absolute",
              top: "8rem",
              left: "0rem",
              transform: "translateX(-50%)  rotate(90deg)",
            }}
            aria-label="next"
          >
            <ArrowForwardIosIcon
              className=""
              sx={{ transform: " rotate(90deg)" }}
            />
          </Button>
        )}
      </div>
    </div>
  );
};

HomeProductSection.propTypes = {
  section: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
};

export default HomeProductSection;
