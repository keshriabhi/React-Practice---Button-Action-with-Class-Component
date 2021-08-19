import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
		super(props);
		this.state = {
			showPara : 0
		}
	};

	onBtnClick(){
		var updatedVal = this.state.showPara ? false : true;
		this.setState({showPara : updatedVal});
	}
    render() {
    	return(
    		<div id="main">
				{ /* Do not remove this main div!! */ }
				<button id="click" onClick={()=> this.onBtnClick()}>Click me</button>
				{
					this.state.showPara ? <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>
					:
					null
				}
    		</div>
    	);
    }
}


export default App;

