import React, { Component } from "react"
import './index.css';
import './App.css';
import * as styles from './Home.module.css'
import { navigate } from "gatsby";

import Typed from "typed.js"

import Nav from "../components/Nav"
import Links from "../components/Links"

import { Helmet } from "react-helmet"

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      bgcolor: "#000",
      hidden: false
    }


    this.links = [
      {
        title: 'Apple Music',
        link: '/',

        backcolor: "rgb(255, 174, 213, 0.1)",
        txtcolor: "white",
      },
      {
        title: 'Twitch',
        link: '/',

        backcolor: "rgb(255, 174, 213, 0.1)",
        txtcolor: "white",
      },
      {
        title: 'Events',
        link: '/',

        backcolor: "rgb(255, 174, 213, 0.1)",
        txtcolor: "white",
      },
      {
        title: 'Youtube',
        link: '/',

        backcolor: "rgb(255, 174, 213, 0.1)",
        txtcolor: "white",
      },

    ]

    this.showDates = [
      "Loading ...",
    ]

  }
  componentDidMount() {
    /** 
    var typed = new Typed('#region', {
      strings: this.showDates,
      typeSpeed: 50,
      backSpeed: 20,
      backDelay: 2000,
      loop: true,

    });
**/
    this.setState({ bgcolor: "#FFF" })
  }

  logoClick() {

    this.setState({ hidden: !this.state.hidden })
    console.log("click")
  }

  render() {
    const style = {
      backgroundColor: this.state.hidden ? "#000" : this.state.bgcolor,
      backgroundBlendMode: this.state.hidden ? "color-dodge" : "normal",
    }

    return (
      <><Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Darker+Grotesque:wght@900&display=swap" rel="stylesheet" />
        <link rel="apple-touch-icon" sizes="180x180" href="../images/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="../images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="../images/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="../images/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="theme-color" content="#ffffff" />
        <title>Home | GIO</title>
      </Helmet>
        <center className={styles.bg}>

          <Links Links={this.links} />

            <div className={styles.footer}>
              GIO | ALL RIGHTS RESERVED.
            </div>
        </center>
      </>
    )
  }
}
