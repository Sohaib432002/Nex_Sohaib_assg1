"use client";
import Navbar from '@/app/components/Navbar'
import Header from '@/app/components/Header'
import App from '@/app/components/App_section'
import { SetStateAction, useState } from 'react'
export default function Home() {

  const [Feedback, setFeedback] = useState(false)
  return (
    <>

      <Navbar />
      <Header Feedback={Feedback} />
      <App Feedback={Feedback} setFeedback={setFeedback} />
      {/* <Foot/> */}
    </>
  );
}
