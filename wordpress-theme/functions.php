<?php
/**
 * SomaLab Theme Functions
 *
 * @package SomaLab
 * @version 1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Theme setup
 */
function somalab_setup() {
	add_theme_support( 'title-tag' );
	add_theme_support( 'post-thumbnails' );
	add_theme_support( 'custom-logo', array(
		'height'      => 80,
		'width'       => 200,
		'flex-height' => true,
		'flex-width'  => true,
	) );
	add_theme_support( 'html5', array( 'search-form', 'comment-form', 'comment-list', 'gallery', 'caption' ) );

	register_nav_menus( array(
		'primary' => __( 'Primary Menu', 'somalab' ),
		'footer'  => __( 'Footer Menu', 'somalab' ),
	) );
}
add_action( 'after_setup_theme', 'somalab_setup' );

/**
 * Enqueue styles and scripts
 */
function somalab_scripts() {
	// Google Fonts
	wp_enqueue_style(
		'somalab-google-fonts',
		'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap',
		array(),
		null
	);

	// Theme stylesheet
	wp_enqueue_style( 'somalab-style', get_stylesheet_uri(), array( 'somalab-google-fonts' ), '1.0.0' );

	// Scroll animations script
	wp_enqueue_script( 'somalab-scripts', get_template_directory_uri() . '/assets/js/main.js', array(), '1.0.0', true );
}
add_action( 'wp_enqueue_scripts', 'somalab_scripts' );

/**
 * Auto-create pages on theme activation
 */
function somalab_create_pages() {
	$pages = array(
		'about'    => array( 'title' => 'About',    'template' => 'page-about.php' ),
		'services' => array( 'title' => 'Services', 'template' => 'page-services.php' ),
		'store'    => array( 'title' => 'Store',    'template' => 'page-store.php' ),
		'blog'     => array( 'title' => 'Blog',     'template' => 'page-blog.php' ),
	);

	foreach ( $pages as $slug => $page_data ) {
		$existing = get_page_by_path( $slug );
		if ( ! $existing ) {
			$page_id = wp_insert_post( array(
				'post_title'  => $page_data['title'],
				'post_name'   => $slug,
				'post_status' => 'publish',
				'post_type'   => 'page',
			) );
			if ( $page_id && ! is_wp_error( $page_id ) ) {
				update_post_meta( $page_id, '_wp_page_template', $page_data['template'] );
			}
		}
	}
}
add_action( 'after_switch_theme', 'somalab_create_pages' );

/**
 * Customizer settings
 */
