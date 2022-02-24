import React from "react";
import { getData } from "./type";
import { useState, useEffect } from "react";

export function Api() {
  const [item, setItem] = useState<getData[]>([]);

  useEffect(() => {
    const res = fetch(
      "https://raw.githubusercontent.com/akshita151199/APIs/main/data"
    )
      .then((res) => res.json())
      .then((result) => {
        const aib = result;
        setItem(result.data);
      });
  }, []);

  return [item] as const;
}
