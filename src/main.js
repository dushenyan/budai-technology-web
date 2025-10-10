import './style.less';

// 移动端菜单切换
const burger = document.querySelector('.burger');
const nav = document.querySelector('nav');

if (burger && nav) {
  burger.addEventListener('click', () => {
    nav.classList.toggle('active');
    
    // 汉堡菜单动画
    burger.classList.toggle('toggle');
  });
}

// 轮播效果
const glide = new Glide('.glide');
const captionsEl = document.querySelectorAll('.slide-caption');

glide.on(['mount.after', 'run.after'], () => {
  const caption = captionsEl[glide.index];
  anime({
    targets: caption.children,
    opacity: [0, 1],
    duration: 400,
    easing: 'linear',
    delay: anime.stagger(400, { start: 300 }),
    translateY: [anime.stagger([40, 10]), 0]
  });
});

glide.on(['run.before'], () => {
  document.querySelectorAll('.slide-caption > *').forEach(el => {
    el.style.opacity = 0;
  });
});

glide.mount();

// 同位数排列
const isotope = new Isotope("#cases", {
  layoutMode: 'fitRows',
  itemSelector: '.case-item'
});

const filterBtns = document.querySelector(".filter-btns");

if (filterBtns) {
  filterBtns.addEventListener('click', e => {
    const { target } = e;
    const filterOption = target.getAttribute('data-filter');
    if (filterOption) {
      // 移除所有按钮的active类
      document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
      });
      // 为当前按钮添加active类
      target.classList.add('active');
      // 应用过滤器
      isotope.arrange({ filter: filterOption });
    }
  });
}
