// Dữ liệu Bài tập Unit 1
const unit1Data = {
    title: "Unit 1: In the school playground",
    vocab: [
        { word: "Bill", meaning: "Bạn Bill", icon: "👦", image: "https://api.dicebear.com/7.x/bottts/svg?seed=Bill" },
        { word: "ball", meaning: "Quả bóng", icon: "⚽", image: "https://cdn-icons-png.flaticon.com/512/3309/3309991.png" },
        { word: "bike", meaning: "Xe đạp", icon: "🚲", image: "https://cdn-icons-png.flaticon.com/512/2972/2972185.png" },
        { word: "book", meaning: "Quyển sách", icon: "📖", image: "https://cdn-icons-png.flaticon.com/512/3389/3389021.png" }
    ],
    practice: [
        {
            type: "1. Listen and chant 🎵",
            text: "b, b, ball. A ball, a ball. b, b, a ball.<br>b, b, book. A book, a book. b, b, a book.<br>b, b, bike. A bike, a bike. b, b, a bike.",
            // Viết chữ thường 'b' để máy phát âm đúng sound /b/ chứ không đọc chữ cái 'bee'
            audioText: "b, b, ball. A ball, a ball. b, b, a ball. b, b, book. A book, a book. b, b, a book. b, b, bike. A bike, a bike. b, b, a bike."
        },
        {
            type: "2. Listen and tick ✏️",
            text: "Bấm nút nghe bài đọc, sau đó chọn bức tranh đúng:",
            audioText: "a bike", // Nội dung âm thanh bài nghe
            options: ["a) 🚲 Xe đạp (a bike)", "b) 📖 Quyển sách (a book)"],
            correct: 0
        },
        {
            type: "3. Listen and repeat / Let's talk 💬",
            text: "Bấm nút nghe từng mẫu câu và đọc theo:",
            dialogues: [
                { text: "Hi, I'm Bill.", audio: "Hi, I'm Bill." },
                { text: "Bye, Bill.", audio: "Bye, Bill." }
            ]
        }
    ]
};

// Quản lý Trạng Thái
let userScore = 150;
let isMusicPlaying = false;
let slapTargetWord = "";
let slapTimer = null;
let slapTimeLeft = 60;
let isMicActive = false;

window.onload = function() {
    renderVocabTab();
    renderPracticeTab();
    initSlapBoardGame();
};

// Quản lý Nhạc Nền om.mp3
function toggleBgMusic() {
    const music = document.getElementById("bg-music");
    const icon = document.getElementById("music-icon");
    const text = document.getElementById("music-text");

    if (isMusicPlaying) {
        music.pause();
        isMusicPlaying = false;
        text.innerText = "Bật Nhạc";
        icon.className = "fa-solid fa-music";
    } else {
        music.play().catch(e => console.log("Cần tương tác để phát nhạc"));
        isMusicPlaying = true;
        text.innerText = "Tắt Nhạc";
        icon.className = "fa-solid fa-volume-xmark";
    }
}

// Chuyển Tab
function switchTab(tabName) {
    document.querySelectorAll(".mode-btn").forEach(b => b.classList.remove("active"));
    document.querySelector(`.mode-${tabName}`).classList.add("active");

    document.querySelectorAll(".tab-content").forEach(t => t.classList.remove("active"));
    document.getElementById(`tab-${tabName}`).classList.add("active");
}

// 1. Tab Học: Render Từ Vựng & Đọc Âm Chuẩn
function renderVocabTab() {
    const container = document.getElementById("vocab-grid-container");
    container.innerHTML = unit1Data.vocab.map(item => `
        <div class="vocab-card" onclick="speakEnglish('${item.word}')">
            <div style="font-size:3rem; margin-bottom:5px;">${item.icon}</div>
            <div class="vocab-word">${item.word}</div>
            <div class="vocab-meaning">${item.meaning}</div>
            <div style="margin-top:8px; color:#00b894; font-weight:800; font-size:0.85rem;">
                <i class="fa-solid fa-volume-high"></i> Bấm để nghe
            </div>
        </div>
    `).join('');
}

