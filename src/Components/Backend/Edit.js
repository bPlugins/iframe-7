import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

import Settings from './Settings/Settings';
import Style from '../Common/Style';
import Iframe from '../Common/Iframe';

const Edit = (props) => {
	const { attributes, setAttributes, isSelected } = props;
	const { src } = attributes;
	const blockProps = useBlockProps();

	return <>
		<Settings attributes={attributes} setAttributes={setAttributes} />

		<div {...blockProps}>
			{!isSelected && <div className='mouse'></div>}

			<Style attributes={attributes} id={blockProps.id} isBackend={true} />

			<div>
				{src ?
					<Iframe attributes={attributes} id={blockProps.id} /> :
					<div className='ifNotice'>{__('Please insert a source to show iframe.', 'b-iframe')}</div>
				}
			</div>
		</div>
	</>
};
export default Edit;
