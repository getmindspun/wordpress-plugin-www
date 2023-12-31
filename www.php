<?php
/**
 * Plugin Name:       Mindspun Block Ads
 * Description:       Easily create inline advertisements for your blog using WordPress blocks.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The Mindspun Team
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       www
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

function www_block_init() {
	foreach ( scandir( __DIR__ . '/build' ) as $name ) {
		if ( ! in_array( $name, array( '..', '.' ) ) ) {
			register_block_type( __DIR__ . '/build/' . $name );
		}
	}

}
add_action( 'init', 'www_block_init' );

/* Custom Block Editor category for ads. */
/* Blocks Categories */
add_filter(
	'block_categories_all',
	function ( $categories ) {
		$category = array(
			'slug'  => 'ads',
			'title' => 'Ads',
		);

		$result = array($category) + $categories;
		error_log(print_r($result, true));
		return $result;
	}
);
