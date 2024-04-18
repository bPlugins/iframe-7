<?php
/**
 * Plugin Name: Iframe 7
 * Description: Responsive iframe embedding for videos, live website, and more..
 * Version: 1.0.0
 * Author: bPlugins
 * Author URI: https://bplugins.com
 * License: GPLv3
 * License URI: https://www.gnu.org/licenses/gpl-3.0.txt
 * Text Domain: iframe
 */
// ABS PATH
if ( !defined( 'ABSPATH' ) ) { exit; }
 
// Constant
define( 'B_BLOCKS_IF_VERSION', isset( $_SERVER['HTTP_HOST'] ) && 'localhost' === $_SERVER['HTTP_HOST'] ? time() : '1.0.0' );
define( 'B_BLOCKS_IF_DIR_URL', plugin_dir_url( __FILE__ ) );
define( 'B_BLOCKS_IF_DIR_PATH', plugin_dir_path( __FILE__ ) );

require_once B_BLOCKS_IF_DIR_PATH . 'inc/block.php';
require_once B_BLOCKS_IF_DIR_PATH . 'inc/ShortCode.php';