import React, { useEffect, useRef, useState } from "react";
const Carousel = ({ items, transitionSpeed }) => {
  const [title, setTitle] = useState("");
  const [carouselLeftImage, setCarouselLeftImage] = useState("");
  const [carouselRightImage, setCarouselRightImage] = useState("");

  const firstImage = useRef(null);
  const carouselTitle = useRef(null);
  const carouselImages = useRef(null);
  const CarouselDots = useRef(null);
  const carouselBackground = useRef(null);
  const totalItems = useRef(items.length);
  const iteration = useRef(0);

  useEffect(() => {
    carouselBackground.current = document.querySelector(".services-content");
    carouselTitle.current = document.querySelector("#carouselTitle");
    carouselImages.current = document.querySelectorAll(".carousel-image");
    CarouselDots.current = document.querySelector(".item-identifier");

    carouselImages.current.forEach((image) => {
      image.style.backgroundColor = "#9C9999";
      image.style.height = "250px";
      image.style.width = "180px";
    });

    firstImage.current = document.querySelector(".carousel-image:nth-child(1)");
    firstImage.current.style.marginTop = "30px";

    for (
      iteration.current;
      iteration.current < totalItems.current;
      iteration.current++
    ) {
      const dotsBtn = document.createElement("button");

      CarouselDots.current.append(dotsBtn);
      dotsBtn.className = "dots";
    }
    const dotsActiveBtn = document.querySelectorAll(".dots");

    let count = 0;

    setInterval(() => {
      dotsActiveBtn.forEach((dots) => {
        dots.classList.remove("active");
        dots.style.backgroundColor = "#9c9999";
        dots.style.width = "15px";
        dots.style.height = "15px";
        dots.style.borderRadius = "50%";
      });
      count >= totalItems.current ? (count = 1) : count++;
      dotsActiveBtn[count - 1].classList.add("active");
      dotsActiveBtn[count - 1].style.backgroundColor = "white";
      dotsActiveBtn[count - 1].style.width = "40px";
      dotsActiveBtn[count - 1].style.borderRadius = "20px";
      setTitle(items[count - 1].name);
      setCarouselLeftImage(items[count - 1].image.firstImage);
      setCarouselRightImage(items[count - 1].image.secondImage);
      carouselBackground.current.style.backgroundImage =
        carouselLeftImage.current === ""
          ? ""
          : ` linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1)),url(` +
            require(`../../assets/images/services/` +
              items[count - 1].image.backgroundImage) +
            `) `;
      carouselTitle.current.setAttribute("carousel-index", "0" + count);
    }, transitionSpeed);
  }, []);

  return (
    <>
      <div className="d-flex justify-content-center">
        <h1 id="carouselTitle" carousel-index="" style={{ color: "white" }}>
          {title}
        </h1>
      </div>
      <div className="row justify-content-center mt-5">
        <div className="col-4 ">
          <img
            src={
              carouselLeftImage === ""
                ? ""
                : require(`../../assets/images/services/${carouselLeftImage}`)
            }
            className="carousel-image"
          />
        </div>
        <div className="col-4 ">
          <img
            src={
              carouselRightImage === ""
                ? ""
                : require(`../../assets/images/services/${carouselRightImage}`)
            }
            className="carousel-image"
          />
        </div>
      </div>
    </>
  );
};
export default Carousel;
