import { useState } from 'react';

import { compressIcon, expandIcon } from '../../utils/icons';
import { prefix } from '../../utils/data';

const Iframe = ({ attributes, id }) => {
	const { src, title, loading, elements } = attributes;
	const { fullscreen } = elements || {};

	const [isNowFull, setIsNowFull] = useState(false);

	const onFullScreen = () => {
		const element = document.querySelector(`#${id} .${prefix}`);

		if (document.fullscreenElement) {
			setIsNowFull(false);
			document.exitFullscreen();
		} else {
			setIsNowFull(true);
			element.requestFullscreen();
		}
	};

	return <div className={prefix}>
		<iframe
			src={src}
			title={title}
			width='100%'
			height='100%'
			loading={loading}
			allowfullscreen={fullscreen}
		></iframe>

		{(fullscreen && !src.includes('youtube.com/embed')) && <button onClick={onFullScreen} className='fullScreenBtn'>
			{isNowFull ? compressIcon : expandIcon}
		</button>}
	</div>
}
export default Iframe;