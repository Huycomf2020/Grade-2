// Dữ liệu chương trình Toán 2 - Tập 1 đầy đủ cấu trúc SGK
const math2Data = [
    {
        id: 1,
        title: "Chủ đề 1: Ôn tập các số đến 100",
        theory: `
            <h3>📌 1. Cấu tạo số có hai chữ số</h3>
            <p>• Các số từ 10 đến 99 là số có hai chữ số. Chữ số bên trái chỉ <b>hàng chục</b>, chữ số bên phải chỉ <b>hàng đơn vị</b>.</p>
            <p><i>Ví dụ:</i> Số <b>87</b> gồm <b>8</b> chục và <b>7</b> đơn vị. Ta viết: $87 = 80 + 7$.</p>
            <h3>📌 2. Tia số - Số liền trước, số liền sau</h3>
            <p>• Số liền trước của một số thì bé hơn số đó 1 đơn vị (muốn tìm lấy số đó trừ 1).</p>
            <p>• Số liền sau của một số thì lớn hơn số đó 1 đơn vị (muốn tìm lấy số đó cộng 1).</p>
            <p><i>Ví dụ:</i> Số liền trước của 60 là <b>59</b>. Số liền sau của 60 là <b>61</b>.</p>
            <h3>📌 3. Thành phần phép cộng, phép trừ</h3>
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
            title: "🎯 Trò chơi: Tìm Nhà Cho Nấm",
            prompt: "Số 65 gồm bao nhiêu chục và đơn vị?",
            options: ["60 chục, 5 đơn vị", "6 chục, 5 đơn vị", "5 chục, 6 đơn vị"],
            ans: 1
        }
    },
    {
        id: 2,
        title: "Chủ đề 2: Phép cộng, trừ qua 10 trong phạm vi 20",
        theory: `
            <h3>📌 1. Bảng cộng qua 10 (Phương pháp Tách số)</h3>
            <p>• Để tính $9 + 5$: Tách $5 = 1 + 4$. Ta tính $9 + 1 = 10$, sau đó $10 + 4 = 14$.</p>
            <p>• Mẹo: Cộng cho tròn 10 rồi cộng phần còn lại.</p>
            <h3>📌 2. Phép trừ qua 10</h3>
            <p>• Để tính $13 - 5$: Tách $5 = 3 + 2$. Ta lấy $13 - 3 = 10$, sau đó lấy $10 - 2 = 8$.</p>
            <h3>📌 3. Bài toán Nhiều hơn / Ít hơn</h3>
            <p>• Muốn tìm số lớn hơn: Lấy số bé + phần nhiều hơn.</p>
            <p>• Muốn tìm số bé hơn: Lấy số lớn - phần ít hơn.</p>
        `,
        practice: [
            {
                q: "Tính nhẩm: 8 + 6 = ?",
                options: ["13", "14", "15", "16"],
                ans: 1
            },
            {
                q: "Tính nhẩm: 15 - 7 = ?",
                options: ["7", "8", "9", "6"],
                ans: 1
            }
        ],
        game: {
            title: "🚀 Trò chơi: Bắn Tên Tửa",
            prompt: "Để tính 9 + 4, ta tách 4 thành 1 và mấy?",
            options: ["1 và 2", "1 và 3", "1 và 4"],
            ans: 1
        }
    },
    {
        id: 3,
        title: "Chủ đề 3: Phép cộng/trừ có nhớ trong phạm vi 100",
        theory: `
            <h3>📌 1. Phép cộng có nhớ (Ví dụ: $35 + 7$)</h3>
            <p>• Bước 1: Đặt tính thẳng cột (đơn vị theo đơn vị, chục theo chục).</p>
            <p>• Bước 2: $5$ cộng $7$ bằng $12$, viết $2$ <b>nhớ 1</b>.</p>
            <p>• Bước 3: $3$ thêm $1$ bằng $4$, viết $4$. Kết quả: $42$.</p>
            <h3>📌 2. Phép trừ có nhớ (Ví dụ: $42 - 15$)</h3>
            <p>• $2$ không trừ được $5$, lấy $12 - 5 = 7$, viết $7$ <b>nhớ 1</b>.</p>
            <p>• $1$ thêm $1$ bằng $2$; $4 - 2 = 2$, viết $2$. Kết quả: $27$.</p>
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
            title: "🎣 Trò chơi: Câu Cá Thần Kỳ",
            prompt: "Phép tính nào dưới đây có kết quả bằng 50?",
            options: ["35 + 15", "42 + 9", "60 - 15"],
            ans: 0
        }
    }
];

