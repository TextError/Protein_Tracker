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
            <div className='col-md-6 p-0 m-auto'>
              <div className='m-auto p-5 border-right border-success'>
                <div className='row'>
                  <div className='col'>
                    <div className='row'>
                      <div className='col-3'>
                        <div className='p-2 text-center'>
                          <Logo />
                        </div>
                      </div>
                      <div className='col p-0 m-auto'>
                        <div className='text-white broder-top broder-success overflow-hidden'>
                          <div className='row footer-name'>
                            <div className='col-sm-6 p-0 pr-2'>
                              <span className='m-auto float-right'>Copyright &copy; {new Date().getFullYear()}</span>
                            </div>
                            <div className='col-sm-6 p-0'>
                              <span className='m-auto float-left'>Savin Raul-Calin</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-6 pl-5 pr-5'>
              <div className='row'>
                <div className='col col-md-6'>
                  <div className='m-auto pt-2 pr-2 pb-2'>
                    <NavLink 
                      exact to='/about' 
                      className='nav-link pl-0'
                      activeClassName="active">
                      <p className='m-0'>
                        About Us
                      </p>
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col'>
                  <div className='text-center m-auto'>
                    <div className='row'>
                      <div className='col'>
                        <p className='float-left border-bottom mb-3'>Contact Us</p>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-2 col-sm-3 p-0 mb-3 mt-3'>
                        <p className='mb-0 float-left ml-3'><i className="far fa-2x fa-address-card"></i></p>
                      </div>
                      <div className='col m-auto p-0'>
                        <span className='ml-2 mr-2'>
                          <NavLink to={'/'} target='_blank'>
                            <i className='social-border m-auto fab fa-facebook-f fa-1x'></i>
                          </NavLink>
                        </span>
                        <span className='ml-2 mr-2'>
                          <NavLink to={'/'} target='_blank'>
                            <i className='social-border fab fa-twitter fa-1x'></i>
                          </NavLink>
                        </span>
                        <span className='ml-2 mr-2'>
                          <NavLink to={'/'} target='_blank'>
                            <i className='social-border fab fa-instagram fa-1x'></i>
                          </NavLink>
                        </span>
                        <span className='ml-2 mr-2'>
                          <NavLink to={'/'} target='_blank'>
                            <i className='social-border fab fa-linkedin-in fa-1x'></i>
                          </NavLink>
                        </span>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-2 col-sm-3 p-0 mb-3 mt-3'>
                        <p className='mb-0 float-left ml-3'><i className="fas fa-2x fa-mobile-alt"></i></p>
                      </div>
                      <div className='col m-auto'>
                        <p className='m-0'>555-555-5555</p>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-2 col-sm-3 p-0 mb-3 mt-3'>
                        <p className='mb-0 float-left ml-3'><i className="far fa-2x fa-envelope"></i></p>
                      </div>
                      <div className='col m-auto'>
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