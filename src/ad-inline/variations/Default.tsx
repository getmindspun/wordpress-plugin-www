import Icon from '../Icon';
import Image from '../Image';
import Content from '../Content';
import CTA from '../CTA';
import {Props} from '../types';

const Default = (props: {
	attributes: Props['attributes'],
	setAttributes?: Props['setAttributes'],
	focused?: Record<string, boolean>
}) => {
	const save = !props.setAttributes;
	console.log(props.focused)

	return (
		<>
			<div className="ad-main">
				<Icon attributes={props.attributes} focus={props.focused?.icon} />
				<Content {...props}>
					<CTA {...props.attributes} />
				</Content>
			</div>
			<Image attributes={props.attributes} edit={!save} focus={props.focused?.image}/>
		</>
	);
}

export default Default;
