import Navbar from "@/scenes/Navbar"
import Footer from "@/scenes/Footer"
import ContactUs from "@/scenes/ContactUs" // Ensure correct import path
import { useEffect, useState } from "react"
import { SelectedPage } from "./shared/types"

function Page2() {
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)
  // Assuming SelectedPage enum has a value for this page, update accordingly
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Page2
  )

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true)
      } else {
        setIsTopOfPage(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="app overflow-x-hidden">
      {/* Render Navbar, OurClasses, and Footer */}
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      {/* Assuming you want to display OurClasses content here */}
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer />
    </div>
  )
}

export default Page2
