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
