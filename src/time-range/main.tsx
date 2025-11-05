import { useFieldExtension } from "microcms-field-extension-react";
import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { TimeInput } from "./components/TimeInput/TimeInput";
import styles from "./main.module.css";

const TITLE = "Time Range";

type TimeRange = {
  start: string;
  end: string;
}

function App() {
  const { data, sendMessage } = useFieldExtension<TimeRange>({ start: "", end: "" }, {
    origin: "*",
  });

  console.log(data);

  const [start, setStart] = useState(data.start);
  const [end, setEnd] = useState(data.end);

  console.log(start, end);

  useEffect(() => {
    sendMessage({
      title: TITLE,
      description: `${start} 〜 ${end}`,
      data: {
        start: start,
        end: end,
      },
    });
  }, [start, end, sendMessage]);

  return (
    <div className={styles.Container}>
      <TimeInput value={start} onChange={setStart} />
      〜
      <TimeInput value={end} onChange={setEnd} />
    </div>
  )
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)