import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UI_ROUTES } from "../../utils/routes";
import lang from "../../lib/lang/en";
import { CONSENTS_LIST } from "../../lib/consentsList";
import { manageAgreementCheck } from "../../lib/helpers";
import { createConsent } from "../../lib/api/consents";
import { UserEntry } from "../../types/UserEntry.type";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import styles from "./GiveConsent.module.css";

const GiveConsent = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: createConsent,
    onSuccess: (newEntry) => {
      queryClient.setQueryData(
        ["consents"],
        (prevData: UserEntry[] | undefined) => {
          const existingData = prevData || [];
          const updatedData = [...existingData, newEntry];
          return updatedData;
        }
      );
      navigate(UI_ROUTES.consents);
    },
  });

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [consents, setConsents] = useState<string[]>([]);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    setIsButtonDisabled(consents.length === 0);
  }, [consents]);

  const handleAgreementChange = (consent: string) => {
    setConsents((prevConsents) => manageAgreementCheck(consent, prevConsents));
  };

  const onSubmit = () => {
    mutate({
      name,
      email,
      consents,
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.inputs}>
        <input
          className={styles.inputArea}
          type="text"
          placeholder="Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          className={styles.inputArea}
          type="text"
          placeholder="Email address"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div className={styles.text}>{lang.commonAggreement}:</div>
      <div className={styles.checkboxes}>
        {CONSENTS_LIST.map((consent) => (
          <div className={styles.row} key={consent}>
            <input
              type="checkbox"
              onChange={() => {
                handleAgreementChange(consent);
              }}
            />
            <span>{consent}</span>
          </div>
        ))}
      </div>
      <button
        className={
          isButtonDisabled ? styles.submitButtonDisabled : styles.submitButton
        }
        disabled={isButtonDisabled}
        onClick={onSubmit}
      >
        {lang.commonGiveConsent}
      </button>
    </div>
  );
};

export default GiveConsent;
