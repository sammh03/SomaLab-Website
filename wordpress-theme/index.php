<?php
/**
 * Main Index Template
 *
 * Falls back to front-page.php for the homepage.
 * For blog posts or other pages, displays a simple loop.
 *
 * @package SomaLab
 */

get_header();
?>

<main class="container" style="padding-top: 7rem; min-height: 60vh;">
	<?php if ( have_posts() ) : ?>
		<?php while ( have_posts() ) : the_post(); ?>
			<article class="fade-up" style="margin-bottom: 3rem;">
				<h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
				<p style="color: var(--muted-fg); font-size: 0.875rem; margin: 0.5rem 0 1rem;">
					<?php echo get_the_date(); ?>
				</p>
				<div><?php the_excerpt(); ?></div>
			</article>
		<?php endwhile; ?>

		<div style="text-align: center; margin: 2rem 0;">
			<?php the_posts_navigation(); ?>
		</div>
	<?php else : ?>
		<p>No content found.</p>
	<?php endif; ?>
</main>

<?php get_footer(); ?>
