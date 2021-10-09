import Image from 'next/image'
import { Batman,Twitter, Linkedin} from '/public/assets'

export const Header = () => {
    return(
        <nav class="navbar is-black" role="navigation" aria-label="main navigation" >
        <div class="navbar-brand">
            <div class="navbar-item " >
            <Image src={`${Batman}`} width="100" height="50" />  
            
            </div>

            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
            <a class="navbar-item text" href="/Home">
                Home
            </a>
            <a class="navbar-item text" href="/Repositorie">
                Public Repositories
            </a>

            <a class="navbar-item" href='/About'>
                About
            </a>
            </div>
        </div>

        <div >
            <a href="https://twitter.com/gabrielaraamoss"><Image src={`${Twitter}`} width="30" height="30" /></a>
            <a href="https://www.linkedin.com/in/gabriela-ramos-74b98a15a/"><Image src={`${Linkedin}`} width="30" height="30"/></a>
        </div>
        </nav>
    )
}
