import Icon from '../Icon';
import Image from '../Image';
import Content from '../Content';
import CTA from '../CTA';
import {Props} from '../types';

const Left = (props: {
	attributes: Props['attributes'],
	setAttributes?: Props['setAttributes'],
	focused?: Record<string, boolean>
}) => {
	const save = !props.setAttributes;

	return (
		<>
			<Image attributes={props.attributes} edit={!save} focus={props.focused?.image}/>
			<div className="ad-main">
				<Icon attributes={props.attributes} focus={props.focused?.icon} />
				<Content {...props}>
					<CTA {...props.attributes} />
				</Content>
			</div>
		</>
	);
}

export default Left;
