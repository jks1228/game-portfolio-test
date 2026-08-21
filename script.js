document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabName = this.getAttribute('data-tab');

            // 모든 탭 버튼에서 active 클래스 제거
            tabButtons.forEach(btn => btn.classList.remove('active'));

            // 모든 탭 콘텐츠 숨기기
            tabContents.forEach(content => content.classList.add('hidden'));

            // 선택된 탭 활성화
            this.classList.add('active');
            document.getElementById(tabName).classList.remove('hidden');
        });
    });
});
