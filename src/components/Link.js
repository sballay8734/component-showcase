import useNavigation from "../hooks/useNavigation"

function Link({ to, children }) {
  const { navigate, currentPath } = useNavigation()
  let newClass = "hover:text-slate-500 px-2"

  if (currentPath === to) {
    newClass += " font-bold border-l-2"
  }

  function handleClick(e) {
    e.preventDefault()

    navigate(to)
  }
  return (
    <a className={newClass} onClick={handleClick} href={to}>
      {children}
    </a>
  )
}

export default Link
