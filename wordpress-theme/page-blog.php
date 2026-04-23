<?php
/**
 * Template Name: Blog
 *
 * SomaLab Journal page.
 *
 * Behaviour:
 *  - When NO published posts exist → shows a polished "Coming Soon" state.
 *  - When posts exist → automatically renders the editorial featured + grid layout.
 *
 * Adding new articles is as easy as publishing a new WordPress post — the
 * grid is fully reusable and each card links to its own single-post page.
 *
 * @package SomaLab
 */

get_header();

$blog_query = new WP_Query( array(
	'post_type'      => 'post',
	'posts_per_page' => 10,
	'post_status'    => 'publish',
) );

$has_posts = $blog_query->have_posts();
?>

<!-- Hero -->
<section class="page-hero section-padding" style="background-color: var(--secondary); padding-top: 8rem;">
	<div class="container">
		<div class="page-hero-center fade-up">
			<span class="badge badge-accent">SomaLab Journal</span>
			<h1 style="margin-top: 1.5rem;">
				<?php echo $has_posts ? 'Insights &amp; Research' : 'Insights &amp; Research Coming Soon'; ?>
			</h1>
			<p>
				<?php echo $has_posts
					? 'Evidence-based nutrition, performance, and longevity insights from the SomaLab team.'
					: 'We&rsquo;re building a space for science-backed insights, education, and optimisation. Stay tuned.'; ?>
			</p>
		</div>
	</div>
</section>

<?php if ( ! $has_posts ) : ?>

	<!-- Coming Soon State -->
	<section class="section-padding">
		<div class="container">
			<div class="fade-up" style="max-width: 36rem; margin: 0 auto; text-align: center;">
				<div style="display: inline-flex; align-items: center; justify-content: center; width: 3.5rem; height: 3.5rem; border-radius: 9999px; background-color: hsl(25, 90%, 55%, 0.1); margin-bottom: 1.5rem;">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
						<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
						<path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
					</svg>
				</div>

				<h2 style="font-family: var(--font-heading); font-size: clamp(1.5rem, 3vw, 1.875rem); font-weight: 600; color: var(--fg); margin-bottom: 0.75rem;">
					Good things take time.
				</h2>
				<p style="color: var(--muted-fg); line-height: 1.7;">
					Real articles on nutrition, training, and longevity &mdash; coming soon.
				</p>
			</div>
		</div>
	</section>

<?php else : ?>

	<!-- Editorial Posts Grid -->
	<section class="section-padding">
		<div class="container">

			<!-- Featured Post -->
			<?php $blog_query->the_post(); ?>
			<div class="featured-post fade-up">
				<div class="featured-post-grid">
					<?php if ( has_post_thumbnail() ) : ?>
						<div class="featured-post-image">
							<a href="<?php the_permalink(); ?>"><?php the_post_thumbnail( 'large' ); ?></a>
						</div>
					<?php endif; ?>
					<div class="featured-post-content">
						<?php $categories = get_the_category(); if ( $categories ) : ?>
							<div class="post-meta">
								<span class="badge badge-accent"><?php echo esc_html( $categories[0]->name ); ?></span>
								<span class="post-date"><?php echo get_the_date(); ?></span>
							</div>
						<?php endif; ?>
						<h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
						<p><?php echo esc_html( wp_trim_words( get_the_excerpt(), 40 ) ); ?></p>
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
									<a href="<?php the_permalink(); ?>"><?php the_post_thumbnail( 'medium_large' ); ?></a>
								</div>
							<?php endif; ?>
							<div class="blog-card-content">
								<div class="post-meta">
									<?php $cats = get_the_category(); if ( $cats ) : ?>
										<span class="badge badge-accent" style="font-size: 0.75rem; padding: 0.25rem 0.75rem;"><?php echo esc_html( $cats[0]->name ); ?></span>
									<?php endif; ?>
									<span class="post-date"><?php echo get_the_date(); ?></span>
								</div>
								<h3><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
								<p><?php echo esc_html( wp_trim_words( get_the_excerpt(), 25 ) ); ?></p>
								<a href="<?php the_permalink(); ?>" class="read-more-link">
									Read More
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
								</a>
							</div>
						</article>
					<?php endwhile; ?>
				</div>
			<?php endif; ?>

		</div>
	</section>

<?php endif; wp_reset_postdata(); ?>

<?php get_footer(); ?>
