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
      recog:this.props.location.any,
      allergies: this.props.location.aller,
      apiResult: "",
      media: this.props.location.media,
    };
  };
  openBottomSheet(open){
    this.setState({ open });
};

toggleBottomSheet(){
    this.openBottomSheet(!this.state.open);
};
	render () {
        const styles={
			title:{
				backgroundColor: '#00bcd4',
				padding: '16px 0',
				boxSizing: 'border-box',
				color: 'white',
				minHeight: '64px',
				fontSize: '24px',
				textAlign: 'center',
				flex:1
			},
			text:{
				padding: '10px',
				boxSizing: 'border-box',
				backgroundColor: 'white',
				fontSize: '18px',
				minHeight: '50vh'
			}
		};
    
    var recognisedText = this.state.recog.toString().toLowerCase();
    console.log(this.state.recog);
    var recognisedAllergensList = [];
    var recognisedFalseSugars = [];
    var recognisedGlycemicData = [];
    var colorList = ["red", "orange", "green"];
    var i, j, k, l;
    var allergens = ["milk","eggs","peanuts","nuts","soy","wheat","fish","shellfish","wheat","sesame",
"mushroom","fin fish", "soya", "celery","garlic","red meat","sulphites", "poultry meat", "maize","banana","rice","glutten","oats","almonds","lentins","sunflower seeds", "kiwi fruit","chicken", "strawberry","pork","beef","spinach","shrimp","oranges","tomato"];

    var detectedSugars = ["Agave nectar","Agave syrup","Barbados sugar","Barley malt","Barley malt syrup","Beet sugar","Blackstrap molasses","Brown rice syrup","Brown sugar","Buttered syrup","Cane juice","Cane juice crystals","Cane sugar","Caramel","Carob syrup","Castor sugar","Coconut palm sugar","Coconut sugar","Confectioner’s sugar","Corn sweetener","Corn syrup","Corn syrup solids","Crystalline fructose","D-ribose","Date sugar","Date syrup","Date syrup","Dehydrated cane juice","Demerara sugar","Dextran","Dextrin","Dextrose","Diastatic malt","Ethyl maltol","Evaporated cane juice","Fructose","Glucose","Grape sugar","Florida crystals","Fruit juice concentrate","Glucose solids","HFCS", "High Fructose Corn Syrup","Free-fowing brown sugars","Galactose","Golden sugar","Honey","Hydrolyzed starch","Icing sugar","Invert sugar","Karo","Malt syrup","Lactose","Maltodextrin","Molasses","Maltol","Panocha","Palm sugar","Mannose","Powdered sugar","Rice syrup","Muscovado","Maltose","Pear juice concentrate","Refner’s syrup","Panela sugar","Maple syrup","Raw sugar","Saccharose","Sorghum syrup","Sucanat","Syrup","Sucrose","Treacle","Sugar (granulated)","Turbinado sugar","Sweet sorghum","Yellow sugar"];
    
    var glycemicData = [
      [
        "Barley",
        "rice",
        "Baked Beans",
        "chickpeas",
        "kidney beans",
        "lentins",
        "Mung Beans",
        "Romano Beans",
        "Soybeans/Edamame",
        "Split Peas",
        "Almond Milk",
        "Cow Milk",
        "(Skim, 1%, 2%, Whole) Frozen Yogurt",
        "Greek Yogurt",
        "Soy Milk",
        "Yogurt (Skim, 1%, 2%, Whole)",
        "Apple",
        "Apricot (Fresh, Dried)",
        "Banana (Green, Unripe)",
        "Berries",
        "Cantaloupe",
        "Grapefruit",
        "Honeydew Melon Mango",
        "Orange",
        "Peach",
        "Pear",
        "Plum",
        "Pomegranate",
        "Prunes",
        "Heavy Mixed Grain Breads",
        "Spelt Bread",
        "Sourdough Bread",
        "Tortilla (Whole Grain)",
        "All-Bran Cereal",
        "All-Bran Buds With Psyllium Cereal",
        "Oat Bran",
        "Oats (Steel Cut)"
      ],
      [
      "Banana (Ripe, Yellow)",
      "Cherries (Bottled)",
      "Cherries (Fresh)",
      "Cranberries (Dried)",
      "Figs (Fresh, Dried)",
      "Grapes",
      "Kiwi",
      "Lychee",
      "Pineapple",
      "Raisins",
      "Lentil Soup (ready-made)",
      "Split Pea Soup (ready-made)",
      "Chapati (White, Whole Wheat)",
      "Flaxseed/Linseed Bread",
      "Pita Bread (White, Whole Wheat)",
      "Pumpernickel Bread",
      "Roti (White, Whole Wheat)",
      "Rye Bread (Light, Dark, Whole Grain)",
      "Stone Ground Whole Wheat Bread",
      "Whole Grain Wheat Bread",
      "Cream of Wheat (Regular)",
      "Oats (Instant)",
      "Oats (Large Flake)",
      "Oats (Quick)",
      "Basmati Rice",
      "Brown Rice",
      "Cornmeal",
      "Couscous",
      "(Regular, Whole Wheat) Rice Noodles",
      "White Rice (Short, Long Grain) Wild Rice",
      "Beets",
      "Corn",
      "French Fries",
      "Parsnip",
      "Potato (Red, White, Cooled) ",
      "Rye Crisp Crackers",
      "toned Wheat Thins Crackers"
      ],[
      "Bread (White, Whole Wheat)",
      "Naan (White, Whole Wheat)",
      "Jasmine Rice",
      "Millet",
      "Sticky Rice",
      "White Rice (Instant)",
      "All-Bran Flakes ",
      "Cereal Corn Flakes Cereal",
      "Cream of Wheat (Instant) ",
      "Puffed Wheat Cereal",
      "Rice Krispies Cereal",
      "Special K Cereal",  
      "Jasmine Rice",
      "Millet",
      "Sticky Rice",
      "White Rice (Instant)",
      "All-Bran Flakes ",
      "Cereal Corn Flakes Cereal",
      "Cream of Wheat (Instant) ",
      "Puffed Wheat Cereal",
      "Rice Krispies Cereal ",
      "Special K Cereal",
      "Bread (White, Whole Wheat) ",
      "Naan (White, Whole Wheat)",
      "Banana (Brown, Overripe) ",
      "Watermelon",
      "Rice Milk"
      ] 
    ];
    
    for (i = 0; i < allergens.length; i++) {
      if (recognisedText.search(allergens[i].toLowerCase()) != -1){
        recognisedAllergensList.push(allergens[i]);
      }
    }

    for (i = 0; i < detectedSugars.length; i++) {
      console.log(detectedSugars[i]);
      if (recognisedText.search(detectedSugars[i].toString().toLowerCase()) != -1){
        recognisedFalseSugars.push(detectedSugars[i]);
      }
    }

    for (k = 0; k < 3; k++){
      for (l = 0; l < glycemicData.length; l++){
        if (recognisedText.search(glycemicData[k][l].toLowerCase()) != -1){
        recognisedGlycemicData.push({label: glycemicData[k][l], color: colorList[k]});
      }
    } 
    }
		return (
      <>
       <img src={this.state.media} />
       <div className="rounded-t-xl overflow-hidden">
        <SwipeableBottomSheet
					overflowHeight={250}
                    marginTop={128}
                    className="z-10"
					open={this.state.open}
					onChange={this.openBottomSheet.bind(this)}
				>
					<div style={styles.title}>
						<button onClick={this.toggleBottomSheet.bind(this)}>
							{this.state.open ? 'Close' : 'Open'}
						</button>
                        </div>
        <div className="mx-2 mb-16">
            <div className="flex flex-row justify-between mt-8 mx-2">
                <div className="text-3xl font-semibold">Product Analysis</div>
                <div>
                    <img src="https://s2.svgbox.net/octicons.svg?ic=chevron-down-bold&color=000000" width="36" height="36" />
                </div>
            </div> 
          <div>
            <h2 className='text-indigo-900 m-2 mt-6 text-2xl'>Allergens</h2>
            <p className='text-gray-500 text-base m-2'>Any possible allergens present in the product will be listed below</p>
            <div class="flex flex-wrap">
              {recognisedAllergensList.map((data) => (
                <InfoChip label = {data} chipColorName= "green"/>
            ))}
            </div>
          </div>
          <div>
            <h2 className='text-indigo-900 m-2 mt-6 text-2xl'>Sugar</h2>
            <p className='text-gray-500 text-base m-2'>Manufacturers try hiding sugar from their ingredient list by misleading consumers with different names. This is what we found</p>
            <div class="flex flex-wrap">
            {recognisedFalseSugars.map((data) => (
                <InfoChip label = {data} chipColorName= "green"/>
            ))}
            </div>
          </div>
          <div>
            <h2 className='m-2 text-indigo-900 mt-6 text-2xl'>Glycemic Index</h2>
            <p className='text-gray-500 text-base m-2'>Glycemic index is a value which measures how much blood sugar spike do foods cause. Below are possible ingredients which are potentially harmful for you. </p>
           <ul className="m-2 mx-8">
             <li className="list-decimal text-gray-500 text-base">Red - High GI, Choose least often</li>
             <li className="list-decimal text-gray-500 text-base">Orange - Medium GI, Choose less often</li>
             <li className="list-decimal text-gray-500 text-base">Green - Low GI, Choose most often</li>
           </ul>
            <div class="flex flex-wrap">
            {recognisedGlycemicData.map((data) => (
                <InfoChip label = {data.label} chipColorName= {data.color}/>
            ))}
            </div>
          </div>
          {/* <div>
            <h2 className='m-2 mt-6 text-indigo-900 text-2xl'>Disease Filtering</h2>
          </div> */}
        </div>
			
			</SwipeableBottomSheet>
       </div>
			
      </>
		);
	}
};

export default App;
