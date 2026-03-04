// ========== DOM Elements ==========
const loadingScreen = document.getElementById('loading-screen');
const overlay = document.getElementById('common-overlay');
const sideMenu = document.getElementById('side-menu');
const bookingModal = document.getElementById('booking-modal');
const roomModal = document.getElementById('room-modal');
const galleryModal = document.getElementById('gallery-modal');
const bookingForm = document.getElementById('booking-form');
const checkinDate = document.getElementById('checkin-date');
const checkoutDate = document.getElementById('checkout-date');

// ========== Enhanced Booking Form ==========
let currentBookingStep = 1;

// ========== Enhanced Gallery ==========
let galleryImages = [];
let currentGalleryIndex = 0;

// ========== Enhanced Review System ==========
let reviews = [
    {
        id: 1,
        name: "Sarah M.",
        email: "sarah@example.com",
        rating: 5,
        title: "Absolutely breathtaking!",
        text: "The sunset views from our cottage were unforgettable. The staff went above and beyond to make our stay perfect. Will definitely return!",
        date: "March 2024",
        stayDate: "2024-03",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=100"
    },
    {
        id: 2,
        name: "James K.",
        email: "james@example.com",
        rating: 5,
        title: "Best vacation ever!",
        text: "The Premium Cottage with private pool was worth every penny. The food was exceptional and the service impeccable.",
        date: "February 2024",
        stayDate: "2024-02",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100"
    },
    {
        id: 3,
        name: "Priya S.",
        email: "priya@example.com",
        rating: 4.5,
        title: "Perfect family getaway",
        text: "Perfect for our family getaway. The kids loved the pool activities and we enjoyed the spa. Excellent service throughout.",
        date: "January 2024",
        stayDate: "2024-01",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100"
    }
];

// ========== Header Scroll Effect ==========
function initializeHeaderScroll() {
    const header = document.querySelector('.main-header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // Add scrolled class when scrolled down
        if (currentScroll > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
}

// ========== Loading Screen ==========
window.addEventListener('load', function() {
    setTimeout(() => {
        if (loadingScreen) {
            loadingScreen.classList.add('hidden');
        }
        console.log('✅ Kokomo Resort loaded successfully');
        
        // Initialize all features
        initializeDates();
        initializeImageHandling();
        initializeAnimations();
        initializeSmoothScroll();
        initializeEnhancedFeatures();
        initializeHeroSlider();
        initializeHeaderScroll();
    }, 1500);
});

// ========== Date Initialization ==========
function initializeDates() {
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    const todayStr = formatDate(today);
    const tomorrowStr = formatDate(tomorrow);
    
    if (checkinDate) {
        checkinDate.value = todayStr;
        checkinDate.min = todayStr;
    }
    
    if (checkoutDate) {
        checkoutDate.value = tomorrowStr;
        checkoutDate.min = tomorrowStr;
    }
    
    // Update checkout min date when checkin changes
    if (checkinDate && checkoutDate) {
        checkinDate.addEventListener('change', function() {
            const checkin = new Date(this.value);
            checkin.setDate(checkin.getDate() + 1);
            checkoutDate.min = formatDate(checkin);
            if (new Date(checkoutDate.value) < checkin) {
                checkoutDate.value = formatDate(checkin);
            }
        });
    }
}

function formatDate(date) {
    return date.toISOString().split('T')[0];
}

// ========== Image Error Handling ==========
function initializeImageHandling() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        // Remove existing error listeners to prevent duplicates
        img.removeEventListener('error', handleImageError);
        img.addEventListener('error', handleImageError);
    });
}

function handleImageError() {
    console.warn('⚠️ Image failed to load:', this.src);
    
    // Set fallback image based on type
    if (this.alt.includes('Deluxe') || this.alt.includes('Superior') || this.alt.includes('Junior') || this.alt.includes('Premium') || this.alt.includes('Executive') || this.alt.includes('Family')) {
        this.src = 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=800';
    } else if (this.alt.includes('Pool')) {
        this.src = 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800';
    } else if (this.alt.includes('Cafe')) {
        this.src = 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?q=80&w=600';
    } else if (this.alt.includes('Luxury') || this.alt.includes('Infinity') || this.alt.includes('Spa') || this.alt.includes('Fitness')) {
        this.src = 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=800';
    } else {
        this.src = 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070';
    }
    
    if (!this.alt.includes('placeholder')) {
        this.alt += ' (Using placeholder)';
    }
}

