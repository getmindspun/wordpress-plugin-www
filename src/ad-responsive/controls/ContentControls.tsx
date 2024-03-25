import {
	BlockAlignControl,
	ColorControl,
	ColorsGroup,
	ContainerContents,
	ContainerControl
} from 'wpx';

import {Props} from '../types';

const ContentControls = (props: Props & {
	setFocused: (value: string|null) => void;
}) => {
	return (
		<ContainerControl
			title={'Content'}
			onMouseEnter={() => props.setFocused('content')}
			onMouseLeave={() => props.setFocused(null)}
		>
			<ContainerContents>
				<BlockAlignControl
					label={'Alignment'}
					options={['left', 'center', 'right', 'full']}
					attributes={props.attributes.content}
					setAttributes={ attributes => {
						const content = {...props.attributes.content, ...attributes};
						props.setAttributes({content});
					}}
				/>
			</ContainerContents>
		</ContainerControl>
	);
}

export default ContentControls;
