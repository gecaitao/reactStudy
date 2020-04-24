import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Children from './Children.js'


class App extends Component {
	constructor (props) {
		super(props)
		this.state = {
			date:'父'
    }
    console.log('APP-constructor')
	}
  componentWillMount(a,b,c,d){
    console.log(this.state)
    console.log(this.props)
    console.log(a)
		console.log(b)
		console.log(c)
		console.log(d)
    console.log('APP-componentWillMount')
  }
  componentDidMount(a,b,c,d){
    console.log(this.state)
    console.log(this.props)
    console.log(a)
		console.log(b)
		console.log(c)
		console.log(d)
    console.log('APP-componentDidMount')
  }
  componentWillUpdate(a,b,c,d){
    console.log(this.state)
    console.log(this.props)
    console.log(a)
		console.log(b)
		console.log(c)
		console.log(d)
    console.log('APP-componentWillUpdate')
  }
  componentDidUpdate(a,b,c,d){
    console.log(this.state)
    console.log(this.props)
    console.log(a)
		console.log(b)
		console.log(c)
		console.log(d)
    console.log('APP-componentDidUpdate')
  }
  componentWillReceiveProps(a,b,c,d){
    console.log(this.state)
    console.log(this.props)
    console.log(a)
		console.log(b)
		console.log(c)
		console.log(d)
    console.log('APP-componentWillReceiveProps')
  }
  click =()=>{
    this.setState({date:'父改'})
  }
	render() {
    console.log('APP-render')
		return (
			<div className="App">
				<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<h1 className="App-title">Welcome to React</h1>
				</header>
        <a onClick={this.click}>{this.state.date}</a>
        <Children a={this.state.date}/>
			</div>
		);
	}
}

export default App;
