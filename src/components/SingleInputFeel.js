import React from 'react';

const SingleInputFeel = (props) => (
	<div className="form-group form-group-mod">
		<input
			className="form-input"
			name={props.name}
			type={props.inputType}
			value={props.content}
			onChange={props.controlFunc}
			placeholder={props.placeholder}  />
	</div>
);

SingleInputFeel.propTypes = {
	inputType: React.PropTypes.oneOf(['text', 'number']).isRequired,
	name: React.PropTypes.string.isRequired,
	controlFunc: React.PropTypes.func.isRequired,
	content: React.PropTypes.oneOfType([
		React.PropTypes.string,
		React.PropTypes.number,
	]).isRequired,
	placeholder: React.PropTypes.string,
};

export default SingleInputFeel;