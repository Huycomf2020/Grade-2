// Dữ liệu chi tiết 6 bài học của Chủ đề 1
const topic1Lessons = [
    {
        id: 1,
        title: "Bài 1: Ôn tập các số đến 100",
        theory: [
            "Cấu tạo số có 2 chữ số gồm hàng chục (bên trái) và hàng đơn vị (bên phải).",
            "Phân tích cấu tạo số: 87 = 80 + 7 (8 chục và 7 đơn vị)."
        ],
        practice: [
            "Dạng 1: Hoàn thành bảng viết số, đọc số, xác định số chục và đơn vị.",
            "Dạng 2: Sắp xếp dãy số theo thứ tự từ bé đến lớn và từ lớn đến bé.",
            "Dạng 3: Tách số thành tổng các chục và đơn vị (59 = 50 + 9).",
            "Dạng 4: So sánh và tìm các số lớn hơn/bé hơn một số cho trước."
        ],
        game: [
            "“Tìm cà rốt cho thỏ”: Nối các chú thỏ mang thẻ chữ (vd: 5 chục và 4 đơn vị) với củ cà rốt mang số tương ứng (54).",
            "“Lắp ghép mảnh bìa”: Ghép các miếng bìa chứa dãy số vào đúng vị trí trên bảng 100 số."
        ]
    },
    {
        id: 2,
        title: "Bài 2: Tia số. Số liền trước, số liền sau",
        theory: [
            "Tia số: Vạch đầu tiên là số 0 (bé nhất). Mỗi số lớn hơn các số bên trái và bé hơn các số bên phải nó.",
            "Số liền trước / liền sau: Số liền trước của 4 là 3; số liền sau của 4 là 5."
        ],
        practice: [
            "Dạng 1: Điền số còn thiếu vào các vạch trên tia số.",
            "Dạng 2: Xác định đúng/sai về số liền trước, số liền sau (n - 1 và n + 1).",
            "Dạng 3: Tìm số ở giữa hai số cho trước."
        ],
        game: [
            "“Móc bóng bay vào tia số”: Nối quả bóng mang phép tính (vd: 10 + 2) vào đúng vạch số 12 trên tia số.",
            "“Đoàn tàu mang số”: Tìm số toa tàu liền trước/liền sau của một toa cụ thể."
        ]
    },
    {
        id: 3,
        title: "Bài 3: Các thành phần của phép cộng, phép trừ",
        theory: [
            "Phép cộng: Số hạng + Số hạng = Tổng.",
            "Phép trừ: Số bị trừ - Số trừ = Hiệu."
        ],
        practice: [
            "Dạng 1: Điền thành phần còn thiếu vào bảng (tìm Tổng hoặc Hiệu).",
            "Dạng 2: Đặt tính rồi tính tổng/hiệu khi biết các thành phần.",
            "Dạng 3: Lập các phép tính cộng/trừ từ các thẻ số cho trước."
        ],
        game: [
            "“Ghép toa tàu mừng xuân”: Đổi chỗ các toa tàu ghi số để được dãy số giảm dần hoặc tăng dần.",
            "“Tìm cặp sao sáng”: Phân loại sao theo màu sắc và tính tổng/hiệu giữa các nhóm sao."
        ]
    },
    {
        id: 4,
        title: "Bài 4: Hơn, kém nhau bao nhiêu",
        theory: [
            "Muốn biết số này hơn hoặc kém số kia bao nhiêu đơn vị, ta lấy Số lớn trừ đi Số bé."
        ],
        practice: [
            "Dạng 1: Bài toán so sánh hai nhóm đối tượng cụ thể (gà/vịt, chim cành trên/cành dưới).",
            "Dạng 2: Giải bài toán có lời văn về độ tuổi, số lượng (bố hơn con bao nhiêu tuổi).",
            "Dạng 3: So sánh độ dài các băng giấy, dụng cụ học tập (cm)."
        ],
        game: [
            "“Gấp thuyền so tài”: So sánh số lượng thuyền giấy Mai và Nam gấp được để tìm phần hơn/kém."
        ]
    },
    {
        id: 5,
        title: "Bài 5: Ôn tập phép cộng, phép trừ (không nhớ) trong phạm vi 100",
        theory: [
            "Cộng/trừ nhẩm các số tròn chục (6 chục + 4 chục = 10 chục = 100).",
            "Quy tắc đặt tính thẳng cột (hàng đơn vị thẳng hàng đơn vị, hàng chục thẳng hàng chục)."
        ],
        practice: [
            "Dạng 1: Tính nhẩm phép cộng/trừ tròn chục.",
            "Dạng 2: Đặt tính rồi tính (không nhớ).",
            "Dạng 3: Tìm chữ số còn thiếu bị che mất trong phép tính.",
            "Dạng 4: Giải bài toán có lời văn bằng 1 phép tính cộng hoặc trừ."
        ],
        game: [
            "“Ô che nắng biển xanh”: Nối hoặc phân loại các ô có phép tính cho kết quả bé hơn/lớn hơn 50.",
            "“Ghép đôi phép tính”: Nối hai chiếc dù/thẻ có cùng kết quả tính."
        ]
    },
    {
        id: 6,
        title: "Bài 6: Luyện tập chung",
        theory: [
            "Tổng hợp kiến thức về cấu tạo số, tia số, phép cộng trừ không nhớ, bài toán hơn kém."
        ],
        practice: [
            "Dạng 1: Điền số thích hợp vào dãy số đếm nhảy.",
            "Dạng 2: Chọn đáp án đúng A, B, C cho các câu hỏi tổng hợp.",
            "Dạng 3: So sánh giá trị biểu thức (>, <, =).",
            "Dạng 4: Giải bài toán thực tế (trồng cây, quyên góp)."
        ],
        game: [
            "“Đưa ong về tổ”: Đổ xúc xắc di chuyển theo các ô, giải đúng phép tính để tiến về đích.",
            "“Xe đua tốc độ”: Sắp xếp thứ tự các xe đua theo số ghi trên xe và tính tổng xe lớn nhất/bé nhất."
        ]
    }
];

