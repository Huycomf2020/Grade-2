// Dữ liệu chi tiết 6 bài học thuộc Chủ đề 1 trích xuất từ PDF SGK Kết Nối Tri Thức
const topic1Lessons = [
    {
        id: 1,
        title: "Bài 1: Ôn tập các số đến 100",
        theory: "Cấu tạo số có 2 chữ số gồm hàng chục ở bên trái và hàng đơn vị ở bên phải. Ví dụ, phân tích cấu tạo số 87: 87 = 80 + 7, gồm 8 chục và 7 đơn vị.",
        practice: [
            { type: "Dạng 1: Hoàn thành bảng", text: "Số 34 gồm mấy chục và mấy đơn vị?", options: ["3 chục và 4 đơn vị", "4 chục và 3 đơn vị"], correct: 0 },
            { type: "Dạng 2: Sắp xếp dãy số", text: "Sắp xếp dãy số sau theo thứ tự từ bé đến lớn: 58, 29, 89, 49", options: ["29, 49, 58, 89", "89, 58, 49, 29"], correct: 0 },
            { type: "Dạng 3: Tách số thành tổng", text: "Viết số 59 thành tổng các chục và đơn vị:", options: ["59 = 50 + 9", "59 = 5 + 90"], correct: 0 },
            { type: "Dạng 4: So sánh số", text: "Tìm các số lớn hơn 60 trong các số: 58, 69, 50, 89", options: ["69 và 89", "58 và 50"], correct: 0 }
        ],
        game: {
            title: "🐰 Trò chơi: Tìm cà rốt cho Thỏ",
            question: "Chú thỏ mang bảng '5 chục và 4 đơn vị' thì củ cà rốt mang số mấy?",
            options: ["🥕 54", "🥕 45", "🥕 50", "🥕 40"],
            correct: 0
        },
        challenge: {
            title: "🏆 Thử thách: Lắp ghép bảng 100 số",
            question: "Miếng bìa chứa các số 65, 66 thuộc hàng nào trong bảng 100 số?",
            options: ["Hàng số từ 61 đến 70", "Hàng số từ 51 đến 60"],
            correct: 0
        }
    },
    {
        id: 2,
        title: "Bài 2: Tia số. Số liền trước, số liền sau",
        theory: "Tia số có vạch đầu tiên là số 0, là số bé nhất. Trên tia số, mỗi số lớn hơn các số bên trái và bé hơn các số bên phải nó. Số liền trước của 4 là 3; số liền sau của 4 là 5.",
        practice: [
            { type: "Dạng 1: Điền vạch tia số", text: "Số đứng ngay sau số 12 trên tia số là số nào?", options: ["13", "11"], correct: 0 },
            { type: "Dạng 2: Đúng/Sai số liền trước, liền sau", text: "Số liền trước của 16 là 15, đúng hay sai?", options: ["Đúng", "Sai"], correct: 0 },
            { type: "Dạng 3: Tìm số ở giữa", text: "Số nằm giữa 49 và 51 là số nào?", options: ["50", "52"], correct: 0 }
        ],
        game: {
            title: "🎈 Trò chơi: Móc bóng bay vào tia số",
            question: "Quả bóng mang phép tính (10 + 7) nối với vạch số mấy trên tia số?",
            options: ["Vạch số 17", "Vạch số 10", "Vạch số 7"],
            correct: 0
        },
        challenge: {
            title: "🐢 Thử thách: Cuộc đua của các chú Thỏ",
            question: "Thỏ trắng chạy ở làn liền trước làn số 4. Thỏ trắng chạy ở làn số mấy?",
            options: ["Làn số 3", "Làn số 5"],
            correct: 0
        }
    },
    {
        id: 3,
        title: "Bài 3: Các thành phần của phép cộng, phép trừ",
        theory: "Trong phép cộng: Số hạng cộng Số hạng bằng Tổng. Trong phép trừ: Số bị trừ trừ Số trừ bằng Hiệu.",
        practice: [
            { type: "Dạng 1: Tìm Tổng hoặc Hiệu", text: "Biết các số hạng là 42 và 35. Tổng là bao nhiêu?", options: ["77", "75"], correct: 0 },
            { type: "Dạng 2: Đặt tính rồi tính", text: "Số bị trừ là 68, số trừ là 25. Hiệu là bao nhiêu?", options: ["43", "33"], correct: 0 },
            { type: "Dạng 3: Lập phép tính", text: "Từ các thẻ 21, 36, 57 ta lập được phép cộng đúng nào?", options: ["21 + 36 = 57", "21 + 57 = 36"], correct: 0 }
        ],
        game: {
            title: "⭐ Trò chơi: Tìm cặp sao sáng",
            question: "Đếm có 12 sao đỏ và 10 sao vàng. Tổng số sao là bao nhiêu?",
            options: ["22 ngôi sao", "20 ngôi sao"],
            correct: 0
        },
        challenge: {
            title: "🚂 Thử thách: Ghép toa tàu mừng xuân",
            question: "Đoàn tàu A có các toa 50, 60, 70, 40. Sắp xếp các toa từ lớn đến bé:",
            options: ["70, 60, 50, 40", "40, 50, 60, 70"],
            correct: 0
        }
    },
    {
        id: 4,
        title: "Bài 4: Hơn, kém nhau bao nhiêu",
        theory: "Muốn biết số này hơn hoặc kém số kia bao nhiêu đơn vị, ta lấy Số lớn trừ đi Số bé.",
        practice: [
            { type: "Dạng 1: So sánh nhóm đối tượng", text: "Có 10 con gà và 7 con vịt. Số gà hơn số vịt mấy con?", options: ["3 con (10 - 7 = 3)", "2 con"], correct: 0 },
            { type: "Dạng 2: Bài toán tuổi tác", text: "Mai 7 tuổi, bố 38 tuổi. Bố hơn Mai bao nhiêu tuổi?", options: ["31 tuổi (38 - 7 = 31)", "30 tuổi"], correct: 0 },
            { type: "Dạng 3: So sánh độ dài", text: "Băng giấy đỏ dài 7 cm, băng giấy vàng dài 4 cm. Băng đỏ dài hơn băng vàng mấy cm?", options: ["3 cm", "4 cm"], correct: 0 }
        ],
        game: {
            title: "⛵ Trò chơi: Gấp thuyền so tài",
            question: "Mai gấp được 8 cái thuyền, Nam gấp được 5 cái. Mai gấp hơn Nam mấy cái?",
            options: ["3 cái thuyền", "2 cái thuyền"],
            correct: 0
        },
        challenge: {
            title: "🤖 Thử thách: Chiều cao Rô-bốt",
            question: "Rô-bốt A cao 56 cm, Rô-bốt B cao 54 cm. Rô-bốt A cao hơn Rô-bốt B bao nhiêu cm?",
            options: ["2 cm", "3 cm"],
            correct: 0
        }
    },
    {
        id: 5,
        title: "Bài 5: Ôn tập phép cộng, phép trừ (không nhớ) trong phạm vi 100",
        theory: "Cộng trừ nhẩm các số tròn chục: 6 chục + 4 chục = 10 chục = 100. Đặt tính thẳng cột: hàng đơn vị thẳng hàng đơn vị, hàng chục thẳng hàng chục.",
        practice: [
            { type: "Dạng 1: Tính nhẩm tròn chục", text: "Tính nhẩm: 60 + 40 = ?", options: ["100", "90"], correct: 0 },
            { type: "Dạng 2: Đặt tính rồi tính", text: "Kết quả của phép tính 52 + 37 là:", options: ["89", "79"], correct: 0 },
            { type: "Dạng 3: Tìm chữ số che mất", text: "36 + ? = 38. Số cần điền là:", options: ["2", "3"], correct: 0 }
        ],
        game: {
            title: "☂️ Trò chơi: Ô che nắng biển xanh",
            question: "Chiếc ô nào có kết quả phép tính lớn hơn 50?",
            options: ["30 + 40 (= 70)", "70 - 30 (= 40)"],
            correct: 0
        },
        challenge: {
            title: "⛵ Thử thách: Hành khách trên thuyền",
            question: "Trên thuyền có 12 người, thêm 3 người lên thuyền. Hỏi có tất cả bao nhiêu người?",
            options: ["15 người (12 + 3 = 15)", "14 người"],
            correct: 0
        }
    },
    {
        id: 6,
        title: "Bài 6: Luyện tập chung",
        theory: "Tổng hợp toàn bộ kiến thức về cấu tạo số, tia số, phép cộng, phép trừ không nhớ và bài toán so sánh hơn kém trong phạm vi 100.",
        practice: [
            { type: "Dạng 1: Dãy số nhảy", text: "Điền số tiếp theo vào dãy số đếm nhảy: 15, 16, 17, ?, 19", options: ["18", "20"], correct: 0 },
            { type: "Dạng 2: Tách số thành tổng", text: "Số 55 viết thành tổng là:", options: ["55 = 50 + 5", "55 = 5 + 5"], correct: 0 },
            { type: "Dạng 3: So sánh biểu thức", text: "Điền dấu thích hợp: 34 + 5 ... 41", options: ["< (39 < 41)", ">"], correct: 0 }
        ],
        game: {
            title: "🐝 Trò chơi: Đưa Ong về tổ",
            question: "Chú ong cần tính đúng: Hiệu của 47 và 22 là bao nhiêu?",
            options: ["25", "24", "69"],
            correct: 0
        },
        challenge: {
            title: "🏎️ Thử thách: Xe đua tốc độ",
            question: "Các xe đua mang số 24, 45, 42, 37. Tính tổng của xe lớn nhất và xe bé nhất:",
            options: ["69 (45 + 24 = 69)", "79"],
            correct: 0
        }
    }
];

