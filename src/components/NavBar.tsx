import { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { BrowserRouter as Router } from 'react-router-dom';

import CoinbaseWalletSDK from '@coinbase/wallet-sdk';
import { ethers } from 'ethers';
import Web3Modal from 'web3modal';

const providerOptions = {
  walletlink: {
    package: CoinbaseWalletSDK, // Required
    options: {
      rpc: 'https://ropsten.infura.io/v3/', // Required unless you provide a JSON RPC url; see `rpc` below
    },
  },
};
let web3Modal: any;
if (typeof window !== 'undefined') {
  web3Modal = new Web3Modal({
    cacheProvider: false,
    providerOptions, // required
  });
}
export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const connectWallet = async () => {
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    console.log(provider);
  };

  const onUpdateActiveLink = (value: string) => {
    setActiveLink(value);
  };

  return (
    <Router>
      <Navbar expand='md' className={scrolled ? 'scrolled' : ''}>
        <Container>
          <Navbar.Brand href='/'>
            <img src={logo} alt='Logo' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav'>
            <span className='navbar-toggler-icon'></span>
          </Navbar.Toggle>
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <Nav.Link
                href='#home'
                className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateActiveLink('home')}>
                Home
              </Nav.Link>
              <Nav.Link
                href='#skills'
                className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateActiveLink('skills')}>
                Skills
              </Nav.Link>
              <Nav.Link
                href='#projects'
                className={
                  activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'
                }
                onClick={() => onUpdateActiveLink('projects')}>
                Projects
              </Nav.Link>
            </Nav>
            <span className='navbar-text'>
              <div className='social-icon'>
                <a href='#'>
                  <img src={navIcon1} alt='' />
                </a>
                <a href='#'>
                  <img src={navIcon2} alt='' />
                </a>
                <a href='#'>
                  <img src={navIcon3} alt='' />
                </a>
              </div>
              <button className='vvd' onClick={connectWallet}>
                <span>Connect</span>
              </button>
              {/* <HashLink to='#connect'></HashLink> */}
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};
