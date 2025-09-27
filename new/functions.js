// General Functions for Portfolio

// Face Animation for Hero Section
function initFaceAnimation() {
    const canvas = document.getElementById('hero-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationId;
    let rotationAngle = 0;
    let facePoints = [];
    let centerX, centerY;
    let faceRadius = 0;
    
    // Variáveis para movimento pela tela inteira
    let currentOffsetX = 0;
    let currentOffsetY = 0;
    let targetOffsetX = 0;
    let targetOffsetY = 0;
    let lastRandomUpdate = 0;
    let randomUpdateInterval = 15000; // Atualiza a cada 6 segundos (mais devagar)
    let movementSpeed = 0.008; // Velocidade de movimento mais suave

    const setCanvasSize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        centerX = canvas.width / 2;
        centerY = canvas.height / 2;
        // Tamanho fixo em 200%
        faceRadius = Math.min(canvas.width, canvas.height) * 0.3; // 200% do tamanho original
    };

    // Definir pontos da cara em coordenadas relativas
    const createFacePoints = () => {
        const points = [];
        const currentRadius = faceRadius; // Tamanho fixo
        
        // Contorno da face (círculo)
        for (let i = 0; i < 36; i++) {
            const angle = (i / 36) * Math.PI * 2;
            const radius = currentRadius;
            points.push({
                x: Math.cos(angle) * radius,
                y: Math.sin(angle) * radius,
                size: 3,
                color: 'rgba(58, 134, 255, 0.8)',
                type: 'face',
                originalRadius: radius
            });
        }

        // Olhos
        const eyeY = -currentRadius * 0.3;
        const eyeDistance = currentRadius * 0.4;
        
        // Olho esquerdo
        for (let i = 0; i < 8; i++) {
            const angle = (i / 8) * Math.PI * 2;
            const radius = currentRadius * 0.15;
            points.push({
                x: -eyeDistance + Math.cos(angle) * radius,
                y: eyeY + Math.sin(angle) * radius,
                size: 2.5,
                color: 'rgba(255, 190, 11, 0.9)',
                type: 'eye',
                originalRadius: radius
            });
        }

        // Olho direito
        for (let i = 0; i < 8; i++) {
            const angle = (i / 8) * Math.PI * 2;
            const radius = currentRadius * 0.15;
            points.push({
                x: eyeDistance + Math.cos(angle) * radius,
                y: eyeY + Math.sin(angle) * radius,
                size: 2.5,
                color: 'rgba(255, 190, 11, 0.9)',
                type: 'eye',
                originalRadius: radius
            });
        }

        // Nariz
        const noseY = currentRadius * 0.1;
        for (let i = 0; i < 6; i++) {
            const angle = (i / 6) * Math.PI * 2;
            const radius = currentRadius * 0.08;
            points.push({
                x: Math.cos(angle) * radius,
                y: noseY + Math.sin(angle) * radius,
                size: 2,
                color: 'rgba(58, 134, 255, 0.7)',
                type: 'nose',
                originalRadius: radius
            });
        }

        // Boca (sorriso)
        const mouthY = currentRadius * 0.4;
        const mouthWidth = currentRadius * 0.6;
        for (let i = 0; i < 12; i++) {
            const t = i / 11;
            const x = (t - 0.5) * mouthWidth;
            const y = mouthY + Math.sin(t * Math.PI) * currentRadius * 0.1;
            points.push({
                x: x,
                y: y,
                size: 2.2,
                color: 'rgba(255, 190, 11, 0.8)',
                type: 'mouth',
                originalRadius: currentRadius
            });
        }

        // Sobrancelhas
        const eyebrowY = -currentRadius * 0.5;
        const eyebrowDistance = currentRadius * 0.45;
        
        // Sobrancelha esquerda
        for (let i = 0; i < 6; i++) {
            const t = i / 5;
            const x = -eyebrowDistance + (t - 0.5) * currentRadius * 0.2;
            const y = eyebrowY + Math.sin(t * Math.PI) * currentRadius * 0.05;
            points.push({
                x: x,
                y: y,
                size: 2,
                color: 'rgba(58, 134, 255, 0.6)',
                type: 'eyebrow',
                originalRadius: currentRadius
            });
        }

        // Sobrancelha direita
        for (let i = 0; i < 6; i++) {
            const t = i / 5;
            const x = eyebrowDistance + (t - 0.5) * currentRadius * 0.2;
            const y = eyebrowY + Math.sin(t * Math.PI) * currentRadius * 0.05;
            points.push({
                x: x,
                y: y,
                size: 2,
                color: 'rgba(58, 134, 255, 0.6)',
                type: 'eyebrow',
                originalRadius: currentRadius
            });
        }

        return points;
    };

    const updateRandomVariations = () => {
        const now = Date.now();
        if (now - lastRandomUpdate > randomUpdateInterval) {
            // Definir novos alvos para movimento pela tela inteira
            // Usar toda a área da tela, considerando o tamanho da cara
            const maxOffsetX = (canvas.width / 2) - faceRadius;
            const maxOffsetY = (canvas.height / 2) - faceRadius;
            
            targetOffsetX = (Math.random() - 0.5) * maxOffsetX * 2;
            targetOffsetY = (Math.random() - 0.5) * maxOffsetY * 2;
            
            lastRandomUpdate = now;
        }
        
        // Movimento suave em direção aos alvos
        const speedFactor = movementSpeed;
        
        // Interpolação suave para posição
        currentOffsetX += (targetOffsetX - currentOffsetX) * speedFactor;
        currentOffsetY += (targetOffsetY - currentOffsetY) * speedFactor;
    };

    const drawFace = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Atualizar variações aleatórias
        updateRandomVariations();
        
        // Salvar contexto
        ctx.save();
        
        // Calcular posição final com movimento suave
        const finalX = centerX + currentOffsetX;
        const finalY = centerY + currentOffsetY;
        
        // Mover para posição final e aplicar rotação
        ctx.translate(finalX, finalY);
        ctx.rotate(rotationAngle);
        
        // Desenhar pontos da cara
        facePoints.forEach(point => {
            // Efeito de pulsação baseado no tipo
            let pulseSize = point.size;
            if (point.type === 'eye') {
                pulseSize *= (1 + Math.sin(Date.now() * 0.002) * 0.2); // Mais suave
            } else if (point.type === 'mouth') {
                pulseSize *= (1 + Math.sin(Date.now() * 0.0015) * 0.15); // Mais suave
            }

            // Desenhar ponto com brilho fixo
            ctx.shadowColor = point.color;
            ctx.shadowBlur = 10;
            ctx.fillStyle = point.color;
            ctx.beginPath();
            ctx.arc(point.x, point.y, pulseSize, 0, Math.PI * 2);
            ctx.fill();
            
            // Resetar sombra
            ctx.shadowBlur = 0;
        });

        // Desenhar conexões entre pontos próximos para criar linhas
        ctx.strokeStyle = 'rgba(58, 134, 255, 0.3)';
        ctx.lineWidth = 1;
        
        facePoints.forEach((point, i) => {
            if (point.type === 'face') {
                const nextPoint = facePoints[(i + 1) % facePoints.length];
                if (nextPoint.type === 'face') {
                    ctx.beginPath();
                    ctx.moveTo(point.x, point.y);
                    ctx.lineTo(nextPoint.x, nextPoint.y);
                    ctx.stroke();
                }
            }
        });

        // Restaurar contexto
        ctx.restore();
        
        // Atualizar ângulo de rotação (mais devagar)
        rotationAngle += 0.002;
    };

    const animate = () => {
        drawFace();
        animationId = requestAnimationFrame(animate);
    };

    const init = () => {
        setCanvasSize();
        facePoints = createFacePoints();
        animate();
    };

    init();

    window.addEventListener('resize', () => {
        if (animationId) {
            cancelAnimationFrame(animationId);
        }
        init();
    });
}