// ========== Animation Initialization ==========
function initializeAnimations() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                // Unobserve after animation to improve performance
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.room-card, .activity-card, .amenity-card, .gallery-item, .review-card, .stat-card').forEach(el => {
        observer.observe(el);
    });
}

// ========== Smooth Scrolling ==========
function initializeSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Close menu if open
                closeAllPopups();
                
                // Smooth scroll
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ========== Enhanced Booking Form Functions ==========
function initializeBookingForm() {
    const nextButtons = document.querySelectorAll('.next-step');
    const prevButtons = document.querySelectorAll('.prev-step');
    
    nextButtons.forEach(button => {
        button.removeEventListener('click', nextBookingStep);
        button.addEventListener('click', nextBookingStep);
    });
    
    prevButtons.forEach(button => {
        button.removeEventListener('click', prevBookingStep);
        button.addEventListener('click', prevBookingStep);
    });
    
    // Room selection
    document.querySelectorAll('.room-option').forEach(option => {
        option.removeEventListener('click', handleRoomSelection);
        option.addEventListener('click', handleRoomSelection);
    });
    
    // Form submission
    if (bookingForm) {
        bookingForm.removeEventListener('submit', handleBookingSubmission);
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleBookingSubmission();
        });
    }
}

function handleRoomSelection() {
    const radio = this.querySelector('input[type="radio"]');
    if (radio) {
        radio.checked = true;
        
        // Update visual selection
        document.querySelectorAll('.room-option').forEach(opt => {
            opt.classList.remove('selected');
            opt.style.borderColor = '';
            opt.style.background = '';
        });
        
        this.classList.add('selected');
        this.style.borderColor = 'var(--primary)';
        this.style.background = 'rgba(255, 107, 53, 0.1)';
    }
}

function nextBookingStep(e) {
    const nextStep = parseInt(e.target.dataset.next);
    if (validateCurrentStep(currentBookingStep)) {
        showBookingStep(nextStep);
    }
}

function prevBookingStep(e) {
    const prevStep = parseInt(e.target.dataset.prev);
    showBookingStep(prevStep);
}

function showBookingStep(step) {
    // Hide current step
    const currentStepEl = document.getElementById(`step-${currentBookingStep}`);
    const currentProgressEl = document.querySelector(`[data-step="${currentBookingStep}"]`);
    
    if (currentStepEl) currentStepEl.classList.remove('active');
    if (currentProgressEl) currentProgressEl.classList.remove('active');
    
    // Show new step
    const nextStepEl = document.getElementById(`step-${step}`);
    const nextProgressEl = document.querySelector(`[data-step="${step}"]`);
    
    if (nextStepEl) nextStepEl.classList.add('active');
    if (nextProgressEl) nextProgressEl.classList.add('active');
    
    currentBookingStep = step;
}

function validateCurrentStep(step) {
    switch(step) {
        case 1:
            const checkin = document.getElementById('checkin-date')?.value;
            const checkout = document.getElementById('checkout-date')?.value;
            const guests = document.getElementById('guests')?.value;
            
            if (!checkin || !checkout || !guests) {
                showNotification('Please fill in all required fields for dates and guests.', 'error');
                return false;
            }
            
            if (new Date(checkin) >= new Date(checkout)) {
                showNotification('Check-out date must be after check-in date.', 'error');
                return false;
            }
            return true;
            
        case 2:
            const selectedRoom = document.querySelector('input[name="room-type"]:checked');
            if (!selectedRoom) {
                showNotification('Please select a room type.', 'error');
                return false;
            }
            return true;
            
        default:
            return true;
    }
}

