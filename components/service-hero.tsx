import type React from "react"

interface ServiceHeroProps {
  title: string
  subtitle: string
  buttons: React.ReactNode
}

export default function ServiceHero({ title, subtitle, buttons }: ServiceHeroProps) {
  return (
    <section className="relative bg-green-800 py-12 text-white">
      <div className="absolute inset-0 z-0 opacity-20">
        <img
          src="/placeholder.svg?height=400&width=1920"
          alt="Lawn care background"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="container relative z-10 flex flex-col items-center justify-center space-y-6 text-center">
        <h1 className="max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">{title}</h1>
        <p className="max-w-2xl text-lg text-green-100">{subtitle}</p>
        <div className="flex flex-wrap items-center justify-center gap-4">{buttons}</div>
      </div>
    </section>
  )
}
