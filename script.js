// Navigation Bar Functionality
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	navMenu.classList.toggle('active');
});

// Smooth scroll and close mobile menu on link click
navLinks.forEach(link => {
	link.addEventListener('click', (e) => {
		e.preventDefault();
		const targetId = link.getAttribute('href');
		const targetSection = document.querySelector(targetId);
		
		if (targetSection) {
			const navbarHeight = document.querySelector('.navbar').offsetHeight;
			const targetPosition = targetSection.offsetTop - navbarHeight - 20;
			
			window.scrollTo({
				top: targetPosition,
				behavior: 'smooth'
			});
		}
		
		// Close mobile menu
		hamburger.classList.remove('active');
		navMenu.classList.remove('active');
	});
});

// Navbar background on scroll and active nav highlighting
const navbar = document.querySelector('.navbar');
const sections = document.querySelectorAll('[id]');

window.addEventListener('scroll', () => {
	// Navbar background effect
	if (window.scrollY > 50) {
		navbar.style.background = 'rgba(255, 255, 255, 0.98)';
		navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
	} else {
		navbar.style.background = 'rgba(255, 255, 255, 0.95)';
		navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
	}
	
	// Active navigation highlighting
	let current = '';
	const navbarHeight = navbar.offsetHeight;
	
	sections.forEach(section => {
		const sectionTop = section.offsetTop - navbarHeight - 100;
		const sectionBottom = sectionTop + section.offsetHeight;
		
		if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
			current = section.getAttribute('id');
		}
	});
	
	// Remove active class from all nav links
	navLinks.forEach(link => {
		link.classList.remove('active');
		const href = link.getAttribute('href').substring(1); // Remove the '#'
		if (href === current) {
			link.classList.add('active');
		}
	});
});

// Typing Animation
const typingElement = document.getElementById('typing-text');
const textToType = 'Automation Tester';
let charIndex = 0;

function typeWriter() {
	if (charIndex < textToType.length) {
		typingElement.textContent += textToType.charAt(charIndex);
		charIndex++;
		setTimeout(typeWriter, 100); // 100ms delay between characters
	}
}

// Start typing animation after a short delay
setTimeout(typeWriter, 500);

// Counter Animation
function animateCounter(element) {
	const target = parseInt(element.getAttribute('data-target'));
	const duration = 2000; // 2 seconds
	const step = target / (duration / 16); // 60fps
	let current = 0;

	const updateCounter = () => {
		current += step;
		if (current < target) {
			element.textContent = Math.floor(current);
			requestAnimationFrame(updateCounter);
		} else {
			element.textContent = target;
		}
	};

	updateCounter();
}

// Intersection Observer for fade-in animations
const observerOptions = {
	threshold: 0.1,
	rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			entry.target.classList.add('visible');
			
			// Trigger counter animation for stat boxes
			if (entry.target.classList.contains('stats-section')) {
				const counters = entry.target.querySelectorAll('.stat-counter');
				counters.forEach(counter => {
					animateCounter(counter);
				});
			}
		}
	});
}, observerOptions);

// Observe all fade-in sections
const fadeInSections = document.querySelectorAll('.fade-in-section');
fadeInSections.forEach(section => observer.observe(section));

// Skill badges click animation
const skills = document.querySelectorAll('.skill');
skills.forEach(skill => {
	skill.addEventListener('click', function() {
		this.style.transform = 'scale(1.15) rotate(5deg)';
		setTimeout(() => {
			this.style.transform = '';
		}, 300);
	});
});

// Project cards click effect
const projects = document.querySelectorAll('.project');
projects.forEach(project => {
	project.addEventListener('click', function() {
		this.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
		this.style.color = 'white';
		
		setTimeout(() => {
			this.style.background = '#f8fafc';
			this.style.color = '';
		}, 500);
	});
});

// Scroll to Top Button
const scrollToTopBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
	if (window.pageYOffset > 300) {
		scrollToTopBtn.classList.add('visible');
	} else {
		scrollToTopBtn.classList.remove('visible');
	}
});

scrollToTopBtn.addEventListener('click', () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	});
});

// Tool items hover animation
const toolItems = document.querySelectorAll('.tool-item');
toolItems.forEach((tool, index) => {
	tool.style.animationDelay = `${index * 0.1}s`;
	
	tool.addEventListener('mouseenter', function() {
		this.style.transform = 'rotate(10deg) scale(1.1)';
	});
	
	tool.addEventListener('mouseleave', function() {
		this.style.transform = '';
	});
});

// Certification cards ripple effect
const certCards = document.querySelectorAll('.cert-card');
certCards.forEach(card => {
	card.addEventListener('click', function(e) {
		const ripple = document.createElement('div');
		ripple.style.position = 'absolute';
		ripple.style.borderRadius = '50%';
		ripple.style.background = 'rgba(255,255,255,0.6)';
		ripple.style.width = ripple.style.height = '100px';
		ripple.style.left = e.offsetX - 50 + 'px';
		ripple.style.top = e.offsetY - 50 + 'px';
		ripple.style.animation = 'ripple 0.6s ease-out';
		ripple.style.pointerEvents = 'none';
		
		this.style.position = 'relative';
		this.style.overflow = 'hidden';
		this.appendChild(ripple);
		
		setTimeout(() => ripple.remove(), 600);
	});
});

// Add ripple animation
const style = document.createElement('style');
style.textContent = `
	@keyframes ripple {
		from {
			transform: scale(0);
			opacity: 1;
		}
		to {
			transform: scale(4);
			opacity: 0;
		}
	}
`;
document.head.appendChild(style);

// Social links pulse effect
const socialLinks = document.querySelectorAll('.social-link');
socialLinks.forEach(link => {
	link.addEventListener('mouseenter', function() {
		this.style.animation = 'pulse 0.5s ease-in-out';
	});
	
	link.addEventListener('animationend', function() {
		this.style.animation = '';
	});
});

// Add pulse animation
const pulseStyle = document.createElement('style');
pulseStyle.textContent = `
	@keyframes pulse {
		0%, 100% { transform: scale(1); }
		50% { transform: scale(1.2); }
	}
`;
document.head.appendChild(pulseStyle);

// Parallax effect on scroll
window.addEventListener('scroll', () => {
	const scrolled = window.pageYOffset;
	const header = document.querySelector('header');
	if (header) {
		header.style.transform = `translateY(${scrolled * 0.3}px)`;
		header.style.opacity = 1 - (scrolled / 500);
	}
});

console.log('🎉 Portfolio loaded successfully! Enjoy the interactive experience!');