// Quản lý trạng thái
let currentLessonIdx = 0;
let currentTab = 'learn';
let synth = window.speechSynthesis;
let currentUtterance = null;
let isSpeaking = false;
let femaleVoice = null;
let userScore = 150;

window.onload = function() {
    loadVoice();
    renderDots();
    loadLessonContent();

    if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = loadVoice;
    }
};

function loadVoice() {
    let voices = synth.getVoices();
    let viVoices = voices.filter(v => v.lang.includes("vi"));
    if (viVoices.length > 0) {
        // Ưu tiên giọng nữ dịu dàng như HoaiMy hoặc Linh
        femaleVoice = viVoices.find(v => v.name.includes("HoaiMy") || v.name.includes("Linh") || v.name.toLowerCase().includes("female")) || viVoices[0];
    }
}

// Chuyển bài học
function changeLesson(direction) {
    stopReading();
    currentLessonIdx += direction;
    if (currentLessonIdx < 0) currentLessonIdx = 0;
    if (currentLessonIdx >= topic1Lessons.length) currentLessonIdx = topic1Lessons.length - 1;

    renderDots();
    loadLessonContent();
}

function selectLessonByIdx(idx) {
    stopReading();
    currentLessonIdx = idx;
    renderDots();
    loadLessonContent();
}

