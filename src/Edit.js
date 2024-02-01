import { useEffect } from 'react';
import { __ } from '@wordpress/i18n';

import Settings from './Settings';
import Style from './Style';
import Iframe from './Iframe';

const Edit = (props) => {
	const { className, attributes, setAttributes, clientId, isSelected } = props;
	const { src } = attributes;

	useEffect(() => { clientId && setAttributes({ cId: clientId }) }, [clientId]);

	return <>
		<Settings attributes={attributes} setAttributes={setAttributes} />

		<div className={className} id={`bBlocksIframe-${clientId}`}>
			{!isSelected && <div className='mouse'></div>}

			<Style attributes={attributes} clientId={clientId} />

			{src ?
				<Iframe attributes={attributes} clientId={clientId} /> :
				<div className='ifNotice'>{__('Please insert a source to show iframe.', 'b-blocks')}</div>
			}
		</div>
	</>
};
export default Edit;
