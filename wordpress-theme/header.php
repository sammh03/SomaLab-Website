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

<?php $booking_url = get_theme_mod( 'booking_url', 'https://calendly.com' ); ?>

<header class="navbar" id="navbar">
	<div class="container">
		<a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="navbar-brand">
			<?php if ( has_custom_logo() ) : ?>
				<?php
				$logo_id  = get_theme_mod( 'custom_logo' );
				$logo_url = wp_get_attachment_image_url( $logo_id, 'full' );
				?>
				<img src="<?php echo esc_url( $logo_url ); ?>" alt="<?php bloginfo( 'name' ); ?>">
			<?php endif; ?>
			<span class="text-gradient"><?php bloginfo( 'name' ); ?></span>
		</a>

		<ul class="navbar-links">
			<li><a href="#hero">Home</a></li>
			<li><a href="#why">Why SomaLab</a></li>
			<li><a href="#how">How It Works</a></li>
			<li><a href="#coach">About</a></li>
			<li><a href="#reviews">Reviews</a></li>
		</ul>

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
		<ul class="mobile-menu" id="mobileMenu">
			<li><a href="#hero">Home</a></li>
			<li><a href="#why">Why SomaLab</a></li>
			<li><a href="#how">How It Works</a></li>
			<li><a href="#coach">About</a></li>
			<li><a href="#reviews">Reviews</a></li>
			<li><a href="<?php echo esc_url( $booking_url ); ?>" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Book Now</a></li>
		</ul>
	</div>
</header>
