/*섹션 나누기*/ 
document.querySelectorAll("section").forEach(section => {
    section.addEventListener("click", () => {
        section.scrollIntoView({ behavior: "smooth" });
    });
});



/*마우스 커서*/ 
document.addEventListener("mousemove", function(event) {
    const light = document.querySelector(".light");
    light.style.transform = `translate(${event.pageX - 75}px, ${event.pageY - 75}px)`;

    createStar(event.pageX, event.pageY);
});

function createStar(x, y) {
    const star = document.createElement("div");
    star.classList.add("star");
    document.body.appendChild(star); 
    // 별의 시작 위치 설정
    star.style.left = `${x}px`;
    star.style.top = `${y}px`;

    // X축으로 흩어지는 정도를 줄임 (-10px ~ +10px 범위)
    const xMove = Math.random() * 50 - 10;
    star.style.setProperty('--x-move', `${xMove}px`);

    // 1초 후 별 요소 삭제
    setTimeout(() => {
        star.remove();
    }, 1000);
}

// 특정 슬라이드를 보이게 하고 나머지는 숨김
function showSlide(slideNumber) {
    // 모든 슬라이드를 숨김
    const allSlides = document.querySelectorAll('.slides');
    allSlides.forEach(slide => {
        slide.style.display = 'none';
    });

    // 선택한 슬라이드만 보이도록 설정
    const selectedSlide = document.getElementById('slide' + slideNumber);
    if (selectedSlide) {
        selectedSlide.style.display = 'flex'; // 슬라이드를 flex로 설정
        // 첫 번째 이미지 표시 및 dot 활성화
        showSlideImage(slideNumber, 1);
    }

    // 모든 썸네일의 active 클래스 제거
    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.classList.remove('active');
        const wrapper = thumbnail.parentElement; // thumbnail의 부모 요소인 wrapper
        wrapper.classList.remove('active'); // wrapper의 active 클래스 제거
    });

    // 선택한 썸네일에 active 클래스 추가
    thumbnails[slideNumber - 1].classList.add('active');
    const wrapper = thumbnails[slideNumber - 1].parentElement; // 선택된 thumbnail의 부모 요소
    wrapper.classList.add('active'); // wrapper에 active 클래스 추가
}



// 슬라이드의 이미지를 보여주는 함수
function showSlideImage(slideNumber, imageNumber) {
    const slideContent = document.querySelector(`#slide${slideNumber} .slide-content`);

    // 모든 이미지를 숨김
    const allImages = slideContent.querySelectorAll('img');
    allImages.forEach(img => {
        img.style.display = 'none';
    });

    // 선택한 이미지만 보이게 함
    const selectedImage = slideContent.querySelector(`img:nth-child(${imageNumber})`);
    if (selectedImage) {
        selectedImage.style.display = 'block';
    }

    // 모든 dot의 active 클래스 제거
    const allDots = document.querySelectorAll(`#slide${slideNumber} .dot`);
    allDots.forEach(dot => {
        dot.classList.remove('active');
    });

    // 선택한 dot에 active 클래스 추가
    const selectedDot = allDots[imageNumber - 1]; // imageNumber는 1부터 시작
    if (selectedDot) {
        selectedDot.classList.add('active');
    }
}

// 클릭 이벤트 설정
function setupSlideButtons() {
    // 슬라이드 개수
    const slideCount = document.querySelectorAll('.slides').length;
    for (let i = 1; i <= slideCount; i++) {
        const dots = document.querySelectorAll(`#slide${i} .dot`);
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                showSlideImage(i, index + 1); // 클릭한 dot에 해당하는 이미지 보여주기
            });
        });
    }
}

// 초기화: 슬라이드 버튼 클릭 이벤트 설정
setupSlideButtons();

// 초기 슬라이드 표시 (예: 첫 번째 슬라이드)
showSlide(1);

/*출생연도*/
function showResult() {
    const birthYear = document.getElementById("birthYearInput").value;
    const result = document.getElementById("result");
    const resultSub = document.getElementById("result-sub");

    // 입력값이 있는지 확인
    if (birthYear) {
        result.innerHTML = `${birthYear}년생의 예상 국민연금 수령 금액은 0원 입니다!`;
        result.style.display = "block";
        resultSub.style.display = "block";
    } else {
        alert("출생연도를 입력해 주세요!"); // 입력이 없을 경우 경고 메시지
    }
}

/*------------------------------------------------------------------*/ 
function showResult() {
    const birthYear = document.getElementById("birthYearInput").value;
    const result = document.getElementById("result");
    const resultSub = document.getElementById("result-sub");

    // 입력값이 있는지 확인
    if (birthYear) {
        result.innerHTML = `${birthYear}년생의 예상 국민연금 수령 금액은 0원 입니다!`;
        result.style.display = "block"; // 결과 영역을 보이게 설정
        resultSub.style.display = "block"; // 서브 결과 영역을 보이게 설정
    } else {
        alert("출생연도를 입력해 주세요!"); // 입력이 없을 경우 경고 메시지
    }
}

/*span태그 수고~~~~~ 이름 맞춰서 바꿔줄 것

document.addEventListener('DOMContentLoaded', function() {
    const trigger = document.getElementById('trigger');

    // 마우스를 올리면 active 클래스 추가
    trigger.addEventListener('mouseenter', function() {
        trigger.classList.add('active'); 
    });

    // 마우스가 나가도 active 클래스 유지
    trigger.addEventListener('mouseleave', function() {
        // 이 부분은 비워두고, active 클래스 유지
    });
});*/

