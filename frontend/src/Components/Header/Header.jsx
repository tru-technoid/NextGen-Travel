import React,{useRef, useEffect, useContext} from 'react'
import {Container, Row, Button} from 'reactstrap'
import {NavLink, Link, useNavigate} from 'react-router-dom'
import logo from "../../assets/images/logo.png"
import './Header.css'
import { AuthContext } from '../../context/AuthContext'

const nav_links =[
  {
    path: "/home",
    display: "Home"
  },

  {
    path: "/about",
    display: "About"
  },

  {
    path: "/tours",
    display: "Tours"
  },

];

const Header = () => {

  const headerRef = useRef(null)
  const menuRef = useRef(null)
  const navigate = useNavigate();
  const {user, dispatch} = useContext(AuthContext);

  const logout = () => {
    dispatch({type: 'LOGOUT'})
    navigate('/')
  }

  const myProfileGo = () => {
    navigate('/MyProfile')
  }

  const stickyHeaderFunc = () =>{
    window.addEventListener('scroll', ()=>{
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        headerRef.current.classList.add('sticky_header')
      }
      else{
        headerRef.current.classList.remove('sticky_header')
      }
    })
  }

  useEffect(()=>{
    stickyHeaderFunc()

    return window.removeEventListener('scroll', stickyHeaderFunc)
  })

  const toggleMenu = ()=> menuRef.current.classList.toggle('show_menu')

  return (
    <header className='header' ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper d-flex align-items-center justify-content-between">
          {/* -------------- logo start ------------- */}
          <div className="logo">
            <img src={logo}  alt="" />
          </div>
          {/* -------------- logo end -------------*/}

          {/* -------------- menu start -------------*/}
            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <ul className="menu d-flex align-items-center gap-5">
                {
                  nav_links.map((item,index) => (
                    <li className="nav_items" key={index}>
                      <NavLink to={item.path} className={navClass => 
                      navClass.isActive ? 'active_link' : ''}>{item.display}</NavLink>
                    </li>
                  ))
                }
              </ul>
            </div>

          {/* -------------- menu end -------------*/}
            <div className="nav__right d-flex align-items-center gap-4">
              <div className="nav__btns d-flex align-items-center gap-4">
                {
                  user?<>
                      <Button className='btn btn-dark' onClick={myProfileGo}>{user.username}</Button>
                      <Button className='btn btn-dark' onClick={logout}>Logout</Button>
                  </> :
                  <>
                    <Button className="btn secondary__btn"> 
                      <Link to="/Login"> Login </Link> 
                    </Button>
                    <Button className="btn primary__btn"> 
                      <Link to="/Register"> Register </Link> 
                    </Button>
                  </>
                } 
              </div>

              <span className="mobile_menu" onClick={toggleMenu}>
                <i class="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
