import React from 'react';

const CheckboxGroup = (props) => (
	<div>
		<div className="checkbox-group form-group">
			{props.options.map(option => {
				return (
					<label key={option} className="form-checkbox form-label capitalize">
						<input
							className="form-checkbox"
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

CheckboxGroup.propTypes = {
	title: React.PropTypes.string,
	type: React.PropTypes.oneOf(['checkbox', 'radio']).isRequired,
	setName: React.PropTypes.string,
	options: React.PropTypes.array.isRequired,
	selectedOptions: React.PropTypes.array,
	controlFunc: React.PropTypes.func.isRequired
};

export default CheckboxGroup;
