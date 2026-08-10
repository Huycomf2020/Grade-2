// Dữ liệu trọn bộ 36 bài học chia thành 7 Chủ đề
const curriculumData = [
    {
        id: 1,
        topic: "Chủ đề 1: Ôn tập và bổ sung",
        icon: "🐰",
        bg: "#e8f8f5", border: "#55efc4",
        lessons: [
            { id: 1, title: "Bài 1: Ôn tập các số đến 100", theory: "Cấu tạo số có 2 chữ số gồm hàng chục bên trái và hàng đơn vị bên phải. Phân tích số: 87 gồm 8 chục và 7 đơn vị, viết là 87 = 80 + 7.", practice: "Dạng 1: Viết và đọc số có 2 chữ số.\nDạng 2: Sắp xếp dãy số theo thứ tự từ bé đến lớn.\nDạng 3: Tách số thành tổng các chục và đơn vị.", game: "Trò chơi 'Tìm cà rốt cho thỏ' và 'Lắp ghép mảnh bìa bảng 100 số'." },
            { id: 2, title: "Bài 2: Tia số. Số liền trước, số liền sau", theory: "Trên tia số, vạch đầu tiên là số 0. Số bên trái bé hơn số bên phải. Số liền trước của một số nhỏ hơn số đó 1 đơn vị, số liền sau lớn hơn 1 đơn vị.", practice: "Dạng 1: Điền số còn thiếu vào tia số.\nDạng 2: Tìm số liền trước, số liền sau.", game: "Trò chơi 'Móc bóng bay vào tia số'." },
            { id: 3, title: "Bài 3: Các thành phần của phép cộng, phép trừ", theory: "Trong phép cộng: Số hạng cộng Số hạng bằng Tổng. Trong phép trừ: Số bị trừ trừ Số trừ bằng Hiệu.", practice: "Dạng 1: Điền thành phần còn thiếu vào bảng.\nDạng 2: Đặt tính rồi tính.", game: "Trò chơi 'Ghép toa tàu mừng xuân'." },
            { id: 4, title: "Bài 4: Hơn, kém nhau bao nhiêu", theory: "Muốn biết số này hơn hoặc kém số kia bao nhiêu đơn vị, ta lấy Số lớn trừ đi Số bé.", practice: "Dạng 1: So sánh hai nhóm đối tượng.\nDạng 2: Giải bài toán có lời văn.", game: "Trò chơi 'Gấp thuyền so tài'." },
            { id: 5, title: "Bài 5: Ôn tập phép cộng, phép trừ (không nhớ) trong phạm vi 100", theory: "Cộng trừ nhẩm các số tròn chục. Khi đặt tính, đặt các chữ số cùng hàng thẳng cột với nhau.", practice: "Dạng 1: Tính nhẩm tròn chục.\nDạng 2: Đặt tính không nhớ.", game: "Trò chơi 'Ô che nắng biển xanh'." },
            { id: 6, title: "Bài 6: Luyện tập chung", theory: "Tổng hợp kiến thức cấu tạo số, tia số, phép tính không nhớ và bài toán hơn kém.", practice: "Dạng 1: Điền số thích hợp.\nDạng 2: So sánh biểu thức.", game: "Trò chơi 'Đưa ong về tổ'." }
        ]
    },
    {
        id: 2,
        topic: "Chủ đề 2: Phép cộng, phép trừ phạm vi 20",
        icon: "🌴",
        bg: "#fff9db", border: "#ffeaa7",
        lessons: [
            { id: 7, title: "Bài 7: Phép cộng (qua 10) trong phạm vi 20", theory: "Sử dụng phương pháp đếm tiếp hoặc tách số để làm tròn thành 10. Ví dụ 9 + 5: Tách 5 thành 1 và 4. Ta có 9 cộng 1 bằng 10, 10 cộng 4 bằng 14.", practice: "Dạng 1: Phân tích tách số dạng 9+x, 8+x.\nDạng 2: Tính biểu thức hai phép cộng.", game: "Trò chơi 'Tìm cá cho mèo'." },
            { id: 8, title: "Bài 8: Bảng cộng (qua 10)", theory: "Xây dựng và học thuộc lòng Bảng cộng qua 10 từ 9 cộng 2 bằng 11 đến 2 cộng 9 bằng 11.", practice: "Dạng 1: Tính nhẩm bảng cộng.\nDạng 2: Điền số còn thiếu.", game: "Trò chơi 'Đèn lồng may mắn'." },
            { id: 9, title: "Bài 9: Bài toán về thêm, bớt một số đơn vị", theory: "Bài toán Thêm dùng phép tính Cộng. Bài toán Bớt dùng phép tính Trừ.", practice: "Dạng 1: Bài giải toán lời văn về Thêm.\nDạng 2: Bài giải toán lời văn về Bớt.", game: "Trò chơi 'Bến xe tấp nấp'." },
            { id: 10, title: "Bài 10: Luyện tập chung", theory: "Củng cố kiến thức bảng cộng qua 10 và toán có lời văn thêm, bớt.", practice: "Dạng 1: Hoàn thành bảng cộng.\nDạng 2: Tính chuỗi kết hợp.", game: "Trò chơi 'Bắt vịt'." },
            { id: 11, title: "Bài 11: Phép trừ (qua 10) trong phạm vi 20", theory: "Phương pháp trừ để tròn 10. Ví dụ 11 - 5: Tách 11 thành 10 và 1, lấy 10 trừ 5 bằng 5, sau đó 5 cộng 1 bằng 6.", practice: "Dạng 1: Tính nhẩm phép trừ.\nDạng 2: Điền số vào sơ đồ.", game: "Trò chơi 'Cánh diều chao gió'." },
            { id: 12, title: "Bài 12: Bảng trừ (qua 10)", theory: "Ghi nhớ Bảng trừ qua 10 từ 11 - 2 đến 18 - 9.", practice: "Dạng 1: Tính nhẩm nhanh.\nDạng 2: So sánh biểu thức.", game: "Trò chơi 'Rước đèn trung thu'." },
            { id: 13, title: "Bài 13: Bài toán về nhiều hơn, ít hơn một số đơn vị", theory: "Bài toán Nhiều hơn: lấy số đã biết cộng phần nhiều hơn. Bài toán Ít hơn: lấy số đã biết trừ phần ít hơn.", practice: "Dạng 1: Giải toán Nhiều hơn.\nDạng 2: Giải toán Ít hơn.", game: "Trò chơi 'Đội cồng chiêng Tây Nguyên'." },
            { id: 14, title: "Bài 14: Luyện tập chung", theory: "Ôn tập bảng cộng, bảng trừ qua 10 và các bài toán lời văn.", practice: "Dạng 1: Tính nhẩm cộng trừ.\nDạng 2: Biểu thức 3 số.", game: "Trò chơi 'Cầu thang - Cầu trượt'." }
        ]
    },
    {
        id: 3,
        topic: "Chủ đề 3: Khối lượng, dung tích",
        icon: "🌱",
        bg: "#eafaf1", border: "#2ecc71",
        lessons: [
            { id: 15, title: "Bài 15: Ki-lô-gam", theory: "Ki-lô-gam là đơn vị đo khối lượng, viết tắt là kg. Sử dụng cân đĩa hoặc cân đồng hồ.", practice: "Dạng 1: Đọc số cân.\nDạng 2: Tính toán có đơn vị kg.", game: "Trò chơi 'Cân thăng bằng'." },
            { id: 16, title: "Bài 16: Lít", theory: "Lít là đơn vị đo dung tích, viết tắt là l. Dùng ca hoặc chai 1 lít để đo.", practice: "Dạng 1: Đọc thể tích dung dịch.\nDạng 2: Tính toán đơn vị lít.", game: "Trò chơi 'Đo nước vào xô'." },
            { id: 17, title: "Bài 17: Thực hành trải nghiệm ki-lô-gam, lít", theory: "Ước lượng và thực hành cân đồ vật, đong nước trong đời sống.", practice: "Dạng 1: Ước lượng khối lượng.\nDạng 2: Đong nước ca 1 lít.", game: "Trò chơi 'Bác sĩ tí hon'." },
            { id: 18, title: "Bài 18: Luyện tập chung", theory: "Ôn tập tổng hợp đo lường khối lượng ki-lô-gam và dung tích lít.", practice: "Dạng 1: Biểu thức đơn vị đo.\nDạng 2: Toán mua bán thực tế.", game: "Trò chơi 'Cầu thăng bằng'." }
        ]
    },
    {
        id: 4,
        topic: "Chủ đề 4: Phép cộng, trừ (có nhớ) phạm vi 100",
        icon: "🎈",
        bg: "#fdebd0", border: "#f39c12",
        lessons: [
            { id: 19, title: "Bài 19: Phép cộng (có nhớ) số có 2 chữ số với số có 1 chữ số", theory: "Đặt tính thẳng cột. Cộng hàng đơn vị trước: nếu lớn hơn hoặc bằng 10 thì nhớ 1 sang hàng chục.", practice: "Dạng 1: Đặt tính có nhớ dạng 35 + 7.\nDạng 2: Cộng tròn chục.", game: "Trò chơi 'Mất chữ số'." },
            { id: 20, title: "Bài 20: Phép cộng (có nhớ) số có 2 chữ số với số có 2 chữ số", theory: "Ví dụ 36 + 17: 6 cộng 7 bằng 13, viết 3 nhớ 1; 3 thêm 1 bằng 4, 4 cộng 1 bằng 5, viết 5. Kết quả bằng 53.", practice: "Dạng 1: Đặt tính dạng 36 + 17.\nDạng 2: Tính chuỗi 3 số.", game: "Trò chơi 'Xếp lại que tính'." },
            { id: 21, title: "Bài 21: Luyện tập chung", theory: "Củng cố các dạng phép cộng có nhớ trong phạm vi 100.", practice: "Dạng 1: Đặt tính tổng hợp.\nDạng 2: Giải toán thực tế.", game: "Trò chơi 'Chuột túi nhảy xa'." },
            { id: 22, title: "Bài 22: Phép trừ (có nhớ) số có 2 chữ số cho số có 1 chữ số", theory: "Ví dụ 32 - 7: 2 không trừ được 7, lấy 12 trừ 7 bằng 5, viết 5 nhớ 1; 3 trừ 1 bằng 2, viết 2. Kết quả 25.", practice: "Dạng 1: Đặt tính dạng 64 - 8.\nDạng 2: Sơ đồ mũi tên.", game: "Trò chơi 'Mèo nấp sau cửa'." },
            { id: 23, title: "Bài 23: Phép trừ (có nhớ) số có 2 chữ số cho số có 2 chữ số", theory: "Trừ hàng đơn vị trước (mượn 1 chục nếu cần), sau đó trừ hàng chục và nhớ phần đã mượn.", practice: "Dạng 1: Đặt tính phép trừ 42 - 15.\nDạng 2: Tìm chữ số bị che.", game: "Trò chơi 'Mèo câu cá'." },
            { id: 24, title: "Bài 24: Luyện tập chung", theory: "Tổng hợp các kỹ năng cộng trừ có nhớ phạm vi 100.", practice: "Dạng 1: Biểu thức cộng trừ.\nDạng 2: So sánh biểu thức.", game: "Trò chơi 'Lật tấm thẻ anh em'." }
        ]
    },
    {
        id: 5,
        topic: "Chủ đề 5: Làm quen với hình phẳng",
        icon: "📐",
        bg: "#ebf5fb", border: "#3498db",
        lessons: [
            { id: 25, title: "Bài 25: Điểm, đoạn thẳng, đường thẳng, đường cong", theory: "Nhận biết điểm, đoạn thẳng, đường thẳng, đường cong. Ba điểm cùng nằm trên một đường thẳng gọi là ba điểm thẳng hàng.", practice: "Dạng 1: Đọc tên các điểm.\nDạng 2: Đo độ dài đoạn thẳng.", game: "Trò chơi 'Nối điểm tạo hình'." },
            { id: 26, title: "Bài 26: Đường gấp khúc. Hình tứ giác", theory: "Đường gấp khúc gồm các đoạn thẳng nối tiếp nhau. Độ dài đường gấp khúc bằng tổng độ dài các đoạn thẳng.", practice: "Dạng 1: Tính độ dài đường gấp khúc.\nDạng 2: Đếm số hình tứ giác.", game: "Trò chơi 'Xếp que tính'." },
            { id: 27, title: "Bài 27: Thực hành gấp, cắt, ghép, xếp hình", theory: "Dùng thước kẻ vẽ đoạn thẳng theo độ dài cho trước. Thực hành gấp và cắt ghép hình phẳng.", practice: "Dạng 1: Vẽ đoạn thẳng 6 cm.\nDạng 2: Cắt ghép hình mẫu.", game: "Trò chơi 'Tangram sáng tạo'." },
            { id: 28, title: "Bài 28: Luyện tập chung", theory: "Ôn tập tổng hợp kiến thức hình học phẳng.", practice: "Dạng 1: Tính đường gấp khúc.\nDạng 2: Phân loại đường thẳng.", game: "Trò chơi 'Nhà thiết kế nhí'." }
        ]
    },
    {
        id: 6,
        topic: "Chủ đề 6: Ngày - Giờ, Giờ - Phút, Ngày - Tháng",
        icon: "⏰",
        bg: "#f4ecf7", border: "#9b59b6",
        lessons: [
            { id: 29, title: "Bài 29: Ngày – giờ, giờ – phút", theory: "Một ngày có 24 giờ. Một giờ có 60 phút. Kim ngắn chỉ giờ, kim dài chỉ phút.", practice: "Dạng 1: Xem giờ đồng hồ.\nDạng 2: Nối giờ sinh hoạt.", game: "Trò chơi 'Xoay kim đồng hồ'." },
            { id: 30, title: "Bài 30: Ngày – tháng", theory: "Một năm có 12 tháng. Tờ lịch tháng cho biết các ngày trong tuần từ Thứ Hai đến Chủ Nhật.", practice: "Dạng 1: Xem lịch tháng.\nDạng 2: Xác định thứ trong tuần.", game: "Trò chơi 'Đi tìm ngày vàng'." },
            { id: 31, title: "Bài 31: Thực hành xem đồng hồ, xem lịch", theory: "Lập thời gian biểu cá nhân và tính khoảng thời gian của các hoạt động.", practice: "Dạng 1: Lập lịch sinh hoạt.\nDạng 2: Tính khoảng thời gian.", game: "Trò chơi 'Rô-bốt thời gian'." },
            { id: 32, title: "Bài 32: Luyện tập chung", theory: "Ôn tập toàn bộ đại lượng thời gian: giờ, phút, ngày, tháng.", practice: "Dạng 1: Đổi đơn vị thời gian.\nDạng 2: Toán chuyến xe.", game: "Trò chơi 'Du hành thời gian'." }
        ]
    },
    {
        id: 7,
        topic: "Chủ đề 7: Ôn tập học kì 1",
        icon: "🏆",
        bg: "#fef9e7", border: "#f1c40f",
        lessons: [
            { id: 33, title: "Bài 33: Ôn tập phép cộng, phép trừ phạm vi 20, 100", theory: "Ôn tập tổng hợp các kỹ năng thực hiện phép cộng, phép trừ không nhớ và có nhớ.", practice: "Dạng 1: Đặt tính rồi tính.\nDạng 2: Toán giải lời văn.", game: "Trò chơi 'Vòng quay may mắn'." },
            { id: 34, title: "Bài 34: Ôn tập hình phẳng", theory: "Ôn tập nhận diện các hình phẳng, tính độ dài đường gấp khúc.", practice: "Dạng 1: Đếm hình tam giác, tứ giác.\nDạng 2: Tính đường gấp khúc.", game: "Trò chơi 'Thử tài kiến trúc sư'." },
            { id: 35, title: "Bài 35: Ôn tập đo lường", theory: "Củng cố kiến thức các đơn vị đo: cm, dm, kg, l, giờ, ngày, tháng.", practice: "Dạng 1: Biểu thức đo lường.\nDạng 2: Điền đơn vị thích hợp.", game: "Trò chơi 'Kính hạm đo lường'." },
            { id: 36, title: "Bài 36: Ôn tập chung", theory: "Đề tổng hợp ôn thi kết thúc Học kì 1.", practice: "Dạng 1: Trắc nghiệm chọn đáp án đúng.\nDạng 2: Tự luận đặt tính giải toán.", game: "Trò chơi 'Đỉnh núi Tri thức'." }
        ]
    }
];

