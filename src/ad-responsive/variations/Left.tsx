import Icon from '../Icon';
import Image from '../Image';
import Content from '../Content';
import CTA from '../CTA';
import {Props} from '../types';

const Left = (props: {
	attributes: Props['attributes'],
	setAttributes?: Props['setAttributes'],
	focused?: string|null
}) => {
	const save = !props.setAttributes;

	return (
		<>
			<Image attributes={props.attributes} edit={!save} focused={props.focused}/>
			<div className="ad-main">
				<Icon attributes={props.attributes} focused={props.focused} />
				<Content {...props}>
					<CTA {...props.attributes} focused={props.focused}/>
				</Content>
			</div>
		</>
	);
}

export default Left;
