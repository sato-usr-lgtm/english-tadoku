// ===== Reading data =====
// Each book: { id, level (1-5), title, emoji, genre, words, desc, text }

const LEVELS = {
  1: {
    label: "Level 1 — 入門",
    desc: "中学1〜2年レベル。基本的な単語と短い文。1〜2語の文も多く、絵本・日常会話に近い内容。",
    color: "var(--lv1)",
    bg: "var(--lv1-bg)",
  },
  2: {
    label: "Level 2 — 初級",
    desc: "中学2〜3年レベル。短めの段落と身近なトピック。過去形・未来形も登場します。",
    color: "var(--lv2)",
    bg: "var(--lv2-bg)",
  },
  3: {
    label: "Level 3 — 中級",
    desc: "中学3年〜高校1年レベル。関係代名詞・接続詞を含む複文。一般的な社会・科学トピック。",
    color: "var(--lv3)",
    bg: "var(--lv3-bg)",
  },
  4: {
    label: "Level 4 — 上級",
    desc: "高校2〜3年レベル。論説・説明文・エッセイ。語彙と構文が大学入試レベルに近い。",
    color: "var(--lv4)",
    bg: "var(--lv4-bg)",
  },
  5: {
    label: "Level 5 — 最上級",
    desc: "大学入試〜大学レベル。抽象概念・学術的内容・英字新聞・文学作品に近い難度。",
    color: "var(--lv5)",
    bg: "var(--lv5-bg)",
  },
};

