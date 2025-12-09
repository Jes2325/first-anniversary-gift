// src/songs.js
const songs = [
  {
        id: 1,
        tabName: "Song 1", 
        title: "Araw-Gabi",
        artist: "Regine Velasquez",
        file: process.env.PUBLIC_URL + "/audio/Araw_Gabi.mp3",   // looks inside public/audio/
        lyricsOriginal:
    `   'Di biro ang sumulat ng awitin para sa'yo
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
        
        Araw-gabi
        Nasa isip ka, napapanagip ka
        Kahit sa'n magpunta
        Araw-gabi
        Nalalasing sa tuwa
        Kapag kapiling ka
        Araw-gabi tayong dal'wa
        Araw-gabi tayong dal'wa
        Ah, ah`,
        lyricsTranslated: 
    `   It's not a joke to write a song for you. 
        I'm like a crazy person, dizzy and confused.
        With my inherited piano
        I was forced to play
        In hopes a tone 
        Would suddenly pop up
        
        What song will I make about you? 
        It's no joke to make lysrics for this tune. 
        Even with 10 dictionaries
        Nothing seems to match
        Just know it won't change
        What I feel for you
        
        Day-night
        You're on my mind, you're in my dreams
        No matter where I go
        Day-night
        I'm drunk with joy
        When I feel you
        Day-night just you and I
        
        I joke 
        About what it is I'm trying to say
        You have to know
        What's inside my chest
        I've created
        Hundred of songs
        This is what I truly feel
        Accept it and listen
        
        Day-night
        You're on my mind, you're in my dreams
        No matter where I go
        Day-night
        I'm drunk with joy
        When I feel you
        
        Day-night
        You're on my mind, you're in my dreams
        No matter where I go
        Day-night
        I'm drunk with joy
        When I feel you`,
        message: `Beautiful song, right? I've loved this song since I was young. Araw meaning day and gabi meaning night. Day and night, you are on my mind. I dream of you wherever I go.
                  And my love, how true that is. You have consumed my every thought, awake or asleep. You invade my dreams, and I wouldn't have it any other way. So, what better way to start
                  to start this playlist then with this song.`
    },
    {
        id: 2,
        tabName: "Song 2", 
        title: "Palagi",
        artist: "TJ Monterde", 
        file: process.env.PUBLIC_URL + "/audio/Palagi.mp3",
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
                  In the end, no matter what, I am yours. No matter the arguments, no matter the what happens, I am yours, my love. Yours and always yours. Yours and only yours. Te amo, mi amor`
    },
    {
        id: 3,
        tabName: "Song 3", 
        title: "Kahit Maputi Na Ang Buhok Ko",
        artist: "Rey Valera", 
        file: process.env.PUBLIC_URL + "/audio/Kahit_Maputi_Na_Ang_Buhok_Ko.mp3",
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
                  If we change, I want it to be because we are growing together and experiencing life together. I wantr it to be because we
                  are changing for the better. Anyways, this song. It's a beautiful one, right?
                  It's about growing old together and loving one another as we grow old together.
                  I want that with you. I want to grow old with you and spend the rest of my life with you. I want to see where life takes us and what it has in store
                  for us. Baby, I want it all with you. And this, this gift, this anniversary, this is just the start of us. Happy one year amor!`
    },
    {
        id: 4,
        tabName: "Song 4", 
        title: "Pasilyo",
        artist: "Sun Kissed Lola", 
        file: process.env.PUBLIC_URL + "/audio/Pasilyo.mp3",
        lyricsOriginal: 
    `   Palad ay basang-basa
        Ang dagitab ay damang-dama
        Sa 'king kalamnang punong-puno
        Ng pananabik at ng kaba
        Lalim sa 'king bawat paghinga
        Nakatitig lamang sa iyo

        Naglakad ka nang dahan-dahan
        Sa pasilyo tungo sa altar ng simbahan
        Hahagkan na't 'di ka bibitawan
        Wala na 'kong mahihiling pa

        Ikaw at ikaw
        Ikaw at ikaw
        Ikaw at ikaw
        Ikaw at ikaw

        'Di maikukumpara
        Araw-araw kong dala-dala
        Paboritong panalangin ko'y
        Makasama ka sa pagtanda
        Ang hiling sa Diyos na may gawa
        Apelyido ko'y maging iyo

        Naglakad ka nang dahan-dahan
        Sa pasilyo tungo sa 'kin
        At hinawakan mo ako't aking 'di napigilang
        Maluha nang mayakap na

        Ikaw at ikaw
        Ikaw at ikaw
        Ikaw at ikaw
        Ikaw at ikaw

        Ikaw at ikaw (ikaw at ikaw, ikaw at ikaw)
        Ikaw at ikaw (ikaw at ikaw, ikaw at ikaw)
        Ikaw at ikaw (ikaw at ikaw, ikaw at ikaw)
        Ikaw at ikaw (ikaw at ikaw, ikaw at ikaw)

        Palad ay basang-basa, ang dagitab ay damang-dama
        (Ikaw at ikaw) sa 'king kalamnang punong-puno
        (Ikaw at ikaw) 'di maikukumpara, araw-araw kong dala-dala
        (Ikaw at ikaw) paboritong panalangin ko'y ikaw`,
        lyricsTranslated: 
    `   My palms are soaking wet
        I can feel the spark
        My words are filled with
        Desire and fear
        In every breath I take
        I just look at you
        
        You walk slowly
        Along the aisle towards the church altar
        I hug you tightly and won't let go
        I have nothing else to ask for
        
        You and only you
        You and only you
        You and only you
        You and only you
        
        Incomparable
        I carry it with me every day
        My favorite prayer is
        To grow old with you
        The prayer to God that's made true
        My surname will be yours too
        
        You walk slowly
        Along the aisle towards me and I hold you
        I couldn't help but cry
        As I hugged you tightly
        
        You and only you
        You and only you
        You and only you
        You and only you

        You and only you (you and only you)
        You and only you (you and only you)
        You and only you (you and only you)
        You and only you (you and only you)
        You and only you (you and only you)
        
        My palms are soaking wet, I can feel the spark
        (you and only you) My words are filled with incomparable
        (you and only you) I carry it with mе every day
        (you and only you) My favorite prayеr is you`,
        message: `I think you can see why I chose this song. You and only you, my love. In everything that I do, in every breath that I take, I only want you. It's only you. 
                  And my love, I can't wait till it's you and I. I can't wait till we're walking down the aisle, for the day you are, legally, my wife.`
    },
    {
        id: 5,
        tabName: "Song 5", 
        title: "Ikaw Lamang",
        artist: "Silent Sanctuary", 
        file: process.env.PUBLIC_URL + "/audio/Ikaw_Lamang.mp3",
        lyricsOriginal: "Lyrics for song five...",
        lyricsTranslated: '',
        message: ''
    },
    {
        id: 6,
        tabName: "Song 6", 
        title: "Pusong Ligaw",
        artist: "Jericho Rosales", 
        file: process.env.PUBLIC_URL + "/audio/Pusong_Ligaw.mp3",
        lyricsOriginal: "Lyrics for song six...",
        lyricsTranslated: '',
        message: ''
    },
    {
        id: 7,
        tabName: "Song 7", 
        title: "Harana",
        artist: "Parokya Ni Edgar", 
        file: process.env.PUBLIC_URL + "/audio/Harana.mp3",
        lyricsOriginal: "Lyrics for song seven...",
        lyricsTranslated: '',
        message: ''
    },
    {
        id: 8,
        tabName: "Song 8", 
        title: "Balisong",
        artist: "The Juans", 
        file: process.env.PUBLIC_URL + "/audio/Balisong.mp3",
        lyricsOriginal: "Lyrics for song eight...",
        lyricsTranslated: '',
        message: ''
    },
    {
        id: 9,
        tabName: "Song 9", 
        title: "Ikaw Pa Rin",
        artist: "mrld", 
        file: process.env.PUBLIC_URL + "/audio/Ikaw_Pa_Rin.mp3",
        lyricsOriginal: "Lyrics for song nine...",
        lyricsTranslated: '',
        message: ''
    },
    {
        id: 10,
        tabName: "Song 10", 
        title: "Ikaw Lang",
        artist: "NOBITA", 
        file: process.env.PUBLIC_URL + "/audio/Ikaw_Lang.mp3",
        lyricsOriginal: "Lyrics for song ten...",
        lyricsTranslated: '',
        message: ''
    },
    {
        id: 11,
        tabName: "Song 11", 
        title: "Sa Ngalan Ng Pag Ibig",
        artist: "December Avenue", 
        file: process.env.PUBLIC_URL + "/audio/Sa_Ngalan_Ng_Pag_Ibig.mp3",
        lyricsOriginal: "Lyrics for song eleven...",
        lyricsTranslated: '',
        message: ''
    },
    {
        id: 12,
        tabName: "Song 12", 
        title: "Pangako",
        artist: "Rey Valera", 
        file: process.env.PUBLIC_URL + "/audio/Pangako.mp3",
        lyricsOriginal: "Lyrics for song twelve...",
        lyricsTranslated: '',
        message: ''
    }
];

export default songs;
