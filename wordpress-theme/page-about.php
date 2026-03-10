<?php
/**
 * Template Name: About
 * 
 * @package SomaLab
 */

get_header();

$booking_url = get_theme_mod( 'booking_url', 'https://calendly.com' );
$coach_image = get_theme_mod( 'coach_image', get_template_directory_uri() . '/assets/images/coach-portrait.jpg' );
?>

<!-- Hero -->
<section class="page-hero section-padding" style="padding-top: 8rem;">
	<div class="container">
		<div class="page-hero-center fade-up">
			<span class="badge badge-accent">About SomaLab</span>
			<h1 style="margin-top: 1.5rem;">Where Science Meets <span class="text-gradient">Personalised Care</span></h1>
			<p>SomaLab was founded on a simple belief: everyone deserves access to evidence-based nutrition guidance that's tailored to their unique body, lifestyle, and goals. We're here to cut through the noise and help you achieve sustainable health outcomes.</p>
		</div>
	</div>
</section>

<!-- Founder Story -->
<section class="section-padding">
	<div class="container">
		<div class="about-grid">
			<div class="about-image fade-left">
				<img src="<?php echo esc_url( $coach_image ); ?>" alt="SomaLab founder and nutrition consultant" style="aspect-ratio: 4/5; object-fit: cover;">
			</div>
			<div class="about-text fade-right">
				<span class="badge badge-accent">The SomaLab Story</span>
				<h2 style="margin-top: 1rem;">From Lab Coat to Life Coach</h2>
				<p>My journey to founding SomaLab began in the medical laboratory, where I spent years analysing blood samples and observing firsthand how lifestyle factors impact health markers. I saw patterns—clients whose test results improved dramatically through nutrition changes, and others who struggled despite following generic diet advice.</p>
				<p>This sparked a passion that led me to pursue advanced qualifications in nutrition consulting. I realised that what people needed wasn't another restrictive diet—they needed personalised, science-backed guidance that fit their real lives.</p>
				<p>Today, SomaLab combines my clinical background with a deep commitment to helping health-conscious Australians achieve sustainable fat loss, improved performance, and genuine wellbeing. No quick fixes. No one-size-fits-all plans. Just evidence-based strategies that work.</p>
				<div class="check-list">
					<span class="check-item">
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
						Evidence-Based Methods
					</span>
					<span class="check-item">
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
						Australian Qualified
					</span>
					<span class="check-item">
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
						500+ Clients Helped
					</span>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Mission & Vision -->
<section class="section-padding" style="background-color: var(--secondary);">
	<div class="container">
		<div class="two-col-grid">
			<div class="card-box fade-up">
				<h2>Our Mission</h2>
				<p>To empower Australians to take control of their health through personalised, evidence-based nutrition coaching. We believe that sustainable wellbeing shouldn't require extreme measures—just the right guidance, tailored to you.</p>
			</div>
			<div class="card-box fade-up">
				<h2>Our Vision</h2>
				<p>A world where preventive health through proper nutrition is accessible to all. We envision communities where people are educated, empowered, and enthusiastic about making food choices that fuel their best lives—free from diet culture and misinformation.</p>
			</div>
		</div>
	</div>
</section>

<!-- Credentials -->
<section class="section-padding">
	<div class="container">
		<div class="section-header fade-up">
			<span class="badge badge-accent">Credentials &amp; Affiliations</span>
			<h2 style="margin-top: 1rem;">Qualified &amp; Committed</h2>
			<p>Your health is too important for unqualified advice. Here's why you can trust SomaLab.</p>
		</div>

		<div class="features-grid">
			<div class="feature-card fade-up">
				<div class="feature-icon">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>
				</div>
				<h3>Qualified Nutrition Consultant</h3>
				<p>Diploma of Nutrition from an accredited Australian institution</p>
			</div>
			<div class="feature-card fade-up">
				<div class="feature-icon">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
				</div>
				<h3>Medical Laboratory Scientist</h3>
				<p>Bachelor of Medical Laboratory Science with clinical experience</p>
			</div>
			<div class="feature-card fade-up">
				<div class="feature-icon">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>
				</div>
				<h3>Professional Membership</h3>
				<p>Member of the Nutrition Society of Australia (NSA)</p>
			</div>
			<div class="feature-card fade-up">
				<div class="feature-icon">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
				</div>
				<h3>Continuing Education</h3>
				<p>Ongoing professional development in sports nutrition and metabolic health</p>
			</div>
		</div>
	</div>
