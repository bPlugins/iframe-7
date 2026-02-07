import { createRoot } from 'react-dom/client';

import './style.scss';
import Style from './Components/Common/Style';
import Iframe from './Components/Common/Iframe';

document.addEventListener('DOMContentLoaded', () => {
	const iframeEls = document.querySelectorAll('.wp-block-bifrm-iframe');
	iframeEls.forEach((iframeEl) => {
		const attributes = JSON.parse(iframeEl.dataset.attributes);
		const { src } = attributes;

		createRoot(iframeEl).render(src ? <>
			<Style attributes={attributes} id={iframeEl.id} />

			<Iframe attributes={attributes} id={iframeEl.id} />
		</> : <></>);

		iframeEl?.removeAttribute('data-attributes');
	});
});