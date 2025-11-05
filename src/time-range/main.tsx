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
  const { context, data, sendMessage } = useFieldExtension<TimeRange>({ start: "", end: "" }, {
    origin: "*",
    height: 56,
  });

  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

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

  useEffect(() => {
    if (context?.content.id) {
      setStart(data.start);
      setEnd(data.end);
    }
  }, [context?.content.id]);

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