import { createRoot } from 'react-dom/client';

import './style.scss';
import Style from './Style';
import Iframe from './Iframe';

document.addEventListener('DOMContentLoaded', () => {
	const iframeEls = document.querySelectorAll('.wp-block-b-blocks-iframe');
	iframeEls.forEach((iframeEl) => {
		const attributes = JSON.parse(iframeEl.dataset.attributes);
		const { cId, src } = attributes;

		createRoot(iframeEl).render(src ? <>
			<Style attributes={attributes} clientId={cId} />

			<Iframe attributes={attributes} clientId={cId} />
		</> : <></>);

		iframeEl?.removeAttribute('data-attributes');
	});
});