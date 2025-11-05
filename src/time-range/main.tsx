import { useFieldExtension } from "microcms-field-extension-react";
import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { TimeInput } from "./components/TimeInput/TimeInput";

type TimeRange = {
  start: string;
  end: string;
}

function App() {
  const { data, sendMessage } = useFieldExtension<TimeRange>({ start: "", end: "" }, {
    origin: "http://xxxx.microcms.io",
  });

  const [start, setStart] = useState(data.start);
  const [end, setEnd] = useState(data.end);

  useEffect(() => {
    sendMessage({
      data: {
        start: start,
        end: end,
      },
    });
  }, [start, end, sendMessage]);

  return (
    <div>
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