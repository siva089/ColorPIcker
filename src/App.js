import React from 'react';
import {Route,Switch} from "react-router-dom"
import './App.css';
import Palette from "./Palette"
import seedColors from  "./SeedColors"
import {generatePalette} from "./colorHelpers"
import PaletteList from "./PaletteList"
import SingleColorPalette from "./SingleColorPalette"
function App() {  
  const findPallete=(id)=>{
let seedId=seedColors.find(seed=>{
 return seed.id===id
})


return seedId
  }
  return (
    <Switch>
    <Route exact path="/" render={(routeProps)=><PaletteList palettes={seedColors} {...routeProps}/>} />
    <Route exact path='/palette/:id' render={(routeProps)=><Palette palette={generatePalette(findPallete(routeProps.match.params.id))}/>}/>
    <Route  path='/palette/:paletteId/:colorId' render={()=><SingleColorPalette/>} />
    </Switch>
  //   <div>
  //  <Palette palette={generatePalette(seedColors[4])} />  
  //   </div>
  );
}

export default App;
