/**
 * Route47 Premium Restaurant Engine
 * Vanilla JavaScript implementation for dynamic cards, cart management, animations, and sliders.
 */

// Global Menu Data
const menuData = [
  // Signature Burgers
  { id: 'b1', name: 'Route47 Double Smash', category: 'burgers', price: 850, desc: 'Double smashed beef patty, melting cheddar, caramelized onions, Route47 signature sauce, toasted brioche bun.', rating: 4.9, img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop' },
  { id: 'b2', name: 'The Highway Beast', category: 'burgers', price: 1150, desc: 'Triple smashed beef patty, double turkey bacon, crispy onion rings, fried egg, loaded cheddar, BBQ drizzle.', rating: 5.0, img: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=600&auto=format&fit=crop' },
  { id: 'b3', name: 'Neon Outlaw Beef', category: 'burgers', price: 950, desc: 'Smoked beef patty, spicy jalapenos, pepper jack cheese, crispy onions, firehouse chipotle aioli.', rating: 4.8, img: 'https://images.unsplash.com/photo-1521305916504-4a1121188589?q=80&w=600&auto=format&fit=crop' },
  { id: 'b4', name: 'Grand Canyon Classic', category: 'burgers', price: 790, desc: 'Premium single beef patty, crispy lettuce, tomato, pickles, melted cheese, classic diner mayo.', rating: 4.7, img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=600&auto=format&fit=crop' },

  // Chicken Burgers
  { id: 'cb1', name: 'Firehouse Crispy Chicken', category: 'chicken', price: 790, desc: 'Buttermilk fried crispy chicken breast, Nashville hot glaze, spicy coleslaw, pickles, sesame brioche.', rating: 4.9, img: 'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?q=80&w=600&auto=format&fit=crop' },
  { id: 'cb2', name: 'Route47 Club Chicken', category: 'chicken', price: 890, desc: 'Grilled breast filet, premium turkey bacon, avocado mash, Swiss cheese, fresh lettuce, herb garlic mayo.', rating: 4.8, img: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=600&auto=format&fit=crop' },
  { id: 'cb3', name: 'Cheesy Crunch Deluxe', category: 'chicken', price: 750, desc: 'Crispy breast fillet, fried mozzarella cheese stick, dynamic cheese sauce, fresh leaf lettuce.', rating: 4.7, img: 'https://images.unsplash.com/photo-1513185158878-8d8c2a2a3da3?q=80&w=600&auto=format&fit=crop' },

  // Loaded Fries
  { id: 'f1', name: 'Roadkill Loaded Fries', category: 'fries', price: 650, desc: 'Crispy skin-on fries, slow-cooked minced beef, dynamic melted cheddar cheese sauce, caramelized onions, secret dressing.', rating: 4.9, img: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=600&auto=format&fit=crop' },
  { id: 'f2', name: 'Spicy Buffalo Fries', category: 'fries', price: 590, desc: 'Golden fries, crispy buffalo chicken bites, signature ranch drizzle, crumbled blue cheese, green chives.', rating: 4.8, img: 'https://images.unsplash.com/photo-1585109649139-366815a0d713?q=80&w=600&auto=format&fit=crop' },
  { id: 'f3', name: 'Disco Neon Fries', category: 'fries', price: 490, desc: 'Fries coated in thick cheddar sauce, sliced fiery jalapenos, and neon-red seasoning dust.', rating: 4.6, img: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=600&auto=format&fit=crop' },

  // Wraps
  { id: 'w1', name: 'Texas Tornado Wrap', category: 'wraps', price: 550, desc: 'Crispy chicken tenders, shredded lettuce, cheddar blend, sweet corn salsa, spicy chipotle sauce in a warm tortilla.', rating: 4.8, img: 'https://images.unsplash.com/photo-1626700051175-6518c4793f4f?q=80&w=600&auto=format&fit=crop' },
  { id: 'w2', name: 'The Highway Gyro Wrap', category: 'wraps', price: 690, desc: 'Flame-grilled tender beef strips, authentic Greek tzatziki, red onions, diced tomatoes, wrapped in premium flatbread.', rating: 4.7, img: 'https://images.unsplash.com/photo-1547058881-aa0edd92a5da?q=80&w=600&auto=format&fit=crop' },

  // Pizza
  { id: 'p1', name: 'Route47 Supreme Roadhouse', category: 'pizza', price: 1450, desc: 'Gourmet pepperoni, Italian beef sausage, dynamic green bell peppers, black olives, onions, loaded mozzarella.', rating: 4.9, img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=600&auto=format&fit=crop' },
  { id: 'p2', name: 'Fuego Pepperoni Pizza', category: 'pizza', price: 1290, desc: 'Double layer of spiced beef pepperoni, mozzarella cheese, hot honey drizzle, organic chili flakes.', rating: 4.9, img: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?q=80&w=600&auto=format&fit=crop' },

  // Drinks
  { id: 'd1', name: 'V8 Engine Chocolate Shake', category: 'drinks', price: 490, desc: 'Creamy, thick chocolate fudge milkshake blended with soft brownie chunks, topped with whipped cream.', rating: 4.9, img: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?q=80&w=600&auto=format&fit=crop' },
  { id: 'd2', name: 'Neon Mint Limeade', category: 'drinks', price: 350, desc: 'Refreshing custom neon-blue lime juice blended with fresh garden mint and premium carbonated soda.', rating: 4.8, img: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=600&auto=format&fit=crop' },
  { id: 'd3', name: 'Route47 Brewed Cola', category: 'drinks', price: 150, desc: 'Authentic house-brewed spiced cola served inside an ice-chilled frosted glass.', rating: 4.7, img: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=600&auto=format&fit=crop' },

  // Desserts
  { id: 'ds1', name: 'Highway Skillet Cookie', category: 'desserts', price: 450, desc: 'Warm, gooey chocolate chip skillet cookie directly from the oven, topped with cold vanilla bean ice cream.', rating: 4.9, img: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=600&auto=format&fit=crop' },
  { id: 'ds2', name: 'Midnight Brownie Lava', category: 'desserts', price: 390, desc: 'Double fudge warm chocolate brownie with a molten core, served with a scoop of premium vanilla cream.', rating: 4.8, img: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=600&auto=format&fit=crop' }
];

// Testimonials Data
const testimonials = [
  { name: 'Ayesha Khan', role: 'Food Critic', rating: 5, text: 'Route47 Double Smash is arguably the best burger in town. The beef patty has incredible crust, and the brioche bun is pillows of perfection!', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop' },
  { name: 'Bilal Mustafa', role: 'Vlogger', rating: 5, text: 'The highway vibe is amazing, but the Roadkill loaded fries are the real star. Fast delivery, fresh, and absolutely loaded with cheese!', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop' },
  { name: 'Zainab Jamil', role: 'Daily Customer', rating: 5, text: 'Clean certified halal premium beef. Outstanding customer service and fast packaging. It is my favorite weekly treat!', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop' },
  { name: 'Arsalan Sheikh', role: 'Burger Connoisseur', rating: 5, text: 'The Fuego Pepperoni with hot honey drizzle is outstanding. They have captured a truly premium modern gourmet experience.', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop' }
];

// State variables
let cart = [];
let favorites = JSON.parse(localStorage.getItem('route47_favs') || '[]');

// DOM Elements
document.addEventListener('DOMContentLoaded', () => {
  // Initialize Toast Container
  const toastContainer = document.createElement('div');
  toastContainer.className = 'toast-container';
  toastContainer.id = 'toast-container';
  document.body.appendChild(toastContainer);

  // Initializations
  initStickyNav();
  initMobileMenu();
  initParticles();
  initTabbedMenu();
  initDealCountdown();
  initScrollCounters();
  initReviewsCarousel();
  initScrollReveal();
  initActiveNavHighlight();
  initBackToTop();
  initCart();
});

// Toast System
function showToast(message) {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerText = message;
  container.appendChild(toast);
  
  // Animate in
  setTimeout(() => toast.classList.add('show'), 50);
  
  // Remove after 3 seconds
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// 1. Sticky Navigation
function initStickyNav() {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('glass-nav', 'py-3');
      navbar.classList.remove('py-4');
    } else {
      navbar.classList.add('py-4');
      navbar.classList.remove('glass-nav', 'py-3');
    }
  });
}

// Mobile Menu
function initMobileMenu() {
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = mobileMenu.querySelectorAll('a');

  hamburgerBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('flex');
    
    // Animate hamburger lines
    const spans = hamburgerBtn.querySelectorAll('span');
    spans[0].classList.toggle('rotate-45');
    spans[0].classList.toggle('translate-y-2');
    spans[1].classList.toggle('opacity-0');
    spans[2].classList.toggle('-rotate-45');
    spans[2].classList.toggle('-translate-y-2');
  });

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      mobileMenu.classList.remove('flex');
      // Reset hamburger
      const spans = hamburgerBtn.querySelectorAll('span');
      spans[0].classList.remove('rotate-45', 'translate-y-2');
      spans[1].classList.remove('opacity-0');
      spans[2].classList.remove('-rotate-45', '-translate-y-2');
    });
  });
}

// 2. Floating Particles Background (Hero)
function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  
  let width = canvas.width = canvas.parentElement.offsetWidth;
  let height = canvas.height = canvas.parentElement.offsetHeight;
  
  window.addEventListener('resize', () => {
    width = canvas.width = canvas.parentElement.offsetWidth;
    height = canvas.height = canvas.parentElement.offsetHeight;
  });

  const particlesCount = 35;
  const particlesArray = [];

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height + height; // Start below
      this.size = Math.random() * 3 + 1;
      this.speedY = -(Math.random() * 1.5 + 0.5);
      this.speedX = Math.random() * 1 - 0.5;
      this.opacity = Math.random() * 0.5 + 0.1;
    }

    update() {
      this.y += this.speedY;
      this.x += this.speedX;
      if (this.y < 0) {
        this.y = height + Math.random() * 50;
        this.x = Math.random() * width;
      }
    }

    draw() {
      ctx.fillStyle = `rgba(255, 77, 45, ${this.opacity})`;
      ctx.shadowBlur = 10;
      ctx.shadowColor = '#FF4D2D';
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0; // reset
    }
  }

  for (let i = 0; i < particlesCount; i++) {
    particlesArray.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    particlesArray.forEach(p => {
      p.update();
      p.draw();
    });
    requestAnimationFrame(animate);
  }

  animate();
}

// 4. Tabbed Menu Dynamic Rendering
function initTabbedMenu() {
  const menuGrid = document.getElementById('menu-grid');
  const tabs = document.querySelectorAll('.menu-tab');
  
  if (!menuGrid) return;

  function renderMenu(category) {
    menuGrid.innerHTML = '';
    const filtered = menuData.filter(item => item.category === category);
    
    filtered.forEach((item, index) => {
      const isFav = favorites.includes(item.id);
      const card = document.createElement('div');
      card.className = 'scale-hover bg-brand-card border border-white/10 rounded-[32px] p-4 overflow-hidden shadow-2xl relative transition-all duration-300 opacity-0 transform translate-y-8';
      card.style.animation = `fadeInUp 0.5s ease forwards ${index * 0.08}s`;
      
      card.innerHTML = `
        <div class="relative overflow-hidden h-48 md:h-52 rounded-[24px]">
          <img src="${item.img}" alt="${item.name}" class="w-full h-full object-cover transition-transform duration-700 hover:scale-110" loading="lazy" referrerPolicy="no-referrer">
          <span class="absolute top-4 left-4 bg-brand-primary text-white text-[10px] font-montserrat uppercase px-3 py-1 rounded-full font-bold shadow-[0_0_15px_rgba(255,77,45,0.4)] z-10">
            ${item.category === 'burgers' ? '🔥 Gourmet' : item.category === 'chicken' ? '🍗 Crispy' : item.category === 'fries' ? '🍟 Loaded' : '✨ Hot'}
          </span>
          <button data-id="${item.id}" class="fav-btn absolute top-4 right-4 w-10 h-10 bg-black/60 backdrop-blur-xl hover:bg-brand-primary border border-white/10 rounded-full flex items-center justify-center transition-all duration-300 z-10 text-${isFav ? 'brand-primary' : 'white'} hover:text-white shadow-lg">
            <i class="lucide-heart ${isFav ? 'fill-brand-primary text-brand-primary' : 'text-white'}" style="width:18px;height:18px;"></i>
          </button>
        </div>
        <div class="p-4 flex flex-col justify-between min-h-[210px] md:min-h-[220px] h-auto pb-2 mt-2">
          <div>
            <div class="flex items-center justify-between mb-2">
              <h3 class="font-bebas text-lg md:text-xl text-brand-text line-clamp-1">${item.name}</h3>
              <div class="flex items-center gap-1 shrink-0 text-brand-secondary font-semibold font-montserrat text-sm">
                <span>★</span>
                <span>${item.rating}</span>
              </div>
            </div>
            <p class="text-brand-muted text-xs md:text-sm font-sans font-light leading-relaxed line-clamp-2 mb-4">${item.desc}</p>
          </div>
          <div class="flex items-center justify-between mt-auto">
            <div class="font-montserrat text-lg md:text-xl font-black text-brand-primary">
              Rs. ${item.price}
            </div>
            <button data-id="${item.id}" class="add-to-cart-btn bg-brand-primary hover:bg-brand-accent text-white font-montserrat font-bold text-xs uppercase px-5 py-2.5 rounded-full flex items-center gap-2 transition-all duration-300 shadow-[0_0_12px_rgba(255,77,45,0.3)]">
              <i class="lucide-shopping-cart" style="width:14px;height:14px;"></i> Add To Cart
            </button>
          </div>
        </div>
      `;
      menuGrid.appendChild(card);
    });
    
    // Wire up events for newly created cards
    wireCardEvents();
    // Re-trigger lucide icons
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  // Set default active tab and render
  renderMenu('burgers');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => {
        t.classList.remove('bg-brand-primary', 'text-white', 'glow-primary');
        t.classList.add('bg-brand-card', 'text-brand-text');
      });
      tab.classList.add('bg-brand-primary', 'text-white', 'glow-primary');
      tab.classList.remove('bg-brand-card', 'text-brand-text');
      
      const category = tab.getAttribute('data-category');
      renderMenu(category);
    });
  });
}

function wireCardEvents() {
  // Favorite buttons
  document.querySelectorAll('.fav-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.getAttribute('data-id');
      const icon = btn.querySelector('i');
      
      let index = favorites.indexOf(id);
      if (index === -1) {
        favorites.push(id);
        btn.classList.add('text-brand-primary');
        icon.classList.add('fill-brand-primary', 'text-brand-primary');
        showToast('Added to Favorites ❤️');
      } else {
        favorites.splice(index, 1);
        btn.classList.remove('text-brand-primary');
        icon.classList.remove('fill-brand-primary', 'text-brand-primary');
        showToast('Removed from Favorites');
      }
      localStorage.setItem('route47_favs', JSON.stringify(favorites));
    });
  });

  // Add to cart buttons
  document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      addToCart(id);
    });
  });
}

