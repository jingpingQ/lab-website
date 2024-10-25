import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isTeamDropdownOpen, setIsTeamDropdownOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    // 处理菜单的开关
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // 关闭所有菜单
    const closeMenu = () => {
        setIsMenuOpen(false);
        setIsDropdownOpen(false);
        setIsTeamDropdownOpen(false);
    };

    // 滚动到指定部分，并关闭菜单
    const scrollToSection = (id) => {
        closeMenu(); // 滚动后关闭菜单
        if (location.pathname === '/team') {
            window.location.href = `/#${id}`;
        } else {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    // 切换下拉菜单的显示状态
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const toggleTeamDropdown = () => {
        setIsTeamDropdownOpen(!isTeamDropdownOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="menu-icon" onClick={toggleMenu}>
                    <i className={isMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                <ul className={isMenuOpen ? "navbar-list active" : "navbar-list"}>
                    <li onClick={closeMenu}>
                        <a href="/#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a>
                    </li>
                    <li onClick={closeMenu}>
                        <a href="/#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a>
                    </li>
                    <li className="project-dropdown">
                        <a
                            href="/#project"
                            onClick={(e) => {
                                e.preventDefault();
                                toggleDropdown();
                            }}
                        >
                            Project
                        </a>
                        <ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
                            <li onClick={() => { scrollToSection('tool'); closeMenu(); }}>Tools</li>
                            <li onClick={() => { scrollToSection('research'); closeMenu(); }}>Research</li>
                        </ul>
                    </li>
                    <li className="team-dropdown">
                        <Link
                            to="/team"
                            onClick={() => {
                                closeMenu(); // 确保在点击时关闭菜单
                            }}
                        >
                            Team
                        </Link>
                        <ul className={`dropdown-menu ${isTeamDropdownOpen ? 'show' : ''}`}>
                            {/* 可以在这里添加团队成员或分类 */}
                        </ul>
                    </li>
                    <li onClick={closeMenu}>
                        <a href="/#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
