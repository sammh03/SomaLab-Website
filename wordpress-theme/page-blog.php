<?php
/**
 * Template Name: Blog
 *
 * Displays the latest posts in a grid layout matching the React design.
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
			<span class="badge badge-accent">SomaLab Blog</span>
			<h1 style="margin-top: 1.5rem;">Evidence-Based Health Insights</h1>
			<p>Cutting through the noise with science-backed nutrition advice, practical wellness tips, and delicious recipes to support your health journey.</p>
			<p style="margin-top: 1rem; font-size: 0.9375rem;">All content is written by qualified nutrition professionals and referenced to current research. No fads, no quick fixes—just trustworthy information you can use.</p>
		</div>
	</div>
</section>

<!-- Blog Posts -->
<section class="section-padding">
	<div class="container">

		<?php
		// If WordPress posts exist, show them
		$blog_query = new WP_Query( array(
			'post_type'      => 'post',
			'posts_per_page' => 10,
			'post_status'    => 'publish',
		) );

		if ( $blog_query->have_posts() ) :
		?>

			<!-- Featured Post -->
			<?php $blog_query->the_post(); ?>
			<div class="featured-post fade-up">
				<div class="featured-post-grid">
					<?php if ( has_post_thumbnail() ) : ?>
						<div class="featured-post-image">
							<?php the_post_thumbnail( 'large' ); ?>
						</div>
					<?php endif; ?>
					<div class="featured-post-content">
						<?php
						$categories = get_the_category();
						if ( $categories ) :
						?>
							<div class="post-meta">
								<span class="badge badge-accent"><?php echo esc_html( $categories[0]->name ); ?></span>
								<span class="post-date"><?php echo get_the_date(); ?></span>
							</div>
						<?php endif; ?>
						<h2><?php the_title(); ?></h2>
						<p><?php echo wp_trim_words( get_the_excerpt(), 40 ); ?></p>
						<a href="<?php the_permalink(); ?>" class="btn btn-primary">
							Read Article
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
						</a>
					</div>
				</div>
			</div>

			<!-- Rest of Posts -->
			<?php if ( $blog_query->post_count > 1 ) : ?>
				<div class="blog-grid" style="margin-top: 4rem;">
					<?php while ( $blog_query->have_posts() ) : $blog_query->the_post(); ?>
						<article class="blog-card fade-up">
							<?php if ( has_post_thumbnail() ) : ?>
								<div class="blog-card-image">
									<a href="<?php the_permalink(); ?>">
										<?php the_post_thumbnail( 'medium_large' ); ?>
									</a>
								</div>
							<?php endif; ?>
							<div class="blog-card-content">
								<div class="post-meta">
									<?php
									$cats = get_the_category();
									if ( $cats ) :
									?>
										<span class="badge badge-accent" style="font-size: 0.75rem; padding: 0.25rem 0.75rem;"><?php echo esc_html( $cats[0]->name ); ?></span>
									<?php endif; ?>
									<span class="post-date"><?php echo get_the_date(); ?></span>
								</div>
								<h3><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
								<p><?php echo wp_trim_words( get_the_excerpt(), 25 ); ?></p>
								<a href="<?php the_permalink(); ?>" class="read-more-link">
									Read More
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
								</a>
							</div>
						</article>
					<?php endwhile; ?>
				</div>
			<?php endif; ?>

		<?php else : ?>

			<!-- Fallback: Static blog content matching React -->
			<p class="fade-up" style="text-align: center; color: var(--muted-fg); margin-bottom: 2rem;">Blog posts will appear here once you publish content in WordPress.</p>

		<?php endif; wp_reset_postdata(); ?>

		<!-- Newsletter CTA -->
		<div class="newsletter-cta fade-up" style="margin-top: 4rem;">
			<h2>Get Weekly Evidence-Based Health Tips</h2>
			<p>Subscribe to our newsletter for the latest nutrition research, practical recipes, and exclusive content delivered to your inbox every week. No spam, just science.</p>
			<p style="font-size: 0.75rem; opacity: 0.6; margin-top: 1rem;">By subscribing, you agree to receive email updates from SomaLab. Unsubscribe anytime.</p>
		</div>

	</div>
</section>

<?php get_footer(); ?>
