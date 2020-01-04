import React, { Component } from 'react'
import Slider from 'rc-slider';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
// import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import 'rc-slider/assets/index.css';
import "./Navbar.css"
import { IconButton } from '@material-ui/core';
 class Navbar extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              format:"hex",
              open:false
         }
         this.handleChange=this.handleChange.bind(this)
         this.handleClose=this.handleClose.bind(this)
     }
     
     handleChange(e){
this.setState({format:e.target.value,open:true})
this.props.handleChange(e.target.value)
     }
     handleClose(e){
         this.setState({open:false})
     }
    render() {
        const {level,changeLevel}=this.props
        const {format,open}=this.state
        return (
            <header className="Navbar">
                <div className="logo">
                    <a href="#">reactcolorpicker</a>
                </div>
                <div className="slider-container">
                <span>Level:{level}</span>
                <div className="slider">
       
                  <Slider defaultValue={level} min={100} max={900} step={100}
                  onAfterChange={changeLevel}
                  />
                  </div>
                </div>
                <div className="select-container">
                <Select value={format} onChange={this.handleChange}>
                  <MenuItem value="hex">
                      Hex
                </MenuItem>
                <MenuItem value="rgb">
                    Rgb
                </MenuItem>
                <MenuItem value="rgba">
                    Rgba
                </MenuItem>
                </Select>

                  </div>
<Snackbar anchorOrigin={{vertical:"bottom",horizontal:"left"}} 
onClose={this.handleClose}
open={open} autoHideDuration={3000} message={<span id="messafe-id">Format Changed to {format}</span>}
ContentProps={{"aria-describedby":"message-id"}}

action={[
    <IconButton onClick={this.handleClose}><CloseIcon/></IconButton>
]}
/>
            </header>
        )
    }
}
export default Navbar