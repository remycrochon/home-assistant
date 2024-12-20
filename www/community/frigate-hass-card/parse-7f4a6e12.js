import{eh as t,c$ as e,ei as r,ej as n,ek as a,el as s,em as i,en as o,eo as c,ep as u,eq as d,er as l,es as w,et as h,eu as m,ev as f,ew as y,ex as p}from"./card-320adb66.js";class x{subPriority=0;validate(t,e){return!0}}class g extends x{constructor(t,e,r,n,a){super(),this.value=t,this.validateValue=e,this.setValue=r,this.priority=n,a&&(this.subPriority=a)}validate(t,e){return this.validateValue(t,this.value,e)}set(t,e,r){return this.setValue(t,e,this.value,r)}}class b extends x{priority=10;subPriority=-1;set(t,e){return e.timestampIsSet?t:r(t,function(t,e){const n=e instanceof Date?r(e,0):new e(0);return n.setFullYear(t.getFullYear(),t.getMonth(),t.getDate()),n.setHours(t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()),n}(t,Date))}}class T{run(t,e,r,n){const a=this.parse(t,e,r,n);return a?{setter:new g(a.value,this.validate,this.set,this.priority,this.subPriority),rest:a.rest}:null}validate(t,e,r){return!0}}const k=/^(1[0-2]|0?\d)/,v=/^(3[0-1]|[0-2]?\d)/,D=/^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,q=/^(5[0-3]|[0-4]?\d)/,M=/^(2[0-3]|[0-1]?\d)/,H=/^(2[0-4]|[0-1]?\d)/,Y=/^(1[0-1]|0?\d)/,N=/^(1[0-2]|0?\d)/,E=/^[0-5]?\d/,P=/^[0-5]?\d/,L=/^\d/,Q=/^\d{1,2}/,I=/^\d{1,3}/,R=/^\d{1,4}/,S=/^-?\d+/,O=/^-?\d/,B=/^-?\d{1,2}/,G=/^-?\d{1,3}/,X=/^-?\d{1,4}/,F=/^([+-])(\d{2})(\d{2})?|Z/,W=/^([+-])(\d{2})(\d{2})|Z/,A=/^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,C=/^([+-])(\d{2}):(\d{2})|Z/,K=/^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/;function Z(t,e){return t?{value:e(t.value),rest:t.rest}:t}function $(t,e){const r=e.match(t);return r?{value:parseInt(r[0],10),rest:e.slice(r[0].length)}:null}function j(t,e){const r=e.match(t);if(!r)return null;if("Z"===r[0])return{value:0,rest:e.slice(1)};const i="+"===r[1]?1:-1,o=r[2]?parseInt(r[2],10):0,c=r[3]?parseInt(r[3],10):0,u=r[5]?parseInt(r[5],10):0;return{value:i*(o*n+c*a+u*s),rest:e.slice(r[0].length)}}function V(t){return $(S,t)}function z(t,e){switch(t){case 1:return $(L,e);case 2:return $(Q,e);case 3:return $(I,e);case 4:return $(R,e);default:return $(new RegExp("^\\d{1,"+t+"}"),e)}}function J(t,e){switch(t){case 1:return $(O,e);case 2:return $(B,e);case 3:return $(G,e);case 4:return $(X,e);default:return $(new RegExp("^-?\\d{1,"+t+"}"),e)}}function U(t){switch(t){case"morning":return 4;case"evening":return 17;case"pm":case"noon":case"afternoon":return 12;default:return 0}}function _(t,e){const r=e>0,n=r?e:1-e;let a;if(n<=50)a=t||100;else{const e=n+50;a=t+100*Math.trunc(e/100)-(t>=e%100?100:0)}return r?a:1-a}function tt(t){return t%400==0||t%4==0&&t%100!=0}const et=[31,28,31,30,31,30,31,31,30,31,30,31],rt=[31,29,31,30,31,30,31,31,30,31,30,31];function nt(r,n,a){const s=t(),i=a?.weekStartsOn??a?.locale?.options?.weekStartsOn??s.weekStartsOn??s.locale?.options?.weekStartsOn??0,o=e(r),c=o.getDay(),u=7-i;return l(o,n<0||n>6?n-(c+u)%7:((n%7+7)%7+u)%7-(c+u)%7)}function at(t,r){const n=e(t),a=function(t){let r=e(t).getDay();return 0===r&&(r=7),r}(n);return l(n,r-a)}const st={G:new class extends T{priority=140;parse(t,e,r){switch(e){case"G":case"GG":case"GGG":return r.era(t,{width:"abbreviated"})||r.era(t,{width:"narrow"});case"GGGGG":return r.era(t,{width:"narrow"});default:return r.era(t,{width:"wide"})||r.era(t,{width:"abbreviated"})||r.era(t,{width:"narrow"})}}set(t,e,r){return e.era=r,t.setFullYear(r,0,1),t.setHours(0,0,0,0),t}incompatibleTokens=["R","u","t","T"]},y:new class extends T{priority=130;incompatibleTokens=["Y","R","u","w","I","i","e","c","t","T"];parse(t,e,r){const n=t=>({year:t,isTwoDigitYear:"yy"===e});switch(e){case"y":return Z(z(4,t),n);case"yo":return Z(r.ordinalNumber(t,{unit:"year"}),n);default:return Z(z(e.length,t),n)}}validate(t,e){return e.isTwoDigitYear||e.year>0}set(t,e,r){const n=t.getFullYear();if(r.isTwoDigitYear){const e=_(r.year,n);return t.setFullYear(e,0,1),t.setHours(0,0,0,0),t}const a="era"in e&&1!==e.era?1-r.year:r.year;return t.setFullYear(a,0,1),t.setHours(0,0,0,0),t}},Y:new class extends T{priority=130;parse(t,e,r){const n=t=>({year:t,isTwoDigitYear:"YY"===e});switch(e){case"Y":return Z(z(4,t),n);case"Yo":return Z(r.ordinalNumber(t,{unit:"year"}),n);default:return Z(z(e.length,t),n)}}validate(t,e){return e.isTwoDigitYear||e.year>0}set(t,e,r,n){const a=i(t,n);if(r.isTwoDigitYear){const e=_(r.year,a);return t.setFullYear(e,0,n.firstWeekContainsDate),t.setHours(0,0,0,0),o(t,n)}const s="era"in e&&1!==e.era?1-r.year:r.year;return t.setFullYear(s,0,n.firstWeekContainsDate),t.setHours(0,0,0,0),o(t,n)}incompatibleTokens=["y","R","u","Q","q","M","L","I","d","D","i","t","T"]},R:new class extends T{priority=130;parse(t,e){return J("R"===e?4:e.length,t)}set(t,e,n){const a=r(t,0);return a.setFullYear(n,0,4),a.setHours(0,0,0,0),c(a)}incompatibleTokens=["G","y","Y","u","Q","q","M","L","w","d","D","e","c","t","T"]},u:new class extends T{priority=130;parse(t,e){return J("u"===e?4:e.length,t)}set(t,e,r){return t.setFullYear(r,0,1),t.setHours(0,0,0,0),t}incompatibleTokens=["G","y","Y","R","w","I","i","e","c","t","T"]},Q:new class extends T{priority=120;parse(t,e,r){switch(e){case"Q":case"QQ":return z(e.length,t);case"Qo":return r.ordinalNumber(t,{unit:"quarter"});case"QQQ":return r.quarter(t,{width:"abbreviated",context:"formatting"})||r.quarter(t,{width:"narrow",context:"formatting"});case"QQQQQ":return r.quarter(t,{width:"narrow",context:"formatting"});default:return r.quarter(t,{width:"wide",context:"formatting"})||r.quarter(t,{width:"abbreviated",context:"formatting"})||r.quarter(t,{width:"narrow",context:"formatting"})}}validate(t,e){return e>=1&&e<=4}set(t,e,r){return t.setMonth(3*(r-1),1),t.setHours(0,0,0,0),t}incompatibleTokens=["Y","R","q","M","L","w","I","d","D","i","e","c","t","T"]},q:new class extends T{priority=120;parse(t,e,r){switch(e){case"q":case"qq":return z(e.length,t);case"qo":return r.ordinalNumber(t,{unit:"quarter"});case"qqq":return r.quarter(t,{width:"abbreviated",context:"standalone"})||r.quarter(t,{width:"narrow",context:"standalone"});case"qqqqq":return r.quarter(t,{width:"narrow",context:"standalone"});default:return r.quarter(t,{width:"wide",context:"standalone"})||r.quarter(t,{width:"abbreviated",context:"standalone"})||r.quarter(t,{width:"narrow",context:"standalone"})}}validate(t,e){return e>=1&&e<=4}set(t,e,r){return t.setMonth(3*(r-1),1),t.setHours(0,0,0,0),t}incompatibleTokens=["Y","R","Q","M","L","w","I","d","D","i","e","c","t","T"]},M:new class extends T{incompatibleTokens=["Y","R","q","Q","L","w","I","D","i","e","c","t","T"];priority=110;parse(t,e,r){const n=t=>t-1;switch(e){case"M":return Z($(k,t),n);case"MM":return Z(z(2,t),n);case"Mo":return Z(r.ordinalNumber(t,{unit:"month"}),n);case"MMM":return r.month(t,{width:"abbreviated",context:"formatting"})||r.month(t,{width:"narrow",context:"formatting"});case"MMMMM":return r.month(t,{width:"narrow",context:"formatting"});default:return r.month(t,{width:"wide",context:"formatting"})||r.month(t,{width:"abbreviated",context:"formatting"})||r.month(t,{width:"narrow",context:"formatting"})}}validate(t,e){return e>=0&&e<=11}set(t,e,r){return t.setMonth(r,1),t.setHours(0,0,0,0),t}},L:new class extends T{priority=110;parse(t,e,r){const n=t=>t-1;switch(e){case"L":return Z($(k,t),n);case"LL":return Z(z(2,t),n);case"Lo":return Z(r.ordinalNumber(t,{unit:"month"}),n);case"LLL":return r.month(t,{width:"abbreviated",context:"standalone"})||r.month(t,{width:"narrow",context:"standalone"});case"LLLLL":return r.month(t,{width:"narrow",context:"standalone"});default:return r.month(t,{width:"wide",context:"standalone"})||r.month(t,{width:"abbreviated",context:"standalone"})||r.month(t,{width:"narrow",context:"standalone"})}}validate(t,e){return e>=0&&e<=11}set(t,e,r){return t.setMonth(r,1),t.setHours(0,0,0,0),t}incompatibleTokens=["Y","R","q","Q","M","w","I","D","i","e","c","t","T"]},w:new class extends T{priority=100;parse(t,e,r){switch(e){case"w":return $(q,t);case"wo":return r.ordinalNumber(t,{unit:"week"});default:return z(e.length,t)}}validate(t,e){return e>=1&&e<=53}set(t,r,n,a){return o(function(t,r,n){const a=e(t),s=u(a,n)-r;return a.setDate(a.getDate()-7*s),a}(t,n,a),a)}incompatibleTokens=["y","R","u","q","Q","M","L","I","d","D","i","t","T"]},I:new class extends T{priority=100;parse(t,e,r){switch(e){case"I":return $(q,t);case"Io":return r.ordinalNumber(t,{unit:"week"});default:return z(e.length,t)}}validate(t,e){return e>=1&&e<=53}set(t,r,n){return c(function(t,r){const n=e(t),a=d(n)-r;return n.setDate(n.getDate()-7*a),n}(t,n))}incompatibleTokens=["y","Y","u","q","Q","M","L","w","d","D","e","c","t","T"]},d:new class extends T{priority=90;subPriority=1;parse(t,e,r){switch(e){case"d":return $(v,t);case"do":return r.ordinalNumber(t,{unit:"date"});default:return z(e.length,t)}}validate(t,e){const r=tt(t.getFullYear()),n=t.getMonth();return r?e>=1&&e<=rt[n]:e>=1&&e<=et[n]}set(t,e,r){return t.setDate(r),t.setHours(0,0,0,0),t}incompatibleTokens=["Y","R","q","Q","w","I","D","i","e","c","t","T"]},D:new class extends T{priority=90;subpriority=1;parse(t,e,r){switch(e){case"D":case"DD":return $(D,t);case"Do":return r.ordinalNumber(t,{unit:"date"});default:return z(e.length,t)}}validate(t,e){return tt(t.getFullYear())?e>=1&&e<=366:e>=1&&e<=365}set(t,e,r){return t.setMonth(0,r),t.setHours(0,0,0,0),t}incompatibleTokens=["Y","R","q","Q","M","L","w","I","d","E","i","e","c","t","T"]},E:new class extends T{priority=90;parse(t,e,r){switch(e){case"E":case"EE":case"EEE":return r.day(t,{width:"abbreviated",context:"formatting"})||r.day(t,{width:"short",context:"formatting"})||r.day(t,{width:"narrow",context:"formatting"});case"EEEEE":return r.day(t,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(t,{width:"short",context:"formatting"})||r.day(t,{width:"narrow",context:"formatting"});default:return r.day(t,{width:"wide",context:"formatting"})||r.day(t,{width:"abbreviated",context:"formatting"})||r.day(t,{width:"short",context:"formatting"})||r.day(t,{width:"narrow",context:"formatting"})}}validate(t,e){return e>=0&&e<=6}set(t,e,r,n){return(t=nt(t,r,n)).setHours(0,0,0,0),t}incompatibleTokens=["D","i","e","c","t","T"]},e:new class extends T{priority=90;parse(t,e,r,n){const a=t=>{const e=7*Math.floor((t-1)/7);return(t+n.weekStartsOn+6)%7+e};switch(e){case"e":case"ee":return Z(z(e.length,t),a);case"eo":return Z(r.ordinalNumber(t,{unit:"day"}),a);case"eee":return r.day(t,{width:"abbreviated",context:"formatting"})||r.day(t,{width:"short",context:"formatting"})||r.day(t,{width:"narrow",context:"formatting"});case"eeeee":return r.day(t,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(t,{width:"short",context:"formatting"})||r.day(t,{width:"narrow",context:"formatting"});default:return r.day(t,{width:"wide",context:"formatting"})||r.day(t,{width:"abbreviated",context:"formatting"})||r.day(t,{width:"short",context:"formatting"})||r.day(t,{width:"narrow",context:"formatting"})}}validate(t,e){return e>=0&&e<=6}set(t,e,r,n){return(t=nt(t,r,n)).setHours(0,0,0,0),t}incompatibleTokens=["y","R","u","q","Q","M","L","I","d","D","E","i","c","t","T"]},c:new class extends T{priority=90;parse(t,e,r,n){const a=t=>{const e=7*Math.floor((t-1)/7);return(t+n.weekStartsOn+6)%7+e};switch(e){case"c":case"cc":return Z(z(e.length,t),a);case"co":return Z(r.ordinalNumber(t,{unit:"day"}),a);case"ccc":return r.day(t,{width:"abbreviated",context:"standalone"})||r.day(t,{width:"short",context:"standalone"})||r.day(t,{width:"narrow",context:"standalone"});case"ccccc":return r.day(t,{width:"narrow",context:"standalone"});case"cccccc":return r.day(t,{width:"short",context:"standalone"})||r.day(t,{width:"narrow",context:"standalone"});default:return r.day(t,{width:"wide",context:"standalone"})||r.day(t,{width:"abbreviated",context:"standalone"})||r.day(t,{width:"short",context:"standalone"})||r.day(t,{width:"narrow",context:"standalone"})}}validate(t,e){return e>=0&&e<=6}set(t,e,r,n){return(t=nt(t,r,n)).setHours(0,0,0,0),t}incompatibleTokens=["y","R","u","q","Q","M","L","I","d","D","E","i","e","t","T"]},i:new class extends T{priority=90;parse(t,e,r){const n=t=>0===t?7:t;switch(e){case"i":case"ii":return z(e.length,t);case"io":return r.ordinalNumber(t,{unit:"day"});case"iii":return Z(r.day(t,{width:"abbreviated",context:"formatting"})||r.day(t,{width:"short",context:"formatting"})||r.day(t,{width:"narrow",context:"formatting"}),n);case"iiiii":return Z(r.day(t,{width:"narrow",context:"formatting"}),n);case"iiiiii":return Z(r.day(t,{width:"short",context:"formatting"})||r.day(t,{width:"narrow",context:"formatting"}),n);default:return Z(r.day(t,{width:"wide",context:"formatting"})||r.day(t,{width:"abbreviated",context:"formatting"})||r.day(t,{width:"short",context:"formatting"})||r.day(t,{width:"narrow",context:"formatting"}),n)}}validate(t,e){return e>=1&&e<=7}set(t,e,r){return(t=at(t,r)).setHours(0,0,0,0),t}incompatibleTokens=["y","Y","u","q","Q","M","L","w","d","D","E","e","c","t","T"]},a:new class extends T{priority=80;parse(t,e,r){switch(e){case"a":case"aa":case"aaa":return r.dayPeriod(t,{width:"abbreviated",context:"formatting"})||r.dayPeriod(t,{width:"narrow",context:"formatting"});case"aaaaa":return r.dayPeriod(t,{width:"narrow",context:"formatting"});default:return r.dayPeriod(t,{width:"wide",context:"formatting"})||r.dayPeriod(t,{width:"abbreviated",context:"formatting"})||r.dayPeriod(t,{width:"narrow",context:"formatting"})}}set(t,e,r){return t.setHours(U(r),0,0,0),t}incompatibleTokens=["b","B","H","k","t","T"]},b:new class extends T{priority=80;parse(t,e,r){switch(e){case"b":case"bb":case"bbb":return r.dayPeriod(t,{width:"abbreviated",context:"formatting"})||r.dayPeriod(t,{width:"narrow",context:"formatting"});case"bbbbb":return r.dayPeriod(t,{width:"narrow",context:"formatting"});default:return r.dayPeriod(t,{width:"wide",context:"formatting"})||r.dayPeriod(t,{width:"abbreviated",context:"formatting"})||r.dayPeriod(t,{width:"narrow",context:"formatting"})}}set(t,e,r){return t.setHours(U(r),0,0,0),t}incompatibleTokens=["a","B","H","k","t","T"]},B:new class extends T{priority=80;parse(t,e,r){switch(e){case"B":case"BB":case"BBB":return r.dayPeriod(t,{width:"abbreviated",context:"formatting"})||r.dayPeriod(t,{width:"narrow",context:"formatting"});case"BBBBB":return r.dayPeriod(t,{width:"narrow",context:"formatting"});default:return r.dayPeriod(t,{width:"wide",context:"formatting"})||r.dayPeriod(t,{width:"abbreviated",context:"formatting"})||r.dayPeriod(t,{width:"narrow",context:"formatting"})}}set(t,e,r){return t.setHours(U(r),0,0,0),t}incompatibleTokens=["a","b","t","T"]},h:new class extends T{priority=70;parse(t,e,r){switch(e){case"h":return $(N,t);case"ho":return r.ordinalNumber(t,{unit:"hour"});default:return z(e.length,t)}}validate(t,e){return e>=1&&e<=12}set(t,e,r){const n=t.getHours()>=12;return n&&r<12?t.setHours(r+12,0,0,0):n||12!==r?t.setHours(r,0,0,0):t.setHours(0,0,0,0),t}incompatibleTokens=["H","K","k","t","T"]},H:new class extends T{priority=70;parse(t,e,r){switch(e){case"H":return $(M,t);case"Ho":return r.ordinalNumber(t,{unit:"hour"});default:return z(e.length,t)}}validate(t,e){return e>=0&&e<=23}set(t,e,r){return t.setHours(r,0,0,0),t}incompatibleTokens=["a","b","h","K","k","t","T"]},K:new class extends T{priority=70;parse(t,e,r){switch(e){case"K":return $(Y,t);case"Ko":return r.ordinalNumber(t,{unit:"hour"});default:return z(e.length,t)}}validate(t,e){return e>=0&&e<=11}set(t,e,r){return t.getHours()>=12&&r<12?t.setHours(r+12,0,0,0):t.setHours(r,0,0,0),t}incompatibleTokens=["h","H","k","t","T"]},k:new class extends T{priority=70;parse(t,e,r){switch(e){case"k":return $(H,t);case"ko":return r.ordinalNumber(t,{unit:"hour"});default:return z(e.length,t)}}validate(t,e){return e>=1&&e<=24}set(t,e,r){const n=r<=24?r%24:r;return t.setHours(n,0,0,0),t}incompatibleTokens=["a","b","h","H","K","t","T"]},m:new class extends T{priority=60;parse(t,e,r){switch(e){case"m":return $(E,t);case"mo":return r.ordinalNumber(t,{unit:"minute"});default:return z(e.length,t)}}validate(t,e){return e>=0&&e<=59}set(t,e,r){return t.setMinutes(r,0,0),t}incompatibleTokens=["t","T"]},s:new class extends T{priority=50;parse(t,e,r){switch(e){case"s":return $(P,t);case"so":return r.ordinalNumber(t,{unit:"second"});default:return z(e.length,t)}}validate(t,e){return e>=0&&e<=59}set(t,e,r){return t.setSeconds(r,0),t}incompatibleTokens=["t","T"]},S:new class extends T{priority=30;parse(t,e){return Z(z(e.length,t),(t=>Math.trunc(t*Math.pow(10,3-e.length))))}set(t,e,r){return t.setMilliseconds(r),t}incompatibleTokens=["t","T"]},X:new class extends T{priority=10;parse(t,e){switch(e){case"X":return j(F,t);case"XX":return j(W,t);case"XXXX":return j(A,t);case"XXXXX":return j(K,t);default:return j(C,t)}}set(t,e,n){return e.timestampIsSet?t:r(t,t.getTime()-w(t)-n)}incompatibleTokens=["t","T","x"]},x:new class extends T{priority=10;parse(t,e){switch(e){case"x":return j(F,t);case"xx":return j(W,t);case"xxxx":return j(A,t);case"xxxxx":return j(K,t);default:return j(C,t)}}set(t,e,n){return e.timestampIsSet?t:r(t,t.getTime()-w(t)-n)}incompatibleTokens=["t","T","X"]},t:new class extends T{priority=40;parse(t){return V(t)}set(t,e,n){return[r(t,1e3*n),{timestampIsSet:!0}]}incompatibleTokens="*"},T:new class extends T{priority=20;parse(t){return V(t)}set(t,e,n){return[r(t,n),{timestampIsSet:!0}]}incompatibleTokens="*"}},it=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,ot=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,ct=/^'([^]*?)'?$/,ut=/''/g,dt=/\S/,lt=/[a-zA-Z]/;function wt(n,a,s,i){const o=Object.assign({},t()),c=i?.locale??o.locale??h,u=i?.firstWeekContainsDate??i?.locale?.options?.firstWeekContainsDate??o.firstWeekContainsDate??o.locale?.options?.firstWeekContainsDate??1,d=i?.weekStartsOn??i?.locale?.options?.weekStartsOn??o.weekStartsOn??o.locale?.options?.weekStartsOn??0;if(""===a)return""===n?e(s):r(s,NaN);const l={firstWeekContainsDate:u,weekStartsOn:d,locale:c},w=[new b],x=a.match(ot).map((t=>{const e=t[0];if(e in m){return(0,m[e])(t,c.formatLong)}return t})).join("").match(it),g=[];for(let t of x){!i?.useAdditionalWeekYearTokens&&f(t)&&y(t,a,n),!i?.useAdditionalDayOfYearTokens&&p(t)&&y(t,a,n);const e=t[0],o=st[e];if(o){const{incompatibleTokens:a}=o;if(Array.isArray(a)){const r=g.find((t=>a.includes(t.token)||t.token===e));if(r)throw new RangeError(`The format string mustn't contain \`${r.fullToken}\` and \`${t}\` at the same time`)}else if("*"===o.incompatibleTokens&&g.length>0)throw new RangeError(`The format string mustn't contain \`${t}\` and any other token at the same time`);g.push({token:e,fullToken:t});const i=o.run(n,t,c.match,l);if(!i)return r(s,NaN);w.push(i.setter),n=i.rest}else{if(e.match(lt))throw new RangeError("Format string contains an unescaped latin alphabet character `"+e+"`");if("''"===t?t="'":"'"===e&&(t=t.match(ct)[1].replace(ut,"'")),0!==n.indexOf(t))return r(s,NaN);n=n.slice(t.length)}}if(n.length>0&&dt.test(n))return r(s,NaN);const T=w.map((t=>t.priority)).sort(((t,e)=>e-t)).filter(((t,e,r)=>r.indexOf(t)===e)).map((t=>w.filter((e=>e.priority===t)).sort(((t,e)=>e.subPriority-t.subPriority)))).map((t=>t[0]));let k=e(s);if(isNaN(k.getTime()))return r(s,NaN);const v={};for(const t of T){if(!t.validate(k,l))return r(s,NaN);const e=t.set(k,v,l);Array.isArray(e)?(k=e[0],Object.assign(v,e[1])):k=e}return r(s,k)}export{wt as p};
