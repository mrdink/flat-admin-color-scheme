<?php

/**
 * Plugin Name: Flat Admin Color Scheme
 * Description: A WordPress admin color scheme
 * Author: Justin Peacock
 * Version: 1.0.0
 * Text Domain: flat-color-scheme
 * License: GPL2
 */
class flat_Admin_Color_Scheme
{

    function __construct()
    {
        add_action('admin_enqueue_scripts', array($this, 'load_default_css'));
        add_action('admin_init', array($this, 'add_color_scheme'));
    }

    /**
     * Register the custom admin color scheme
     *
     * @TODO Implement RTL stylesheets
     * @TODO Implement Icon colors
     */
    function add_color_scheme()
    {
        wp_admin_css_color(
            'flat',
            __('Flat', 'flat-color-scheme'),
            plugins_url('style.css', __FILE__),
            array('#34495e', '#2c3e50', '#ecf0f1', '#1abc9c')
        );
    }

    /**
     * Make sure core's default `colors.css` gets enqueued, since we can't
     * @import it from a plugin stylesheet. Also force-load the default colors
     * on the profile screens, so the JS preview isn't broken-looking.
     *
     * Copied from Admin Color Schemes - http://wordpress.org/plugins/admin-color-schemes/
     */
    function load_default_css()
    {

        global $wp_styles;

        $color_scheme = get_user_option('admin_color');

        if ('flat' === $color_scheme || in_array(get_current_screen()->base, array('profile', 'profile-network'))) {
            $wp_styles->registered['colors']->deps[] = 'colors-fresh';
        }

    }
}

new flat_Admin_Color_Scheme();