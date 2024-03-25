import {__experimentalInputControl as InputControl} from '@wordpress/components';

import {
	BlockAlignControl,
	ColorsGroup,
	ColorControl,
	ContainerContents,
	ContainerControl,
	TabbedContainer,
	TabbedControl
} from 'wpx';

import {Props} from '../types';

const ButtonControls = (props: Props & {
	setFocused: (value: string|null) => void;
}) => {
	return (
		<ContainerControl
			title={'Button'}
			onMouseEnter={() => props.setFocused('button')}
			onMouseLeave={() => props.setFocused(null)}
		>
			<TabbedControl>
				<TabbedContainer key={'Normal'}>
					<ContainerContents>
						<InputControl
							label="Button Text"
							labelPosition="top"
							value={props.attributes.button.text}
							onChange={(text: string | undefined) => {
								const button = {...props.attributes.button, text: text || ''};
								props.setAttributes({button});
							}}
						/>
						<BlockAlignControl
							label={'Alignment'}
							options={['left', 'center', 'right', 'full']}
							attributes={props.attributes.button}
							setAttributes={attributes => {
								const button = {...props.attributes.button, ...attributes};
								props.setAttributes({button});
							}}
						/>
						<ColorsGroup isResponsive={true}>
							<ColorControl
								label={ 'Color' }
								attributes={ props.attributes.button }
								setAttributes={attributes => {
									const button = {...props.attributes.button, ...attributes};
									props.setAttributes({button});
								}}
								isResponsive={true}
								hideHeader={true}
							/>
							<ColorControl
								label={ 'Background' }
								attributes={ {
									color: props.attributes.button.backgroundColor,
									tabletColor: props.attributes.button.tabletBackgroundColor,
									mobileColor: props.attributes.button.mobileBackgroundColor,

								} }
								setAttributes={attributes => {
									const button = {...props.attributes.button, ...attributes};
									props.setAttributes({button});
								}}
								isResponsive={true}
								hideHeader={true}
							/>
						</ColorsGroup>
					</ContainerContents>
				</TabbedContainer>
				<TabbedContainer key={'Hover'}>
					<ContainerContents>
						<ColorsGroup>
							<ColorControl
								label={ 'Color' }
								attributes={ {
									color: props.attributes.button.colorHover,
									tabletColor: props.attributes.button.tabletColorHover,
									mobileColor: props.attributes.button.mobileColorHover,
								} }
								setAttributes={attributes => {
									const button = {
										...props.attributes.button,
										colorHover: attributes.color,
										mobileColorHover: attributes.mobileColor,
										tabletColorHover: attributes.tabletColor,
									};
									props.setAttributes({button});
								}}
							/>
							<ColorControl
								label={ 'Background' }
								attributes={ {
									color: props.attributes.button.backgroundColorHover,
									tabletColor: props.attributes.button.tabletBackgroundColorHover,
									mobileColor: props.attributes.button.mobileBackgroundColorHover,
								} }
								setAttributes={attributes => {
									const button = {
										...props.attributes.button,
										backgroundColorHover: attributes.color,
										mobileBackgroundColorHover: attributes.mobileColor,
										tabletBackgroundColorHover: attributes.tabletColor,
									};
									props.setAttributes({button});
								}}
							/>
						</ColorsGroup>
					</ContainerContents>
				</TabbedContainer>
			</TabbedControl>
		</ContainerControl>
	);
}

export default ButtonControls;
