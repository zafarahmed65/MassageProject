import { useEffect, useState } from "react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import Logo from "@/assets/Logo.png"
import Link1 from "./Link1"
import { SelectedPage } from "@/shared/types"
import { Link } from "react-router-dom" // Import from react-router-dom for navigation

import useMediaQuery from "@/hooks/useMediaQuery"
import ActionButton from "@/shared/ActionButton"
import { motion, AnimatePresence, Transition } from "framer-motion"

type Props = {
  selectedPage: SelectedPage
  isTopOfPage: boolean
  setSelectedPage: (value: SelectedPage) => void
}

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
  const [IsMenuToggled, setIsMenuToggled] = useState<boolean>(false)

  useEffect(() => {
    const scrollEvent = () => setIsMenuToggled(false)
    window.addEventListener("scroll", scrollEvent)
    return () => window.removeEventListener("scroll", scrollEvent)
  }, [])

  return (
    <nav>
      <div
        style={{ backgroundColor: isTopOfPage ? "transparent" : "#a9718a" }}
        className={`fixed top-0 z-30 flex w-full items-center justify-between py-6`}
      >
        <div className="mx-auto flex w-5/6 items-center justify-between">
          <img
            src={Logo}
            alt="logo"
            style={{ width: "55px", height: "auto" }}
          />

          {isAboveMediumScreens ? (
            <div className="flex items-center gap-8">
              <Link1
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link1
                page="Informatie"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link to="/page2">Prijzen</Link>
              <Link to="/page3">Contact</Link>

              {/* Uncomment these if needed
              <p>Sign In</p>
              <ActionButton setSelectedPage={setSelectedPage}>
                Become a Member
              </ActionButton>
              */}
            </div>
          ) : (
            <button
              className="rounded-full bg-secondary-500 p-2"
              onClick={() => setIsMenuToggled((prev) => !prev)}
            >
              <Bars3Icon className="h-6 w-6 text-white" />
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu Modal */}
      <AnimatePresence>
        {!isAboveMediumScreens && IsMenuToggled && (
          <motion.div
            key={crypto.randomUUID()}
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "tween", stiffness: 100 } as Transition}
            className="fixed bottom-0 right-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl"
          >
            {/* Close ICON */}
            <div className="flex justify-end p-12">
              <button onClick={() => setIsMenuToggled((prev) => !prev)}>
                <XMarkIcon className="h-6 w-6 text-gray-400" />
              </button>
            </div>
            {/* MENU ITEMS */}
            <div className="ml-[33%] flex flex-col gap-10 text-2xl">
              <Link1
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link1
                page="Informatie"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link to="/page2">Prijzen</Link>
              <Link to="/page3">Contact</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
