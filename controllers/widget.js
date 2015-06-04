var args = arguments[0] || {},
	moment = require('alloy/moment');

Object.defineProperty($, "date", {
	set: function(date) {
		$.label.date = date;
		$.label.text = timeago(date);
	},
	get: function() {
		return $.label.date;
	}
});

if(typeof args.date != "undefined") {
	$.date = args.date;
	delete args.date;
} 

$.label.applyProperties(_.omit(args, 'id'));

function timeago(date) {
	
	var now = moment(),
		seconds = now.diff(moment(date), 'seconds'),
		minutes = seconds / 60,
		hours = minutes / 60,
		days = hours / 24,
		years = days / 365,
	
		wordConditions = [
			seconds < 45, seconds < 90,
			minutes < 45, minutes < 90,
			hours < 24, hours < 42,
			days < 30, days < 45, days < 365,
			years < 1.5, true
		],
		
		wordResults = [
			{key: 'seconds', value: Math.round(seconds)},
			{key: 'minute', value: 1},
			{key: 'minutes', value: Math.round(minutes)},
			{key: 'hour', value: 1},
			{key: 'hours', value: Math.round(hours)},
			{key: 'day', value: 1},
			{key: 'days', value: Math.round(days)},
			{key: 'month', value: 1},
			{key: 'months', value: Math.round(days / 30)},			
			{key: 'year', value: 1},
			{key: 'years', value: Math.round(years)}	
		];
		
	for(i = 0; i < wordConditions.length; i++) {
		if(wordConditions[i]) {
			var message = L("it_toriphes_timeago_" + wordResults[i].key);
			return String.format(message, parseInt(wordResults[i].value));
		}
	}	
}

$.inWords = function(date) {
	return timeago(date);
};

