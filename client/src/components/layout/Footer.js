import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

// Components
import Logo from './Logo';

class Footer extends Component {
  render() {
    return (
      <div className='footer bg-dark text-white'>
        <div className='pl-4 pr-4 pt-2 pb-2'>
          <div className='row'>
            <div className='col-md-6'>
              <div className='m-auto p-5  border-right border-success'>
                <div className='row'>
                  <div className='col'>
                    <div className='row'>
                      <div className='col-3'>
                        <div className='p-2'>
                          <Logo />
                        </div>
                      </div>
                      <div className='col'>
                        <div className='text-center text-white font-weight-bold broder-top broder-success pt-4'>
                          <p>Copyright &copy; {new Date().getFullYear()} Savin Raul-Calin</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='row'>
                <div className='col'>
                  <div className='navbar float-left navbar-expand'>
                    <ul className="navbar-nav ml-auto mr-5">
                      <li className="nav-item mr-3 mt-3">
                        <NavLink 
                          exact to='/home' 
                          className='nav-link'
                          activeClassName="active"
                        ><span>Home</span></NavLink>
                      </li>
                      <li className="nav-item mr-3 mt-3">
                        <NavLink 
                          exact to='/about' 
                          className='nav-link'
                          activeClassName="active"
                        ><span>About</span></NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col'>
                  <div className='text-center m-auto'>
                    <div className='row'>
                      <div className='col'>
                        <h5 className='float-left'>Contact Us</h5>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-3'>
                        <p className='float-left ml-3 mb-0'><i className="far fa-2x fa-address-card"></i></p>
                      </div>
                      <div className='col'>
                        <span className='ml-2 mr-2'>
                          <NavLink to={'/'} target='_blank'>
                            <i className='m-2 fab fa-facebook-f fa-1x'></i>
                          </NavLink>
                        </span>
                        <span className='ml-2 mr-2'>
                          <NavLink to={'/'} target='_blank'>
                            <i className='m-2 fab fa-twitter fa-1x'></i>
                          </NavLink>
                        </span>
                        <span className='ml-2 mr-2'>
                          <NavLink to={'/'} target='_blank'>
                            <i className='m-2 fab fa-instagram fa-1x'></i>
                          </NavLink>
                        </span>
                        <span className='ml-2 mr-2'>
                          <NavLink to={'/'} target='_blank'>
                            <i className='m-2 fab fa-linkedin-in fa-1x'></i>
                          </NavLink>
                        </span>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-3'>
                        <p className='float-left ml-3'><i className="fas fa-2x fa-mobile-alt"></i></p>
                      </div>
                      <div className='col'>
                        <p className='m-0'>555-555-5555</p>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-3'>
                        <p className='float-left ml-3'><i className="far fa-2x fa-envelope"></i></p>
                      </div>
                      <div className='col'>
                        <p className='m-0'>Test@email.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer;