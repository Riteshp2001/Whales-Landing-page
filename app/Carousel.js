import React, { useEffect, useRef } from "react";

export default function CustomCarousel(props) {
  const slider = useRef(null);
  let isDown = useRef(false);
  let startX = useRef(null);
  let scrollLeft = useRef(null);

  useEffect(() => {
    if (slider && slider.current) {
      let sliderRef = slider.current;

      // Attach event listeners only once
      sliderRef.addEventListener("mousedown", handleMouseDown);
      sliderRef.addEventListener("mouseleave", handleMouseLeave);
      sliderRef.addEventListener("mouseup", handleMouseUp);
      sliderRef.addEventListener("mousemove", handleMouseMove);

      return () => {
        // Remove event listeners when the component unmounts
        sliderRef.removeEventListener("mousedown", handleMouseDown);
        sliderRef.removeEventListener("mouseleave", handleMouseLeave);
        sliderRef.removeEventListener("mouseup", handleMouseUp);
        sliderRef.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, []);

  function handleMouseDown(e) {
    isDown.current = true;
    startX.current = e.pageX - slider.current.offsetLeft;
    scrollLeft.current = slider.current.scrollLeft;
  }

  function handleMouseLeave() {
    isDown.current = false;
  }

  function handleMouseUp() {
    isDown.current = false;
  }

  function handleMouseMove(e) {
    if (!isDown.current) return;
    e.preventDefault();
    const x = e.pageX - slider.current.offsetLeft;
    const walk = x - startX.current;
    slider.current.scrollLeft = scrollLeft.current - walk;
  }

  return (
    <div className="items" ref={slider}>
      {props.children}
    </div>
  );
}
