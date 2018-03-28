import React from 'react';

const SingleInputAnother = (props) => (
	<div className="form-group form-group-another">
		<input
			className="form-input"
			name={props.name}
			type={props.inputType}
			value={props.content}
			onChange={props.controlFunc}
			placeholder={props.placeholder} />
	</div>
);

SingleInputAnother.propTypes = {
	inputType: React.PropTypes.oneOf(['text', 'number']).isRequired,
	name: React.PropTypes.string,
	controlFunc: React.PropTypes.func.isRequired,
	content: React.PropTypes.oneOfType([
		React.PropTypes.string,
		React.PropTypes.number,
	]),
	placeholder: React.PropTypes.string,
};

export default SingleInputAnother;