// 5. Deal Countdown Timer (Resets at Midnight)
function initDealCountdown() {
  const hoursEl = document.getElementById('countdown-hours');
  const minsEl = document.getElementById('countdown-mins');
  const secsEl = document.getElementById('countdown-secs');
  
  if (!hoursEl) return;

  function updateTimer() {
    const now = new Date();
    const midnight = new Date(now);
    midnight.setHours(24, 0, 0, 0); // Next midnight
    
    const diff = midnight - now;
    
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    hoursEl.innerText = String(hours).padStart(2, '0');
    minsEl.innerText = String(minutes).padStart(2, '0');
    secsEl.innerText = String(seconds).padStart(2, '0');
  }
  
  updateTimer();
  setInterval(updateTimer, 1000);
}

// 6. About Counters (Count up on scroll)
function initScrollCounters() {
  const counterSection = document.getElementById('about');
  if (!counterSection) return;
  const counters = counterSection.querySelectorAll('.counter-val');
  let started = false;

  function startCounters() {
    counters.forEach(counter => {
      const target = parseFloat(counter.getAttribute('data-target'));
      const duration = 2000; // 2 seconds
      const step = target / (duration / 16); // ~60fps
      let current = 0;
      
      const updateCount = () => {
        current += step;
        if (current < target) {
          if (target % 1 === 0) {
            counter.innerText = Math.floor(current).toLocaleString();
          } else {
            counter.innerText = current.toFixed(1);
          }
          requestAnimationFrame(updateCount);
        } else {
          counter.innerText = target.toLocaleString() + (counter.getAttribute('data-suffix') || '');
        }
      };
      updateCount();
    });
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !started) {
        startCounters();
        started = true;
      }
    });
  }, { threshold: 0.3 });

  observer.observe(counterSection);
}

