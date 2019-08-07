import React from 'react';
import PropTypes from 'prop-types';
import "./expandable-section.css";

class ExpandableSection extends React.Component {
  constructor(props) {
    super(props);
    this.moreTextElement = React.createRef();
    this.lessTextElement = React.createRef();
    this.expandableButton = React.createRef();
    this.state = {
      showExpandedText: false,
      showEllipses: true
    }
  }

  toggleText = () => {
    this.setState(prevState => ({
      showExpandedText: !prevState.showExpandedText,
      showEllipses: !prevState.showEllipses
    }));
  }
  
  render() {
    return (
      <div className="expandableSection">
        <h1>{this.props.title}</h1>
        <p>{this.props.initialText}
          <span ref={this.lessTextElement} style={{display:(this.state.showEllipses? 'inline':'none')}} className="lessText">...</span>
          <span ref={this.moreTextElement} style={{display:(this.state.showExpandedText? 'inline':'none')}} className="moreText">{this.props.expandedText}</span>
        </p>
        <button 
          className="expandableButton" 
          ref={this.expandableButton}
          onClick={this.toggleText.bind(this)}
          type="button">
          {this.state.showEllipses? 'Read more...':'Read less'}
        </button>
      </div>
    )
  }    
}

ExpandableSection.propTypes = {
  title: PropTypes.string.isRequired,
  initialText: PropTypes.string.isRequired,
  expandedText: PropTypes.string.isRequired
};

export default ExpandableSection;