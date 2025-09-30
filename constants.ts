import type { Group, GroupKey, Question, Statement, SuggestionMap } from './types'

export const GROUPS: Group[] = ['Học thuật', 'Nghệ thuật', 'Văn hoá', 'Xã hội', 'Thể thao']

export const KEY_MAP: Record<Group, GroupKey> = {
  'Học thuật': 'academic',
  'Nghệ thuật': 'artistic',
  'Văn hoá': 'cultural',
  'Xã hội': 'social',
  'Thể thao': 'sports',
}

export const STATEMENTS_DATA: Statement[] = [
  { text: 'Khi gặp một câu hỏi hóc búa, bạn thường thấy phấn khích hơn là lo lắng.', group: 'Học thuật' },
  {
    text: 'Bạn thấy hứng thú khi được tham gia vào các cuộc thi hoặc hoạt động có yếu tố trí tuệ, kiến thức.',
    group: 'Học thuật',
  },
  {
    text: 'Bạn thấy thích thú khi dành nhiều giờ để chuẩn bị một bài thuyết trình hoặc dự án nghiên cứu.',
    group: 'Học thuật',
  },
  { text: 'Khi nghe nhạc, bạn thường tưởng tượng ra hình ảnh đi kèm.', group: 'Nghệ thuật' },
  { text: 'Bạn dễ nhớ một thông tin khi nó gắn với hình ảnh hoặc âm thanh.', group: 'Nghệ thuật' },
  {
    text: 'Bạn thường thích tham gia hoặc thưởng thức những buổi biểu diễn nghệ thuật trực tiếp.',
    group: 'Nghệ thuật',
  },
  { text: 'Khi đi đến một nơi mới, bạn thường để ý xem con người ở đó sống và tương tác thế nào.', group: 'Văn hoá' },
  { text: 'Bạn thích tham gia vào những dịp giao lưu giữa nhiều nền văn hóa khác nhau.', group: 'Văn hoá' },
  { text: 'Bạn dễ bị thu hút bởi những món ăn, âm nhạc hoặc phim ảnh mang dấu ấn văn hóa.', group: 'Văn hoá' },
  { text: 'Bạn thường nghĩ đến việc làm sao để ý tưởng/hoạt động của mình có thể lan tỏa rộng hơn.', group: 'Xã hội' },
  { text: 'Bạn cảm thấy ý nghĩa khi tham gia các chương trình gây quỹ hoặc hỗ trợ cộng đồng.', group: 'Xã hội' },
  {
    text: 'Bạn thấy thoải mái khi được tương tác với nhiều kiểu người khác nhau, và điều chỉnh cách nói chuyện phù hợp từng đối tượng.',
    group: 'Xã hội',
  },
  { text: 'Bạn cảm thấy cơ thể vận động giúp đầu óc mình tỉnh táo hơn.', group: 'Thể thao' },
  { text: 'Bạn thích thử thách bản thân trong các trò chơi hoặc nhiệm vụ có yếu tố thi đua.', group: 'Thể thao' },
  { text: 'Bạn thích tham gia các giải đấu hoặc hoạt động thi đấu giao hữu.', group: 'Thể thao' },
]

