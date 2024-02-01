<?php
class IFBBlock{
	function __construct(){
		add_action( 'init', [$this, 'onInit'] );
	}

	function onInit() {
		wp_register_style( 'b-blocks-iframe-style', B_BLOCKS_IF_DIR_URL . 'dist/style.css', [], B_BLOCKS_IF_VERSION); // Style
		wp_register_style( 'b-blocks-iframe-editor-style', B_BLOCKS_IF_DIR_URL . 'dist/editor.css', [ 'b-blocks-iframe-style' ], B_BLOCKS_IF_VERSION ); // Backend Style

		register_block_type( __DIR__, [
			'style'				=> 'b-blocks-iframe-style',
			'editor_style'		=> 'b-blocks-iframe-editor-style',
			'render_callback'	=> [$this, 'render']
		] ); // Register Block

		wp_set_script_translations( 'b-blocks-iframe-editor-script', 'iframe', B_BLOCKS_IF_DIR_PATH . 'languages' );
	}

	function render( $attributes ){
		extract( $attributes );

		wp_enqueue_style('b-blocks-iframe-style');
		wp_enqueue_script( 'b-blocks-iframe-script', B_BLOCKS_IF_DIR_URL . 'dist/script.js', [ 'react', 'react-dom' ], B_BLOCKS_IF_VERSION, true );
		wp_set_script_translations( 'b-blocks-iframe-script', 'iframe', B_BLOCKS_IF_DIR_PATH . 'languages' );

		$className = $className ?? '';
		$blockClassName = "wp-block-b-blocks-iframe $className align$align";

		ob_start(); ?>
		<div class='<?php echo esc_attr( $blockClassName ); ?>' id='bBlocksIframe-<?php echo esc_attr( $cId ) ?>' data-attributes='<?php echo esc_attr( wp_json_encode( $attributes ) ); ?>'></div>

		<?php return ob_get_clean();
	} // Render
}
new IFBBlock();