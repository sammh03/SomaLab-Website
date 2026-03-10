<?php
/**
 * Template Name: Store
 * 
 * @package SomaLab
 */

get_header();

$img_dir = get_template_directory_uri() . '/assets/images';
?>

<!-- Hero -->
<section class="page-hero section-padding" style="background-color: var(--secondary); padding-top: 8rem;">
	<div class="container">
		<div class="page-hero-center fade-up">
			<span class="badge badge-accent">SomaLab Store</span>
			<h1 style="margin-top: 1.5rem;">Shop Wellness Merch</h1>
			<p>Premium quality merchandise to support your wellness journey.</p>
		</div>
	</div>
</section>

<!-- Products Grid -->
<section class="section-padding">
	<div class="container">
		<div class="products-grid">

			<div class="product-card fade-up">
				<div class="product-image">
					<img src="<?php echo esc_url( $img_dir . '/merch-tshirt.jpg' ); ?>" alt="SomaLab Classic Tee">
				</div>
				<div class="product-info">
					<h3>SomaLab Classic Tee</h3>
					<p>Premium organic cotton t-shirt in our signature teal.</p>
					<div class="product-footer">
						<span class="product-price">$35</span>
						<a href="mailto:<?php echo esc_attr( get_theme_mod( 'contact_email', 'hello@somalab.com.au' ) ); ?>?subject=Order: SomaLab Classic Tee" class="btn btn-primary btn-sm">Order Now</a>
					</div>
				</div>
			</div>

			<div class="product-card fade-up">
				<div class="product-image">
					<img src="<?php echo esc_url( $img_dir . '/merch-hoodie.jpg' ); ?>" alt="Wellness Hoodie">
				</div>
				<div class="product-info">
					<h3>Wellness Hoodie</h3>
					<p>Cozy fleece-lined hoodie with minimalist embroidery.</p>
					<div class="product-footer">
						<span class="product-price">$65</span>
						<a href="mailto:<?php echo esc_attr( get_theme_mod( 'contact_email', 'hello@somalab.com.au' ) ); ?>?subject=Order: Wellness Hoodie" class="btn btn-primary btn-sm">Order Now</a>
					</div>
				</div>
			</div>

			<div class="product-card fade-up">
				<div class="product-image">
					<img src="<?php echo esc_url( $img_dir . '/merch-bottle.jpg' ); ?>" alt="Hydration Bottle">
				</div>
				<div class="product-info">
					<h3>Hydration Bottle</h3>
					<p>Insulated stainless steel bottle, keeps drinks cold for 24 hours.</p>
					<div class="product-footer">
						<span class="product-price">$28</span>
						<a href="mailto:<?php echo esc_attr( get_theme_mod( 'contact_email', 'hello@somalab.com.au' ) ); ?>?subject=Order: Hydration Bottle" class="btn btn-primary btn-sm">Order Now</a>
					</div>
				</div>
			</div>

			<div class="product-card fade-up">
				<div class="product-image">
					<img src="<?php echo esc_url( $img_dir . '/merch-tote.jpg' ); ?>" alt="Market Tote">
				</div>
				<div class="product-info">
					<h3>Market Tote</h3>
					<p>Durable canvas tote perfect for groceries and farmers markets.</p>
					<div class="product-footer">
						<span class="product-price">$25</span>
						<a href="mailto:<?php echo esc_attr( get_theme_mod( 'contact_email', 'hello@somalab.com.au' ) ); ?>?subject=Order: Market Tote" class="btn btn-primary btn-sm">Order Now</a>
					</div>
				</div>
			</div>

		</div>
	</div>
</section>

<?php get_footer(); ?>