// 9. Customer Reviews Carousel Slider
function initReviewsCarousel() {
  const container = document.getElementById('reviews-container');
  const dotsContainer = document.getElementById('carousel-dots');
  
  if (!container || !dotsContainer) return;

  // Render Reviews Cards
  testimonials.forEach((item, index) => {
    const card = document.createElement('div');
    card.className = `shrink-0 w-full select-none glass p-6 md:p-8 rounded-2xl transition-all duration-500 absolute top-0 left-0 h-full opacity-0 scale-95 flex flex-col justify-between`;
    card.setAttribute('data-index', index);
    
    let stars = '';
    for (let i = 0; i < item.rating; i++) stars += '★';
    
    card.innerHTML = `
      <div>
        <div class="flex items-center gap-4 mb-5">
          <img src="${item.img}" alt="${item.name}" class="w-14 h-14 rounded-full border-2 border-brand-primary object-cover shadow-lg" loading="lazy" referrerPolicy="no-referrer">
          <div>
            <h4 class="font-montserrat font-bold text-base md:text-lg text-brand-text">${item.name}</h4>
            <p class="text-brand-primary text-xs md:text-sm font-semibold">${item.role}</p>
          </div>
        </div>
        <div class="text-brand-secondary text-base mb-4">${stars}</div>
        <p class="text-brand-muted text-sm md:text-base font-sans italic leading-relaxed font-light">"${item.text}"</p>
      </div>
      <div class="text-right text-brand-muted/20 font-bebas text-5xl select-none">“</div>
    `;
    container.appendChild(card);

    // Create Dot
    const dot = document.createElement('button');
    dot.className = `w-3 h-3 rounded-full bg-brand-muted/30 transition-all duration-300 cursor-pointer hover:bg-brand-primary`;
    dot.setAttribute('data-target', index);
    dotsContainer.appendChild(dot);
  });

  let currentIndex = 0;
  const cards = container.querySelectorAll('[data-index]');
  const dots = dotsContainer.querySelectorAll('[data-target]');

  function showSlide(index) {
    cards.forEach((card, idx) => {
      card.classList.add('opacity-0', 'scale-95');
      card.classList.remove('opacity-100', 'scale-100', 'z-10');
      dots[idx].classList.remove('bg-brand-primary', 'w-8');
      dots[idx].classList.add('bg-brand-muted/30');
    });

    cards[index].classList.remove('opacity-0', 'scale-95');
    cards[index].classList.add('opacity-100', 'scale-100', 'z-10');
    dots[index].classList.add('bg-brand-primary', 'w-8');
    dots[index].classList.remove('bg-brand-muted/30');
    currentIndex = index;
  }

  // Default slide
  showSlide(0);

  // Auto transition
  let timer = setInterval(() => {
    let next = (currentIndex + 1) % testimonials.length;
    showSlide(next);
  }, 4000);

  // Manual dot override
  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      clearInterval(timer);
      const index = parseInt(dot.getAttribute('data-target'));
      showSlide(index);
      timer = setInterval(() => {
        let next = (currentIndex + 1) % testimonials.length;
        showSlide(next);
      }, 4000);
    });
  });
}

