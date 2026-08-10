// Dữ liệu bài tập Toán 2 - Tập 1 (Kết nối tri thức)
const math2Vol1Data = [
    {
        topicId: 1,
        topicName: "Chủ đề 1: Ôn tập các số đến 100",
        questions: [
            {
                question: "Số 87 gồm mấy chục và mấy đơn vị?",
                options: ["8 chục và 7 đơn vị", "7 chục và 8 đơn vị", "80 chục và 7 đơn vị", "8 chục và 70 đơn vị"],
                answer: 0
            },
            {
                question: "Số liền trước của số 60 là số nào?",
                options: ["61", "59", "50", "62"],
                answer: 1
            }
        ]
    },
    {
        topicId: 2,
        topicName: "Chủ đề 2: Cộng trừ phạm vi 20",
        questions: [
            {
                question: "Tính nhẩm: 9 + 5 = ?",
                options: ["13", "14", "15", "12"],
                answer: 1
            },
            {
                question: "Lọ hoa có 8 bông, cắm thêm 4 bông. Hỏi có tất cả bao nhiêu bông hoa?",
                options: ["10 bông", "11 bông", "12 bông", "13 bông"],
                answer: 2
            }
        ]
    },
    {
        topicId: 3,
        topicName: "Chủ đề 3: Ki-lô-gam & Lít",
        questions: [
            {
                question: "Tính: 15 kg + 8 kg = ?",
                options: ["22 kg", "23 kg", "24 kg", "25 kg"],
                answer: 1
            },
            {
                question: "Trong can có 15 l nước mắm, mẹ rót ra 7 l. Trong can còn lại bao nhiêu lít?",
                options: ["8 l", "7 l", "9 l", "6 l"],
                answer: 0
            }
        ]
    },
    {
        topicId: 4,
        topicName: "Chủ đề 4: Cộng/trừ có nhớ (phạm vi 100)",
        questions: [
            {
                question: "Kết quả của phép tính 35 + 7 là bao nhiêu?",
                options: ["41", "42", "43", "32"],
                answer: 1
            },
            {
                question: "Tính: 42 - 15 = ?",
                options: ["27", "37", "25", "17"],
                answer: 0
            }
        ]
    }
];

let m2v1CurrentTopicIndex = 0;
let m2v1CurrentQuestionIndex = 0;
let m2v1Score = 0;

document.addEventListener("DOMContentLoaded", () => {
    renderMath2Vol1Topics();
    loadMath2Vol1Question();
});

function renderMath2Vol1Topics() {
    const topicContainer = document.getElementById("topicContainer");
    if (!topicContainer) return;
    
    topicContainer.innerHTML = "";
    math2Vol1Data.forEach((topic, index) => {
        const btn = document.createElement("button");
        btn.className = `topic-btn ${index === m2v1CurrentTopicIndex ? 'active' : ''}`;
        btn.innerText = topic.topicName;
        btn.onclick = () => selectMath2Vol1Topic(index);
        topicContainer.appendChild(btn);
    });
}

function selectMath2Vol1Topic(index) {
    m2v1CurrentTopicIndex = index;
    m2v1CurrentQuestionIndex = 0;
    renderMath2Vol1Topics();
    loadMath2Vol1Question();
}

function loadMath2Vol1Question() {
    const feedbackText = document.getElementById("feedbackText");
    if (feedbackText) feedbackText.innerText = "";
    
    const currentTopic = math2Vol1Data[m2v1CurrentTopicIndex];
    const q = currentTopic.questions[m2v1CurrentQuestionIndex];

    document.getElementById("questionText").innerText = `Câu ${m2v1CurrentQuestionIndex + 1}: ${q.question}`;
    
    const optionsContainer = document.getElementById("optionsContainer");
    optionsContainer.innerHTML = "";

    q.options.forEach((opt, idx) => {
        const btn = document.createElement("button");
        btn.className = "option-btn";
        btn.innerText = opt;
        btn.onclick = () => checkMath2Vol1Answer(idx);
        optionsContainer.appendChild(btn);
    });
}

function checkMath2Vol1Answer(selectedIndex) {
    const q = math2Vol1Data[m2v1CurrentTopicIndex].questions[m2v1CurrentQuestionIndex];
    const feedbackText = document.getElementById("feedbackText");

    if (selectedIndex === q.answer) {
        feedbackText.innerText = "🎉 Đúng rồi! Bé giỏi quá!";
        feedbackText.className = "feedback correct";
        m2v1Score += 10;
        document.getElementById("score").innerText = m2v1Score;
    } else {
        feedbackText.innerText = "❌ Chưa đúng rồi, bé thử lại nhé!";
        feedbackText.className = "feedback wrong";
    }

    if (selectedIndex === q.answer) {
        setTimeout(() => {
            m2v1CurrentQuestionIndex++;
            if (m2v1CurrentQuestionIndex < math2Vol1Data[m2v1CurrentTopicIndex].questions.length) {
                loadMath2Vol1Question();
            } else {
                feedbackText.innerText = "🌟 Bé đã hoàn thành xong chủ đề này!";
            }
        }, 1500);
    }
}