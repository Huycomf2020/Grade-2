// File: topics-data.js
// Dữ liệu chi tiết 8 Chủ đề SGK Âm nhạc lớp 2 (Kết nối tri thức với cuộc sống)

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
            karaokeYoutubeId: "2c_sfeYIwRk",
            lyrics: "Kìa con chim gáy, cúc cu đố la. Kìa chú vàng anh, líu lo lá son. Kìa chim chích chòe, chích chòe lá pha. Một dàn nhạc chim líu lo trong vườn."
        },
        birdGame: {
            question: "Chíp chíp chíp! Tiếng hót này là của chú chim nào?",
            correctAnswer: "Chim Chích Chòe",
            options: ["Chim Sẻ", "Chim Chích Chòe", "Vàng Anh"]
        },
        story: {
            title: "Ước mơ của bạn Đô",
            summary: "Vào mỗi buổi sáng, bạn Đô nghe thấy tiếng kèn dõng dạc vang lên từ doanh trại quân đội gần nhà. Đô ước mơ sau này sẽ trở thành một nhạc công quân nhạc tài ba để thổi kèn cho mọi người cùng nghe!",
            question: "Bạn Đô ước mơ chơi nhạc cụ nào trong đoàn quân nhạc?",
            correctAnswer: "Cây Kèn Quân Nhạc"
        },
        lesson: {
            title: "Cảm nhận sắc màu âm thanh",
            content: "Âm thanh thiên nhiên quanh ta thật phong phú. Bé hãy biết lắng nghe và yêu thương không gian sống xanh xung quanh mình nhé!"
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
            karaokeYoutubeId: "7EemI1aUYIM",
            lyrics: "Có con chim là chim chích chòe, trưa nắng hè mà đi đến trường. Ấy thế mà không chịu đội mũ, tối đến mới về nằm rên ôi ôi. Đau quá nhức cả đầu, chích chòe ta cảm liền suốt ba ngày đêm!"
        },
        birdGame: {
            question: "Bài hát 'Con chim chích chòe' được viết theo giai điệu dân ca nào?",
            correctAnswer: "Bắc kim thang",
            options: ["Lý cây xanh", "Bắc kim thang", "Lý dĩa bánh bò"]
        },
        lesson: {
            title: "Nhớ đội mũ khi đi nắng!",
            content: "Vì đi học giữa trưa nắng mà không chịu đội mũ nên chích chòe bị cảm sốt nhức đầu. Bài học dành cho bé Bình An: Mỗi khi đi ra ngoài trời nắng, bé nhớ phải luôn đội mũ/nón cẩn thận để giữ gìn sức khỏe nhé!"
        },
        story: {
            title: "Giai điệu dân ca Nam Bộ",
            summary: "Dân ca Nam Bộ mang giai điệu mộc mạc, vui tươi, gắn liền với đồng quê sông nước và đời sống sinh hoạt của người dân phương Nam.",
            question: "Con chim chích chòe bị cảm mấy ngày đêm?",
            correctAnswer: "3 ngày đêm"
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
            singYoutubeId: "p-XdEoaEhqB1g", 
            karaokeYoutubeId: "p-2c_sfeYIwRk",
            lyrics: "Em là học sinh lớp 2, vui sao khi đến trường. Học tập thật chăm ngoan, vâng lời thầy cô giáo."
        },
        birdGame: {
            question: "Lớp 2 bé học tập như thế nào để thầy cô vui lòng?",
            correctAnswer: "Chăm ngoan học giỏi",
            options: ["Đi học muộn", "Chăm ngoan học giỏi", "Xem tivi nhiều"]
        },
        lesson: {
            title: "Yêu quý mái trường & Thầy cô",
            content: "Trường học là ngôi nhà thứ hai của bé. Bé Bình An hãy luôn chăm ngoan, lễ phép với thầy cô và đoàn kết với bạn bè nhé!"
        },
        story: {
            title: "Bài học của gấu con",
            summary: "Gấu con rất thích đến trường vì ở đó có thầy cô dạy hát, dạy vẽ và có nhiều bạn bè cùng chơi trò chơi dân gian.",
            question: "Đến trường bé được học những điều gì?",
            correctAnswer: "Hát, vẽ và nhiều điều hay"
        }
    },
    4: {
        id: 4,
        title: "Tuổi thơ",
        bgColor: "#FBE9E7",
        borderColor: "#FF8A65",
        icon: "🎈",
        song: {
            title: "Múa xòe",
            author: "Dân ca Thái (Lời mới: Việt Anh)",
            singYoutubeId: "p-MuaXoeSing", 
            karaokeYoutubeId: "p-MuaXoeKara",
            lyrics: "Cùng xòe tay ra cho đều, cùng nắm tay nhau cùng múa. Mùa xuân đến rồi vui quá bạn ơi!"
        },
        birdGame: {
            question: "Múa xòe là điệu múa đặc trưng của dân tộc nào?",
            correctAnswer: "Dân tộc Thái",
            options: ["Dân tộc Kinh", "Dân tộc Thái", "Dân tộc Chăm"]
        },
        lesson: {
            title: "Vui chơi hồn nhiên",
            content: "Tuổi thơ của bé tràn ngập sắc màu âm nhạc và tình bạn. Hãy cùng bạn bè tham gia các hoạt động tập thể thật vui vẻ!"
        },
        story: {
            title: "Tiếng trống hội làng",
            summary: "Vào mùa lễ hội, tiếng trống rộn rã cất lên thúc giục mọi người nắm tay nhau hòa vào điệu múa xòe đoàn kết.",
            question: "Khi múa xòe các bạn làm động tác gì?",
            correctAnswer: "Nắm tay nhau múa vòng tròn"
        }
    },
    5: {
        id: 5,
        title: "Mùa xuân",
        bgColor: "#FFFDE7",
        borderColor: "#FFF59D",
        icon: "🏡",
        song: {
            title: "Chúc xuân",
            author: "Hoàng Vân",
            singYoutubeId: "p-ChucXuanSing", 
            karaokeYoutubeId: "p-ChucXuanKara",
            lyrics: "Mùa xuân sang hoa nở rộ, em cất tiếng hát chúc mừng năm mới. Chúc ông bà cha mẹ nhiều sức khỏe!"
        },
        birdGame: {
            question: "Mùa xuân đến loài hoa nào thường nở ở miền Bắc?",
            correctAnswer: "Hoa Đào",
            options: ["Hoa Đào", "Hoa Hướng Dương", "Hoa Cúc"]
        },
        lesson: {
            title: "Kính chúc ông bà cha mẹ",
            content: "Ngày Tết xuân về, bé Bình An nhớ gửi những lời chúc ngoan ngoãn, yêu thương nhất tới ông bà, bố mẹ và người thân nhé!"
        },
        story: {
            title: "Sự tích hoa mai hoa đào",
            summary: "Mùa xuân mang không khí ấm áp, muôn hoa đua nở, từng đàn chim én bay về báo hiệu một năm mới bình an.",
            question: "Bé làm gì khi nhận lì xì ngày Tết?",
            correctAnswer: "Khoanh tay nói Cảm ơn"
        }
    },
    6: {
        id: 6,
        title: "Gia đình yêu thương",
        bgColor: "#F3E5F5",
        borderColor: "#CE93D8",
        icon: "❤️",
        song: {
            title: "Ba ngọn nến lung linh",
            author: "Ngọc Lễ",
            singYoutubeId: "p-BaNgonNenSing", 
            karaokeYoutubeId: "p-BaNgonNenKara",
            lyrics: "Ba là cây nến vàng, mẹ là cây nến xanh, con là cây nến hồng. Ba ngọn nến lung linh, thắp sáng một gia đình."
        },
        birdGame: {
            question: "Trong bài hát, ngọn nến hồng tượng trưng cho ai?",
            correctAnswer: "Người con",
            options: ["Ba", "Mẹ", "Người con"]
        },
        lesson: {
            title: "Hiếu thảo với cha mẹ",
            content: "Gia đình là nơi ấm áp nhất. Bé Bình An hãy biết giúp đỡ ba mẹ việc nhỏ và luôn ngoan ngoãn để gia đình tràn ngập tiếng cười!"
        },
        story: {
            title: "Bữa cơm ấm áp",
            summary: "Cả nhà cùng quây quần bên mâm cơm tối, chia sẻ những câu chuyện vui trong ngày. Tình yêu thương gia đình luôn là điều thiêng liêng nhất.",
            question: "Ba ngọn nến lung linh thắp sáng điều gì?",
            correctAnswer: "Thắp sáng một gia đình"
        }
    },
    7: {
        id: 7,
        title: "Những con vật quanh em",
        bgColor: "#E0F2F1",
        borderColor: "#80CBC4",
        icon: "🐶",
        song: {
            title: "Chú gà gáy sáng",
            author: "Dân ca Cống Khao",
            singYoutubeId: "p-ChuGaSing", 
            karaokeYoutubeId: "p-ChuGaKara",
            lyrics: "Gà gáy ó o o sáng rồi ai ơi. Gà gáy đánh thức mọi người dậy đi học đi làm."
        },
        birdGame: {
            question: "Chú gà trống gáy âm thanh như thế nào vào buổi sáng?",
            correctAnswer: "Ó o o o",
            options: ["Chíp chíp", "Ó o o o", "Gâu gâu"]
        },
        lesson: {
            title: "Yêu quý các vật nuôi",
            content: "Các chú chó, mèo, gà trống... đều là những người bạn đáng yêu. Bé hãy biết chăm sóc và bảo vệ các con vật quanh mình nhé!"
        },
        story: {
            title: "Đồng hồ của trang trại",
            summary: "Chú gà trống như chiếc đồng hồ báo thức chăm chỉ, mỗi sáng sớm đều cất tiếng gáy vang gọi muôn loài thức dậy đón bình minh.",
            question: "Gà trống gáy sáng để làm gì?",
            correctAnswer: "Báo thức mọi người thức dậy"
        }
    },
    8: {
        id: 8,
        title: "Mùa hè vui",
        bgColor: "#FFF8E1",
        borderColor: "#FFE082",
        icon: "☀️",
        song: {
            title: "Mùa hè vui",
            author: "Hoàng Lương",
            singYoutubeId: "p-MuaHeVuiSing", 
            karaokeYoutubeId: "p-MuaHeVuiKara",
            lyrics: "Tiếng ve kêu hè đã về, bầu trời xanh bao la. Chúng em đón mùa hè vui với bao hoạt động bổ ích."
        },
        birdGame: {
            question: "Tiếng côn trùng nào thường kêu rộn rã khi mùa hè tới?",
            correctAnswer: "Tiếng Ve sầu",
            options: ["Tiếng Dế mèn", "Tiếng Ve sầu", "Tiếng Chuồn chuồn"]
        },
        lesson: {
            title: "Mùa hè an toàn & Bổ ích",
            content: "Nghỉ hè bé Bình An hãy nhớ rèn luyện thể thao, đọc sách, học bơi an toàn và giúp đỡ ông bà cha mẹ nhé!"
        },
        story: {
            title: "Kỳ nghỉ hè tuyệt vời",
            summary: "Mùa hè mang đến những chuyến dã ngoại, những buổi thả diều trên đồng cỏ xanh và những giờ học ngoại khóa vô cùng thú vị.",
            question: "Hoa gì nở đỏ rực báo hiệu mùa hè đến?",
            correctAnswer: "Hoa Phượng đỏ"
        }
    }
};
