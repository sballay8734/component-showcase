import classNames from "classnames"

function Button({ children, className, ...rest }) {
  const finalClassName = classNames(
    // default classes
    "px-2 py-1",

    // className is last to allow full customization/overwriting ability
    className,

    // prop classes
    {
      rounded: rest.rounded,
      "rounded-md": rest.roundedMD,
      "rounded-lg": rest.roundedLG,
      "rounded-full": rest.roundedFull,
      "border-2 border-black": rest.outline,
      "font-bold": rest.bold,

      "bg-red-300 hover:bg-red-400 active:bg-red-500": rest.red,
      "bg-orange-300 hover:bg-orange-400 active:bg-orange-500": rest.orange,
      "bg-yellow-300 hover:bg-yellow-400 active:bg-yellow-500": rest.yellow,
      "bg-lime-300 hover:bg-lime-400 active:bg-lime-500": rest.lime,
      "bg-green-300 hover:bg-green-400 active:bg-green-500": rest.green,
      "bg-blue-300 hover:bg-blue-400 active:bg-blue-500": rest.blue,
      "bg-indigo-300 hover:bg-indigo-400 active:bg-indigo-500": rest.indigo,
      "bg-violet-300 hover:bg-violet-400 active:bg-violet-500": rest.violet
    }
  )

  return <button className={finalClassName}>{children}</button>
}

export default Button
