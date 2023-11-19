import {MediaPlaceholder} from '@wordpress/block-editor';
import {ContainerControl, ContainerContents, ControlHeader} from 'wpx';
import './MediaControl.scss';
import React from 'react';

function basename(str: string, sep: string = '/') {
	return str.substring(str.lastIndexOf(sep) + 1);
}

export type Media = {
	url: string | undefined,
	id: string | undefined,
	alt: string | undefined,
	width: number | undefined,
	height: number | undefined,
}

export interface MediaControlProps {
	title?: string,
	help?: string,
	attributes: Media,
	setAttributes: (attributes: Partial<Media>) => void,
	children?: React.ReactNode;
}


const MediaControl = (props: MediaControlProps) => {

	const onSelect = (media: Media | null) => {
		if (!media || !media.url) {
			props.setAttributes({
				url: undefined,
				id: undefined,
				alt: undefined
			});
			return;
		}
		props.setAttributes(media);
	};

	return (
		<div className={'www-media-control'}>
			<ContainerControl title={props.title || ''}>
				<ContainerContents>
					{!!props.attributes.url &&
						<ControlHeader
							title={basename(props.attributes.url || '')}
							onClear={() => onSelect(null)}
						/>
					}
					<MediaPlaceholder
						labels={{title: ''}}
						accept="image/*"
						allowedTypes={['image']}
						onSelect={media => onSelect(media as unknown as Media)}
						multiple={false}
						onHTMLDrop={() => {
						}}
					/>
					{!!props.help && <small>{props.help}</small>}
				</ContainerContents>
				{ !!props.children &&
					<ContainerContents>
						{props.children}
					</ContainerContents>
				}
			</ContainerControl>
		</div>
	);
}

export default MediaControl;
