var qna = [
	{
		"question": "How often do you exercise?",
		"category": "strength",
		"options": {
			"0.5": "I rarely ever exercise at all.",
			"1.5": "I do not exercise as frequently as most people.",
			"2.5": "I exercise about as often as most people.",
			"3.5": "I exercise more frequently than others.",
			"4.5": "I exercise everyday to ensure my fitness."
		}
	},
	{
		"question": "Think of the food that you eat on a regular basis. How healthy is this food?",
		"category": "strength",
		"options": {
			"0.5": "I rarely ever, if at all, eat healthily.",
			"1.5": "The food that I eat is not generally considered to be good for you, but I have some days where I eat right.",
			"2.5": "My food is as healthy as most people's.",
			"3.5": "I try to eat healthily. Most of my food is positive nutritionally, but there are some guilty pleasures.",
			"4.5": "I have a strict diet with every meal providing a specific nutritional benefit. I maintain this rigorously."
		}
	},
	{
		"question": "How would you rank your physical strength when compared to the average person?",
		"category": "strength",
		"options": {
			"0.5": "I am the weakest person I know. I need help moving many objects.",
			"1.5": "I am weaker than the average person. I need assistance with moving heavy objects.",
			"2.5": "I am as strong as the average person.",
			"3.5": "I am stronger than the average person. I can lift more than most.",
			"4.5": "I am the strongest person that I know. People come to me to lift or move heavy objects."
		}
	},
	{
		"question": "Imagine yourself after you've just exercised. The routine was just a little over what you would normally do. How would you feel after such an exercise?",
		"category": "strength",
		"options": {
			"0.5": "I would be extremely tired and discouraged from exercising for a period of time.",
			"1.5": "I would be very tired. I would definitely regret pushing myself further.",
			"2.5": "I would just feel tired; maybe a little bit of regret of pushing myself more than usual.",
			"3.5": "I would feel more tired than normal, but happy that I managed to push myself a little.",
			"4.5": "I would feel great. I love pushing myself physically and would be eager to push myself even further the next day."
		}
	},
	{
		"question": "Think of exercises that involve being flexible (yoga, rock climbing, etc.) and think of how your flexibility compares to the average person. Which of the following describes you?",
		"category": "strength",
		"options": {
			"0.5": "I am unable to do any of the exercises that require flexibility.",
			"1.5": "I have a very hard time in exercises that require flexibility.",
			"2.5": "I am pretty average at being flexible.",
			"3.5": "I am nimble, more flexible than average, but there are others more flexible.",
			"4.5": "I am an incredibly flexible person and I excel in stretching. I am essentially a contortionist."
		}
	},
	{
		"question": "Do you find it difficult to keep up with others while playing a sport?",
		"category": "strength",
		"options": {
			"0.5": "I cannot keep up at all.",
			"1.5": "I have a lot of trouble keeping up.",
			"2.5": "I have some trouble keeping up.",
			"3.5": "I have little problem keeping up with others.",
			"4.5": "I am not keeping up with others. They are keeping up with me."
		}
	},
	{
		"question": "How important is being physically strong to you?",
		"category": "strength",
		"options": {
			"0.5": "Strength is not important to me at all.",
			"1.5": "Strength is not too important to me.",
			"2.5": "Strength is pretty important.",
			"3.5": "Strength is very important.",
			"4.5": "Strength is the number one priority in my life."
		}
	},
	{
		"question": "Generally, how healthy are you?",
		"category": "strength",
		"options": {
			"0.5": "I am much less healthy than other people.",
			"1.5": "I am less healthy than the average person.",
			"2.5": "I am as healthy as the average person.",
			"3.5": "I am healthier than the average person.",
			"4.5": "I am the healthiest person out there."
		}
	},
	{
		"question": "How much is being healthy a goal for you?",
		"category": "strength",
		"options": {
			"0.5": "Being healthy is not important to me.",
			"1.5": "I do not really prioritize health in my life, but I keep aware of it.",
			"2.5": "I try to be as healthy as the average person.",
			"3.5": "Being healthy is very important to me.",
			"4.5": "Maintaining my health is the most important goal in my life."
		}
	},
	{
		"question": "How aware are you of your body?",
		"category": "strength",
		"options": {
			"0.5": "I have no idea what my body can do",
			"1.5": "I do not know my body's capabilities that well.",
			"2.5": "I am fairly average with knowledge of my body",
			"3.5": "I am familiar with my abilities and limitations of my body.",
			"4.5": "I know the exact limits and abilities of my body."
		}
	},
	{
		"question": "How long can you read small font?",
		"category": "perception",
		"options": {
			"0.5": "I have a very difficult time reading fine print. I require special lenses to do so and/or I cannot read it for very long.",
			"1.5": "I have a hard time reading small font and/or require lenses.",
			"2.5": "I can read fine print with normal levels of eye fatigue.",
			"3.5": "I can read fine print longer than most people.",
			"4.5": "I can read fine print all day without eye fatigue."
		}
	},
	{
		"question": "When comparing your sense of smell to the average person, how would you rank it?",
		"category": "perception",
		"options": {
			"0.5": "I have lost my sense of smell or equivalent.",
			"1.5": "My sense of smell is dull. I am incapable of detecting many odors.",
			"2.5": "I think I have an average sense of smell.",
			"3.5": "I have a pretty sharp sense of smell.",
			"4.5": "I have the keenest sense of smell. I am basically a purfumist with my ability to sense the subtle arrangement of smells."
		}
	},
	{
		"question": "How is your sense of taste compared to the average person?",
		"category": "perception",
		"options": {
			"0.5": "I have essentially no sense of taste.",
			"1.5": "I have a below average sense of taste and I miss out of a lot of flavorings.",
			"2.5": "I have an average sense of taste.",
			"3.5": "I have an above average sense of taste. I am able to detect some complex flavors.",
			"4.5": "I have a very advanced pallet and I am able to detect subtle flavorings."
		}
	},
	{
		"question": "How good is your sense of touch?",
		"category": "perception",
		"options": {
			"0.5": "I have no sense of touch, only complete numbness.",
			"1.5": "My sense of touch is damaged in certain areas and is numb.",
			"2.5": "My sense of touch is a little dull. I need things to be a little more heavy-handed for me to feel it.",
			"3.5": "I have an average sense of touch.",
			"4.5": "I have a very fine sense of touch. I can feel very gentle things."
		}
	},
	{
		"question": "How would you compare your sense of hearing to the average person?",
		"category": "perception",
		"options": {
			"0.5": "I am deaf.",
			"1.5": "I have more serious hearing loss and require loudness to compensate or a hearing aid.",
			"2.5": "I have some ear damage and I am unable to hear some frequencies.",
			"3.5": "I have average hearing.",
			"4.5": "I have above average hearing. I can hear frequencies others cannot and pick up sounds that most people do not notice."
		}
	},
	{
		"question": "Can you quickly identify things audibly?",
		"category": "perception",
		"options": {
			"0.5": "I am the worst at identifying sounds.",
			"1.5": "My ability is worse than average in identifying sounds quickly or accurately.",
			"2.5": "My ability is pretty average in identifying sounds quickly or accurately.",
			"3.5": "I am able to identify sounds quickly and more accurately than the average person.",
			"4.5": "I can trace the most obscure sounds to their origin instantly with great accuracy."
		}
	},
	{
		"question": "How present are you?",
		"category": "perception",
		"options": {
			"0.5": "I am very much removed from reality.",
			"1.5": "I am more detached than the average person.",
			"2.5": "I am as aware as the average person.",
			"3.5": "I am more present than the average person.",
			"4.5": "I am the most aware of my surroundings."
		}
	},
	{
		"question": "How well can you recognize patterns?",
		"category": "perception",
		"options": {
			"0.5": "I give up on recognizing patterns.",
			"1.5": "It takes me a little longer to identify patterns.",
			"2.5": "I have an average ability in recognizing patterns.",
			"3.5": "I am very quick to recognize patterns.",
			"4.5": "I am able to identify patterns near instantly."
		}
	},
	{
		"question": "How good is your vision?",
		"category": "perception",
		"options": {
			"0.5": "I have the worst vision.",
			"1.5": "My vision is below average.",
			"2.5": "I have average vision.",
			"3.5": "I have better than average vision.",
			"4.5": "I have the best vision."
		}
	},
	{
		"question": "How good is your peripheral vision?",
		"category": "perception",
		"options": {
			"0.5": "I have terrible peripheral vision.",
			"1.5": "My peripheral vision is below average.",
			"2.5": "I have average peripherial vision",
			"3.5": "I have better than average peripheral vision.",
			"4.5": "I have the best peripheral vision."
		}
	},
	{
		"question": "How quickly and accurately do you pick up on other people's emotions?",
		"category": "empathy",
		"options": {
			"0.5": "I am terrible at reading other people's emotions.",
			"1.5": "For the most part, I am not too accurate with understanding others' emotions.",
			"2.5": "I am so-so at reading other people's emotions.",
			"3.5": "I am pretty good at sensing other people's emotions.",
			"4.5": "I am able to quickly identify other people's emotions very accurately."
		}
	},
	{
		"question": "Imagine yourself in a dire situation. Resources are low and there is a looming threat. How necessary are other people in such a circumstance?",
		"category": "empathy",
		"options": {
			"0.5": "I don't need anyone else, so people are unnecessary.",
			"1.5": "There are only a few that would be helpful. All of the others would ruin things.",
			"2.5": "Only the right kind of people are necessary.",
			"3.5": "Most people are necessary and it is important to band together.",
			"4.5": "People are always 100% necessary. In dire circumstances they are even more necessary."
		}
	},
	{
		"question": "Think of everyone you've met and reflect on their character. Think about people you have not met and reflect on what you expect their character to be. From your experiences with others, do you believe that people are naturally good?",
		"category": "empathy",
		"options": {
			"0.5": "Everyone is bad. Everyone. Every single one.",
			"1.5": "The majority of people are bad, but there are some good ones out there.",
			"2.5": "There's about a 50/50 split between people who are good and bad.",
			"3.5": "The majority of people are good. There are some rotten apples though.",
			"4.5": "Everyone is mostly good. The ones who are not acting on it are just misguided/confused."
		}
	},
	{
		"question": "Imagine yourself in a group of peers. When this group is faced with a problem with multiple solutions, what is your role?",
		"category": "empathy",
		"options": {
			"0.5": "I know the right way to fix the problem and I will implement it.",
			"1.5": "I have a solid idea of how to correct the problem, but I'll listen to others to make my solution stronger.",
			"2.5": "I have an idea in mind on how to fix it and I will use others' ideas to enhance it.",
			"3.5": "I work with everyone to reach a solution, but I exclude what I think are bad ideas.",
			"4.5": "I strive to include everyone's ideas, no matter what, and create a hybrid solution to the problem."
		}
	},
	{
		"question": "In regards to the relationships (friends, family, loved ones, etc.) that you have forged over your lifetime, how important are these relationships to you?",
		"category": "empathy",
		"options": {
			"0.5": "I do not value relationships at all.",
			"1.5": "A lot of my relationships have treated me poorly. So I take most of them with a grain of salt.",
			"2.5": "The relationships I have had are a big part of my life. There are some regrets, but I still value them to a degree.",
			"3.5": "My relationships are a huge part of me, good or bad.",
			"4.5": "These relationships are more than essential. If I did not have them, I would cease to exist."
		}
	},
	{
		"question": "Do you consider yourself a people person?",
		"category": "empathy",
		"options": {
			"0.5": "I am not a people person at all. At all.",
			"1.5": "I am not really a people person.",
			"2.5": "I am average in my people skills.",
			"3.5": "I am definitely a people person.",
			"4.5": "I am THE people person."
		}
	},
	{
		"question": "How much do you like listening to other people's problems?",
		"category": "empathy",
		"options": {
			"0.5": "People's problems do not interest me at all.",
			"1.5": "I do not like listening to other people's problems.",
			"2.5": "I like listening to other people's problems as much as an average person.",
			"3.5": "I like listening to other people's problems more than an average person.",
			"4.5": "I love listening to people's problems."
		}
	},
	{
		"question": "When you are stressed do you turn to other people?",
		"category": "empathy",
		"options": {
			"0.5": "I never turn others to ease my stress. I don't need them.",
			"1.5": "I rarely turn to others when I am stressed.",
			"2.5": "I sometimes turn to others when I am stressed.",
			"3.5": "Most of the time I turn to others when I am stressed.",
			"4.5": "I definitely turn to others to help ease my stress."
		}
	},
	{
		"question": "How likely are you to sacrifice something you value to help someone else?",
		"category": "empathy",
		"options": {
			"0.5": "I will not sacrifice anything to help anyone.",
			"1.5": "I will sacrifice something to help only very few people I know.",
			"2.5": "I will sacrifice something to help some people.",
			"3.5": "I will sacrifice something to help most people.",
			"4.5": "All people are indispensable and I will happily do anything to help another."
		}
	},
	{
		"question": "How trustworthy do other people see you?",
		"category": "empathy",
		"options": {
			"0.5": "No one trusts me at all.",
			"1.5": "People do not trust me that often.",
			"2.5": "I am about average in my trustworthiness.",
			"3.5": "People see me as very trustworthy.",
			"4.5": "People see me as the image of trustworthiness."
		}
	},
	{
		"question": "Imagine how you would feel if you were just in a very stressful situation. How well are you able to de-stress yourself?",
		"category": "willpower",
		"options": {
			"0.5": "I carry the stress with me and could take years before I am fully relieved of it.",
			"1.5": "I would need a prolonged vacation to escape the stress and fully relax.",
			"2.5": "I would need a couple days to unwind and be ready for more.",
			"3.5": "I would only need a few moments to collect my thoughts.",
			"4.5": "I can take a few breaths and be completely relaxed."
		}
	},
	{
		"question": "When in a group setting, how often do you find yourself leading the group, making decisions, initiating activities, etc.?",
		"category": "willpower",
		"options": {
			"0.5": "I am never in charge of groups.",
			"1.5": "I usually let others take care of such things.",
			"2.5": "It is about 50/50 that I am responsible for making decisions.",
			"3.5": "Most of the time I find myself to be taking the lead.",
			"4.5": "In every group I am in, I am the one in charge."
		}
	},
	{
		"question": "How do you feel if you think that there is a chance that you will be unable to complete a task or goal?",
		"category": "willpower",
		"options": {
			"0.5": "The chance that I will be unable to complete what I want to do discourages me completely.",
			"1.5": "The possibility of failure is discouraging to me and affects me and my performance.",
			"2.5": "It is unnerving being unable to reach goals or complete tasks, but I still try.",
			"3.5": "I am fairly confident that I will overcome obstacles.",
			"4.5": "I do not worry, as I know I will succeed."
		}
	},
	{
		"question": "How do you feel about the thought of becoming more dependable, having more people relying on you, and/or having an increased set of responsibilities?",
		"category": "willpower",
		"options": {
			"0.5": "I avoid such things. I often view people as being needy or something similar if they need me.",
			"1.5": "I generally dislike being depended on. I can help out here and there, but I let people do their own thing.",
			"2.5": "I try to be reliable only for certain groups (friends, co-workers, etc.). I can help out if it is not too much of an inconvenience.",
			"3.5": "I generally like it. I am there for most others very often, but I do have my limits.",
			"4.5": "I welcome it. I enjoy being the person that anyone can depend on."
		}
	},
	{
		"question": "Imagine performing a single simple task over and over again. How long would you be able to focus on this repetitive task?",
		"category": "willpower",
		"options": {
			"0.5": "I have a mind for these types of things. I am able to perform repetitive tasks almost endlessly and always with enthusiasm.",
			"1.5": "I would give it my best shot, but I would get bored much later on.",
			"2.5": "I would try the task and would eventually get bored, but I would try to stay engaged.",
			"3.5": "I would give it a shot, but still get bored easily. I would perform the task for a short while before being distracted.",
			"4.5": "I would not waste my time performing the task. I would not even start this task because of how boring it is."
		}
	},
	{
		"question": "Are you able to convince people to listen to you?",
		"category": "willpower",
		"options": {
			"0.5": "No one listens to me.",
			"1.5": "I am not that good at convincing people to do what I say.",
			"2.5": "I am average in my skill in convincing people to listen to me.",
			"3.5": "I am better than average at convincing people.",
			"4.5": "I am able to convince anyone to see my point."
		}
	},
	{
		"question": "How easily can you make difficult decisions?",
		"category": "willpower",
		"options": {
			"0.5": "I am terrible at making difficult decisions.",
			"1.5": "I need more time when considering a difficult decision.",
			"2.5": "I am average in my ability to make difficult decisions.",
			"3.5": "My decision making skills are faster and more confident than average.",
			"4.5": "I am able to my decisions that stump most people confidently and quickly."
		}
	},
	{
		"question": "How often do you follow through with your responsibilities?",
		"category": "willpower",
		"options": {
			"0.5": "I do not follow through on my responsibilities at all.",
			"1.5": "I let a lot of my responsibilities pass me by.",
			"2.5": "I am average in my ability to follow through on my responsibilities.",
			"3.5": "I follow through on most of my responsibilities.",
			"4.5": "I always follow through with any responsibility placed on me."
		}
	},
	{
		"question": "How persistent do you consider yourself?",
		"category": "willpower",
		"options": {
			"0.5": "I am the least persistent person I know.",
			"1.5": "I am less persistent than most.",
			"2.5": "I am average in my persistence.",
			"3.5": "I am more persistent than most.",
			"4.5": "I am the most persistent person I know."
		}
	},
	{
		"question": "How well do you cope with constant frustration?",
		"category": "willpower",
		"options": {
			"0.5": "I am the worst at coping with frustration.",
			"1.5": "I am worse than most in coping with constant frustration.",
			"2.5": "I am average in my coping skills.",
			"3.5": "I am better than average when coping with frustration",
			"4.5": "I am the best at coping with frustration"
		}
	}
]