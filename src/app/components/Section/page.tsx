import { ReactNode } from "react"

type SectionProps = {
    children: ReactNode
}

export default function Section({ children }: SectionProps) {
    return (
        <section className="w-full flex justify-center px-3 sm:px-0">
            <div className="w-full max-w-my">
                {children}
            </div>
        </section>
    )
}
