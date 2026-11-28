
import LoginForm from "@/src/features/auth/components/LoginForm";
import Heading from "@/src/shared/components/typography/Heading";
import { generatePageTitle } from "@/src/shared/utilities/metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: generatePageTitle("Iniciar Sesión"),
}

export default function LoginPage() {
  return (
    <>
      <div className="mb-8 text-center">
        <Heading>Bienvenido de nuevo</Heading>

        <p className="mt-3 text-sm text-muted">
          Inicia sesión y continúa descubriendo experiencias.
        </p>
      </div>

      <LoginForm />
    </>
  )
}