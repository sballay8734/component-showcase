import Dropdown from "../components/Dropdown"

function DropdownPage() {
  const items = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]

  return (
    <div>
      <Dropdown items={items} />
    </div>
  )
}

export default DropdownPage
