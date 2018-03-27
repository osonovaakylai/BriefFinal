import React from 'react';

const SingleInputData = (props) => (
	<div className="form-group form-group-data">
		<input
			className="form-input"
			name={props.name}
			type={props.inputType}
			value={props.content}
			onChange={props.controlFunc}
			placeholder={props.placeholder}  required/>
	</div>
);

SingleInputData.propTypes = {
	inputType: React.PropTypes.oneOf(['text', 'number']).isRequired,
	name: React.PropTypes.string.isRequired,
	controlFunc: React.PropTypes.func,
	content: React.PropTypes.oneOfType([
		React.PropTypes.string,
		React.PropTypes.number,
	]).isRequired,
	placeholder: React.PropTypes.string,
};

export default SingleInputData;