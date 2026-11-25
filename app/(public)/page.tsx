import Hero from "@/src/shared/components/ui/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nexora - Inicio"
}

export default function Home() {
  return (
    <>
      <Hero/>
    </>
  )
}