export const QUESTIONS_DATA: Question[] = [
  {
    q: '1. Khi tham gia CLB, bạn mong muốn nhất là:',
    a: ['Nâng cao kiến thức', 'Học thuật', { 'Học thuật': 2, 'Văn hoá': 1 }],
    b: ['Sân chơi biểu diễn, sáng tạo', 'Nghệ thuật', { 'Nghệ thuật': 2, 'Văn hoá': 1 }],
    c: ['Trải nghiệm đa dạng, giao lưu', 'Văn hoá', { 'Văn hoá': 2, 'Xã hội': 1 }],
    d: ['Hoạt động cộng đồng', 'Xã hội', { 'Xã hội': 2, 'Văn hoá': 1 }],
    e: ['Rèn luyện sức khoẻ, thể thao', 'Thể thao', { 'Thể thao': 2, 'Xã hội': 1 }],
  },
  {
    q: '2. Buổi sinh hoạt CLB lý tưởng của bạn là:',
    a: ['Thảo luận bài học, làm dự án', 'Học thuật', { 'Học thuật': 2, 'Xã hội': 1 }],
    b: ['Tập luyện, dàn dựng tiết mục', 'Nghệ thuật', { 'Nghệ thuật': 2, 'Văn hoá': 1 }],
    c: ['Tổ chức giao lưu, hội chợ', 'Văn hoá', { 'Văn hoá': 2, 'Nghệ thuật': 1 }],
    d: ['Chuẩn bị chiến dịch cộng đồng', 'Xã hội', { 'Xã hội': 2, 'Văn hoá': 1 }],
    e: ['Tập luyện, thi đấu thể thao', 'Thể thao', { 'Thể thao': 2, 'Xã hội': 1 }],
  },
  {
    q: '3. Điều khiến bạn thấy hứng khởi nhất:',
    a: ['Giải một bài toán khó', 'Học thuật', { 'Học thuật': 2 }],
    b: ['Trình diễn trước khán giả', 'Nghệ thuật', { 'Nghệ thuật': 2, 'Văn hoá': 1 }],
    c: ['Kết bạn mới, giao lưu đa dạng', 'Văn hoá', { 'Văn hoá': 2, 'Xã hội': 1 }],
    d: ['Tạo ra tác động tích cực', 'Xã hội', { 'Xã hội': 2, 'Văn hoá': 1 }],
    e: ['Chiến thắng trong trận đấu', 'Thể thao', { 'Thể thao': 2, 'Xã hội': 1 }],
  },
  {
    q: '4. Kỹ năng bạn muốn rèn thêm qua CLB là:',
    a: ['Tư duy logic, nghiên cứu', 'Học thuật', { 'Học thuật': 2 }],
    b: ['Sáng tạo, biểu đạt cảm xúc', 'Nghệ thuật', { 'Nghệ thuật': 2 }],
    c: ['Giao tiếp đa văn hoá', 'Văn hoá', { 'Văn hoá': 2 }],
    d: ['Kỹ năng lãnh đạo, teamwork xã hội', 'Xã hội', { 'Xã hội': 2, 'Học thuật': 1 }],
    e: ['Sức bền, tinh thần đồng đội', 'Thể thao', { 'Thể thao': 2, 'Xã hội': 1 }],
  },
  {
    q: '5. Thành quả bạn mong chờ sau 1 năm:',
    a: ['Một giải thưởng học thuật', 'Học thuật', { 'Học thuật': 2 }],
    b: ['Một buổi biểu diễn/triển lãm', 'Nghệ thuật', { 'Nghệ thuật': 2, 'Văn hoá': 1 }],
    c: ['Một sự kiện giao lưu thành công', 'Văn hoá', { 'Văn hoá': 2, 'Nghệ thuật': 1 }],
    d: ['Một dự án tình nguyện được công nhận', 'Xã hội', { 'Xã hội': 2, 'Văn hoá': 1 }],
    e: ['Một giải đấu hoặc thành tích cá nhân', 'Thể thao', { 'Thể thao': 2 }],
  },
  {
    q: '6. Bạn thấy thoải mái nhất khi:',
    a: ['Giải thích khái niệm khó cho người khác', 'Học thuật', { 'Học thuật': 2 }],
    b: ['Thể hiện bản thân qua nghệ thuật', 'Nghệ thuật', { 'Nghệ thuật': 2 }],
    c: ['Trò chuyện với bạn mới từ nền văn hoá khác', 'Văn hoá', { 'Văn hoá': 2, 'Xã hội': 1 }],
    d: ['Tổ chức hoạt động thiện nguyện cùng nhóm', 'Xã hội', { 'Xã hội': 2 }],
    e: ['Ra sân tập luyện cùng đồng đội', 'Thể thao', { 'Thể thao': 2 }],
  },
  {
    q: '7. Môi trường CLB bạn mong muốn:',
    a: ['Nghiêm túc, thiên về học tập', 'Học thuật', { 'Học thuật': 2 }],
    b: ['Sôi động, giàu cảm xúc', 'Nghệ thuật', { 'Nghệ thuật': 2 }],
    c: ['Thân thiện, đa dạng, cởi mở', 'Văn hoá', { 'Văn hoá': 2 }],
    d: ['Nhiệt huyết, trách nhiệm xã hội', 'Xã hội', { 'Xã hội': 2 }],
    e: ['Năng động, gắn kết qua vận động', 'Thể thao', { 'Thể thao': 2 }],
  },
  {
    q: '8. Nếu phải chọn 1 sự kiện để tham gia ngay:',
    a: ['Cuộc thi học thuật/tranh biện', 'Học thuật', { 'Học thuật': 2, 'Văn hoá': 1 }],
    b: ['Đêm nhạc hội/triển lãm', 'Nghệ thuật', { 'Nghệ thuật': 2 }],
    c: ['Lễ hội văn hoá, hội chợ quốc tế', 'Văn hoá', { 'Văn hoá': 2, 'Nghệ thuật': 1 }],
    d: ['Chiến dịch tình nguyện hè', 'Xã hội', { 'Xã hội': 2 }],
    e: ['Giải đấu thể thao', 'Thể thao', { 'Thể thao': 2, 'Xã hội': 1 }],
  },
  {
    q: '9. Giá trị bạn mong nhận được:',
    a: ['Tri thức, kỹ năng chuyên môn', 'Học thuật', { 'Học thuật': 2 }],
    b: ['Cơ hội thể hiện bản thân', 'Nghệ thuật', { 'Nghệ thuật': 2 }],
    c: ['Hiểu biết đa văn hoá', 'Văn hoá', { 'Văn hoá': 2 }],
    d: ['Trải nghiệm cống hiến, ý nghĩa xã hội', 'Xã hội', { 'Xã hội': 2 }],
    e: ['Sức khoẻ, tinh thần đồng đội', 'Thể thao', { 'Thể thao': 2 }],
  },
  {
    q: '10. Nếu mô tả CLB phù hợp với bạn bằng 1 từ:',
    a: ['Tri thức', 'Học thuật', { 'Học thuật': 2 }],
    b: ['Sáng tạo', 'Nghệ thuật', { 'Nghệ thuật': 2 }],
    c: ['Kết nối', 'Văn hoá', { 'Văn hoá': 2 }],
    d: ['Cống hiến', 'Xã hội', { 'Xã hội': 2 }],
    e: ['Năng động', 'Thể thao', { 'Thể thao': 2 }],
  },
]

