import Button from "../components/Button"

function ButtonPage() {
  return (
    <div className="flex gap-2 p-4 shadow-md rounded">
      {/* Rounded Column */}
      <div className="flex flex-col gap-2">
        <Button red bold rounded className="border-2 border-white">
          Click Me
        </Button>
        <Button orange bold roundedMD className="border-2 border-white">
          Click Me
        </Button>
        <Button yellow bold roundedLG className="border-2 border-white">
          Click Me
        </Button>
        <Button green bold roundedFull className="border-2 border-white">
          Click Me
        </Button>
        <Button blue bold rounded className="border-2 border-white">
          Click Me
        </Button>
        <Button indigo bold rounded className="border-2 border-white">
          Click Me
        </Button>
        <Button violet bold rounded className="border-2 border-white">
          Click Me
        </Button>
      </div>
      {/* Square Column */}
      <div className="flex flex-col gap-2">
        <Button red bold className="border-2 border-white">
          Click Me
        </Button>
        <Button orange bold className="border-2 border-white">
          Click Me
        </Button>
        <Button yellow bold className="border-2 border-white">
          Click Me
        </Button>
        <Button green bold className="border-2 border-white">
          Click Me
        </Button>
        <Button blue bold className="border-2 border-white">
          Click Me
        </Button>
        <Button indigo bold className="border-2 border-white">
          Click Me
        </Button>
        <Button violet bold className="border-2 border-white">
          Click Me
        </Button>
      </div>
      {/* Rounded Outline Column*/}
      <div className="flex flex-col gap-2">
        <Button red bold outline rounded>
          Click Me
        </Button>
        <Button orange bold outline roundedMd>
          Click Me
        </Button>
        <Button yellow bold outline roundedLG>
          Click Me
        </Button>
        <Button green bold outline roundedFull>
          Click Me
        </Button>
        <Button blue bold outline rounded>
          Click Me
        </Button>
        <Button indigo bold outline rounded>
          Click Me
        </Button>
        <Button violet bold outline rounded>
          Click Me
        </Button>
      </div>
      {/* Square Outline Column */}
      <div className="flex flex-col gap-2">
        <Button red bold outline>
          Click Me
        </Button>
        <Button orange bold outline>
          Click Me
        </Button>
        <Button yellow bold outline>
          Click Me
        </Button>
        <Button green bold outline>
          Click Me
        </Button>
        <Button blue bold outline>
          Click Me
        </Button>
        <Button indigo bold outline>
          Click Me
        </Button>
        <Button violet bold outline>
          Click Me
        </Button>
      </div>
    </div>
  )
}

export default ButtonPage
