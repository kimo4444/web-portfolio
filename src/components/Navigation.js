import React from 'react';
import Contact from './Contact';
import {Link} from 'react-router-dom';
import classNames from 'classnames';




export default class Navigation extends React.Component  {
  state = {
    isMenuOpen:false,
    description:'user-centered'

  }
  onMenuOpen = () => {
    this.setState((prevState) => ({isMenuOpen:!prevState.isMenuOpen}));

  }
  // componentDidMount = () => {
  //    window.addEventListener('load', this.handleLoad);
  // }
  handleLoad = () => {
    var text = ['user-centered', 'responsive', 'fast'];
    var counter = 0;
    var timesRun = 0;
    var elem = document.getElementById("changeText");
    var s = setInterval(() => {
      var word = text[counter];
        counter++;
        timesRun += 1;
        if (counter >= text.length) {
          counter = 0;
        }

    //     if(timesRun === 6){
    //       word='';
    //       clearInterval(s);
    //
    // }
        this.setState(() => ({description:word}));

 }, 1500);

}

  render(){
    var menuClass = classNames({
      'menu-open': this.state.isMenuOpen,
      'menu-icon': true
    });
    var overlayClass = classNames({
      'menu__overlay': this.state.isMenuOpen,
    });
    var slideClass= classNames ({
      'menu__items': this.state.isMenuOpen
    });

  return (

      <div className = 'nav' >

        <h1 className = 'nav__intro' >
            <span>Hi there, I am Olga,<br/> a NYC  based fullstack <br/>web developer.<br/>
            </span>
        </h1>

        <div className={menuClass} onClick = {this.onMenuOpen} >
          <div className='bar1'></div>
          <div className='bar2'></div>
          <div className='bar3'></div>
        </div>
        <div className={overlayClass}>
          <div className = 'menu__items'>
            <Link className = 'menu__item' to = '/'>HOME</Link>
            <Link className = 'menu__item' to = '/about'>ABOUT</Link>
            <Link className = 'menu__item' to = '/contact'>CONTACT</Link>
          </div>
        </div>

        </div>


    )
}
}
