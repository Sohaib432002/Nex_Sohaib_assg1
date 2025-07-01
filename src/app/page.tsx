import Image from "next/image";
import Navbar from '@/app/components/Navbar'

export default function Home() {
  return (
    <>
    <div>
      <Navbar/>
      <h1>
        Welcome To our Quote Generator Web App
      </h1>
    </div>
    </>
  );
}
