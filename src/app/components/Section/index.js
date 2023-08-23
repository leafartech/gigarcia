import { ReactNode } from "react"

export default function Section({ children }) {
    return (
        <section className="w-full flex justify-center px-3 sm:px-0">
            <div className="w-full max-w-my">
                {children}
            </div>
        </section>
    )
}