/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var CSSTransitionGroup = React.addons.CSSTransitionGroup;

var Reacticon = require('./reacticon');

// Export React so the devtools can find it
(window !== window.top ? window.top : window).React = React;

// CSS
require('../../styles/application.scss');
require('../../styles/reacticons.scss');

var Hero = React.createClass({
  render: function() {
    return (
      <header className="header">
        <div className="width-wrapper">
          <div className="header__title">
            <h1>Reacticons!</h1>
            <h2>Scalable file icons for ReactJS</h2>
          </div>
          <div className="header__examples">
            <CSSTransitionGroup transitionName="reacticon">
              <Reacticon
                key="1"
                height="100"
                type="text"
                label="doc"
                progress="50%"
                animate />
              <Reacticon
                key="2"
                height="100"
                type="table"
                primaryColor="#2ECC40"
                isProcessing
                animate />
              <Reacticon
                key="3"
                height="100"
                type="image"
                label="png"
                animate />
              <Reacticon
                key="4"
                height="100"
                type="code"
                label="html"
                animate />
              <Reacticon
                key="5"
                height="100"
                type="slides"
                label="ppt"
                primaryColor="#FF4136"
                animate />
            </CSSTransitionGroup>
          </div>
        </div>
      </header>
    );
  }
});

var Main = React.createClass({
  render: function() {
    return (
      <section className="main">
        <div className="width-wrapper">
          <div className="example">
            <div className="example__result">
              <Reacticon
                key="1"
                height="100"
                type="text"
                label="doc"
                progress="50%" />
            </div>
            <div className="example__configure">
              <ExampleForm />
              <ExampleCode />
            </div>
          </div>
        </div>
      </section>
    );
  }
});

var ExampleForm = React.createClass({
  render: function() {
    return (
      <div className="example__form">
        <fieldset>
          <label>Size</label>
          <input type="range" />
        </fieldset>
        <fieldset>
          <label>Type</label>
          <select>
            <option value="text" selected>Text</option>
            <option value="table">Table</option>
            <option value="image">Image</option>
            <option value="code">Code</option>
            <option value="slides">Slides</option>
          </select>
        </fieldset>
        <fieldset>
          <label>Label</label>
          <input type="text" />
        </fieldset>
        <fieldset>
          <label>Background color</label>
          <input type="text" />
        </fieldset>
        <fieldset>
          <label>Primary color</label>
          <input type="text" />
        </fieldset>
        <fieldset>
          <label>Animate</label>
          <Toggle />
        </fieldset>
        <fieldset>
          <label>Progress</label>
          <input type="text" />
        </fieldset>
        <fieldset>
          <label>Processing</label>
          <Toggle />
        </fieldset>
      </div>
    );
  }
});

var Toggle = React.createClass({
  render: function() {
    return (
      <div className="toggle">
        <div className="toggle__handle"/>
      </div>
    );
  }
});

var ExampleCode = React.createClass({
  render: function() {
    return (
      <code>
        <pre dangerouslySetInnerHTML={{__html: '<Reacticon key="1" height="100" type="text" label="doc" progress="50%" />'}} />
      </code>
    );
  }
});

var Instructions = React.createClass({
  render: function() {
    return (
      <section className="instructions">
        <div className="width-wrapper">
          <button className="button">Download from Github</button>
          <div className="instructions__or">or</div>
          <code>$ npm install reacticons</code>
          <p>Included in the package is Sass partials, compiled and minified CSS, and JSX templates.</p>
        </div>
      </section>
    );
  }
});

var Footer = React.createClass({
  render: function() {
    return (
      <footer className="footer">
        <div className="width-wrapper">
          <p><strong>Reacticons</strong> are under an MIT License. Built in California by Andrew Liebchen.</p>
        </div>
      </footer>
    );
  }
});

var ReacticonsApp = React.createClass({
  // getInitialState: function() {
  //     return { showAnimateFlap: false };
  // },
  // onClick: function() {
  //     this.setState({ showAnimateFlap: true });
  // },
  render: function() {
    return (
      <div className="wrapper">
        <Hero />
        <Main />
        <Instructions />
        <Footer />
      </div>
    );
  }
});

React.renderComponent(<ReacticonsApp />, document.getElementById('content')); // jshint ignore:line

module.exports = ReacticonsApp;
