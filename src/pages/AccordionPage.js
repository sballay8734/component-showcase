import Accordion from "../components/Accordion"

function AccordionPage() {
  const items = [
    {
      header: "Who are we?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      header: "What do we do?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices neque ornare aenean euismod elementum nisi quis eleifend. Amet cursus sit amet dictum. Faucibus pulvinar elementum integer enim neque volutpat ac tincidunt. Tristique senectus et netus et malesuada fames. Dictumst quisque sagittis purus sit amet volutpat. Auctor eu augue ut lectus. Tortor consequat id porta nibh. At imperdiet dui accumsan sit amet nulla. Vitae auctor eu augue ut lectus arcu bibendum at. Venenatis tellus in metus vulputate eu scelerisque felis. Cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla. Sit amet mattis vulputate enim nulla aliquet porttitor lacus. Lacus sed turpis tincidunt id aliquet. Placerat duis ultricies lacus sed turpis tincidunt id aliquet risus. Mattis rhoncus urna neque viverra justo nec. Facilisi morbi tempus iaculis urna id. Lectus magna fringilla urna porttitor rhoncus dolor purus. Aliquam etiam erat velit scelerisque in dictum non consectetur a. Turpis in eu mi bibendum neque egestas congue."
    },
    {
      header: "Why do we do it?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque id nibh tortor id aliquet lectus proin. Cursus euismod quis viverra nibh cras pulvinar mattis nunc. Mattis vulputate enim nulla aliquet porttitor. Ullamcorper sit amet risus nullam eget felis eget nunc. Amet dictum sit amet justo donec enim diam. Ac turpis egestas sed tempus urna et pharetra. Mattis molestie a iaculis at. Elementum eu facilisis sed odio morbi quis commodo. Nec feugiat nisl pretium fusce. Pharetra magna ac placerat vestibulum."
    }
  ]
  return (
    <div className="w-4/5 shadow-md">
      <Accordion items={items} />
    </div>
  )
}

export default AccordionPage
