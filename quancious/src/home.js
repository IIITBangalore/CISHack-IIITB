import React, { Component } from "react";
import {Link} from "react-router-dom";
import {createWorker} from 'tesseract.js';


class Test extends Component{
    constructor(props)
    {
        super(props)
        this.state={
            uploads:[],
            info: [],
            allergies:this.props.location.userInputAllergies,
            recognisedText:""

        };
    }

    handleChange = (event) => {
        if (event.target.files[0]) {
          var uploads = []
          for (var key in event.target.files) {
            if (!event.target.files.hasOwnProperty(key)) continue;
            let upload = event.target.files[key]
            uploads.push(URL.createObjectURL(upload))
          }
          this.setState({
            uploads: uploads
          })
          console.log(uploads);
        } else {
          this.setState({
            uploads: []
          })
        }
      }

      generateText = async () => {
        const worker = createWorker({
          logger: m => console.log(m),
        });
        await worker.load();
          await worker.loadLanguage('eng');
          await worker.initialize('eng');
          const { data: { text } } = await worker.recognize(this.state.uploads[0]);
          let randomshit=this.state.allergies;
          this.setState({
            info: [randomshit,text],
            recognisedText:text
            
          })
      }
    

    render(){
        const random="Quancious let's you take control of what you want consume. Click a picture of any product's nutrition label and we will give you all the essential info you need before making a purchase"
        return(
            <div class="bg-white">
            <div className="Quancious" >
                <div className="object-center" >
                    <h1 className="text-3xl font-bold mt-24 mb-12 mx-8" style={{textAlign:"center"}}>Quancious</h1>
                </div>
                <div className="w-70 m-10">
                    <div class=" bg-indigo-50 p-12 rounded-xl w-50 opacity-15">
                        <span class="block" >{random}</span>  
                    </div>
                </div>
                <div style={{textAlign:'center'}}>

                    <label style={{margin:'auto', alignItems:'center'}}>
                        <img src="https://s2.svgbox.net/materialui.svg?ic=photo_camera&color=#66000000" width="100" 
                        height="100" style={{display:'inline-block', padding:'7px 15px'}}></img>
                        <input type="file" name="myfile" style={{display:'none'}} onChange={this.handleChange}/>
                    </label>
                </div>

                <div style={{margin:'auto',display:'block', textAlign:'center',alignItems:"center"}} class="items-center mb-0">
                    <p className="text-2xl text-black"> Take a picture of a product</p>
                </div >
                <div className="flex flex-row" >
                  <div>
                    <button className="bg-indigo-700 rounded-xl p-3 px-8 text-white font-medium text-lg mt-4 mr-4 ml-6" onClick={this.generateText}> Upload </button>
                  </div>
                  <div>
                    <Link to={{pathname:"/analysis" ,aller:this.state.allergies, any:this.state.recognisedText, media:this.state.uploads}}> 
                    <button className="bg-indigo-700 rounded-xl p-3 px-8 text-white font-medium text-lg mt-4">Analyse Product</button>
                    </Link>
                </div>
                </div>
                  
                <p className="mb-24">{this.state.recognisedText}</p>  
            </div>
            </div>
        )
    }
}
export default Test;