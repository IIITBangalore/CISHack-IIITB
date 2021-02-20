import React from 'react';
import ReactDOM from 'react-dom';
import SwipeableBottomSheet from 'react-swipeable-bottom-sheet';
import InfoChip from "./components/chips";
import {Link} from "react-router-dom";

class App extends React.Component {

  constructor(label) {
    super(label);
    this.state = {
      userInputAllergies: "",
    };
    this.onAllergiesInputChange = this.onAllergiesInputChange.bind(this);
  }

    onAllergiesInputChange(event){
      this.setState({
        userInputAllergies: event.target.value,
      });
    }

	render () {
		return (
      <>
       {/* <img src={picture} /> */}
       <div className="mx-auto max-w-xl" style={{alignItems:"center" }}>
         <h1 className="text-3xl font-bold mt-24 mb-12 mx-8" style={{textAlign:"center"}}>Quancious</h1> 
         <p className="text-xl font-medium mb-36 mx-8" style={{textAlign:"center"}}> Your one stop shopping assistance for a conscious diet.</p>
        <div>
          <p className="mb-8 text-lg" style={{textAlign:"center"}}>Do you have any specific allergies?</p>
        </div> 
        <div style={{margin:'auto', alignItems:'center' ,textAlign:"center"}}>
          <input
            id="minute"
            type="text"
            className="bg-indigo-50 rounded-lg p-2 border-indigo-200 border-2 mb-6"
            placeholder="peanuts, dairy, etc"  
            style={{display:'inline-block'}}
            onChange = {this.onAllergiesInputChange}
          /> 
        </div>
      </div>
      <div style={{margin:'auto', alignItems:'center' ,textAlign:"center"}}>
        <Link to={{pathname:"/home" ,userInputAllergies:this.state.userInputAllergies}}>
          <button className="bg-indigo-700 rounded-xl p-3 px-8 text-white font-medium text-lg" style={{display:'inline-block', margin:'auto'}}>Next</button>
        </Link>
      </div>
      </>
		);
	}
};

export default App;
