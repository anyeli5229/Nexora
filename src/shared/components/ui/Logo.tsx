
import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center">
      <Image src="/logo_nexora.png" alt="NEXORA" width={400} height={120} priority  />
    </div>
  )
}
