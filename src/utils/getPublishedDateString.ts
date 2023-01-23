import moment from "moment";
import "moment/dist/locale/nb";

export default function (date: string) {
  moment.locale("nb-no");
  const currentDate = moment();
  const specifiedDate = moment(date);
  const durationSince = moment.duration(currentDate.diff(specifiedDate));
  const minutes = durationSince.asMinutes();
  const hours = durationSince.asHours();
  const days = durationSince.asDays();
  const yesterday = moment().subtract(1, "day");

  // Will return the date in a human readable format

  if (minutes < 5) {
    return "Nå nettopp";
  } else if (hours < 1) {
    return `${minutes.toFixed(0)} minutter siden`;
  } else if (hours > 1 && hours < 2) {
    return `${hours.toFixed(0)} time siden`;
  } else if (days < 1) {
    return `${hours.toFixed(0)} timer siden`;
  } else if (moment(specifiedDate).isSame(yesterday, "day")) {
    return `i går`;
  } else if (days > 1 && days < 7) {
    return `${specifiedDate.format("dddd HH:mm")}`; // Mandag 12:00
  } else if (days > 7) {
    return specifiedDate.format("Do MMMM YYYY"); // 1. Januar 2020
  }
}
