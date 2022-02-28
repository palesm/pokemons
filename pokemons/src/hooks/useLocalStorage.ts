import {useEffect, useState} from "react";

function useLocalStorageState(key: string, initVal: any) {
  const [state, setState] = useState<any | null>(() => {
    let val;
    try {
      val = JSON.parse(window.localStorage.getItem(key) || String(initVal))
    } catch (err) {
      val = initVal
    }
    return val;
  })
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state))
  }, [state])
  return [state, setState]
}


export default useLocalStorageState;