// 10. Food Gallery Dynamic Zoom Rendering
// Using progressive grid layout in index.html, handled nicely by hover styling in Tailwind

// Scroll Reveal Logic
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal-on-scroll');
  
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.1 });

  reveals.forEach(el => revealObserver.observe(el));
}

// Active Nav Link Tracker
function initActiveNavHighlight() {
  const sections = document.querySelectorAll('section, header');
  const navLinks = document.querySelectorAll('.nav-link');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        
        navLinks.forEach(link => {
          link.classList.remove('text-brand-primary');
          link.classList.add('text-brand-text');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('text-brand-primary');
            link.classList.remove('text-brand-text');
          }
        });

        mobileNavLinks.forEach(link => {
          link.classList.remove('text-brand-primary');
          link.classList.add('text-brand-text');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('text-brand-primary');
          }
        });
      }
    });
  }, { threshold: 0.2 });

  sections.forEach(s => navObserver.observe(s));
}

// Back to Top Button
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('opacity-100', 'translate-y-0');
      btn.classList.remove('opacity-0', 'translate-y-4', 'pointer-events-none');
    } else {
      btn.classList.remove('opacity-100', 'translate-y-0');
      btn.classList.add('opacity-0', 'translate-y-4', 'pointer-events-none');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// 14. Core Cart Drawer Engine
function initCart() {
  const openCartBtn = document.getElementById('cart-btn');
  const openCartBtnMobile = document.getElementById('cart-btn-mobile');
  const closeCartBtn = document.getElementById('close-cart-btn');
  const cartDrawer = document.getElementById('cart-drawer');
  const cartBackdrop = document.getElementById('cart-backdrop');
  
  if (!cartDrawer) return;

  const toggleCart = () => {
    cartDrawer.classList.toggle('translate-x-full');
    cartBackdrop.classList.toggle('hidden');
    cartBackdrop.classList.toggle('block');
  };

  openCartBtn.addEventListener('click', toggleCart);
  if (openCartBtnMobile) openCartBtnMobile.addEventListener('click', toggleCart);
  closeCartBtn.addEventListener('click', toggleCart);
  cartBackdrop.addEventListener('click', toggleCart);

  // Quick hero buttons wire-up
  document.querySelectorAll('.hero-order-btn').forEach(b => {
    b.addEventListener('click', (e) => {
      e.preventDefault();
      document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Hero custom feature burger card click (Add popular beast)
  const heroCardBtn = document.getElementById('hero-feat-btn');
  if (heroCardBtn) {
    heroCardBtn.addEventListener('click', () => {
      addToCart('b2'); // Adds Highway Beast
    });
  }

  // Subscribe newsletters
  document.querySelectorAll('.subscribe-form').forEach(f => {
    f.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = f.querySelector('input');
      if (input.value.trim()) {
        showToast(`Thank you for subscribing, ${input.value}! 🍔`);
        input.value = '';
      }
    });
  });

  // Order WhatsApp buttons in Contacts
  const orderWaBtn = document.getElementById('contact-wa-btn');
  if (orderWaBtn) {
    orderWaBtn.addEventListener('click', () => {
      window.open('https://wa.me/923001234567?text=Hi%20Route47!%20I%20want%20to%20place%20a%20gourmet%20delivery%20order.', '_blank');
    });
  }

  // App download CTA toasts
  document.querySelectorAll('.app-download-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      showToast('Route47 Mobile App coming soon to App Store and Google Play! 📱');
    });
  });

  // Dynamic Checkout Modal setup
  const checkoutBtn = document.getElementById('checkout-btn');
  const checkoutModal = document.getElementById('checkout-modal');
  const checkoutForm = document.getElementById('checkout-form');
  const closeCheckoutBtn = document.getElementById('close-checkout-btn');

  checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) {
      showToast('Your Cart is empty!');
      return;
    }
    // Open modal
    checkoutModal.classList.remove('hidden');
    checkoutModal.classList.add('flex');
    
    // Fill total
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    document.getElementById('checkout-total-price').innerText = `Rs. ${total}`;
  });

  closeCheckoutBtn.addEventListener('click', () => {
    checkoutModal.classList.add('hidden');
    checkoutModal.classList.remove('flex');
  });

  checkoutForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('checkout-name').value;
    const address = document.getElementById('checkout-address').value;
    const phone = document.getElementById('checkout-phone').value;
    const notes = document.getElementById('checkout-notes').value || 'None';
    const payment = document.querySelector('input[name="payment"]:checked').value;

    // Simulate ordering success
    checkoutModal.classList.add('hidden');
    checkoutModal.classList.remove('flex');
    
    // Clear form
    checkoutForm.reset();

    // Trigger Order Confirmed View
    const successModal = document.getElementById('success-modal');
    successModal.classList.remove('hidden');
    successModal.classList.add('flex');

    // Display WhatsApp prompt
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const orderNum = 'R47-' + Math.floor(100000 + Math.random() * 900000);
    document.getElementById('success-order-id').innerText = orderNum;
    
    // Wire WhatsApp direct click inside success modal
    const successWaBtn = document.getElementById('success-wa-btn');
    successWaBtn.onclick = () => {
      let message = `*🔥 ROUTE47 ORDER CONFIRMATION *\n-----------------------------\n`;
      message += `*Order ID:* ${orderNum}\n`;
      message += `*Name:* ${name}\n`;
      message += `*Phone:* ${phone}\n`;
      message += `*Delivery Address:* ${address}\n`;
      message += `*Instructions:* ${notes}\n`;
      message += `*Payment:* ${payment}\n\n`;
      message += `*ITEMS ORDERED:*\n`;
      
      cart.forEach(item => {
        message += `• ${item.name} x${item.quantity} - Rs. ${item.price * item.quantity}\n`;
      });
      
      message += `\n*TOTAL AMOUNT:* Rs. ${total}\n`;
      message += `-----------------------------\nThank you for choosing Route47. Every Bite is Worth the Journey!`;
      
      const encoded = encodeURIComponent(message);
      window.open(`https://wa.me/923001234567?text=${encoded}`, '_blank');
    };

    // Reset checkout state
    cart = [];
    updateCartUI();
  });

  // Success Modal close
  document.getElementById('close-success-btn').addEventListener('click', () => {
    document.getElementById('success-modal').classList.add('hidden');
    document.getElementById('success-modal').classList.remove('flex');
  });
}

