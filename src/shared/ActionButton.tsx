import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "./types"

type Props = {
  children: React.ReactNode
  setSelectedPage: (value: SelectedPage) => void
}

function ActionButton({ children, setSelectedPage }: Props) {
  return (
    <AnchorLink
      style={{
        backgroundColor: "#004b58", // Normal state background color
        color: "white", // Text color in normal state
        padding: "10px 40px", // px-10 py-2 equivalent
        borderRadius: "0.375rem", // rounded-md equivalent
      }}
      onClick={() => setSelectedPage(SelectedPage.ContactUS)}
      href={`#${SelectedPage.ContactUS}`}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#7c003c")} // Change to #7c003c on hover
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#004b58")} // Revert to #004b58 when not hovered
    >
      {children}
    </AnchorLink>
  )
}

export default ActionButton
