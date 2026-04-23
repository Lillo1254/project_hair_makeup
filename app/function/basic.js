export async function fetchMedia(type) {
  try {
    const res = await fetch(`/api/media/${type}`);

    if (!res.ok) {
      console.error("Errore API:", await res.text());
      return [];
    }

    const data = await res.json();

   /*  console.log(`📂 MEDIA (${type}):`, data); */

    return data;
  } catch (err) {
    console.error("Errore fetch:", err);
    return [];
  }
}

export const observerReveal = (target, classAdd, percent = 0.3) => {
    const elements = document.querySelectorAll(`.${target}`);  
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const classArray = classAdd.split(' ');


                entry.target.classList.add(...classArray);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: percent,
    });
    elements.forEach((el) => {
        observer.observe(el);
    });
}

export const observerVideo = (target, attrName,attrValue , percent = 0.3) => {
    const elements = document.querySelectorAll(`.${target}`);  
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            const video = entry.target;
                 if (entry.isIntersecting && entry.intersectionRatio >= percent) {
        if (attrName && attrValue) {
          video.setAttribute(attrName, attrValue);
        }

        // forza la riproduzione
        video.play().catch(() => {});

        
      } else {
        // opzionale: pausa quando esce
        video.pause();
      }
        });
    }, {
        threshold: percent,
    });
    elements.forEach((el) => {
        observer.observe(el);
    });
}