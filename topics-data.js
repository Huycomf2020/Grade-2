// File: topics-data.js
// Nơi quản lý dữ liệu toàn bộ 8 Chủ đề SGK Âm nhạc 2 (Kết nối tri thức)

const MUSIC_DATA = {
    1: {
        id: 1,
        title: "Sắc màu âm thanh",
        bgColor: "#F1F8E9",
        borderColor: "#7CB342",
        icon: "🐦",
        song: {
            title: "Dàn nhạc trong vườn",
            author: "Tô Đông Hải",
            singYoutubeId: "XdEoaEhqB1g",
            karaokeYoutubeId: "2c_sfeYIwRk"
        },
        birdGame: {
            question: "Chíp chíp chíp! Tiếng hót này là của ai?",
            correctAnswer: "Chim Chích Chòe",
            options: ["Chim Sẻ", "Chim Chích Chòe", "Vàng Anh"]
        },
        story: {
            title: "Ước mơ của bạn Đô",
            summary: "Bạn Đô ước mơ trở thành một nhạc công quân nhạc tài ba để thổi kèn dõng dạc cho mọi người nghe!",
            instrument: "Cây Kèn Quân Nhạc"
        }
    },
    2: {
        id: 2,
        title: "Em yêu làn điệu dân ca",
        bgColor: "#FFF3E0",
        borderColor: "#FFB74D",
        icon: "🌴",
        song: {
            title: "Con chim chích chòe",
            author: "Dân ca Nam Bộ (Lời mới: Việt Anh)",
            singYoutubeId: "3CEWTiQvML0",
            karaokeYoutubeId: "7EemI1aUYIM"
        },
        lesson: {
            title: "Nhớ đội mũ khi đi nắng!",
            content: "Trưa nắng hè mà đi đến trường không chịu đội mũ nên chích chòe bị cảm sốt. Bé Bình An ra ngoài nắng nhớ luôn đội mũ nhé!"
        },
        quiz: {
            question: "Bài hát 'Con chim chích chòe' theo giai điệu dân ca nào?",
            correctAnswer: "Bắc kim thang",
            options: ["Lý cây xanh", "Bắc kim thang", "Lý dĩa bánh bò"]
        }
    },
    3: {
        id: 3,
        title: "Mái trường thân yêu",
        bgColor: "#E8F5E9",
        borderColor: "#81C784",
        icon: "🌱",
        song: {
            title: "Học sinh lớp 2 chăm ngoan",
            author: "Phạm Tuyên",
            singYoutubeId: "", // Sẽ dán link YouTube khi xây dựng Chủ đề 3
            karaokeYoutubeId: ""
        }
    },
    4: {
        id: 4,
        title: "Tuổi thơ",
        bgColor: "#FBE9E7",
        borderColor: "#FF8A65",
        icon: "🎈",
        song: { title: "Mùa khai trường", author: "", singYoutubeId: "", karaokeYoutubeId: "" }
    },
    5: {
        id: 5,
        title: "Mùa xuân",
        bgColor: "#FFFDE7",
        borderColor: "#FFF59D",
        icon: "🏡",
        song: { title: "Xòe hoa", author: "Dân ca Thái", singYoutubeId: "", karaokeYoutubeId: "" }
    },
    6: {
        id: 6,
        title: "Gia đình yêu thương",
        bgColor: "#F3E5F5",
        borderColor: "#CE93D8",
        icon: "❤️",
        song: { title: "Ba hoa hồng", author: "", singYoutubeId: "", karaokeYoutubeId: "" }
    },
    7: {
        id: 7,
        title: "Những con vật quanh em",
        bgColor: "#E0F2F1",
        borderColor: "#80CBC4",
        icon: "🐶",
        song: { title: "Chú gà gio", author: "", singYoutubeId: "", karaokeYoutubeId: "" }
    },
    8: {
        id: 8,
        title: "Mùa hè vui",
        bgColor: "#FFF8E1",
        borderColor: "#FFE082",
        icon: "☀️",
        song: { title: "Mùa hè vui", author: "", singYoutubeId: "", karaokeYoutubeId: "" }
    }
};