</section>

<!-- Our Values -->
<section class="section-padding" style="background-color: var(--secondary);">
	<div class="container">
		<div class="section-header fade-up">
			<span class="badge badge-accent">Our Values</span>
			<h2 style="margin-top: 1rem;">What We Stand For</h2>
			<p>These core values guide everything we do at SomaLab, from how we work with clients to how we develop our programs.</p>
		</div>

		<div class="features-grid">
			<div class="feature-card fade-up">
				<div class="feature-icon">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
				</div>
				<h3>Client-Centred Care</h3>
				<p>Your goals, preferences, and lifestyle are at the heart of every recommendation. We listen first, then create strategies that work for you.</p>
			</div>
			<div class="feature-card fade-up">
				<div class="feature-icon">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M22 12h-4"/><path d="M6 12H2"/><path d="M12 6V2"/><path d="M12 22v-4"/></svg>
				</div>
				<h3>Evidence-Based Practice</h3>
				<p>Every recommendation is grounded in peer-reviewed research and clinical best practices. No fads, no pseudoscience—just what works.</p>
			</div>
			<div class="feature-card fade-up">
				<div class="feature-icon">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
				</div>
				<h3>Genuine Partnership</h3>
				<p>We're not here to lecture. We work alongside you, providing support, accountability, and expertise when you need it most.</p>
			</div>
			<div class="feature-card fade-up">
				<div class="feature-icon">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11 20A7 7 0 0 1 9.8 6.9C15.5 4.9 17 3.5 17 3.5s1.5 2.5-.5 6c2-1.5 3.5-4 3.5-4s1 3.5-2 8c-2.5 3.5-5 4-7 4.5"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>
				</div>
				<h3>Sustainable Outcomes</h3>
				<p>Quick fixes don't last. We focus on building lifelong habits and empowering you with the knowledge to maintain your results.</p>
			</div>
		</div>
	</div>
</section>

<!-- How We Work -->
<section class="section-padding">
	<div class="container">
		<div class="section-header fade-up">
			<span class="badge badge-accent">Our Process</span>
			<h2 style="margin-top: 1rem;">How We Work With You</h2>
			<p>Our structured yet flexible approach ensures you receive the support and guidance you need at every stage of your wellness journey.</p>
		</div>

		<div class="steps-grid">
			<div class="step-card fade-up">
				<span class="step-number">01</span>
				<div class="step-content">
					<h3>Initial Consultation</h3>
					<p>We begin with a comprehensive assessment of your current health, lifestyle, dietary habits, and goals. This helps us understand your unique situation and identify opportunities for improvement.</p>
				</div>
			</div>
			<div class="step-card fade-up">
				<span class="step-number">02</span>
				<div class="step-content">
					<h3>Custom Plan Creation</h3>
					<p>Based on your assessment, we craft a personalised nutrition strategy that fits your lifestyle, food preferences, budget, and objectives—never a cookie-cutter approach.</p>
				</div>
			</div>
			<div class="step-card fade-up">
				<span class="step-number">03</span>
				<div class="step-content">
					<h3>Implementation Support</h3>
					<p>We guide you through putting your plan into action with practical tips, meal ideas, and strategies to overcome common challenges and build lasting habits.</p>
				</div>
			</div>
			<div class="step-card fade-up">
				<span class="step-number">04</span>
				<div class="step-content">
					<h3>Ongoing Optimisation</h3>
					<p>Regular check-ins allow us to track your progress, celebrate wins, navigate obstacles, and fine-tune your plan as your needs evolve.</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- CTA -->
<section class="cta-section section-padding">
	<div class="container">
		<div class="fade-up" style="text-align: center;">
			<h2>Ready to Start Your Journey?</h2>
			<p>Join hundreds of Australians who have transformed their health with SomaLab. Book a free consultation today and take the first step toward sustainable wellbeing.</p>
			<div class="cta-buttons">
				<a href="<?php echo esc_url( $booking_url ); ?>" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-lg">
					Book Free Consultation
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
				</a>
				<a href="<?php echo esc_url( home_url( '/services/' ) ); ?>" class="btn btn-outline-light btn-lg">View Our Services</a>
			</div>
		</div>
	</div>
</section>

<?php get_footer(); ?>
