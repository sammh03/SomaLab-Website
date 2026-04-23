<?php
/**
 * Single Post Template — Article Reading Experience
 *
 * Premium long-form layout for individual blog posts. Matches the
 * React Article page: large header, featured cover image, generous
 * type for body content, and related posts at the bottom.
 *
 * @package SomaLab
 */

get_header();

while ( have_posts() ) : the_post();
	$categories = get_the_category();
	$primary_cat = $categories ? $categories[0] : null;
?>

<article class="single-article">

	<!-- Header -->
	<header class="single-article-header" style="background-color: var(--secondary); padding-top: 8rem; padding-bottom: 3rem;">
		<div class="container" style="max-width: 56rem;">
			<a href="<?php echo esc_url( get_permalink( get_option( 'page_for_posts' ) ) ?: home_url( '/blog' ) ); ?>" style="display: inline-flex; align-items: center; gap: 0.5rem; color: var(--muted-fg); text-decoration: none; font-size: 0.875rem; margin-bottom: 2rem;">
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
				Back to Journal
			</a>

			<?php if ( $primary_cat ) : ?>
				<span class="badge badge-accent" style="text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 1.5rem; display: inline-block;"><?php echo esc_html( $primary_cat->name ); ?></span>
			<?php endif; ?>

			<h1 style="font-family: var(--font-heading); font-size: clamp(2rem, 5vw, 3.75rem); font-weight: 700; line-height: 1.1; color: var(--fg); margin-bottom: 1.5rem;"><?php the_title(); ?></h1>

			<?php if ( has_excerpt() ) : ?>
				<p style="font-size: 1.125rem; color: var(--muted-fg); max-width: 42rem; line-height: 1.7; margin-bottom: 2rem;"><?php echo esc_html( get_the_excerpt() ); ?></p>
			<?php endif; ?>

			<div style="display: flex; flex-wrap: wrap; gap: 1.5rem; font-size: 0.875rem; color: var(--muted-fg); border-top: 1px solid var(--border); padding-top: 1.5rem;">
				<span style="display: inline-flex; align-items: center; gap: 0.5rem;">
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
					<?php the_author(); ?>
				</span>
				<span style="display: inline-flex; align-items: center; gap: 0.5rem;">
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
					<?php echo get_the_date(); ?>
				</span>
			</div>
		</div>
	</header>

	<!-- Cover image -->
	<?php if ( has_post_thumbnail() ) : ?>
		<div class="container" style="max-width: 64rem; margin-top: -1rem; margin-bottom: 3rem;">
			<div style="aspect-ratio: 16/9; overflow: hidden; border-radius: 1rem; box-shadow: 0 10px 30px -10px hsl(168 36% 20% / 0.2);">
				<?php the_post_thumbnail( 'full', array( 'style' => 'width: 100%; height: 100%; object-fit: cover;' ) ); ?>
			</div>
		</div>
	<?php endif; ?>

	<!-- Body -->
	<section style="padding-bottom: 5rem;">
		<div class="container" style="max-width: 44rem;">
			<div class="article-body" style="font-size: 1.125rem; line-height: 1.85; color: hsl(168 36% 20% / 0.9);">
				<?php the_content(); ?>
			</div>
		</div>
	</section>

	<!-- Related Posts -->
	<?php
	$related = new WP_Query( array(
		'post_type'      => 'post',
		'posts_per_page' => 3,
		'post__not_in'   => array( get_the_ID() ),
		'orderby'        => 'rand',
	) );

	if ( $related->have_posts() ) :
	?>
		<section class="section-padding" style="background-color: var(--secondary);">
			<div class="container" style="max-width: 64rem;">
				<h2 style="font-family: var(--font-heading); font-size: clamp(1.5rem, 3vw, 2rem); font-weight: 600; margin-bottom: 2rem;">Continue Reading</h2>
				<div class="blog-grid">
					<?php while ( $related->have_posts() ) : $related->the_post();
						$rcats = get_the_category();
					?>
						<a href="<?php the_permalink(); ?>" class="blog-card" style="display: block; text-decoration: none; color: inherit;">
							<?php if ( has_post_thumbnail() ) : ?>
								<div class="blog-card-image"><?php the_post_thumbnail( 'medium' ); ?></div>
							<?php endif; ?>
							<div class="blog-card-content">
								<?php if ( $rcats ) : ?>
									<p style="font-size: 0.75rem; color: var(--accent); font-weight: 500; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.5rem;"><?php echo esc_html( $rcats[0]->name ); ?></p>
								<?php endif; ?>
								<h3 style="font-family: var(--font-heading); font-size: 1.125rem; font-weight: 600;"><?php the_title(); ?></h3>
							</div>
						</a>
					<?php endwhile; wp_reset_postdata(); ?>
				</div>
			</div>
		</section>
	<?php endif; ?>

</article>

<?php endwhile; ?>

<?php get_footer(); ?>
