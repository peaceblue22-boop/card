(function () {
  'use strict';

  const card = document.getElementById('card');
  const avatar = document.getElementById('avatar');

  // 아바타 이미지 로드 실패 시 플레이스홀더 스타일
  if (avatar) {
    avatar.addEventListener('error', function () {
      this.style.background = 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)';
      this.style.objectFit = 'none';
      this.alt = '프로필';
      this.src = '';
      this.style.fontSize = '3rem';
      this.style.color = '#fff';
      this.style.display = 'flex';
      this.style.alignItems = 'center';
      this.style.justifyContent = 'center';
      this.textContent = 'E';
    });
  }

  // 카드 기울기 효과 (마우스 따라가기)
  if (card) {
    card.addEventListener('mousemove', function (e) {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      const tiltX = (y - 0.5) * 8;
      const tiltY = (x - 0.5) * -8;
      card.style.transform = `perspective(800px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-6px)`;
    });

    card.addEventListener('mouseleave', function () {
      card.style.transform = '';
    });
  }
})();
