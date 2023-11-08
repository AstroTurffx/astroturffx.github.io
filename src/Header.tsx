import './Header.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub, faTwitter} from "@fortawesome/free-brands-svg-icons";
import {faBars} from "@fortawesome/free-solid-svg-icons";

function Header() {
    return (
        <header>
            <a href="#" className="logo">Kevin Chen</a>
            <ul>
                <li><a href="#"><FontAwesomeIcon className={"icon"} size={"lg"} icon={faGithub }/></a></li>
                <li><a href="#"><FontAwesomeIcon className={"icon"} size={"lg"} icon={faTwitter}/></a></li>
                <li><a href="#"><FontAwesomeIcon className={"icon"} size={"lg"} icon={faBars   }/></a></li>
            </ul>
        </header>
    )
}
export default Header