// Phát âm Tiếng Anh chuẩn Web Speech API
function speakEnglish(text) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.rate = 0.8;
    window.speechSynthesis.speak(utterance);
}

// Render Tab Luyện Tập
function renderPracticeTab() {
    const container = document.getElementById("practice-container");
    container.innerHTML = unit1Data.practice.map((item, idx) => {
        // 1. Phần Listen and chant
        if (idx === 0) {
            return `
                <div style="background:#f8fafc; border:2px solid #a29bfe; border-radius:18px; padding:16px; margin-bottom:15px;">
                    <div style="font-weight:900; color:#6c5ce7; font-size:1.1rem; margin-bottom:8px;">${item.type}</div>
                    <p style="font-size:1.05rem; font-weight:700; line-height:1.8; color:#2d3436;">${item.text}</p>
                    <button onclick="speakEnglish('${item.audioText}')" style="background:#00b894; color:white; border:none; padding:8px 18px; border-radius:14px; font-weight:800; cursor:pointer; margin-top:10px; box-shadow:0 3px 0 #008f68;">
                        <i class="fa-solid fa-volume-high"></i> Nghe Chant
                    </button>
                </div>
            `;
        }

        // 2. Phần Listen and tick (Thêm nút Nghe bài đọc)
        if (idx === 1) {
            return `
                <div style="background:#f8fafc; border:2px solid #a29bfe; border-radius:18px; padding:16px; margin-bottom:15px;">
                    <div style="font-weight:900; color:#6c5ce7; font-size:1.1rem; margin-bottom:8px;">${item.type}</div>
                    <p style="font-size:1.05rem; font-weight:800; color:#2d3436; margin-bottom:10px;">${item.text}</p>
                    
                    <button onclick="speakEnglish('${item.audioText}')" style="background:#ff7675; color:white; border:none; padding:8px 18px; border-radius:14px; font-weight:800; cursor:pointer; margin-bottom:12px; box-shadow:0 3px 0 #d63031;">
                        <i class="fa-solid fa-volume-high"></i> 🎧 Nghe bài đọc (Audio)
                    </button>

                    <div>
                        ${item.options.map((opt, optIdx) => `
                            <button class="option-btn" onclick="checkAnswer(${optIdx === item.correct})">${opt}</button>
                        `).join('')}
                    </div>
                </div>
            `;
        }

        // 3. Phần Listen and repeat / Let's talk (Thêm nút Nghe cho từng mẫu câu)
        if (idx === 2) {
            return `
                <div style="background:#f8fafc; border:2px solid #a29bfe; border-radius:18px; padding:16px; margin-bottom:15px;">
                    <div style="font-weight:900; color:#6c5ce7; font-size:1.1rem; margin-bottom:8px;">${item.type}</div>
                    <p style="font-size:1.05rem; font-weight:800; color:#2d3436; margin-bottom:12px;">${item.text}</p>
                    <div style="display:flex; gap:12px; flex-wrap:wrap;">
                        ${item.dialogues.map(d => `
                            <div style="background:white; border:2px solid #74b9ff; border-radius:16px; padding:10px 16px; display:flex; align-items:center; gap:10px; box-shadow:0 3px 0 #74b9ff;">
                                <span style="font-weight:900; font-size:1.1rem; color:#2d3436;">${d.text}</span>
                                <button onclick="speakEnglish('${d.audio}')" style="background:#74b9ff; color:white; border:none; padding:6px 12px; border-radius:12px; font-weight:800; cursor:pointer;">
                                    <i class="fa-solid fa-volume-high"></i> Nghe
                                </button>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }
    }).join('');
}

