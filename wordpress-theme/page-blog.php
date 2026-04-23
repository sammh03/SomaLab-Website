<?php
/**
 * Template Name: Blog
 *
 * Journal index page. When no published WordPress posts exist, this
 * displays a polished "Coming Soon" state with placeholder cards.
 * As soon as posts are published, the placeholder is automatically
 * replaced by the live grid — no template changes required.
 *
 * To add a new article: WordPress Admin → Posts → Add New.
 * Set a Featured Image, Category, and Excerpt for best results.
 *
 * @package SomaLab
 */

get_header();

$blog_query = new WP_Query( array(
	'post_type'      => 'post',
	'posts_per_page' => 12,
	'post_status'    => 'publish',
) );

$has_posts = $blog_query->have_posts();
?>

<!-- Hero -->
<section class="page-hero section-padding" style="background-color: var(--secondary); padding-top: 8rem;">
	<div class="container">
		<div class="page-hero-center fade-up" style="max-width: 48rem; margin: 0 auto; text-align: center;">
			<?php if ( ! $has_posts ) : ?>
				<span class="badge badge-accent" style="display: inline-flex; align-items: center; gap: 0.5rem;">
					<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/></svg>
					Coming Soon
				</span>
				<h1 style="margin-top: 1.5rem;">
					Insights &amp; Research
					<span style="display: block; color: var(--accent);">Coming Soon</span>
				</h1>
				<div style="width: 4rem; height: 1px; background: hsl(25 90% 55% / 0.4); margin: 2rem auto;"></div>
				<p style="max-width: 36rem; margin: 0 auto;">We're building a space for science-backed insights, education, and optimisation. Stay tuned.</p>
			<?php else : ?>
				<span class="badge badge-accent">SomaLab Journal</span>
				<h1 style="margin-top: 1.5rem;">Evidence-Based Health Insights</h1>
				<p>Cutting through the noise with science-backed nutrition advice, practical wellness tips, and considered long-form writing.</p>
			<?php endif; ?>
		</div>
	</div>
</section>

