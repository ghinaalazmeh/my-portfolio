"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Mail } from "lucide-react" // تم إعادة إضافة Mail هنا

export default function Component() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-[#f9faff] overflow-x-hidden">
      {/* خلفية صفراء */}
      <div className="absolute top-0 right-0 w-[50%] h-full z-0">
        <Image
        unoptimized
          src="/images/back.png"
          alt="Background"
          fill
          className="object-cover"
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 right-0 z-50 p-6">
        <div className="flex gap-8 text-[#25282b] font-medium">
          <Link href="#about" className="hover:text-[#e6b429] transition-colors">
            About
          </Link>
          <Link href="#projects" className="hover:text-[#e6b429] transition-colors">
            Projects
          </Link>
          <Link href="#contacts" className="hover:text-[#e6b429] transition-colors">
            Contacts
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
  <section className="min-h-screen flex items-center z-10 relative">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
          {/* نص */}
          <div className="max-w-xl text-left">
            <p className="text-[#e6b429] text-sm font-medium mb-4 tracking-wider uppercase">UI/UX Designer</p>
            <h1 className="text-5xl font-bold text-[#25282b] mb-6 leading-tight">
              Hello, my name is
              <br />
              Ghina Alazmeh
            </h1>
            <p className="text-[#828282] mb-8 leading-relaxed text-lg">
              A UI/UX designer, I have designed several applications and websites and I strive to master them and
              further develop myself in this field.
            </p>
            <div className="flex gap-4">
              <Button
                onClick={scrollToProjects}
                className="bg-[#fdc435] hover:bg-[#ffc637] text-[#25282b] font-medium px-6"
              >
                Projects
              </Button>
              <Button
                variant="outline"
                className="border-[#25282b] text-[#25282b] hover:bg-[#25282b] hover:text-white bg-transparent"
                asChild
              >
                <Link
                  href="https://www.linkedin.com/in/ghina-alazmeh-4aa152329"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </Link>
              </Button>
            </div>
          </div>

          {/* صورة */}
         
        </div>
      </section>
  {/* About Section */}
<section id="about" className="py-20">
  <div className="container mx-auto px-6">
    <div className="grid lg:grid-cols-2 gap-20 items-start">
      
      {/* النص على اليسار */}
      <div className="mt-10">
        <h2 className="text-4xl font-bold text-[#25282b] mb-6">About me</h2>
        <p className="text-[#828282] leading-relaxed text-xl">
          Software engineer, graduate of a technical institute specialized in software with a very good average.
          I study in the applied college in the computer technology department. I have good experience in UI/UX
          design and application development as well as knowledge of other programming languages such as Python,
          Java, and the ability to design and develop websites.
        </p>
      </div>

      {/* الصورة على اليمين */}
      <div className="relative z-30 w-full flex justify-end -mt-32 px-6">
        <Image
          unoptimized
          src="/images/girl.png"
          alt="Girl illustration"
          width={420}
          height={420}
          className="rounded-lg object-contain"
        />
      </div>

    </div>
  </div>
</section>


      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#25282b] mb-4">Projects</h2>
            <div className="w-16 h-1 bg-[#fdc435] mx-auto"></div>
          </div>

          <div className="max-w-6xl mx-auto space-y-12">
            {/* CoffeCam Project */}
            <Card className="bg-white shadow-lg rounded-2xl overflow-hidden">
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-3xl font-bold text-[#25282b] mb-6">CoffeCam</h3>
                    <p className="text-[#828282] leading-relaxed">
                      I designed this project to make it easier for users to purchase their preferred type of coffee. I
                      drew inspiration from the colour of coffee and its shades to create a visually comfortable
                      experience.
                    </p>
                    <Button
                      variant="outline"
                      className="mt-4 border-2 border-[#25282b] text-[#25282b] hover:bg-[#25282b] hover:text-white bg-transparent px-4 py-2 text-sm font-medium transition-colors"
                      asChild
                    >
                      <Link
                        href="https://www.figma.com/proto/LnJk1C4O153kJO3Cvwt1UG/CoffeCam?node-id=64-5&t=ErcXWwWNPXnJQKNS-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Project
                      </Link>
                    </Button>
                  </div>
                  <div className="flex justify-center">
                    <Image
                      src="/images/coffeCam.png"
                      alt="CoffeCam app screens showing coffee ordering interface"
                      width={400}
                      height={300}
                      className="rounded-lg"
                      unoptimized
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Restaurant Project */}
            <Card className="bg-white shadow-lg rounded-2xl overflow-hidden">
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="lg:order-2">
                    <h3 className="text-3xl font-bold text-[#25282b] mb-6">Your Restaurant</h3>
                    <p className="text-[#828282] leading-relaxed">
                      A burger restaurant offers users the services and promotions provided by the restaurant through
                      the website. The colours refer to the bread and sesame associated with the burger.
                    </p>
                    <Button
                      variant="outline"
                      className="mt-4 border-2 border-[#25282b] text-[#25282b] hover:bg-[#25282b] hover:text-white bg-transparent px-4 py-2 text-sm font-medium transition-colors"
                      asChild
                    >
                      <Link
                        href="https://www.linkedin.com/in/ghina-alazmeh-4aa152329"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Project
                      </Link>
                    </Button>
                  </div>
                  <div className="lg:order-1 flex justify-center">
                    <Image
                    unoptimized
                      src="/images/burger-website (1).jpg"
                      alt="Restaurant website design showing burger promotions"
                      width={700}
                      height={400}
                      className="rounded-lg"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Listy Project */}
            <Card className="bg-white shadow-lg rounded-2xl overflow-hidden">
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-3xl font-bold text-[#25282b] mb-6">Listy</h3>
                    <p className="text-[#828282] leading-relaxed">
                      An application for the ability to organize daily, weekly and monthly tasks and list them clearly
                      at the end. Easy to use with pleasant colours for easy handling.
                    </p>
                    <Button
                      variant="outline"
                      className="mt-4 border-2 border-[#25282b] text-[#25282b] hover:bg-[#25282b] hover:text-white bg-transparent px-4 py-2 text-sm font-medium transition-colors"
                      asChild
                    >
                      <Link
                        href="https://www.figma.com/proto/JJg8ExYUITDUw2VeHPWlR3/Untitled?node-id=159-224&t=4rkiqMEmEb9GC3Ds-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=167%3A502"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Project
                      </Link>
                    </Button>
                  </div>
                  <div className="flex justify-center">
                    <Image
                      src="/images/listy.png"
                      alt="Listy app screens showing task organization interface"
                      width={400}
                      height={300}
                      className="rounded-lg"
                      unoptimized
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-[#25282b]">
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
              </svg>
              <button
                onClick={() => navigator.clipboard.writeText("+963 947 372 906")}
                className="hover:text-[#e6b429] transition-colors cursor-pointer"
                title="Click to copy number"
              >
                +963 947 372 906
              </button>
            </div>
            <div className="flex items-center gap-3">
              <Linkedin className="w-5 h-5" />
              <Link
                href="https://www.linkedin.com/in/ghina-alazmeh-4aa152329"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#e6b429] transition-colors"
              >
                linkedin.com/in/ghina-alazmeh
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5" />
              <span>ghinaalazmeh2@gmail.com</span> {/* تم إعادة إضافة نص البريد الإلكتروني هنا */}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
