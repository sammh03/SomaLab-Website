<?php
/**
 * Template Name: Services
 * 
 * @package SomaLab
 */

get_header();

$booking_url = get_theme_mod( 'booking_url', 'https://calendly.com' );
?>

<!-- Hero -->
<section class="page-hero section-padding" style="background-color: var(--secondary); padding-top: 8rem;">
	<div class="container">
		<div class="page-hero-center fade-up">
			<span class="badge badge-accent">Services &amp; Pricing</span>
			<h1 style="margin-top: 1.5rem;">Personalised Nutrition Coaching</h1>
			<p>Evidence-based nutrition consulting tailored to your goals, lifestyle, and preferences. Choose the level of support that's right for you and start your journey to sustainable health.</p>
		</div>
	</div>
</section>

<!-- Services Cards -->
<section class="section-padding">
	<div class="container">
		<div class="services-grid">

			<!-- Initial Consultation -->
			<div class="service-card fade-up">
				<div class="service-header">
					<div class="feature-icon">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
					</div>
					<h3>Initial Nutrition Consultation</h3>
					<p class="service-desc">A comprehensive first session to understand your health history, goals, and create your personalised nutrition strategy.</p>
				</div>
				<div class="service-price">
					<span class="price">$150</span>
					<span class="duration">• 75 minutes</span>
				</div>
				<div class="service-detail">
					<p class="detail-label">Who it's for:</p>
					<p>Anyone ready to take the first step toward better health—whether you're managing weight, boosting energy, or optimising performance.</p>
				</div>
				<div class="service-detail">
					<p class="detail-label">What's included:</p>
					<ul class="check-list-vertical">
						<li>Comprehensive health &amp; lifestyle assessment</li>
						<li>Dietary analysis &amp; identification of gaps</li>
						<li>Personalised nutrition recommendations</li>
						<li>Goal setting &amp; action planning</li>
						<li>Written summary &amp; resources</li>
					</ul>
				</div>
				<div class="service-outcomes">
					<p class="detail-label">Expected outcomes:</p>
					<p>Leave with a clear understanding of your nutritional needs and practical first steps to start seeing results.</p>
				</div>
				<a href="<?php echo esc_url( $booking_url ); ?>" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-block">Book Initial Consultation <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></a>
			</div>

			<!-- Follow-Up -->
			<div class="service-card fade-up">
				<div class="service-header">
					<div class="feature-icon">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
					</div>
					<h3>Follow-Up Consultation</h3>
					<p class="service-desc">Regular check-ins to track your progress, address challenges, and refine your nutrition plan as you evolve.</p>
				</div>
				<div class="service-price">
					<span class="price">$95</span>
					<span class="duration">• 45 minutes</span>
				</div>
				<div class="service-detail">
					<p class="detail-label">Who it's for:</p>
					<p>Existing clients who want ongoing support, accountability, and plan adjustments to stay on track.</p>
				</div>
				<div class="service-detail">
					<p class="detail-label">What's included:</p>
					<ul class="check-list-vertical">
						<li>Progress review &amp; celebration of wins</li>
						<li>Challenge troubleshooting</li>
						<li>Plan adjustments &amp; refinements</li>
						<li>New strategies &amp; meal ideas</li>
						<li>Continued accountability support</li>
					</ul>
				</div>
				<div class="service-outcomes">
					<p class="detail-label">Expected outcomes:</p>
					<p>Stay motivated, overcome plateaus, and continuously optimise your approach for lasting results.</p>
				</div>
				<a href="<?php echo esc_url( $booking_url ); ?>" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-block">Book Follow-Up <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></a>
			</div>

			<!-- 12-Week Program (Popular) -->
			<div class="service-card service-card-popular fade-up">
				<span class="popular-badge">Most Popular</span>
				<div class="service-header">
					<div class="feature-icon">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M22 12h-4"/><path d="M6 12H2"/><path d="M12 6V2"/><path d="M12 22v-4"/></svg>
					</div>
					<h3>12-Week Health Optimisation</h3>
					<p class="service-desc">Our flagship program for sustainable transformation. Comprehensive support for those committed to lasting change.</p>
				</div>
				<div class="service-price">
					<span class="price">$997</span>
					<span class="duration">• 12 weeks</span>
				</div>
				<div class="service-detail">
					<p class="detail-label">Who it's for:</p>
					<p>Health-conscious individuals ready for a complete transformation—ideal for sustainable fat loss, energy optimisation, or performance goals.</p>
				</div>
				<div class="service-detail">
					<p class="detail-label">What's included:</p>
					<ul class="check-list-vertical">
						<li>Initial comprehensive consultation (75 min)</li>
						<li>6 × follow-up sessions over 12 weeks</li>
						<li>Personalised meal planning guidance</li>
						<li>Weekly check-ins via email/message</li>
						<li>Recipe ideas &amp; practical resources</li>
						<li>Priority support between sessions</li>
						<li>Final review &amp; maintenance planning</li>
					</ul>
				</div>
				<div class="service-outcomes">
					<p class="detail-label">Expected outcomes:</p>
					<p>Achieve sustainable results with the accountability, education, and support needed to maintain your transformation long-term.</p>
				</div>
				<a href="<?php echo esc_url( $booking_url ); ?>" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-block">Start Your Transformation <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></a>
			</div>

			<!-- Meal Planning -->
			<div class="service-card fade-up">
				<div class="service-header">
					<div class="feature-icon">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
					</div>
					<h3>Meal Planning &amp; Accountability</h3>
					<p class="service-desc">Structured weekly meal planning with regular accountability check-ins to keep you consistent and progressing.</p>
				</div>
				<div class="service-price">
					<span class="price">$297/month</span>
					<span class="duration">• Ongoing monthly</span>
				</div>
				<div class="service-detail">
					<p class="detail-label">Who it's for:</p>
					<p>Busy professionals who need practical meal solutions and regular accountability to stay on track.</p>
				</div>
				<div class="service-detail">
					<p class="detail-label">What's included:</p>
					<ul class="check-list-vertical">
						<li>Weekly personalised meal plan guidance</li>
						<li>Shopping lists &amp; prep strategies</li>
						<li>Fortnightly video check-ins (30 min)</li>
						<li>Unlimited email/message support</li>
						<li>Recipe suggestions based on preferences</li>
						<li>Ongoing plan adjustments</li>
					</ul>
				</div>
				<div class="service-outcomes">
					<p class="detail-label">Expected outcomes:</p>
					<p>Take the guesswork out of healthy eating with practical plans that fit your lifestyle and preferences.</p>
				</div>
				<a href="<?php echo esc_url( $booking_url ); ?>" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-block">Get Started <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></a>
			</div>

			<!-- Corporate -->
			<div class="service-card fade-up">
				<div class="service-header">
					<div class="feature-icon">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
					</div>
					<h3>Corporate Wellness Programs</h3>
					<p class="service-desc">Boost your team's health, productivity, and wellbeing with tailored workplace nutrition programs.</p>
				</div>
				<div class="service-price">
					<span class="price">Custom</span>
					<span class="duration">• Flexible</span>
				</div>
				<div class="service-detail">
					<p class="detail-label">Who it's for:</p>
					<p>Businesses and organisations looking to invest in employee health, reduce sick days, and improve workplace culture.</p>
				</div>
				<div class="service-detail">
					<p class="detail-label">What's included:</p>
					<ul class="check-list-vertical">
						<li>Group nutrition workshops &amp; seminars</li>
						<li>Individual employee consultations</li>
						<li>Healthy workplace initiatives</li>
						<li>Lunch &amp; learn sessions</li>
						<li>Custom program development</li>
						<li>Ongoing support &amp; resources</li>
					</ul>
				</div>
				<div class="service-outcomes">
					<p class="detail-label">Expected outcomes:</p>
					<p>Healthier, more energised employees with improved focus, reduced absenteeism, and enhanced workplace wellbeing.</p>
				</div>
				<a href="<?php echo esc_url( $booking_url ); ?>" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-block">Enquire Now <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></a>
			</div>

		</div>
	</div>
