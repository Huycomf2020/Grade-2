(function() {
    // ----------------------------------------------------
    // BỘ PHÁT ÂM THANH SỐ TỰ ĐỘNG (Web Audio API)
    // ----------------------------------------------------
    const SoundEffects = {
        ctx: null,
        init() {
            if (!this.ctx) {
                this.ctx = new (window.AudioContext || window.webkitAudioContext)();
            }
        },
        playCorrect() {
            this.init();
            const now = this.ctx.currentTime;
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            
            osc.type = 'sine';
            osc.frequency.setValueAtTime(523.25, now); // C5 (Ting)
            osc.frequency.exponentialRampToValueAtTime(880, now + 0.15); // A5 (Ting!)

            gain.gain.setValueAtTime(0.3, now);
            gain.gain.exponentialRampToValueAtTime(0.01, now + 0.4);

            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start(now);
            osc.stop(now + 0.4);
        },
        playWrong() {
            this.init();
            const now = this.ctx.currentTime;
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();

            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(200, now);
            osc.frequency.linearRampToValueAtTime(120, now + 0.25);

            gain.gain.setValueAtTime(0.25, now);
            gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);

            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start(now);
            osc.stop(now + 0.3);
        }
    };

    // ----------------------------------------------------
    // DỮ LIỆU BÀI HỌC SGK TOÁN 2 TẬP 1
    // ----------------------------------------------------
    const math2Data = [
        {
            id: 1,
            title: "Chủ đề 1: Ôn tập các số đến 100 🎒",
            theory: `
                <h3>📌 1. Cấu tạo số có hai chữ số</h3>
                <p>• Số có 2 chữ số gồm <b>hàng chục</b> (bên trái) và <b>hàng đơn vị</b> (bên phải).</p>
                <p><i>Ví dụ:</i> Số <b>87</b> = <b>8</b> chục + <b>7</b> đơn vị ($87 = 80 + 7$).</p>
                <h3>📌 2. Số liền trước, số liền sau</h3>
                <p>• <b>Số liền trước</b> = Số đó - 1. (Liền trước của 60 là <b>59</b>)</p>
                <p>• <b>Số liền sau</b> = Số đó + 1. (Liền sau của 60 là <b>61</b>)</p>
                <h3>📌 3. Thành phần phép tính</h3>
                <p>• Phép cộng: <code>Số hạng + Số hạng = Tổng</code></p>
                <p>• Phép trừ: <code>Số bị trừ - Số trừ = Hiệu</code></p>
            `,
            practice: [
                {
                    q: "Số liền trước của 80 và số liền sau của 80 lần lượt là:",
                    options: ["79 và 81", "81 và 79", "78 và 82", "70 và 90"],
                    ans: 0
                },
                {
                    q: "Trong phép tính 45 - 12 = 33, số 45 được gọi là gì?",
                    options: ["Số hạng", "Hiệu", "Số bị trừ", "Số trừ"],
                    ans: 2
                }
            ],
            game: {
                title: "🎯 Tìm Nhà Cho Thỏ Ngọc",
                prompt: "Số 65 gồm mấy chục và mấy đơn vị?",
                options: ["60 chục và 5 đơn vị", "6 chục và 5 đơn vị", "5 chục và 6 đơn vị"],
                ans: 1
            }
        },
        {
            id: 2,
            title: "Chủ đề 2: Phép cộng trừ phạm vi 20 🚀",
            theory: `
                <h3>📌 1. Cộng qua 10 (Phương pháp tách số)</h3>
                <p>• Tính <b>9 + 5</b>: Tách $5 = 1 + 4$. Lấy $9 + 1 = 10$, rồi $10 + 4 = 14$.</p>
                <h3>📌 2. Trừ qua 10</h3>
                <p>• Tính <b>13 - 5</b>: Tách $5 = 3 + 2$. Lấy $13 - 3 = 10$, rồi $10 - 2 = 8$.</p>
            `,
            practice: [
                {
                    q: "Tính nhẩm nhanh: 8 + 6 = ?",
                    options: ["13", "14", "15", "16"],
                    ans: 1
                },
                {
                    q: "Tính nhẩm nhanh: 15 - 7 = ?",
                    options: ["7", "8", "9", "6"],
                    ans: 1
                }
            ],
            game: {
                title: "🚀 Phóng Tên Lửa Vào Vũ Trụ",
                prompt: "Để tính 9 + 4, ta tách 4 thành 1 và mấy?",
                options: ["1 và 2", "1 và 3", "1 và 4"],
                ans: 1
            }
        },
        {
            id: 3,
            title: "Chủ đề 3: Phép cộng/trừ có nhớ (Phạm vi 100) 🏆",
            theory: `
                <h3>📌 1. Phép cộng có nhớ (Ví dụ: 35 + 7)</h3>
                <p>• 5 cộng 7 bằng 12, viết 2 <b>nhớ 1</b>.</p>
                <p>• 3 thêm 1 bằng 4, viết 4. Kết quả = <b>42</b>.</p>
                <h3>📌 2. Phép trừ có nhớ (Ví dụ: 42 - 15)</h3>
                <p>• 2 không trừ được 5, lấy $12 - 5 = 7$, viết 7 <b>nhớ 1</b>.</p>
                <p>• 1 thêm 1 bằng 2; $4 - 2 = 2$, viết 2. Kết quả = <b>27</b>.</p>
            `,
            practice: [
                {
                    q: "Đặt tính rồi tính: 47 + 25 = ?",
                    options: ["62", "72", "71", "68"],
                    ans: 1
                },
                {
                    q: "Kết quả của phép tính 53 - 18 là:",
                    options: ["35", "45", "37", "25"],
                    ans: 0
                }
            ],
            game: {
                title: "🎣 Câu Cá Dưới Đáy Biển",
                prompt: "Phép tính nào có kết quả tròn 50?",
                options: ["35 + 15", "42 + 9", "60 - 15"],
                ans: 0
            }
        }
    ];

    let currentTopicIdx = 0;
    let currentPracticeIdx = 0;
    let score = 0;

    document.addEventListener("DOMContentLoaded", function() {
        initTopicNav();
        initTabEvents();
        loadTopicData(0);
    });

    function initTopicNav() {
        const nav = document.getElementById("m2TopicNav");
        if (!nav) return;
        nav.innerHTML = "";

        math2Data.forEach((topic, idx) => {
            const btn = document.createElement("button");
            btn.className = `topic-btn ${idx === currentTopicIdx ? 'active' : ''}`;
            btn.innerText = topic.title;
            btn.addEventListener("click", () => {
                currentTopicIdx = idx;
                currentPracticeIdx = 0;
                
                document.querySelectorAll(".topic-btn").forEach((b, i) => {
                    b.classList.toggle("active", i === idx);
                });

                loadTopicData(idx);
            });
            nav.appendChild(btn);
        });
    }

    function initTabEvents() {
        const tabBtns = document.querySelectorAll(".tab-btn");
        tabBtns.forEach(btn => {
            btn.addEventListener("click", function() {
                const targetTab = this.getAttribute("data-tab");

                tabBtns.forEach(b => b.classList.remove("active"));
                this.classList.add("active");

                document.querySelectorAll(".tab-content").forEach(content => {
                    content.classList.remove("active");
                });
                const activeContent = document.getElementById(`tab-${targetTab}`);
                if (activeContent) activeContent.classList.add("active");
            });
        });
    }

    function loadTopicData(idx) {
        const data = math2Data[idx];

        const theoryEl = document.getElementById("theoryContent");
        if (theoryEl) theoryEl.innerHTML = data.theory;

        loadPracticeQuestion();
        loadGameArea();
    }

    function loadPracticeQuestion() {
        const qData = math2Data[currentTopicIdx].practice[currentPracticeIdx];
        const qContainer = document.getElementById("practiceQuestion");
        const optContainer = document.getElementById("practiceOptions");
        const feedback = document.getElementById("practiceFeedback");

        if (!qContainer || !optContainer) return;

        feedback.innerText = "";
        qContainer.innerText = `Câu ${currentPracticeIdx + 1}: ${qData.q}`;
        optContainer.innerHTML = "";

        qData.options.forEach((opt, idx) => {
            const btn = document.createElement("button");
            btn.className = "option-btn";
            btn.innerText = `${String.fromCharCode(65 + idx)}. ${opt}`;
            btn.addEventListener("click", () => {
                if (idx === qData.ans) {
                    SoundEffects.playCorrect();
                    feedback.className = "feedback correct";
                    feedback.innerText = "🌟 Chính xác! Bé nhận được +10 ⭐";
                    
                    score += 10;
                    document.getElementById("userScore").innerText = score;

                    setTimeout(() => {
                        if (currentPracticeIdx < math2Data[currentTopicIdx].practice.length - 1) {
                            currentPracticeIdx++;
                            loadPracticeQuestion();
                        } else {
                            feedback.innerText = "🎉 Bé đã xuất sắc hoàn thành hết bài tập chủ đề này!";
                        }
                    }, 1200);
                } else {
                    SoundEffects.playWrong();
                    feedback.className = "feedback wrong";
                    feedback.innerText = "💡 Chưa đúng rồi, bé thử suy nghĩ lại nhé!";
                }
            });
            optContainer.appendChild(btn);
        });
    }

    function loadGameArea() {
        const gData = math2Data[currentTopicIdx].game;
        const gameBox = document.getElementById("gameArea");
        if (!gameBox) return;

        gameBox.innerHTML = `
            <h2 style="color: #6C5CE7; margin-top:0;">${gData.title}</h2>
            <p style="font-size: 19px; margin: 15px 0; color: #2D3436;"><b>Thử thách:</b> ${gData.prompt}</p>
            <div style="display: flex; justify-content: center; gap: 12px; margin-top: 15px; flex-wrap: wrap;">
                ${gData.options.map((opt, i) => `<button class="option-btn game-opt-btn" data-idx="${i}" style="text-align:center;">${opt}</button>`).join('')}
            </div>
            <div class="feedback" id="gameFeedback"></div>
        `;

        gameBox.querySelectorAll(".game-opt-btn").forEach(btn => {
            btn.addEventListener("click", function() {
                const selectedIdx = parseInt(this.getAttribute("data-idx"));
                const fb = document.getElementById("gameFeedback");
                if (selectedIdx === gData.ans) {
                    SoundEffects.playCorrect();
                    fb.className = "feedback correct";
                    fb.innerText = "🏆 TUYỆT VỜI! Bé đã chiến thắng trò chơi!";
                } else {
                    SoundEffects.playWrong();
                    fb.className = "feedback wrong";
                    fb.innerText = "😅 Suýt nữa thì đúng! Bé chọn lại xem nào.";
                }
            });
        });
    }
})();
