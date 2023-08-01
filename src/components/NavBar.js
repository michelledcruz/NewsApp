import React, { Component } from 'react'
// import logo from '/src/Daily_Digest.png';

export class NavBar extends Component {
 
  render() {
    return (
        <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container">
                {/* <a className="navbar-brand text-light" href="#">DailyDigest</a> */}
                <a class="navbar-brand" href="#">
                <img src="/Daily_Digest.png" alt="" width="60" height="60"/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active text-light" aria-current="page" href="#">World</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light" href="#">US</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light" href="#">Politics</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light" href="#">Sports</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light " href="#">Health</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light" href="#">Entertainment</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light" href="#">Style</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light" href="#">Travel</a>
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
                {/* <a className="navbar-brand text-light" href="#">DailyDigest</a> */}

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active text-light" aria-current="page" href="#">Russia</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-dark" href="#">Trump</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-dark" href="#">Women's World Cup</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-dark" href="#">India Shooting</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-dark" href="#">Cardi B</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-dark" href="#">Entertainment</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-dark" href="#">Style</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-dark" href="#">Travel</a>
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
