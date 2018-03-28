import React from 'react';

const RadioGroup = (props) => (
	<div>
		
		<div className="checkbox-group">
			{props.options.map(option => {
				return (
					<label key={option} className="form-radio form-label capitalize">
						<input
							className="form-radio"
							name={props.setName}
							onChange={props.controlFunc}
							value={option}
							checked={props.selectedOptions.indexOf(option) > -1}
							type={props.type}/>
							<i className="form-icon"></i>
							{option}						
					</label>
				);
			})}
		</div>
	</div>
);

RadioGroup.propTypes = {
	title: React.PropTypes.string,
	type: React.PropTypes.oneOf(['checkbox', 'radio']).isRequired,
	setName: React.PropTypes.string,
	options: React.PropTypes.array,
	selectedOptions: React.PropTypes.array,
	controlFunc: React.PropTypes.func.isRequired
};

export default RadioGroup;
