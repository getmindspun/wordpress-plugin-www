import {ComponentProps, Props} from './types';
import Default from './variations/Default';
import Left from './variations/Left';
import Simple from './variations/Simple';

const Ad = (props: ComponentProps) => {
	return (
		<>
			{props.attributes.variation === 'default' && <Default {...props} />}
			{props.attributes.variation === 'left' && <Left {...props} />}
			{props.attributes.variation === 'simple' && <Simple {...props} />}
		</>
	);
}

export default Ad;
