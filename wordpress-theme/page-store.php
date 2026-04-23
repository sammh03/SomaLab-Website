<?php
/**
 * Template Name: Store
 *
 * @package SomaLab
 */

get_header();

$contact_email = get_theme_mod( 'contact_email', 'info@somalab.com.au' );
?>

<section class="store-coming-soon" style="min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 8rem 0 6rem; background-color: var(--secondary);">
	<div class="container">
		<div class="coming-soon-inner fade-up" style="max-width: 640px; margin: 0 auto; text-align: center;">

			<div class="coming-soon-icon" style="display: inline-flex; align-items: center; justify-content: center; width: 4rem; height: 4rem; border-radius: 9999px; background-color: hsl(var(--accent) / 0.1); margin-bottom: 2rem;">
				<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: hsl(var(--accent));">
					<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>
				</svg>
			</div>

			<span class="badge badge-accent" style="text-transform: uppercase; letter-spacing: 0.05em;">SomaLab Store</span>

			<h1 style="margin-top: 1.5rem; font-size: clamp(3rem, 6vw, 4.5rem); line-height: 1.05; letter-spacing: -0.02em;">Coming Soon</h1>

			<div style="width: 4rem; height: 1px; background-color: hsl(var(--accent)); margin: 2rem auto;"></div>

			<p style="font-size: 1.125rem; color: hsl(var(--muted-foreground)); line-height: 1.7; max-width: 520px; margin: 0 auto 2.5rem;">
				We're carefully developing a range of premium, science-backed products. Stay tuned.
			</p>

			<div class="coming-soon-cta" style="display: flex; flex-wrap: wrap; gap: 1rem; justify-content: center;">
				<a href="mailto:<?php echo esc_attr( $contact_email ); ?>?subject=Notify me when the SomaLab Store launches" class="btn btn-primary btn-lg">Notify Me</a>
				<a href="<?php echo esc_url( get_theme_mod( 'booking_url', 'https://calendly.com' ) ); ?>" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-lg">Book a Consultation</a>
			</div>

		</div>
	</div>
</section>

<?php get_footer(); ?>