function handleBookingSubmission() {
    // Get all form values
    const checkin = document.getElementById('checkin-date')?.value;
    const checkout = document.getElementById('checkout-date')?.value;
    const guests = document.getElementById('guests')?.value;
    const children = document.getElementById('children')?.value || '0';
    const roomType = document.querySelector('input[name="room-type"]:checked')?.value;
    const fullName = document.getElementById('full-name')?.value;
    const email = document.getElementById('email')?.value;
    const phone = document.getElementById('phone')?.value;
    const specialRequests = document.getElementById('special-requests')?.value;
    
    // Validate step 3
    if (!fullName || !email || !phone) {
        showNotification('Please fill in all personal details.', 'error');
        return;
    }
    
    if (!isValidEmail(email)) {
        showNotification('Please enter a valid email address.', 'error');
        return;
    }
    
    // Generate confirmation number
    const confirmationNumber = 'KSR-' + Date.now().toString().slice(-6);
    
    // Get room name
    let roomName = '';
    switch(roomType) {
        case 'deluxe-couple': roomName = 'Deluxe Couple'; break;
        case 'superior-twin': roomName = 'Superior Twin'; break;
        case 'superior-queen': roomName = 'Superior Queen'; break;
        case 'junior-suite': roomName = 'Junior Suite'; break;
        case 'premium-cottage': roomName = 'Premium Cottage'; break;
        case 'executive-cottage': roomName = 'Executive Cottage'; break;
        case 'family-cottage': roomName = 'Family Cottage'; break;
        default: roomName = 'Selected Room';
    }
    
    // Show success message with booking email
    showNotification(
        `✅ Booking request submitted successfully!\n\n` +
        `Confirmation Number: ${confirmationNumber}\n` +
        `Check-in: ${formatDisplayDate(checkin)}\n` +
        `Check-out: ${formatDisplayDate(checkout)}\n` +
        `Guests: ${guests} adults, ${children} children\n` +
        `Room Type: ${roomName}\n` +
        `Contact: ${fullName} (${email}, ${phone})\n\n` +
        `📧 A confirmation email will be sent to: ${email}\n` +
        `📧 For any queries, contact: reservation.kokomoresort@gmail.com\n\n` +
        `Our reservation team will contact you within 24 hours.`,
        'success'
    );
    
    // Reset form
    if (bookingForm) bookingForm.reset();
    initializeDates();
    currentBookingStep = 1;
    showBookingStep(1);
    
    // Reset room selection styling
    document.querySelectorAll('.room-option').forEach(opt => {
        opt.classList.remove('selected');
        opt.style.borderColor = '';
        opt.style.background = '';
    });
    
    // Close modal
    closeAllPopups();
}

