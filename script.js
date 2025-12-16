document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target. style.animationPlayState = 'running';
                observer.unobserve(entry.target);
            }
        });
    }, { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    const cards = document.querySelectorAll('.retroceso-card');
    cards.forEach(card => {
        card.style.animationPlayState = 'paused';
        observer.observe(card);
    });

    const scrollIndicator = document.querySelector('.scroll-indicator');
    const targetSection = document.querySelector('.main-metric');

    if (scrollIndicator && targetSection) {
        scrollIndicator.addEventListener('click', () => {
            targetSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        });
    }

    const progressObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bars = entry.target.querySelectorAll('.bar-fill');
                bars.forEach(bar => {
                    bar. style.width = '0';
                    setTimeout(() => {
                        bar.style.width = bar.classList.contains('bar-fill--40') ? '40%' :
                                         bar.classList.contains('bar-fill--25') ? '25%' :
                                         bar.classList.contains('bar-fill--20') ? '20%' :
                                         bar.classList.contains('bar-fill--15') ? '15%' : '0';
                    }, 100);
                });
                progressObserver.unobserve(entry.target);
            }
        });
    }, { threshold:  0.3 });

    const distributionBars = document. querySelector('.distribution-bars');
    if (distributionBars) {
        progressObserver.observe(distributionBars);
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this. getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior:  'smooth',
                block:  'start'
            });
        }
    });
});
