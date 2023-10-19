let re = /cats?/; // forward slash is used as a deliminator to denote the regex pattern in between /regex/

let pattern = "cats?";
let re = new RegExp(pattern);
re.test('fatcat')

let re = /\(\d{3}\) \d{3}\-\d{4}/;

let pattern = "\(\d{3}\) \d{3}\-\d{4}";
let re = new RegExp(pattern);
re.test('555-555-5555');
re.test('(555) 555-5555');
