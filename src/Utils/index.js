let _serverUrl = "lapotnewapi2.nogdevhouse.com";
// "lapotnewapi.nogdevhouse.com";
// "localbackend.nogdevhouse.com";

// let apiProtocol = "http:";

// if (apiProtocol === undefined) {
//   apiProtocol = window.location.protocol;
// } 

let baseApiPath = "https://" + _serverUrl + '/api';

export const api_url = baseApiPath;
export const _mediaUrl = 'https://lapotnewapi2files.nogdevhouse.com/images/products/';

export function getFlagEmoji(countryCode) {
    const codePoints = countryCode
      .toUpperCase()
      .split('')
      .map(char =>  127397 + char.charCodeAt());
    return String.fromCodePoint(...codePoints);
  }

// Set a Cookie
function setCookie(cName, cValue, expDays) {
  let date = new Date();
  date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
  const expires = "expires=" + date.toUTCString();
  document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
}

function getCookie(cName) {
  const name = cName + "=";
  const cDecoded = decodeURIComponent(document.cookie); //to be careful
  const cArr = cDecoded .split('; ');
  let res;
  cArr.forEach(val => {
      if (val.indexOf(name) === 0) res = val.substring(name.length);
  })
  return res;
}