function formatDisplayDate(dateStr) {
    if (!dateStr) return 'N/A';
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// ========== Notification System ==========
function showNotification(message, type = 'info') {
    // Remove existing notification
    const existingNotification = document.querySelector('.custom-notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `custom-notification ${type}`;
    
    // Set icon based on type
    let icon = 'ℹ️';
    if (type === 'success') icon = '✅';
    if (type === 'error') icon = '❌';
    
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-icon">${icon}</span>
            <div class="notification-message">${message.replace(/\n/g, '<br>')}</div>
            <button class="notification-close" onclick="this.parentElement.parentElement.remove()">×</button>
        </div>
    `;
    
    // Add styles
    const style = document.createElement('style');
    style.textContent = `
        .custom-notification {
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 9999;
            max-width: 400px;
            animation: slideIn 0.3s ease;
            box-shadow: 0 5px 20px rgba(0,0,0,0.2);
        }
        
        .notification-content {
            background: ${type === 'success' ? '#d4edda' : type === 'error' ? '#f8d7da' : '#d1ecf1'};
            border: 1px solid ${type === 'success' ? '#c3e6cb' : type === 'error' ? '#f5c6cb' : '#bee5eb'};
            color: ${type === 'success' ? '#155724' : type === 'error' ? '#721c24' : '#0c5460'};
            padding: 15px 20px;
            border-radius: 8px;
            display: flex;
            align-items: flex-start;
            gap: 12px;
            position: relative;
        }
        
        .notification-icon {
            font-size: 1.5rem;
        }
        
        .notification-message {
            flex: 1;
            line-height: 1.6;
        }
        
        .notification-close {
            background: transparent;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
            color: inherit;
            opacity: 0.5;
            transition: opacity 0.3s;
            padding: 0 5px;
        }
        
        .notification-close:hover {
            opacity: 1;
        }
        
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @media (max-width: 480px) {
            .custom-notification {
                top: 10px;
                right: 10px;
                left: 10px;
                max-width: none;
            }
        }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(notification);
    
    // Auto-remove after 10 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 10000);
}

// ========== Room Details Modal ==========
function showRoomDetails(roomType) {
    let title, content;
    
    switch(roomType) {
        case 'deluxe-couple':
            title = 'Deluxe Couple';
            content = `
                <img src="images/rooms/deluxe_room.JPG" alt="Deluxe Couple" onerror="this.src='https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=800'" style="width:100%;border-radius:10px;margin-bottom:20px;">
                <p><strong>Price:</strong> BDT 10,000++ / night</p>
                <p class="tax-info">+ 10% Service Charge & 15% VAT applicable</p>
                <p><strong>Features:</strong></p>
                <ul style="margin-left:20px;margin-bottom:20px;">
                    <li>Perfect for Couples</li>
                    <li>Queen Size Bed</li>
                    <li>Garden View</li>
                    <li>Room Service</li>
                    <li>Free WiFi</li>
                    <li>Smart TV</li>
                </ul>
                <p>Ideal for romantic getaways with comfortable amenities and beautiful garden views.</p>
            `;
            break;
            
        case 'superior-twin':
            title = 'Superior Twin';
            content = `
                <img src="images/rooms/twin_bed.jpeg" alt="Superior Twin" onerror="this.src='https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=800'" style="width:100%;border-radius:10px;margin-bottom:20px;">
                <p><strong>Price:</strong> BDT 11,000++ / night</p>
                <p class="tax-info">+ 10% Service Charge & 15% VAT applicable</p>
                <p><strong>Features:</strong></p>
                <ul style="margin-left:20px;margin-bottom:20px;">
                    <li>Two Twin Beds</li>
                    <li>Superior Amenities</li>
                    <li>Garden View</li>
                    <li>Work Desk</li>
                    <li>Mini Fridge</li>
                    <li>Free WiFi</li>
                </ul>
                <p>Perfect for friends or colleagues with comfortable twin beds and superior amenities.</p>
            `;
            break;
            
        case 'superior-queen':
            title = 'Superior Queen';
            content = `
                <img src="images/rooms/queen_bed.jpeg" alt="Superior Queen" onerror="this.src='https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=800'" style="width:100%;border-radius:10px;margin-bottom:20px;">
                <p><strong>Price:</strong> BDT 10,000++ / night</p>
                <p class="tax-info">+ 10% Service Charge & 15% VAT applicable</p>
                <p><strong>Features:</strong></p>
                <ul style="margin-left:20px;margin-bottom:20px;">
                    <li>Queen Size Bed</li>
                    <li>Premium Comfort</li>
                    <li>Modern Design</li>
                    <li>Room Service</li>
                    <li>Free WiFi</li>
                    <li>Smart TV</li>
                </ul>
                <p>Modern room with queen size bed and premium comfort for a relaxing stay.</p>
            `;
            break;
            
        case 'junior-suite':
            title = 'Junior Suite';
            content = `
                <img src="images/rooms/junior_suite.JPG" alt="Junior Suite" onerror="this.src='https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=800'" style="width:100%;border-radius:10px;margin-bottom:20px;">
                <p><strong>Price:</strong> BDT 18,000++ / night</p>
                <p class="tax-info">+ 10% Service Charge & 15% VAT applicable</p>
                <p><strong>Features:</strong></p>
                <ul style="margin-left:20px;margin-bottom:20px;">
                    <li>Spacious Living Area</li>
                    <li>Separate Bedroom</li>
                    <li>Premium Amenities</li>
                    <li>Garden/Lake View</li>
                    <li>Mini Bar</li>
                    <li>Work Space</li>
                </ul>
                <p>Our spacious suite with separate living area, perfect for extended stays.</p>
            `;
            break;
            
        case 'premium-cottage':
            title = 'Premium Cottage';
            content = `
                <img src="images/rooms/permium_cottage.jpg" alt="Premium Cottage" onerror="this.src='https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=800'" style="width:100%;border-radius:10px;margin-bottom:20px;">
                <p><strong>Price:</strong> BDT 13,000++ / night</p>
                <p class="tax-info">+ 10% Service Charge & 15% VAT applicable</p>
                <p><strong>Features:</strong></p>
                <ul style="margin-left:20px;margin-bottom:20px;">
                    <li>Private Cottage</li>
                    <li>Garden View</li>
                    <li>King Size Bed</li>
                    <li>Private Terrace</li>
                    <li>Room Service</li>
                    <li>Exclusive Amenities</li>
                </ul>
                <p>Enjoy privacy in our premium cottage with garden views and exclusive amenities.</p>
            `;
            break;
            
        case 'executive-cottage':
            title = 'Executive Cottage';
            content = `
                <img src="images/rooms/executive_cottage.jpeg" alt="Executive Cottage" onerror="this.src='https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=800'" style="width:100%;border-radius:10px;margin-bottom:20px;">
                <p><strong>Price:</strong> BDT 14,000++ / night</p>
                <p class="tax-info">+ 10% Service Charge & 15% VAT applicable</p>
                <p><strong>Features:</strong></p>
                <ul style="margin-left:20px;margin-bottom:20px;">
                    <li>Private Lake View</li>
                    <li>Executive Lounge Access</li>
                    <li>King Size Bed</li>
                    <li>Room Service</li>
                    <li>Private Terrace</li>
                    <li>Premium Minibar</li>
                </ul>
                <p>Immerse yourself in nature with stunning lake views from your private cottage.</p>
            `;
            break;
            
        case 'family-cottage':
            title = 'Family Cottage';
            content = `
                <img src="images/rooms/family_cottage.jpg" alt="Family Cottage" onerror="this.src='https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800'" style="width:100%;border-radius:10px;margin-bottom:20px;">
                <p><strong>Price:</strong> BDT 26,000++ / night</p>
                <p class="tax-info">+ 10% Service Charge & 15% VAT applicable</p>
                <p><strong>Features:</strong></p>
                <ul style="margin-left:20px;margin-bottom:20px;">
                    <li>Multiple Bedrooms</li>
                    <li>Spacious Living Area</li>
                    <li>Kitchenette</li>
                    <li>Family-friendly Amenities</li>
                    <li>Garden View</li>
                    <li>Baby Cot Available</li>
                </ul>
                <p>Perfect for family vacations with multiple bedrooms and space for everyone.</p>
            `;
            break;
            
        default:
            title = 'Room Details';
            content = '<p>Room information not available.</p>';
    }
    
    const roomTitleEl = document.getElementById('room-title');
    const roomContentEl = document.getElementById('room-content');
    
    if (roomTitleEl) roomTitleEl.textContent = title;
    if (roomContentEl) roomContentEl.innerHTML = content;
    
    showModal(roomModal);
}

// ========== Enhanced Gallery Functions ==========
function initializeGallery() {
    // Clear existing gallery images
    galleryImages = [];
    
    // Collect all gallery images
    document.querySelectorAll('.gallery-item').forEach((item, index) => {
        const img = item.querySelector('img');
        if (!img) return;
        
        const alt = img.alt || 'Gallery Image';
        
        // Extract title from onclick attribute
        const onclickAttr = item.getAttribute('onclick');
        if (onclickAttr) {
            const match = onclickAttr.match(/'([^']+)',\s*'([^']+)'/);
            if (match && match[2]) {
                galleryImages.push({
                    src: img.src,
                    alt: alt,
                    title: match[2],
                    element: item
                });
            }
        }
    });
}

function openGalleryImage(src, title) {
    currentGalleryIndex = galleryImages.findIndex(img => img.src === src);
    if (currentGalleryIndex === -1) currentGalleryIndex = 0;
    
    updateGalleryModal();
    showModal(galleryModal);
}

function updateGalleryModal() {
    if (!galleryImages.length) return;
    
    const image = galleryImages[currentGalleryIndex];
    const modalImage = document.getElementById('gallery-modal-image');
    const modalTitle = document.getElementById('gallery-modal-title');
    const galleryCounter = document.getElementById('gallery-counter');
    
    if (modalImage) modalImage.src = image.src;
    if (modalTitle) modalTitle.textContent = image.title;
    if (galleryCounter) galleryCounter.textContent = `${currentGalleryIndex + 1}/${galleryImages.length}`;
}

function prevGalleryImage() {
    if (!galleryImages.length) return;
    currentGalleryIndex = (currentGalleryIndex - 1 + galleryImages.length) % galleryImages.length;
    updateGalleryModal();
}

function nextGalleryImage() {
    if (!galleryImages.length) return;
    currentGalleryIndex = (currentGalleryIndex + 1) % galleryImages.length;
    updateGalleryModal();
}

function closeGallery() {
    closeAllPopups();
}

function downloadImage() {
    if (!galleryImages.length) return;
    
    const image = galleryImages[currentGalleryIndex];
    const link = document.createElement('a');
    link.href = image.src;
    link.download = `kokomo-${image.title.toLowerCase().replace(/\s+/g, '-')}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    showNotification('Image download started!', 'success');
}

// ========== Enhanced Review System Functions ==========
function loadReviews() {
    const container = document.getElementById('reviews-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    reviews.forEach(review => {
        const stars = Array(5).fill().map((_, i) => {
            if (i < Math.floor(review.rating)) {
                return '<i class="fas fa-star"></i>';
            } else if (i < review.rating) {
                return '<i class="fas fa-star-half-alt"></i>';
            } else {
                return '<i class="far fa-star"></i>';
            }
        }).join('');
        
        const reviewHTML = `
            <div class="review-card">
                <div class="review-rating">${review.rating}/5</div>
                <div class="review-header">
                    <img src="${review.avatar}" alt="${review.name}" class="review-avatar" onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(review.name)}&background=FF6B35&color=fff&size=100'">
                    <div class="reviewer-info">
                        <h4>${review.name}</h4>
                        <div class="review-stars">
                            ${stars}
                        </div>
                    </div>
                </div>
                <h4>${review.title}</h4>
                <p class="review-text">${review.text}</p>
                <p class="review-date">Stayed in ${review.date}</p>
            </div>
        `;
        container.innerHTML += reviewHTML;
    });
}

function submitReview(e) {
    e.preventDefault();
    
    const name = document.getElementById('review-name')?.value.trim();
    const email = document.getElementById('review-email')?.value.trim();
    const stayDate = document.getElementById('review-stay-date')?.value;
    const rating = document.querySelector('input[name="rating"]:checked');
    const title = document.getElementById('review-title')?.value.trim();
    const text = document.getElementById('review-text')?.value.trim();
    const consent = document.getElementById('review-consent')?.checked;
    
    // Validation
    if (!name || !email || !stayDate || !rating || !title || !text || !consent) {
        showNotification('Please fill in all required fields and accept the terms.', 'error');
        return;
    }
    
    if (text.length < 50) {
        showNotification('Please write a review with at least 50 characters.', 'error');
        return;
    }
    
    if (!isValidEmail(email)) {
        showNotification('Please enter a valid email address.', 'error');
        return;
    }
    
    // Format stay date
    const [year, month] = stayDate.split('-');
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const formattedStayDate = `${monthNames[parseInt(month) - 1]} ${year}`;
    
    // Create new review
    const newReview = {
        id: reviews.length + 1,
        name: name,
        email: email,
        rating: parseInt(rating.value),
        title: title,
        text: text,
        date: formattedStayDate,
        stayDate: stayDate,
        avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=FF6B35&color=fff&size=100`
    };
    
    // Add to reviews array
    reviews.unshift(newReview);
    loadReviews();
    
    // Clear form
    const reviewForm = document.getElementById('review-form');
    if (reviewForm) reviewForm.reset();
    
    // Reset stars
    document.querySelectorAll('input[name="rating"]').forEach(radio => {
        radio.checked = false;
    });
    
    showNotification('Thank you for your review! It has been submitted and will appear after moderation.', 'success');
    
    // Scroll to top of reviews
    scrollToSection('reviews');
}