// Quản lý trạng thái ứng dụng
let currentTopic = null;
let currentLesson = null;
let synth = window.speechSynthesis;
let currentUtterance = null;
let isSpeaking = false;
let femaleVoice = null;

document.addEventListener("DOMContentLoaded", () => {
    renderTopicGrid();
    loadVoice();
    if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = loadVoice;
    }
});

function loadVoice() {
    let voices = synth.getVoices();
    let viVoices = voices.filter(v => v.lang.includes("vi"));
    if (viVoices.length > 0) {
        femaleVoice = viVoices.find(v => v.name.includes("HoaiMy") || v.name.includes("Linh") || v.name.toLowerCase().includes("female")) || viVoices[0];
    }
}

// Render Lưới 7 Chủ Đề ở Layer 1
function renderTopicGrid() {
    const container = document.getElementById("topic-grid-container");
    container.innerHTML = "";

    curriculumData.forEach(topic => {
        const card = document.createElement("div");
        card.className = "topic-card";
        card.style.background = topic.bg;
        card.style.borderColor = topic.border;
        card.style.boxShadow = `0 5px 0 ${topic.border}`;

        card.innerHTML = `
            <span class="topic-icon">${topic.icon}</span>
            <h4>${topic.topic}</h4>
            <p>${topic.lessons.length} bài học</p>
        `;
        card.onclick = () => openTopicLayer(topic.id);
        container.appendChild(card);
    });
}