// Skills Chart Functions
function injectSkills() {
    const skillsContainer = document.getElementById('skills-container');
    if (!skillsContainer) return;

    // Criar gráficos para todas as categorias
    const allChartsHTML = skillsData.map((category, categoryIndex) => `
        <div class="custom-chart-container">
            <div class="chart-header">
                <h3 class="text-xl font-semibold text-white mb-4">${category.category}</h3>
            </div>
            <div class="chart-content">
                <div class="chart-bars">
                    ${category.skills.map((skill, index) => `
                        <div class="chart-bar-item" data-level="${skill.level}">
                            <div class="bar-container">
                                <div class="bar-fill" style="height: 0%; background: linear-gradient(0deg, 
                                    ${index % 2 === 0 ? 'rgba(58, 134, 255, 0.8)' : 'rgba(255, 190, 11, 0.8)'}, 
                                    ${index % 2 === 0 ? 'rgba(58, 134, 255, 1)' : 'rgba(255, 190, 11, 1)'});">
                                </div>
                                <div class="bar-percentage">${skill.level}%</div>
                            </div>
                            <div class="bar-label">
                                <i class="${skill.icon} text-lg"></i>
                                <span class="skill-name">${skill.name}</span>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `).join('');
    
    skillsContainer.innerHTML = allChartsHTML;
    
    // Animar todas as barras verticais
    setTimeout(() => {
        const allBarItems = document.querySelectorAll('.chart-bar-item');
        allBarItems.forEach((item, index) => {
            const level = item.dataset.level;
            const barFill = item.querySelector('.bar-fill');
            
            setTimeout(() => {
                barFill.style.height = level + '%';
            }, index * 150); // Reduzido para animação mais rápida
        });
    }, 300);
}

// Timeline Functions
function createTimelineItem(item) {
    const responsibilitiesList = item.responsibilities ?
        `<ul class="mt-3 space-y-2">
            ${item.responsibilities.map(resp => `<li class="text-text-secondary text-sm flex items-start">
                <span class="text-[var(--primary-accent)] mr-3 mt-1">&#8227;</span>
                <span>${resp}</span>
            </li>`).join('')}
        </ul>` : '';

    return `
        <div class="timeline-item pl-8 pb-10 relative">
            <div class="timeline-dot"></div>
            <p class="text-sm text-[var(--primary-accent)] mb-1 font-semibold">${item.period}</p>
            <h3 class="text-xl font-bold text-white">${item.role || item.course}</h3>
            <h4 class="text-md text-text-secondary font-semibold mb-2">${item.company || item.institution}</h4>
            ${item.description ? `<p class="text-text-secondary text-sm">${item.description}</p>` : ''}
            ${responsibilitiesList}
        </div>
    `;
}

function injectExperience() {
    const experienceContainer = document.getElementById('experience-timeline');
    if (!experienceContainer) return;

    experienceData.forEach(item => {
        experienceContainer.innerHTML += createTimelineItem(item);
    });
}

function injectEducation() {
    const educationContainer = document.getElementById('education-timeline');
    if (!educationContainer) return;

    educationData.forEach(item => {
        educationContainer.innerHTML += createTimelineItem(item);
    });
}

// Carousel Functions
function createCarousel(carouselId, data, renderCard) {
    const track = document.getElementById(carouselId);
    const dotsContainer = document.getElementById(`${carouselId.replace('-carousel', '')}-dots-container`);
    const prevBtn = document.getElementById(`${carouselId.replace('-carousel', '')}-prev-btn`);
    const nextBtn = document.getElementById(`${carouselId.replace('-carousel', '')}-next-btn`);
    if (!track || !dotsContainer) return;

    let cardsPerView = 1;
    let currentPage = 0;

    const calcCardsPerView = () => {
        if (window.innerWidth >= 1400) cardsPerView = 4;
        else if (window.innerWidth >= 1024) cardsPerView = 3;
        else if (window.innerWidth >= 768) cardsPerView = 2;
        else cardsPerView = 1;
    };

    const renderCards = () => {
        track.innerHTML = '';
        data.forEach(item => {
            const wrapper = document.createElement('div');
            wrapper.innerHTML = renderCard(item);
            track.appendChild(wrapper);
        });
    };

    const updateDots = () => {
        const totalPages = Math.ceil(data.length / cardsPerView);
        dotsContainer.innerHTML = '';
        for (let i = 0; i < totalPages; i++) {
            const dot = document.createElement('button');
            dot.className = `w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === currentPage ? 'bg-[var(--primary-accent)] scale-125' : 'bg-gray-600'}`;
            dot.addEventListener('click', () => {
                currentPage = i;
                scrollToPage();
            });
            dotsContainer.appendChild(dot);
        }
    };

    const scrollToPage = () => {
        const card = track.children[0];
        if (!card) return;
        const gap = 24; // 1.5rem
        const cardWidth = card.offsetWidth + gap;
        let offset = currentPage * cardsPerView * cardWidth;
        const containerWidth = track.parentElement.clientWidth;
        const maxOffset = Math.max(0, track.scrollWidth - containerWidth);
        if (offset > maxOffset) offset = maxOffset;
        track.style.transform = `translateX(-${offset}px)`;
        updateDots();
    };

    const next = () => {
        const totalPages = Math.ceil(data.length / cardsPerView);
        currentPage = (currentPage + 1) % totalPages;
        scrollToPage();
    };

    const prev = () => {
        const totalPages = Math.ceil(data.length / cardsPerView);
        currentPage = currentPage === 0 ? totalPages - 1 : currentPage - 1;
        scrollToPage();
    };

    const onResize = () => {
        const prevPerView = cardsPerView;
        calcCardsPerView();
        if (prevPerView !== cardsPerView) {
            currentPage = 0;
            updateDots();
            scrollToPage();
        }
    };

    // Inicialização
    calcCardsPerView();
    renderCards();
    updateDots();
    scrollToPage();

    if (prevBtn) prevBtn.onclick = prev;
    if (nextBtn) nextBtn.onclick = next;
    window.addEventListener('resize', onResize);
}

// Project Card Renderer
function renderProjectCard(project) {
    const techIcons = project.tech.map(t => `<i class="${techIconsMap[t] || 'fas fa-question-circle'} text-lg tooltip"><span class="tooltiptext">${t.charAt(0).toUpperCase() + t.slice(1)}</span></i>`).join('');
    const statusColor = project.status === 'Finalizado' ? 'bg-green-500/20 text-green-400' :
        project.status === 'Em andamento' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-black/20 text-white';

    return `
        <div class="project-card rounded-xl overflow-hidden shadow-lg flex flex-col h-full">
            <img src="${project.img}" alt="${project.title}" class="w-full h-36 object-cover" onerror="this.onerror=null;this.src='https://placehold.co/400x225/10101F/E0E0E0?text=Imagem+Indispon%C3%ADvel';">
            <div class="p-4 flex flex-col flex-grow">
                <div class="flex justify-between items-start mb-2">
                    <h3 class="text-lg font-bold text-white leading-tight">${project.title}</h3>
                    <span class="text-xs font-semibold px-2 py-1 rounded-full flex-shrink-0 ml-2 ${statusColor}">${project.status}</span>
                </div>
                <p class="text-text-secondary mb-3 flex-grow text-sm leading-relaxed">${project.description}</p>
                <div class="flex justify-between items-center mt-auto pt-3 border-t border-[var(--border-color)]">
                    <div class="flex space-x-3 text-text-secondary">
                        ${techIcons}
                    </div>
                    <div class="flex space-x-2">
                        ${project.site ? `<a href="${project.site}" target="_blank" class="text-[var(--primary-accent)] hover:text-white transition-colors duration-300 font-semibold text-sm"><i class="fas fa-external-link-alt"></i></a>` : ''}
                        <a href="${project.link}" target="_blank" class="text-[var(--primary-accent)] hover:text-white transition-colors duration-300 font-semibold text-sm"><i class="fab fa-github"></i></a>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Certification Card Renderer
