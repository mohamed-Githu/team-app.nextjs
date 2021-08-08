import { useEffect, useRef, useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/solid";

import RateBox from "../rate-box.component";
import Typography from "../Typography.component";
import useWindowSize from "../../hooks/windows-size.hook";

const ratings = [
  {
    caption:
      "It’s a great application with a great user experience. Simply what we’d needed to make our collaboration more effective and desirable. A five-star app for five-star companies. Great features that any company based on team meetings and collaboration needs.",
    auther: "Emma Goldberg",
    position: "CEO at SuperTech",
    photo: "/avatars/emma goldberg.jpg",
  },
  {
    caption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Congue quisque egestas diam in arcu cursus euismod. Odio euismod lacinia at quis risus sed.",
    auther: "Sara Mer",
    position: "Engeneer at Netflix",
    photo: "/avatars/sara mer.jpg",
  },
  {
    caption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Venenatis cras sed felis eget velit. Amet dictum sit amet justo donec enim diam vulputate ut.",
    auther: "Adam Green",
    position: "Founder of ValleyTech",
    photo: "/avatars/adam green.jpg",
  },
  {
    caption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Imperdiet dui accumsan sit amet nulla facilisi. Leo a diam sollicitudin tempor id eu nisl.",
    auther: "Kevin King",
    position: "CEO at Netflix",
    photo: "/avatars/kevin king.jpg",
  },
];

const RatingSection = () => {
  const scrollRef = useRef();
  const [scrollPosition, setScrollPosition] = useState("start");
  const [showArrows, setShowArrows] = useState(true);
  const size = useWindowSize();

  const scrollHandler = (id) => {
    const { offsetWidth, scrollLeft, scrollWidth } = scrollRef.current;
    const newScrollLeft =
      id === "right" ? scrollLeft + offsetWidth : scrollLeft - offsetWidth;
    if (offsetWidth + newScrollLeft >= scrollWidth) {
      setScrollPosition("end");
    } else if (newScrollLeft <= 0) {
      setScrollPosition("start");
    } else {
      setScrollPosition("between");
    }
    scrollRef.current.scrollBy({
      behavior: "smooth",
      left: id === "right" ? offsetWidth : -offsetWidth,
    });
  };

  useEffect(() => {
    if (scrollRef.current.offsetWidth >= scrollRef.current.scrollWidth - 10)
      setShowArrows(false);
    else setShowArrows(true);
  }, [size]);

  return (
    <section className="px-4 pb-32b overflow-x-scroll scrollbar-hide mb-20">
      <Typography
        variant="h1"
        className="text-blue-dark text-center mb-20 lg:mb-14"
      >
        What people say about us
      </Typography>
      <div
        ref={scrollRef}
        className="max-w-max flex overflow-x-hidden mx-auto py-4 space-x-5 scrollbar-hide"
      >
        {ratings.map((rating) => (
          <RateBox key={rating.auther} {...rating} />
        ))}
      </div>
      {showArrows && (
        <div className="max-w-1160 flex space-x-7 mt-12 h-8 mx-auto justify-end">
          <ArrowLeftIcon
            className={`${
              scrollPosition === "start"
                ? "text-grey"
                : "text-blue cursor-pointer"
            }`}
            onClick={
              scrollPosition !== "start"
                ? scrollHandler.bind(this, "left")
                : null
            }
          />
          <ArrowRightIcon
            className={`${
              scrollPosition === "end"
                ? "text-grey"
                : "text-blue cursor-pointer"
            }`}
            onClick={
              scrollPosition !== "end"
                ? scrollHandler.bind(this, "right")
                : null
            }
          />
        </div>
      )}
    </section>
  );
};

export default RatingSection;
