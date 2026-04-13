export const theories = [
  {
    id: 'three-act',
    name: '三幕劇',
    color: 'var(--accent1)',
    colorHex: '#ff6b6b',
    author: '亞里斯多德（Aristotle）',
    source: '《詩學》（Poetics），約西元前335年',
    spirit: '最古老也最基礎的敘事結構。亞里斯多德提出所有完整的故事都有<strong>開頭、中段、結尾</strong>。現代三幕劇將故事分為建立（25%）、衝突（50%）、收束（25%）三個段落。它不是公式，而是所有其他結構理論的共同基底。',
    steps: [
      { name: '第一幕：建立', start: 0, end: 25, desc: '介紹角色、世界觀、日常生活。觸發事件打破平衡，主角做出踏上旅程的決定。', act: 1 },
      { name: '第二幕：衝突', start: 25, end: 75, desc: '主角面對層層障礙、關係產生變化、賭注不斷升高。中間點改變方向，低谷逼至絕境。', act: 2 },
      { name: '第三幕：收束', start: 75, end: 100, desc: '高潮對決，所有線索收束。主角完成（或未能完成）內在轉變，建立新的平衡。', act: 3 }
    ]
  },
  {
    id: 'syd-field',
    name: 'Syd Field',
    color: 'var(--accent2)',
    colorHex: '#ffd93d',
    author: 'Syd Field',
    source: '《電影劇本寫作基礎》（Screenplay, 1979），《編劇工作坊》（The Screenwriter\'s Workbook, 1984）',
    spirit: 'Syd Field 被譽為「結構之父」。他在1979年首次將三幕劇的概念<strong>系統化為好萊塢劇本的操作規範</strong>，定義了 Plot Point（轉折點）的概念。後來在第二本書中加入了 Midpoint（中間點）和 Pinch Point（壓力點）。他強調的是比例（25%–50%–25%），而非固定頁數。',
    steps: [
      { name: 'Setup 鋪陳', start: 0, end: 8, desc: '介紹主角、世界觀和核心問題。', act: 1 },
      { name: 'Inciting Incident 觸發事件', start: 8, end: 15, desc: '打破主角日常的關鍵事件，啟動故事。', act: 1 },
      { name: 'Plot Point 1 轉折點一', start: 15, end: 25, desc: '主角做出無法回頭的決定，故事轉入第二幕。', act: 1 },
      { name: 'Pinch 1 壓力點一', start: 25, end: 37, desc: '提醒觀眾核心衝突存在的場景，維持張力。', act: 2 },
      { name: 'Midpoint 中間點', start: 37, end: 50, desc: '重大轉折或揭示，改變故事方向。將第二幕分為前後兩半。', act: 2 },
      { name: 'Pinch 2 壓力點二', start: 50, end: 62, desc: '賭注再度升高，壓力加劇。', act: 2 },
      { name: 'Plot Point 2 轉折點二', start: 62, end: 75, desc: '最低點或危機，推動故事進入第三幕。', act: 2 },
      { name: 'Climax 高潮', start: 75, end: 92, desc: '最終對決與解決。', act: 3 },
      { name: 'Resolution 收尾', start: 92, end: 100, desc: '新的平衡建立，角色弧線完成。', act: 3 }
    ]
  },
  {
    id: 'story-circle',
    name: 'Story Circle',
    color: 'var(--accent3)',
    colorHex: '#6bcb77',
    author: 'Dan Harmon',
    source: '改編自 Joseph Campbell 的英雄旅程，簡化為8步驟。Harmon 是《廢柴聯盟》（Community）和《瑞克和莫蒂》（Rick and Morty）的主創。',
    spirit: 'Dan Harmon 將 Campbell 的英雄旅程<strong>極度簡化</strong>為8個步驟的圓圈。核心概念是「去與回」：上半圈是秩序世界，下半圈是混亂世界。主角從舒適圈出發，穿越到未知世界，付出代價後帶著改變回來。適用於任何長度的故事，從30分鐘的sitcom到長片。',
    steps: [
      { name: '1. You 你（舒適圈）', start: 0, end: 12, desc: '主角在熟悉的世界裡，展現日常狀態。', act: 1 },
      { name: '2. Need 渴望', start: 12, end: 20, desc: '主角意識到自己缺少什麼、想要什麼。', act: 1 },
      { name: '3. Go 跨出', start: 20, end: 28, desc: '主角踏入不熟悉的環境或情境。', act: 1 },
      { name: '4. Search 探索', start: 28, end: 42, desc: '在新環境中適應、學習、面對挑戰。', act: 2 },
      { name: '5. Find 得到', start: 42, end: 55, desc: '主角找到他想要的東西。', act: 2 },
      { name: '6. Take 代價', start: 55, end: 70, desc: '但必須付出沉重的代價。', act: 2 },
      { name: '7. Return 回歸', start: 70, end: 85, desc: '帶著改變（或傷痕）回到原來的世界。', act: 3 },
      { name: '8. Change 蛻變', start: 85, end: 100, desc: '主角已經不同了——世界也可能不同了。', act: 3 }
    ]
  },
  {
    id: 'hero-journey',
    name: '英雄旅程',
    color: 'var(--accent4)',
    colorHex: '#4d96ff',
    author: 'Joseph Campbell，後由 Christopher Vogler 改編為編劇版',
    source: 'Campbell《千面英雄》（The Hero with a Thousand Faces, 1949）；Vogler《作家之路》（The Writer\'s Journey, 1992）',
    spirit: 'Campbell 從世界各地神話中歸納出<strong>「單一神話」（Monomyth）</strong>的共通結構。Vogler 將其改編為更適合好萊塢的12階段版本。核心是：英雄從日常世界出發，跨入未知、經歷考驗與蛻變，最終帶著「靈丹」回歸。適合冒險、奇幻、成長類故事，但並非所有類型都適用。',
    steps: [
      { name: 'Ordinary World 日常世界', start: 0, end: 8, desc: '英雄的平凡生活與內在缺失。', act: 1 },
      { name: 'Call to Adventure 冒險召喚', start: 8, end: 13, desc: '收到踏上旅程的邀請或挑戰。', act: 1 },
      { name: 'Refusal of the Call 拒絕召喚', start: 13, end: 17, desc: '英雄出於恐懼或責任而猶豫、拒絕。', act: 1 },
      { name: 'Meeting the Mentor 遇見導師', start: 17, end: 22, desc: '得到智慧、訓練或關鍵工具。', act: 1 },
      { name: 'Crossing the Threshold 跨越門檻', start: 22, end: 27, desc: '離開日常世界，正式進入冒險。', act: 1 },
      { name: 'Tests, Allies, Enemies 考驗、盟友、敵人', start: 27, end: 42, desc: '在新世界中面對考驗、結交盟友、辨識敵人。', act: 2 },
      { name: 'Approach 逼近洞穴深處', start: 42, end: 50, desc: '接近最危險的核心地帶。', act: 2 },
      { name: 'Ordeal 苦難試煉', start: 50, end: 60, desc: '面對最大的考驗，象徵性的死亡與重生。', act: 2 },
      { name: 'Reward 獎賞', start: 60, end: 68, desc: '挺過試煉後獲得寶物或關鍵領悟。', act: 2 },
      { name: 'The Road Back 歸途', start: 68, end: 78, desc: '開始回歸之路，但危機並未結束。', act: 3 },
      { name: 'Resurrection 復活', start: 78, end: 90, desc: '最終考驗，英雄運用所學徹底重生。', act: 3 },
      { name: 'Return with the Elixir 帶著靈丹回歸', start: 90, end: 100, desc: '帶著轉變回到日常世界，惠及眾人。', act: 3 }
    ]
  },
  {
    id: 'beat-sheet',
    name: 'Save the Cat',
    color: 'var(--accent5)',
    colorHex: '#c084fc',
    author: 'Blake Snyder',
    source: '《先讓英雄救貓咪》（Save the Cat!, 2005）',
    spirit: 'Blake Snyder 是好萊塢編劇和製片，他將三幕劇<strong>細化為15個「節拍」（Beats）</strong>，每個節拍都有明確的功能和大約的位置。特別強調 B Story（通常是承載主題的關係線）和「一切皆失」時刻。技術性極強，適合作為大綱的自我檢查工具。注意：太早套用容易變成公式化寫作。',
    steps: [
      { name: 'Opening Image 開場畫面', start: 0, end: 3, desc: '一個視覺，呈現主角改變「前」的狀態。', act: 1 },
      { name: 'Theme Stated 主題陳述', start: 3, end: 7, desc: '通常由配角說出本片主題，主角尚未理解。', act: 1 },
      { name: 'Set-Up 鋪陳', start: 7, end: 13, desc: '建立主角的世界、缺陷、需要修正的問題。', act: 1 },
      { name: 'Catalyst 觸媒', start: 13, end: 17, desc: '改變一切的事件。等同觸發事件。', act: 1 },
      { name: 'Debate 天人交戰', start: 17, end: 23, desc: '主角猶豫：我真的要踏上這條路嗎？', act: 1 },
      { name: 'Break into Two 進入第二幕', start: 23, end: 27, desc: '主角主動做出選擇，離開舊世界。', act: 2 },
      { name: 'B Story B故事', start: 27, end: 32, desc: '引入承載主題的新關係線（通常是愛情或友情）。', act: 2 },
      { name: 'Fun & Games 遊戲時間', start: 32, end: 45, desc: '「預告片」的素材。展現前提的魅力、新世界的趣味。', act: 2 },
      { name: 'Midpoint 中間點', start: 45, end: 50, desc: '假勝利或假失敗。賭注從「想要」升高為「攸關生死」。', act: 2 },
      { name: 'Bad Guys Close In 壞人逼近', start: 50, end: 62, desc: '外在壓力和內在缺陷同時加劇。團隊可能分裂。', act: 2 },
      { name: 'All Is Lost 一切皆失', start: 62, end: 67, desc: '最低點。通常伴隨「死亡的氣息」——某個角色或事物的消逝。', act: 2 },
      { name: 'Dark Night of the Soul 靈魂暗夜', start: 67, end: 73, desc: '主角被迫面對內心最深的恐懼和缺陷。', act: 2 },
      { name: 'Break into Three 進入第三幕', start: 73, end: 78, desc: 'A story 的教訓 + B story 的啟發結合，找到解決之道。', act: 3 },
      { name: 'Finale 終局', start: 78, end: 95, desc: '主角用全新的自己面對問題。高潮。正面對決。', act: 3 },
      { name: 'Final Image 結尾畫面', start: 95, end: 100, desc: '呈現主角改變「後」的狀態，與開場畫面形成對照。', act: 3 }
    ]
  },
  {
    id: 'freytag',
    name: 'Freytag 金字塔',
    color: 'var(--accent6)',
    colorHex: '#fb923c',
    author: 'Gustav Freytag',
    source: '《戲劇的技術》（Die Technik des Dramas, 1863）',
    spirit: 'Freytag 分析古希臘悲劇和莎士比亞戲劇後，歸納出<strong>五段式金字塔結構</strong>。與現代三幕劇的關鍵差異：Freytag 的高潮（Climax）在故事的正中間，之後是漫長的下降動作；而現代好萊塢的高潮通常在第三幕。因此此模型更適合悲劇和古典戲劇，不完全適用於現代商業電影。',
    steps: [
      { name: 'Exposition 說明', start: 0, end: 15, desc: '介紹角色、背景和初始情境。', act: 1 },
      { name: 'Rising Action 上升動作', start: 15, end: 45, desc: '衝突逐漸發展、複雜度增加、張力攀升。', act: 2 },
      { name: 'Climax 高潮（轉捩點）', start: 45, end: 55, desc: '戲劇張力的最高點。主角命運在此轉向。注意：這裡是故事的中點，不是結尾。', act: 2 },
      { name: 'Falling Action 下降動作', start: 55, end: 82, desc: '高潮的後果逐步展開，走向不可避免的結局。', act: 3 },
      { name: 'Dénouement 結局', start: 82, end: 100, desc: '衝突解決（或無法解決），新的秩序建立。', act: 3 }
    ]
  },
  {
    id: 'sequence',
    name: '八段式',
    color: 'var(--accent7)',
    colorHex: '#22d3ee',
    author: 'Frank Daniel，後由 Paul Joseph Gulino 系統化',
    source: 'Gulino《Screenwriting: The Sequence Approach》（2004）；源自 Frank Daniel 於哥倫比亞大學和 AFI 的教學',
    spirit: '將劇本分為<strong>8個序列（Sequence）</strong>，每個序列約10–15分鐘，各自有小型的起承轉合。好萊塢開發部門常用此方法檢視劇本。優點是幫助編劇解決「第二幕太長不知道怎麼寫」的問題——把60頁的第二幕拆成4個各15頁的小段落，更容易管理。',
    steps: [
      { name: 'Seq 1：鋪陳', start: 0, end: 12, desc: '建立世界觀、主角的日常與問題。', act: 1 },
      { name: 'Seq 2：觸發與抉擇', start: 12, end: 25, desc: '觸發事件、主角的抉擇、進入第二幕。', act: 1 },
      { name: 'Seq 3：初步嘗試', start: 25, end: 37, desc: '主角用舊有方式面對新問題，初嘗甜頭或苦果。', act: 2 },
      { name: 'Seq 4：中間點翻轉', start: 37, end: 50, desc: '重大轉折，遊戲規則改變。前半場結束。', act: 2 },
      { name: 'Seq 5：副線交織', start: 50, end: 62, desc: '多條故事線交織、複雜度最高的段落。', act: 2 },
      { name: 'Seq 6：低谷與危機', start: 62, end: 75, desc: '一切崩盤，主角跌到最低點。', act: 2 },
      { name: 'Seq 7：高潮', start: 75, end: 87, desc: '最終對決和問題的解決。', act: 3 },
      { name: 'Seq 8：收尾', start: 87, end: 100, desc: '新的平衡建立，角色的改變被確認。', act: 3 }
    ]
  }
];
