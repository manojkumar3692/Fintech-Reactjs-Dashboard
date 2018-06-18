import React,{PureComponent} from "react";
import RaisedButton from 'material-ui/RaisedButton';
import buttonStyle from "./Button.css";
class Button extends PureComponent {
  render() {
    return (
      <div className="primaryButton">
       <RaisedButton onClick={this.props.validate} label={this.props.buttonLabel} buttonStyle={{width:'150px'}} secondary={true} />
       </div>
    )
  }
}

export default Button;