export const SUGGESTIONS: SuggestionMap = {
  academic: [{ name: 'CLB Toán – Khoa học', url: 'https://hmthien050209.github.io' }, { name: 'CLB Lập trình', url: 'https://hmthien050209.github.io' }, { name: 'CLB Tranh biện', url: 'https://hmthien050209.github.io' }],
  artistic: [{ name: 'CLB Âm nhạc', url: 'https://hmthien050209.github.io' }, { name: 'CLB Múa', url: 'https://hmthien050209.github.io' }, { name: 'CLB Kịch', url: 'https://hmthien050209.github.io' }],
  cultural: [{ name: 'CLB Tiếng Anh', url: 'https://hmthien050209.github.io' }, { name: 'CLB Văn hoá dân gian', url: 'https://hmthien050209.github.io' }, { name: 'CLB Ẩm thực', url: 'https://hmthien050209.github.io' }],
  social: [{ name: 'CLB Tình nguyện', url: 'https://hmthien050209.github.io' }, { name: 'CLB Truyền thông – PR', url: 'https://hmthien050209.github.io' }, { name: 'CLB Kỹ năng sống', url: 'https://hmthien050209.github.io' }],
  sports: [{ name: 'CLB Bóng đá', url: 'https://hmthien050209.github.io' }, { name: 'CLB Cầu lông', url: 'https://hmthien050209.github.io' }, { name: 'CLB Võ thuật', url: 'https://hmthien050209.github.io' }],
}
