import React, { useState, useEffect, useRef } from "react";
import { PropTypes } from "prop-types";
import "./DetailsCollapse.css";

const DetailsCollapse = (props) => {
  const {
    summary,
    children,
    styleDetailsContent,
    width,
    bgColor,
    bgHover,
    color,
    colorHover,
    borderRadius,
    border,
  } = props;

  const [hoverRef, isHovered] = useHover();

  const styles = {
    styleContainer: {
      width: width || "50rem",
    },
    styleSummary: {
      background: isHovered ? bgHover || "orange" : bgColor || "#e9d41d",
      color: isHovered ? colorHover || "#fff" : color || "#000",
      borderRadius: borderRadius || "0.3em",
      border: border,
    },
  };
  return (
    <main style={styles.styleContainer}>
      <details>
        <summary
          ref={hoverRef}
          style={styles.styleSummary}
          className="details-container__summary "
        >
          {summary}
        </summary>
        <div className={`details-container__content ${styleDetailsContent}`}>
          {children}
        </div>
      </details>
    </main>
  );
};

DetailsCollapse.prototypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element.isRequired,
  ]),
  summary: PropTypes.string.isRequired,
  styleDetailsContent: PropTypes.string,
  width: PropTypes.string,
  bgColor: PropTypes.string,
  bgHover: PropTypes.string,
  color: PropTypes.string,
  colorHover: PropTypes.string,
  borderRadius: PropTypes.string,
  border: PropTypes.string,
};

const useHover = () => {
  const [hover, setHover] = useState(false);

  const ref = useRef(null);

  const handleMouseOver = () => setHover(true);
  const handleMouseOut = () => setHover(false);

  useEffect(() => {
    const node = ref.current;
    if (node) {
      node.addEventListener("mouseover", handleMouseOver);
      node.addEventListener("mouseout", handleMouseOut);

      return () => {
        node.removeEventListener("mouseover", handleMouseOver);
        node.removeEventListener("mouseout", handleMouseOut);
      };
    }
  }, [ref.current]);

  return [ref, hover];
};

export default DetailsCollapse;
