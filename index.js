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
  
  const spanEl = document.createElement("span");
  spanEl.style.left = xPos + "px";
  spanEl.style.top = yPos + "px";
  const size = Math.random() * 100;
  spanEl.style.height = size + "px";
  spanEl.style.width = size + "px";
  spanEl.classList.add('spongebob');
  
  bodyEl.appendChild(spanEl);
  setTimeout(() => {
    spanEl.remove();
  }, 3000);
});
