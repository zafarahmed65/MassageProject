import useMediaQuery from "@/hooks/useMediaQuery"
import ActionButton from "@/shared/ActionButton"
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png"
import slogan from "@/assets/slogan.png"
import neckmassage from "@/assets/neckmassage.png"
import stoelmassage from "@/assets/stoelmassage.png"
import reiki from "@/assets/reiki.png"
import bachbloesems from "@/assets/bachbloesems.png"

import AnchorLink from "react-anchor-link-smooth-scroll"
import HText from "@/shared/HText"
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid"
import { BenefitType, SelectedPage } from "@/shared/types"
import { motion } from "framer-motion"
import Benefit from "./Benefit"

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description:
      "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description:
      "Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description:
      "Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient.",
  },
]

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
}

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

function Benefits({ setSelectedPage }: Props) {
  return (
    <section id="informatie" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        <div className="mt-16 items-center justify-between gap-20 md:mt-10 md:flex">
          <img
            src={BenefitsPageGraphic}
            alt="benifits-page-graphic"
            style={{ width: "450px", height: "auto" }}
            className="mx-auto"
          />
          <div className="relative mt-3">
            <div className="before:absolute before:-left-20 before:-top-20 before:z-[-1] before:content-abstractwaves">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <HText>OVER DE MASSEUR</HText>
              </motion.div>
            </div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Mijn naam is Karl Vanwynsberghe, spoedverpleegkundige en
                massagetherapeut in bijberoep. Het begon allemaal met een cursus
                relaxatiemassage bij Kurt Vanackere en Souldance. Daarna volgde
                ik een opleiding sportmassage aan de HUB te Brussel.
              </p>
              <p className="mb-5">
                In 2011 behaalde ik het diploma "massagetherapeut" aan de
                Welnessacademie te Hasselt. Twee jaar later verwierf ik het
                getuigschrift Deep Tissue massage Triggerpoint aan de Syntra
                West bij Tom De Prest. In juni 2019 volg ik de opleiding
                Indiaanse hoofdmassage aan Syntra West.
              </p>
            </motion.div>

            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles"></div>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        <div className="mt-16 items-center justify-between gap-20 md:mt-40 md:flex">
          <div className="relative mt-3">
            <div className="before:absolute before:-left-20 before:-top-20 before:z-[-1] ">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <HText>OVER DE ZAAK</HText>
              </motion.div>
            </div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                In 2010 richtte ik Massage- en Reikipraktijk Karl op. Al lang
                had ik het gevoel dat ik via massage en Reiki mensen zou kunnen
                helpen. Toen besliste ik om in bijberoep te starten. Ik kreeg de
                kans om in te stappen in "SpiritMountain", waar ik een ruimte
                huurde en samenwerkte met verschillende therapeuten. Na 2 jaar
                besloot ik om mijn praktijk thuis uit te oefenen en verder uit
                te bouwen. Het doel van de massage is mensen met spierblokkages
                te helpen en losser te maken.
              </p>
              <p className="mb-5">
                Reiki is een behandeling waarbij via verschillende handposities
                energie wordt doorgegeven aan een persoon. Deze behandeling kan
                op verschillende vlakken helpen: fysiek, psychisch, mentaal of
                emotioneel.
              </p>
            </motion.div>
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles"></div>
            </div>
          </div>

          <img
            src={slogan}
            alt="slogan"
            style={{ width: "450px", height: "auto" }}
            className="mx-auto"
          />
        </div>
      </motion.div>
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        <div className="mt-16 items-center justify-between gap-20 md:mt-40 md:flex ">
          <img
            src={neckmassage}
            alt="neck-massage"
            style={{ width: "450px", height: "auto" }}
            className="mx-auto"
          />
          <div className="relative mt-3">
            <div className="before:absolute before:-left-20 before:-top-20 before:z-[-1] ">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <HText>SPORTMASSAGE EN MASSAGE</HText>
              </motion.div>
            </div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Deze massage heeft tot doel lichaam en geest te ontspannen. Dit
                gebeurt door middel van technieken uit de sport- en
                relaxatiemassage. Naargelang de noodzaak en uw wensen, worden de
                technieken harder of zachter uitgevoerd. Op die manier kunnen
                spanningen en blokkades weggenomen of verminderd worden. Met
                andere woorden, de massage kan de spieren losmaken, wat
                therapeutisch werkt.
              </p>
              <p className="mb-5">
                Dit komt ook sporters ten goede. Wenst u liever eens volledig te
                ontspannen, dan kan u voor een relaxerende massage kiezen. Het
                is massage op maat, waarbij een stuk intuïtief gewerkt wordt.
                Kortom, de juiste massage op het juiste moment.
              </p>
            </motion.div>

            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles"></div>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        <div className="mt-16 items-center justify-between gap-20 md:mt-40 md:flex">
          <div className="relative mt-3">
            <div className="before:absolute before:-left-20 before:-top-20 before:z-[-1] before:content-abstractwaves">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <HText>STOELMASSAGE</HText>
              </motion.div>
            </div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Stoelmassage is een vorm van massage die plaats vindt op een
                speciale, comfortabele stoel of aan een daarvoor aangepaste
                massagetafel. Deze massage is bedoeld voor nek en schouders
                zowel voor relaxerende als voor diepere massage. Ook ideaal voor
                zwangere dames.
              </p>
            </motion.div>
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles"></div>
            </div>
          </div>

          <img
            src={stoelmassage}
            alt="stoelmassage"
            style={{ width: "450px", height: "auto" }}
            className="mx-auto"
          />
        </div>
      </motion.div>
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        <div className="mt-16 items-center justify-between gap-20 md:mt-40 md:flex ">
          <img
            src={reiki}
            alt="reiki"
            style={{ width: "450px", height: "auto" }}
            className="mx-auto"
          />
          <div className="relative mt-3">
            <div className="before:absolute before:-left-20 before:-top-20 before:z-[-1] ">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <HText>REIKI</HText>
              </motion.div>
            </div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Dit is een Japanse geneeswijze, ontwikkeld door Mr. Mikao Usui,
                die toegepast wordt door middel van handoplegging. Het is een
                manier om te helen waarbij zowel gewerkt wordt op lichamelijk
                als op mentaal, emotioneel en/of spiritueel niveau. Het kan ook
                op verschillende niveaus tegelijk werken. De Reiki-energie is
                een energie die zijn eigen weg gaat en niet te beïnvloeden is
                door de eigen wil of geest.
              </p>
              <p className="mb-5">
                Reiki doet voor u, wat op dit moment, het beste is. U hoeft er
                niet in te geloven, u hoeft het alleen maar toe te laten.
              </p>
            </motion.div>

            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles"></div>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        <div className="mt-16 items-center justify-between gap-20 md:mt-40 md:flex">
          <div className="relative mt-3">
            <div className="before:absolute before:-left-20 before:-top-20 before:z-[-1] before:content-abstractwaves">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <HText>BACHBLOESEMS</HText>
              </motion.div>
            </div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Deze bloesemtincturen werden ontwikkeld door Dr. Bach en zijn
                gebaseerd op verschillende aftreksels van planten en bloemen die
                specifiek inwerken op emoties. Iedere bloesem, 38 in totaal,
                werkt op een bepaalde emotie. Het gaat erom een zo correct
                mogelijke combinatie te maken van deze bloesems om zo efficiënt
                resultaat te bekomen.
              </p>
              <p className="mb-5">
                De Rescue Remedy is zo'n samenstelling van bachbloesems die heel
                goed helpt bij grote stress of ingrijpende gebeurtenissen. De
                bloesems zijn perfect combineerbaar met medicatie en hebben geen
                schadelijke effecten.
              </p>
            </motion.div>
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles"></div>
            </div>
          </div>

          <img
            src={bachbloesems}
            alt="bachbloesems"
            style={{ width: "450px", height: "auto" }}
            className="mx-auto"
          />
        </div>
      </motion.div>
    </section>
  )
}

export default Benefits
