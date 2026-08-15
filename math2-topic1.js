// Dữ liệu chi tiết 6 bài học thuộc Chủ đề 1 trích xuất từ PDF SGK Kết Nối Tri Thức
const topic1Lessons = [
    {
        id: 1,
        title: "Bài 1: Ôn tập các số đến 100",
        theory: "Cấu tạo số có 2 chữ số gồm hàng chục ở bên trái và hàng đơn vị ở bên phải. Ví dụ, phân tích cấu tạo số '87' thì 87 = 80 + 7, gồm 8 chục và 7 đơn vị. Tương tự vậy, số '34' là 3 chục và 4 đơn vị.",
        image: "images/chuc-donvi.png",
        practice: [
            { type: "Dạng 1: Hoàn thành bảng", text: "Số 51 gồm mấy chục và mấy đơn vị?", options: ["5 chục và 1 đơn vị", "1 chục và 5 đơn vị"], correct: 0 },
            { type: "Dạng 2: Sắp xếp dãy số", text: "Sắp xếp dãy số sau theo thứ tự từ bé đến lớn: 58, 29, 89, 49", options: ["29, 49, 58, 89", "89, 58, 49, 29"], correct: 0 },
            { type: "Dạng 3: Tách số thành tổng", text: "Viết số 59 thành tổng các chục và đơn vị:", options: ["59 = 50 + 9", "59 = 5 + 90"], correct: 0 },
            { type: "Dạng 4: Đúng hay sai", text: "Số 32 gồm 2 chục và 3 đơn vị:", options: ["Đúng", "Sai"], correct: 1 },
            { type: "Dạng 5: Đúng hay sai", text: "Số 23 đọc là hai mươi ba:", options: ["Đúng", "Sai"], correct: 0 },
            { type: "Dạng 6: Đúng hay sai", text: "Số 7 chục và 0 đơn vị là số 70:", options: ["Đúng", "Sai"], correct: 0 },
            { type: "Dạng 7: Dấu lớn hay bé", text: "27 ? 29", options: ["<", ">"], correct: 0 },
            { type: "Dạng 8: Dấu lớn hay bé", text: "76 ? 71+3", options: ["<", ">"], correct: 1 },
            { type: "Dạng 9: Dấu lớn hay bé", text: "27+2 ? 53-23", options: ["<", ">"], correct: 0 },
            { type: "Dạng 10: So sánh số", text: "Tìm các số lớn hơn 60 trong các số: 58, 69, 50, 89", options: ["69 và 89", "58 và 50"], correct: 0 }
        ],
        game: {
            title: "🐰 Trò chơi: Tìm cà rốt cho Thỏ",
            questions: [
                {
                    question: "Chú thỏ mang bảng '5 chục và 4 đơn vị' thì củ cà rốt mang số mấy?",
                    options: ["🥕 54", "🥕 45", "🥕 50", "🥕 40"],
                    correct: 0
                },
                {
                    question: "Chú thỏ mang bảng '7 chục và 7 đơn vị' nối với củ cà rốt nào?",
                    options: ["🥕 70", "🥕 7", "🥕 77", "🥕 17"],
                    correct: 2
                },
                {
                    question: "Chú thỏ mang bảng '6 chục và 2 đơn vị' nối với củ cà rốt nào?",
                    options: ["🥕 66", "🥕 60", "🥕 6", "🥕 62"],
                    correct: 3
                }
            ]
        },
        challenge: {
            title: "🏆 Thử thách: Nối cặp tương ứng",
            questions: [
                {
                    type: "matching",
                    question: "Nối xe tải với phép tính tương ứng:",
                    pairs: [
                        { left: "🚚 Số 63 gồm 6 chục và 3 đơn vị", right: "63 = 60 + 3" },
                        { left: "🚚 Số 49 gồm 4 chục và 9 đơn vị", right: "49 = 40 + 9" },
                        { left: "🚚 Số 55 gồm 5 chục và 5 đơn vị", right: "55 = 50 + 5" },
                        { left: "🚚 Số 81 gồm 8 chục và 1 đơn vị", right: "81 = 80 + 1" }
                    ]
                }
            ]
        }
    },
    {
        id: 2,
        title: "Bài 2: Tia số. Số liền trước, số liền sau",
        theory: "Tia số có vạch đầu tiên là số 0, là số bé nhất. Trên tia số, mỗi số lớn hơn các số bên trái và bé hơn các số bên phải nó. Số liền trước của 4 là 3; số liền sau của 4 là 5.",
        image: "https://i.ibb.co/1JQ68DC1/tia-so.png",
        practice: [
            { type: "Dạng 1: Điền vạch tia số", text: "Số đứng ngay sau số 12 trên tia số là số nào?", options: ["13", "11"], correct: 0 },
            { type: "Dạng 2: Đúng/Sai số liền trước, liền sau", text: "Số liền trước của 16 là 15, đúng hay sai?", options: ["Đúng", "Sai"], correct: 0 },
            { type: "Dạng 3: Tìm số ở giữa", text: "Số nằm giữa 49 và 51 là số nào?", options: ["50", "52"], correct: 0 }
        ],
        game: {
            title: "🎈 Trò chơi: Móc bóng bay vào tia số",
            image: "https://i.ibb.co/fY0HNMMd/tia-bong.png",
            question: "Quả bóng mang phép tính (10 + 7) nối với vạch số mấy trên tia số?",
            options: ["Vạch số 17", "Vạch số 10", "Vạch số 7"],
            correct: 0
        },
        challenge: {
            title: "🐢 Thử thách: Cuộc đua của các chú Thỏ",
            image: "https://i.ibb.co/xqJ9W5Rx/tia-tho.png",
            question: "Thỏ trắng chạy ở làn liền trước làn số 4. Thỏ trắng chạy ở làn số mấy?",
            options: ["Làn số 5", "Làn số 3"],
            correct: 1
        }
    },
    {
        id: 3,
        title: "Bài 3: Các thành phần của phép cộng, phép trừ",
        theory: "Trong phép cộng: Số hạng cộng Số hạng bằng Tổng. Trong phép trừ: Số bị trừ trừ Số trừ bằng Hiệu.",
        image: "images/tong-hieu.png",
        practice: [
            { type: "Dạng 1: Tìm Tổng", text: "Biết các số hạng là 42 và 35. Tổng là bao nhiêu?", options: ["77", "75"], correct: 0 },
            { type: "Dạng 1: Tìm Tổng", text: "Biết các số hạng là 40 và 30. Tổng là bao nhiêu?", options: ["60", "10", "45", "70"], correct: 3 },
            { type: "Dạng 1: Tìm Tổng", text: "Biết các số hạng là 25 và 61. Tổng là bao nhiêu?", options: ["34", "86", "46", "70"], correct: 1 },
            { type: "Dạng 1: Tìm Tổng", text: "Biết các số hạng là 80 và 7. Tổng là bao nhiêu?", options: ["67", "73", "87", "97"], correct: 2 },
            { type: "Dạng 1: Tìm Tổng", text: "Biết các số hạng là 42 và 35. Tổng là bao nhiêu?", options: ["60", "10", "45", "70"], correct: 0 },
            { type: "Dạng 1: Tìm Tổng", text: "Biết các số hạng là 12 và 24. Tổng là bao nhiêu?", options: ["36", "10", "46", "70"], correct: 0 },
            { type: "Dạng 1: Tìm Tổng", text: "Biết các số hạng là 14 và 23. Tổng là bao nhiêu?", options: ["60", "27", "45", "37"], correct: 3 },
            { type: "Dạng 1: Tìm Tổng", text: "Biết các số hạng là 15 và 20. Tổng là bao nhiêu?", options: ["25", "35", "45", "15"], correct: 1 },
            { type: "Dạng 1: Tìm Hiệu", text: "Biết các số bị trừ là 42 và số trừ là 35. Hiệu là bao nhiêu?", options: ["7", "77", "45", "17"], correct: 0 },
            { type: "Dạng 1: Tìm Hiệu", text: "Biết các số bị trừ là 10 và số trừ là 5. Hiệu là bao nhiêu?", options: ["7", "15", "5", "17"], correct: 2 },
            { type: "Dạng 1: Tìm Hiệu", text: "Biết các số bị trừ là 97 và số trừ là 53. Hiệu là bao nhiêu?", options: ["34", "45", "44", "54"], correct: 2 },
            { type: "Dạng 1: Tìm Hiệu", text: "Biết các số bị trừ là 86 và số trừ là 32. Hiệu là bao nhiêu?", options: ["44", "34", "45", "54"], correct: 3 },
            { type: "Dạng 1: Tìm Hiệu", text: "Biết các số bị trừ là 47 và số trừ là 20. Hiệu là bao nhiêu?", options: ["27", "77", "45", "17"], correct: 0 },            
            { type: "Dạng 2: Đặt tính rồi tính", text: "Số bị trừ là 68, số trừ là 25. Hiệu là bao nhiêu?", options: ["43", "33"], correct: 0 },
            { type: "Dạng 3: Lập phép tính", text: "Từ các thẻ 21, 36, 57 ta lập được phép cộng đúng nào?", options: ["21 + 36 = 57", "21 + 57 = 36"], correct: 0 }
        ],
        game: {
            title: "⭐ Trò chơi: Tìm cặp sao sáng",
            image: "images/tim-sao.png",
            question: "Đếm có 11 sao đỏ và 8 sao vàng. Tổng số sao là bao nhiêu?",
            options: ["20 ngôi sao", "19 ngôi sao", "3 ngôi sao", "29 ngôi sao"],
            correct: 1
        },
        challenge: {
            title: "🚂 Thử thách: Ghép toa tàu mừng xuân",
            questions: [
                {
                    question: "Đoàn tàu A có các toa 50, 60, 70, 40. Sắp xếp các toa từ lớn đến bé:",
                    image: "images/tau-a.png",
                    options: ["70, 60, 50, 40", "40, 50, 60, 70"],
                    correct: 0
                },
                {
                    question: "Đoàn tàu B có các toa 30, 41, 35, 39. Tìm hiệu số lớn nhất:",
                    image: "images/tau-b.png",
                    options: ["1", "2", "4", "5", "11"],
                    correct: 4
                },
                {
                    question: "Đoàn tàu B có các toa 30, 41, 35, 39. Tìm hiệu số bé nhất:",
                    image: "images/tau-b.png",
                    options: ["0", "1", "2", "3", "4"],
                    correct: 2
                }
            ]
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
            image: "https://i.ibb.co/5WhFXgYP/gapthuyen.png",
            question: "Mai gấp được 8 cái thuyền, Nam gấp được 5 cái. Mai gấp hơn Nam mấy cái?",
            options: ["3 cái thuyền", "2 cái thuyền"],
            correct: 0
        },
        challenge: {
            title: "🤖 Thử thách: Chiều cao Rô-bốt",
            image: "https://i.ibb.co/C32t71Hr/robot-A-B.png",
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
            image: "https://i.ibb.co/wrJLwjWC/o-hon-50.png",
            question: "Chiếc ô nào có kết quả phép tính lớn hơn 50?",
            options: ["Ô hồng. Ô xanh. Ô vàng", "Ô xanh. Ô đỏ. Ô tím"],
            correct: 0
        },
        challenge: {
            title: "⛵ Thử thách: Hành khách trên thuyền",
            image: "https://i.ibb.co/WWHtbdbZ/thuyen.png", 
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

    if (tabName === 'learn') {
        startReading();
    }
}

// Nạp nội dung cho bài học hiện tại
function loadLessonContent() {
    const lesson = topic1Lessons[currentLessonIdx];
    document.getElementById("lesson-title").innerText = lesson.title;

    // 1. Tab Học
    let theoryHTML = `<p>${lesson.theory}</p>`;
    if (lesson.image) {
        theoryHTML += `
            <div style="text-align: center; margin-top: 15px;">
                <img src="${lesson.image}" alt="${lesson.title}" style="max-width: 100%; height: auto; border-radius: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
            </div>
        `;
    }
    document.getElementById("theory-content").innerHTML = theoryHTML;

    // 2. Tab Luyện tập
    const practiceBox = document.getElementById("practice-content");
    practiceBox.innerHTML = lesson.practice.map((ex, i) => {
        let exImgHTML = ex.image ? `
            <div style="text-align: center; margin: 10px 0;">
                <img src="${ex.image}" alt="Hình bài tập" style="max-width: 100%; height: auto; border-radius: 12px; box-shadow: 0 3px 8px rgba(0,0,0,0.1);">
            </div>
        ` : '';

        return `
            <div class="exercise-item">
                <div class="exercise-title">📝 ${ex.type}</div>
                <p style="font-weight:700; margin-bottom:8px;">${ex.text}</p>
                ${exImgHTML}
                <div>
                    ${ex.options.map((opt, optIdx) => `
                        <button class="option-btn" onclick="checkAnswer(${optIdx === ex.correct})">${opt}</button>
                    `).join('')}
                </div>
            </div>
        `;
    }).join('');
    
    // 3. Tab Chơi
    const playBox = document.getElementById("play-content");
    const gameList = lesson.game.questions || [lesson.game];

    playBox.innerHTML = `
        <div class="interactive-game">
            <div class="game-title">${lesson.game.title}</div>
            ${gameList.map((q, qIdx) => {
                let imgHTML = q.image ? `
                    <div style="text-align: center; margin: 10px 0;">
                        <img src="${q.image}" style="max-width: 100%; height: auto; border-radius: 12px; box-shadow: 0 3px 8px rgba(0,0,0,0.1);">
                    </div>
                ` : '';

                return `
                    <div style="background: white; border-radius: 16px; padding: 15px; margin-top: 12px; text-align: left; border: 2px solid #ffeaa7;">
                        <p style="font-size:1.05rem; font-weight:800; color:#2d3436; margin-bottom:8px;">
                            ${gameList.length > 1 ? `Câu ${qIdx + 1}: ` : ''}${q.question}
                        </p>
                        ${imgHTML}
                        <div>
                            ${q.options.map((opt, optIdx) => `
                                <button class="option-btn" onclick="checkAnswer(${optIdx === q.correct})">${opt}</button>
                            `).join('')}
                        </div>
                    </div>
                `;
            }).join('')}
        </div>
    `;

    // 4. Tab Thử thách
    const challengeBox = document.getElementById("challenge-content");
    const challengeList = lesson.challenge.questions || [lesson.challenge];

    challengeBox.innerHTML = `
        <div class="interactive-game" style="background:#e8f8f5; border-color:#00b894;">
            <div class="game-title" style="color:#00b894;">${lesson.challenge.title}</div>
            ${challengeList.map((q, qIdx) => {
                if (q.type === "matching") {
                    const leftItems = q.pairs.map(p => p.left);
                    const rightItems = [...q.pairs.map(p => p.right)].sort(() => Math.random() - 0.5);

                    return `
                        <div style="background: white; border-radius: 16px; padding: 15px; margin-top: 12px; border: 2px solid #55efc4;">
                            <p style="font-size:1.05rem; font-weight:800; color:#2d3436; margin-bottom:12px;">
                                ${challengeList.length > 1 ? `Câu ${qIdx + 1}: ` : ''}${q.question}
                            </p>
                            <div class="matching-container" id="matching-game-${qIdx}">
                                <div class="matching-col">
                                    ${leftItems.map((item, idx) => `
                                        <button class="match-btn match-left" onclick="selectMatch(this, 'left', '${item.replace(/'/g, "\\'")}', ${qIdx})">${item}</button>
                                    `).join('')}
                                </div>
                                <div class="matching-col">
                                    ${rightItems.map((item, idx) => `
                                        <button class="match-btn match-right" onclick="selectMatch(this, 'right', '${item.replace(/'/g, "\\'")}', ${qIdx})">${item}</button>
                                    `).join('')}
                                </div>
                            </div>
                        </div>
                    `;
                }

                return `
                    <div style="background: white; border-radius: 16px; padding: 15px; margin-top: 12px; text-align: left; border: 2px solid #55efc4;">
                        <p style="font-size:1.05rem; font-weight:800; color:#2d3436; margin-bottom:8px;">
                            ${challengeList.length > 1 ? `Câu ${qIdx + 1}: ` : ''}${q.question}
                        </p>
                        <div>
                            ${q.options.map((opt, optIdx) => `
                                <button class="option-btn" onclick="checkAnswer(${optIdx === q.correct})">${opt}</button>
                            `).join('')}
                        </div>
                    </div>
                `;
            }).join('')}
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

// Hiển thị Pop-up
function showCustomModal(icon, messageHTML, type) {
    const modal = document.getElementById("custom-modal");
    const box = document.getElementById("modal-box");
    
    document.getElementById("modal-icon").innerHTML = icon;
    document.getElementById("modal-message").innerHTML = messageHTML;
    
    box.className = "modal-content " + type;
    modal.style.display = "flex";
}

// Đóng Pop-up
function closeModal() {
    document.getElementById("custom-modal").style.display = "none";
}

// Đọc lý thuyết tự động
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
    currentUtterance.rate = 0.75;
    currentUtterance.pitch = 1.2;

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

// Xử lý bài tập Nối Cặp (Matching)
let selectedLeft = null;
let selectedRight = null;

function selectMatch(btn, type, val, qIdx) {
    const parent = document.getElementById(`matching-game-${qIdx}`);
    
    if (type === 'left') {
        parent.querySelectorAll('.match-left').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        selectedLeft = { btn: btn, val: val };
    } else {
        parent.querySelectorAll('.match-right').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        selectedRight = { btn: btn, val: val };
    }

    if (selectedLeft && selectedRight) {
        const currentChallenge = topic1Lessons[currentLessonIdx].challenge.questions[qIdx];
        const isPairCorrect = currentChallenge.pairs.some(
            p => p.left === selectedLeft.val && p.right === selectedRight.val
        );

        if (isPairCorrect) {
            selectedLeft.btn.classList.remove('selected');
            selectedRight.btn.classList.remove('selected');
            selectedLeft.btn.classList.add('matched');
            selectedRight.btn.classList.add('matched');
            selectedLeft.btn.disabled = true;
            selectedRight.btn.disabled = true;

            userScore += 5;
            document.getElementById("user-score").innerText = userScore;
            
            selectedLeft = null;
            selectedRight = null;

            const remaining = parent.querySelectorAll('.match-btn:not(.matched)').length;
            if (remaining === 0) {
                checkAnswer(true);
            }
        } else {
            showCustomModal("❌", "Cặp này chưa đúng rồi,<br>bé chọn lại nhé! 💪", "error");
            selectedLeft.btn.classList.remove('selected');
            selectedRight.btn.classList.remove('selected');
            selectedLeft = null;
            selectedRight = null;
        }
    }
}