// ========== Initialize All Enhanced Features ==========
function initializeEnhancedFeatures() {
    initializeBookingForm();
    initializeGallery();
    loadReviews();
    
    // Real-time review text validation
    const reviewText = document.getElementById('review-text');
    if (reviewText) {
        reviewText.removeEventListener('input', handleReviewTextInput);
        reviewText.addEventListener('input', handleReviewTextInput);
    }
}

function handleReviewTextInput() {
    const charCount = this.value.length;
    const charCountElement = this.nextElementSibling;
    if (charCountElement && charCountElement.classList.contains('char-count')) {
        if (charCount < 50) {
            charCountElement.style.color = 'var(--primary)';
            charCountElement.textContent = `Minimum 50 characters (${charCount}/50)`;
        } else {
            charCountElement.style.color = 'var(--gray)';
            charCountElement.textContent = `${charCount} characters (minimum met)`;
        }
    }
}

// ========== Modal Functions ==========
function openSideMenu() {
    if (sideMenu) {
        sideMenu.classList.add('open');
        overlay.classList.add('show');
        document.body.style.overflow = 'hidden';
    }
}

function openBooking() {
    // Reset to step 1
    currentBookingStep = 1;
    showBookingStep(1);
    showModal(bookingModal);
}

function showModal(modal) {
    if (modal) {
        modal.classList.add('show');
        overlay.classList.add('show');
        document.body.style.overflow = 'hidden';
    }
}

