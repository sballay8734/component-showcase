import { useState } from "react"

function Dropdown({ items }) {
  const [selectedItem, setSelectedItem] = useState("Select Item...")
  const [isOpen, setIsOpen] = useState(false)

  function handleClick() {
    setIsOpen(!isOpen)
  }

  function handleSelect(item) {
    setSelectedItem(item)
    setIsOpen(false)
  }

  const renderedItems = items.map((item, index) => {
    if (item === selectedItem) {
      return null
    } else {
      return (
        <div key={index}>
          <div
            onClick={() => handleSelect(item)}
            className="cursor-pointer hover:bg-slate-200 px-1"
          >
            {item}
          </div>
        </div>
      )
    }
  })

  return (
    <div className="border-2 border-black w-32">
      <div
        className="bg-black text-white cursor-pointer px-1 flex justify-between"
        onClick={handleClick}
      >
        {selectedItem} <span>{isOpen ? "-" : "+"}</span>
      </div>
      <div>{isOpen && renderedItems}</div>
    </div>
  )
}

export default Dropdown
