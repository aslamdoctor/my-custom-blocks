<?php
/**
 * Plugin Name:       My Blocks
 * Description:       My blocks library for WordPress.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Aslam Doctor
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       my-blocks
 *
 * @package           create-block
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function my_blocks_my_blocks_block_init() {
	register_block_type( __DIR__ . '/build/blocks/collapsible-content' );
}
add_action( 'init', 'my_blocks_my_blocks_block_init' );
