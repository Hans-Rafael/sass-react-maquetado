import { useContext } from 'react'
import { GlobalContext } from './../../provider/Provider'
import './Header.scss'

export const Header = () => {
    return(
        <header className="Header">
            <div className="Wrapper">
                <Logo />
                <Hamburger />
                <Nav  />
                <Rrss />
            </div>
        </header>
    )
}

const Logo = () => {
    return (
        <h1 className="Header-h1">
            <a href="#" title="Avatar" className="Header-logo">
                <img src="assets/brand/logo.png" alt="Avatar" className="Header-img" />
            </a>
        </h1>
    )
}
const Nav  = () => {

    const { header } = useContext(GlobalContext)
    const { menu } = header 

    return (
        <nav className="Header-nav">
            <ul className="Header-ul">
                { menu.map( ({ id , title , href }) => 
                <li 
                    key={ id }
                    className="Header-li">
                    <a 
                        href={href}
                        title={ title } 
                        className={`Header-a ${ title === 'Home' ? 'isActive' : '' }`}>
                        { title }
                    </a>
                </li>
                ) }
            </ul>
        </nav>
    )
}
const Rrss = () => {
    const { header } = useContext(GlobalContext)
    const { rrss } = header 
    return (
        <ul className="Header-rrss">
            { rrss.map( ({ id , title , href , icono })=>
            <li key={ id } className="Header-li">
                <a className="Header-rs" href={ href } title={ title }>
                    <Icono clase="Header-social" nombre={ icono }/>
                </a>
            </li>
        )}
        </ul>
    )
}
const Hamburger = () => {
    return (
        <button className="Header-btn">
            <img className="Header-svg" src="/assets/icons/hamburger.svg" alt="menu" />
        </button>
    )
}

const Icono = ({ nombre, clase = "" }) => {
    return (
      <>
        {nombre === "facebook" && (
          <svg
            className={clase}
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z"
              fill="#015CA1"
            />
            <path
              fill-rule="evenodd"
              d="M14.125 28V19.5633H11.0781V16.0733H14.125V13.4134C14.125 10.3875 15.9165 8.71613 18.6576 8.71613C19.9705 8.71613 21.3438 8.95193 21.3438 8.95193V11.9231H19.8306C18.3399 11.9231 17.875 12.8538 17.875 13.8086V16.0733H21.2031L20.6711 19.5633H17.875V28C16 28 17 28 14.125 28Z"
              fill="#F5F7FA"
            />
          </svg>
        )}
        {nombre === "twitter" && (
          <svg
            className={clase}
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z"
              fill="#015CA1"
            />
            <path
              d="M23 12.3008C22.4789 12.5188 21.9267 12.6692 21.3433 12.7368C21.9345 12.391 22.3934 11.8571 22.6033 11.203C22.0589 11.5263 21.4445 11.7519 20.7912 11.8797C20.2623 11.3383 19.5156 11 18.6911 11C17.1045 11 15.8211 12.2481 15.8211 13.7745C15.8211 13.9925 15.8366 14.203 15.8912 14.406C13.5034 14.2932 11.3955 13.188 9.9722 11.5038C9.72329 11.9173 9.58334 12.391 9.58334 12.9098C9.58334 13.8722 10.0967 14.7218 10.8589 15.2181C10.3922 15.2031 9.94109 15.0752 9.55992 14.8722C9.55992 14.8797 9.55992 14.8947 9.55992 14.9022C9.55992 16.2481 10.5555 17.3684 11.8622 17.6316C11.6289 17.6917 11.3722 17.7218 11.1078 17.7218C10.9211 17.7218 10.7422 17.7143 10.5633 17.6767C10.9366 18.7745 11.9944 19.5864 13.2467 19.609C12.2667 20.3459 11.0299 20.7895 9.68437 20.7895C9.45108 20.7895 9.22548 20.7819 9 20.7519C10.2677 21.5414 11.7766 22 13.4022 22C18.6833 22 21.5689 17.7669 21.5689 14.1053C21.5689 13.985 21.5611 13.8647 21.5611 13.7444C22.1289 13.3534 22.6111 12.8647 23 12.3008Z"
              fill="#F5F7FA"
            />
          </svg>
        )}
        {nombre === "instagram" && (
          <svg
            className={clase}
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z"
              fill="#015CA1"
            />
            <path
              d="M18.9568 9C21.1821 9 22.9896 10.8075 23 13.0433V18.9568C23 21.1925 21.1821 23 18.9568 23H13.0434C10.8075 23 9 21.1821 9 18.9568V13.0433C9 10.8075 10.8075 9 13.0434 9H18.9568ZM19.0194 10.3164H12.9702C11.4866 10.3164 10.2851 11.5179 10.2851 13.0015V19.0611C10.2851 20.5448 11.4866 21.7463 12.9702 21.7463H19.0194C20.503 21.7463 21.7045 20.5448 21.7045 19.0611V13.0015C21.7045 11.5179 20.503 10.3164 19.0194 10.3164ZM16 12.2308C18.0856 12.2308 19.7692 13.9253 19.7692 16C19.7692 18.0747 18.0856 19.7692 16 19.7692C13.9253 19.7692 12.2308 18.0856 12.2308 16C12.2308 13.9253 13.9144 12.2308 16 12.2308ZM16 13.6103C14.6423 13.6103 13.5559 14.7074 13.5559 16.0543C13.5559 17.4013 14.653 18.4984 16 18.4984C17.347 18.4984 18.4441 17.4013 18.4441 16.0543C18.4441 14.7074 17.3579 13.6103 16 13.6103ZM19.7692 11.1538C20.3675 11.1538 20.8462 11.6325 20.8462 12.2308C20.8462 12.829 20.3542 13.3077 19.7692 13.3077C19.1709 13.3077 18.6923 12.829 18.6923 12.2308C18.6923 11.6325 19.1709 11.1538 19.7692 11.1538Z"
              fill="#F5F7FA"
            />
          </svg>
        )}
        {nombre === "youtube" && (
          <svg
            className={clase}
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z"
              fill="#015CA1"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M22.7031 12.0202C22.2851 11.2782 21.8321 11.1433 20.9111 11.0843C19.9891 11.0253 17.6768 11 15.68 11C13.6746 11 11.3621 11.0253 10.4405 11.0843C9.5189 11.1349 9.0666 11.2698 8.6485 12.0202C8.2218 12.7621 8 14.0436 8 16.2947C8 18.5373 8.2218 19.8273 8.6485 20.5608C9.0666 21.3027 9.5189 21.4376 10.4405 21.505C11.3621 21.5556 13.6746 21.5893 15.68 21.5893C17.6853 21.5893 19.9981 21.5556 20.9111 21.505C21.8321 21.446 22.2851 21.3111 22.7031 20.5608C23.1381 19.8273 23.3511 18.5373 23.3511 16.2947C23.3511 16.2947 23.3511 16.2947 23.3511 16.2863C23.3511 14.0436 23.1381 12.7621 22.7031 12.0202ZM14.1525 19.0685V13.504L18.5045 16.2947L14.1525 19.0685Z"
              fill="#F5F7FA"
            />
          </svg>
        )}
      </>
    );
  };