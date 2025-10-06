// src/songs.js
const songs = [
  {
        id: 1,
        tabName: "Song 1", 
        title: "Araw-Gabi",
        artist: "Regine Velasquez",
        file: process.env.PUBLIC_URL + "/audio/Araw_Gabi.mp3",   // looks inside public/audio/
        lyricsOriginal:
    `'Di biro ang sumulat ng awitin para sa'yo
        Para akong isang sira-ulong hilo't lito
        Sa akin pang minanang piano
        Tiklado'y pilit nilaro
        Baka sakaling merong tono
        Bigla na lang umusbong
        
        Tungkol saan naman kaya'ng awiting para sa'yo?
        'Di biro ang gawing sukat ang titik sa tono
        Sampu man aking diksyonaryo
        Kung ang tugma'y 'di wasto
        Basta't isiping 'di magbabago
        Damdamin ko sa iyo
        
        Araw-gabi
        Nasa isip ka, napapanagip ka
        Kahit sa'n magpunta
        Araw-gabi
        Nalalasing sa tuwa
        Kapag kapiling ka
        Araw-gabi tayong dal'wa
        
        Biruin mong nasabi ko
        Ang nais kong ipahatid
        Dapat mo lamang mabatid
        Laman nitong dibdib
        Tila sampung daang awitin
        Ang natapos kong likhain
        Ito ang tunay na damdamin
        Tanggapin at dinggin
        
        Araw-gabi
        Nasa isip ka, napapanagip ka
        Kahit sa'n magpunta
        Araw-gabi
        Nalalasing sa tuwa
        Kapag kapiling ka
        Araw-gabi tayong dal'wa
        Araw-gabi tayong dal'wa
        Ah, ah`,
        lyricsTranslated: 'dfasjflkasjflkajslkfjalkjflkasjlfkjalskdjflksdjfljslk',
        message: 'Beautiful song, right?'
    },
    {
        id: 2,
        tabName: "Song 2", 
        title: "Palagi",
        artist: "TJ Monterde", 
        file: "/audio/Palagi.mp3",
        lyricsOriginal: 
        `Hindi man araw-araw na nakangiti
        Ilang beses na rin tayong humihindi
        'Di na mabilang ang ating mga tampuhan
        Away-bati natin, 'di na namamalayan
        
        Heto tayo
        
        Ngunit sa huli palagi
        Babalik pa rin sa yakap mo
        Hanggang sa huli palagi
        Pipiliin kong maging sa'yo
        Ulit-ulitin man, nais kong malaman mong
        Iyo ako palagi, palagi
        
        Kung balikan man ang hirap, luha't lahat
        Ikaw ang paborito kong desisyon at
        'Pag napaligiran ng ingay at ng gulo
        'Di ko 'pagpapalit ngiti mo sa mundo
        
        Heto tayo
        
        Sa huli palagi
        Babalik pa rin sa yakap mo
        Hanggang sa huli palagi
        Pipiliin kong maging sa'yo
        Ulit-ulitin man, nais kong malaman mong
        Iyo ako
        
        Sa pagdating ng ating pilak at ginto
        Diyamante ma'y abutin
        Ikaw pa rin aking bituin
        Natatangi kong dalangin 'gang sa huling siglo
        
        Sa huli palagi
        Babalik pa rin sa yakap mo
        Mahal sa huli palagi
        Pipiliin kong maging sa'yo
        Ulit-ulitin man, nais kong malaman mong
        Iyo ako palagi`,

        lyricsTranslated: 
        `Not all days gives us smiles
        And there have been a couple of times we disagree
        I now have lost count of our quarrels
        We fight and make up, without even realizing it

        And yet, here we are

        Yet in the end, every time
        I'll still come back to your embrace
        Until the end, every time
        I will still choose to be with you
        No matter how many times (you ask)
        I want you to know that
        I'm yours always, always

        Even if the hardships, tears, and all repeats
        You are (still) my favorite decision, and
        When surrounded by noise and chaos
        I wouldn't trade your smile for the world

        And yet, here we are

        In the end, every time
        I'll still come back to your embrace
        Until the end, every time
        I will still choose to be with you
        No matter how many times (you ask)
        I want you to know that
        I'm yours

        When we obtain our treasures—silver and gold
        And in achieving our diamonds and achievements, you're still my star
        My only prayer 'til the last hundred years


        In the end, every time
        I'll still come back to your embrace
        My love, in the end, always
        I will still choose to be with you
        No matter how many times (you ask)
        I want you to know that
        I'm yours, always`,
        message: `Palagi. As you can see in the song, it means always. And that's why I chose this song. Because, I am yours, always my love. Yours and only yours.
                  In the end, no matter what, I am yours. No matter the arguments, no matter the what happens, I am yours, my love. Yours and always yours.`
    },
    {
        id: 3,
        tabName: "Song 3", 
        title: "Kahit Maputi Na Ang Buhok Ko",
        artist: "Rey Valera", 
        file: "/audio/Kahit_Maputi_Na_Ang_Buhok_Ko.mp3",
        lyricsOriginal: 
        `         Kung tayo ay matanda na
        Sana'y 'di tayo magbago
        Kailanman, nasaan ma'y
        Ito ang pangarap ko
        
        Makuha mo pa kayang
        Ako’y hagkan at yakapin, ooh-ooh-ooh, ooh-ooh
        Hanggang pagtanda natin
        Nagtatanong lang sa'yo
        Ako pa kaya'y ibigin mo
        Kung maputi na ang buhok ko?
        
        Pagdating ng araw
        Ang 'yong buhok
        Ay puputi na rin
        Sabay tayong mangangarap
        Ng nakaraan sa 'tin
        
        Ang nakalipas
        Ay ibabalik natin, ooh-ooh-ooh, ooh-ooh
        Ipapaalala ko sa'yo
        Ang aking pangako
        Na ang pag-ibig ko'y laging sa'yo
        Kahit maputi na ang buhok ko
        
        Ang nakalipas
        Ay ibabalik natin, ooh-ooh-ooh, ooh-ooh
        Ipapaalala ko sa'yo
        Ang aking pangako
        Na ang pag-ibig ko'y laging sa'yo
        Kahit maputi na ang buhok ko
        Kahit maputi na ang buhok ko`,
        lyricsTranslated: 
        `       When we get older
        I hope we won't change
        Whenever, wherever
        This is my dream
        
        Will you be able to 
        Kiss me and hug me
        Until we grow old? 
        I'm just asking
        Will you still love me
        When my hair turns gray?'
        
        The day will come when 
        Your hair will also turn gray
        Together we'll dream
        Of our past
        
        We'll bring back our past
        I'll remind you [of]
        My promise
        That my love is always yours
        Even when my hair turns gray
        
        We'll bring back our past
        I'll remind you [of]
        My promise
        That my love is always yours
        Even when my hair turns gray`,
        message: `I've translated this song to you before. The only thing about the song though? When he says I hope we don't change, I disagree.
                  If we change, I want it to be because we are growing together and experiencing lige together. Anyways, this song. It's a beautiful one, right?
                  It's about growing old together and loving one another as we grow old together.
                  I want that with you. I want to grow old with you and spend the rest of my life with you. I want to see where life takes us and what it has in store
                  for us. Baby, I want it all with you. And this, this gife, this anniversary, this is just the start of us.`
    },
    {
        id: 4,
        tabName: "Song 4", 
        title: "Pasilyo",
        artist: "", 
        file: "/audio/Pasilyo.mp3",
        lyricsOriginal: "Lyrics for song four...",
        lyricsTranslated: '',
        message: ''
    },
    {
        id: 5,
        tabName: "Song 5", 
        title: "Song Five",
        artist: "", 
        file: "/audio/Ikaw_Lamang.mp3",
        lyricsOriginal: "Lyrics for song five...",
        lyricsTranslated: '',
        message: ''
    },
    {
        id: 6,
        tabName: "Song 6", 
        title: "Song Six",
        artist: "", 
        file: "/audio/Pusong_Ligaw.mp3",
        lyricsOriginal: "Lyrics for song six...",
        lyricsTranslated: '',
        message: ''
    },
    {
        id: 7,
        tabName: "Song 7", 
        title: "Song Seven",
        artist: "", 
        file: "/audio/Harana.mp3",
        lyricsOriginal: "Lyrics for song seven...",
        lyricsTranslated: '',
        message: ''
    },
    {
        id: 8,
        tabName: "Song 8", 
        title: "Song Eight",
        artist: "", 
        file: "/audio/Balisong.mp3",
        lyricsOriginal: "Lyrics for song eight...",
        lyricsTranslated: '',
        message: ''
    },
    {
        id: 9,
        tabName: "Song 9", 
        title: "Song Nine",
        artist: "", 
        file: "/audio/Ikaw_Pa_Rin.mp3",
        lyricsOriginal: "Lyrics for song nine...",
        lyricsTranslated: '',
        message: ''
    },
    {
        id: 10,
        tabName: "Song 10", 
        title: "Song Ten",
        artist: "", 
        file: "/audio/Ikaw_Lang.mp3",
        lyricsOriginal: "Lyrics for song ten...",
        lyricsTranslated: '',
        message: ''
    },
    {
        id: 11,
        tabName: "Song 11", 
        title: "Song Eleven",
        artist: "", 
        file: "/audio/Sa_Ngalan_Ng_Pag_Ibig.mp3",
        lyricsOriginal: "Lyrics for song eleven...",
        lyricsTranslated: '',
        message: ''
    },
    {
        id: 12,
        tabName: "Song 12", 
        title: "Song Twelve",
        artist: "", 
        file: "/audio/Pangako.mp3",
        lyricsOriginal: "Lyrics for song twelve...",
        lyricsTranslated: '',
        message: ''
    }
];

export default songs;
