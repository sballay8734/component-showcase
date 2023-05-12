import Route from "./components/Route"
import SideBar from "./components/Sidebar"

import AccordionPage from "./pages/AccordionPage"
import ButtonPage from "./pages/ButtonPage"
import DropdownPage from "./pages/DropdownPage"
import ModalPage from "./pages/ModalPage"

function App() {
  return (
    <div className="App flex items-center h-screen w-screen">
      <SideBar />
      {/* Routes */}
      <div className="flex justify-center w-full">
        <Route path="/accordion">
          <AccordionPage />
        </Route>
        <Route path="/buttons">
          <ButtonPage />
        </Route>
        <Route path="/dropdown">
          <DropdownPage />
        </Route>
        <Route path="/modal">
          <ModalPage />
        </Route>
      </div>
    </div>
  )
}

export default App