function renderCertCard(cert) {
    return `
        <div class="cert-card rounded-xl overflow-hidden shadow-lg flex flex-col h-full">
            <div class="p-5 flex flex-col flex-grow">
                <div class="flex items-center justify-between mb-4">
                    <h3 class="text-lg font-bold text-white leading-tight">${cert.title}</h3>
                    <span class="text-sm text-text-secondary bg-[var(--primary-accent)]/20 px-2 py-1 rounded-full">${cert.year}</span>
                </div>
                <p class="text-[var(--primary-accent)] mb-4 font-semibold text-sm">${cert.institution}</p>
                <p class="text-text-secondary leading-relaxed flex-grow text-sm">${cert.description}</p>
                <div class="mt-4 pt-4 border-t border-[var(--border-color)]">
                    <div class="flex items-center justify-center">
                        <i class="fas fa-certificate text-[var(--primary-accent)] text-lg"></i>
                        <span class="ml-2 text-xs text-text-secondary">Certificação Completa</span>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Scroll and Navigation Functions
function initScrollHandlers() {
    const cvContainer = document.querySelector('.cv-container');
    const heroSection = document.getElementById('home');
    
    let cvVisible = false;
    
    const handleScroll = () => {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        const scrollPosition = window.scrollY;
        
        if (scrollPosition > heroBottom - 500 && !cvVisible) {
            cvContainer.classList.remove('cv-hidden');
            cvContainer.classList.add('cv-visible');
            cvVisible = true;
        } else if (scrollPosition <= heroBottom - 500 && cvVisible) {
            cvContainer.classList.remove('cv-visible');
            cvContainer.classList.add('cv-hidden');
            cvVisible = false;
        }
    };

    window.addEventListener('scroll', handleScroll);

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.cv-nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Highlight active navigation item on scroll
    const sections = document.querySelectorAll('.cv-section');
    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Remove active class from all nav links
                navLinks.forEach(link => link.classList.remove('text-white', 'bg-[var(--primary-accent)]/20'));
                // Add active class to corresponding nav link
                const activeLink = document.querySelector(`.cv-nav-link[href="#${entry.target.id}"]`);
                if (activeLink) {
                    activeLink.classList.add('text-white', 'bg-[var(--primary-accent)]/20');
                }
            }
        });
    }, observerOptions);

    sections.forEach(section => sectionObserver.observe(section));

    // Fade-in animation observer
    const fadeInElements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    fadeInElements.forEach(el => observer.observe(el));
}

// Initialize all functions
function initializePortfolio() {
    initFaceAnimation();
    injectSkills();
    injectExperience();
    injectEducation();
    createCarousel('projects-carousel', projectsData, renderProjectCard);
    createCarousel('certifications-carousel', certificationsData, renderCertCard);
    initScrollHandlers();
}
