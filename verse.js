//js
document.getElementById("button").onclick = function() { bibleVerse()};

function bibleVerse(){

    var bChap = [
        "Lamentations 3:22-23",
        "2 Corinthians 4:16-18",
        "John 15:13",
        "Ephesians 3:20",
        "Deuteronomy 31:6",
        "Psalm 27:12",
        "John 4:18",
        "Romans 8:31",
        "Romans 15:13",
        "Psalm 31:24",
        "Isaiah 41:10",
        "Isaiah 40:31",
        "Mark 10:27",
        "1 Peter 5:7",
        "Matthew 19:26",
        "Philippians 4:13",
        "1 Corinthians 15:58"];

    var bVerse = [ 
        "The steadfast love of the LORD never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness.",
        "So we do not lose heart. Though our outer self is wasting away, our inner self is being renewed day by day. For this light momentary affliction is preparing for us an eternal weight of glory beyond all comparison, as we look not to the things that are seen but to the things that are unseen.",
        "Greater love has no one than this: to lay down one's life for one's friends.",
        "Now to him who is able to do immeasurably more than all we ask or imagine, according to his power that is at work within us.",
        "Be strong and courageous. Do not be afraid or terrified because of them, or the LORD your God goes with you; he will never leave you nor forsake you.",
        "The LORD is my light and my salvation; whom shall I fear? The LORD is the stronghold of my life; of whom shall I be afraid?",
        "There is no fear in love. But perfect love drives out fear, because fear has to do with punishment. The one who fears is not made perfect in love.",
        "What, then, shall we say in response to these things? If God is for us, who can be against us?",
        "May the God of hope fill you with all joy and peace as you trust in him, so that you may overflow with hope by the power of the Holy Spirit.",
        "Be strong, and let your heart take courage, all you who wait for the LORD!",
        "Fear not, for I am with you; be not dismayed, for I am your God; I will strengthen you, I will help you, I will uphold you with my righteous right hand.",
        "But they who wait for the LORD shall renew their strength; they shall mount up with wings like eagles; they shall run and not be weary; they shall walk and not faint.",
        "Jesus looked at them and said, ‘With man it is impossible, but not with God. For all things are possible with God.'",
        "Casting all your anxieties on him, because he cares for you.",
        "But Jesus looked at them and said, ‘With man this is impossible, but with God all things are possible.'",
        "I can do all things through him who strengthens me.",
        "Therefore, my beloved brothers, be steadfast, immovable, always abounding in the work of the LORD, knowing that in the LORD your labor is not in vain."];

    var org = Math.floor(Math.random() * bVerse.length);

    var chap = bChap[org];
    var name = bVerse[org];

    document.getElementById("chapter").textContent = chap;
    document.getElementById("verses").textContent = name;

}


// const chapter = document.querySelector("#chapter")
// const verse = document.querySelector("#verses")

// const bChap = [
//         "Lamentations 3:22-23",
//         "2 Corinthians 4:16-18",
//         "John 15:13",
//         "Ephesians 3:20",
//         "Deuteronomy 31:6",
//         "Psalm 27:12",
//         "John 4:18",
//         "Romans 8:31",
//         "Romans 15:13",
//         "Psalm 31:24",
//         "Isaiah 41:10",
//         "Isaiah 40:31",
//         "Mark 10:27",
//         "1 Peter 5:7",
//         "Matthew 19:26",
//         "Philippians 4:13",
//         "1 Corinthians 15:58"];

//     const bVerse = [ 
//         "The steadfast love of the LORD never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness.",
//         "So we do not lose heart. Though our outer self is wasting away, our inner self is being renewed day by day. For this light momentary affliction is preparing for us an eternal weight of glory beyond all comparison, as we look not to the things that are seen but to the things that are unseen.",
//         "Greater love has no one than this: to lay down one's life for one's friends.",
//         "Now to him who is able to do immeasurably more than all we ask or imagine, according to his power that is at work within us.",
//         "Be strong and courageous. Do not be afraid or terrified because of them, or the LORD your God goes with you; he will never leave you nor forsake you.",
//         "The LORD is my light and my salvation; whom shall I fear? The LORD is the stronghold of my life; of whom shall I be afraid?",
//         "There is no fear in love. But perfect love drives out fear, because fear has to do with punishment. The one who fears is not made perfect in love.",
//         "What, then, shall we say in response to these things? If God is for us, who can be against us?",
//         "May the God of hope fill you with all joy and peace as you trust in him, so that you may overflow with hope by the power of the Holy Spirit.",
//         "Be strong, and let your heart take courage, all you who wait for the LORD!",
//         "Fear not, for I am with you; be not dismayed, for I am your God; I will strengthen you, I will help you, I will uphold you with my righteous right hand.",
//         "But they who wait for the LORD shall renew their strength; they shall mount up with wings like eagles; they shall run and not be weary; they shall walk and not faint.",
//         "Jesus looked at them and said, ‘With man it is impossible, but not with God. For all things are possible with God.'",
//         "Casting all your anxieties on him, because he cares for you.",
//         "But Jesus looked at them and said, ‘With man this is impossible, but with God all things are possible.'",
//         "I can do all things through him who strengthens me.",
//         "Therefore, my beloved brothers, be steadfast, immovable, always abounding in the work of the LORD, knowing that in the LORD your labor is not in vain."];


// button.addEventListener("click",bibleVerse)
// function bibleVerse(){
//     const bibleNo = parseInt(Math.random()*bChap.length)
    
//     chapter.textContent = bChap[bibleNo]
//     verse.textContent = bVerse[bibleNo]
// }
