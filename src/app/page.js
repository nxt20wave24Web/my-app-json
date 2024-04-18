"use client";
import { useSearchParams } from "next/navigation";
import styles from "./page.module.css";
import data from "../jsonData/data";
import { Suspense } from "react";

export default function Home() {
  function Datarender() {
    const searchParams = useSearchParams();
    const finalid = searchParams.get("uid");
    const finaldata = data[finalid];
    return (
      <>
        <p>{finaldata.overall_user_performance_bucket}</p>
        <p>{finaldata.overall_score}</p>
        <p>{finaldata.overall_user_score}</p>
        <p>{finaldata.overall_user_score_percent}</p>
        <p>{finaldata.aptitude_overall_score}</p>
        <p>{finaldata.aptitude_user_score}</p>
        <p>{finaldata.aptitude_user_score_percent}</p>
        <p>{finaldata.aptitude_user_performance_bucket}</p>
        <p>{finaldata.verbal_overall_score}</p>
        <p>{finaldata.verbal_user_score}</p>
        <p>{finaldata.verbal_user_score_percent}</p>
        <p>{finaldata.verbal_user_performance_bucket}</p>
        <p>{finaldata.Frontend_overall_score}</p>
        <p>{finaldata.Frontend_user_score}</p>
        <p>{finaldata.Frontend_user_score_percent}</p>
        <p>{finaldata.Frontend_user_performance_bucket}</p>
      </>
    );
  }

  const Loader = () => <div>Loading...</div>;
  return <Suspense fallback={<Loader />}>
    <Datarender/>
  </Suspense>;
}
