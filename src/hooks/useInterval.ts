import { useEffect, useRef } from "react";

type CallbackFunction = () => void;

export default function useInterval(callback: CallbackFunction, delay: number) {
  const savedCallback = useRef<CallbackFunction>();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      if (savedCallback.current) savedCallback.current();
    }

    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