// Mở Layer 2 (Danh sách Bài học của Chủ đề)
function openTopicLayer(topicId) {
    stopReading();
    currentTopic = curriculumData.find(t => t.id === topicId);
    if (!currentTopic) return;

    // Chuyển hiển thị
    document.getElementById("layer-topics").style.display = "none";
    document.getElementById("layer-lessons").style.display = "block";

    // Điền dữ liệu vào Dropdown Bài học
    const select = document.getElementById("lesson-dropdown");
    select.innerHTML = "";

    currentTopic.lessons.forEach(lesson => {
        const opt = document.createElement("option");
        opt.value = lesson.id;
        opt.textContent = lesson.title;
        select.appendChild(opt);
    });

    // Chọn bài đầu tiên của chủ đề
    if (currentTopic.lessons.length > 0) {
        selectLesson(currentTopic.lessons[0].id);
    }
}

// Quay lại Layer 1 (Vườn Toán)
function showTopicsLayer() {
    stopReading();
    document.getElementById("layer-topics").style.display = "block";
    document.getElementById("layer-lessons").style.display = "none";
}

// Khi thay đổi dropdown
function onLessonSelectChange(lessonId) {
    selectLesson(parseInt(lessonId));
}

// Hiển thị chi tiết Bài học
function selectLesson(lessonId) {
    stopReading();
    currentLesson = currentTopic.lessons.find(l => l.id === lessonId);
    if (!currentLesson) return;

    document.getElementById("lesson-title-display").innerText = currentLesson.title;
    document.getElementById("theory-display").innerText = currentLesson.theory;
    document.getElementById("practice-display").innerText = currentLesson.practice;
    document.getElementById("game-display").innerText = currentLesson.game;
}

// Bật / Tắt Đọc Lý thuyết (Giọng nữ)
function toggleReadTheory() {
    if (isSpeaking) {
        stopReading();
    } else {
        startReading();
    }
}

function startReading() {
    if (!currentLesson || !currentLesson.theory) return;

    synth.cancel();

    currentUtterance = new SpeechSynthesisUtterance(currentLesson.theory);
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
