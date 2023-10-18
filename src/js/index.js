window.onload = function() {
    let now = new Date();
    let date = now.getDate();
    let month = now.getMonth() + 1;
    let year = now.getFullYear();
    let dayOfWeek = now.getDay();
    let days = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];

    let dayName = days[dayOfWeek];

    document.getElementById('date').textContent = `${year}年${month}月${date}日  ${dayName}`;

    let hdItems = document.querySelectorAll('.hd-item');
    let bdItems = document.querySelectorAll('.bd-item');
    let cdItems = document.querySelectorAll('.cd-item');

    hdItems.forEach((hdItem) => {
        hdItem.addEventListener('click', function () {
            let itemNumber = this.getAttribute('data-item');

            bdItems.forEach((bdItem) => {
                if (bdItem.getAttribute('data-item') === itemNumber) {
                    bdItem.classList.remove('hidden');
                } else {
                    bdItem.classList.add('hidden');
                }
            });
            hdItems.forEach((hdItem) => {
                if (hdItem.getAttribute('data-item') === itemNumber) {
                    hdItem.classList.remove('border-b-[#CCCCCC]')
                    hdItem.classList.add('border-b-[#085B94]');
                } else {
                    hdItem.classList.remove('border-b-[#085B94]');
                    hdItem.classList.add('border-b-[#CCCCCC]')
                }
            });
            cdItems.forEach((cdItem) => {
                if (cdItem.getAttribute('data-item') === itemNumber) {
                    cdItem.classList.remove('hidden');
                } else {
                    cdItem.classList.add('hidden');
                }
            });

        });
    });

    let currentImageIndex = 0;
    const items = document.querySelectorAll('.carousel-item');
    const indicators = document.querySelectorAll('.carousel-indicator');

    function updateCarousel() {
        items.forEach((item, index) => {
            const image = item.querySelector('.carousel-image');
            const text = item.querySelector('.text-center');
            if (index === currentImageIndex) {
                image.classList.add('block');
                image.classList.remove('hidden');
                text.classList.add('block');
                text.classList.remove('hidden');
            } else {
                image.classList.add('hidden');
                image.classList.remove('block');
                text.classList.add('hidden');
                text.classList.remove('block');
            }
        });

        indicators.forEach((indicator, index) => {
            if (index === currentImageIndex) {
                indicator.classList.remove('w-[10px]');
                indicator.classList.add('w-[24px]');
            } else {
                indicator.classList.remove('w-[24px]');
                indicator.classList.add('w-[10px]');
            }
        });
    }

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentImageIndex = index;
            updateCarousel();
        });
    });

    setInterval(() => {
        currentImageIndex = (currentImageIndex + 1) % items.length;
        updateCarousel();
    }, 3000);


}
