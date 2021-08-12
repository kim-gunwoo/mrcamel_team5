export const getFormatDate = (date, format) => {
    const yy = date.getFullYear();
    const mm = formatdigit(date.getMonth() + 1, 2);
    const dd = formatdigit(date.getDate(), 2);
    const hh = formatdigit(date.getHours(), 2);
    const mi = formatdigit(date.getMinutes(), 2);
    const ss = formatdigit(date.getSeconds(), 2);
    const miss = formatdigit(date.getMilliseconds(), 3);
  
    if (format.toUpperCase() === "YYYY-MM-DD") {
      return `${yy}-${mm}-${dd}`;
    }
    if (format.toUpperCase() === "YYYYMMDDHHMISS") {
      return `${yy}${mm}${dd}${hh}${mi}${ss}${miss}`;
    }
  };
  
  export const formatdigit = (number, len) => {
    const str = number.toString();
    return str.length >= len
      ? str
      : new Array(len - str.length + 1).join("0") + str;
  };