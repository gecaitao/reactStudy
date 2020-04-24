import React, { Component } from 'react';


class Children extends Component {
	constructor (props) {
		super(props)
		this.state = {
			a:0
    }
    console.log('Children-constructor')
	}
  componentWillMount(a,b,c,d){
		console.log(this.state)
    console.log(this.props)
		console.log(a)
		console.log(b)
		console.log(c)
		console.log(d)
    console.log('Children-componentWillMount')
  }
  componentDidMount(a,b,c,d){
		console.log(this.state)
    console.log(this.props)
		console.log(a)
		console.log(b)
		console.log(c)
		console.log(d)
    console.log('Children-componentDidMount')
  }
  componentWillUpdate(a,b,c,d){
		console.log(this.state)
    console.log(this.props)
		console.log(a)
		console.log(b)
		console.log(c)
		console.log(d)
    console.log('Children-componentWillUpdate')
  }
  componentDidUpdate(a,b,c,d){
		console.log(this.state)
    console.log(this.props)
		console.log(a)
		console.log(b)
		console.log(c)
		console.log(d)
    console.log('Children-componentDidUpdate')
  }
  componentWillReceiveProps(a,b,c,d){
		console.log(this.state)
    console.log(this.props)
		console.log(a)
		console.log(b)
		console.log(c)
		console.log(d)
    console.log('Children-componentWillReceiveProps')
	}
	click=()=>{
		this.setState({a:this.state.a++})
	}
	render() {
    console.log('Children-render')

		return (
			<div className="Children">
				<a onClick={this.click}>{this.state.a}</a>
				{this.props.a+'传子'}
			</div>
		);
	}
}

export default Children;
