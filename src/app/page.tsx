import Component from "../portfolio" // المسار الصحيح الآن هو من src/app إلى src/portfolio

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Component />
    </main>
  )
}
