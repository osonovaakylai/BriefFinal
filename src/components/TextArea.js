import React from 'react';

const TextArea = (props) => (
	<div className="form-group form-group-textarea">
		<label className="form-label">{props.title}</label>
		<textarea
			className="form-input"
			style={props.resize ? null : {resize: 'none'}}
			name={props.name}
			rows={props.rows}
			value={props.content}
			onChange={props.controlFunc}
			placeholder={props.placeholder} required />
	</div>
);

TextArea.propTypes = {
	title: React.PropTypes.string,
	rows: React.PropTypes.number,
	name: React.PropTypes.string.isRequired,
	content: React.PropTypes.string.isRequired,
	resize: React.PropTypes.bool,
	placeholder: React.PropTypes.string,
	controlFunc: React.PropTypes.func.isRequired
};

export default TextArea;