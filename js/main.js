console.log('Sample JavaScript #6 HW #18');
function checkDomainUrl(str) {
  return (/^(http:|https:)\/\/(?!:\/\/)([a-zA-Z0-9-_]+\.)*[a-zA-Z0-9][a-zA-Z0-9-_]+\.[a-zA-Z]{2,5}?$/).test(str);
}