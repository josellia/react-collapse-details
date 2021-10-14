import React from "react";
import { PropTypes } from "prop-types";
import "./DetailsCollapse.css";

const DetailsCollapse = (props) => {
  const { summary, children, styleDetailsSummary, styleDetailsContent, width } =
    props;

  const styles = {
    styleContainer: {
      width: width,
    },
  };
  return (
    <main style={styles.styleContainer}>
      <details>
        <summary
          className={`details-container__summary ${styleDetailsSummary} `}
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
  styleDetailsSummary: PropTypes.string,
  styleDetailsContent: PropTypes.string,
  width: PropTypes.string,
};
export default DetailsCollapse;
