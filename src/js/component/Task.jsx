import React from "react";
import PropTypes from "prop-types";

export const Task = (props) => {
	return (
		<>
			<li>
				{props.inputTask}
				<i
					className="far fa-trash-alt"
					onClick={() => props.removeCallBack(props.position)}></i>
			</li>
			<hr className="mt-0" />
		</>
	);
};

Task.propTypes = {
	inputTask: PropTypes.string,
	position: PropTypes.number,
	removeCallBack: PropTypes.func,
};
