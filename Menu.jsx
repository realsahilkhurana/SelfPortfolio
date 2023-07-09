import "./menu.scss"

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu "+(menuOpen && "active")}>
        <ul>
            <li onClick={()=>setMenuOpen(false)}>
                <a href = "#intro" className="abc">Home</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href = "#portfolio" className="abc">Portfolio</a>
            </li><li onClick={()=>setMenuOpen(false)}>
                <a href = "#works" className="abc">Works</a>
            </li><li onClick={()=>setMenuOpen(false)}>
            <a href="#intro" className="abc">INTRO PAGE</a>
            </li><li onClick={()=>setMenuOpen(false)}>
            <a href = "#contact" className="abc">Contact</a>
            </li>
        </ul>
    </div>
  )
}
