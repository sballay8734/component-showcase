import useNavigation from "../hooks/useNavigation"

function Link({ to, children }) {
  const { navigate } = useNavigation()

  function handleClick(e) {
    e.preventDefault()

    navigate(to)
  }
  return (
    <a className="hover:text-slate-500" onClick={handleClick} href={to}>
      {children}
    </a>
  )
}

export default Link
