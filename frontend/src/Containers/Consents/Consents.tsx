import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getConsents } from "../../lib/api/consents";
import styles from "./Consents.module.css";
import { ConsentsTable, IndexBar } from "../../Components";

const Consents = () => {
  const [index, setIndex] = useState(0);
  const { status, data } = useQuery({
    queryKey: ["consents"],
    queryFn: getConsents,
  });

  const handleChange = (index: number) => {
    if (index >= 0 && index < data.length) {
      setIndex(index);
    }
  };

  if (status === "pending") {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <ConsentsTable data={data.slice(index, index + 2)} />
      <div className={styles.indexBar}>
        <IndexBar
          currentIndex={index}
          maxIndex={data.length}
          handleChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Consents;
