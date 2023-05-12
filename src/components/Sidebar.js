import Link from "./Link"

function SideBar() {
  const links = [
    { label: "Accordion", path: "/accordion" },
    { label: "Buttons", path: "/buttons" },
    { label: "Dropdown", path: "/dropdown" },
    { label: "Modal", path: "/modal" }
  ]

  const renderedLinks = links.map((item) => {
    return (
      <Link key={item.label} to={item.path}>
        {item.label}
      </Link>
    )
  })

  return (
    <div className="flex flex-col px-2 overflow-y-scroll border-2 shrink-0">
      {renderedLinks}
    </div>
  )
}

export default SideBar
