import React from 'react';
import ReactDOM from 'react-dom';
import SwipeableBottomSheet from 'react-swipeable-bottom-sheet';
import InfoChip from "./components/chips";

class App extends React.Component {

  constructor(label) {
    super(label);
    this.state = {
      loading: false,
      picture: null,
      action: null,
      apiResult: "",
    };
  }

	render () {
    var detectedAllergens = [{label: "milk", color: "red"}, {label: "peanuts", color: "green"}, {label: "dirt", color: "orange"}, {label: "bitch", color: "red"}];
    var detectedSugars = ["agave", "honey", "maple syrup"];
		return (
      <>
       {/* <img src={picture} /> */}
			<SwipeableBottomSheet
				overflowHeight={64}
				marginTop={128}
        className="z-10"
        
			>
			<div className="text-3xl">
					Analysis
				</div> 
        <div>
          <h2 className='text-indigo-900 m-2 mt-6 text-2xl'>Allergens</h2>
          <p className='text-gray-500 text-base m-2'>Here is a disclaimer section that we'll figure out in a bit.</p>
          <div class="flex flex-wrap">
            {detectedAllergens.map((data) => (
              <InfoChip label = {data.label} chipColorName= {data.color}/>
          ))}
          </div>
        </div>
        <div>
          <h2 className='text-indigo-900 m-2 mt-6 text-2xl'>Sugar</h2>
          <p className='m-2 text-red-500 text-lg'>% of sugar is 25</p>
          <div class="flex flex-wrap">
          {detectedSugars.map((data) => (
              <InfoChip label = {data} chipColorName= "green"/>
          ))}
          </div>
        </div>
        <div>
          <h2 className='m-2 text-indigo-900 mt-6 text-2xl'>Glycemic Index</h2>
          <div class="flex flex-wrap">
          <InfoChip label="Low"/>
          </div>
        </div>
        <div>
          <h2 className='m-2 mt-6 text-indigo-900 text-2xl'>Disease Filtering</h2>
        </div>
			</SwipeableBottomSheet>
      </>
		);
	}
};

export default App;
