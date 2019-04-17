$(".button").click(function() {
    var q1answer1= $(".answer1").val();
    var q1answer2= $(".answer1").val();
    var q2answer1= $(".answer2").val();
    var q2answer2= $(".answer2").val();
    if (q1answer1==="1" && q2answer1==="Male") {
        $(".posanswer").text("You are Ma Hongjun. He is short and chubby, but gives off a kind of sturdy feeling. Short hair, small eyes, face healthy and plump looking also had somewhat a cute feeling. On top of his lips are two small mustaches.His appearance undergoes a transformation after he absorb Ten Headed Fierce Yang Serpent Neidan for his 7th Spirit Ring. He has now an appearance of well proportioned youth, a head of short red hair in a mohican style, set off by the bright fiery red plumage, his whole body seemed extremely vigorous, and still had a somewhat noble compelling feeling. Even just standing there he gave people a kind of intangible pressure. When he became a god he became a handsome, young man who appears to be in 20s maybe teens. A goddess was attracted to him because of the eyes.");
        $(".posanswer").append("<br><img src='https://vignette.wikia.nocookie.net/soulland/images/8/81/GodRealm.PNG/revision/latest/scale-to-width-down/250?cb=20180829134437'>");
    } else if (q1answer1==="1" || q2answer1==="Female") {
        $(".posanswer").text("You are Zhu Zhuqing. She has long black hair scattered over her shoulders. She has an extremely well developed figure that is somewhat inconsistent with her age. If not seeing her face, very likely one would believe she is an adult young lady, especially the imposing bosom, even more could attract all men’s attention. Her facial expression is very indifferent giving off a kind of chill rising from the heart, pure cold, a pair of black eyes that did not hold even a trace of vitality.");
        $(".posanswer").append("<br><img src='https://vignette.wikia.nocookie.net/soulland/images/d/d4/Zhu_Zhuyun_2.jpg/revision/latest?cb=20150630085916'>");    
    } else if (q1answer2==="2" || q2answer1==="Male") {
        $(".posanswer").text("You are Dai Mubai. He is a handsome man tall with broad shoulders, a head of long golden hair unrolling behind him, falling down nearly to his waist. His hair does not curl, and hangs straight down. He gives a powerful impression. Most eye catching were his eyes, those were a pair of evil eyes, both eyes unexpectedly has twin pupils, within the deep blue eyes was a very cold gaze, a kind of icy cold evolving from the depths of the heart, an evil light glimmering between half open eyelids, under his gaze, the whole body felt like cut by a sharp sword.");
        $(".posanswer").append("<br><img src='https://vignette.wikia.nocookie.net/soulland/images/0/00/Dai_Mubai_20.jpg/revision/latest?cb=20150618213858'>");
    } else if (q1answer2==="2" || q2answer2==="Female") {
        $(".posanswer").text("You are Xiao Wu. She is a beautiful girl with a rosy face. She has a fair and soft appearance that resembles a completely ripe honey peach. She has beautiful long legs. Her brown long hair is combed into a scorpion braid hanging past her buttocks. She possesses a pair of bright and intelligent eyes. She is a spirit beast who transformed into a human on reaching 100,000 years of cultivation. ");
        $(".posanswer").append("<br><https://vignette.wikia.nocookie.net/soulland/images/5/56/Xiao_Wu_Mug_3.jpg/revision/latest?cb=201510111424133'>");
    } else {
        
    }
});

