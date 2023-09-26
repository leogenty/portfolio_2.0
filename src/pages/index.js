import * as React from "react"
import '../styles/css/font.css'
//import Button from "./components/button"
import Menu from "./components/menu"

const mainPageStyle = {
    backgroundColor: "#232129",
    color: "#FFFFFF",
}

const navbarStyle = {
    padding: 28,
    backgroundColor: "#000000",
    color: "#FFFFFF",
    fontSize: 40,
    fontWeight: 100,
    letterSpacing: 30,
}

const MainPage = () => {
  return (
    <main style={mainPageStyle}>
      <div style={navbarStyle} className="flex items-center">
        <h1>LÉO GENTY</h1>
        <div className="flex-auto"></div>
        {/*<Button></Button>*/}
        <Menu></Menu>
      </div>

      <div></div>

      <h2>Home</h2>
    </main>
  )
}

export default MainPage

export const Head = () => <title>Léo Genty's portfolio</title>
