import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TabPanel, TextControl, ToggleControl, SelectControl } from '@wordpress/components';

import { BtnGroup } from '../../../../../bpl-tools/Components';
import Advanced from '../../../../../bpl-tools/Advanced';
import { updateData } from '../../../../../bpl-tools/utils/functions';

import { alignments, loadTypes } from '../../../utils/options';

const Settings = ({ attributes, setAttributes }) => {
	const { src, title, loading, elements, layout, advanced } = attributes;
	const { fullscreen } = elements || {};
	const { alignment } = layout || {};

	const updateAttr = (attr, val, ...props) => {
		setAttributes({ [attr]: updateData(attributes[attr], val, ...props) });
	}

	return <InspectorControls>
		<TabPanel className='bPlTabPanel' tabs={[{ name: 'general', title: __('General') }, { name: 'style', title: __('Style') }]}>
			{(tab) => <>
				{tab.name === 'general' && <>
					<PanelBody className='bPlPanelBody' title={__('Iframe', 'b-iframe')}>
						<TextControl label={__('Source', 'b-iframe')} value={src} onChange={(val) => setAttributes({ src: val })} />

						<TextControl className='mt20' label={__('Title', 'b-iframe')} value={title} onChange={(val) => setAttributes({ title: val })} />

						<SelectControl className='mt20' label={__('Loading Behavior', 'b-iframe')} labelPosition='left' value={loading} options={loadTypes} onChange={(val) => setAttributes({ loading: val })} />
					</PanelBody>


					<PanelBody className='bPlPanelBody' title={__('Elements', 'b-iframe')}>
						<ToggleControl label={__('Fullscreen Button', 'b-iframe')} checked={fullscreen} onChange={(val) => updateAttr('elements', val, 'fullscreen')} />
					</PanelBody>


					<PanelBody className='bPlPanelBody' title={__('Layout', 'b-iframe')}>
						<BtnGroup label={__('Alignment', 'b-iframe')} value={alignment} onChange={val => updateAttr('layout', val, 'alignment')} options={alignments} isIcon={true} />
					</PanelBody>
				</>}


				{tab.name === 'style' && <>
					<Advanced advanced={advanced} onChange={val => setAttributes({ advanced: val })} enabled={{ dimension: ['width', 'height'], borderShadow: ['normal', 'hover', 'border', 'shadow'] }} />
				</>}
			</>}
		</TabPanel>
	</InspectorControls>;
};
export default Settings;