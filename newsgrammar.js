/**
 * @author Shawn
 */

var grammar = {

	"occupation": [
		"Baker",
		"Farmer",
		"Soldier",
		"Reverend",
		"Teacher",
		"Lumberjack",
		"Nurse",
		"Mayor",
		"Council"
	],

	"firstName": ["Tim","Susan","Charles","Agnes","Arabella","Mabel","Elizabeth"],
	"lastName": ["Smith","Black","Green","Brown","Cooper","Graham","Nadeau"],
	"town": ["Bristol","Shawville","Quyon","Caldwell","Portage","Chapeau"],

	"preamble": ["#firstName# #lastName#, of #town#, was walking in the forest when", "#firstName# #lastName#, denizen of #town#, had just gone to do the chores when"],
	"accident": ["a pig escaped from its pen, knocking","a beam broke, hitting"],
	"injury":["a leg","an arm","hips","ribs","rib"],
	"aftermath":["suffering for days, who then died","living in excruciating pain, who then died"],

	"origin2": ["News reaches us that #preamble# #accident# the poor individual, breaking #injury#, hurting the poor soul, #aftermath#", "Our correspondent hears that #preamble# #accident# the poor individual, breaking #injury#, hurting the poor soul, #aftermath#"],

	"kittenPhotoURL": [
		"http://media.tumblr.com/tumblr_laxjtlso9K1qzjix8.gif"
	],
	"reactionURL": [
		"imgs/skull.gif",
		"imgs/happyskeleton.gif",
		"http://tinyurl.com/p8jzq4g",
		"http://tinyurl.com/lt42vrx",
		"http://tinyurl.com/3ghat59",
		"http://tinyurl.com/mx4yqk9",
		"http://tinyurl.com/lssxt9v",
		"http://tinyurl.com/nf6oy85",
		"https://i.giphy.com/media/h5NLPVn3rg0Rq/giphy.webp",
		"imgs/PW7MoTD2d9pJK.gif"
	],
	"newsPhoto": [
		"<br><img class='media' src='#reactionURL#' width='220'><br>"
	],
	"insertpictures": [
		"#newsPhoto#<figcaption class='figcaption'>How computer scientists see IF authors</figcaption>","#newsPhoto#<figcaption class='figcaption'>#lastName# says 'stunned!'</figcaption>","#newsPhoto#<figcaption class='figcaption'>How the rest of the world sees both of them</figcaption>","","",""
	],
	"oldstories": ["Mr. John Bums of Admaston was out hunting recently on the Opeongo with his brother. At a certain point they seperated to take different roads which would eventually bring them together again. John however changed his mind and taking another road fell into his brother's backs. He mounted a log summit - what icy to discover the whereabouts of bis brother and a sudden noise behind him caused him to turn sharply. He slipped on the log his hand lowing the gun which was UiseluugeU by a projection of the log; and the bullet went through his left twice entering the under side of the arm near the wrist and coming out finally underneath just below the elbow. A number of small bones were broken;  Mr Burns was under surgical treatment in Renfrew for a day or so. He had a narrow escape from more  serious injuries.","Girls should be taught something of what they owe to posterity as well as to themselves, for in their hands lie the health and happiness of the entire nation. They are too often reared in total ignorance of the commonest physiological facts, since some mothers suppose that a fine pure young mind would be depraved by the slightest study of the simple rules of health. Hundreds of young girls injure themselves irreparably through this false doctrine, and never know it till they are wives and mothers. Late hours, cramped positions during study, overexertion, and, worst of all, acceptance of fashions which displace the bones and internal organs till the mischief has become irreparable even by the surgeon, are some, says Mr. Haweis, of the vicious habits which are sapping the comfort of this generation and the mental and physical well-being of the next.","About half-past two on Saturday morning last while a freight trane from the east was slowly pulling into tho #town# yard John Gabrouie one of the brakesmen aged about twenty one was accidentally killed having fallen between two of the cars the body being dragged three or four car lengths along the track. Death must have resulted quickly as the neck was broken. The arm mid shoulder bones were also broken and injuries on other parts of the body.","The strange transformation of this body is not the only instance recorded. The small number of dead removed has not afforded an opportunity to learn how common an occurrence this may be but learned gentlemen tell me that when Gabriel blows hie bugle or the disinterring of bodies becomes necessary in the Black Hills country many bodies will be found turned to stone. The other Instance related is that of Wild Bill murdered in Deadwood by Jack Call ten years ago. Bill was buried on the mountain aide and the building of residences compelled the unearthing of his bones. What was the surprise of his friends when they discovered that the famous frontiersman was a solid stone petrified. This revelation may appear strange to Eastern readers but here it is an open secret.","We were very much surprised last week on perusing the columns of the Pembroke Standard to observe that that journal boldly accuses us of having stolen body and bones from its columns a communication from its correspondent  Shanty Boy . This is rather a sweeping accusation to make and if we resented it by administering the lash somewhat severely it would be nothing more than our contemporary richly deserves. Nevertheless we are not disposed to deal harshly with it by using the weapon of defence which its inexperience and exuberant  freshness has placed within our reach. The Equity doesn't have to steal correspondence from the Standard or any other publication.","While pressing hay at Mr. E. Dale's on Wednesday last, Mr. Wm. Park had one of his feet badly jammed in the machine. Although severely bruised, Dr. Lyon found no bones broken upon examination.<Br>The hay press is responsible for more accidents than any other machine used in connection with agricultural pursuits. It seems very strange that no better and safer way of feeding the hay to the machine can be discovered than by cramming it in with the foot."],

	"origin": [
		"#origin2#","#oldstories#"],

	"headline": ["#firstName# #lastName# in #scandal# scandal!","'Fire the #occupation#!' says #lastName#","#machine# kills #lastName#","Man Bites Dog","#lastName# and #lastName# to Wed","New Gov't Regs Coming says #occupation#"],

	"scandal": ["Elections","Gov't","Bones","Academic"],
	"machine": ["Thresher","Combine","Harvester","Logdrive","Kiln","Railcar","Woman","Man","#occupation#"],
	"emotion": ["Flummoxed","Baffled","Concerned","Puzzled","Troubled"],
	"bylines": ["<span class='headline hl4'> by #firstName# #lastName# </span>","<span class='headline hl6'>#occupation# is #emotion#</span>","<span class='headline hl2'>#machine# seen as Culpable</span>","<span class='headline hl2'>#headline#</span>"]
}