function closeAllPopups() {
    // Hide all modals
    document.querySelectorAll('.modal').forEach(modal => {
        modal.classList.remove('show');
    });
    
    // Hide side menu
    if (sideMenu) sideMenu.classList.remove('open');
    
    // Hide overlay
    if (overlay) overlay.classList.remove('show');
    
    // Restore body scroll
    document.body.style.overflow = 'auto';
}

// ========== Utility Functions ==========
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        window.scrollTo({
            top: section.offsetTop - 80,
            behavior: 'smooth'
        });
        closeAllPopups();
    }
}

function showMenu() {
    showNotification('Menu feature will be available soon! For now, please contact our restaurant directly.', 'info');
}

function openMaps() {
    window.open('https://www.google.com/maps/place/Kokomo+Sunset+Resort/@24.0909569,90.5132658,17z', '_blank');
}

function submitContactForm(e) {
    e.preventDefault();
    
    showNotification(
        `✅ Thank you for your message!\n\n` +
        `We have received your inquiry and will respond within 24 hours.\n` +
        `For urgent booking assistance, please email directly:\n` +
        `📧 reservation.kokomoresort@gmail.com`,
        'success'
    );
    
    e.target.reset();
}

// ========== Hero Slider ==========
let currentSlideIndex = 0;
let slideInterval;

