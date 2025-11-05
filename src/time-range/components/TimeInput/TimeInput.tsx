import { useCallback, type ChangeEvent } from "react";
import styles from "./TimeInput.module.css";

type TimeInputProps = {
  value: string;
  onChange: (value: string) => void;
};

/**
 * 時刻入力コンポーネント
 */
export const TimeInput = ({ value, onChange }: TimeInputProps) => {
  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.value);
    },
    [onChange]
  );

  return <input className={styles.TimeInput} type="time" value={value} onChange={handleChange} />;
};
