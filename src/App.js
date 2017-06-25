import React, { Component } from 'react';
import Canvas from './components/Canvas';
import SideBar from './components/SideBar';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fontFamily: 'Montserrat',
      fontSize: 34,
      fontWeight: 400,
      fontStyle: 'normal',
      textColor: '#9B51E0',
      backgroundColor: '#F8F3F3',
    };
    this.updateFontFamily = this.updateFontFamily.bind(this);
    this.updateFontVariant = this.updateFontVariant.bind(this);
    this.updateFontSize = this.updateFontSize.bind(this);
    this.updateTextColor = this.updateTextColor.bind(this);
    this.updateBackgroundColor = this.updateBackgroundColor.bind(this);
  }

  updateFontFamily(fontFamily) {
    this.setState({ fontFamily });
  }

  updateFontVariant(fontVaraint) {
    this.setState({
      fontWeight: fontVaraint.weight,
      fontStyle: fontVaraint.style,
    });
  }

  updateFontSize(fontSize) {
    this.setState({
      fontSize,
    });
  }
  updateTextColor(textColor) {
    this.setState({
      textColor,
    });
  }
  updateBackgroundColor(backgroundColor) {
    this.setState({
      backgroundColor,
    });
  }
  render() {
    const handlers = {
      updateFontFamily: this.updateFontFamily,
      updateFontVariant: this.updateFontVariant,
      updateFontSize: this.updateFontSize,
      updateTextColor: this.updateTextColor,
      updateBackgroundColor: this.updateBackgroundColor,
    };
    return (
      <div className="App">
        <SideBar handlers={handlers} />
        <Canvas {...this.state} />
      </div>
    );
  }
}

export default App;