function addToCart(id) {
  const product = menuData.find(item => item.id === id);
  if (!product) return;

  const existing = cart.find(item => item.id === id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  showToast(`Added ${product.name} to Cart! 🍔`);
  updateCartUI();
}

function updateCartUI() {
  const cartItemsContainer = document.getElementById('cart-items');
  const cartCountBadges = document.querySelectorAll('.cart-count-badge');
  const cartSubtotal = document.getElementById('cart-subtotal');
  
  if (!cartItemsContainer) return;

  // Update Badges
  const totalQty = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCountBadges.forEach(badge => {
    badge.innerText = totalQty;
    if (totalQty > 0) {
      badge.classList.remove('hidden');
    } else {
      badge.classList.add('hidden');
    }
  });

  // Render Items
  cartItemsContainer.innerHTML = '';
  
  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `
      <div class="flex flex-col items-center justify-center h-64 text-center">
        <div class="w-16 h-16 bg-brand-bg border border-brand-border rounded-full flex items-center justify-center text-brand-muted/40 mb-4 text-2xl">
          🛒
        </div>
        <p class="font-montserrat font-semibold text-brand-text mb-1">Your cart is empty</p>
        <p class="text-xs text-brand-muted px-6">Explore our signature menu and pick something legendary.</p>
      </div>
    `;
    cartSubtotal.innerText = 'Rs. 0';
    return;
  }

  cart.forEach(item => {
    const itemRow = document.createElement('div');
    itemRow.className = 'flex gap-4 border-b border-brand-border/40 pb-4 mb-4';
    itemRow.innerHTML = `
      <img src="${item.img}" alt="${item.name}" class="w-16 h-16 rounded-xl object-cover border border-brand-border shrink-0" loading="lazy" referrerPolicy="no-referrer">
      <div class="flex-grow flex flex-col justify-between">
        <div>
          <h4 class="font-montserrat font-bold text-sm text-brand-text line-clamp-1">${item.name}</h4>
          <span class="text-xs text-brand-primary font-montserrat font-semibold">Rs. ${item.price}</span>
        </div>
        <div class="flex items-center justify-between mt-2">
          <div class="flex items-center bg-brand-bg border border-brand-border rounded-full px-2 py-0.5">
            <button class="qty-btn-minus text-brand-muted hover:text-brand-primary px-1 text-sm font-bold cursor-pointer" data-id="${item.id}">-</button>
            <span class="text-xs text-brand-text font-bold px-3">${item.quantity}</span>
            <button class="qty-btn-plus text-brand-muted hover:text-brand-primary px-1 text-sm font-bold cursor-pointer" data-id="${item.id}">+</button>
          </div>
          <button class="delete-cart-item text-xs text-brand-muted/60 hover:text-brand-primary cursor-pointer transition-colors" data-id="${item.id}">
            <i class="lucide-trash-2" style="width:14px;height:14px;"></i> Remove
          </button>
        </div>
      </div>
    `;
    cartItemsContainer.appendChild(itemRow);
  });

  // Calc subtotal
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  cartSubtotal.innerText = `Rs. ${subtotal}`;

  // Hook row click actions
  cartItemsContainer.querySelectorAll('.qty-btn-plus').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      const item = cart.find(i => i.id === id);
      if (item) item.quantity += 1;
      updateCartUI();
    });
  });

  cartItemsContainer.querySelectorAll('.qty-btn-minus').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      const item = cart.find(i => i.id === id);
      if (item) {
        item.quantity -= 1;
        if (item.quantity <= 0) {
          cart = cart.filter(i => i.id !== id);
        }
      }
      updateCartUI();
    });
  });

  cartItemsContainer.querySelectorAll('.delete-cart-item').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      cart = cart.filter(i => i.id !== id);
      showToast('Item removed from Cart');
      updateCartUI();
    });
  });

  // Re-trigger lucide icons
  if (window.lucide) {
    window.lucide.createIcons();
  }
}