function renderDots() {
    const container = document.getElementById("lesson-dots-container");
    container.innerHTML = "";
    topic1Lessons.forEach((_, idx) => {
        const dot = document.createElement("div");
        dot.className = `dot ${idx === currentLessonIdx ? 'active' : ''}`;
        dot.onclick = () => selectLessonByIdx(idx);
        container.appendChild(dot);
    });

    document.getElementById("btn-prev").disabled = (currentLessonIdx === 0);
    document.getElementById("btn-next").disabled = (currentLessonIdx === topic1Lessons.length - 1);
}

// Chuyển Tab (HỌC - LUYỆN TẬP - CHƠI - THỬ THÁCH)
function switchTab(tabName) {
    stopReading();
    currentTab = tabName;

    document.querySelectorAll(".mode-btn").forEach(btn => btn.classList.remove("active"));
    document.querySelector(`.mode-${tabName}`).classList.add("active");

    document.querySelectorAll(".tab-content").forEach(tab => tab.classList.remove("active"));
    document.getElementById(`tab-${tabName}`).classList.add("active");

    // Nếu chuyển sang tab Học thì tự động đọc lý thuyết chậm rãi dịu dàng
    if (tabName === 'learn') {
        startReading();
    }
}

// Nạp nội dung cho bài học hiện tại
function loadLessonContent() {
    const lesson = topic1Lessons[currentLessonIdx];
    document.getElementById("lesson-title").innerText = lesson.title;

    // 1. Tab Học
    document.getElementById("theory-content").innerText = lesson.theory;

    // 2. Tab Luyện tập
    const practiceBox = document.getElementById("practice-content");
    practiceBox.innerHTML = lesson.practice.map((ex, i) => `
        <div class="exercise-item">
            <div class="exercise-title">📝 ${ex.type}</div>
            <p style="font-weight:700; margin-bottom:8px;">${ex.text}</p>
            <div>
                ${ex.options.map((opt, optIdx) => `
                    <button class="option-btn" onclick="checkAnswer(${optIdx === ex.correct})">${opt}</button>
                `).join('')}
            </div>
        </div>
    `).join('');

    // 3. Tab Chơi
    const playBox = document.getElementById("play-content");
    playBox.innerHTML = `
        <div class="interactive-game">
            <div class="game-title">${lesson.game.title}</div>
            <p style="font-size:1.1rem; font-weight:800; margin-bottom:15px;">${lesson.game.question}</p>
            <div>
                ${lesson.game.options.map((opt, optIdx) => `
                    <button class="option-btn" onclick="checkAnswer(${optIdx === lesson.game.correct})">${opt}</button>
                `).join('')}
            </div>
        </div>
    `;

    // 4. Tab Thử thách
    const challengeBox = document.getElementById("challenge-content");
    challengeBox.innerHTML = `
        <div class="interactive-game" style="background:#e8f8f5; border-color:#00b894;">
            <div class="game-title" style="color:#00b894;">${lesson.challenge.title}</div>
            <p style="font-size:1.1rem; font-weight:800; margin-bottom:15px;">${lesson.challenge.question}</p>
            <div>
                ${lesson.challenge.options.map((opt, optIdx) => `
                    <button class="option-btn" onclick="checkAnswer(${optIdx === lesson.challenge.correct})">${opt}</button>
                `).join('')}
            </div>
        </div>
    `;

    if (currentTab === 'learn') {
        startReading();
    }
}

