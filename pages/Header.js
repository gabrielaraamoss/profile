import Image from 'next/image'
import { Batman,Twitter, Linkedin,Vsco} from '/public/assets'

export const Header = () => {
    return(
        <nav className="navbar is-black navbar-brand" role="navigation" aria-label="main navigation" >
        <div className="navbar-brand">
            <div className="navbar-item " >
            <Image src={`${Batman}`} width="100" height="50" />  
            
            </div>

            <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
            <a className="navbar-item text" href="/Home">
                Home
            </a>
            <a className="navbar-item text" href="/Repositorie">
                Public Repositories
            </a>

            <a className="navbar-item" href='/About'>
                About
            </a>
            </div>
        </div>

            <div className="navbar-item" >
                <a href="https://twitter.com/gabrielaraamoss" ><span className="icon is-medium"><Image src={`${Twitter}`} width="30" height="30"  /></span></a>
            </div>
        
            <div className="navbar-item" >
                <a href="https://www.linkedin.com/in/gabriela-ramos-74b98a15a/"><span className="icon is-medium"><Image src={`${Linkedin}`} width="30" height="30"/></span></a>
            </div>

        </nav>
    )
}
