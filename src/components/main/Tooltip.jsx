import { useState } from 'react';
import { Tooltip } from 'react-tooltip';
function TooltipText({ exercise, type }) {
	const [tool, setTool] = useState('');
	if (exercise === 'Squat snatch') {
		setTool(
			'The basic steps for the squat snatch movement involve starting with the barbell on the ground, gripping it with a wide grip, maintaining a flat back, explosively extending the hips, knees, and ankles while pulling the barbell upward, transitioning under the bar by dropping into a full squat, and finally standing up with the barbell locked out overhead. Consistent practice, proper technique, and gradual progression in weight are essential for mastering the squat snatch movement.'
		);
	}
	return (
		<>
			{exercise.map((item, index) => (
				<li key={index}>
					{type === 'EMOM'
						? `Minute ${item.minute}: ${item.repetitions} ${item.exercise}`
						: `${item.repetitions} ${item.exercise}`}
				</li>
			))}
		</>
	);
}

export default TooltipText;
