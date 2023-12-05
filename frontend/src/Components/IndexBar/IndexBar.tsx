import React from "react";
import { ClickableDiv } from "../";
import lang from "../../lib/lang/en";
import styles from "./IndexBar.module.css";

type Props = {
  currentIndex: number;
  maxIndex: number;
  handleChange: (index: number) => void;
};

const IndexBar = (props: Props) => {
  const { currentIndex, maxIndex, handleChange } = props;
  const numbersArray = Array.from(
    { length: maxIndex },
    (_, index) => index + 1
  );

  return (
    <div className={styles.bar}>
      <ClickableDiv
        className={styles.button}
        onClick={() => {
          handleChange(currentIndex - 2);
        }}
      >
        {lang.commonPreviousPage}
      </ClickableDiv>
      <div className={styles.numberPad}>
        {numbersArray.map((number, index) => (
          <div key={`${number}${index}`}>
            {index * 2 <= maxIndex - 1 && (
              <ClickableDiv
                key={index}
                className={styles.number}
                onClick={() => handleChange(index * 2)}
              >
                {number}
              </ClickableDiv>
            )}
          </div>
        ))}
      </div>
      <ClickableDiv
        className={styles.button}
        onClick={() => {
          handleChange(currentIndex + 2);
        }}
      >
        {lang.commonNextPage}
      </ClickableDiv>
    </div>
  );
};

export default IndexBar;
