import Icon from '../Icon';
import Image from '../Image';
import Content from '../Content';
import CTA from '../CTA';
import {ComponentProps, Props} from '../types';

const Default = (props: ComponentProps) => {
	const save = !props.setAttributes;

	return (
		<>
			<div className="ad-main">
				<Icon {...props} />
				<Content {...props}>
					<CTA {...props} />
				</Content>
			</div>
			<Image {...props}/>
		</>
	);
}

export default Default;
