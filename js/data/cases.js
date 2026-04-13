export const caseTheories = ['syd-field', 'beat-sheet', 'story-circle'];
export const caseColors = ['#e8927c', '#7cc5e8', '#e8d47c', '#b8e87c'];

export const cases = [
  {
    id: 'flying-colors',
    title: '墊底辣妹',
    titleEn: 'Flying Colors',
    year: 2015,
    director: '土井裕泰',
    writer: '橋本裕志',
    note: '改編自坪田信貴原作《後段班辣妹應屆考上慶應大學的故事》',
    color: caseColors[0],
    analyses: {
      'syd-field': [
        { name: 'Setup 鋪陳', start: 0, end: 10, desc: '介紹就讀私立女校但終日與朋友玩樂、不學無術的辣妹彩加，以及她那只顧兒子、放棄女兒的家庭背景。', act: 1 },
        { name: 'Inciting Incident 觸發事件', start: 10, end: 18, desc: '彩加因抽菸被學校停學，為了升學，媽媽帶她來到坪田老師的補習班進行程度測驗。', act: 1 },
        { name: 'Plot Point 1 轉折點一', start: 18, end: 25, desc: '坪田老師不因彩加只有國小程度而嘲笑她，彩加深受感動並誇下海口，正式決定以「慶應大學」為唯一目標。', act: 1 },
        { name: 'Pinch 1 壓力點一', start: 25, end: 38, desc: '彩加開始在學校努力讀書，卻遭到導師羞辱與同儕排擠，坪田老師則不斷用獨特的教學法建立她的信心。', act: 2 },
        { name: 'Midpoint 中間點', start: 38, end: 50, desc: '彩加在模擬考中取得進步，她為了宣示決心剪去長髮、告別玩樂夥伴，專注於衝刺課業。', act: 2 },
        { name: 'Pinch 2 壓力點二', start: 50, end: 65, desc: '成績進入停滯期，爸爸對弟弟的過度期待導致家庭衝突爆發，彩加感受到沉重的期待壓力。', act: 2 },
        { name: 'Plot Point 2 轉折點二', start: 65, end: 75, desc: '在低潮中，媽媽帶彩加去參觀慶應校園，重拾動力；同時弟弟放棄棒球，家庭結構開始瓦解重組。', act: 2 },
        { name: 'Climax 高潮', start: 75, end: 95, desc: '彩加進入考場，克服急性腹痛的危機，在坪田老師與全家人的精神支持下完成最後的挑戰。', act: 3 },
        { name: 'Resolution 收尾', start: 95, end: 100, desc: '彩加成功錄取慶應大學，與爸爸和解，帶著大家的祝福搭上新幹線，啟程前往東京。', act: 3 }
      ],
      'beat-sheet': [
        { name: 'Opening Image 開場畫面', start: 0, end: 3, desc: '幼年的彩加因為交不到朋友而困擾，呈現出她渴望歸屬感的本性。', act: 1 },
        { name: 'Theme Stated 主題陳述', start: 3, end: 7, desc: '媽媽對彩加說：「只要妳能開心，做什麼都好。」確立了本片核心：對個人價值的無條件支持。', act: 1 },
        { name: 'Set-Up 鋪陳', start: 7, end: 13, desc: '展示彩加與辣妹好友們的玩樂生活，以及學校老師對她的全然放棄。', act: 1 },
        { name: 'Catalyst 觸媒', start: 13, end: 17, desc: '彩加被校方抓到抽菸並拒絕供出同夥，面臨退學危機。', act: 1 },
        { name: 'Debate 天人交戰', start: 17, end: 23, desc: '彩加面對空白的測驗卷，思考自己是否真的有能力改變，直到遇見坪田老師。', act: 1 },
        { name: 'Break into Two 進入第二幕', start: 23, end: 27, desc: '彩加第一次感受到被人信任的溫暖，決定與坪田老師聯手挑戰慶應大學。', act: 2 },
        { name: 'B Story B故事', start: 27, end: 32, desc: '彩加與補習班同學、以及與原本辣妹好友的關係變化，成為支撐她改變的內在動力。', act: 2 },
        { name: 'Fun & Games 遊戲時間', start: 32, end: 45, desc: '坪田用各種新奇招式教學（如漫畫讀史），彩加成績突飛猛進，並產生學習樂趣。', act: 2 },
        { name: 'Midpoint 中間點', start: 45, end: 50, desc: '彩加剪掉頭髮，主動與過去的享樂生活切斷，這是一個假勝利時刻，鬥志達到最高點。', act: 2 },
        { name: 'Bad Guys Close In 壞人逼近', start: 50, end: 62, desc: '模擬考成績出現 E 級評價的打擊，加上家庭中父子衝突帶來的負能量干擾。', act: 2 },
        { name: 'All Is Lost 一切皆失', start: 62, end: 67, desc: '彩加在大雨中崩潰，懷疑自己根本不是讀書的料，對坪田老師大發雷霆。', act: 2 },
        { name: 'Dark Night of the Soul 靈魂暗夜', start: 67, end: 73, desc: '彩加與媽媽深談，意識到媽媽為了她的學費兼差勞碌，重新找回努力的意義。', act: 2 },
        { name: 'Break into Three 進入第三幕', start: 73, end: 78, desc: '看過慶應大學校園後，彩加在筆記本寫下給未來自己的信，確立最終目標。', act: 3 },
        { name: 'Finale 終局', start: 78, end: 95, desc: '考場上的奮鬥，以及與家人間關係的修補（爸爸開車送她去考場）。', act: 3 },
        { name: 'Final Image 結尾畫面', start: 95, end: 100, desc: '彩加意氣風發地奔向大學生活，坪田老師在補習班繼續鼓勵下一個「墊底辣妹」。', act: 3 }
      ],
      'story-circle': [
        { name: '1. You 你（舒適圈）', start: 0, end: 12, desc: '彩加在私立女校過著不需要讀書、只需與朋友打扮玩樂的安逸生活。', act: 1 },
        { name: '2. Need 渴望', start: 12, end: 20, desc: '因退學危機，她需要一個證明自己不是「渣滓」的機會與目標。', act: 1 },
        { name: '3. Go 跨出', start: 20, end: 30, desc: '進入坪田老師的補習班，正式涉足從未認真對待過的課業世界。', act: 1 },
        { name: '4. Search 探索', start: 30, end: 45, desc: '從國小單字開始苦讀，克服各種常識不足的障礙，並調整與朋友的關係。', act: 2 },
        { name: '5. Find 得到', start: 45, end: 58, desc: '感受到知識帶來的自信，並獲得了老師與母親的全力支持，但也看見了目標的高不可攀。', act: 2 },
        { name: '6. Take 代價', start: 58, end: 72, desc: '犧牲所有睡眠與娛樂，在壓力下幾乎崩潰，並必須承受家庭分裂的痛苦。', act: 2 },
        { name: '7. Return 回歸', start: 72, end: 85, desc: '帶著全新的意志回到考場，不再是為了面子，而是為了不辜負對自己的期待。', act: 3 },
        { name: '8. Change 蛻變', start: 85, end: 100, desc: '彩加證明了努力的價值，從一個自我放棄的辣妹變成一個充滿可能性的準大學生。', act: 3 }
      ]
    }
  },
  {
    id: 'gone-girl',
    title: '控制',
    titleEn: 'Gone Girl',
    year: 2014,
    director: 'David Fincher',
    writer: 'Gillian Flynn',
    note: '改編自吉莉安·弗琳同名小說',
    color: caseColors[1],
    analyses: {
      'syd-field': [
        { name: 'Setup 鋪陳', start: 0, end: 8, desc: '尼克回到家發現客廳有掙扎痕跡，妻子愛咪在五週年結婚紀念日當天離奇失蹤。', act: 1 },
        { name: 'Inciting Incident 觸發事件', start: 8, end: 15, desc: '警方在尼克家廚房發現大量洗刷過的血跡反應，尼克開始受到警方高度懷疑。', act: 1 },
        { name: 'Plot Point 1 轉折點一', start: 15, end: 25, desc: '尼克的小三安蒂現身，揭露尼克不僅婚姻觸礁且長期說謊，他的社會形象徹底崩塌。', act: 1 },
        { name: 'Pinch 1 壓力點一', start: 25, end: 37, desc: '尼克沿著愛咪留下的尋寶線索，在父親家中發現堆滿債務購買的昂貴禮物，意識到自己掉進陷阱。', act: 2 },
        { name: 'Midpoint 中間點', start: 37, end: 50, desc: '視角徹底翻轉，揭露愛咪其實沒死，這一切都是她為了報復丈夫外遇而精心策劃的偽造謀殺。', act: 2 },
        { name: 'Pinch 2 壓力點二', start: 50, end: 62, desc: '愛咪在躲藏期間被流氓搶劫一空，走投無路下轉而聯繫前男友戴西尋求庇護。', act: 2 },
        { name: 'Plot Point 2 轉折點二', start: 62, end: 75, desc: '尼克聘請名律師並在電視訪談中公開懺悔示愛，試圖將愛咪誘騙回家，愛咪深受感召決定反擊。', act: 2 },
        { name: 'Climax 高潮', start: 75, end: 92, desc: '愛咪在監視器前殘忍殺害戴西並偽造成正當防衛逃脫，滿身鮮血地回到尼克身邊，迫使尼克接受這段恐怖關係。', act: 3 },
        { name: 'Resolution 收尾', start: 92, end: 100, desc: '尼克與愛咪在媒體前假裝和解，並宣布愛咪懷孕，兩人註定要在這段變態的婚姻中繼續糾纏。', act: 3 }
      ],
      'beat-sheet': [
        { name: 'Opening Image 開場畫面', start: 0, end: 3, desc: '尼克撫摸著愛咪的後腦勺，旁白思考著如何敲開她的頭顱，看穿她到底在想什麼。', act: 1 },
        { name: 'Theme Stated 主題陳述', start: 3, end: 7, desc: '尼克與雙胞胎妹妹談論婚姻，暗示了婚姻是一場永無止盡的偽裝與操縱遊戲。', act: 1 },
        { name: 'Set-Up 鋪陳', start: 7, end: 13, desc: '介紹尼克失業後的頹廢狀態，以及他與愛咪之間因經濟壓力而產生的冷戰與隔閡。', act: 1 },
        { name: 'Catalyst 觸媒', start: 13, end: 17, desc: '愛咪在結婚紀念日當天消失，客廳留下的玻璃碎片標誌著平靜生活的終結。', act: 1 },
        { name: 'Debate 天人交戰', start: 17, end: 23, desc: '尼克面對警方排山倒海的質問與日誌內容的指控，掙扎於是否該坦白自己的外遇。', act: 1 },
        { name: 'Break into Two 進入第二幕', start: 23, end: 27, desc: '尼克發現了愛咪的第一個信封線索，正式踏入她所設計的「尋寶遊戲」陷阱中。', act: 2 },
        { name: 'B Story B故事', start: 27, end: 32, desc: '引入尼克與律師泰納的合作，以及與安蒂的婚外情暴露，作為推動主線調查的內在支線。', act: 2 },
        { name: 'Fun & Games 遊戲時間', start: 32, end: 45, desc: '大眾媒體對尼克進行公審，尼克四處尋找愛咪留下的惡作劇線索，情勢對他極端不利。', act: 2 },
        { name: 'Midpoint 中間點', start: 45, end: 50, desc: '愛咪在高速公路上自白，揭露她精心佈置血跡、偽造懷孕與日記的完整詐死計畫。', act: 2 },
        { name: 'Bad Guys Close In 壞人逼近', start: 50, end: 62, desc: '愛咪在度假屋被洗劫，處境變得危險；同時尼克被安蒂公開指控，面臨被捕入獄的最後通牒。', act: 2 },
        { name: 'All Is Lost 一切皆失', start: 62, end: 67, desc: '尼克的所有秘密都被攤在陽光下，愛咪則發現戴西對她的控制慾不亞於尼克。', act: 2 },
        { name: 'Dark Night of the Soul 靈魂暗夜', start: 67, end: 73, desc: '尼克在律師建議下進行最後一搏的電視專訪，愛咪在電視機前看著丈夫，意識到這才是她想要的「對手」。', act: 2 },
        { name: 'Break into Three 進入第三幕', start: 73, end: 78, desc: '愛咪決定回歸並殺害戴西以製造逃脫假象，尼克則在警方壓力下等待愛咪最後的致命一擊。', act: 3 },
        { name: 'Finale 終局', start: 78, end: 95, desc: '愛咪歸來後利用懷孕與大眾同情心，將尼克徹底鎖在「完美丈夫」的劇本中。', act: 3 },
        { name: 'Final Image 結尾畫面', start: 95, end: 100, desc: '畫面回到開頭的愛咪側臉，尼克的旁白重複著最初的疑問，但此時婚姻已成了恐怖的平衡。', act: 3 }
      ],
      'story-circle': [
        { name: '1. You 你（舒適圈）', start: 0, end: 12, desc: '尼克在密蘇里州的小鎮過著平淡、失意且充滿隱瞞的已婚生活。', act: 1 },
        { name: '2. Need 渴望', start: 12, end: 20, desc: '愛咪失蹤後，尼克急需證明自己的清白，同時渴望擺脫這段讓他窒息的婚姻。', act: 1 },
        { name: '3. Go 跨出', start: 20, end: 28, desc: '尼克被推入公眾視野的偵查旋渦，被迫開始玩愛咪設計的紀念日尋寶遊戲。', act: 1 },
        { name: '4. Search 探索', start: 28, end: 45, desc: '尼克在調查中發現愛咪為他量身打造的謀殺罪證，媒體的圍剿迫使他找律師反擊。', act: 2 },
        { name: '5. Find 得到', start: 45, end: 55, desc: '得到真相：愛咪是主導者。尼克理解了妻子的瘋狂天才，並在全國面前精湛演戲誘敵。', act: 2 },
        { name: '6. Take 代價', start: 55, end: 70, desc: '尼克必須捨棄真實的自尊，在電視上扮演愛咪心目中的理想男人，藉此換取存活機會。', act: 2 },
        { name: '7. Return 回歸', start: 70, end: 85, desc: '愛咪殺死前男友後重回家庭，兩人表面上「回歸」了正常的婚姻生活。', act: 3 },
        { name: '8. Change 蛻變', start: 85, end: 100, desc: '兩人徹底變成互為鏡像的怪物，尼克接受了與控制狂共生，建立了永恆折磨的新平衡。', act: 3 }
      ]
    }
  },
  {
    id: 'jojo-rabbit',
    title: '兔嘲男孩',
    titleEn: 'Jojo Rabbit',
    year: 2019,
    director: 'Taika Waititi',
    writer: 'Taika Waititi',
    note: '改編自克莉絲汀·盧南斯的小說《Caging Skies》',
    color: caseColors[2],
    analyses: {
      'syd-field': [
        { name: 'Setup 鋪陳', start: 0, end: 10, desc: '十歲的喬喬是個狂熱的小納粹，在幻想好友希特勒的鼓勵下前往青年團訓練營。', act: 1 },
        { name: 'Inciting Incident 觸發事件', start: 10, end: 18, desc: '喬喬在訓練中因不敢殺兔子被嘲笑，隨後為了證明勇氣被手榴彈炸傷，被迫回家休養。', act: 1 },
        { name: 'Plot Point 1 轉折點一', start: 18, end: 27, desc: '喬喬在死去的姊姊房間閣樓裡，發現了媽媽藏起來的猶太女孩艾莎。', act: 1 },
        { name: 'Pinch 1 壓力點一', start: 27, end: 40, desc: '喬喬試圖寫一本「猶太人指南」來研究艾莎，兩人關係從威脅轉為微妙的共處。', act: 2 },
        { name: 'Midpoint 中間點', start: 40, end: 50, desc: '蓋世太保來家裡搜查，克蘭曾道夫上尉掩護了冒充姊姊的艾莎，讓喬喬意識到世界的複雜性。', act: 2 },
        { name: 'Pinch 2 壓力點二', start: 50, end: 62, desc: '喬喬在廣場發現母親因反抗納粹被處死，他的世界觀崩塌，陷入極度絕望。', act: 2 },
        { name: 'Plot Point 2 轉折點二', start: 62, end: 75, desc: '盟軍攻入城市，喬喬在戰火中目睹納粹覆滅，希特勒要求他一同赴死的幻想變得猙獰。', act: 2 },
        { name: 'Climax 高潮', start: 75, end: 90, desc: '戰爭結束，喬喬為了不讓艾莎離開而撒謊說納粹贏了，但最終決定告訴她真相並踢走幻想中的希特勒。', act: 3 },
        { name: 'Resolution 收尾', start: 90, end: 100, desc: '喬喬與艾莎走出家門，在重獲自由的街道上隨著音樂起舞。', act: 3 }
      ],
      'beat-sheet': [
        { name: 'Opening Image 開場畫面', start: 0, end: 3, desc: '喬喬穿著制服對著鏡子對抗焦慮，幻想中的希特勒為他加油打氣。', act: 1 },
        { name: 'Theme Stated 主題陳述', start: 3, end: 7, desc: '喬喬的母親說：「愛是世界上最強大的東西。」暗示故事核心是愛的轉變。', act: 1 },
        { name: 'Set-Up 鋪陳', start: 7, end: 12, desc: '展示喬喬對納粹的狂熱追求，以及他在青年團營地中的邊緣地位。', act: 1 },
        { name: 'Catalyst 觸媒', start: 12, end: 17, desc: '喬喬受傷住院並毀容，從「準戰士」變成了只能幫忙發傳單的邊緣人。', act: 1 },
        { name: 'Debate 天人交戰', start: 17, end: 23, desc: '發現閣樓的猶太女孩後，喬喬與希特勒討論該告發她還是保住媽媽的性命。', act: 1 },
        { name: 'Break into Two 進入第二幕', start: 23, end: 27, desc: '喬喬決定與艾莎達成協議，開始訪談她以撰寫關於猶太人的「秘密」。', act: 2 },
        { name: 'B Story B故事', start: 27, end: 32, desc: '喬喬與艾莎的關係開始發展，艾莎成為他認識真實世界與「人」的橋樑。', act: 2 },
        { name: 'Fun & Games 遊戲時間', start: 32, end: 42, desc: '兩人鬥嘴、編造情書給艾莎的男友，喬喬逐漸放下對猶太人的刻板恐懼。', act: 2 },
        { name: 'Midpoint 中間點', start: 42, end: 48, desc: '蓋世太保突擊檢查，喬喬第一次主動保護艾莎，兩人的生命真正連結在一起。', act: 2 },
        { name: 'Bad Guys Close In 壞人逼近', start: 48, end: 60, desc: '戰事吃緊，喬喬在街上撿廢鐵，看到更多暴力與絞刑，危機感迫近。', act: 2 },
        { name: 'All Is Lost 一切皆失', start: 60, end: 65, desc: '喬喬在廣場看到母親懸掛的雙腳，唯一的精神支柱徹底倒塌。', act: 2 },
        { name: 'Dark Night of the Soul 靈魂暗夜', start: 65, end: 72, desc: '喬喬回到家與艾莎相擁痛哭，他意識到自己過去信仰的荒謬與殘酷。', act: 2 },
        { name: 'Break into Three 進入第三幕', start: 72, end: 78, desc: '戰爭全面爆發，喬喬在戰亂中脫去制服，選擇與艾莎站在同一邊。', act: 3 },
        { name: 'Finale 終局', start: 78, end: 95, desc: '與幻想希特勒正式決裂將其踢出窗外，並帶領艾莎迎向自由的陽光。', act: 3 },
        { name: 'Final Image 結尾畫面', start: 95, end: 100, desc: '兩人在自由的街道上跳舞，呼應了母親所說的「自由的人會跳舞」。', act: 3 }
      ],
      'story-circle': [
        { name: '1. You 你（舒適圈）', start: 0, end: 12, desc: '喬喬活在納粹洗腦與幻想好友希特勒的安全感中，夢想成為頂尖士兵。', act: 1 },
        { name: '2. Need 渴望', start: 12, end: 20, desc: '因受傷失去地位，他渴望證明自己依然是個「優秀的納粹」。', act: 1 },
        { name: '3. Go 跨出', start: 20, end: 28, desc: '發現家中的猶太女孩，他被迫與這個「大敵」共處一室。', act: 1 },
        { name: '4. Search 探索', start: 28, end: 45, desc: '透過觀察與訪談艾莎，他開始懷疑宣傳中的偏見，並學習真正的社交與情感。', act: 2 },
        { name: '5. Find 得到', start: 45, end: 55, desc: '他找到了比信仰更真實的感情，學會了保護他人而非僅是盲從。', act: 2 },
        { name: '6. Take 代價', start: 55, end: 75, desc: '失去母親作為代價，並在戰爭中目睹了體制的崩潰與死亡。', act: 2 },
        { name: '7. Return 回歸', start: 75, end: 88, desc: '戰後回到家，他決定放下對身分的執著，歸還艾莎應有的自由。', act: 3 },
        { name: '8. Change 蛻變', start: 88, end: 100, desc: '喬喬從盲從的小男孩成長為有獨立思考、懂得跳舞與愛的獨立個體。', act: 3 }
      ]
    }
  },
  {
    id: 'little-miss-sunshine',
    title: '小太陽的願望',
    titleEn: 'Little Miss Sunshine',
    year: 2006,
    director: 'Jonathan Dayton, Valerie Faris',
    writer: 'Michael Arndt',
    note: '改編自 Michael Arndt 原創劇本',
    color: caseColors[3],
    analyses: {
      'syd-field': [
        { name: 'Setup 鋪陳', start: 0, end: 10, desc: '透過快速剪輯介紹家庭成員：沉迷成功學的父親、自殺未遂的舅舅、發誓沉默的哥哥、毒舌爺爺及天真的奧莉薇。', act: 1 },
        { name: 'Inciting Incident 觸發事件', start: 10, end: 16, desc: '奧莉薇驚喜接到通知，獲得前往加州參加「小太陽小姐」選美比賽的遞補資格。', act: 1 },
        { name: 'Plot Point 1 轉折點一', start: 16, end: 25, desc: '全家人因經濟與照護因素，不得不集體擠進老舊的黃色福斯小巴，正式啟動這趟公路旅程。', act: 1 },
        { name: 'Pinch 1 壓力點一', start: 25, end: 37, desc: '小巴的排檔桿發生故障，全家人必須合力推車才能發動引擎，象徵成員間雖有摩擦仍需共生。', act: 2 },
        { name: 'Midpoint 中間點', start: 37, end: 50, desc: '爺爺在旅館意外過世，家庭面臨折返或前進的抉擇，最終決定偷運遺體繼續前往選美會場。', act: 2 },
        { name: 'Pinch 2 壓力點二', start: 50, end: 65, desc: '父親的事業合約談判徹底失敗，家庭經濟支柱崩塌，同時在路上遭遇警察臨檢的驚險時刻。', act: 2 },
        { name: 'Plot Point 2 轉折點二', start: 65, end: 75, desc: '哥哥發現自己是色盲而無法實現飛行夢，在路邊崩潰大喊，家庭情緒跌至谷底。', act: 2 },
        { name: 'Climax 高潮', start: 75, end: 92, desc: '奧莉薇在舞台上表演爺爺教的脫衣舞，全家人不顧羞辱衝上台一起跳舞，以此對抗刻板的選美標準。', act: 3 },
        { name: 'Resolution 收尾', start: 92, end: 100, desc: '全家人衝破選美會場的圍欄，再度推著黃色小巴踏上回家的路，建立了一種失敗者同盟的新平衡。', act: 3 }
      ],
      'beat-sheet': [
        { name: 'Opening Image 開場畫面', start: 0, end: 3, desc: '奧莉薇盯著電視上的選美皇后倒帶重看，模仿其驚訝表情，呈現她單純的夢想與失敗者的現實對比。', act: 1 },
        { name: 'Theme Stated 主題陳述', start: 3, end: 7, desc: '父親理查對聽眾演講他的「九步成功學」，強調贏家與輸家的區別，諷刺了本片將要解構的成功定義。', act: 1 },
        { name: 'Set-Up 鋪陳', start: 7, end: 13, desc: '晚餐時間呈現一家人的混亂與失能：哥哥的仇恨日記、舅舅的失戀創傷、爺爺的粗俗言行。', act: 1 },
        { name: 'Catalyst 觸媒', start: 13, end: 17, desc: '電話傳來喜訊，奧莉薇獲得選美比賽參賽權，平靜但緊繃的生活被這突如其來的目標打破。', act: 1 },
        { name: 'Debate 天人交戰', start: 17, end: 23, desc: '全家人爭論誰該帶奧莉薇去加州，在各種現實阻礙下，最終達成「全家都要去」的無奈共識。', act: 1 },
        { name: 'Break into Two 進入第二幕', start: 23, end: 27, desc: '全家人擠上黃色福斯小巴，背景音樂響起，這群不合群的靈魂正式進入公路冒險。', act: 2 },
        { name: 'B Story B故事', start: 27, end: 32, desc: '舅舅與哥哥在車上的對話，以及爺爺對奧莉薇的特訓與鼓勵，發展出家庭成員間更深層的情感連結。', act: 2 },
        { name: 'Fun & Games 遊戲時間', start: 32, end: 45, desc: '公路上的各種突發狀況：換檔器損壞後的推車接力、冰淇淋店的熱量教育、理查追逐成功學合約的偏執。', act: 2 },
        { name: 'Midpoint 中間點', start: 45, end: 50, desc: '爺爺因吸食過量藥物突然猝逝，這是一場假失敗後的重大轉向，全家人決定為了夢想非法運屍。', act: 2 },
        { name: 'Bad Guys Close In 壞人逼近', start: 50, end: 62, desc: '選美會場的期限將至，路途中的警察盤查增加風險，理查發現自己所謂的成功計畫完全幻滅。', act: 2 },
        { name: 'All Is Lost 一切皆失', start: 62, end: 67, desc: '哥哥發現自己色盲，夢想碎裂後在田野大喊「我恨所有人」，家庭陷入徹底的絕望感中。', act: 2 },
        { name: 'Dark Night of the Soul 靈魂暗夜', start: 67, end: 73, desc: '奧莉薇默默走向哥哥並輕觸其肩膀，沈默的溫柔治癒了崩潰的靈魂，全家人在夕陽下重拾前行的力量。', act: 2 },
        { name: 'Break into Three 進入第三幕', start: 73, end: 78, desc: '一家人在截止時間最後一秒趕到會場，即使遭到工作人員刁難，仍執意讓奧莉薇上台。', act: 3 },
        { name: 'Finale 終局', start: 78, end: 95, desc: '奧莉薇在台上的驚人演出引發騷亂，家人們紛紛上台保護並支持她，完成了對社會規則的群體反叛。', act: 3 },
        { name: 'Final Image 結尾畫面', start: 95, end: 100, desc: '小巴再度上路，車尾殘破但堅固，這家人雖然失去了原本追求的東西，卻獲得了彼此。', act: 3 }
      ],
      'story-circle': [
        { name: '1. You 你（舒適圈）', start: 0, end: 12, desc: '五個失敗者與一個夢想家，在狹窄的家中維持著壓抑且充滿衝突的日常生活。', act: 1 },
        { name: '2. Need 渴望', start: 12, end: 20, desc: '奧莉薇渴望在選美比賽中獲勝，而其他成人渴望透過這次機會找到救贖或成功。', act: 1 },
        { name: '3. Go 跨出', start: 20, end: 28, desc: '他們離開了熟悉的亞利桑那州，進入那台象徵未知與挑戰的黃色福斯小巴。', act: 1 },
        { name: '4. Search 探索', start: 28, end: 45, desc: '在公路的考驗中適應彼此的怪癖，經歷修車、喪親、失敗合約等層層打擊。', act: 2 },
        { name: '5. Find 得到', start: 45, end: 55, desc: '在爺爺死後，他們找到了「共同奮鬥」的目標，這不再只是一個女孩的選美，而是全家的戰鬥。', act: 2 },
        { name: '6. Take 代價', start: 55, end: 70, desc: '付出的代價是原本對「贏」的偏執、對飛行夢想的破碎，以及社會地位的崩壞。', act: 2 },
        { name: '7. Return 回歸', start: 70, end: 85, desc: '趕到會場並回歸到這家人的初衷：守護奧莉薇。他們在選美舞台上展現了最真實的醜陋與美麗。', act: 3 },
        { name: '8. Change 蛻變', start: 85, end: 100, desc: '這家人已經完全不同，他們不再介意成功學，而是學會了如何一起開心地當個「輸家」。', act: 3 }
      ]
    }
  }
];
