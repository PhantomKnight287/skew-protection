"use client";

import { useEffect, useState } from "react";

function SkewSaver() {
  const [_, setSkewState] = useState("");
  function setSkew(s: string) {
    setSkewState((old) => {
      if (old !== s && old) {
        window.location.reload();
        return "";
      }
      return s;
    });
  }

  useEffect(() => {
    function fetchSkew() {
      fetch(`/api/skew`)
        .then((d) => d.text())
        .then((d) => {
          if (d.includes("message")) return;
          setSkew(d);
        });
    }
    fetchSkew();
    window.addEventListener("focus", fetchSkew);
    return () => {
      window.removeEventListener("focus", fetchSkew);
    };
  }, []);
  return null;
}

export default SkewSaver;
