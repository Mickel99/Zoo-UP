import { Nav } from './sections/nav_section/NavSection'
import { Outlet } from 'react-router-dom'
function App() {
  return (
    <>
      <header>
        <Nav></Nav>
      </header>
      <main className="App">
        <Outlet></Outlet>
      </main>
      
    </>
  )
}
export default App
