import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";

import styles from "./form.module.css";

type Props = {
  onSubmit: (email: string) => void;
};

const EmailForm = (props: Props) => {
  const { control } = useForm();
  const { onSubmit } = props;
  const [error, setError] = useState("");

  const validateEmail = (value: string) => {
    if (!/\S+@\S+\.\S+/.test(value)) {
      if (value.length > 0) {
        setError("Invalid Email Address");
      } else {
        setError("");
      }
    } else {
      onSubmit(value);
      setError("");
    }
  };

  return (
    <form>
      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <>
            <input
              className={styles.input}
              type="text"
              placeholder="Email address"
              {...field}
              onChange={(e) => {
                field.onChange(e);
                validateEmail(e.target.value);
              }}
            />
            {error.length > 2 && <div style={{ color: "red" }}>{error}</div>}
          </>
        )}
      />
    </form>
  );
};

export default EmailForm;