function somalab_customize_register( $wp_customize ) {

	// --- Hero Section ---
	$wp_customize->add_section( 'somalab_hero', array(
		'title'    => __( 'Hero Section', 'somalab' ),
		'priority' => 30,
	) );

	$wp_customize->add_setting( 'hero_badge', array( 'default' => 'Evidence-Based Nutrition Consulting', 'sanitize_callback' => 'sanitize_text_field' ) );
	$wp_customize->add_control( 'hero_badge', array( 'label' => __( 'Hero Badge Text', 'somalab' ), 'section' => 'somalab_hero', 'type' => 'text' ) );

	$wp_customize->add_setting( 'hero_heading', array( 'default' => 'Achieve Lasting Health With Science, Not Fads', 'sanitize_callback' => 'sanitize_text_field' ) );
	$wp_customize->add_control( 'hero_heading', array( 'label' => __( 'Hero Heading', 'somalab' ), 'section' => 'somalab_hero', 'type' => 'text' ) );

	$wp_customize->add_setting( 'hero_text', array(
		'default'           => 'SomaLab helps health-conscious Australians achieve sustainable fat loss, peak performance, and total wellbeing through personalised, evidence-based nutrition coaching. No restrictive diets. No quick fixes. Just real results.',
		'sanitize_callback' => 'sanitize_textarea_field',
	) );
	$wp_customize->add_control( 'hero_text', array( 'label' => __( 'Hero Text', 'somalab' ), 'section' => 'somalab_hero', 'type' => 'textarea' ) );

	$wp_customize->add_setting( 'hero_image', array( 'default' => '', 'sanitize_callback' => 'esc_url_raw' ) );
	$wp_customize->add_control( new WP_Customize_Image_Control( $wp_customize, 'hero_image', array(
		'label'   => __( 'Hero Background Image', 'somalab' ),
		'section' => 'somalab_hero',
	) ) );

	$wp_customize->add_setting( 'booking_url', array( 'default' => 'https://calendly.com', 'sanitize_callback' => 'esc_url_raw' ) );
	$wp_customize->add_control( 'booking_url', array( 'label' => __( 'Booking URL (Calendly)', 'somalab' ), 'section' => 'somalab_hero', 'type' => 'url' ) );

	// --- Coach Section ---
	$wp_customize->add_section( 'somalab_coach', array(
		'title'    => __( 'Coach Section', 'somalab' ),
		'priority' => 40,
	) );

	$wp_customize->add_setting( 'coach_image', array( 'default' => '', 'sanitize_callback' => 'esc_url_raw' ) );
	$wp_customize->add_control( new WP_Customize_Image_Control( $wp_customize, 'coach_image', array(
		'label'   => __( 'Coach Portrait', 'somalab' ),
		'section' => 'somalab_coach',
	) ) );

	$wp_customize->add_setting( 'coach_heading', array( 'default' => 'Science Meets Compassion', 'sanitize_callback' => 'sanitize_text_field' ) );
	$wp_customize->add_control( 'coach_heading', array( 'label' => __( 'Coach Heading', 'somalab' ), 'section' => 'somalab_coach', 'type' => 'text' ) );

	$wp_customize->add_setting( 'coach_bio_1', array(
		'default'           => 'With a background in medical laboratory science and advanced qualifications in nutrition consulting, I founded SomaLab to bridge the gap between clinical evidence and practical, everyday wellness. I\'ve helped hundreds of Australians transform their relationship with food and achieve lasting results.',
		'sanitize_callback' => 'sanitize_textarea_field',
	) );
	$wp_customize->add_control( 'coach_bio_1', array( 'label' => __( 'Coach Bio Paragraph 1', 'somalab' ), 'section' => 'somalab_coach', 'type' => 'textarea' ) );

	$wp_customize->add_setting( 'coach_bio_2', array(
		'default'           => 'Whether you\'re looking to optimise body composition, boost your energy, improve athletic performance, or simply feel your best, I\'m here to guide you with evidence-based strategies tailored to your unique needs.',
		'sanitize_callback' => 'sanitize_textarea_field',
	) );
	$wp_customize->add_control( 'coach_bio_2', array( 'label' => __( 'Coach Bio Paragraph 2', 'somalab' ), 'section' => 'somalab_coach', 'type' => 'textarea' ) );

	// --- CTA Section ---
	$wp_customize->add_section( 'somalab_cta', array(
		'title'    => __( 'CTA Section', 'somalab' ),
		'priority' => 50,
	) );

	$wp_customize->add_setting( 'cta_heading', array( 'default' => 'Ready to Transform Your Health?', 'sanitize_callback' => 'sanitize_text_field' ) );
	$wp_customize->add_control( 'cta_heading', array( 'label' => __( 'CTA Heading', 'somalab' ), 'section' => 'somalab_cta', 'type' => 'text' ) );

	$wp_customize->add_setting( 'cta_text', array(
		'default'           => 'Take the first step towards sustainable health and wellbeing. Book your free 30-minute consultation today and discover how personalised nutrition coaching can help you achieve your goals.',
		'sanitize_callback' => 'sanitize_textarea_field',
	) );
	$wp_customize->add_control( 'cta_text', array( 'label' => __( 'CTA Text', 'somalab' ), 'section' => 'somalab_cta', 'type' => 'textarea' ) );

	// --- Footer ---
	$wp_customize->add_section( 'somalab_footer', array(
		'title'    => __( 'Footer', 'somalab' ),
		'priority' => 60,
	) );

	$wp_customize->add_setting( 'footer_tagline', array(
		'default'           => 'SomaLab provides evidence-based nutrition consulting to help health-conscious Australians achieve sustainable fat loss, peak performance, and genuine wellbeing.',
		'sanitize_callback' => 'sanitize_textarea_field',
	) );
	$wp_customize->add_control( 'footer_tagline', array( 'label' => __( 'Footer Tagline', 'somalab' ), 'section' => 'somalab_footer', 'type' => 'textarea' ) );

	// Contact info
	$wp_customize->add_setting( 'contact_email', array( 'default' => 'info@somalab.com.au', 'sanitize_callback' => 'sanitize_email' ) );
	$wp_customize->add_control( 'contact_email', array( 'label' => __( 'Contact Email', 'somalab' ), 'section' => 'somalab_footer', 'type' => 'email' ) );

	$wp_customize->add_setting( 'contact_phone', array( 'default' => '+61414430113', 'sanitize_callback' => 'sanitize_text_field' ) );
	$wp_customize->add_control( 'contact_phone', array( 'label' => __( 'Phone (tel: format)', 'somalab' ), 'section' => 'somalab_footer', 'type' => 'text' ) );

	$wp_customize->add_setting( 'contact_phone_display', array( 'default' => '+61 414 430 113', 'sanitize_callback' => 'sanitize_text_field' ) );
	$wp_customize->add_control( 'contact_phone_display', array( 'label' => __( 'Phone (display)', 'somalab' ), 'section' => 'somalab_footer', 'type' => 'text' ) );

	// Social URLs
	$wp_customize->add_setting( 'social_instagram', array( 'default' => 'https://instagram.com/somalab.au', 'sanitize_callback' => 'esc_url_raw' ) );
	$wp_customize->add_control( 'social_instagram', array( 'label' => __( 'Instagram URL', 'somalab' ), 'section' => 'somalab_footer', 'type' => 'url' ) );

	$wp_customize->add_setting( 'social_facebook', array( 'default' => 'https://facebook.com/somalab', 'sanitize_callback' => 'esc_url_raw' ) );
	$wp_customize->add_control( 'social_facebook', array( 'label' => __( 'Facebook URL', 'somalab' ), 'section' => 'somalab_footer', 'type' => 'url' ) );

	// ABN
	$wp_customize->add_setting( 'footer_abn', array( 'default' => 'ABN: 00 000 000 000', 'sanitize_callback' => 'sanitize_text_field' ) );
	$wp_customize->add_control( 'footer_abn', array( 'label' => __( 'ABN', 'somalab' ), 'section' => 'somalab_footer', 'type' => 'text' ) );
}
add_action( 'customize_register', 'somalab_customize_register' );
