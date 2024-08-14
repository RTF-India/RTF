const button = document.getElementById('myButton');
        let posX = 0;
        let posY = 0;

        // Load position from local storage (if available)
        const savedPosX = localStorage.getItem('buttonPosX');
        const savedPosY = localStorage.getItem('buttonPosY');
        if (savedPosX && savedPosY) {
            posX = parseInt(savedPosX);
            posY = parseInt(savedPosY);
            button.style.left = posX + 'px';
            button.style.top = posY + 'px';
        }

        button.addEventListener('touchstart', startDrag);
        button.addEventListener('touchmove', drag);
        button.addEventListener('touchend', stopDrag);

        function startDrag(e) {
            e.preventDefault();
            const touch = e.touches[0];
            posX = touch.clientX - button.offsetWidth / 2;
            posY = touch.clientY - button.offsetHeight / 2;
            button.style.left = clamp(posX, 0, window.innerWidth - button.offsetWidth) + 'px';
            button.style.top = clamp(posY, 0, window.innerHeight - button.offsetHeight) + 'px';
        }

        function drag(e) {
            e.preventDefault();
            const touch = e.touches[0];
            const dx = touch.clientX - posX;
            const dy = touch.clientY - posY;
            posX = touch.clientX - button.offsetWidth / 2;
            posY = touch.clientY - button.offsetHeight / 2;
            button.style.left = clamp(posX, 0, window.innerWidth - button.offsetWidth) + 'px';
            button.style.top = clamp(posY, 0, window.innerHeight - button.offsetHeight) + 'px';
        }

        function stopDrag() {
            // Save position to local storage
            localStorage.setItem('buttonPosX', posX);
            localStorage.setItem('buttonPosY', posY);
        }

        // Helper function to clamp a value between min and max
        function clamp(value, min, max) {
            return Math.min(Math.max(value, min), max);
        }