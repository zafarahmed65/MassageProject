import useMediaQuery from "@/hooks/useMediaQuery"
import ActionButton from "@/shared/ActionButton"
import { SelectedPage } from "@/shared/types"
import hemlo from "@/assets/hemlo.png"
import ll1 from "@/assets/ll1.png"
import HomePageGraphic from "@/assets/HomePageGraphic.png"
import SponsorRedBull from "@/assets/SponsorRedBull.png"
import bgbg from "@/assets/bgbg.png"
import SponsorFortune from "@/assets/SponsorFortune.png"
import SponsorForbes from "@/assets/SponsorForbes.png"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { motion } from "framer-motion"

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

function Home({ setSelectedPage }: Props) {
  const isAboveMediumScrens = useMediaQuery("(min-width:1060px)")
  const sectionStyle = {
    backgroundImage: `url(' bgbg')`, // Make sure to put the correct path to your image
    backgroundSize: "cover", // This ensures that the background covers the entire section
    backgroundPosition: "center", // This centers the background image
  }
  return (
    <section
      id="home"
      className="gap-16 py-10 md:h-full md:pb-0"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.5)), url(${bgbg})`,
      }}
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
      >
        <div className="z-10 mb-20 mt-60 md:basis-3/5">
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              <div className="before:absolute before:-left-20 before:-top-20 before:z-[-1] md:before:content-evolvetext">
                <img src={hemlo} alt="testtt" />
              </div>
            </div>
            <p className="mt-1 text-sm">
              Ontdek Holistisch Welzijn en Deskundige Zorg met de Professionele
              Massagetherapiediensten van Karl Vanwynsberghe.
            </p>
          </motion.div>

          <motion.div
            className="mt-8 flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Neem nu contact op
            </ActionButton>
          </motion.div>
        </div>
        <div className="flex basis-3/5 items-center md:z-10 md:my-16 md:ml-40 md:justify-items-end">
          <img alt="home-page-graphic" src={ll1} />
        </div>
      </motion.div>
      {/* SPONSORS */}
      {isAboveMediumScrens && (
        <div className="w-full bg-primary-100 py-10">
          <div className="mx-auto w-5/6">
            <div className="mx-auto flex w-3/5 items-center justify-between gap-8">
              <img
                src={SponsorRedBull}
                alt="redbull-sponsor"
                style={{ width: "150px", height: "auto" }}
              />
              <img
                src={SponsorFortune}
                alt="redbull-fortune"
                style={{ width: "150px", height: "auto" }}
              />
              <img
                src={SponsorForbes}
                alt="redbull-forbes"
                style={{ width: "150px", height: "auto" }}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Home
