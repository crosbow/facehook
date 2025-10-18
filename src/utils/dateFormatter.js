const dateFormatter = (date) => {
  let different = new Date().getTime() - new Date(date).getTime(); // returns in millisecond

  different = different / 1000; // convert to second

  let day;
  if (different >= 86400) {
    day = Math.floor(different / 86400);
    different -= day * 86400;
  }

  const hour = Math.floor(different / 3600);
  different -= hour * 3600; // keeps the minutes time

  const minute = Math.floor(different / 60);
  different -= minute * 60;

  if (day) {
    return `${day} day ${hour} hour ${minute} min ${Math.floor(
      different
    )} second`;
  } else if (hour) {
    return `${hour} hour ${minute} min ${Math.floor(different)} second`;
  } else {
    return `${minute} min ${Math.floor(different)} second`;
  }
};
export { dateFormatter };
