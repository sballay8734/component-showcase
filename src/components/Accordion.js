import { useState } from "react"

function Accordion({ items }) {
  const [currentIndex, setCurrentIndex] = useState(-1)

  function handleClick(index) {
    if (index === currentIndex) {
      setCurrentIndex(-1)
    } else {
      setCurrentIndex(index)
    }
  }

  const renderedItems = items.map((item, index) => {
    const isShown = currentIndex === index

    return (
      <div key={item.content}>
        <h1
          onClick={() => handleClick(index)}
          className="cursor-pointer bg-red-800 text-white p-2 hover:bg-red-300 hover:text-black active:bg-slate-200 flex justify-between"
        >
          {item.header}
          <span>{isShown ? "-" : "+"}</span>
        </h1>
        {isShown && (
          <p className="p-2 max-h-32 overflow-y-scroll">{item.content}</p>
        )}
      </div>
    )
  })
  return <div className="border-2 border-black rounded">{renderedItems}</div>
}

export default Accordion
