import moment from 'moment';

export const DateFormat = {
	day: "d",
	weekday: "EEEE",

	shortMonth: "MMM",
	month: "MMMM",

	time: "hh:mm a",
	date: "DD MMM YYYY",

	dateTime: "DD MMM YYYY hh:mm a",

	iso: "YYYY-MM-DD'T'HH:mm:ss.SSSZZ",

	serverDate: "MMDDYYYY",
	claimFilterDate: "DDMMYYYY",

	serverFriendly: "YYYY-MM-DD",
	indianDate: "DD-MM-YYYY",

	monthDate: "MMM DD"
}

	Date.prototype.format = function (format) {
	return moment(this).format(format)
};