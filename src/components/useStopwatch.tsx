"use client";

import { useCallback, useRef, useState } from "react";

export default function useStopwatch() {
  const [time, setTime] = useState<number>(0);
  const [running, setRunning] = useState<boolean>(false);
  const startTime = useRef<number>(0);
  const interval = useRef<null | ReturnType<typeof setTimeout>>(null);
  const [laps, setLaps] = useState<number[]>([]);

  const start = useCallback(() => {
    setRunning(true);
    startTime.current = Date.now() - time;

    interval.current = setInterval(() => {
      setTime(Date.now() - startTime.current);
    }, 10);
  }, [time]);

  const pause = useCallback(() => {
    if (interval.current) clearInterval(interval.current);
    setRunning(false);
  }, []);

  const save = useCallback(() => {
    setLaps((prev) => [...prev, time]);
  }, [time]);

  const reset = useCallback(() => {
    if (interval.current) clearInterval(interval.current);
    setTime(0);
    setRunning(false);
    startTime.current = 0;
  }, []);

  const toggle = useCallback(() => {
    if (running) {
      pause();
    } else {
      start();
    }
  }, [running, pause, start]);

  return {
    toggle,
    reset,
    running,
    time,
    save,
    laps,
  };
}
