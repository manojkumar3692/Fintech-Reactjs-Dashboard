import React,{PureComponent} from "react";
import TextfieldStyle from "./TextField.css"

class TextField extends PureComponent {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="textField">
      <label>{this.props.label}</label>
      <input placeholder={this.props.placeholderText}/>
      </div>
    )
  }
}

export default TextField;
