import { useCallback, useState } from "react";

export default function useOpenController(initialState, lv) {
  const [isOpen, setOpenState] = useState(initialState);
  const [level, setLevel] = useState(lv);

  const toggle = useCallback(() => {
    setOpenState((state) => !state);
  }, [setOpenState]);

  const levelUp = useCallback(() => {
    setLevel((val) => val + 1);
  }, [setLevel]);

  return { isOpen, toggle, level, levelUp };
}
