// alt ../data/imgs/groot.jpg
var avengersArray = [
	{
        name: 'Groot',
		photo: 'https://cdn.vox-cdn.com/thumbor/uuBPeqYwgwBBQVDROkyoCGCCmzw=/0x0:1200x696/1820x1213/filters:focal(535x82:727x274):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/58843699/baby-groot-guardians.0.0.jpg',
		scores: [
			'1',
			'1',
			'1',
			'1',
			'1',
			'1',
			'1',
			'1',
			'1',
			'1'
		]
	},
	{
		name: 'Tony Stark',
		photo: 'https://cdn3.movieweb.com/i/article/OybF9mMBr9EkmGz94QCKPB2in4smsG/1107:50/Avengers-4-Tony-Stark-Iron-Man-Dead-Writer.jpg',
		scores: [
			'3',
			'3',
			'3',
			'3',
			'3',
			'3',
			'3',
			'3',
			'3',
			'3'
		]
	},
	{
		name: 'Thor',
		photo: 'https://d13ezvd6yrslxm.cloudfront.net/wp/wp-content/images/avengers-endgame-thor-hammer-axe.jpg',
		scores: [
			'2',
			'2',
			'2',
			'2',
			'2',
			'2',
			'2',
			'2',
			'2',
			'2'
		]
	},
	{
		name: 'Captain America',
		photo: 'https://cdn.britannica.com/30/182830-050-96F2ED76/Chris-Evans-title-character-Joe-Johnston-Captain.jpg',
		scores: [
			'4',
			'4',
			'4',
			'4',
			'4',
			'4',
			'4',
			'4',
			'4',
			'4'
		]
	},
];

module.exports = avengersArray;

// // You should save your application's data inside of 
// // app/data/friends.js 
// as an array of objects. Each of these objects should roughly follow the format below.

// {
//     "name":"Ahmed",
//     "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
//     "scores":[
//         5,
//         1,
//         4,
//         4,
//         5,
//         1,
//         2,
//         5,
//         4,
//         1
//       ]
//   }

//   Convert each user's results into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
// With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the totalDifference.
// Example:
// User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
// User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]
// Total Difference: 2 + 1 + 2 = 5
// Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both 5-3 and 3-5 as 2, and so on.
// The closest match will be the user with the least amount of difference.



// Once you've found the current user's most compatible friend, display the result as a modal pop-up.

// The modal should display both the name and picture of the closest match.
