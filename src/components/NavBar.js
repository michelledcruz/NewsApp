import React, { Component } from 'react';
import {  Link } from 'react-router-dom';
// import logo from '/src/Daily_Digest.png';

export class NavBar extends Component {
 
  render() {
    return (
        <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container">
                {/* <Link  className="navbar-brand text-light" to="#">DailyDigest</Link > */}
                <Link  class="navbar-brand" to="#">
                <img src="/Daily_Digest.png" alt="" width="60" height="60"/>
                </Link >
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link active text-light" aria-current="page" to="/general">World</Link >
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-light" to="/us">US</Link >
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-light" to="#">Politics</Link >
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-light" to="#">Sports</Link >
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-light " to="/health" reloadDocument>Health</Link >
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-light" to="/entertainment" reloadDocument>Entertainment</Link >
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-light" to="#">Style</Link >
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-light" to="#">Travel</Link >
                    </li>
                    </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                </div>
            </div>
        </nav>
      </div>
      <div>
        <nav className="navbar navbar-expand-lg trending-topics">
            <div className="container">
                {/* <Link  className="navbar-brand text-light" to="#">DailyDigest</Link > */}

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link  className="nav-link active text-light" aria-current="page" to="#">Russia</Link >
                    </li>
                    <li className="nav-item">
                        <Link  className="nav-link text-dark" to="#">Trump</Link >
                    </li>
                    <li className="nav-item">
                        <Link  className="nav-link text-dark" to="#">Women's World Cup</Link >
                    </li>
                    <li className="nav-item">
                        <Link  className="nav-link text-dark" to="#">India Shooting</Link >
                    </li>
                    <li className="nav-item">
                        <Link  className="nav-link text-dark" to="#">Cardi B</Link >
                    </li>
                    <li className="nav-item">
                        <Link  className="nav-link text-dark" to="#">Entertainment</Link >
                    </li>
                    <li className="nav-item">
                        <Link  className="nav-link text-dark" to="#">Style</Link >
                    </li>
                    <li className="nav-item">
                        <Link  className="nav-link text-dark" to="#">Travel</Link >
                    </li>
                    </ul>
                </div>
            </div>
        </nav>
      </div>
      </>
    )
  }
}

export default NavBar