<!-- Article Grid -->
<section class="section-padding">
	<div class="container">

		<?php if ( $has_posts ) : ?>

			<?php
			// Featured (most recent) post
			$blog_query->the_post();
			?>
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
						<h2><a href="<?php the_permalink(); ?>" style="color: inherit; text-decoration: none;"><?php the_title(); ?></a></h2>
						<p><?php echo wp_trim_words( get_the_excerpt(), 40 ); ?></p>
						<a href="<?php the_permalink(); ?>" class="btn btn-primary">
							Read Article
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
						</a>
					</div>
				</div>
			</div>

			<?php if ( $blog_query->post_count > 1 ) : ?>
				<div class="blog-grid" style="margin-top: 4rem;">
					<?php while ( $blog_query->have_posts() ) : $blog_query->the_post(); ?>
						<article class="blog-card fade-up">
							<div class="blog-card-image">
								<a href="<?php the_permalink(); ?>">
									<?php if ( has_post_thumbnail() ) :
										the_post_thumbnail( 'medium_large' );
									else : ?>
										<div style="aspect-ratio: 4/3; background: linear-gradient(135deg, var(--secondary), var(--muted));"></div>
									<?php endif; ?>
								</a>
							</div>
							<div class="blog-card-content">
								<div class="post-meta">
									<?php $cats = get_the_category(); if ( $cats ) : ?>
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

		<?php else :
			// Coming-soon placeholder posts. Same markup as live posts, so styling stays consistent.
			$placeholders = array(
				array( 'title' => 'The Science Behind Sustainable Fat Loss', 'excerpt' => 'A research-led breakdown of why most diets fail and what the evidence actually says about lasting body composition change.', 'category' => 'Nutrition Science', 'read_time' => '8 min read' ),
				array( 'title' => 'High-Protein Breakfasts That Keep You Full Until Lunch', 'excerpt' => 'Practical, evidence-based meal ideas designed to stabilise blood sugar, regulate appetite hormones and fuel your morning.', 'category' => 'Meal Planning', 'read_time' => '5 min read' ),
				array( 'title' => 'Fuelling Your Workouts: Pre &amp; Post-Exercise Nutrition', 'excerpt' => 'Timing your nutrition isn\'t just for elite athletes. Learn how to apply the principles of sports nutrition to your training.', 'category' => 'Sports Nutrition', 'read_time' => '7 min read' ),
				array( 'title' => 'Why Sleep Is the Most Underrated Recovery Tool', 'excerpt' => 'Poor sleep disrupts hunger hormones, raises cravings and undermines training adaptation. Here\'s what to do about it.', 'category' => 'Recovery', 'read_time' => '6 min read' ),
				array( 'title' => 'Gut Health and Athletic Performance', 'excerpt' => 'How your microbiome influences inflammation, energy and recovery — and the dietary patterns that genuinely move the needle.', 'category' => 'Wellness', 'read_time' => '9 min read' ),
				array( 'title' => 'Supplements Actually Worth Taking (According to Research)', 'excerpt' => 'Cutting through the marketing noise to highlight the small handful of supplements with strong evidence behind them.', 'category' => 'Supplementation', 'read_time' => '10 min read' ),
			);
			?>

			<div style="text-align: center; margin-bottom: 3rem;" class="fade-up">
				<p style="font-family: var(--font-heading); font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.2em; color: var(--muted-fg);">The Journal</p>
				<h2 style="margin-top: 0.75rem; font-size: clamp(1.5rem, 3vw, 2rem);">A preview of what's ahead</h2>
			</div>

			<div class="blog-grid">
				<?php foreach ( $placeholders as $i => $p ) : ?>
					<article class="blog-card placeholder-card fade-up" style="animation-delay: <?php echo esc_attr( $i * 0.08 ); ?>s;">
						<div class="blog-card-image" style="position: relative;">
							<div style="aspect-ratio: 4/3; background: linear-gradient(135deg, var(--secondary), var(--muted), hsl(168 36% 35% / 0.1));"></div>
							<div style="position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;">
								<span style="padding: 0.25rem 0.75rem; font-size: 0.6875rem; font-weight: 500; letter-spacing: 0.18em; text-transform: uppercase; background: hsl(0 0% 100% / 0.9); backdrop-filter: blur(4px); color: var(--fg); border-radius: 9999px; border: 1px solid var(--border);">Coming Soon</span>
							</div>
						</div>
						<div class="blog-card-content">
							<div class="post-meta">
								<span class="badge badge-accent" style="font-size: 0.75rem; padding: 0.25rem 0.75rem;"><?php echo esc_html( $p['category'] ); ?></span>
							</div>
							<h3 style="color: var(--fg);"><?php echo wp_kses_post( $p['title'] ); ?></h3>
							<p><?php echo esc_html( $p['excerpt'] ); ?></p>
							<div style="margin-top: 1.25rem; padding-top: 1.25rem; border-top: 1px solid var(--border); display: flex; align-items: center; justify-content: space-between; font-size: 0.875rem;">
								<span style="color: var(--muted-fg); font-size: 0.75rem;">⏱ <?php echo esc_html( $p['read_time'] ); ?></span>
								<span style="color: hsl(168 20% 45% / 0.6); font-weight: 500;">Read More →</span>
							</div>
						</div>
					</article>
				<?php endforeach; ?>
			</div>

			<p style="text-align: center; color: var(--muted-fg); font-size: 0.9375rem; max-width: 36rem; margin: 4rem auto 0;" class="fade-up">
				Our journal will feature long-form, evidence-based writing from qualified nutrition professionals — referenced, considered, and free of fads.
			</p>

		<?php endif; wp_reset_postdata(); ?>

	</div>
</section>

<?php get_footer(); ?>
