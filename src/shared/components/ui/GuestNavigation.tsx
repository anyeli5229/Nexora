
import Link from "next/link";

export default function GuestNavigation() {
    return (
        <nav className="flex items-center justify-center gap-3 mt-5 md:mt-0">
            <Link
                href="/auth/login"
                className="rounded-lg px-4 py-2.5 text-sm font-medium text-muted transition-colors duration-200 hover:bg-surface hover:text-foreground"
            >
                Iniciar sesión
            </Link>

            <Link
                href="/auth/create-account"
                className="rounded-lg bg-linear-to-r from-primary to-accent px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-primary/40"
            >
                Registrarse
            </Link>
        </nav>
    )
}
