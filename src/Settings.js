import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TabPanel, TextControl, ToggleControl, SelectControl, __experimentalUnitControl as UnitControl } from '@wordpress/components';
import { produce } from 'immer';

import { BorderControl, MultiShadowControl } from '../../Components';
import { loadTypes } from './utils/options';

const Settings = ({ attributes, setAttributes }) => {
	const { src, title, width, height, loading, isFullScreen, border, shadow } = attributes;

	return <InspectorControls>
		<TabPanel className='bPlTabPanel' tabs={[{ name: 'general', title: __('General') }, { name: 'style', title: __('Style') }]}>
			{(tab) => <>
				{tab.name === 'general' && <PanelBody className='bPlPanelBody' title={__('Manage Iframe', 'b-blocks')}>
					<TextControl label={__('Source', 'b-blocks')} value={src} onChange={(val) => setAttributes({ src: val })} />

					<TextControl label={__('title', 'b-blocks')} value={title} onChange={(val) => setAttributes({ title: val })} />

					<SelectControl label={__('Loading Behavior', 'b-blocks')} value={loading} options={loadTypes} onChange={(val) => setAttributes({ loading: val })} />

					<UnitControl className='mt20' label={__('Height', 'b-blocks')} labelPosition='left' value={height} onChange={(val) => setAttributes({ height: val })} />

					<UnitControl className='mt20' label={__('Width', 'b-blocks')} labelPosition='left' value={width} onChange={(val) => setAttributes({ width: val })} />

					<ToggleControl className='mt20' label={__('Show / Hide Full Screen button', 'b-blocks')} checked={isFullScreen} onChange={(val) => setAttributes({ isFullScreen: val })} />
				</PanelBody>}

				{tab.name === 'style' && <PanelBody className='bPlPanelBody' title={__('Manage Iframe', 'b-blocks')}>
					<BorderControl label={__('Border:', 'b-blocks')} value={border} onChange={val => setAttributes({ border: val })} defaults={{ radius: '5px' }} />

					<MultiShadowControl className='mt20' value={shadow} onChange={(val) => setAttributes({ shadow: val })} produce={produce} />
				</PanelBody>}
			</>}
		</TabPanel>
	</InspectorControls>;
};
export default Settings;