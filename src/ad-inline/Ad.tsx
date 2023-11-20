import {Props} from './types';
import Default from './variations/Default';
import Left from './variations/Left';
import Simple from './variations/Simple';

const Ad = (props: {
	attributes: Props['attributes'],
	setAttributes?: Props['setAttributes'],
	focused?: Record<string, boolean>
}) => {
	return (
		<>
			{props.attributes.variation === 'default' && <Default {...props} focused={props.focused} />}
			{props.attributes.variation === 'left' && <Left {...props} focused={props.focused} />}
			{props.attributes.variation === 'simple' && <Simple {...props} focused={props.focused} />}
		</>
	);
}

export default Ad;
