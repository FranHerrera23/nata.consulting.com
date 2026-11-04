(() => {
  const media = matchMedia('(prefers-reduced-motion: reduce), (pointer: coarse), (max-width: 767px)');
  let lenis, frame, items = [];
  const selectors = '.hero h1,.hero-lead,.hero-action,.hero-reassurance,.introduction>p,.work-intro,.case-header,.case-facts,.value,.case figure,.approach h2,.section-dek,.services>div,.belief>p,.about>h2,.about-intro,.people,.conversation>h2,.conversation>p';
  function reset() {
    cancelAnimationFrame(frame); lenis?.destroy(); lenis = null;
    items.forEach(({el}) => {el.removeAttribute('data-reveal'); el.style.removeProperty('--reveal-opacity'); el.style.removeProperty('--reveal-y');});
    items = [];
  }
  function start() {
    reset(); if (media.matches) return;
    items = [...document.querySelectorAll(selectors)].map(el => {
      el.setAttribute('data-reveal',''); return {el, done:false};
    });
    if (window.Lenis) lenis = new Lenis({duration:1.7,easing:t=>Math.min(1,1.001-Math.pow(2,-10*t)),smoothWheel:true,wheelMultiplier:.9,anchors:{offset:-48}});
    function tick(time) {
      lenis?.raf(time);
      const height = innerHeight;
      items.forEach(item => {
        if(item.done) return;
        const top = item.el.getBoundingClientRect().top;
        const p = Math.max(0,Math.min(1,(height*.96-top)/(height*.24)));
        const eased = 1-Math.pow(1-p,3);
        item.el.style.setProperty('--reveal-opacity',String(eased));
        item.el.style.setProperty('--reveal-y',`${(1-eased)*24}px`);
        if(p===1) {item.done=true;item.el.style.removeProperty('--reveal-opacity');item.el.style.removeProperty('--reveal-y');}
      });
      frame=requestAnimationFrame(tick);
    }
    frame=requestAnimationFrame(tick);
  }
  media.addEventListener('change',start); start();
})();

(() => {
 const descriptions = {
  work: 'A focused pool of light supports the task. Gentle ambient light keeps the surrounding room comfortable.',
  gather: 'Light spreads across faces and shared surfaces. The room supports conversation rather than a single task.',
  unwind: 'Lower ambient light and a softer focal point make the room feel quieter, while keeping circulation legible.'
 };
 document.querySelectorAll('[data-scene]').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('[data-scene]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
  document.querySelector('.room-study').dataset.light = button.dataset.scene;
  document.querySelector('#scene-description').textContent = descriptions[button.dataset.scene];
 }));
})();
