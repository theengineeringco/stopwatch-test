"use client";

import { useCallback } from "react";

type useStopwatchReturn = {
  start: () => void;
  pause: () => void;
  reset: () => void;
  save: () => void;
  running: boolean;
  time: number;
  laps: number[];
};

export default function useStopwatch(): useStopwatchReturn {
  const start = useCallback(() => {
    // TODO
  }, []);

  const pause = useCallback(() => {
    // TODO
  }, []);

  const save = useCallback(() => {
    // TODO
  }, []);

  const reset = useCallback(() => {
    // TODO
  }, []);

  return {
    start,
    pause,
    reset,
    running: false,
    time: 0,
    save,
    laps: [],
  };
}
