<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="description" content="SomaLab — Evidence-based nutrition consulting for health-conscious Australians. Personalised coaching for sustainable fat loss, peak performance, and total wellbeing.">
	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<?php
$booking_url = get_theme_mod( 'booking_url', 'https://calendly.com' );
$logo_url    = '';
if ( has_custom_logo() ) {
	$logo_id  = get_theme_mod( 'custom_logo' );
	$logo_url = wp_get_attachment_image_url( $logo_id, 'full' );
} else {
	$logo_url = get_template_directory_uri() . '/assets/images/somalab-logo.png';
}
?>

<header class="navbar" id="navbar">
	<div class="container">
		<a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="navbar-brand">
			<img src="<?php echo esc_url( $logo_url ); ?>" alt="<?php bloginfo( 'name' ); ?>">
			<span class="text-gradient"><?php bloginfo( 'name' ); ?></span>
		</a>

		<?php if ( has_nav_menu( 'primary' ) ) : ?>
			<?php
			wp_nav_menu( array(
				'theme_location' => 'primary',
				'container'      => false,
				'menu_class'     => 'navbar-links',
				'items_wrap'     => '<ul class="%2$s">%3$s</ul>',
				'depth'          => 1,
			) );
			?>
		<?php else : ?>
			<ul class="navbar-links">
				<li><a href="<?php echo esc_url( home_url( '/' ) ); ?>">Home</a></li>
				<li><a href="<?php echo esc_url( home_url( '/about/' ) ); ?>">About</a></li>
				<li><a href="<?php echo esc_url( home_url( '/services/' ) ); ?>">Services</a></li>
				<li><a href="<?php echo esc_url( home_url( '/store/' ) ); ?>">Store</a></li>
				<li><a href="<?php echo esc_url( home_url( '/blog/' ) ); ?>">Blog</a></li>
			</ul>
		<?php endif; ?>

		<div class="navbar-cta">
			<a href="<?php echo esc_url( $booking_url ); ?>" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Book Now</a>
		</div>

		<button class="mobile-toggle" id="mobileToggle" aria-label="Toggle menu">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
			</svg>
		</button>
	</div>

	<div class="container">
		<?php if ( has_nav_menu( 'primary' ) ) : ?>
			<?php
			wp_nav_menu( array(
				'theme_location' => 'primary',
				'container'      => false,
				'menu_class'     => 'mobile-menu',
				'menu_id'        => 'mobileMenu',
				'items_wrap'     => '<ul id="%1$s" class="%2$s">%3$s</ul>',
				'depth'          => 1,
			) );
			?>
		<?php else : ?>
			<ul class="mobile-menu" id="mobileMenu">
				<li><a href="<?php echo esc_url( home_url( '/' ) ); ?>">Home</a></li>
				<li><a href="<?php echo esc_url( home_url( '/about/' ) ); ?>">About</a></li>
				<li><a href="<?php echo esc_url( home_url( '/services/' ) ); ?>">Services</a></li>
				<li><a href="<?php echo esc_url( home_url( '/store/' ) ); ?>">Store</a></li>
				<li><a href="<?php echo esc_url( home_url( '/blog/' ) ); ?>">Blog</a></li>
				<li><a href="<?php echo esc_url( $booking_url ); ?>" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Book Now</a></li>
			</ul>
		<?php endif; ?>
	</div>
</header>