</section>

<!-- How to Book -->
<section class="section-padding" style="background-color: var(--secondary);">
	<div class="container">
		<div class="section-header fade-up">
			<span class="badge badge-accent">How to Book</span>
			<h2 style="margin-top: 1rem;">Getting Started Is Easy</h2>
			<p>Ready to take the first step? Here's what to expect when you book with SomaLab.</p>
		</div>

		<div class="booking-steps">
			<div class="booking-step fade-up">
				<span class="booking-step-number">1</span>
				<h3>Choose Your Service</h3>
				<p>Select the consultation type that best fits your needs and click to book.</p>
			</div>
			<div class="booking-step fade-up">
				<span class="booking-step-number">2</span>
				<h3>Complete Pre-Consultation Form</h3>
				<p>You'll receive a short questionnaire to help us prepare for your session.</p>
			</div>
			<div class="booking-step fade-up">
				<span class="booking-step-number">3</span>
				<h3>Attend Your Session</h3>
				<p>Join your video call or in-person appointment and start your transformation.</p>
			</div>
		</div>
	</div>
</section>

<!-- FAQ Section -->
<section class="section-padding">
	<div class="container">
		<div class="section-header fade-up">
			<h2>Frequently Asked Questions</h2>
			<p>Got questions? We've got answers. If you don't see what you're looking for, feel free to get in touch.</p>
		</div>

		<div class="faq-list">
			<div class="faq-item fade-up">
				<h3>Do I need a referral to book a consultation?</h3>
				<p>No referral is needed. You can book directly through our online booking system. If you have a chronic condition or take medications, it's always good to let your doctor know you're working with a nutrition consultant.</p>
			</div>
			<div class="faq-item fade-up">
				<h3>What happens after I book my consultation?</h3>
				<p>You'll receive a confirmation email with a pre-consultation questionnaire to complete before your session. This helps us make the most of our time together. You'll also receive joining details for your video or in-person appointment.</p>
			</div>
			<div class="faq-item fade-up">
				<h3>Are your services covered by private health insurance?</h3>
				<p>Coverage depends on your individual policy and level of extras cover. We recommend checking with your health fund directly. We provide invoices with all necessary details for claiming.</p>
			</div>
			<div class="faq-item fade-up">
				<h3>Can you help with specific health conditions?</h3>
				<p>We work with clients on a range of health goals including weight management, gut health, energy optimisation, sports nutrition, and general wellbeing. For complex medical conditions, we recommend working alongside your healthcare team.</p>
			</div>
			<div class="faq-item fade-up">
				<h3>What if I need to reschedule my appointment?</h3>
				<p>We understand life happens! Please give us at least 24 hours notice to reschedule. Same-day cancellations may incur a fee. You can easily reschedule through your booking confirmation email.</p>
			</div>
			<div class="faq-item fade-up">
				<h3>Do you offer online consultations?</h3>
				<p>Yes! We offer both in-person and video consultations to suit your preferences and schedule. Many clients prefer the convenience of online sessions—they're just as effective as face-to-face.</p>
			</div>
		</div>
	</div>
</section>

<!-- CTA -->
<section class="cta-section section-padding">
	<div class="container">
		<div class="fade-up" style="text-align: center;">
			<h2>Not Sure Which Service Is Right for You?</h2>
			<p>Book a free 15-minute discovery call to discuss your goals and find the perfect fit for your needs. No pressure, no obligations—just friendly guidance.</p>
			<a href="<?php echo esc_url( $booking_url ); ?>" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-lg">
				Book Your Free Discovery Call
				<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
			</a>
		</div>
	</div>
</section>

<?php get_footer(); ?>
