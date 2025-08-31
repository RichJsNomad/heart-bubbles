const bodyEl = document.querySelector("body");

function createHeart(xPos, yPos) {
  const spanEl = document.createElement("span");
  spanEl.style.left = xPos + "px";
  spanEl.style.top = yPos + "px";
  const size = Math.random() * 100;
  spanEl.style.height = size + "px";
  spanEl.style.width = size + "px";
  
  // Рандомно выбираем тип сердечка
  const heartType = Math.random() < 0.5 ? 'heart1' : 'heart2';
  spanEl.classList.add(heartType);
  
  // Рандомно выбираем тип анимации
  const animations = ['animate', 'waveMove', 'arcMove'];
  const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
  spanEl.style.animation = `${randomAnimation} 10s linear`;
  
  bodyEl.appendChild(spanEl);
  setTimeout(() => {
    spanEl.remove();
  }, 3000);
}

// Обработка движения мыши на десктопе
bodyEl.addEventListener("mousemove", (event) => {
  const xPos = event.offsetX;
  const yPos = event.offsetY;
  createHeart(xPos, yPos);
});

// Обработка касаний на мобильных устройствах
bodyEl.addEventListener("touchmove", (event) => {
  event.preventDefault(); // Предотвращаем прокрутку
  const touch = event.touches[0];
  const rect = bodyEl.getBoundingClientRect();
  const xPos = touch.clientX - rect.left;
  const yPos = touch.clientY - rect.top;
  createHeart(xPos, yPos);
});

// Обработка кликов на десктопе и тачей на мобильных устройствах
bodyEl.addEventListener("click", (event) => {
  const xPos = event.offsetX;
  const yPos = event.offsetY;
  
  // Создаем основной SpongeBob
  const spanEl = document.createElement("span");
  spanEl.style.left = xPos + "px";
  spanEl.style.top = yPos + "px";
  const size = Math.random() * 100 + 50;
  spanEl.style.height = size + "px";
  spanEl.style.width = size + "px";
  spanEl.classList.add('spongebob');
  spanEl.style.animation = 'animate 10s linear';
  
  bodyEl.appendChild(spanEl);
  setTimeout(() => {
    spanEl.remove();
  }, 3000);
  
  // Создаем эффект взрыва из мелких сердечек
  for (let i = 0; i < 8; i++) {
    setTimeout(() => {
      const miniHeart = document.createElement("span");
      const angle = (i * 45) * Math.PI / 180; // Углы в радианах
      const distance = 50 + Math.random() * 30;
      const miniXPos = xPos + Math.cos(angle) * distance;
      const miniYPos = yPos + Math.sin(angle) * distance;
      
      miniHeart.style.left = miniXPos + "px";
      miniHeart.style.top = miniYPos + "px";
      const miniSize = Math.random() * 30 + 20;
      miniHeart.style.height = miniSize + "px";
      miniHeart.style.width = miniSize + "px";
      
      const heartType = Math.random() < 0.5 ? 'heart1' : 'heart2';
      miniHeart.classList.add(heartType);
      
      const animations = ['animate', 'waveMove', 'arcMove'];
      const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
      miniHeart.style.animation = `${randomAnimation} 8s linear`;
      
      bodyEl.appendChild(miniHeart);
      setTimeout(() => {
        miniHeart.remove();
      }, 2500);
    }, i * 50); // Задержка для создания эффекта взрыва
  }
});
