import { useRef } from "react";
import logo from '../../images/logo.svg'
import { Avatar } from "@mui/material"
import '../navBar/NavBar.scss'
const NavBar = ({children}) => {
    const toggleRef = useRef();

    const closeSwitch = () => {
        toggleRef.current.classList.toggle('active')
    }

    return(
        <>
        <div ref={toggleRef} className="sidebar">
            <div className="logo_content">
                <div className="logo">
                    <img src={logo}/>
                </div>
                <i onClick={closeSwitch} className="bx bx-menu" id="btn" ></i>
            </div>
            <ul className="nav_list">
                <li>
                        <i onClick={closeSwitch} className="bx bx-search" />
                        <input type="text" name=""placeholder="Поиск..."/>
                    <span className="tooltip">Поиск</span>
                </li>
                <li>
                    <a href="#">
                        <i className="bx bx-grid-alt" />
                        <span className="links_name">Панель</span>
                    </a>
                    <span className="tooltip">Панель</span>
                </li>
                <li>
                    <a href="#">
                        <i className="bx bx-user"/>
                        <span className="links_name">Пользователь</span>
                    </a>
                    <span className="tooltip">Пользователь</span>
                </li>
                <li>
                    <a href="#">
                        <i className="bx bx-chat"/>
                        <span className="links_name">Сообщения</span>
                    </a>
                    <span className="tooltip">Сообщения</span>
                </li>
                <li>
                    <a href="#">
                        <i className="bx bx-pie-chart-alt-2"/>
                        <span className="links_name">Аналитика</span>
                    </a>
                    <span className="tooltip">Аналитика</span>
                </li>
                <li>
                    <a href="#">
                        <i className="bx bx-folder" />
                        <span className="links_name">Файлы</span>
                    </a>
                    <span className="tooltip">Файлы</span>
                </li>
                <li>
                    <a href="#">
                        <i className="bx bx-cog" />
                        <span className="links_name">Настройки</span>
                    </a>
                    <span className="tooltip">Настройки</span>
                </li>
            </ul>
            <div className="profile_content">
                <div className="profile">
                    <div className="profile_details">
                        <Avatar className="avatar" sx={{ bgcolor: "#11101d" }}>ВЛ</Avatar>
                        <div className="name_job">
                            <div className="name">Владислав Лука</div>
                            <div className="job">Junior Backend</div>
                        </div>
                    </div>
                    <i className="bx bx-log-out" id="log_out"/>
                </div>
            </div>
        </div>
        <section className="home_section">
            {children}
        </section>
    </>
    )   
}

export default NavBar