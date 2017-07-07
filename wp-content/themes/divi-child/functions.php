<?php
add_action( 'wp_enqueue_scripts', 'divi_child_enqueue_styles' );
function divi_child_enqueue_styles() {
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
}

/**
 * Enqueue a script with jQuery as a dependency.
 */
function wpdocs_scripts() {
    wp_enqueue_script( 'divi-child-script', get_stylesheet_directory_uri() . '/js/divi-child.js', array( 'jquery' ) );
}
add_action( 'wp_enqueue_scripts', 'wpdocs_scripts' );

/**
 * Shortcode to show the module
 */
function showmodule_shortcode($moduleid) {
    extract(shortcode_atts(array('id' =>'*'),$moduleid));   
    return do_shortcode('[et_pb_section global_module="'.$id.'"][/et_pb_section]');
}
add_shortcode('showmodule', 'showmodule_shortcode');