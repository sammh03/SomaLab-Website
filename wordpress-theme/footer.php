<footer class="site-footer">
	<div class="container">
		<div class="footer-grid">
			<div class="footer-brand">
				<span class="text-gradient">SomaLab</span>
				<p><?php echo esc_html( get_theme_mod( 'footer_tagline', 'Evidence-based nutrition consulting for health-conscious Australians. Achieve sustainable results with science, not fads.' ) ); ?></p>
			</div>

			<div class="footer-col">
				<h4>Navigation</h4>
				<ul>
					<li><a href="#hero">Home</a></li>
					<li><a href="#why">Why SomaLab</a></li>
					<li><a href="#how">How It Works</a></li>
					<li><a href="#coach">About</a></li>
					<li><a href="#reviews">Reviews</a></li>
				</ul>
			</div>

			<div class="footer-col">
				<h4>Services</h4>
				<ul>
					<li><a href="#how">Initial Consultation</a></li>
					<li><a href="#how">Follow-Up Sessions</a></li>
					<li><a href="#how">12-Week Program</a></li>
					<li><a href="#how">Sports Nutrition</a></li>
				</ul>
			</div>

			<div class="footer-col">
				<h4>Connect</h4>
				<ul>
					<li><a href="<?php echo esc_url( get_theme_mod( 'booking_url', 'https://calendly.com' ) ); ?>" target="_blank" rel="noopener noreferrer">Book a Consultation</a></li>
					<li><a href="<?php echo esc_url( get_theme_mod( 'google_reviews_url', 'https://www.google.com/maps' ) ); ?>" target="_blank" rel="noopener noreferrer">Google Reviews</a></li>
				</ul>
			</div>
		</div>

		<div class="footer-bottom">
			<p>&copy; <?php echo date( 'Y' ); ?> <?php bloginfo( 'name' ); ?>. All rights reserved.</p>
			<p>SomaLab provides general nutrition and wellness information. Always consult a qualified healthcare professional before making changes to your diet or health regimen.</p>
		</div>
	</div>
</footer>

<?php wp_footer(); ?>
</body>
</html>
