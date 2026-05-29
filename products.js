/**
 * products.js — Data produk terpusat untuk seluruh halaman Srupa Labs.
 *
 * CARA UPDATE:
 *   - Tambah poster baru: tambah object baru di array SRUPA_POSTERS
 *   - Ubah harga: edit di bagian SRUPA_PRICES
 *   - Data ini dipakai oleh index.html (marquee preview) dan katalog.html (grid + filter)
 *   - Jika Firestore aktif, data Firestore akan override array ini otomatis
 *
 * FORMAT POSTER:
 *   id       — nomor unik (integer)
 *   title    — nama desain
 *   desc     — deskripsi singkat untuk modal katalog
 *   tags     — array kategori: bauhaus|street|typografi|peta|minimalis|abstract|motivasi|budaya|popart|vintage|dark
 *   badge    — '' | 'hot' | 'new' | 'ltd'
 *   bg       — warna background placeholder (hex)
 *   fgDark   — true jika teks placeholder harus putih
 *   label    — teks besar placeholder
 *   sub      — teks kecil placeholder
 *   img      — path gambar relatif dari root (contoh: 'images/1. Urban Mask Portrait.webp')
 *   order    — urutan tampil (opsional, default 99)
 */

window.SRUPA_POSTERS = [
  {id:1, title:'Urban Mask Portrait',         desc:'Potret urban dengan topeng — bold, misterius, dan punya karakter kuat. Cocok jadi statement piece.',         tags:['street','abstract'],    badge:'hot', bg:'#1A1A1A', fgDark:true,  label:'URBAN', sub:'MASK',    img:'images/1. Urban Mask Portrait.webp',              order:1},
  {id:2, title:'Vintage Racing Street Culture',desc:'Nuansa street racing era 70-an yang raw dan authentic. Untuk ruangan yang punya kepribadian.',              tags:['street','vintage'],     badge:'hot', bg:'#2B2B2B', fgDark:true,  label:'VTG',   sub:'RACE',    img:'images/2. Vintage Racing Street Culture.webp',    order:2},
  {id:3, title:'Peace Hand Pop Art',           desc:'Ikon tangan peace dalam estetika pop art yang vivid. Playful, colorful, dan penuh energi positif.',         tags:['popart','street'],      badge:'new', bg:'#E8E0D2', fgDark:false, label:'POP',   sub:'ART',     img:'images/3. Peace Hand Pop Art.webp',               order:3},
  {id:4, title:'Keep Going Motivation',        desc:'Tipografi motivasional yang kuat. Pengingat harian yang elegan untuk ruang kerja atau kamar.',              tags:['typografi','motivasi'], badge:'',    bg:'#F0EBE3', fgDark:false, label:'KEEP',  sub:'GOING',   img:'images/4. Keep Going Motivation.webp',            order:4},
  {id:5, title:'Metal Hand Gesture',           desc:'Gesture tangan metal yang ikonik — raw, edgy, dan berkarakter kuat untuk ruang personal.',                  tags:['street','abstract'],    badge:'',    bg:'#1C1C1C', fgDark:true,  label:'MTL',   sub:'HAND',    img:'images/5. Metal Hand Gesture.webp',               order:5},
  {id:6, title:'Bauhaus Rising Sun',           desc:'Komposisi Bauhaus terinspirasi matahari terbit — geometris, bold, dan optimistik.',                         tags:['bauhaus'],              badge:'',    bg:'#E8C84A', fgDark:false, label:'BAUS',  sub:'SUN',     img:'images/7. Bauhaus Rising Sun.webp',               order:6},
  {id:7, title:'Eight Ball Minimal',           desc:'Bola biliar 8 dalam presentasi minimalis yang clean. Simpel tapi punya presence yang kuat.',                tags:['minimalis','dark'],     badge:'',    bg:'#111111', fgDark:true,  label:'8',     sub:'BALL',    img:'images/8. Eight Ball Minimal.webp',               order:7},
  {id:8, title:'Moist Typography',             desc:'Eksplorasi tipografi eksperimental dengan tekstur dan mood yang unik. Untuk ruangan yang berani.',           tags:['typografi'],            badge:'',    bg:'#D4E8E0', fgDark:false, label:'TYPE',  sub:'MOIST',   img:'images/9. Moist Typography.webp',                 order:8},
  {id:9, title:'Minesweeper',                  desc:'Nostalgia game klasik dalam format poster art. Unik, unexpected, dan pasti jadi conversation starter.',      tags:['abstract','popart'],    badge:'',    bg:'#C0C0C0', fgDark:false, label:'MINE',  sub:'SWEEP',   img:'images/10. Minesweeper.webp',                     order:9},
  {id:10,title:'Bandung City Map',             desc:'Peta kota Bandung dalam estetika minimalis yang bersih. Sempurna untuk warga atau pecinta Bandung.',         tags:['peta','minimalis'],     badge:'',    bg:'#EDE8E0', fgDark:false, label:'BDG',   sub:'MAP',     img:'images/11. Bandung City Map.webp',                order:10},
  {id:11,title:'Turn It On',                   desc:'Tipografi energetik yang memanggil aksi. Visual yang cocok untuk ruang produktif atau gym.',                 tags:['typografi','motivasi'], badge:'',    bg:'#F5F0E8', fgDark:false, label:'TURN',  sub:'IT ON',   img:'images/12. Turn It On.webp',                      order:11},
  {id:12,title:'Control Your World',           desc:'Pesan yang kuat dalam layout tipografi yang commanding. Untuk ruang yang butuh inspirasi.',                  tags:['typografi','motivasi'], badge:'',    bg:'#E8EFF5', fgDark:false, label:'CTRL',  sub:'WORLD',   img:'images/13. Control Your World.webp',              order:12},
  {id:13,title:'Mind Maze',                    desc:'Eksplorasi visual labirin psikologis yang menarik. Intriging dan penuh lapisan makna.',                      tags:['abstract'],             badge:'',    bg:'#2A2A2A', fgDark:true,  label:'MIND',  sub:'MAZE',    img:'images/14. Mind Maze.webp',                       order:13},
  {id:14,title:'Bauhaus Vertical Motion',      desc:'Dinamika vertikal dalam komposisi Bauhaus yang kuat. Memberi ilusi gerak dan energi.',                      tags:['bauhaus'],              badge:'',    bg:'#F5F0E8', fgDark:false, label:'BAUS',  sub:'VERT',    img:'images/15. Bauhaus Vertical Motion.webp',         order:14},
  {id:15,title:'Bauhaus Organic Blocks',       desc:'Blok-blok geometris dengan sentuhan organik. Balance sempurna antara struktur dan kebebasan.',              tags:['bauhaus'],              badge:'',    bg:'#E8F0E0', fgDark:false, label:'BAUS',  sub:'BLOK',    img:'images/16. Bauhaus Organic Blocks.webp',          order:15},
  {id:16,title:'Bauhaus Color Mosaic',         desc:'Mosaik warna Bauhaus yang vivid dan ritmis. Sumber energi visual untuk ruangan manapun.',                   tags:['bauhaus'],              badge:'',    bg:'#F8F0D8', fgDark:false, label:'BAUS',  sub:'MOSAIC',  img:'images/17. Bauhaus Color Mosaic.webp',            order:16},
  {id:17,title:'Bauhaus Linear Wave',          desc:'Gelombang linear yang flowing dan meditatif. Estetika Bauhaus yang tenang namun tegas.',                    tags:['bauhaus'],              badge:'',    bg:'#E8ECF5', fgDark:false, label:'BAUS',  sub:'WAVE',    img:'images/18. Bauhaus Linear Wave.webp',             order:17},
  {id:18,title:'Toy Soldier Defy Expectation', desc:'Soldadu mainan yang menantang ekspektasi — playful meets rebellious dalam satu frame.',                      tags:['street','popart'],      badge:'new', bg:'#F0E8E8', fgDark:false, label:'TOY',   sub:'SOLDIER', img:'images/19. Toy Soldier Defy Expectation.webp',    order:18},
  {id:19,title:'Javanese Dance',               desc:'Keindahan tari Jawa dalam visual kontemporer. Warisan budaya yang timeless dan elegan.',                    tags:['budaya','abstract'],    badge:'new', bg:'#F5EDD8', fgDark:false, label:'JAVA',  sub:'DANCE',   img:'images/20. Javanese Dance.webp',                  order:19},
  {id:20,title:'Bauhaus Circular Contrast',    desc:'Kontras dramatis dalam komposisi sirkular Bauhaus. Bold, tegas, dan memorable.',                            tags:['bauhaus'],              badge:'',    bg:'#1A1A1A', fgDark:true,  label:'BAUS',  sub:'CIRCLE',  img:'images/21. Bauhaus Circular Contrast.webp',       order:20},
  {id:21,title:'Surabaya City Map',            desc:'Peta kota Surabaya dalam estetika minimalis bersih. Untuk warga atau siapapun yang cinta Surabaya.',        tags:['peta','minimalis'],     badge:'',    bg:'#EDE8E0', fgDark:false, label:'SBY',   sub:'MAP',     img:'images/22. Surabaya City Map.webp',               order:21},
  {id:22,title:'Silent Power',                 desc:'Kekuatan dalam keheningan — tipografi dark yang powerful dan penuh kedalaman.',                              tags:['typografi','dark'],     badge:'',    bg:'#1E1E1E', fgDark:true,  label:'SLNT',  sub:'POWER',   img:'images/23. Silent Power.webp',                    order:22},
  {id:23,title:'High Voltage',                 desc:'Energi tinggi dalam tipografi yang elektrifying. Untuk ruangan yang butuh dosis adrenalin visual.',         tags:['typografi','street'],   badge:'',    bg:'#F5F0E0', fgDark:false, label:'HIGH',  sub:'VOLT',    img:'images/24. High Voltage.webp',                    order:23},
  {id:24,title:'Jakarta City Map',             desc:'Peta ibu kota dalam format poster yang presisi dan elegan. Kebanggaan warga Jakarta.',                      tags:['peta','minimalis'],     badge:'hot', bg:'#EDE8E0', fgDark:false, label:'JKT',   sub:'MAP',     img:'images/25. Jakarta City Map.webp',                order:24},
  {id:25,title:'Denpasar City Map',            desc:'Peta kota Denpasar dengan detail yang indah. Kenangan Bali yang bisa dipasang di dinding.',                tags:['peta','minimalis'],     badge:'',    bg:'#EDE8E0', fgDark:false, label:'DPS',   sub:'MAP',     img:'images/26. Denpasar City Map.webp',               order:25},
  {id:26,title:'Bauhaus Full Focus',           desc:'Komposisi Bauhaus yang memusatkan perhatian ke satu titik. Impactful dan penuh intensi.',                  tags:['bauhaus'],              badge:'',    bg:'#E8ECF5', fgDark:false, label:'BAUS',  sub:'FOCUS',   img:'images/27. Bauhaus Full Focus.webp',              order:26},
  {id:27,title:'Bauhaus Dynamic Run',          desc:'Dinamika lari dalam estetika Bauhaus — gerakan, momentum, dan semangat terasa nyata.',                      tags:['bauhaus'],              badge:'',    bg:'#F5F0E8', fgDark:false, label:'BAUS',  sub:'RUN',     img:'images/28. Bauhaus Dynamic Run.webp',             order:27},
  {id:28,title:'Bauhaus Pattern Rhythm',       desc:'Ritme visual dari pola Bauhaus yang berulang. Meditatif dan harmonis untuk ruang santai.',                  tags:['bauhaus'],              badge:'',    bg:'#F0EBE0', fgDark:false, label:'BAUS',  sub:'RTHM',    img:'images/29. Bauhaus Pattern Rhythm.webp',          order:28},
  {id:29,title:'Bauhaus Perfect Balance',      desc:'Keseimbangan sempurna dalam komposisi Bauhaus. Clean, presisi, dan memuaskan secara visual.',               tags:['bauhaus'],              badge:'',    bg:'#E8F0E8', fgDark:false, label:'BAUS',  sub:'BALAN',   img:'images/30. Bauhaus Perfect Balance.webp',         order:29},
  {id:30,title:'Bauhaus Eye Geometry',         desc:'Mata manusia dalam interpretasi geometris Bauhaus. Misterius, intriging, dan tak terlupakan.',              tags:['bauhaus','abstract'],   badge:'',    bg:'#1A1A1A', fgDark:true,  label:'BAUS',  sub:'EYE',     img:'images/31. Bauhaus Eye Geometry.webp',            order:30},
  {id:31,title:'Bauhaus Sunset Lines',         desc:'Garis-garis sunset dalam palet hangat Bauhaus. Romantis, lembut, namun tetap struktural.',                  tags:['bauhaus'],              badge:'',    bg:'#F5E8D8', fgDark:false, label:'BAUS',  sub:'SUNST',   img:'images/32. Bauhaus Sunset Lines.webp',            order:31},
  {id:32,title:'Bauhaus Dual Vision',          desc:'Dua perspektif dalam satu komposisi Bauhaus yang kohesif. Playful dan penuh kejutan.',                      tags:['bauhaus'],              badge:'',    bg:'#E8EAF0', fgDark:false, label:'BAUS',  sub:'DUAL',    img:'images/33. Bauhaus Dual Vision.webp',             order:32},
  {id:33,title:'Bauhaus Abstract Balance',     desc:'Abstraksi dan keseimbangan bertemu dalam Bauhaus. Sophisticated dan estetis.',                               tags:['bauhaus','abstract'],   badge:'',    bg:'#F0ECE8', fgDark:false, label:'BAUS',  sub:'ABSTR',   img:'images/34. Bauhaus Abstract Balance.webp',        order:33},
  {id:34,title:'Bauhaus Playful Geometry',     desc:'Geometri yang bermain-main — humor visual ala Bauhaus yang mengundang senyum.',                             tags:['bauhaus'],              badge:'',    bg:'#F8F0E0', fgDark:false, label:'BAUS',  sub:'PLAY',    img:'images/35. Bauhaus Playful Geometry.webp',        order:34},
  {id:35,title:'Bauhaus Green Horizon',        desc:'Cakrawala hijau dalam komposisi Bauhaus yang menyegarkan. Natural dan penuh harapan.',                      tags:['bauhaus'],              badge:'',    bg:'#E0EDE4', fgDark:false, label:'BAUS',  sub:'GREEN',   img:'images/36. Bauhaus Green Horizon.webp',           order:35},
  {id:36,title:'Bauhaus Primary Grid',         desc:'Grid primer Bauhaus yang ikonik — merah, kuning, biru dalam tatanan yang presisi.',                         tags:['bauhaus'],              badge:'',    bg:'#F5F0E8', fgDark:false, label:'BAUS',  sub:'GRID',    img:'images/37. Bauhaus Primary Grid.webp',            order:36},
  {id:37,title:'Bauhaus Color Skyline',        desc:'Skyline urban dalam warna-warna Bauhaus. Modern, urban, dan penuh visi.',                                   tags:['bauhaus'],              badge:'',    bg:'#E8F0F8', fgDark:false, label:'BAUS',  sub:'SKY',     img:'images/38. Bauhaus Color Skyline.webp',           order:37},
  {id:38,title:'Bauhaus Sonic Circle',         desc:'Lingkaran sonik Bauhaus yang bergetar dan berdenyut. Musik visual yang bisa dirasakan.',                    tags:['bauhaus','abstract'],   badge:'',    bg:'#F0EBE8', fgDark:false, label:'BAUS',  sub:'SONIC',   img:'images/39. Bauhaus Sonic Circle.webp',            order:38},
  {id:39,title:'Bauhaus Blue Construct',       desc:'Konstruksi biru Bauhaus yang bold dan industrial. Maskulin, kuat, dan presisi.',                            tags:['bauhaus'],              badge:'',    bg:'#1F2A3A', fgDark:true,  label:'BAUS',  sub:'BLUE',    img:'images/40. Bauhaus Blue Construct.webp',          order:39},
  {id:40,title:'Japanese Kanji Typography',    desc:'Karakter Kanji dalam komposisi tipografi kontemporer. Misteri timur yang elegan dan powerful.',             tags:['typografi','budaya'],   badge:'',    bg:'#1A1A1A', fgDark:true,  label:'漢字',  sub:'TYPE',    img:'images/41. Japanese Kanji Typography.webp',       order:40},
  {id:41,title:'Street Racing Helmet Fashion', desc:'Helm balap street style yang melebur fashion dan motorsport. Edgy dan penuh karakter.',                      tags:['street','vintage'],     badge:'',    bg:'#1E1E1E', fgDark:true,  label:'RACE',  sub:'HELM',    img:'images/42. Street Racing Helmet Fashion.webp',    order:41},
  {id:42,title:'The Unknown Is Beautiful',     desc:'Tipografi kontemplasi tentang keindahan hal yang belum diketahui. Filosofis dan menenangkan.',              tags:['typografi','motivasi'], badge:'',    bg:'#F5F0EC', fgDark:false, label:'UNKN',  sub:'BEAU',    img:'images/43. The Unknown Is Beautiful.webp',        order:42},
];

/**
 * HARGA — update di satu tempat, berlaku untuk semua halaman
 * Format: { ukuran: { hitam, putih, chrome, kayu } }
 */
window.SRUPA_PRICES = {
  '20x30': { hitam: 89000,  putih: 89000,  chrome: 109000, kayu: 119000 },
  '30x40': { hitam: 119000, putih: 119000, chrome: 149000, kayu: 159000 },
  '40x50': { hitam: 149000, putih: 149000, chrome: 179000, kayu: 199000 },
  '40x60': { hitam: 169000, putih: 169000, chrome: 199000, kayu: 219000 },
  '50x70': { hitam: 199000, putih: 199000, chrome: 239000, kayu: 259000 },
  '60x80': { hitam: 239000, putih: 239000, chrome: 279000, kayu: 299000 },
};