function initializeHeroSlider() {
    const slides = document.querySelectorAll('.slide');
    if (slides.length > 0) {
        // Clear existing interval
        if (slideInterval) clearInterval(slideInterval);
        
        // Start automatic slideshow
        slideInterval = setInterval(nextHeroSlide, 5000);
        
        // Pause on hover
        const slider = document.querySelector('.hero-slider');
        if (slider) {
            slider.removeEventListener('mouseenter', pauseSlider);
            slider.removeEventListener('mouseleave', resumeSlider);
            
            slider.addEventListener('mouseenter', pauseSlider);
            slider.addEventListener('mouseleave', resumeSlider);
        }
    }
}

function pauseSlider() {
    if (slideInterval) clearInterval(slideInterval);
}

function resumeSlider() {
    if (slideInterval) clearInterval(slideInterval);
    slideInterval = setInterval(nextHeroSlide, 5000);
}

function nextHeroSlide() {
    const slides = document.querySelectorAll('.slide');
    if (slides.length > 0) {
        slides[currentSlideIndex].classList.remove('active');
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;
        slides[currentSlideIndex].classList.add('active');
    }
}

// ========== Event Listeners ==========
// Close modals when clicking overlay
if (overlay) {
    overlay.removeEventListener('click', closeAllPopups);
    overlay.addEventListener('click', closeAllPopups);
}

// Close modals with Escape key
document.removeEventListener('keydown', handleEscapeKey);
document.addEventListener('keydown', handleEscapeKey);

function handleEscapeKey(e) {
    if (e.key === 'Escape') {
        closeAllPopups();
    }
}

// Prevent modal close when clicking inside
document.querySelectorAll('.modal > div, .modal-content').forEach(modalContent => {
    modalContent.removeEventListener('click', stopPropagation);
    modalContent.addEventListener('click', stopPropagation);
});

function stopPropagation(e) {
    e.stopPropagation();
}

// ========== Initialize Everything ==========
console.log('🌴 Kokomo Sunset Resort JavaScript Initialized');