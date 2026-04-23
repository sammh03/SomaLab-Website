<?php
/**
 * Front Page Template
 *
 * @package SomaLab
 */

get_header();

$booking_url = get_theme_mod( 'booking_url', 'https://calendly.com' );
$hero_image  = get_theme_mod( 'hero_image', get_template_directory_uri() . '/assets/images/hero-image.jpg' );
$coach_image = get_theme_mod( 'coach_image', get_template_directory_uri() . '/assets/images/coach-portrait.jpg' );
?>

<!-- Hero Section -->
<section class="hero section-padding" id="hero" style="padding-top: 8rem;">
	<div class="hero-bg">
		<img src="<?php echo esc_url( $hero_image ); ?>" alt="Fresh healthy foods and nutritious ingredients">
		<div class="hero-overlay"></div>
	</div>

	<div class="container">
		<div class="hero-content fade-up">
			<span class="badge badge-accent"><?php echo esc_html( get_theme_mod( 'hero_badge', 'Evidence-Based Nutrition Consulting' ) ); ?></span>

			<h1 style="margin-top: 1.5rem;">
				Achieve Lasting <span class="text-gradient">Health</span><br>
				With Science, Not Fads
			</h1>

			<p><?php echo esc_html( get_theme_mod( 'hero_text', 'SomaLab helps health-conscious Australians achieve sustainable fat loss, peak performance, and total wellbeing through personalised, evidence-based nutrition coaching. No restrictive diets. No quick fixes. Just real results.' ) ); ?></p>

			<div class="hero-buttons">
				<a href="<?php echo esc_url( $booking_url ); ?>" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-lg">
					Book a Free Consultation
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
				</a>
				<a href="<?php echo esc_url( home_url( '/services/' ) ); ?>" class="btn btn-outline btn-lg">View Our Services</a>
			</div>
		</div>
	</div>
</section>

<!-- Why Choose SomaLab -->
<section class="why-section section-padding" id="why">
	<div class="container">
		<div class="section-header fade-up">
			<h2>Why Choose SomaLab?</h2>
			<p>We combine scientific rigour with personalised care to deliver nutrition strategies that actually work for your unique body and lifestyle.</p>
		</div>

		<div class="features-grid">
			<div class="feature-card fade-up">
				<div class="feature-icon">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"/><path d="M8.5 2h7"/><path d="M7 16h10"/></svg>
				</div>
				<h3>Evidence-Based Methods</h3>
				<p>Every recommendation is grounded in peer-reviewed research and clinical best practices—no fads or pseudoscience.</p>
			</div>

			<div class="feature-card fade-up">
				<div class="feature-icon">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11 20A7 7 0 0 1 9.8 6.9C15.5 4.9 17 3.5 17 3.5s1.5 2.5-.5 6c2-1.5 3.5-4 3.5-4s1 3.5-2 8c-2.5 3.5-5 4-7 4.5"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>
				</div>
				<h3>Personalised Strategies</h3>
				<p>Your plan is tailored to your body, goals, food preferences, and lifestyle. No one-size-fits-all approaches here.</p>
			</div>

			<div class="feature-card fade-up">
				<div class="feature-icon">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
				</div>
				<h3>Holistic Wellbeing Focus</h3>
				<p>We address nutrition alongside sleep, stress, and movement because true health requires a whole-body approach.</p>
			</div>

			<div class="feature-card fade-up">
				<div class="feature-icon">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
				</div>
				<h3>Genuine Support &amp; Accountability</h3>
				<p>Regular check-ins, responsive communication, and genuine care to keep you motivated and on track.</p>
			</div>
		</div>
	</div>
</section>

<!-- How It Works -->
<section class="section-padding" id="how">
	<div class="container">
		<div class="section-header fade-up">
			<span class="badge badge-primary">Your Journey</span>
			<h2 style="margin-top: 1rem;">How It Works</h2>
			<p>Getting started is simple. Here's what to expect when you partner with SomaLab.</p>
		</div>

		<div class="steps-grid">
			<div class="step-card fade-up">
				<span class="step-number">01</span>
				<div class="step-content">
					<div class="step-icon">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
					</div>
					<h3>Book Your Free Consultation</h3>
					<p>Schedule a complimentary 30-minute discovery call to discuss your health goals and see if we're the right fit for you.</p>
				</div>
			</div>

			<div class="step-card fade-up">
				<span class="step-number">02</span>
				<div class="step-content">
					<div class="step-icon">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"/><path d="M8.5 2h7"/><path d="M7 16h10"/></svg>
					</div>
					<h3>Comprehensive Assessment</h3>
					<p>We analyse your lifestyle, dietary habits, health history, and goals to create a complete picture of your nutritional needs.</p>
				</div>
			</div>

			<div class="step-card fade-up">
				<span class="step-number">03</span>
				<div class="step-content">
					<div class="step-icon">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M22 12h-4"/><path d="M6 12H2"/><path d="M12 6V2"/><path d="M12 22v-4"/></svg>
					</div>
					<h3>Personalised Plan Creation</h3>
					<p>Receive a tailored nutrition strategy designed specifically for your body, preferences, and lifestyle—no cookie-cutter approaches.</p>
				</div>
			</div>

			<div class="step-card fade-up">
				<span class="step-number">04</span>
				<div class="step-content">
					<div class="step-icon">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
					</div>
					<h3>Ongoing Support &amp; Results</h3>
					<p>Regular check-ins, plan adjustments, and accountability coaching ensure you achieve sustainable, long-term transformation.</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Meet Your Coach -->
<section class="about-section section-padding" id="coach">
	<div class="container">
		<div class="about-grid">
			<div class="about-image fade-left">
				<img src="<?php echo esc_url( $coach_image ); ?>" alt="SomaLab Founder — Nutrition Consultant and Health Coach">
			</div>

			<div class="about-text fade-right">
				<span class="badge badge-primary">Meet Your Coach</span>
				<h2 style="margin-top: 1rem;"><?php echo esc_html( get_theme_mod( 'coach_heading', 'Science Meets Compassion' ) ); ?></h2>
				<p><?php echo esc_html( get_theme_mod( 'coach_bio_1', 'With a background in medical laboratory science and advanced qualifications in nutrition consulting, I founded SomaLab to bridge the gap between clinical evidence and practical, everyday wellness. I\'ve helped hundreds of Australians transform their relationship with food and achieve lasting results.' ) ); ?></p>
				<p><?php echo esc_html( get_theme_mod( 'coach_bio_2', 'Whether you\'re looking to optimise body composition, boost your energy, improve athletic performance, or simply feel your best, I\'m here to guide you with evidence-based strategies tailored to your unique needs.' ) ); ?></p>
				<a href="<?php echo esc_url( home_url( '/about/' ) ); ?>" class="btn btn-primary">
					Learn More About Me
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Google Reviews removed for now -->

<!-- CTA Section -->
<section class="cta-section section-padding">
	<div class="container">
		<div class="fade-up" style="text-align: center;">
			<h2><?php echo esc_html( get_theme_mod( 'cta_heading', 'Ready to Transform Your Health?' ) ); ?></h2>
			<p><?php echo esc_html( get_theme_mod( 'cta_text', 'Take the first step towards sustainable health and wellbeing. Book your free 30-minute consultation today and discover how personalised nutrition coaching can help you achieve your goals.' ) ); ?></p>
			<a href="<?php echo esc_url( $booking_url ); ?>" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-lg">
				Book Your Free Consultation
				<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
			</a>
		</div>
	</div>
</section>

<?php get_footer(); ?>
