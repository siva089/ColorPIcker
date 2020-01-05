import React, { Component } from 'react'
import ColorBox from "./ColorBox"
import Navbar from "./Navbar"
import "./Palette.css"
import PaletteFooter from "./PaletteFooter"
 class Palette extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              level:400,
              format:"hex"
         }
         this.changeLevel=this.changeLevel.bind(this)
         this.changeFormat=this.changeFormat.bind(this)
     }
     changeLevel(level){
this.setState({level})
     }
     changeFormat(value){
        this.setState({format:value})
     }
    render() {
        const {colors,paletteName,emoji,id}=this.props.palette
        const {level,format}=this.state
        const colorBoxes=colors[level].map(color=><ColorBox showLink={true} background={color[format]} name={color.name} key={color.id} id={color.id} paletteId={id}  />)
        return (
            <div className="Palette">
              <Navbar showingAllColors={true} level={this.state.level} changeLevel={this.changeLevel} handleChange={this.changeFormat}/>
                <div className="Palette-colors">
                    {colorBoxes}
                </div>
                <PaletteFooter paletteName={paletteName} emoji={emoji}/>
            </div>
        )
    }
}
export default Palette