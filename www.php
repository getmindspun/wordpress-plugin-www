<?php
/**
 * Plugin Name:       www
 * Description:       Companion plugin for our theme.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.1
 * Author:            The Mindspun Team
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       www
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}


add_filter(
    'redirect_canonical',
    function ( $redirect_url, $requested_url ) {
        error_log( $requested_url );
        if ( is_404() ) {
            return false;
        }
        return $redirect_url;
    },
    999,
    2
);

// https://support.google.com/webmasters/thread/253569816?hl=en&msgid=255920309
// https://typerocket.com/disable-wordpress-automatic-or-random-redirect-guessing-of-404s/
add_filter(
    'do_redirect_guess_404_permalink',
    function () {
        error_log( 'do_redirect_guess_404_permalink' );
        return false;
    },
    1,
    0
);

add_filter(
    'strict_redirect_guess_404_permalink',
    function () {
        error_log( 'strict_redirect_guess_404_permalink' );
        return true;
    },
    1,
    0
);

// https://support.google.com/webmasters/thread/259709172/spam-sites-reffering-urls-ending-with-1000-leading-to-page-with-redirect-errors-in-gsc?hl=en
add_filter(
    'robots_txt',
    function( string $output, bool $public ): string {
        if ($public) {
            $output .= "\nDisallow: */1000$\n";
        }
        return $output;
    },
    10, 2
);