// Quản lý trạng thái
let selectedLesson = null;
let synth = window.speechSynthesis;
let currentUtterance = null;
let isSpeaking = false;
let femaleVoice = null;

// Khởi tạo ứng dụng khi load xong
window.onload = function() {
    renderLessonDropdown();
    loadVoice();
    selectLesson(1); // Chọn mặc định Bài 1
    
    if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = loadVoice;
    }
};

// Nạp danh sách giọng đọc tiếng Việt
function loadVoice() {
    let voices = synth.getVoices();
    let viVoices = voices.filter(v => v.lang.includes("vi"));
    if (viVoices.length > 0) {
        femaleVoice = viVoices.find(v => v.name.includes("HoaiMy") || v.name.includes("Linh") || v.name.toLowerCase().includes("female")) || viVoices[0];
    }
}

// Render Dropdown 6 bài học
function renderLessonDropdown() {
    const select = document.getElementById("lesson-dropdown");
    if (!select) return;

    select.innerHTML = "";
    topic1Lessons.forEach(lesson => {
        const option = document.createElement("option");
        option.value = lesson.id;
        option.textContent = lesson.title;
        select.appendChild(option);
    });
}

// Chọn và hiển thị bài học
function selectLesson(id) {
    stopReading();
    selectedLesson = topic1Lessons.find(l => l.id == id);
    if (!selectedLesson) return;

    document.getElementById("lesson-title-display").innerText = selectedLesson.title;

    // Render danh sách dưới dạng thẻ <ul> <li> cho đẹp
    document.getElementById("theory-display").innerHTML = renderList(selectedLesson.theory);
    document.getElementById("practice-display").innerHTML = renderList(selectedLesson.practice);
    document.getElementById("game-display").innerHTML = renderList(selectedLesson.game);
}

// Hàm hỗ trợ biến mảng văn bản thành chuỗi <ul><li>
function renderList(items) {
    if (!items || items.length === 0) return "<p>Chưa có nội dung</p>";
    return "<ul>" + items.map(item => `<li>${item}</li>`).join('') + "<ul>";
}

// Đọc lý thuyết bằng giọng nữ
function toggleReadTheory() {
    if (isSpeaking) {
        stopReading();
    } else {
        startReading();
    }
}

function startReading() {
    if (!selectedLesson || !selectedLesson.theory) return;

    // Chuẩn bị văn bản đọc
    let textToRead = selectedLesson.theory.join(". ");

    synth.cancel();

    currentUtterance = new SpeechSynthesisUtterance(textToRead);
    currentUtterance.lang = "vi-VN";
    currentUtterance.rate = 0.85;
    currentUtterance.pitch = 1.2;

    if (femaleVoice) {
        currentUtterance.voice = femaleVoice;
    }

    currentUtterance.onstart = () => {
        isSpeaking = true;
        const btn = document.getElementById("btn-read");
        btn.classList.add("stop");
        btn.innerHTML = `<i class="fa-solid fa-square"></i> Dừng Đọc`;
    };

    currentUtterance.onend = resetReadButton;
    currentUtterance.onerror = resetReadButton;

    synth.speak(currentUtterance);
}

function stopReading() {
    if (synth.speaking) {
        synth.cancel();
    }
    resetReadButton();
}

function resetReadButton() {
    isSpeaking = false;
    const btn = document.getElementById("btn-read");
    if (btn) {
        btn.classList.remove("stop");
        btn.innerHTML = `<i class="fa-solid fa-volume-high"></i> Đọc Lý Thuyết`;
    }
}