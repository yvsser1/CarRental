import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Logo from '../../assets/logo.png'

import './index.scss'
export class Footer extends Component {
  render() {
    return (
      <footer>
        <Container>
          <Row>
            <Col sm={12} md={4}>
              <img src={Logo} alt='logo' />
            </Col>
            <Col sm={12} md={4}>
              <p>ABOUT US</p>
              <ul>
                <li>+212-665753465</li>
                <li>yasserdalouzi@gmail.com</li>
                <li>17 Angle Boulevard Abdelmoumen, Casablanca</li>
              </ul>
            </Col>
            <Col sm={12} md={4}>
              <p>QUICK LINKS</p>
              <ul>
                <li><Link to="/">About Us</Link></li>
                <li><Link to="/">Our Cars</Link></li>
                <li><Link to="/">Blog</Link></li>
              </ul>
            </Col>
          </Row>
        </Container>
        <div className='footer-copyright'>
          <Container>
            <p>&nbsp; 2019 Rent Car . All rights reserved</p>
          </Container>
        </div>
      </footer>
    )
  }
}

export default Footer