let activeTopicIdx = 0;
let activePracticeIdx = 0;

// Khởi tạo app
document.addEventListener("DOMContentLoaded", () => {
    initTopicNav();
    loadTopicData(0);
});

function initTopicNav() {
    const nav = document.getElementById("m2TopicNav");
    nav.innerHTML = "";
    math2Data.forEach((topic, idx) => {
        const btn = document.createElement("button");
        btn.className = `topic-btn ${idx === activeTopicIdx ? 'active' : ''}`;
        btn.innerText = topic.title;
        btn.onclick = () => {
            activeTopicIdx = idx;
            activePracticeIdx = 0;
            initTopicNav();
            loadTopicData(idx);
        };
        nav.appendChild(btn);
    });
}

function loadTopicData(idx) {
    const data = math2Data[idx];
    
    // Render Lý thuyết
    document.getElementById("theoryContent").innerHTML = data.theory;

    // Render Bài tập Luyện tập
    loadPracticeQuestion();

    // Render Trò chơi
    loadGameArea();
}

function switchTab(tabName) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    
    event.target.classList.add('active');
    document.getElementById(`tab-${tabName}`).classList.add('active');
}

// Logic Phần Luyện Tập
function loadPracticeQuestion() {
    const qData = math2Data[activeTopicIdx].practice[activePracticeIdx];
    const qContainer = document.getElementById("practiceQuestion");
    const optContainer = document.getElementById("practiceOptions");
    const feedback = document.getElementById("practiceFeedback");

    feedback.innerText = "";
    qContainer.innerText = `Câu ${activePracticeIdx + 1}: ${qData.q}`;
    optContainer.innerHTML = "";

    qData.options.forEach((opt, idx) => {
        const btn = document.createElement("button");
        btn.className = "option-btn";
        btn.innerText = `${String.fromCharCode(65 + idx)}. ${opt}`;
        btn.onclick = () => {
            if (idx === qData.ans) {
                feedback.className = "feedback correct";
                feedback.innerText = "🎉 Chính xác! Bé làm tốt lắm.";
                setTimeout(() => {
                    if (activePracticeIdx < math2Data[activeTopicIdx].practice.length - 1) {
                        activePracticeIdx++;
                        loadPracticeQuestion();
                    }
                }, 1200);
            } else {
                feedback.className = "feedback wrong";
                feedback.innerText = "❌ Sai rồi, bé thử suy nghĩ lại nhé!";
            }
        };
        optContainer.appendChild(btn);
    });
}

// Logic Phần Trò Chơi
function loadGameArea() {
    const gData = math2Data[activeTopicIdx].game;
    const gameBox = document.getElementById("gameArea");
    
    let html = `
        <h2>${gData.title}</h2>
        <p style="font-size: 18px; margin: 15px 0;"><b>Câu hỏi thử thách:</b> ${gData.prompt}</p>
        <div style="display: flex; justify-content: center; gap: 10px; margin-top: 15px;">
    `;

    gData.options.forEach((opt, idx) => {
        html += `<button class="option-btn" style="text-align:center;" onclick="checkGameAns(${idx})">${opt}</button>`;
    });

    html += `</div><div class="feedback" id="gameFeedback"></div>`;
    gameBox.innerHTML = html;
}

function checkGameAns(selectedIdx) {
    const gData = math2Data[activeTopicIdx].game;
    const fb = document.getElementById("gameFeedback");
    if (selectedIdx === gData.ans) {
        fb.className = "feedback correct";
        fb.innerText = "🏆 CHÚC MỪNG! Bé đã chiến thắng trò chơi!";
    } else {
        fb.className = "feedback wrong";
        fb.innerText = "😅 Suýt nữa thì đúng! Bé chọn lại xem.";
    }
}
