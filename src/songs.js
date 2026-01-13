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
                  If we change, I want it to be because we are growing together and experiencing life together. I want it to be because we
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
        lyricsOriginal: 
    `   'Di ko maintindihan ang nilalaman ng puso
        Tuwing magkahawak ang ating kamay
        Pinapanalangin lagi tayong magkasama
        Hinihiling bawat oras kapiling ka
        
        Sa lahat ng aking ginagawa
        Ikaw lamang ang nasa isip ko, sinta
        Sana'y 'di na tayo magkahiwalay
        Kahit kailan pa man
        
        Ikaw lamang ang aking minamahal
        Ikaw lamang ang tangi kong inaasam
        Makapiling ka habang buhay
        Ikaw lamang, sinta
        Wala na 'kong hihingin pa
        Wala na, ooh, ooh, ooh-ooh
        
        Ayoko nang maulit pa
        Ang nakaraang ayokong maalala
        Bawat oras na wala ka
        Parang mabigat na parusa
        'Wag mong kakalimutan na kahit nag-iba
        'Di ako tumigil magmahal sa'yo, sinta
        
        Sa lahat ng aking ginagawa
        Ikaw lamang ang nasa isip ko, sinta
        Sana'y 'di na tayo magkahiwalay
        Kahit kailan pa man
        
        Ikaw lamang ang aking minamahal
        Ikaw lamang ang tangi kong inaasam
        Makapiling ka habang buhay
        Ikaw lamang, sinta
        Wala na 'kong hihingin pa
        Wala na, ooh, ooh, ooh-ooh
        
        Ikaw lamang ang aking minamahal
        Ikaw lamang ang tangi kong inaasam
        Makapiling ka habang buhay
        Ikaw lamang, sinta
        Wala na 'kong hihingin pa
        Wala na, ooh, ooh, ooh-ooh`,
        lyricsTranslated: 
    `   I don't understand what my heart contains
        Whenever we hold hands
        Praying that we’ll always be together
        Requesting that every hour you're my partner
        
        In everything that I do
        You're the only one that I think about, darling
        I hope that we’ll never be apart
        Ever
        
        You are the only one I love
        You are the only one that I hope for
        Be your partner forever
        Only you, darling
        I won't ask for anything else
        Anything elsе, ooh, ooh, ooh-ooh

        I don't want that to happen again
        The past, I don't want to remеmber
        Every hour that you're gone
        It's like a heavy punishment
        Don't forget me even when it's not me you love
        I won’t stop loving you, darling

        In everything that I do
        You’re the only one that I think about, darling
        I hope that we'll never be apart
        Ever

        You are the only one I love
        You are the only one that I hope for
        Be your partner forever
        Only you, darling
        I won’t ask for anything else
        Anything else, ooh, ooh, ooh-ooh

        You are the only one I love
        You are the only one that I hope for
        Be your partner forever
        Only you, darling
        I won't ask for anything else
        Anything else, ooh, ooh, ooh-ooh`,
        message: `This is one of the songs that I had always listened to and funnily enough, I was listening to it in Fall of '24 as well. I kind of stopped in the Winter of '24. But then, 
                  I heard it again a little after we started dating. Amor, this song encompassses my love for you. Well, obviously not all. But, at the end of the day, you are all I want.
                  All I want to come home to. All I could ever want. And yes amor, you are the only one I love and are everything I could ever hope for and more. You and only you, 
                  and I couldn't ask for anything else.`
    },
    {
        id: 6,
        tabName: "Song 6", 
        title: "Pusong Ligaw",
        artist: "Jericho Rosales", 
        file: process.env.PUBLIC_URL + "/audio/Pusong_Ligaw.mp3",
        lyricsOriginal: 
    `   'Di kita malimutan
        Sa mga gabing nagdaan
        Ikaw ang pangarap, nais kong makamtan
        Sa buhay ko ay ikaw ang kahulugan

        Pag-ibig ko'y walang kamatayan
        Ako'y umaasang muli kang mahagkan

        Ikaw pa rin ang hanap ng pusong ligaw
        Ikaw ang patutunguhan at pupuntahan
        Pag-ibig mo ang hanap ng pusong ligaw
        Mula noon, bukas, at kailanman

        Ikaw at ako'y sinulat sa mga bituin
        At ang langit sa gabi ang sumasalamin
        Mayro'ng lungkot at pananabik
        Kung wala ka'y kulang mga bituin

        Aasa akong babalik (aasang babalik)
        Ang ligaya't aking mithi (sa 'king mata)
        Hanggang sa muling pagkikita (hanggang sa pagkikita)
        Sasabihing "Mahal kita" (mahal kita)

        Ikaw pa rin ang hanap ng pusong ligaw
        Ikaw ang patutunguhan at pupuntahan
        Pag-ibig mo ang hanap ng pusong ligaw
        Mula noon, bukas, at kailanman

        Mula noon, bukas, at kailanman
        Mula noon, bukas, at kailanman`,
        lyricsTranslated: 
        `I can't forget you
        in the nights that have passed.
        You are the dream 
        that I want to fulfill. 
        In my life, you are the meaning.
        
        My love is immortal. 
        I'm hoping I will be able to kiss you again. 
        
        It's still you that my lost heart looks for you.
        You are it's destination, where it will go.
        It's your love that my heart looks for.
        Since then, tomorrow, and forever.
        
        You and I were written in the stars.
        And it reflects the night sky.
        There's loneliness and yearning.
        If you're gone, the stars are incomplete. 
        
        I will hope (hope to come back)
        Happiness is my ideal (in your eyes)
        Until we meet again (until we meet)
        I'lll say "I love you" (I love you)
        
        It's still you that my lost heart looks for you.
        You are it's destination, where it will go.
        It's your love that my heart looks for.
        Since then, tomorrow, and forever.
        
        Since then, tomorrow, and forever.
        Since then, tomorrow, and forever.`,
        message: `In case you didn't know or couldn't tell, Pusong Ligaw translates to Lost Heart. In other words, the singer is saying no matter what
                  their heart is always looking for this person. My heart has always been looking for a place to belong, and it's found a place to belong with you.
                  My heart is yours, amor. It'll always be looking for you when we're apart but, at the same time, it'll be with you because it is yours. Make sense?`
    },
    {
        id: 7,
        tabName: "Song 7", 
        title: "Harana",
        artist: "Parokya Ni Edgar", 
        file: process.env.PUBLIC_URL + "/audio/Harana.mp3",
        lyricsOriginal: 
    `   Uso pa ba ang harana?
        Marahil ikaw ay nagtataka
        Sino ba 'tong mukhang gago?
        Nagkandarapa sa pagkanta
        At nasisintunado sa kaba

        Mayron pang dalang mga rosas
        Suot nama'y maong na kupas
        At nariyan pa ang barkada
        Naka-porma, naka-barong

        Sa awiting daig pa ang minus one
        At sing-along

        Puno ang langit ng bituin
        At kay lamig pa ng hangin
        Sa'yong tingin ako'y nababaliw, giliw
        At sa awitin kong ito
        Sana'y maibigan mo
        Ibubuhos ko ang buong puso ko
        Sa isang munting harana
        Para sa'yo
       
        Hindi ba't parang isang sine
        Isang pelikulang romantiko
        Hindi ba't ikaw ang bidang artista
        At ako ang 'yong leading man

        Sa istoryang nagwawakas
        Sa pag-ibig na wagas

        Puno ang langit ng bituin
        At kay lamig pa ng hangin
        Sa'yong tingin ako'y nababaliw, giliw
        At sa awitin kong ito
        Sana'y maibigan mo
        Ibubuhos ko ang buong puso ko
        Sa isang munting harana
        Para sa'yo`,
        lyricsTranslated: 
        `Are serenades still in stlye? 
        Perhaps, you're wondering,
        Who is this making a fool of themselves?
        Having touble singing,
        scared and sining off key
        
        He even brought roses
        Wearing faded jeans
        And even his friends are there
        Dressed-up, wearing barong's 
        With a song better than Minus-One
        and a sing-along
        
        The heaven is full of stars
        and how cold the wind is
        From your look, I'm going crazy, dear
        And with this song
        I hope you love it
        I will pour my whole heart
        Into this meager serenade for you
        
        Isn't it like a movie? 
        A romantic movie? 
        Aren't you the main actress??
        And I'm your leading man?
        In this story with an ending of pure love? 
        
        The heaven is full of stars
        and how cold the wind is
        From your look, I'm going crazy, dear
        And with this song
        I hope you love it
        I will pour my whole heart
        Into this meager serenade for you`,
        message: `A barong is a traditional dress shirt in the Philippines. So, the singer goes back and forth saying that this is serious because his friends are wearing
                  those traditional shirts. You've heard this song before, it's one of my favorites specificall because of the chorus. Amor, I go crazy when you look at me.
                  And honestly, I wouldn't mind serenading you with songs like this forever. Cause baby, I pour my whole heart into any song I sing for you. Even if I'm jokingly
                  singing in the car, I am still serenading you. So, let me serenade you for the rest of or lives. `
    },
    {
        id: 8,
        tabName: "Song 8", 
        title: "Balisong",
        artist: "The Juans", 
        file: process.env.PUBLIC_URL + "/audio/Balisong.mp3",
        lyricsOriginal: 
    `   Your face
        Lights up the sky on the highway
        Someday
        You'll share your world with me
        Someday

        You mesmerize me with diamond eyes
        I try to fool myself to think, I'll be alright
        But I am losing all control
        My mind, my heart, my body and my soul

        Never in my life have I been more sure
        So come on up to me and close the door
        Nobody's made me feel this way before
        You're everything I wanted and more

        To speak or not to, where to begin?
        A great dilemmas, I'm finding myself in
        For all, I know you only see me as a friend
        I try to tell myself wake up fool
        This fairy tales got to end
        
        Never in my life have I been more sure
        So come on up to me and close the door
        Nobody's made me feel this way before
        You're everything I wanted and more
        You're everything I wanted and more

        Never in my life have I been more sure
        So come on up to me and close the door
        Nobody's made me feel this way before
        You're everything I wanted and more

        Nobody's made me feel this way before
        You're everything I wanted and more`,
        lyricsTranslated: 
        `No Translation Needed`,
        message: `A balisong, also called a butterfly knife, is a type of folding pocket knife with two handles that rotate around the tang (the base of the blade) which, 
                  in case you didn't know, originated in the Philippines. This is the only full English songs that I included. The title, as you can see,
                  is in Tagalog. But, funnily enough, the lyrics are English. And these lyrics are fireeee, don't you think? 
                  I remember listening to this song so much in the Fall and Winter of 2024 but didn't know why. 
                  Then, I met bebe in the Winter of '24, and I was even more confused. This song is both a crash-out song but also one of my favorite songs to listen to.
                  But, I think it's obvious why this song. Line for line, word for word, this song encompasses how I feel for you, without a doubt. `
    },
    {
        id: 9,
        tabName: "Song 9", 
        title: "Ikaw Pa Rin",
        artist: "mrld", 
        file: process.env.PUBLIC_URL + "/audio/Ikaw_Pa_Rin.mp3",
        lyricsOriginal: 
    `   'Di magbabago ang isip ko, sinta
        Ikaw pa rin ang pipiliin
        Kahit na araw-araw nang nasasaktan
        Ikaw pa rin ang hahanapin

        Bakit ganito?
        'Di ko naman 'to ginusto
        Pero sige lang, ikaw pa rin

        Sinta, hah-hah-hah, 'di mo ba alam?
        Halos 'di na makatulog
        Kakaisip, ikaw ang dahilan, hah-hah-han
        Ikaw ang pahinga, ang tanging ninanais
        Kahit 'di ka naman sa'kin papunta

        Sinong may hawak ng puso mong bulag?
        Baka kasi ako ang papalarin
        Oh, nag-iisip pa rin ng paraan
        Para bigyan mo lang ng pansin

        Bakit ganito?
        'Di ko naman 'to ginusto
        Pero sige lang, ikaw pa rin

        Sinta, hah-hah-hah, 'di mo ba alam?
        Halos 'di na makatulog
        Kakaisip, ikaw ang dahilan, hah-hah-han
        Ikaw ang pahinga, ang tanging ninanais
        Kahit 'di ka naman sa'kin papunta

        Sinta, 'di mo ba alam?
        Halos 'di na makatulog
        Kakaisip, ikaw ang dahilan (Ikaw ang dahilan)
        Ikaw ang pahinga, ang tanging ninanais
        Kahit 'di ka naman sa'kin papunta`,
        lyricsTranslated: 
    `   My mind will not change, my love
        I’m still going to choose you
        Even though I’m getting hurt every day
        I’m still going to look for you

        Why is it like this?
        I didn’t even want this to happen
        But it’s alright, it’s still you

        My love, hah-hah-hah, don’t you know?
        That I can barely sleep
        Thinking, and it’s because of you, hah-hah-han
        You keep me at rest, the only one I want
        Even though you’re not going to me

        Who’s holding your blind heart?
        Because maybe I’m the lucky person
        Oh, maybe I’m still thinking of a way
        For you to notice me

        Why is it like this?
        I didn’t even want this to happen
        But it’s alright, it’s still you
        
        My love, hah-hah-hah, don’t you know?
        That I can barely sleep
        Thinking, and it’s because of you, hah-hah-han
        You keep me at rest, the only onе I want
        Even though you’re not going to me

        My lovе, don’t you know?
        That I can barely sleep
        Thinking, and it’s because of you (and it’s because of you)
        You keep me at rest, the only one I want
        Even though you’re not going to me`,
        message: `One of my favorite parts of this song, "My love, don't you know? That I can barely sleep thinking, and it's because of you."
                  Which, yeah, I've had nights that I didn't want to sleep or couldn't sleep thinking about you when we first started noticing each other. 
                  "The only one I want. Even though you're not going to me." Cause, you are the only one I want, and I didn't know if you wanted me to. It's you baby,
                  you and only you. And I am yours. Yours and only yours.`
    },
    {
        id: 10,
        tabName: "Song 10", 
        title: "Ikaw Lang",
        artist: "NOBITA", 
        file: process.env.PUBLIC_URL + "/audio/Ikaw_Lang.mp3",
        lyricsOriginal: 
    `   Oh, kay gandang pagmasdan ang iyong mga matang
        Kumikinang-kinang, 'di ko maintindihan
        Ang iyong mga tingin, labis ang mga ningning
        Langit ay bumaba, bumababa pala ang tala

        Tumingin ka sa ’king mga mata
        At hindi mo na kailangan pang
        Magtanong nang paulit-ulit, ikaw lang ang iniibig
        At kung 'di kumbinsido'y magtiwala ka
        Hawakan ang puso’t maniwala na
        Ikaw lang ang siyang inibig
        Ikaw lang ang iibigin

        At sa iyong paglalambing, ako ay nahulog din
        'Di ko alam kung ano ang gagawin
        'Di ko alam kung saan titingin
        Halik sa labi, tinginan natin
        'Di akalaing mahuhulog ka sa 'kin

        Tumingin ka sa aking mga mata
        At hindi mo na kailangan pang
        Magtanong nang paulit-ulit, ikaw lang ang iniibig
        At kung 'di kumbinsido'y magtiwala ka
        Hawakan ang puso't maniwala na
        Ikaw lang ang siyang inibig
        Ikaw lang ang iibigin
        Sinta
        
        At sa paglisan ng araw, akala’y ’di ka mahal
        At ang nadarama'y hindi magtatagal
        Malay ko bang hindi mapapagal
        Iibigin kita kahit ga’no pa katagal

        Tumingin ka sa 'king mga mata
        At hindi mo na kailangan pang
        Magtanong nang paulit-ulit, ikaw lang ang iniibig
        At kung 'di kumbinsido'y magtiwala ka
        Hawakan ang puso’t maniwala na
        Ikaw lang ang siyang inibig
        Ikaw lang ang iibigin

        La-la-la, la-la-la, la-la, la-la-la
        La-la-la, la-la-la, la-la, la-la-la
        La-la-la, la-la-la
        La-la-la, la-la-la, la-la, la-la-la
        La-la-la, la-la-la, la-la, la-la-la
        La-la-la, la-la-la

        Sinta`,
        lyricsTranslated: 
        `Oh, what a beautiful sight it is
        To look into your eyes.
        The way they sparkle,
        I cannot fathom.
        
        The way you look back at me,
        How brilliant they shine.
        Heaven must be on Earth.
        Stars actually fall from the sky.
        
        Just look into my eyes
        And you don't need to 
        Ask over and over.
        You're the only one I love.
        And if you're not convinced, believe in me. 
        Look into my heart and believe that
        You're the only one it has loved. 
        You're the only one I'll love.
        
        And from you're tender loving, I have fallen for you.
        I don't know what to do. 
        I don't know where to look. 
        Kiss on the lips, the way we look at each other
        I didn't think you'd fall for me. 

        Just look into my eyes
        And you don't need to 
        Ask over and over.
        You're the only one I love.
        And if you're not convinced, believe in me. 
        Look into my heart and believe that
        You're the only one it has loved. 
        You're the only one I'll love.
        Darling
        
        And as days go by, I thought I didn't love you.
        And that my feeling weren't going to last. 
        I hd no idea that they would never end. 
        I'll you for however long.
        
        Just look into my eyes
        And you don't need to 
        Ask over and over.
        You're the only one I love.
        And if you're not convinced, believe in me. 
        Look into my heart and believe that
        You're the only one it has loved. 
        You're the only one I'll love.
        
        La-la-la, la-la-la, la-la, la-la-la
        La-la-la, la-la-la, la-la, la-la-la
        La-la-la, la-la-la
        La-la-la, la-la-la, la-la, la-la-la
        La-la-la, la-la-la, la-la, la-la-la
        La-la-la, la-la-la
        
        Darling.`,
        message: `The song title, "Ikaw Lang" translates to Only You. It's quite the fit, don't you think? Cause it's you and only you. This song has been in my liked playlist for so long. 
                  I never thought I would adding it to a playlist like this. A playlist I would make for someone I love so deeply. I always thought it would just be a song in my liked
                  playlist. Amor, believe me when I say this. My heart, it was made for loving you, you're the only one it'll ever love. Just like the title says, ikaw lang. `
    },
    {
        id: 11,
        tabName: "Song 11", 
        title: "Sa Ngalan Ng Pag Ibig",
        artist: "December Avenue", 
        file: process.env.PUBLIC_URL + "/audio/Sa_Ngalan_Ng_Pag_Ibig.mp3",
        lyricsOriginal: 
    `   Hanggang kailan ako maghihintay
        Na para bang wala nang papalit sa'yo?
        Nasa'n ka man, sigaw ng puso ko'y
        Ikaw hanggang ngayon, ooh-woah-oh

        Kung sana lamang ay nakita mo
        Ang lungkot sa'yong ngiti
        Isang umagang 'di ka nagbalik
        Gumising ka at nang makita mo
        Ang tamis ng sandali
        Ng kahapong 'di magbabalik

        Hanggang sa dulo ng ating walang hanggan
        Hanggang ang puso'y wala nang nararamdaman
        Kahit matapos ang magpakailanpaman
        Ako'y maghihintay sa ngalan ng pag-ibig

        Hanggang kailan ako maghihintay
        Na para bang walang iba sa piling mo?
        Nasa'n ka man, sigaw ng puso ko
        Ay ang pangalan mo, ooh-woah-oh
       
        Kung sana lamang ay nakita mo
        Ang lungkot sa'yong ngiti
        Isang umagang 'di ka nagbalik
        Gumising ka at nang makita mo
        Ang tamis ng sandali
        Ng kahapong 'di magbabalik

        Hanggang sa dulo ng ating walang hanggan
        Hanggang ang puso'y wala nang nararamdaman
        Kahit matapos ang magpakailan pa man
        Ako'y maghihintay sa ngalan ng pag-ibig

        Hanggang kailan pa ba magtitiis?
        Nalunod na sa kaiisip
        Huling kapiling ka'y sa aking panaginip
        Ikaw mula noon
        Ikaw hanggang ngayon

        Hanggang sa dulo ng ating walang hanggan
        Hanggang ang puso'y wala nang maramdaman

        Hanggang sa dulo ng ating walang hanggan
        Hanggang ang puso'y wala nang naramdaman
        Kahit matapos ang magpakailan pa man
        Ako'y maghihintay sa ngalan ng pag-ibig
        Hanggang sa dulo ng ating walang hanggan (Ako'y maghihintay, ako'y maghihintay)
        Hanggang ang puso'y wala nang nararamdaman (Ako'y maghihintay sa ngalan ng pag-ibig)
        Kahit matapos ang magpakailan pa man (Ako'y maghihintay, ako'y maghihintay)
        Ako'y maghihintay sa ngalan ng pag-ibig mo`,
        lyricsTranslated: 
        `How long do I have to wait?
        Like there's no one who can ever replace you.
        Wherever you may be, my heart screams
        it's you until now
        
        If only you can see, 
        the sadness in your smile.
        One morning you didn't return. 
        Wake up so you can see, 
        the sweetness of a moment
        Of a yesterday that isn't coming back.
        
        Until the end of our forever
        Until our hearts are numb
        Even when forever ends
        I'll wait in the name of love
        
        How long do I have to wait
        till I feel there's no one else that you love?
        Wherever you may be, my heart screams
        it's you until now
        
        If only you can see, 
        the sadness in your smile.
        One morning you didn't return. 
        Wake up so you can see, 
        the sweetness of a moment
        Of a yesterday that isn't coming back.
        
        Until the end of our forever
        Until our hearts are numb
        Even when forever ends
        I'll wait in the name of love
        
        How long do I have to endure this? 
        I'm drowing from over-thinking. 
        The last time I felt you was in my dreams.
        You from the past
        Still you to this day.
        
        Until the end of our forever
        Until our hearts are numb
        
        Until the end of our forever (I'll wait, I'll wait)
        Until our hearts are numb (I'll wait in the name of love)
        Even when forever ends (I'll wait, I'll wait)
        I'll wait in the name of your love`,
        message: `Once again, one of my favorite songs. A song of longing and waiting. Amor, I've said it before, and I'll say it again. I would've waited for you.
                  But, I mainly chose this song cause of it's title. "Sa Ngalan Ng Pag-Ibig" translates to in the name of love" which I felt was right to add in this playlist. But also,
                  for the chorus. Until the ends of our forever, until our hearts are numb, even when forever ends, I'll wait in the name of love. Quite romantic, don't you think? 
                  The longing and the waiting which as you know are my favorite which makes this one of my favorite songs.`
    },
    {
        id: 12,
        tabName: "Song 12", 
        title: "Pangako",
        artist: "Rey Valera", 
        file: process.env.PUBLIC_URL + "/audio/Pangako.mp3",
        lyricsOriginal: 
    `   Noon akala ko ang wagas na pag-ibig
        Ay sa nobela lang matatagpuan
        At para bang kay hirap na paniwalaan

        Ikaw, ikaw pala ang hinihintay kong pangarap
        Ngayong kapiling ka at tayo'y iisa
        Hindi ko hahayaan na sa atin ay may hahadlang

        Pangako sa'yo ipaglalaban ko
        Sa hirap at ginhawa ang ating pag-ibig
        Upang 'di magkalayo kailanman
        'Pagkat ang tulad mo ay minsan lang sa buhay ko

        Ikaw, ikaw pala ang hinihintay kong pangarap
        Ngayong kapiling ka at tayo'y iisa
        Hindi ko hahayaan na sa atin ay may hahadlang

        Pangako sa'yo ipaglalaban ko
        Sa hirap at ginhawa ang ating pag-ibig
        Upang 'di magkalayo kailanman
        'Pagkat ang tulad mo ay minsan lang sa buhay ko
        
        For better or for worst
        For richer or for poorer
        In sickness and in health
        'Til death do us part

        Upang 'di magkalayo kailanman
        'Pagkat ang tulad mo ay minsan lang sa buhay ko
        Pangako sa'yo ipaglalaban ko
        Sa hirap at ginhawa ang ating pag-ibig
        Upang 'di magkalayo kailanman
        'Pagkat ang tulad mo ay minsan lang sa buhay ko

        Oh, oh-oh, la-la-la, doo-roo, la-la`,
        lyricsTranslated: 
        `Back then, I thought true love
        was only found in novels
        and was hard to believe in. 
        
        You, you are the dream 
        I've been waitring for. 
        Now that you're in my arms and we're alone,
        I'm not going to let anything
        happen to us. 
        
        I promise you, I'll fight for our love
        Even during the hardships,
        I'll never be far away.
        Because someone like you, only comes once in my life.

        For better or for worst
        For richer or for poorer
        In sickness and in health
        'Til death do us part
        
        I'll never be far away.
        Because someone like you, only comes once in my life. 
        I promise you, I'll fight for our love
        Even during the hardships,
        I'll never be far away.
        Because someone like you, only comes once in my life.`,
        message: `This song, I chose this song to be last because it's a promise. It's basically someone's vows which is why some weddings vows are said in the song. 
                  I promise, amor, to fight for our love, always, Even during the fights and the hardships, I know it'll be you and I in the end which is why I chose 
                  song to be in here and why I chose it to be last. Pangako ko sayo (I promise you).`
    }
];

export default songs;