const BOOKS = [

  // ================================================================
  // LEVEL 1  (4 texts, ~100-130 words each)
  // ================================================================
  {
    id: 1, level: 1,
    title: "My Day",
    emoji: "🌅",
    genre: "日記",
    words: 320,
    desc: "Emma の一日を追うやさしい日記。基本動詞と時間表現が中心。",
    text: `My name is Emma. I am ten years old. I live in a small town with my mother, my father, and my cat, Luna. Luna is orange and white. She sleeps on my bed every night.

I wake up at seven o'clock every morning. First, I wash my face. The water is cold in the morning, but it helps me wake up. Then I go to the kitchen. My mother is always there. She makes breakfast for us. Today she made eggs and toast. I love eggs. I put a little ketchup on top.

I go to school at eight o'clock. I walk to school with my friend Tom. Tom lives on the same street. He is very funny. He always tells jokes on the way to school. This morning he told me a joke about a fish. I laughed so much that I almost dropped my bag.

At school, I have six classes. My favorite class is English. I like reading stories and learning new words. My second favorite is art. We draw and paint pictures. Last week, I painted a picture of the sea. My teacher put it on the wall.

Math is hard for me. Numbers are not easy. But my teacher, Mr. Sato, is very kind. He helps me when I do not understand. I try my best every day.

I eat lunch at noon. Today I had a sandwich with ham and cheese, an apple, and a small carton of milk. I sat with Tom and my other friend, Aiko. We talked and laughed during lunch. It is my favorite time of the school day.

After school, I play in the park near my house. I like to run, jump, and swing. Sometimes I ride my bicycle. My dog, Biscuit, comes with me. Biscuit is brown and very fluffy. He runs fast. He always beats me in a race.

I go home at five o'clock. I do my homework at my desk. Then I have dinner with my family. Tonight we had rice, soup, and fish. After dinner, we watch TV together for a little while.

Before bed, I read a book. I am reading a story about a girl who discovers a magic door in her school. It is very exciting. I do not want to stop reading!

At nine o'clock, I turn off the light. Luna jumps onto my bed and curls up near my feet.

Good night, everyone.`,
  },
  {
    id: 2, level: 1,
    title: "A Big Red Apple",
    emoji: "🍎",
    genre: "物語",
    words: 310,
    desc: "りんごをめぐる動物たちの短い物語。色・大きさの形容詞が豊富。",
    text: `There is a big red apple on a tall tree in the forest. The apple is round and shiny. It looks very sweet and delicious. Many animals in the forest want to eat it.

One morning, a little bird flies to the tree. She sees the apple and her eyes get big. "I want that apple!" she says. She tries to fly up and get it, but the branch is too high. She tries again and again. But she cannot reach the apple. She sits on a lower branch and looks sad.

Soon, a small brown rabbit hops over. He sees the apple too. "I want that apple!" he says. He jumps up once. He jumps up twice. He jumps up three times. But the apple is too high for a small rabbit. He sits down next to the tree and puts his ears down.

Then a big brown bear walks out of the trees. He is very tall and very strong. He sees the bird and the rabbit sitting quietly. He also sees the big red apple.

"Why are you sad?" the bear asks.

"We want the apple," says the bird. "But we cannot reach it."

The bear looks up at the apple. He stands on his back legs and reaches up with his big paw. His long arm goes up... up... up... and he gets the apple!

"Thank you!" say the bird and the rabbit together.

The bear smiles a big smile. "We should share," he says.

The bear sits down under the tree. He takes the apple and breaks it carefully into three pieces. One piece for the bird. One piece for the rabbit. And one piece for the bear.

They eat together in the warm sunshine. The apple is sweet and very, very delicious. The bird sings a happy song. The rabbit wiggles his nose. The bear closes his eyes and smiles.

"This is better," says the bear. "Everything is better when you share."

The bird and the rabbit agree.`,
  },
  {
    id: 3, level: 1,
    title: "The Weather Today",
    emoji: "☀️",
    genre: "日常",
    words: 330,
    desc: "天気と毎日の活動を描いた短い話。be動詞と天気表現が中心。",
    text: `Today is Monday. The weather is sunny and warm. The sky is very blue. There are no clouds. I look out my window in the morning and I feel happy. On sunny days, everything looks bright and beautiful.

I eat breakfast quickly because I want to go outside. I have rice, a boiled egg, and orange juice. Then I put on my shoes and my hat. My hat is yellow. I like yellow.

In the morning, I play in the garden with my neighbor's daughter, Saki. We run and chase each other. I also look at the flowers. Our garden has many kinds of flowers. There are red flowers near the gate. There are yellow flowers by the wall. And there are small white flowers near the steps. They smell very sweet.

We find a small frog under a leaf. Saki is scared, but I think frogs are interesting. The frog is green and has big eyes. We watch it for a few minutes, and then it jumps away.

At noon, some clouds come. They are big and gray. The sky is not so blue now. My mother comes to the door. She says, "Come inside soon. It will rain."

Ten minutes later, the rain starts. It is soft at first. Then it gets stronger. I can hear it on the roof. Pitter-patter, pitter-patter. I sit by the window and watch the rain fall on the garden. The flowers shake in the rain. Little rivers run along the path.

My cat, Mochi, comes and sits next to me. Mochi is white with orange spots. She looks at the rain too. I think she does not like rain. She puts her paw on the glass.

We stay like that for a long time, just watching.

After thirty minutes, the rain stops. I put on my shoes again and go outside. The air smells fresh and clean. The garden is wet and shiny. The flowers are standing up tall again.

Then I see it — a rainbow in the sky. It is big and bright. A rainbow has seven colors: red, orange, yellow, green, blue, indigo, and violet. I count all the colors. Yes, all seven are there.

I call to my mother. "Mama! Come and see!"

She comes outside and looks up. She smiles.

What a beautiful day.`,
  },
  {
    id: 4, level: 1,
    title: "My Family",
    emoji: "👨‍👩‍👧‍👦",
    genre: "日常",
    words: 315,
    desc: "家族の紹介文。人物描写と好きなものの表現が中心。",
    text: `My name is Riku. I am twelve years old. I live in Tokyo with my family. Our apartment is small, but I like it. We are on the fifth floor, and from our window, I can see a park and a river.

I have a small family. There are four people: my father, my mother, my sister, and me.

My father is tall and quiet. He has short black hair and glasses. He works at a bank in the city. He leaves home at seven thirty every morning. On weekends, he plays golf with his friends. He is not very good at golf, but he loves it. He always comes home smiling.

My mother is kind and busy. She has short hair and a warm smile. She is a nurse at a hospital near our home. She works long hours, but she always makes time to cook for us. Her miso soup is my favorite. I think it is the best soup in the world.

My sister's name is Hana. She is eight years old. She is funny and a little noisy. She loves drawing. She draws pictures of cats every single day. There are cat pictures on the wall, on the table, and even on her school bag. One day, she wants to make a book about cats.

I like playing soccer. I am on the school team. We practice every Tuesday and Thursday afternoon. I am not the best player, but I run fast. I also love reading manga. My favorite manga is about a boy who wants to be a chef. He travels to different countries and learns to cook many different foods. I think it is very exciting.

Every evening, we eat dinner together. We sit around the table and talk about our day. My father talks about work. My mother talks about her patients. Hana shows us her drawings. I talk about soccer.

It is the best part of my day.

I love my family very much.`,
  },

  // ================================================================
  // LEVEL 2  (4 texts, ~180-220 words each)
  // ================================================================
  {
    id: 5, level: 2,
    title: "The Lost Puppy",
    emoji: "🐶",
    genre: "物語",
    words: 430,
    desc: "迷子の子犬を助ける少年の温かいストーリー。過去形の動詞が多く登場。",
    text: `One Tuesday afternoon in November, a boy named Kenji was walking home from school when he heard a strange sound near the park gate.

He stopped walking and listened. It was a soft, high sound — like crying. He looked around but saw nothing at first. Then he looked under a wooden bench near the path.

There was a tiny puppy. It was lying on the cold ground, shaking. Its fur was wet and muddy from the rain that had fallen earlier that day. The puppy looked up at Kenji with big, round brown eyes.

"Oh no," Kenji said softly.

He knelt down slowly so the puppy would not be scared. He reached out his hand. The puppy sniffed his fingers carefully. Then, very slowly, it moved a little closer to him.

Kenji looked at the puppy's collar. It was a pale blue collar with a small silver tag. The tag said "Koko" on one side and had a phone number on the other.

Kenji took out his phone and called the number. It rang twice.

A woman answered. Her voice was anxious. "Hello?"

"Hello," said Kenji. "I found a puppy in the park. Her name is Koko. Are you her owner?"

"Yes! Oh, thank goodness!" the woman cried. "I have been looking everywhere for her! She got out of the garden this morning. I was so worried. Is she okay?"

"She's wet and cold," Kenji said. "But she looks okay."

While he waited, Kenji took off his school scarf and wrapped it gently around the puppy. Koko stopped shaking a little. She licked Kenji's hand. Her tongue was warm and small.

About twenty minutes later, a woman in a yellow raincoat ran through the park gate. She was out of breath. When she saw Koko, she gave a small cry and ran forward. She scooped up the puppy and held her tightly against her chest.

"Koko! My darling! I was so worried about you!" She kissed the top of the puppy's head again and again.

Then she looked at Kenji. Her eyes were shining.

"Thank you so much," she said. "You are such a kind young man. You kept her warm." She noticed the scarf around Koko and smiled.

Kenji felt his face go red. "It's fine," he said. "I'm glad she's safe."

The woman insisted on returning his scarf. She also gave him a small bag of candies from her coat pocket. "It's not much," she said. "But please take it."

Kenji walked home with the bag of candies in his hand. The evening air was cold, but he felt warm inside.

He thought that helping someone — even a small someone with four legs — was one of the best feelings in the world.`,
  },
  {
    id: 6, level: 2,
    title: "My Favorite Season",
    emoji: "🍂",
    genre: "エッセイ",
    words: 415,
    desc: "秋の好きなところを書いた短いエッセイ。比較表現・理由の接続詞が登場。",
    text: `My favorite season is autumn, and I have many reasons for feeling this way.

First, the colors of autumn are simply beautiful. When the leaves on the trees begin to change, the world transforms into something magical. Green leaves slowly turn red, orange, yellow, and brown. When I walk through the park near my house in October, I feel like I am walking inside a painting. Sometimes a leaf falls slowly from a branch and lands near my feet. I pick it up and look at the colors carefully. It is hard to believe that something so beautiful is just a leaf.

Second, the weather in autumn is perfect — at least for me. Summer in Japan is very hot and humid. I sweat when I walk to school, and I cannot sleep well at night. Winter is cold and dry, and my hands and lips crack. But autumn is different. The temperature is comfortable. I can wear a light jacket in the morning and feel just right. The air feels clean and fresh. I can walk fast, play sports, and stay outside for a long time without feeling too hot or too cold.

Third, autumn is a wonderful season for food. Many of my favorite things to eat are autumn foods. Sweet potatoes become available in September, and I love them roasted or in soup. Mushrooms appear in many dishes — in rice, in miso soup, and in pasta. New rice is harvested in autumn, and freshly cooked rice has a special sweetness and smell. My grandmother lives in the countryside, and every October she sends us a box of rice from her farm. Our whole family looks forward to that box all year.

Finally, I love the sky in autumn. In summer, the sky is often white with heat and thick clouds. In winter, it is gray. But in autumn, the sky is a deep, pure blue. When I look up on a clear October morning, I feel like I can see forever. There is something peaceful about that big, open sky.

Of course, every season has its own beauty. Spring has cherry blossoms. Summer has festivals and the sound of cicadas. Winter has the quiet beauty of snow. I understand why people love these seasons too.

But when I think about which season makes me feel most alive and most happy, the answer is always autumn.

What is your favorite season? I would love to know why.`,
  },
  {
    id: 7, level: 2,
    title: "A Trip to the Sea",
    emoji: "🌊",
    genre: "物語",
    words: 455,
    desc: "家族と海へ行った夏の思い出。過去形・感情表現が豊富。",
    text: `Last summer, my family went to the sea for the first time in three years. I had been waiting for that day since spring. I was so excited the night before that I could not fall asleep easily. I kept thinking about the waves, the sand, and the smell of the ocean.

I woke up at five thirty in the morning, even before my alarm. I got dressed quickly and went to help my mother pack. We made sandwiches — tuna for my father, cheese and tomato for my mother and me, and egg for my little sister Hana. We packed cold drinks, sunscreen, towels, and a big red beach umbrella into the back of the car.

We left home at six o'clock. The streets were quiet. The drive to the sea took about two hours. I listened to music and watched the view from the window. First, there were houses and buildings. Then there were rice fields, wide and green. Then there were hills covered in trees. And then, suddenly, far away in the distance, I saw it — a thin line of blue.

"The sea!" I said.

When we arrived at the beach, the morning sun was shining and the ocean was a bright, clear blue. I jumped out of the car, took off my shoes, and ran across the sand toward the water. The sand was warm and soft between my toes. When my feet touched the sea, the water was cold and clean. I ran in up to my knees. Then up to my waist. I took a breath and dove in.

It felt wonderful.

Hana was more careful. She is only seven and a little nervous about the waves. She stood at the edge of the water and let the small waves wash over her feet. She squealed every time a wave came. After a while, she held my hand and came in a little deeper. By the afternoon, she was splashing around happily.

We built a sandcastle together. My father dug the moat. My mother helped with the towers. Hana collected shells from the beach and pressed them into the walls as decoration. It was a big, beautiful castle. We took many photos.

Just before sunset, we sat together on our towels and ate our sandwiches. The sky above the water turned orange, then pink, then a soft purple. The waves were quieter in the evening. Nobody spoke for several minutes. We just sat there, watching the colors change.

On the way home, Hana fell asleep before we even left the beach parking lot. My father drove quietly. My mother looked out the window. I thought about the day.

The cold water. The warm sand. The sunset.

I closed my eyes and decided — the sea is my favorite place in the world. I will go back next summer. And the summer after that.`,
  },
  {
    id: 8, level: 2,
    title: "Learning to Cook",
    emoji: "🍳",
    genre: "日記",
    words: 440,
    desc: "初めて料理に挑戦した少女の体験記。手順の表現と感情描写が豊富。",
    text: `Last Saturday, I cooked dinner for my family for the very first time. It was something I had been wanting to try for a long time, but I was a little afraid to start.

That afternoon, my mother came home from work looking very tired. She sat down on the sofa and closed her eyes for a moment. I looked at the clock. It was four thirty. Someone needed to make dinner.

"I'll cook tonight," I said.

My mother opened her eyes and looked at me. "Are you sure?" she asked.

"Yes," I said. "I want to try."

She smiled and wrote down a simple recipe for vegetable soup. "Start with the carrots and potatoes," she said. "They take the longest."

I went to the kitchen. First, I washed my hands. Then I took out all the vegetables — carrots, potatoes, one large onion, and some green onions. I peeled the carrots and potatoes and cut them into pieces. This was harder than I expected. The carrots were firm and my knife kept slipping.

Then I cut the onion. Almost immediately, my eyes started to burn and water. Tears ran down my face. My little brother, Sota, walked into the kitchen and started laughing. "Why are you crying?" he asked.

"I am NOT crying," I said. "Onions do this to everyone."

He laughed more. I threw a small piece of onion peel at him.

Next, I put a little oil in the big pot and turned on the heat. I added the onion first and stirred it until it turned soft and sweet-smelling. Then I added the carrots and potatoes. I stirred everything for a few minutes. Then I poured in water — about one liter — and put the lid on.

I waited. While the soup was boiling, I washed rice and started the rice cooker. I also set the table, folding the napkins neatly. My father came into the kitchen and sniffed the air.

"Something smells really good," he said.

I felt my face go warm. "It's just soup," I said.

After twenty-five minutes, I checked the vegetables with a chopstick. They were soft. I added salt, a little pepper, and a small piece of butter. I stirred everything and tasted it carefully.

It tasted... really good.

I served the soup and called everyone to the table. We sat down together. My mother took the first spoonful. She closed her eyes.

"This is delicious," she said quietly. "Really."

My father nodded. "You made this yourself?"

I nodded. My heart was beating fast with pride.

After dinner, I washed all the dishes too. My arms were tired, and the kitchen took a while to clean. But I did not mind at all.

Cooking is harder than I thought. But it is also much more satisfying. I am going to do it again next weekend. Maybe I will try curry.`,
  },

  // ================================================================
  // LEVEL 3  (4 texts, ~270-300 words each)
  // ================================================================
  {
    id: 9, level: 3,
    title: "Why Do We Dream?",
    emoji: "💭",
    genre: "科学",
    words: 280,
    desc: "夢のしくみを解説した説明文。関係代名詞・受動態・論理的な段落構成。",
    text: `Have you ever woken up from a dream and wondered why it felt so real? Dreams have fascinated humans for thousands of years. Ancient cultures believed that dreams were messages from gods or windows into the future. Today, scientists offer a different perspective, though many mysteries remain.

Dreams occur mainly during REM sleep, which stands for Rapid Eye Movement. During this phase, brain activity increases dramatically and becomes similar to waking life. Your eyes move quickly beneath your eyelids, and your heart rate rises. Most people experience REM sleep four to five times per night, with each cycle lasting longer than the last.

One popular theory suggests that dreaming helps the brain process emotional experiences. When something stressful or important happens during the day, the brain may "replay" it at night to make sense of it. This could explain why people often dream about situations that worried or excited them.

Another theory proposes that dreams help consolidate memory. During sleep, the brain sorts through the information gathered during the day, deciding what to store and what to discard. Dreams may be a side effect of this sorting process.

Some scientists argue that dreams serve no specific purpose at all — they are simply random signals from the brain during sleep, which the mind tries to turn into a story.

Whatever the explanation, one thing is clear: dreams reflect the remarkable activity of the human brain, even while the body rests.

Next time you wake up from a strange dream, you might be witnessing your brain doing some of its most important work.`,
  },
  {
    id: 10, level: 3,
    title: "The Library at the End of the Road",
    emoji: "📚",
    genre: "物語",
    words: 300,
    desc: "田舎の古い図書館を訪れた少女の話。情景描写と心情表現が中心。",
    text: `The summer Yuki turned fifteen, she discovered the library at the end of Maple Road.

She had lived in the small town her entire life, yet she had somehow never noticed the low stone building half-hidden by ivy. A wooden sign above the door read: "Kite Hill Public Library — Est. 1924."

Inside, the air smelled of old paper and lavender. The librarian, an elderly man with round glasses, looked up from his desk and nodded as if he had been expecting her.

"Looking for anything in particular?" he asked.

"I don't know yet," Yuki admitted. She had never been good at deciding things.

"Then I suggest you wander," he said, returning to his book.

She did. The shelves seemed to go on forever, filled with novels, atlases, poetry collections, and books about insects, volcanoes, ocean currents, and Renaissance painters. She pulled out titles at random, read a paragraph, and placed them back.

Then, on a low shelf near the window, a thin book caught her eye. It had no title on the spine — only a faded illustration of a girl standing at a crossroads.

She sat down on the wooden floor and read the whole thing without moving. It was about a girl who couldn't choose her path, and how she eventually realized that choosing itself was part of the journey.

When she finally looked up, the light through the window had turned gold. Two hours had passed.

She brought the book to the desk.

"May I borrow this?"

The librarian looked at the cover and smiled gently. "That one always finds the right reader."`,
  },
  {
    id: 11, level: 3,
    title: "Plastic in Our Oceans",
    emoji: "🐋",
    genre: "環境",
    words: 290,
    desc: "海洋プラスチック問題を論じた説明文。データ・原因・解決策の三部構成。",
    text: `Every year, approximately eight million tonnes of plastic waste enter the world's oceans. That is equivalent to dumping a rubbish truck's worth of plastic into the sea every single minute. If current trends continue, there will be more plastic in the ocean than fish by 2050.

The problem begins on land. Plastic that is not properly disposed of can be carried by wind and rain into rivers, which eventually flow into the sea. Fishing nets and equipment abandoned at sea add to the problem. Once in the water, plastic does not dissolve. Instead, it breaks into smaller and smaller pieces called microplastics, which are now found even in the deepest parts of the ocean.

Marine animals suffer greatly. Sea turtles often mistake plastic bags for jellyfish and swallow them, causing serious injury. Seabirds feed plastic fragments to their chicks, believing them to be food. Whales have washed ashore with hundreds of kilograms of plastic in their stomachs.

Microplastics also affect human beings. They have been detected in drinking water, table salt, and even human blood. The long-term health effects are still being studied, but scientists are concerned.

Governments around the world are responding. Many countries have banned single-use plastic bags and straws. New materials that break down naturally are being developed. Beach clean-up campaigns bring communities together to remove plastic from coastlines.

However, the most powerful solution lies in reducing how much plastic we produce and use in the first place. Every small action — choosing a reusable bag, refusing unnecessary packaging — contributes to a healthier ocean.`,
  },
  {
    id: 12, level: 3,
    title: "The History of the Internet",
    emoji: "🌐",
    genre: "科学・歴史",
    words: 285,
    desc: "インターネットの歴史をたどる説明文。時系列構成・受動態・接続詞が豊富。",
    text: `It is difficult to imagine modern life without the internet. We use it to communicate, study, shop, and entertain ourselves. But the internet as we know it today was not always so accessible — it began as a small military network over fifty years ago.

In the late 1960s, the United States Department of Defense developed a communication system called ARPANET. It was designed to allow computers at different locations to share information, even if part of the network was damaged. At first, only a handful of universities and research centers were connected.

Throughout the 1970s and 1980s, the network grew slowly. Scientists and academics used it mainly to exchange research data and send electronic messages — what we now call email. The general public had little access and even less awareness of its existence.

The real revolution came in 1991, when a British scientist named Tim Berners-Lee introduced the World Wide Web. He created a system that allowed documents to be linked together and accessed through a simple browser. Suddenly, the internet became visual, navigable, and far easier to use.

By the mid-1990s, commercial providers were offering internet access to ordinary households. New websites appeared daily. Online shopping, news, and entertainment services followed rapidly.

Today, more than five billion people around the world are connected to the internet. It has transformed how we work, learn, and relate to one another.

Yet the internet is still evolving. Questions about privacy, misinformation, and unequal access remain pressing challenges for governments, companies, and individuals alike.`,
  },

  // ================================================================
  // LEVEL 4  (4 texts, ~330-370 words each)
  // ================================================================
  {
    id: 13, level: 4,
    title: "The Science of Habits",
    emoji: "🧠",
    genre: "科学",
    words: 360,
    desc: "習慣の形成メカニズムを論じた説明文。心理学・神経科学の用語と論説的な文体。",
    text: `Why is it so difficult to break a bad habit, yet so hard to build a good one? The answer lies deep within the architecture of the human brain.

Neuroscientists describe habit formation in terms of a three-part cycle: the cue, the routine, and the reward. A cue is a trigger — something in your environment or emotional state that initiates a behavior. The routine is the behavior itself. The reward is what reinforces the behavior by activating the brain's pleasure centers. Over time, repeated cycles carve out neural pathways that make the routine increasingly automatic.

This mechanism evolved for good reasons. By automating routine behaviors, the brain conserves cognitive energy for more complex tasks. Walking, driving a familiar route, and brushing teeth all operate largely on autopilot — freeing conscious attention for novel challenges.

The difficulty arises when the automatic behavior is harmful. A person who reaches for a cigarette in response to stress, or who automatically checks social media whenever bored, is following a cue-routine-reward loop that has become deeply embedded. Simply "deciding" to stop is usually insufficient, because the decision is made in the prefrontal cortex — the rational, planning part of the brain — while the habit lives in the basal ganglia, which operates largely below conscious awareness.

Research suggests that the most effective strategy for changing habits is not elimination but substitution. Rather than attempting to suppress an ingrained routine, replacing it with an alternative that provides a similar reward tends to be far more successful. A person trying to quit smoking might find that a brief walk or chewing gum satisfies the same need for stimulation that the cigarette once did.

Equally important is the design of one's environment. Habits are powerfully context-dependent. Rearranging your surroundings to remove cues associated with unwanted behaviors — or to make desirable behaviors more convenient — can nudge automatic systems in a healthier direction without requiring constant willpower.

Understanding habits scientifically does not make change easy. But it does make it more approachable — and considerably less mysterious.`,
  },
  {
    id: 14, level: 4,
    title: "The City That Sleeps Under the Sea",
    emoji: "🏛️",
    genre: "歴史",
    words: 340,
    desc: "海底に眠る古代都市ヘラクレイオンの歴史的記述。複雑な時制と受動態。",
    text: `Beneath the waters of Egypt's Abu Qir Bay, approximately seven metres below the surface, lies one of the ancient world's most magnificent cities. Heracleion — known to the ancient Greeks as Thonis — was once a thriving port city at the mouth of the Nile. For centuries, scholars knew of its existence only through fragmentary texts and mythology. Then, in the year 2000, an underwater archaeologist named Franck Goddio changed everything.

Goddio's team, working with the European Institute for Underwater Archaeology, discovered the submerged ruins after years of systematic survey. What they found exceeded all expectations: colossal statues of pharaohs and gods, hundreds of anchors and shipwrecks, golden jewellery, coins, and inscribed tablets that confirmed the city's identity beyond doubt.

At its peak, around the fourth and fifth centuries BC, Heracleion served as the obligatory port of entry for all ships arriving in Egypt from the Greek world. Taxes were levied here, and religious pilgrims passed through on their way to the sacred temples further inland. The city was home to a great temple dedicated to the god Amun-Gereb, whose importance rivalled that of the more famous temples at Karnak.

Why did the city sink? Geologists and archaeologists believe that the combination of rising sea levels and the gradual liquefaction of the soft Nile Delta sediments — a process accelerated by major floods and earthquakes — caused much of the city to slide into the bay over several centuries. The process was not a single dramatic catastrophe but a slow, inevitable submersion.

Today, the site is one of the richest underwater archaeological discoveries in history. Artefacts from Heracleion now grace the world's major museums, yet the majority of the city remains unexcavated — a vast, silent archive preserved under the sea, still waiting to be read.`,
  },
  {
    id: 15, level: 4,
    title: "What Is Intelligence?",
    emoji: "💡",
    genre: "哲学・科学",
    words: 350,
    desc: "知性とは何かを問う哲学的・科学的エッセイ。抽象的概念の議論と対比的論述。",
    text: `For most of human history, intelligence was considered a single, unified capacity — a general mental power that enabled individuals to reason, learn, and solve problems across all domains. This view seemed intuitive: people who excel in mathematics also tend to perform well in verbal tasks, and vice versa. Psychologists called this general factor "g."

In the 1980s, however, the psychologist Howard Gardner proposed a radical alternative. He argued that human intelligence is not one thing but many — a collection of distinct abilities, including linguistic, logical-mathematical, musical, spatial, bodily-kinaesthetic, interpersonal, and intrapersonal intelligences. A person who struggles with algebra might be a gifted composer; someone who finds reading difficult might possess extraordinary physical coordination and body awareness.

Gardner's theory proved enormously popular in educational circles, inspiring curricula designed to honor diverse strengths rather than privileging a narrow academic standard. Critics, however, pointed out that Gardner's categories lack a consistent definition of intelligence — some, they argued, are better described as talents or personality traits than forms of reasoning.

More recently, the rise of artificial intelligence has forced us to reconsider the concept from a different angle. Machines now outperform humans at chess, medical image analysis, language translation, and complex game-playing. Yet they fail conspicuously at tasks that three-year-old children handle with ease — understanding context, recognizing emotional nuance, navigating unpredictable environments. This gap suggests that human intelligence involves something that current AI cannot replicate: the integration of embodied experience, social understanding, and flexible common sense.

Perhaps the most honest answer to the question "What is intelligence?" is that it depends entirely on what you are trying to do. Intelligence is not a fixed quantity in a person's head but a relationship between a mind and its environment. The farmer navigating a drought, the surgeon adapting mid-operation, and the poet searching for the right word are all exercising forms of intelligence — each indispensable in its own context.`,
  },
  {
    id: 16, level: 4,
    title: "The Power of Sleep",
    emoji: "🌙",
    genre: "科学・健康",
    words: 345,
    desc: "睡眠の科学的重要性を論じた説明文。大学入試頻出のトピックと語彙。",
    text: `In contemporary society, sleep is frequently treated as a luxury rather than a necessity — something to be sacrificed when deadlines loom or social schedules overflow. This attitude, increasingly common among students and professionals alike, may be one of the most consequential mistakes we make for our health.

Sleep is not a passive state. While the body rests, the brain is engaged in a cascade of essential processes. During deep sleep, the glymphatic system — a waste-clearance network unique to the brain — becomes highly active, flushing out metabolic byproducts that accumulate during waking hours. Among the substances cleared is amyloid-beta, a protein associated with Alzheimer's disease when it builds up in excess.

Memory consolidation is another critical function of sleep. Research by neuroscientist Matthew Walker and others has demonstrated that the sleeping brain actively replays and reorganizes information acquired during the day, transferring material from short-term storage in the hippocampus to longer-term networks in the cortex. Students who sleep after studying consistently outperform those who remain awake on subsequent tests of the same material.

The effects of sleep deprivation are swift and measurable. After just one night of poor sleep, reaction times slow, emotional regulation deteriorates, and the ability to focus on complex tasks declines significantly. Chronic sleep restriction — sleeping six hours or fewer per night over extended periods — produces cognitive impairments equivalent to going without sleep entirely for one to two days, yet most people in this state report feeling only "slightly tired."

The recommended duration for adults is seven to nine hours per night. For teenagers, whose brains are still developing, the recommendation rises to eight to ten hours.

Treating sleep as a non-negotiable investment, rather than a concession to weakness, is one of the highest-return decisions a student can make.`,
  },

  // ================================================================
  // LEVEL 5  (4 texts, ~400-450 words each)
  // ================================================================
  {
    id: 17, level: 5,
    title: "The Paradox of Choice",
    emoji: "🔀",
    genre: "社会・心理",
    words: 420,
    desc: "選択の多様化が幸福度を下げるパラドックスを論じる上級エッセイ。抽象論・対比・反論処理を含む。",
    text: `We live in an era defined by an unprecedented proliferation of options. Supermarkets stock dozens of varieties of a single condiment. Streaming platforms offer catalogues of tens of thousands of films and series. Career paths that once progressed along narrow, predictable tracks now branch endlessly. By almost any measure, we have never had more freedom to shape our lives according to our own preferences. And yet, paradoxically, this abundance of choice appears to be making us less happy rather than more.

The psychologist Barry Schwartz, in his influential 2004 work The Paradox of Choice, argued that the expansion of choice has produced what he termed "the tyranny of abundance." When options multiply beyond a certain threshold, the psychological costs of decision-making begin to outweigh the benefits. The process of choosing itself becomes effortful and anxiety-inducing. We worry that we are not gathering enough information. We agonize over trade-offs. We experience what Schwartz calls "anticipatory regret" — imagining, before we have even decided, how we will feel if we choose badly.

The problem intensifies after the decision is made. When we choose from two options and feel dissatisfied, there is little room for counterfactual thinking. When we choose from fifty, the roads not taken multiply accordingly. Every attractive option we rejected becomes a potential source of regret. The standard of comparison against which we measure our satisfaction rises with the size of the choice set, making contentment ever harder to attain.

A distinction that proves important here is between what Schwartz terms "maximizers" and "satisficers." Maximizers approach decisions by searching exhaustively for the objectively best option. Satisficers seek an option that is "good enough" — one that meets an acceptable threshold, without claiming to be optimal. Research consistently finds that maximizers tend to make objectively better choices but report significantly lower satisfaction with them. The relentless pursuit of the best outcome leaves them perpetually vulnerable to regret.

It would be a mistake, however, to conclude from this that all choice is harmful. Political and social freedoms remain profoundly valuable, and the ability to shape one's life according to personal values is, under most conditions, a genuine good. The problem is not choice per se, but the cultural norm that equates more choice with more freedom, and more freedom with more happiness. That equation is demonstrably false.

The practical implication is counterintuitive but well-supported by evidence: voluntarily constraining your options — by deciding in advance not to consider more than a fixed number of alternatives, by adopting personal rules that remove certain decisions from deliberation entirely — tends to increase rather than diminish satisfaction. In a world that relentlessly expands the menu, the wiser strategy may be to close it.`,
  },
  {
    id: 18, level: 5,
    title: "On Solitude",
    emoji: "🌌",
    genre: "文学・哲学",
    words: 400,
    desc: "孤独をめぐる哲学的・文学的エッセイ。複雑な文構造と高度な語彙を含む。",
    text: `There is a distinction that our age appears systematically to neglect: the distinction between solitude and loneliness. They share the condition of being alone, yet they are separated by a vast experiential gulf. Loneliness is the pain of unwanted isolation — a hunger for connection that goes unsatisfied. Solitude, by contrast, is the deliberate and often pleasurable withdrawal from the social world into the company of one's own thoughts. To confuse the two is to misunderstand both, and the confusion carries consequences.

We inhabit a culture that is deeply uncomfortable with quietness. The proliferation of connected devices has ensured that silence, once a natural condition of private life, now requires active pursuit. The moment a person sits alone without stimulation, they are likely to reach instinctively for a screen. An experiment conducted by the social psychologist Timothy Wilson found that a majority of participants, when left alone in a room with no stimulation for fifteen minutes, preferred administering mild electric shocks to themselves over sitting quietly with their thoughts. We have, it seems, become genuinely frightened of our own minds.

This is a relatively recent development. Many of the most productive and reflective periods in intellectual and artistic history were sustained by conditions that would today be considered unbearably austere. Montaigne retired to a tower to write his essays. Darwin took long, solitary walks along his "thinking path." Thoreau spent two years in deliberate semi-isolation near Walden Pond. What these figures sought was not an absence of the world but a quality of attention that the world's demands made impossible — the sustained, uninterrupted engagement with a single thread of thought.

Neuroscience offers some support for this intuition. When the brain is disengaged from external tasks, it enters what researchers call the default mode network — a state of internally directed cognition associated with daydreaming, self-reflection, and the creative integration of disparate ideas. It is not idleness but a different form of work, one that the constant management of notifications and social obligations persistently interrupts.

None of this is to romanticize isolation or to discount the genuine suffering of those who experience involuntary loneliness. Human beings are, at their core, social creatures, and prolonged social deprivation is genuinely harmful. But between constant connectivity and harmful isolation lies a middle territory — the cultivated solitude of a walk taken without a destination, an evening spent with a book rather than a feed, a deliberate pause before replying — that the examined life has always recognized as necessary.

To learn to be alone, and to find in that aloneness something other than absence, may be one of the more quietly important skills of our time.`,
  },
  {
    id: 19, level: 5,
    title: "The Ethics of Artificial Intelligence",
    emoji: "🤖",
    genre: "科学・倫理",
    words: 440,
    desc: "AI倫理の主要論点を展開する上級論説文。対立する立場・反論・応答の構造を持つ。",
    text: `As artificial intelligence systems assume an increasingly consequential role in decisions that were once the exclusive province of human judgment — who receives a loan, whose medical scan is flagged for review, which job applications advance to interview — questions of ethics have moved from the periphery of technical discourse to its centre. The challenge is not merely to build systems that work, but to determine what it means for them to work well, and for whom.

The most widely discussed ethical concern is bias. Machine learning models are trained on historical data, and if that data encodes existing social inequities — as most real-world data does — the model will learn to reproduce and potentially amplify them. A hiring algorithm trained on decades of employment records from a predominantly male industry will, without deliberate correction, learn that maleness correlates with success and penalize female applicants accordingly. The mathematical objectivity of the model is, in such cases, a facade: it launders pre-existing discrimination into the language of statistical inference, making it harder, not easier, to challenge.

Defenders of algorithmic decision-making argue that human judgment is subject to equally serious, if less legible, biases. The hiring manager who favors candidates who remind them of themselves, the loan officer whose decisions correlate with an applicant's postcodes in ways that track racial geography — these biases operate quietly and are rarely audited. An algorithm, however flawed, can at least in principle be examined, corrected, and held to consistent standards across all cases. The demand for algorithmic fairness, on this view, should be read not as a counsel against automation but as a higher standard than we typically hold human decision-makers to.

A second, deeper concern involves accountability. When a human makes a decision that causes harm, responsibility can in principle be assigned. When an algorithm makes the same decision, the causal chain is distributed across the engineers who designed it, the organizations that deployed it, the legislators who failed to regulate it, and the training data that shaped it. No single party feels responsible, and none may be held liable. Philosophers and legal scholars have begun to describe this as the "problem of many hands" — a diffusion of responsibility so complete that it amounts to an absence of responsibility.

Addressing this problem requires not only technical solutions but institutional ones: regulatory frameworks that assign clear liability for algorithmic harm, mandatory transparency requirements, and mechanisms for meaningful contestation — the ability of those affected by algorithmic decisions to understand them, challenge them, and seek redress.

These are not merely technical questions. They are questions about the kind of society we wish to construct and the values we are prepared to encode into the systems that increasingly govern our lives. The ethical design of artificial intelligence is, at its root, a continuation of an old argument about power, fairness, and accountability — conducted, for the first time, in the language of code.`,
  },
  {
    id: 20, level: 5,
    title: "Language and Thought",
    emoji: "🗣️",
    genre: "言語学・哲学",
    words: 430,
    desc: "言語が思考を形成するかを問う言語学的エッセイ。サピア＝ウォーフ仮説を中心に論じる。",
    text: `Does the language you speak shape the way you think? This question, deceptively simple on the surface, has occupied linguists, psychologists, and philosophers for over a century, and the answers remain genuinely contested.

The strongest version of the claim — known as the Sapir-Whorf hypothesis, or linguistic determinism — holds that language determines thought entirely: that speakers of different languages inhabit fundamentally different cognitive worlds, unable to conceive of categories for which their language provides no words. In its most extreme form, this thesis implies that a language without a word for "blue" would render its speakers literally unable to perceive the color as distinct from neighboring hues.

Evidence for this strong version is scarce and largely discredited. Speakers of languages without a dedicated word for a particular concept can nonetheless perceive and reason about that concept when it is pointed out to them. Thought is not imprisoned within vocabulary.

The weaker version — linguistic relativity — makes the more defensible claim that language influences rather than determines cognition: that the categories, distinctions, and patterns embedded in one's native language create habitual tendencies of attention and perception. This version has attracted considerably more empirical support.

Research by Lera Boroditsky and colleagues has demonstrated measurable differences in how speakers of different languages reason about time, space, color, and causation. English speakers tend to conceptualize time horizontally — as a line running from left to right. Mandarin speakers more often conceptualize it vertically. The Kuuk Thaayorre people of Australia, whose language uses cardinal directions rather than egocentric terms like "left" and "right," develop a remarkably precise sense of spatial orientation compared to speakers of most other languages.

These findings do not suggest that language locks us into particular modes of thought — bilingual individuals navigate between conceptual frameworks fluidly, and people can be trained to think in ways that differ from their native linguistic habits. What they suggest, rather, is that language is not merely a neutral vehicle for pre-formed thoughts but an active participant in cognitive life, quietly shaping the grooves along which attention and memory flow most naturally.

The practical implications are significant. If the language of an institution — its technical vocabulary, its metaphors, its default framings — shapes how its members perceive problems and conceive solutions, then changing that language is not merely a cosmetic act. It is, in a modest but real sense, a form of cognitive engineering.`,
  },


  // ================================================================
  // LEVEL 1 — 追加テキスト (id 21-23)
  // ================================================================
  {
    id: 21, level: 1,
    title: "At the Zoo",
    emoji: "🦁",
    genre: "日常",
    words: 325,
    desc: "動物園での一日。動物の名前と形容詞の表現が中心。",
    text: `Today I went to the zoo with my class. It was a school trip. We went by bus. The bus ride took about forty minutes. My friend Kota sat next to me. We played games on the way.

When we arrived, I could hear the animals. Some were loud. Some were quiet. The zoo was very big. Our teacher gave us a map. "Stay together," she said.

First, we went to see the lions. There were two lions — one male and one female. The male lion had a big brown mane around his face. He was lying under a tree and sleeping. He looked very peaceful. But when he opened one eye and looked at us, I felt a little scared.

Next, we went to the elephants. Elephants are huge! I did not know they were so big. They have long noses called trunks. One elephant used its trunk to pick up food from the ground. Another one was spraying water on its back to cool down. That was very funny. Everyone laughed.

After the elephants, we went to see the penguins. I love penguins. They are black and white, and they walk in a funny, wobbly way. There were about twenty penguins. Some were swimming fast in the water. They are much faster in water than on land. I watched them for a long time.

Then we sat near the monkey area and ate lunch. The monkeys were very noisy. They jumped from tree to tree and called out loudly. One monkey came very close to the fence and looked at my sandwich. I held it tightly.

In the afternoon, we saw zebras, giraffes, and flamingos. The giraffes were my favorite. They are so tall. Their necks are longer than I am. They ate leaves from the tops of trees. I watched one giraffe for several minutes. It moved slowly and looked very calm.

At four o'clock, we got back on the bus. I was tired, but happy. I wrote in my notebook about all the animals I saw.

I want to come back to the zoo again. Next time, I want to see the gorillas.`,
  },
  {
    id: 22, level: 1,
    title: "My Room",
    emoji: "🛏️",
    genre: "日常",
    words: 318,
    desc: "自分の部屋を紹介する短文。there is/are 構文と位置表現が中心。",
    text: `My room is small, but I love it. It is my own special place. When I close the door, the world outside feels far away.

There is a bed near the window. It is not a big bed, but it is very comfortable. My bed has a blue blanket and two white pillows. At night, I can hear the sound of the wind outside. It helps me fall asleep.

There is a desk next to the bed. I do my homework at the desk every evening. On the desk, there is a lamp with a round yellow shade. When I turn it on at night, it makes the room feel warm and cozy. There is also a pencil holder, a small notebook, and a glass of water. I always have water when I study.

On the wall above the desk, there are two posters. One poster is a famous soccer player. He is running and kicking a ball. I like that poster because I want to be a good soccer player too. The other poster is a map of the world. I love looking at it. I find Japan, then I look for other countries. One day, I want to visit ten different countries.

In the corner of my room, there is a bookshelf. It has three shelves. I have about fifty books. Some are manga. Some are adventure stories. My favorite book is about a boy who travels to the center of the Earth. I have read it three times.

Under my bed, there is a flat plastic box. Inside the box, I keep my old toys — small cars, building blocks, and a robot I made with my father when I was six. I do not play with them now, but I do not want to throw them away. They make me remember happy times.

On my windowsill, there is a small plant. It is a cactus. Cacti do not need much water. I forget to water it sometimes, but it is still alive. I think it is very strong.

This is my room. It is small and a little messy, but it is mine.

It is my favorite place in the world.`,
  },
  {
    id: 23, level: 1,
    title: "A Snowy Day",
    emoji: "❄️",
    genre: "日常",
    words: 340,
    desc: "雪の日の楽しい体験。can/cannot の表現と感情描写。",
    text: `This morning I woke up and looked out the window. I could not believe my eyes. Everything was white! The garden was white. The street was white. The rooftops were white. It snowed last night while I was sleeping.

"Snow!" I shouted. I ran to my brother's room and knocked on the door. "Kei! Wake up! It snowed!"

I heard him jump out of bed.

We ate breakfast very fast. Then we put on our warm clothes. I wore my thick coat, my red scarf, my gloves, and my boots. My brother wore his green hat. We went outside together.

The snow was deep. When I stepped in it, my foot went down a long way. The snow made a crunching sound. I love that sound.

First, we made a snowman. We started with a small ball of snow. Then we rolled it along the ground. It got bigger and bigger. We made another ball for the head. We put the head on top of the big round body. Then we looked for things to use for his face. We found a carrot for the nose. We used two dark buttons for the eyes. My brother found an old scarf in the garage. We put it around the snowman's neck. And we put a blue hat on his head.

He looked wonderful. We called him "Mr. Shiro."

After that, we had a snowball fight. I made a big snowball and threw it at my brother. It hit him on the shoulder. He laughed and threw one back. It hit my hat. Soon, snowballs were flying everywhere. I was laughing so much that I could not throw straight.

After thirty minutes, my hands were cold and wet. My brother's nose was red. We went inside.

My mother made hot chocolate for us. We sat at the kitchen table and held our warm cups. Outside, I could see Mr. Shiro standing in the garden. The snow was still falling softly.

"Can we make a snow woman tomorrow?" I asked.

My brother smiled. "Yes. And a snow cat."

I love snow days. They make everything feel new.`,
  },

  // ================================================================
  // LEVEL 2 — 追加テキスト (id 24-26)
  // ================================================================
  {
    id: 24, level: 2,
    title: "The New Student",
    emoji: "🏫",
    genre: "物語",
    words: 445,
    desc: "転校生を迎える学校の物語。過去形と会話表現が豊富。",
    text: `On a Tuesday morning in April, a new student walked into our classroom. Her name was Sofia, and she had just moved to Japan from Brazil with her family. Her father had a new job in our city.

She stood at the front of the room while our teacher, Mr. Tanaka, introduced her. Sofia was tall, with long dark hair and large brown eyes. She was wearing a light blue sweater. She looked a little nervous. Her hands were clasped in front of her, and she was looking down at the floor.

Mr. Tanaka said her name — "Sofia Costa" — and asked her to introduce herself. She looked up and spoke in clear, quiet Japanese. "My name is Sofia. I came from Brazil. I like drawing and swimming. Please take care of me."

Everyone clapped politely. I thought her Japanese was very good.

Mr. Tanaka asked Sofia to sit in the empty seat next to me. As she sat down, I turned to her and whispered, "Hi. I'm Mei. Welcome."

She looked at me quickly and gave a small smile. "Thank you," she whispered back.

During the morning, I noticed Sofia watching the board carefully and writing notes in a small notebook. She raised her hand once to answer a question in math class. She got it right. A few students looked impressed.

At lunch, I looked around the cafeteria for her. I found her sitting alone at a table near the window. She had a bento box open in front of her, but she was not eating. She was looking out the window with a quiet, far-away expression.

I picked up my tray and walked over to her.

"Can I sit here?" I asked.

She looked up, and I saw a flash of surprise in her eyes. Then she smiled. "Yes, please," she said softly.

I sat down, and we started to eat. At first it was a little quiet. I was not sure what to say. But then I noticed a small sketchbook peeking out from her bag.

"Do you draw?" I asked.

Her face changed immediately. She reached into her bag, took out the sketchbook, and placed it on the table. "A little," she said.

I opened the first page and caught my breath. The drawings were wonderful — full of color and movement. There were people on crowded city streets, birds over a beach, a girl laughing with her arms wide open.

"These are amazing," I said honestly.

Sofia looked at me carefully, as if she was checking whether I meant it. I did. Then she smiled a bigger, warmer smile than before.

By the end of the day, we had exchanged numbers and made plans to walk to the park after school.

It is funny, I thought. This morning she was a stranger. Now she feels like a friend.

Sometimes a new friendship begins with just one empty seat and one question.`,
  },
  {
    id: 25, level: 2,
    title: "My Grandfather's Garden",
    emoji: "🌻",
    genre: "エッセイ",
    words: 420,
    desc: "祖父の庭についての温かいエッセイ。過去形と感情表現が中心。",
    text: `Every summer when I was young, I spent two weeks at my grandfather's house in the countryside. There were many things I loved about those visits — the cool nights, the sound of the river, the smell of my grandmother's cooking. But the thing I remember most is my grandfather's garden.

It was not a neat or perfect garden. The paths between the beds were a little uneven, and some of the plants grew in wild, unexpected directions. Vines crept up the fence and over the gate. Flowers appeared in places where nobody had planted them. But it was full of life and color. There were rows of tomatoes, cucumbers, eggplants, and peppers. There were sunflowers as tall as my grandfather. And there were herbs and small plants I did not know the names of, which he used in cooking or tea.

Bees moved from flower to flower all morning long. Butterflies rested on the warm stones. In the evenings, fireflies appeared at the edge of the garden near the trees.

My grandfather woke up at five o'clock every morning to water the garden before the summer sun got too hot. He moved slowly through the rows, talking to the plants in a low, soft voice. Not in words exactly — more like humming, or gentle sounds of encouragement. When I asked him why he talked to his plants, he looked at me seriously. "Because they are alive," he said. "And living things need to feel noticed."

I thought about that for a long time.

One summer, when I was nine, my grandfather gave me my own small patch of soil at the end of the garden. It was not very big — maybe one meter by one meter — but it was mine. "Choose something to grow," he said.

I chose strawberries, because I loved eating them.

He showed me how to prepare the soil, how deep to push each seed, how far apart they needed to be, and how much water to give them. "Not too much," he said. "Roots need water, but they also need air."

I checked my patch every single day. I measured the soil with my finger to see if it was dry. I pulled out any weeds that appeared. I waited.

Weeks passed. Small leaves appeared. Then more leaves. Then, in the last few days of my visit, I saw it — one tiny, bright red strawberry.

I was so excited that I shouted. My grandmother came running out of the kitchen, still holding her spoon, thinking something was wrong.

We picked three strawberries that afternoon — one for me, one for my grandfather, one for my grandmother. We sat together on the step outside the kitchen door and ate them slowly.

They were small. A little tart. Not perfect.

But they were the best strawberries I have ever tasted in my life.`,
  },
  {
    id: 26, level: 2,
    title: "Smartphones: Good or Bad?",
    emoji: "📱",
    genre: "意見文",
    words: 410,
    desc: "スマートフォンの良い点・悪い点を述べた短い意見文。対比表現が中心。",
    text: `Almost every student today has a smartphone. We use them every day — to message friends, watch videos, listen to music, and find information. For many of us, it is hard to imagine life without one. But are smartphones really good for us? I think the answer is: it depends.

Let me start with the positive side.

Smartphones help us communicate quickly and easily. If I forget my homework or have a question, I can message a classmate in seconds. If I am late coming home, I can call my mother right away. Staying in touch with family and friends is much easier than it was in the past.

Smartphones are also powerful learning tools. I can look up any word I do not know in English or Japanese. I can watch videos that explain difficult topics in math or science. I can study with apps, listen to podcasts in foreign languages, and read books. If I use my phone carefully, it can help me learn more and study more effectively.

Maps and navigation are another big advantage. When I go somewhere new, I never get lost. I can find any restaurant, station, or school with just a few taps.

However, smartphones also cause serious problems.

The biggest problem, in my opinion, is time. Many students — including me, sometimes — spend too much time looking at their phones. Social media, short videos, and games are designed to keep our attention for as long as possible. Before we know it, one hour has passed, and we have not studied or read or spoken to anyone in our family.

Another problem is sleep. Many students check their phones right before bed or even in the middle of the night. The bright screen makes it hard to fall asleep, and reading messages or watching videos keeps our brains active when they should be resting.

There is also the problem of concentration. When we are doing homework and our phone makes a notification sound, it is very difficult not to check it. Studies show that just having a phone on our desk — even if we do not touch it — can reduce our ability to focus.

So, are smartphones good or bad? I believe they are tools, like a knife or a car. A knife can prepare food or cause harm. A car can take you somewhere or cause an accident. The tool itself is not the problem. The way we use it is.

If we use our smartphones with clear rules — for example, no phones during meals, no phones after ten o'clock, no phones in class — they become helpful and valuable. If we use them without any rules, they can waste our time and harm our health.

The key, I believe, is not to remove smartphones from our lives, but to control them before they control us.`,
  },

  // ================================================================
  // LEVEL 3 — 追加テキスト (id 27-29)
  // ================================================================
  {
    id: 27, level: 3,
    title: "The Science of Music",
    emoji: "🎵",
    genre: "科学",
    words: 275,
    desc: "音楽が脳に与える影響を説明する説明文。科学的論述と受動態・関係詞節が豊富。",
    text: `Music is one of the most universal human experiences. Every known culture in history has created and performed music in some form. But why does music affect us so deeply? Increasingly, neuroscience is offering some answers.

When we listen to music, multiple regions of the brain become active simultaneously. The auditory cortex processes the sounds themselves, while the cerebellum — traditionally associated with motor control — responds to rhythm and timing. The limbic system, which governs emotions, lights up in response to melodies we find moving or beautiful. This explains why a piece of music can bring tears to our eyes or energy to our limbs.

One of the most intriguing findings concerns what researchers call "chills" — the goosebumps or shivers that many people experience when listening to particularly powerful music. Studies have shown that these chills involve a release of dopamine, the same neurotransmitter associated with pleasure from food, social connection, and other rewards. Not everyone experiences musical chills, and those who do tend to score higher on measures of openness to experience.

Music also demonstrates remarkable power in therapeutic settings. It has been used to reduce anxiety before medical procedures, to help stroke patients regain speech, and to improve mood and cognitive function in people with dementia. Some researchers believe that musical training in childhood can strengthen neural connections that benefit language processing and mathematical reasoning throughout life.

Whether we play an instrument, sing, or simply listen, music engages us in ways that few other human activities can match — reaching parts of the brain, and perhaps the self, that words alone cannot.`,
  },
  {
    id: 28, level: 3,
    title: "Fast Fashion and the Environment",
    emoji: "👗",
    genre: "環境・社会",
    words: 282,
    desc: "ファストファッションの環境問題を論じた説明文。原因・影響・解決策の構成。",
    text: `Walk into almost any clothing store today, and you will find shelves packed with new styles at surprisingly low prices. This is the world of fast fashion — an industry built on producing large quantities of trendy clothing quickly and cheaply. While it makes fashion accessible to more people, fast fashion carries a heavy environmental cost that is only beginning to receive the attention it deserves.

The production of clothing consumes enormous amounts of water. It takes approximately 2,700 liters of water to produce a single cotton T-shirt — enough drinking water for one person for over two years. Dyeing fabrics also generates chemical waste, much of which is discharged into rivers in developing countries, polluting water supplies for local communities.

Beyond production, the problem of disposal is equally serious. Because fast fashion items are designed to be worn briefly and replaced, vast quantities of clothing end up in landfills. It is estimated that the equivalent of one rubbish truck of textiles is discarded every second globally. Many synthetic fabrics, such as polyester, do not decompose; they persist in the environment for centuries while slowly releasing microplastics.

There are, however, encouraging signs of change. A growing secondhand clothing market — driven by platforms that allow people to buy and sell used items — is extending the life cycle of garments. Some clothing brands are experimenting with rental models and take-back programs. Consumers, particularly younger ones, are increasingly asking questions about where their clothes come from and what impact they have.

The choices we make when we shop are small, but collectively they are powerful.`,
  },
  {
    id: 29, level: 3,
    title: "The Boy Who Counted Stars",
    emoji: "⭐",
    genre: "物語",
    words: 290,
    desc: "夢を諦めない少年の短編小説。心情描写と情景描写のバランスが高い。",
    text: `When Haruki was nine years old, he told his teacher he wanted to be an astronomer. His teacher smiled and said that was a wonderful goal. When he told his father, his father looked at him and said nothing.

That silence stayed with Haruki longer than any words might have.

He grew up in a small fishing village where the sky at night was extraordinary — unpolluted by city lights, it spread from horizon to horizon in a dense, glittering field. Haruki knew the names of the major constellations before he was eight. He could point out planets, spot the faint smear of a galaxy cluster, and predict meteor showers weeks in advance.

But the village had no high school with a science program worth speaking of. The nearest university was three hours away. His family needed him to help with the fishing business during the summer months. The practical world pressed in on his dream from every direction.

At sixteen, Haruki found a website run by a university astronomy department that allowed amateur observers to contribute data on variable stars — stars whose brightness changes over time. He began submitting observations each clear night, writing careful notes and uploading measurements.

Three years later, he received an email from a researcher at the university. One of his observations had contributed to the confirmation of a previously unclassified variable star. The researcher wanted to credit him in a published paper.

Haruki sat in the dark of his bedroom, the screen glowing in front of him, and felt something settle quietly into place.

The sky, it turned out, had been listening.`,
  },

  // ================================================================
  // LEVEL 4 — 追加テキスト (id 30-32)
  // ================================================================
  {
    id: 30, level: 4,
    title: "The Virtue of Failure",
    emoji: "🏆",
    genre: "エッセイ",
    words: 348,
    desc: "失敗の価値を論じた上級エッセイ。逆説的論述・具体例・抽象化のサイクル。",
    text: `In most educational systems, failure is treated as an outcome to be avoided — a signal of inadequacy that students learn, from an early age, to fear. Grades, rankings, and competitive examinations reinforce a culture in which the appearance of competence often matters more than the process of genuine learning. Yet a growing body of research in psychology and education suggests that this attitude toward failure is not only unhelpful but actively counterproductive.

The distinction that researchers draw is between what Carol Dweck of Stanford University calls a "fixed mindset" and a "growth mindset." Individuals with a fixed mindset interpret difficulty and failure as evidence of limited ability — something fixed and unchangeable. As a result, they tend to avoid challenging tasks in order to protect their self-image. Those with a growth mindset, by contrast, understand that ability develops through effort and experience. They interpret failure not as a verdict but as information — a signal that a different strategy is needed.

The evidence for the importance of productive failure extends well beyond the classroom. Thomas Edison's famous remark that he had not failed but had instead found ten thousand ways that did not work reflects an approach to experimentation that is common among highly creative and productive individuals. Post-mortems conducted after failed projects in engineering and business organizations consistently reveal that the most valuable learning often emerges precisely from the analysis of what went wrong.

This does not mean, of course, that failure is inherently valuable regardless of context. Reckless risk-taking that puts others in danger cannot be redeemed by an appeal to the learning it produces. What matters is the relationship to failure — whether it prompts reflection and adjustment, or whether it is dismissed or allowed to compound.

Teaching students to analyze their mistakes with curiosity rather than shame, and to distinguish between effort and outcome, may be among the most durable contributions an education can make.`,
  },
  {
    id: 31, level: 4,
    title: "Urban Green Spaces",
    emoji: "🌳",
    genre: "社会・環境",
    words: 340,
    desc: "都市における緑地の役割を論じた説明文。研究引用と論拠の展開。",
    text: `As cities around the world grow denser and more populated, the question of how to design livable urban environments has become increasingly urgent. Among the many features that distinguish pleasant cities from oppressive ones, access to green space — parks, tree-lined streets, community gardens, and riverside paths — consistently emerges as one of the most significant.

The benefits of urban greenery extend well beyond aesthetics. Epidemiological studies have found consistent associations between living near parks or areas with abundant tree cover and improved mental health outcomes. Researchers at the University of Exeter tracked the well-being of thousands of individuals over time and found that moving to areas with more green space produced measurable improvements in mental health that persisted for years — effects that could not be explained simply by income or other lifestyle factors.

Green spaces also perform essential ecological services in urban environments. Trees reduce ambient temperatures through shade and evapotranspiration — a particularly important function as cities face increasing heat stress under climate change. Urban forests absorb air pollutants, capture stormwater runoff, and provide habitat for birds and insects. A single mature urban tree has been estimated to deliver ecosystem services worth thousands of dollars annually.

Despite this evidence, green spaces are frequently among the first amenities to be reduced when cities face budget pressures or development demands. The economic value of green infrastructure tends to be distributed and long-term, making it politically harder to defend than a new road or building whose benefits are immediate and visible.

Increasingly, urban planners and public health researchers are arguing for frameworks that formally quantify the value of green space, making the case for its protection in terms that infrastructure budgeting processes can recognize. The health of a city's residents, the evidence suggests, is inseparable from the health of its trees.`,
  },
  {
    id: 32, level: 4,
    title: "The Age of Distraction",
    emoji: "📵",
    genre: "社会・テクノロジー",
    words: 352,
    desc: "情報過多と注意力の関係を論じたエッセイ。現代社会批評と研究引用を含む。",
    text: `There is a widespread sense, articulated in countless conversations and confirmed by substantial research, that the ability to focus is becoming harder to sustain. Attention spans, we are frequently told, are shrinking. Whether this is precisely true is debated — the frequently cited claim that humans now have shorter attention spans than goldfish is not supported by credible evidence — but the underlying concern points toward something real.

The digital environment in which most people now spend the majority of their waking hours is specifically engineered to capture and redirect attention. Notification systems interrupt work at irregular intervals — a pattern that behavioral psychologists recognize as particularly effective at generating habitual checking behavior. Social media feeds are designed to be bottomless: there is always more content to see, always a reason not to stop scrolling. The engineers who design these systems are often explicit about their goal: maximizing what the industry calls "engagement," which means, in practice, minimizing the moments in which a user's attention might wander elsewhere.

The consequences are not trivial. Cognitive scientists have found that task-switching — moving attention between different activities — carries a "switching cost." Each transition requires the brain to disengage from one context and reorient to another, a process that takes time and depletes executive resources. People who are frequently interrupted report not only lower productivity but higher levels of stress and frustration, even when the interruptions come from themselves.

Research by Gloria Mark at the University of California found that after a digital interruption, it takes an average of twenty-three minutes to return to the original task fully. Given how frequently many workers check email or messaging applications, a significant portion of the working day may be consumed simply in recovering from interruptions.

Recovering the capacity for sustained attention may require deliberate effort — treating focus as a skill to be practiced, not a natural state to be assumed.`,
  },

  // ================================================================
  // LEVEL 5 — 追加テキスト (id 33-35)
  // ================================================================
  {
    id: 33, level: 5,
    title: "The Tragedy of the Commons",
    emoji: "🌾",
    genre: "経済・社会",
    words: 425,
    desc: "コモンズの悲劇を論じる上級論説文。経済学・ゲーム理論・政策の論点を展開。",
    text: `In 1968, the ecologist Garrett Hardin published an essay in the journal Science that introduced one of the most influential — and most debated — concepts in environmental and economic thought. The tragedy of the commons, as Hardin described it, arises whenever individuals, acting independently and rationally in their own self-interest, collectively deplete a shared resource, even when it is in no one's long-term interest for this to occur.

Hardin's original illustration was a shared pasture. If each herder is free to add animals to the commons without restriction, it is rational for each individual to add as many animals as possible — since they capture the full benefit of each additional animal while the cost of overgrazing is distributed across all users. Each individual following this logic contributes to the eventual destruction of the pasture, producing an outcome that is bad for everyone, including themselves.

The tragedy of the commons has since been applied to an enormous range of collective action problems: overfishing of shared ocean stocks, the emission of greenhouse gases into the atmosphere, the overuse of shared groundwater aquifers, and the congestion of public roads. In each case, the structure of individual incentives points toward a collectively disastrous outcome.

Hardin's proposed solution was stark: either privatize the commons or impose coercive state regulation. Both approaches have been widely implemented, with mixed results. Privatization can internalize environmental costs but may exclude poorer stakeholders from resources they depend upon. State regulation requires effective institutions and enforcement capacity that many governments lack.

The most important challenge to Hardin came from the political economist Elinor Ostrom, who won the Nobel Prize in Economics in 2009. Through decades of fieldwork across multiple continents, Ostrom documented numerous cases of communities successfully managing common resources over long periods without either privatization or government control. Swiss alpine meadows, Japanese fishing villages, and Spanish irrigation communities had all developed sophisticated local institutions — clear membership rules, monitoring systems, and graduated sanctions — that prevented the tragedy Hardin considered inevitable.

Ostrom's work demonstrated that the tragedy of the commons is not a law of nature but a consequence of specific institutional arrangements. When communities can communicate, establish shared norms, and hold one another accountable, collective rationality can overcome individual self-interest. The conditions under which this succeeds, and those under which it fails, remain among the most important questions in the governance of our shared world.`,
  },
  {
    id: 34, level: 5,
    title: "What We Owe the Future",
    emoji: "🌍",
    genre: "哲学・倫理",
    words: 435,
    desc: "将来世代への道徳的義務を論じる上級哲学エッセイ。功利主義・反論・応答の構造。",
    text: `Moral philosophy has, for most of its history, concerned itself primarily with obligations to people who currently exist — to those we can interact with, affect, and be affected by. Yet the decisions being made today will shape the conditions of life for generations who will exist far into the future: the energy infrastructure we build, the carbon we emit, the institutions we strengthen or erode, the knowledge we preserve or allow to be lost. If those future people matter morally — and it is difficult to articulate a principled reason why they should not — then our obligations to them may be far more demanding than ordinary moral thinking acknowledges.

The philosopher William MacAskill, in his recent work on what he terms "longtermism," argues that the expected size of the future may be astronomically large. If civilization persists for millions of years, vastly more people will live in the future than have ever lived in the past or live today. Even if future individuals receive substantially less moral weight than present ones — a position that most ethical frameworks would need to justify carefully — the sheer number of future people means that small improvements in the probability of long-term flourishing could have greater moral significance than almost any action taken to benefit those currently alive.

Critics of this position raise several important objections. One concerns the problem of moral uncertainty across long time horizons: our ability to predict the consequences of our actions degrades rapidly as the time horizon extends, making it difficult to know which interventions genuinely improve long-run outcomes versus those that simply feel significant. Another objection is that longtermism risks diverting moral attention and resources from urgent, tractable present-day suffering — poverty, disease, conflict — in favor of speculative future benefits.

A third challenge is what philosophers call the "non-identity problem." Future individuals who will exist depend on the specific choices we make now: alter those choices, and different people come into existence. A future person cannot coherently claim to have been harmed by our decisions if those very decisions were causally necessary for their existence. This complicates any account of intergenerational justice that relies on the language of harm to identifiable individuals.

Yet even granting these difficulties, the intuition that we bear some responsibility toward the future seems difficult to extinguish entirely. The question is not whether future generations matter, but how to reason carefully about obligations whose objects are uncertain, distant, and in some sense not yet real. That question, once asked, refuses to be set aside.`,
  },
  {
    id: 35, level: 5,
    title: "The Unreliable Narrator",
    emoji: "📖",
    genre: "文学批評",
    words: 420,
    desc: "信頼できない語り手という文学的技法を論じる上級エッセイ。文学例・認識論・読者論を含む。",
    text: `Among the most sophisticated techniques available to the novelist is the unreliable narrator: a first-person voice whose account of events cannot be taken at face value, whose perceptions are distorted by self-interest, psychological limitation, or deliberate concealment. When deployed with skill, this device does more than create dramatic irony. It implicates the reader in an epistemological problem — how do we know what we know, and how much of what we believe about others is a projection of our own unexamined assumptions?

The term was introduced by the literary critic Wayne Booth in his 1961 work The Rhetoric of Fiction, though the technique itself is far older. The narrators of Henry James's The Turn of the Screw and Kazuo Ishiguro's The Remains of the Day are compelling precisely because we cannot be entirely certain whether the ghosts the governess sees are real or hallucinated, or whether Stevens the butler's account of his devoted service represents dignified loyalty or a life of tragic self-deception. In each case, the gap between what the narrator tells us and what we suspect to be true becomes the true subject of the novel.

What makes unreliable narration philosophically interesting is what it implies about the act of reading itself. A reliable narrator establishes a stable contract with the reader: here is what happened, here is how to feel about it. An unreliable narrator disrupts this contract. The reader is forced to read against the grain of the text — attending not only to what is said but to what is conspicuously omitted, what contradictions surface, what emotional investments appear to distort judgment.

This reading posture is not merely a literary exercise. It mirrors the kind of interpretive work we perform constantly in daily life, navigating accounts that are colored by perspective, motivated reasoning, and the deeply human tendency to cast ourselves as the protagonist of a story in which our choices are justified. We are all, to varying degrees, unreliable narrators of our own lives.

Literature that foregrounds this unreliability does not simply entertain. It trains a kind of readerly skepticism — an alertness to the gap between self-presentation and truth — that extends naturally beyond the page. In a world saturated with first-person accounts, advertised certainties, and performed sincerity, the habit of asking whose story this is and what it might be concealing is among the most valuable a reader can develop.`,
  },

];