// Kiểm tra câu trả lời với Custom Pop-up
function checkAnswer(isCorrect) {
    if (isCorrect) {
        userScore += 10;
        document.getElementById("user-score").innerText = userScore;
        
        showCustomModal(
            "🎉", 
            "Chính xác rồi!<br><span style='color: #e67e22;'>Bé giỏi quá (+10 điểm) ⭐</span>", 
            "success"
        );
    } else {
        showCustomModal(
            "❌", 
            "Chưa đúng rồi,<br>bé hãy thử lại nhé! 💪", 
            "error"
        );
    }
}

// Hàm hiển thị Pop-up
function showCustomModal(icon, messageHTML, type) {
    const modal = document.getElementById("custom-modal");
    const box = document.getElementById("modal-box");
    
    document.getElementById("modal-icon").innerHTML = icon;
    document.getElementById("modal-message").innerHTML = messageHTML;
    
    box.className = "modal-content " + type;
    modal.style.display = "flex";
}

// Hàm đóng Pop-up
function closeModal() {
    document.getElementById("custom-modal").style.display = "none";
}

// Đọc giọng nữ tự động (Chậm rãi, dịu dàng)
function toggleReadTheory() {
    if (isSpeaking) {
        stopReading();
    } else {
        startReading();
    }
}

function startReading() {
    const lesson = topic1Lessons[currentLessonIdx];
    if (!lesson || !lesson.theory) return;

    synth.cancel();

    currentUtterance = new SpeechSynthesisUtterance(lesson.theory);
    currentUtterance.lang = "vi-VN";
    currentUtterance.rate = 0.75; // Tốc độ đọc chậm rãi cho học sinh lớp 2
    currentUtterance.pitch = 1.2;  // Giọng dịu dàng

    if (femaleVoice) {
        currentUtterance.voice = femaleVoice;
    }

    currentUtterance.onstart = () => {
        isSpeaking = true;
        const btn = document.getElementById("btn-read");
        if (btn) {
            btn.classList.add("stop");
            btn.innerHTML = `<i class="fa-solid fa-square"></i> Dừng Đọc`;
        }
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
