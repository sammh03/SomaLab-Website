<footer class="site-footer">
	<!-- Main Footer -->
	<div class="footer-main">
		<div class="container">
			<div class="footer-grid">
				<!-- Brand Column -->
				<div class="footer-brand">
					<?php
					$footer_logo = '';
					if ( has_custom_logo() ) {
						$logo_id    = get_theme_mod( 'custom_logo' );
						$footer_logo = wp_get_attachment_image_url( $logo_id, 'full' );
					} else {
						$footer_logo = get_template_directory_uri() . '/assets/images/somalab-logo.png';
					}
					?>
					<img src="<?php echo esc_url( $footer_logo ); ?>" alt="<?php bloginfo( 'name' ); ?>" class="footer-logo">
					<p><?php echo esc_html( get_theme_mod( 'footer_tagline', 'SomaLab provides evidence-based nutrition consulting to help health-conscious Australians achieve sustainable fat loss, peak performance, and genuine wellbeing.' ) ); ?></p>
				</div>

				<!-- Quick Links -->
				<div class="footer-col">
					<h4>Quick Links</h4>
					<ul>
						<li><a href="<?php echo esc_url( home_url( '/about/' ) ); ?>">About Us</a></li>
						<li><a href="<?php echo esc_url( home_url( '/services/' ) ); ?>">Services &amp; Pricing</a></li>
						<li><a href="<?php echo esc_url( home_url( '/blog/' ) ); ?>">Health Blog</a></li>
						<li><a href="<?php echo esc_url( home_url( '/store/' ) ); ?>">Store</a></li>
					</ul>
				</div>

				<!-- Contact -->
				<div class="footer-col">
					<h4>Contact</h4>
					<ul class="footer-contact">
						<li>
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
							<a href="mailto:<?php echo esc_attr( get_theme_mod( 'contact_email', 'info@somalab.com.au' ) ); ?>"><?php echo esc_html( get_theme_mod( 'contact_email', 'info@somalab.com.au' ) ); ?></a>
						</li>
						<li>
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
							<a href="tel:<?php echo esc_attr( get_theme_mod( 'contact_phone', '+61414430113' ) ); ?>"><?php echo esc_html( get_theme_mod( 'contact_phone_display', '+61 414 430 113' ) ); ?></a>
						</li>
					</ul>
				</div>

				<!-- Connect -->
				<div class="footer-col">
					<h4>Connect</h4>
					<div class="footer-social">
						<?php $instagram_url = get_theme_mod( 'social_instagram', 'https://instagram.com/somalab' ); ?>
						<?php if ( $instagram_url ) : ?>
							<a href="<?php echo esc_url( $instagram_url ); ?>" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="Follow SomaLab on Instagram">
								<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
							</a>
						<?php endif; ?>

						<?php $facebook_url = get_theme_mod( 'social_facebook', 'https://facebook.com/share/1KKJJyEUt' ); ?>
						<?php if ( $facebook_url ) : ?>
							<a href="<?php echo esc_url( $facebook_url ); ?>" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="Follow SomaLab on Facebook">
								<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
							</a>
						<?php endif; ?>
					</div>
					<a href="<?php echo esc_url( get_theme_mod( 'booking_url', 'https://calendly.com' ) ); ?>" target="_blank" rel="noopener noreferrer" class="btn btn-accent">
						Book a Consultation
					</a>
				</div>
			</div>
		</div>
	</div>

	<!-- Disclaimer -->
	<div class="footer-disclaimer">
		<div class="container">
			<p><strong>Disclaimer:</strong> The information provided by SomaLab is for general educational and informational purposes only. It is not intended as a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. Nutrition consulting services provided by SomaLab are intended to complement, not replace, medical care. Individual results may vary.</p>
			<div class="footer-legal">
				<a href="<?php echo esc_url( home_url( '/privacy-policy/' ) ); ?>">Privacy Policy</a>
				<span class="legal-sep">&bull;</span>
				<a href="<?php echo esc_url( home_url( '/terms/' ) ); ?>">Terms &amp; Conditions</a>
				<span class="legal-sep">&bull;</span>
				<span><?php echo esc_html( get_theme_mod( 'footer_abn', 'ABN: 00 000 000 000' ) ); ?></span>
			</div>
		</div>
	</div>

	<!-- Copyright -->
	<div class="footer-copyright">
		<div class="container">
			<p>&copy; <?php echo date( 'Y' ); ?> <?php bloginfo( 'name' ); ?>. All rights reserved.</p>
		</div>
	</div>
</footer>

<?php wp_footer(); ?>
</body>
</html>