// 3. Tab Chơi: Game Slap The Board
function initSlapBoardGame() {
    const container = document.getElementById("slap-board-game");
    container.innerHTML = `
        <div style="background:#fffef0; border:4px solid #ff7675; border-radius:24px; padding:20px; text-align:center;">
            <h2 style="color:#d63031; font-weight:900; margin-bottom:10px;">🖐️ GAME: SLAP THE BOARD 🖐️</h2>
            <div style="display:flex; justify-content:space-around; align-items:center; margin-bottom:15px; font-weight:900; font-size:1.1rem;">
                <div style="color:#0984e3;">⭐ Team 1: <span id="team1-score">0</span></div>
                <div style="color:#d63031;">⏳ Thời gian: <span id="slap-timer">60</span>s</div>
                <div style="color:#00b894;">⭐ Team 2: <span id="team2-score">0</span></div>
            </div>
            
            <button onclick="startSlapRound()" style="background:#ff7675; color:white; border:none; padding:10px 24px; border-radius:18px; font-weight:900; font-size:1.1rem; cursor:pointer; box-shadow:0 4px 0 #d63031; margin-bottom:15px;">
                🔊 NGHẺ TỪ VỰNG & ĐẬP BẢNG!
            </button>

            <div class="slap-board-grid">
                ${unit1Data.vocab.map(v => `
                    <div class="slap-card" onclick="slapBoard(this, '${v.word}')">
                        ${v.icon}<br>
                        <span>${v.word}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function startSlapRound() {
    const words = unit1Data.vocab.map(v => v.word);
    slapTargetWord = words[Math.floor(Math.random() * words.length)];
    speakEnglish(slapTargetWord);
}

function slapBoard(cardElem, word) {
    if (!slapTargetWord) {
        showCustomModal("🔊", "Bấm nút 'NGHE TỪ VỰNG' trước nhé bé!", "error");
        return;
    }

    if (word === slapTargetWord) {
        cardElem.classList.add("correct");
        userScore += 10;
        document.getElementById("user-score").innerText = userScore;
        showCustomModal("🎉", "ĐẬP BẢNG CHÍNH XÁC!<br>+10 Điểm ⭐", "success");
        setTimeout(() => cardElem.classList.remove("correct"), 1000);
        slapTargetWord = "";
    } else {
        cardElem.classList.add("wrong");
        showCustomModal("❌", "Chưa đúng từ bé nghe được rồi!", "error");
        setTimeout(() => cardElem.classList.remove("wrong"), 1000);
    }
}

// 4. Tab Thử thách: Micro
function toggleMicrophone() {
    const text = document.getElementById("mic-text");
    const icon = document.getElementById("mic-icon");

    if (isMicActive) {
        isMicActive = false;
        text.innerText = "BẬT MICRO & CHANT THEO BEAT";
        icon.className = "fa-solid fa-microphone";
        showCustomModal("🎤", "Đã tắt Micro!", "error");
    } else {
        isMicActive = true;
        text.innerText = "ĐANG BẬT MICRO (HÁT TO LÊN BÉ NHÉ!)";
        icon.className = "fa-solid fa-microphone-slash";
        showCustomModal("🌟", "Micro đã sẵn sàng! Hát và chant theo Beat nhé bé!", "success");
    }
}

// Custom Modal & Pop-up
function checkAnswer(isCorrect) {
    if (isCorrect) {
        userScore += 10;
        document.getElementById("user-score").innerText = userScore;
        showCustomModal("🎉", "Chính xác rồi!<br>Bé giỏi quá (+10 điểm) ⭐", "success");
    } else {
        showCustomModal("❌", "Chưa đúng rồi,<br>bé thử lại nhé! 💪", "error");
    }
}

function showCustomModal(icon, msg, type) {
    document.getElementById("modal-icon").innerHTML = icon;
    document.getElementById("modal-message").innerHTML = msg;
    document.getElementById("custom-modal").style.display = "flex";
}

function closeModal() {
    document.getElementById("custom-modal").style.display = "none";
}
