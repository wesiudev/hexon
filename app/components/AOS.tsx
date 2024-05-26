"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function AOSInit() {
  useEffect(() => {
    AOS.init({
      offset: 0,
    });
  }, []);
  return <></>;
}
