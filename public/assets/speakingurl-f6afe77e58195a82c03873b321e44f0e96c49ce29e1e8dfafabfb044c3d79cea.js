!function(e){"use strict";var n=function(n,e){var a,t,o,i,u,l,s,r,m,c,h,d,g,k,f,y="-",p=[";","?",":","@","&","=","+","$",",","/"],A=[";","?",":","@","&","=","+","$",","],b=[".","!","~","*","'","(",")"],z="",E="",j=!0,S={},O={"\xc0":"A","\xc1":"A","\xc2":"A","\xc3":"A","\xc4":"Ae","\xc5":"A","\xc6":"AE","\xc7":"C","\xc8":"E","\xc9":"E","\xca":"E","\xcb":"E","\xcc":"I","\xcd":"I","\xce":"I","\xcf":"I","\xd0":"D","\xd1":"N","\xd2":"O","\xd3":"O","\xd4":"O","\xd5":"O","\xd6":"Oe","\u0150":"O","\xd8":"O","\xd9":"U","\xda":"U","\xdb":"U","\xdc":"Ue","\u0170":"U","\xdd":"Y","\xde":"TH","\xdf":"ss","\xe0":"a","\xe1":"a","\xe2":"a","\xe3":"a","\xe4":"ae","\xe5":"a","\xe6":"ae","\xe7":"c","\xe8":"e","\xe9":"e","\xea":"e","\xeb":"e","\xec":"i","\xed":"i","\xee":"i","\xef":"i","\xf0":"d","\xf1":"n","\xf2":"o","\xf3":"o","\xf4":"o","\xf5":"o","\xf6":"oe","\u0151":"o","\xf8":"o","\xf9":"u","\xfa":"u","\xfb":"u","\xfc":"ue","\u0171":"u","\xfd":"y","\xfe":"th","\xff":"y","\u1e9e":"SS","\u0627":"a","\u0623":"a","\u0625":"i","\u0622":"aa","\u0624":"u","\u0626":"e","\u0621":"a","\u0628":"b","\u062a":"t","\u062b":"th","\u062c":"j","\u062d":"h","\u062e":"kh","\u062f":"d","\u0630":"th","\u0631":"r","\u0632":"z","\u0633":"s","\u0634":"sh","\u0635":"s","\u0636":"dh","\u0637":"t","\u0638":"z","\u0639":"a","\u063a":"gh","\u0641":"f","\u0642":"q","\u0643":"k","\u0644":"l","\u0645":"m","\u0646":"n","\u0647":"h","\u0648":"w","\u064a":"y","\u0649":"a","\u0629":"h","\ufefb":"la","\ufef7":"laa","\ufef9":"lai","\ufef5":"laa","\u064e":"a","\u064b":"an","\u0650":"e","\u064d":"en","\u064f":"u","\u064c":"on","\u0652":"","\u0660":"0","\u0661":"1","\u0662":"2","\u0663":"3","\u0664":"4","\u0665":"5","\u0666":"6","\u0667":"7","\u0668":"8","\u0669":"9","\u1000":"k","\u1001":"kh","\u1002":"g","\u1003":"ga","\u1004":"ng","\u1005":"s","\u1006":"sa","\u1007":"z","\u1005\u103b":"za","\u100a":"ny","\u100b":"t","\u100c":"ta","\u100d":"d","\u100e":"da","\u100f":"na","\u1010":"t","\u1011":"ta","\u1012":"d","\u1013":"da","\u1014":"n","\u1015":"p","\u1016":"pa","\u1017":"b","\u1018":"ba","\u1019":"m","\u101a":"y","\u101b":"ya","\u101c":"l","\u101d":"w","\u101e":"th","\u101f":"h","\u1020":"la","\u1021":"a","\u103c":"y","\u103b":"ya","\u103d":"w","\u103c\u103d":"yw","\u103b\u103d":"ywa","\u103e":"h","\u1027":"e","\u104f":"-e","\u1023":"i","\u1024":"-i","\u1009":"u","\u1026":"-u","\u1029":"aw","\u101e\u103c\u1031\u102c":"aw","\u102a":"aw","\u1040":"0","\u1041":"1","\u1042":"2","\u1043":"3","\u1044":"4","\u1045":"5","\u1046":"6","\u1047":"7","\u1048":"8","\u1049":"9","\u1039":"","\u1037":"","\u1038":"","\u010d":"c","\u010f":"d","\u011b":"e","\u0148":"n","\u0159":"r","\u0161":"s","\u0165":"t","\u016f":"u","\u017e":"z","\u010c":"C","\u010e":"D","\u011a":"E","\u0147":"N","\u0158":"R","\u0160":"S","\u0164":"T","\u016e":"U","\u017d":"Z","\u0780":"h","\u0781":"sh","\u0782":"n","\u0783":"r","\u0784":"b","\u0785":"lh","\u0786":"k","\u0787":"a","\u0788":"v","\u0789":"m","\u078a":"f","\u078b":"dh","\u078c":"th","\u078d":"l","\u078e":"g","\u078f":"gn","\u0790":"s","\u0791":"d","\u0792":"z","\u0793":"t","\u0794":"y","\u0795":"p","\u0796":"j","\u0797":"ch","\u0798":"tt","\u0799":"hh","\u079a":"kh","\u079b":"th","\u079c":"z","\u079d":"sh","\u079e":"s","\u079f":"d","\u07a0":"t","\u07a1":"z","\u07a2":"a","\u07a3":"gh","\u07a4":"q","\u07a5":"w","\u07a6":"a","\u07a7":"aa","\u07a8":"i","\u07a9":"ee","\u07aa":"u","\u07ab":"oo","\u07ac":"e","\u07ad":"ey","\u07ae":"o","\u07af":"oa","\u07b0":"","\u03b1":"a","\u03b2":"v","\u03b3":"g","\u03b4":"d","\u03b5":"e","\u03b6":"z","\u03b7":"i","\u03b8":"th","\u03b9":"i","\u03ba":"k","\u03bb":"l","\u03bc":"m","\u03bd":"n","\u03be":"ks","\u03bf":"o","\u03c0":"p","\u03c1":"r","\u03c3":"s","\u03c4":"t","\u03c5":"y","\u03c6":"f","\u03c7":"x","\u03c8":"ps","\u03c9":"o","\u03ac":"a","\u03ad":"e","\u03af":"i","\u03cc":"o","\u03cd":"y","\u03ae":"i","\u03ce":"o","\u03c2":"s","\u03ca":"i","\u03b0":"y","\u03cb":"y","\u0390":"i","\u0391":"A","\u0392":"B","\u0393":"G","\u0394":"D","\u0395":"E","\u0396":"Z","\u0397":"I","\u0398":"TH","\u0399":"I","\u039a":"K","\u039b":"L","\u039c":"M","\u039d":"N","\u039e":"KS","\u039f":"O","\u03a0":"P","\u03a1":"R","\u03a3":"S","\u03a4":"T","\u03a5":"Y","\u03a6":"F","\u03a7":"X","\u03a8":"PS","\u03a9":"W","\u0386":"A","\u0388":"E","\u038a":"I","\u038c":"O","\u038e":"Y","\u0389":"I","\u038f":"O","\u03aa":"I","\u03ab":"Y","\u0101":"a","\u0113":"e","\u0123":"g","\u012b":"i","\u0137":"k","\u013c":"l","\u0146":"n","\u016b":"u","\u0100":"A","\u0112":"E","\u0122":"G","\u012a":"I","\u0136":"k","\u013b":"L","\u0145":"N","\u016a":"U","\u040c":"Kj","\u045c":"kj","\u0409":"Lj","\u0459":"lj","\u040a":"Nj","\u045a":"nj","\u0422\u0441":"Ts","\u0442\u0441":"ts","\u0105":"a","\u0107":"c","\u0119":"e","\u0142":"l","\u0144":"n","\u015b":"s","\u017a":"z","\u017c":"z","\u0104":"A","\u0106":"C","\u0118":"E","\u0141":"L","\u0143":"N","\u015a":"S","\u0179":"Z","\u017b":"Z","\u0404":"Ye","\u0406":"I","\u0407":"Yi","\u0490":"G","\u0454":"ye","\u0456":"i","\u0457":"yi","\u0491":"g","\u0103":"a","\u0102":"A","\u0219":"s","\u0218":"S","\u021b":"t","\u021a":"T","\u0163":"t","\u0162":"T","\u0430":"a","\u0431":"b","\u0432":"v","\u0433":"g","\u0434":"d","\u0435":"e","\u0451":"yo","\u0436":"zh","\u0437":"z","\u0438":"i","\u0439":"i","\u043a":"k","\u043b":"l","\u043c":"m","\u043d":"n","\u043e":"o","\u043f":"p","\u0440":"r","\u0441":"s","\u0442":"t","\u0443":"u","\u0444":"f","\u0445":"kh","\u0446":"c","\u0447":"ch","\u0448":"sh","\u0449":"sh","\u044a":"","\u044b":"y","\u044c":"","\u044d":"e","\u044e":"yu","\u044f":"ya","\u0410":"A","\u0411":"B","\u0412":"V","\u0413":"G","\u0414":"D","\u0415":"E","\u0401":"Yo","\u0416":"Zh","\u0417":"Z","\u0418":"I","\u0419":"I","\u041a":"K","\u041b":"L","\u041c":"M","\u041d":"N","\u041e":"O","\u041f":"P","\u0420":"R","\u0421":"S","\u0422":"T","\u0423":"U","\u0424":"F","\u0425":"Kh","\u0426":"C","\u0427":"Ch","\u0428":"Sh","\u0429":"Sh","\u042a":"","\u042b":"Y","\u042c":"","\u042d":"E","\u042e":"Yu","\u042f":"Ya","\u0452":"dj","\u0458":"j","\u045b":"c","\u045f":"dz","\u0402":"Dj","\u0408":"j","\u040b":"C","\u040f":"Dz","\u013e":"l","\u013a":"l","\u0155":"r","\u013d":"L","\u0139":"L","\u0154":"R","\u015f":"s","\u015e":"S","\u0131":"i","\u0130":"I","\u011f":"g","\u011e":"G","\u1ea3":"a","\u1ea2":"A","\u1eb3":"a","\u1eb2":"A","\u1ea9":"a","\u1ea8":"A","\u0111":"d","\u0110":"D","\u1eb9":"e","\u1eb8":"E","\u1ebd":"e","\u1ebc":"E","\u1ebb":"e","\u1eba":"E","\u1ebf":"e","\u1ebe":"E","\u1ec1":"e","\u1ec0":"E","\u1ec7":"e","\u1ec6":"E","\u1ec5":"e","\u1ec4":"E","\u1ec3":"e","\u1ec2":"E","\u1ecd":"o","\u1ecc":"o","\u1ed1":"o","\u1ed0":"O","\u1ed3":"o","\u1ed2":"O","\u1ed5":"o","\u1ed4":"O","\u1ed9":"o","\u1ed8":"O","\u1ed7":"o","\u1ed6":"O","\u01a1":"o","\u01a0":"O","\u1edb":"o","\u1eda":"O","\u1edd":"o","\u1edc":"O","\u1ee3":"o","\u1ee2":"O","\u1ee1":"o","\u1ee0":"O","\u1ede":"o","\u1edf":"o","\u1ecb":"i","\u1eca":"I","\u0129":"i","\u0128":"I","\u1ec9":"i","\u1ec8":"i","\u1ee7":"u","\u1ee6":"U","\u1ee5":"u","\u1ee4":"U","\u0169":"u","\u0168":"U","\u01b0":"u","\u01af":"U","\u1ee9":"u","\u1ee8":"U","\u1eeb":"u","\u1eea":"U","\u1ef1":"u","\u1ef0":"U","\u1eef":"u","\u1eee":"U","\u1eed":"u","\u1eec":"\u01b0","\u1ef7":"y","\u1ef6":"y","\u1ef3":"y","\u1ef2":"Y","\u1ef5":"y","\u1ef4":"Y","\u1ef9":"y","\u1ef8":"Y","\u1ea1":"a","\u1ea0":"A","\u1ea5":"a","\u1ea4":"A","\u1ea7":"a","\u1ea6":"A","\u1ead":"a","\u1eac":"A","\u1eab":"a","\u1eaa":"A","\u1eaf":"a","\u1eae":"A","\u1eb1":"a","\u1eb0":"A","\u1eb7":"a","\u1eb6":"A","\u1eb5":"a","\u1eb4":"A","\u201c":'"',"\u201d":'"',"\u2018":"'","\u2019":"'","\u2202":"d","\u0192":"f","\u2122":"(TM)","\xa9":"(C)","\u0153":"oe","\u0152":"OE","\xae":"(R)","\u2020":"+","\u2120":"(SM)","\u2026":"...","\u02da":"o","\xba":"o","\xaa":"a","\u2022":"*","\u104a":",","\u104b":".",$:"USD","\u20ac":"EUR","\u20a2":"BRN","\u20a3":"FRF","\xa3":"GBP","\u20a4":"ITL","\u20a6":"NGN","\u20a7":"ESP","\u20a9":"KRW","\u20aa":"ILS","\u20ab":"VND","\u20ad":"LAK","\u20ae":"MNT","\u20af":"GRD","\u20b1":"ARS","\u20b2":"PYG","\u20b3":"ARA","\u20b4":"UAH","\u20b5":"GHS","\xa2":"cent","\xa5":"CNY","\u5143":"CNY","\u5186":"YEN","\ufdfc":"IRR","\u20a0":"EWE","\u0e3f":"THB","\u20a8":"INR","\u20b9":"INR","\u20b0":"PF"},v=["\u103a","\u07b0"],w={"\u102c":"a","\u102b":"a","\u1031":"e","\u1032":"e","\u102d":"i","\u102e":"i","\u102d\u102f":"o","\u102f":"u","\u1030":"u","\u1031\u102b\u1004\u103a":"aung","\u1031\u102c":"aw","\u1031\u102c\u103a":"aw","\u1031\u102b":"aw","\u1031\u102b\u103a":"aw","\u103a":"\u103a","\u1000\u103a":"et","\u102d\u102f\u1000\u103a":"aik","\u1031\u102c\u1000\u103a":"auk","\u1004\u103a":"in","\u102d\u102f\u1004\u103a":"aing","\u1031\u102c\u1004\u103a":"aung","\u1005\u103a":"it","\u100a\u103a":"i","\u1010\u103a":"at","\u102d\u1010\u103a":"eik","\u102f\u1010\u103a":"ok","\u103d\u1010\u103a":"ut","\u1031\u1010\u103a":"it","\u1012\u103a":"d","\u102d\u102f\u1012\u103a":"ok","\u102f\u1012\u103a":"ait","\u1014\u103a":"an","\u102c\u1014\u103a":"an","\u102d\u1014\u103a":"ein","\u102f\u1014\u103a":"on","\u103d\u1014\u103a":"un","\u1015\u103a":"at","\u102d\u1015\u103a":"eik","\u102f\u1015\u103a":"ok","\u103d\u1015\u103a":"ut","\u1014\u103a\u102f\u1015\u103a":"nub","\u1019\u103a":"an","\u102d\u1019\u103a":"ein","\u102f\u1019\u103a":"on","\u103d\u1019\u103a":"un","\u101a\u103a":"e","\u102d\u102f\u101c\u103a":"ol","\u1009\u103a":"in","\u1036":"an","\u102d\u1036":"ein","\u102f\u1036":"on","\u07a6\u0787\u07b0":"ah","\u07a6\u0781\u07b0":"ah"},U={en:{},az:{"\xe7":"c","\u0259":"e","\u011f":"g","\u0131":"i","\xf6":"o","\u015f":"s","\xfc":"u","\xc7":"C","\u018f":"E","\u011e":"G","\u0130":"I","\xd6":"O","\u015e":"S","\xdc":"U"},cs:{"\u010d":"c","\u010f":"d","\u011b":"e","\u0148":"n","\u0159":"r","\u0161":"s","\u0165":"t","\u016f":"u","\u017e":"z","\u010c":"C","\u010e":"D","\u011a":"E","\u0147":"N","\u0158":"R","\u0160":"S","\u0164":"T","\u016e":"U","\u017d":"Z"},fi:{"\xe4":"a","\xc4":"A","\xf6":"o","\xd6":"O"},hu:{"\xe4":"a","\xc4":"A","\xf6":"o","\xd6":"O","\xfc":"u","\xdc":"U","\u0171":"u","\u0170":"U"},lt:{"\u0105":"a","\u010d":"c","\u0119":"e","\u0117":"e","\u012f":"i","\u0161":"s","\u0173":"u","\u016b":"u","\u017e":"z","\u0104":"A","\u010c":"C","\u0118":"E","\u0116":"E","\u012e":"I","\u0160":"S","\u0172":"U","\u016a":"U"},lv:{"\u0101":"a","\u010d":"c","\u0113":"e","\u0123":"g","\u012b":"i","\u0137":"k","\u013c":"l","\u0146":"n","\u0161":"s","\u016b":"u","\u017e":"z","\u0100":"A","\u010c":"C","\u0112":"E","\u0122":"G","\u012a":"i","\u0136":"k","\u013b":"L","\u0145":"N","\u0160":"S","\u016a":"u","\u017d":"Z"},pl:{"\u0105":"a","\u0107":"c","\u0119":"e","\u0142":"l","\u0144":"n","\xf3":"o","\u015b":"s","\u017a":"z","\u017c":"z","\u0104":"A","\u0106":"C","\u0118":"e","\u0141":"L","\u0143":"N","\xd3":"O","\u015a":"S","\u0179":"Z","\u017b":"Z"},sk:{"\xe4":"a","\xc4":"A"},sr:{"\u0459":"lj","\u045a":"nj","\u0409":"Lj","\u040a":"Nj","\u0111":"dj","\u0110":"Dj"},tr:{"\xdc":"U","\xd6":"O","\xfc":"u","\xf6":"o"}},C={ar:{"\u2206":"delta","\u221e":"la-nihaya","\u2665":"hob","&":"wa","|":"aw","<":"aqal-men",">":"akbar-men","\u2211":"majmou","\xa4":"omla"},az:{},ca:{"\u2206":"delta","\u221e":"infinit","\u2665":"amor","&":"i","|":"o","<":"menys que",">":"mes que","\u2211":"suma dels","\xa4":"moneda"},cz:{"\u2206":"delta","\u221e":"nekonecno","\u2665":"laska","&":"a","|":"nebo","<":"mene jako",">":"vice jako","\u2211":"soucet","\xa4":"mena"},de:{"\u2206":"delta","\u221e":"unendlich","\u2665":"Liebe","&":"und","|":"oder","<":"kleiner als",">":"groesser als","\u2211":"Summe von","\xa4":"Waehrung"},dv:{"\u2206":"delta","\u221e":"kolunulaa","\u2665":"loabi","&":"aai","|":"noonee","<":"ah vure kuda",">":"ah vure bodu","\u2211":"jumula","\xa4":"faisaa"},en:{"\u2206":"delta","\u221e":"infinity","\u2665":"love","&":"and","|":"or","<":"less than",">":"greater than","\u2211":"sum","\xa4":"currency"},es:{"\u2206":"delta","\u221e":"infinito","\u2665":"amor","&":"y","|":"u","<":"menos que",">":"mas que","\u2211":"suma de los","\xa4":"moneda"},fr:{"\u2206":"delta","\u221e":"infiniment","\u2665":"Amour","&":"et","|":"ou","<":"moins que",">":"superieure a","\u2211":"somme des","\xa4":"monnaie"},gr:{},hu:{"\u2206":"delta","\u221e":"vegtelen","\u2665":"szerelem","&":"es","|":"vagy","<":"kisebb mint",">":"nagyobb mint","\u2211":"szumma","\xa4":"penznem"},it:{"\u2206":"delta","\u221e":"infinito","\u2665":"amore","&":"e","|":"o","<":"minore di",">":"maggiore di","\u2211":"somma","\xa4":"moneta"},lt:{},lv:{"\u2206":"delta","\u221e":"bezgaliba","\u2665":"milestiba","&":"un","|":"vai","<":"mazak neka",">":"lielaks neka","\u2211":"summa","\xa4":"valuta"},my:{"\u2206":"kwahkhyaet","\u221e":"asaonasme","\u2665":"akhyait","&":"nhin","|":"tho","<":"ngethaw",">":"kyithaw","\u2211":"paungld","\xa4":"ngwekye"},mk:{},nl:{"\u2206":"delta","\u221e":"oneindig","\u2665":"liefde","&":"en","|":"of","<":"kleiner dan",">":"groter dan","\u2211":"som","\xa4":"valuta"},pl:{"\u2206":"delta","\u221e":"nieskonczonosc","\u2665":"milosc","&":"i","|":"lub","<":"mniejsze niz",">":"wieksze niz","\u2211":"suma","\xa4":"waluta"},pt:{"\u2206":"delta","\u221e":"infinito","\u2665":"amor","&":"e","|":"ou","<":"menor que",">":"maior que","\u2211":"soma","\xa4":"moeda"},ro:{"\u2206":"delta","\u221e":"infinit","\u2665":"dragoste","&":"si","|":"sau","<":"mai mic ca",">":"mai mare ca","\u2211":"suma","\xa4":"valuta"},ru:{"\u2206":"delta","\u221e":"beskonechno","\u2665":"lubov","&":"i","|":"ili","<":"menshe",">":"bolshe","\u2211":"summa","\xa4":"valjuta"},sk:{"\u2206":"delta","\u221e":"nekonecno","\u2665":"laska","&":"a","|":"alebo","<":"menej ako",">":"viac ako","\u2211":"sucet","\xa4":"mena"},sr:{},tr:{"\u2206":"delta","\u221e":"sonsuzluk","\u2665":"ask","&":"ve","|":"veya","<":"kucuktur",">":"buyuktur","\u2211":"toplam","\xa4":"para birimi"},uk:{"\u2206":"delta","\u221e":"bezkinechnist","\u2665":"lubov","&":"i","|":"abo","<":"menshe",">":"bilshe","\u2211":"suma","\xa4":"valjuta"},vn:{"\u2206":"delta","\u221e":"vo cuc","\u2665":"yeu","&":"va","|":"hoac","<":"nho hon",">":"lon hon","\u2211":"tong","\xa4":"tien te"}};if("string"!=typeof n)return"";if("string"==typeof e&&(y=e),s=C.en,r=U.en,"object"==typeof e)for(h in a=e.maintainCase||!1,S=e.custom&&"object"==typeof e.custom?e.custom:S,o=1<+e.truncate&&e.truncate||!1,i=e.uric||!1,u=e.uricNoSlash||!1,l=e.mark||!1,j=!1!==e.symbols&&!1!==e.lang,y=e.separator||y,i&&(f+=p.join("")),u&&(f+=A.join("")),l&&(f+=b.join("")),s=e.lang&&C[e.lang]&&j?C[e.lang]:j?C.en:{},r=e.lang&&U[e.lang]?U[e.lang]:!1===e.lang||!0===e.lang?{}:U.en,e.titleCase&&"number"==typeof e.titleCase.length&&Array.prototype.toString.call(e.titleCase)?(e.titleCase.forEach(function(e){S[e+""]=e+""}),t=!0):t=!!e.titleCase,e.custom&&"number"==typeof e.custom.length&&Array.prototype.toString.call(e.custom)&&e.custom.forEach(function(e){S[e+""]=e+""}),Object.keys(S).forEach(function(e){var a;a=1<e.length?new RegExp("\\b"+I(e)+"\\b","gi"):new RegExp(I(e),"gi"),n=n.replace(a,S[e])}),S)f+=h;for(f+=y,t&&(n=n.replace(/(\w)(\S*)/g,function(e,a,n){var t=a.toUpperCase()+(null!==n?n:"");return Object.keys(S).indexOf(t.toLowerCase())<0?t:t.toLowerCase()})),f=I(f),k=g=!1,c=0,d=(n=n.replace(/(^\s+|\s+$)/g,"")).length;c<d;c++)h=n[c],N(h,S)?g=!1:r[h]?(h=g&&r[h].match(/[A-Za-z0-9]/)?" "+r[h]:r[h],g=!1):h in O?(c+1<d&&0<=v.indexOf(n[c+1])?(E+=h,h=""):!0===k?(h=w[E]+O[h],E=""):h=g&&O[h].match(/[A-Za-z0-9]/)?" "+O[h]:O[h],k=g=!1):h in w?(E+=h,h="",c===d-1&&(h=w[E]),k=!0):!s[h]||i&&-1!==p.join("").indexOf(h)||u&&-1!==A.join("").indexOf(h)?(!0===k?(h=w[E]+h,E="",k=!1):g&&(/[A-Za-z0-9]/.test(h)||z.substr(-1).match(/A-Za-z0-9]/))&&(h=" "+h),g=!1):(h=g||z.substr(-1).match(/[A-Za-z0-9]/)?y+s[h]:s[h],h+=void 0!==n[c+1]&&n[c+1].match(/[A-Za-z0-9]/)?y:"",g=!0),z+=h.replace(new RegExp("[^\\w\\s"+f+"_-]","g"),y);return z=z.replace(/\s+/g,y).replace(new RegExp("\\"+y+"+","g"),y).replace(new RegExp("(^\\"+y+"+|\\"+y+"+$)","g"),""),o&&z.length>o&&(m=z.charAt(o)===y,z=z.slice(0,o),m||(z=z.slice(0,z.lastIndexOf(y)))),a||t||(z=z.toLowerCase()),z},a=function(a){return function(e){return n(e,a)}},I=function(e){return e.replace(/[-\\^$*+?.()|[\]{}\/]/g,"\\$&")},N=function(e,a){for(var n in a)if(a[n]===e)return!0};if("undefined"!=typeof module&&module.exports)module.exports=n,module.exports.createSlug=a;else if("undefined"!=typeof define&&define.amd)define([],function(){return n});else try{if(e.getSlug||e.createSlug)throw"speakingurl: globals exists /(getSlug|createSlug)/";e.getSlug=n,e.createSlug=a}catch(t){}}(this);