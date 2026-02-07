<?php
namespace BIFRM;

if ( !defined( 'ABSPATH' ) ) { exit; }

if( !class_exists( 'ShortCode' ) ){
	class ShortCode{
		function __construct(){
			add_shortcode( 'iframe', [$this, 'shortcode'] );
		}
		function shortcode( $atts ) {
			extract( shortcode_atts( [
				'src'				=> '',
				'title'				=> '',
				'width'				=> '100%',
				'height'			=> '673px',
				'loading'			=> 'auto',
				'border_width'		=> '0px',
				'border_style'		=> 'solid',
				'border_color'		=> '#0000',
				'border_radius'		=> '0px'
			], $atts ) );

			ob_start();
			if ( !empty( $src ) ){ ?>
				<div class='bIframe' style='width: <?php echo esc_attr( $width ); ?>; height: <?php echo esc_attr( $height ); ?>; border: <?php echo esc_attr( $border_width ); ?> <?php echo esc_attr( $border_style ); ?> <?php echo esc_attr( $border_color ); ?>; border-radius: <?php echo esc_attr( $border_radius ); ?>; overflow: hidden;'>
					<iframe
						src='<?php echo esc_attr( $src ); ?>'
						title='<?php echo esc_attr( $title ); ?>'
						width='100%'
						height='100%'
						loading='<?php echo esc_attr( $loading ); ?>'
						allowfullscreen='false'
					></iframe>
				</div>
			<?php }
			return ob_get_clean();
		}
	}
	new ShortCode;
}