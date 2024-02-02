import React, { useEffect, useState } from "react"
import Navbar from "@/scenes/Navbar"
import Footer from "@/scenes/Footer"
import { SelectedPage } from "./shared/types"
import HText from "@/shared/HText"
import { motion } from "framer-motion"

// Define the BenefitType type
type BenefitType = {
  imageUrl: string
  title: string
  price: string
  description: string
}

function Page2() {
  const [isTopOfPage, setIsTopOfPage] = useState(true)
  const [selectedPage, setSelectedPage] = useState(SelectedPage.Page2)

  useEffect(() => {
    const handleScroll = () => {
      setIsTopOfPage(window.scrollY === 0)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const benefits: BenefitType[] = [
    {
      imageUrl: "your-image-url-here", // Replace with your actual image URL
      title: "massage",
      price: "€55 / sessie (1 sessie duurt 1 uur à 1 uur 15 minuten)",
      description:
        "Deze massage heeft tot doel lichaam en geest te ontspannen.",
    },
    {
      imageUrl: "your-image-url-here", // Replace with your actual image URL
      title: "sportmassage",
      price: "€55 / sessie (1 sessie duurt 1 uur)",
      description:
        "De spanningen en blokkades worden weggenomen of verminderd. De massage maakt dus spieren los, wat therapeutisch werkt.",
    },
    {
      imageUrl: "your-image-url-here", // Replace with your actual image URL
      title: "stoelmassage",
      price: "€30 / sessie (1 sessie duurt 30 minuten)",
      description:
        "Hierbij wordt er veel aandacht geschonken aan nek en schouders.",
    },
  ]
  const special: BenefitType[] = [
    {
      imageUrl: "your-image-url-here", // Replace with your actual image URL
      title: "Reiki",
      price: "€50 / sessie (1 sessie duurt ongeveer 1 uur)",
      description:
        "Dit is een Japanse geneeswijze en wordt toegepast door middel van handoplegging.",
    },
    {
      imageUrl: "your-image-url-here", // Replace with your actual image URL
      title: "Bachbloesems",
      price: "€10 / flesje      ",
      description:
        "De samenstelling van een flesje wordt gemaakt a.d.h.v. verschillende aftreksels van planten en bloemen die specifiek inwerken op jouw persoonlijke emoties.",
    },
  ]
  return (
    <div className="app overflow-x-hidden">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />

      <div className="bg-white py-12">
        <div className="lg:px-8 mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mt-20">
            <motion.div
              className="mb-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <HText>MASSAGES</HText>
            </motion.div>{" "}
            <dl className="space-y-10 md:grid md:grid-cols-3 md:gap-8 md:space-y-0">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-lg border-2 border-gray-200 shadow-sm"
                >
                  <img
                    src={benefit.imageUrl}
                    alt={benefit.title}
                    className="h-32 w-full object-cover sm:h-48"
                  />
                  <div className="p-6">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">
                      {benefit.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {benefit.price}
                    </p>
                    <p className="mt-4 text-base text-gray-500">
                      {benefit.description}
                    </p>
                    <div className="mt-6">
                      <button className="rounded bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700">
                        Contacteer nu
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <div className="bg-white py-12">
        <div className="lg:px-8 mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mt-10">
            <motion.div
              className="mb-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <HText>SPECIALS</HText>
            </motion.div>{" "}
            <dl className="space-y-10 md:grid md:grid-cols-3 md:gap-8 md:space-y-0">
              {special.map((benefit, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-lg border-2 border-gray-200 shadow-sm"
                >
                  <img
                    src={benefit.imageUrl}
                    alt={benefit.title}
                    className="h-32 w-full object-cover sm:h-48"
                  />
                  <div className="p-6">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">
                      {benefit.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {benefit.price}
                    </p>
                    <p className="mt-4 text-base text-gray-500">
                      {benefit.description}
                    </p>
                    <div className="mt-6">
                      <button className="rounded bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700">
                        Contacteer nu
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Page2
