// https://leetcode.com/explore/featured/card/wix-engineering/651/arrays-and-strings/4154/
const emails = [
  "test.email+alex@leetcode.com",
  "test.e.mail+bob.cathy@leetcode.com",
  "testemail+david@lee.tcode.com",
];
var numUniqueEmails = function (emails) {
  const uniqueEmail = new Set();

  emails.forEach((email) => {
    const [localName, domain] = email.split("@");

    const parsedLocalName = localName.replace(/\+.*/, "").replace(/\./gi, "");
    uniqueEmail.add([parsedLocalName, domain].join("@"));
  });

  return uniqueEmail.size;
};

console.log(numUniqueEmails(emails));
