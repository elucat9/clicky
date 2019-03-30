import React from "react";
import Image from "../Image";
import "../style.css";


const IMAGES= [
  "TakoLuka.jpg",
  "TakoLuka1.jpg",
  "TakoLuka2.jpg",
  "TakoLuka3.jpg",
  "TakoLuka4.jpg",
  "TakoLuka5.jpg",
  "TakoLuka6.jpg",
  "TakoLuka7.jpg",
  "TakoLuka8.jpg"
];

  // let shuffled = [];

  // while (IMAGES.length) {
  //   shuffled.push(IMAGES.splice(Math.random() * IMAGES.length, 1));
  //   IMAGES.push(shuffled);
  // }
  function shuffle(IMAGES) {
    for (let i = IMAGES.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); 
      [IMAGES[i], IMAGES[j]] = [IMAGES[j], IMAGES[i]]; 
    }
  }



class GameCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      score: 9,
      images: false
    }
    this.updateState = this.updateState.bind(this);
  };



  updateState() {
    this.setState({ score: (this.state.score - 1) });
    
    this.setState({images: true});
    console.log(this.state.images)
    
    shuffle(IMAGES);
  
  
 // shuffle images
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  //   let shuffled = [];

  // while (IMAGES.length) {
  //   shuffled.push(IMAGES.splice(Math.random() * IMAGES.length, 1));
  //   IMAGES.push(shuffled);
  // }
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>



};  
//if score = 0, alert("Congratulations! You won!")
    //if true when the image is clicked, alert("Game over"), reset game to original state
handleWinGame(){
    this.state = ({score: 0});
      alert("Congratulations! You win!");
    
}
    //function List(props) {
//   return (
//     <ul className="list-group">
//       {props.groceries.map(item => (
//         <li className="list-group-item" key={item.id}>
//           {item.name}
//         </li>
//       ))}
//     </ul>
//   );
// }



  render() {
    return (
      
      <div>
          <p className="header">Clicky <div className="score"> {this.state.score}</div></p>
          
        <div className="grid-container">
            
         
              {IMAGES.map(image => (
                
                  <div onClick={this.updateState}>
                   
                    <Image  source={image} key={image}> {this.state.images} </Image> 
                  </div>
                
              ))}

          </div>

         
                {/* <button onClick={this.updateState}>Test</button> */}


        
         
      </div>



    );
  };
};



export default GameCard;