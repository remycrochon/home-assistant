function e(e,t,n,a){var i,s=arguments.length,o=s<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,a);else for(var r=e.length-1;r>=0;r--)(i=e[r])&&(o=(s<3?i(o):s>3?i(t,n,o):i(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o}function t(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}"function"==typeof SuppressedError&&SuppressedError;var n,a={exports:{}};function i(){return n||(n=1,a.exports=function(){var e=1e3,t=6e4,n=36e5,a="millisecond",i="second",s="minute",o="hour",r="day",d="week",l="month",u="quarter",c="year",m="date",h="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,v=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,_={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},f=function(e,t,n){var a=String(e);return!a||a.length>=t?e:""+Array(t+1-a.length).join(n)+e},g={s:f,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),a=Math.floor(n/60),i=n%60;return(t<=0?"+":"-")+f(a,2,"0")+":"+f(i,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var a=12*(n.year()-t.year())+(n.month()-t.month()),i=t.clone().add(a,l),s=n-i<0,o=t.clone().add(a+(s?-1:1),l);return+(-(a+(n-i)/(s?i-o:o-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:l,y:c,w:d,d:r,D:m,h:o,m:s,s:i,ms:a,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},y="en",M={};M[y]=_;var k="$isDayjsObject",w=function(e){return e instanceof L||!(!e||!e[k])},D=function e(t,n,a){var i;if(!t)return y;if("string"==typeof t){var s=t.toLowerCase();M[s]&&(i=s),n&&(M[s]=n,i=s);var o=t.split("-");if(!i&&o.length>1)return e(o[0])}else{var r=t.name;M[r]=t,i=r}return!a&&i&&(y=i),i||!a&&y},b=function(e,t){if(w(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new L(n)},x=g;x.l=D,x.i=w,x.w=function(e,t){return b(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var L=function(){function _(e){this.$L=D(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[k]=!0}var f=_.prototype;return f.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(x.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var a=t.match(p);if(a){var i=a[2]-1||0,s=(a[7]||"0").substring(0,3);return n?new Date(Date.UTC(a[1],i,a[3]||1,a[4]||0,a[5]||0,a[6]||0,s)):new Date(a[1],i,a[3]||1,a[4]||0,a[5]||0,a[6]||0,s)}}return new Date(t)}(e),this.init()},f.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},f.$utils=function(){return x},f.isValid=function(){return!(this.$d.toString()===h)},f.isSame=function(e,t){var n=b(e);return this.startOf(t)<=n&&n<=this.endOf(t)},f.isAfter=function(e,t){return b(e)<this.startOf(t)},f.isBefore=function(e,t){return this.endOf(t)<b(e)},f.$g=function(e,t,n){return x.u(e)?this[t]:this.set(n,e)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(e,t){var n=this,a=!!x.u(t)||t,u=x.p(e),h=function(e,t){var i=x.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return a?i:i.endOf(r)},p=function(e,t){return x.w(n.toDate()[e].apply(n.toDate("s"),(a?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},v=this.$W,_=this.$M,f=this.$D,g="set"+(this.$u?"UTC":"");switch(u){case c:return a?h(1,0):h(31,11);case l:return a?h(1,_):h(0,_+1);case d:var y=this.$locale().weekStart||0,M=(v<y?v+7:v)-y;return h(a?f-M:f+(6-M),_);case r:case m:return p(g+"Hours",0);case o:return p(g+"Minutes",1);case s:return p(g+"Seconds",2);case i:return p(g+"Milliseconds",3);default:return this.clone()}},f.endOf=function(e){return this.startOf(e,!1)},f.$set=function(e,t){var n,d=x.p(e),u="set"+(this.$u?"UTC":""),h=(n={},n[r]=u+"Date",n[m]=u+"Date",n[l]=u+"Month",n[c]=u+"FullYear",n[o]=u+"Hours",n[s]=u+"Minutes",n[i]=u+"Seconds",n[a]=u+"Milliseconds",n)[d],p=d===r?this.$D+(t-this.$W):t;if(d===l||d===c){var v=this.clone().set(m,1);v.$d[h](p),v.init(),this.$d=v.set(m,Math.min(this.$D,v.daysInMonth())).$d}else h&&this.$d[h](p);return this.init(),this},f.set=function(e,t){return this.clone().$set(e,t)},f.get=function(e){return this[x.p(e)]()},f.add=function(a,u){var m,h=this;a=Number(a);var p=x.p(u),v=function(e){var t=b(h);return x.w(t.date(t.date()+Math.round(e*a)),h)};if(p===l)return this.set(l,this.$M+a);if(p===c)return this.set(c,this.$y+a);if(p===r)return v(1);if(p===d)return v(7);var _=(m={},m[s]=t,m[o]=n,m[i]=e,m)[p]||1,f=this.$d.getTime()+a*_;return x.w(f,this)},f.subtract=function(e,t){return this.add(-1*e,t)},f.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||h;var a=e||"YYYY-MM-DDTHH:mm:ssZ",i=x.z(this),s=this.$H,o=this.$m,r=this.$M,d=n.weekdays,l=n.months,u=n.meridiem,c=function(e,n,i,s){return e&&(e[n]||e(t,a))||i[n].slice(0,s)},m=function(e){return x.s(s%12||12,e,"0")},p=u||function(e,t,n){var a=e<12?"AM":"PM";return n?a.toLowerCase():a};return a.replace(v,function(e,a){return a||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return x.s(t.$y,4,"0");case"M":return r+1;case"MM":return x.s(r+1,2,"0");case"MMM":return c(n.monthsShort,r,l,3);case"MMMM":return c(l,r);case"D":return t.$D;case"DD":return x.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return c(n.weekdaysMin,t.$W,d,2);case"ddd":return c(n.weekdaysShort,t.$W,d,3);case"dddd":return d[t.$W];case"H":return String(s);case"HH":return x.s(s,2,"0");case"h":return m(1);case"hh":return m(2);case"a":return p(s,o,!0);case"A":return p(s,o,!1);case"m":return String(o);case"mm":return x.s(o,2,"0");case"s":return String(t.$s);case"ss":return x.s(t.$s,2,"0");case"SSS":return x.s(t.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")})},f.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},f.diff=function(a,m,h){var p,v=this,_=x.p(m),f=b(a),g=(f.utcOffset()-this.utcOffset())*t,y=this-f,M=function(){return x.m(v,f)};switch(_){case c:p=M()/12;break;case l:p=M();break;case u:p=M()/3;break;case d:p=(y-g)/6048e5;break;case r:p=(y-g)/864e5;break;case o:p=y/n;break;case s:p=y/t;break;case i:p=y/e;break;default:p=y}return h?p:x.a(p)},f.daysInMonth=function(){return this.endOf(l).$D},f.$locale=function(){return M[this.$L]},f.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),a=D(e,t,!0);return a&&(n.$L=a),n},f.clone=function(){return x.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},_}(),T=L.prototype;return b.prototype=T,[["$ms",a],["$s",i],["$m",s],["$H",o],["$W",r],["$M",l],["$y",c],["$D",m]].forEach(function(e){T[e[1]]=function(t){return this.$g(t,e[0],e[1])}}),b.extend=function(e,t){return e.$i||(e(t,L,b),e.$i=!0),b},b.locale=D,b.isDayjs=w,b.unix=function(e){return b(1e3*e)},b.en=M[y],b.Ls=M,b.p={},b}()),a.exports}var s,o=t(i()),r={exports:{}};var d,l=(s||(s=1,r.exports=function(e,t){var n=t.prototype,a=n.format;n.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return a.bind(this)(e);var i=this.$utils(),s=(e||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,function(e){switch(e){case"Q":return Math.ceil((t.$M+1)/3);case"Do":return n.ordinal(t.$D);case"gggg":return t.weekYear();case"GGGG":return t.isoWeekYear();case"wo":return n.ordinal(t.week(),"W");case"w":case"ww":return i.s(t.week(),"w"===e?1:2,"0");case"W":case"WW":return i.s(t.isoWeek(),"W"===e?1:2,"0");case"k":case"kk":return i.s(String(0===t.$H?24:t.$H),"k"===e?1:2,"0");case"X":return Math.floor(t.$d.getTime()/1e3);case"x":return t.$d.getTime();case"z":return"["+t.offsetName()+"]";case"zzz":return"["+t.offsetName("long")+"]";default:return e}});return a.bind(this)(s)}}),r.exports),u=t(l),c={exports:{}};var m,h=(d||(d=1,c.exports=function(){var e,t,n=1e3,a=6e4,i=36e5,s=864e5,o=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,r=31536e6,d=2628e6,l=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,u={years:r,months:d,days:s,hours:i,minutes:a,seconds:n,milliseconds:1,weeks:6048e5},c=function(e){return e instanceof g},m=function(e,t,n){return new g(e,n,t.$l)},h=function(e){return t.p(e)+"s"},p=function(e){return e<0},v=function(e){return p(e)?Math.ceil(e):Math.floor(e)},_=function(e){return Math.abs(e)},f=function(e,t){return e?p(e)?{negative:!0,format:""+_(e)+t}:{negative:!1,format:""+e+t}:{negative:!1,format:""}},g=function(){function p(e,t,n){var a=this;if(this.$d={},this.$l=n,void 0===e&&(this.$ms=0,this.parseFromMilliseconds()),t)return m(e*u[h(t)],this);if("number"==typeof e)return this.$ms=e,this.parseFromMilliseconds(),this;if("object"==typeof e)return Object.keys(e).forEach(function(t){a.$d[h(t)]=e[t]}),this.calMilliseconds(),this;if("string"==typeof e){var i=e.match(l);if(i){var s=i.slice(2).map(function(e){return null!=e?Number(e):0});return this.$d.years=s[0],this.$d.months=s[1],this.$d.weeks=s[2],this.$d.days=s[3],this.$d.hours=s[4],this.$d.minutes=s[5],this.$d.seconds=s[6],this.calMilliseconds(),this}}return this}var _=p.prototype;return _.calMilliseconds=function(){var e=this;this.$ms=Object.keys(this.$d).reduce(function(t,n){return t+(e.$d[n]||0)*u[n]},0)},_.parseFromMilliseconds=function(){var e=this.$ms;this.$d.years=v(e/r),e%=r,this.$d.months=v(e/d),e%=d,this.$d.days=v(e/s),e%=s,this.$d.hours=v(e/i),e%=i,this.$d.minutes=v(e/a),e%=a,this.$d.seconds=v(e/n),e%=n,this.$d.milliseconds=e},_.toISOString=function(){var e=f(this.$d.years,"Y"),t=f(this.$d.months,"M"),n=+this.$d.days||0;this.$d.weeks&&(n+=7*this.$d.weeks);var a=f(n,"D"),i=f(this.$d.hours,"H"),s=f(this.$d.minutes,"M"),o=this.$d.seconds||0;this.$d.milliseconds&&(o+=this.$d.milliseconds/1e3,o=Math.round(1e3*o)/1e3);var r=f(o,"S"),d=e.negative||t.negative||a.negative||i.negative||s.negative||r.negative,l=i.format||s.format||r.format?"T":"",u=(d?"-":"")+"P"+e.format+t.format+a.format+l+i.format+s.format+r.format;return"P"===u||"-P"===u?"P0D":u},_.toJSON=function(){return this.toISOString()},_.format=function(e){var n=e||"YYYY-MM-DDTHH:mm:ss",a={Y:this.$d.years,YY:t.s(this.$d.years,2,"0"),YYYY:t.s(this.$d.years,4,"0"),M:this.$d.months,MM:t.s(this.$d.months,2,"0"),D:this.$d.days,DD:t.s(this.$d.days,2,"0"),H:this.$d.hours,HH:t.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:t.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:t.s(this.$d.seconds,2,"0"),SSS:t.s(this.$d.milliseconds,3,"0")};return n.replace(o,function(e,t){return t||String(a[e])})},_.as=function(e){return this.$ms/u[h(e)]},_.get=function(e){var t=this.$ms,n=h(e);return"milliseconds"===n?t%=1e3:t="weeks"===n?v(t/u[n]):this.$d[n],t||0},_.add=function(e,t,n){var a;return a=t?e*u[h(t)]:c(e)?e.$ms:m(e,this).$ms,m(this.$ms+a*(n?-1:1),this)},_.subtract=function(e,t){return this.add(e,t,!0)},_.locale=function(e){var t=this.clone();return t.$l=e,t},_.clone=function(){return m(this.$ms,this)},_.humanize=function(t){return e().add(this.$ms,"ms").locale(this.$l).fromNow(!t)},_.valueOf=function(){return this.asMilliseconds()},_.milliseconds=function(){return this.get("milliseconds")},_.asMilliseconds=function(){return this.as("milliseconds")},_.seconds=function(){return this.get("seconds")},_.asSeconds=function(){return this.as("seconds")},_.minutes=function(){return this.get("minutes")},_.asMinutes=function(){return this.as("minutes")},_.hours=function(){return this.get("hours")},_.asHours=function(){return this.as("hours")},_.days=function(){return this.get("days")},_.asDays=function(){return this.as("days")},_.weeks=function(){return this.get("weeks")},_.asWeeks=function(){return this.as("weeks")},_.months=function(){return this.get("months")},_.asMonths=function(){return this.as("months")},_.years=function(){return this.get("years")},_.asYears=function(){return this.as("years")},p}(),y=function(e,t,n){return e.add(t.years()*n,"y").add(t.months()*n,"M").add(t.days()*n,"d").add(t.hours()*n,"h").add(t.minutes()*n,"m").add(t.seconds()*n,"s").add(t.milliseconds()*n,"ms")};return function(n,a,i){e=i,t=i().$utils(),i.duration=function(e,t){var n=i.locale();return m(e,{$l:n},t)},i.isDuration=c;var s=a.prototype.add,o=a.prototype.subtract;a.prototype.add=function(e,t){return c(e)?y(this,e,1):s.bind(this)(e,t)},a.prototype.subtract=function(e,t){return c(e)?y(this,e,-1):o.bind(this)(e,t)}}}()),c.exports),p=t(h),v={exports:{}};var _,f=(m||(m=1,v.exports=function(){var e="day";return function(t,n,a){var i=function(t){return t.add(4-t.isoWeekday(),e)},s=n.prototype;s.isoWeekYear=function(){return i(this).year()},s.isoWeek=function(t){if(!this.$utils().u(t))return this.add(7*(t-this.isoWeek()),e);var n,s,o,r=i(this),d=(n=this.isoWeekYear(),o=4-(s=(this.$u?a.utc:a)().year(n).startOf("year")).isoWeekday(),s.isoWeekday()>4&&(o+=7),s.add(o,e));return r.diff(d,"week")+1},s.isoWeekday=function(e){return this.$utils().u(e)?this.day()||7:this.day(this.day()%7?e:e-7)};var o=s.startOf;s.startOf=function(e,t){var n=this.$utils(),a=!!n.u(t)||t;return"isoweek"===n.p(e)?a?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):o.bind(this)(e,t)}}}()),v.exports),g=t(f),y={exports:{}};var M,k=(_||(_=1,y.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}}),y.exports),w=t(k),D={exports:{}};var b,x=(M||(M=1,D.exports=function(e,t,n){var a=t.prototype,i=function(e){return e&&(e.indexOf?e:e.s)},s=function(e,t,n,a,s){var o=e.name?e:e.$locale(),r=i(o[t]),d=i(o[n]),l=r||d.map(function(e){return e.slice(0,a)});if(!s)return l;var u=o.weekStart;return l.map(function(e,t){return l[(t+(u||0))%7]})},o=function(){return n.Ls[n.locale()]},r=function(e,t){return e.formats[t]||function(e){return e.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(e,t,n){return t||n.slice(1)})}(e.formats[t.toUpperCase()])},d=function(){var e=this;return{months:function(t){return t?t.format("MMMM"):s(e,"months")},monthsShort:function(t){return t?t.format("MMM"):s(e,"monthsShort","months",3)},firstDayOfWeek:function(){return e.$locale().weekStart||0},weekdays:function(t){return t?t.format("dddd"):s(e,"weekdays")},weekdaysMin:function(t){return t?t.format("dd"):s(e,"weekdaysMin","weekdays",2)},weekdaysShort:function(t){return t?t.format("ddd"):s(e,"weekdaysShort","weekdays",3)},longDateFormat:function(t){return r(e.$locale(),t)},meridiem:this.$locale().meridiem,ordinal:this.$locale().ordinal}};a.localeData=function(){return d.bind(this)()},n.localeData=function(){var e=o();return{firstDayOfWeek:function(){return e.weekStart||0},weekdays:function(){return n.weekdays()},weekdaysShort:function(){return n.weekdaysShort()},weekdaysMin:function(){return n.weekdaysMin()},months:function(){return n.months()},monthsShort:function(){return n.monthsShort()},longDateFormat:function(t){return r(e,t)},meridiem:e.meridiem,ordinal:e.ordinal}},n.months=function(){return s(o(),"months")},n.monthsShort=function(){return s(o(),"monthsShort","months",3)},n.weekdays=function(e){return s(o(),"weekdays",null,null,e)},n.weekdaysShort=function(e){return s(o(),"weekdaysShort","weekdays",3,e)},n.weekdaysMin=function(e){return s(o(),"weekdaysMin","weekdays",2,e)}}),D.exports),L=t(x),T={exports:{}};var Y,E=(b||(b=1,T.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};return function(t,n,a){var i=n.prototype,s=i.format;a.en.formats=e,i.format=function(t){void 0===t&&(t="YYYY-MM-DDTHH:mm:ssZ");var n=this.$locale().formats,a=function(t,n){return t.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(t,a,i){var s=i&&i.toUpperCase();return a||n[i]||e[i]||n[s].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(e,t,n){return t||n.slice(1)})})}(t,void 0===n?{}:n);return s.call(this,a)}}}()),T.exports),S=t(E),$={exports:{}};var H,A=(Y||(Y=1,$.exports=function(e,t,n){e=e||{};var a=t.prototype,i={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function s(e,t,n,i){return a.fromToBase(e,t,n,i)}n.en.relativeTime=i,a.fromToBase=function(t,a,s,o,r){for(var d,l,u,c=s.$locale().relativeTime||i,m=e.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],h=m.length,p=0;p<h;p+=1){var v=m[p];v.d&&(d=o?n(t).diff(s,v.d,!0):s.diff(t,v.d,!0));var _=(e.rounding||Math.round)(Math.abs(d));if(u=d>0,_<=v.r||!v.r){_<=1&&p>0&&(v=m[p-1]);var f=c[v.l];r&&(_=r(""+_)),l="string"==typeof f?f.replace("%d",_):f(_,a,v.l,u);break}}if(a)return l;var g=u?c.future:c.past;return"function"==typeof g?g(l):g.replace("%s",l)},a.to=function(e,t){return s(e,t,this,!0)},a.from=function(e,t){return s(e,t,this)};var o=function(e){return e.$u?n.utc():n()};a.toNow=function(e){return this.to(o(this),e)},a.fromNow=function(e){return this.from(o(this),e)}}),$.exports),C=t(A),z={exports:{}};var j,N=(H||(H=1,z.exports=function(){var e={year:0,month:1,day:2,hour:3,minute:4,second:5},t={};return function(n,a,i){var s,o=function(e,n,a){void 0===a&&(a={});var i=new Date(e),s=function(e,n){void 0===n&&(n={});var a=n.timeZoneName||"short",i=e+"|"+a,s=t[i];return s||(s=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:a}),t[i]=s),s}(n,a);return s.formatToParts(i)},r=function(t,n){for(var a=o(t,n),s=[],r=0;r<a.length;r+=1){var d=a[r],l=d.type,u=d.value,c=e[l];c>=0&&(s[c]=parseInt(u,10))}var m=s[3],h=24===m?0:m,p=s[0]+"-"+s[1]+"-"+s[2]+" "+h+":"+s[4]+":"+s[5]+":000",v=+t;return(i.utc(p).valueOf()-(v-=v%1e3))/6e4},d=a.prototype;d.tz=function(e,t){void 0===e&&(e=s);var n,a=this.utcOffset(),o=this.toDate(),r=o.toLocaleString("en-US",{timeZone:e}),d=Math.round((o-new Date(r))/1e3/60),l=15*-Math.round(o.getTimezoneOffset()/15)-d;if(Number(l)){if(n=i(r,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(l,!0),t){var u=n.utcOffset();n=n.add(a-u,"minute")}}else n=this.utcOffset(0,t);return n.$x.$timezone=e,n},d.offsetName=function(e){var t=this.$x.$timezone||i.tz.guess(),n=o(this.valueOf(),t,{timeZoneName:e}).find(function(e){return"timezonename"===e.type.toLowerCase()});return n&&n.value};var l=d.startOf;d.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return l.call(this,e,t);var n=i(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return l.call(n,e,t).tz(this.$x.$timezone,!0)},i.tz=function(e,t,n){var a=n&&t,o=n||t||s,d=r(+i(),o);if("string"!=typeof e)return i(e).tz(o);var l=function(e,t,n){var a=e-60*t*1e3,i=r(a,n);if(t===i)return[a,t];var s=r(a-=60*(i-t)*1e3,n);return i===s?[a,i]:[e-60*Math.min(i,s)*1e3,Math.max(i,s)]}(i.utc(e,a).valueOf(),d,o),u=l[0],c=l[1],m=i(u).utcOffset(c);return m.$x.$timezone=o,m},i.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},i.tz.setDefault=function(e){s=e}}}()),z.exports),F=t(N),O={exports:{}};var P,V=(j||(j=1,O.exports=function(e,t,n){n.updateLocale=function(e,t){var a=n.Ls[e];if(a)return(t?Object.keys(t):[]).forEach(function(e){a[e]=t[e]}),a}}),O.exports),W=t(V),B={exports:{}};var I=(P||(P=1,B.exports=function(){var e="week",t="year";return function(n,a,i){var s=a.prototype;s.week=function(n){if(void 0===n&&(n=null),null!==n)return this.add(7*(n-this.week()),"day");var a=this.$locale().yearStart||1;if(11===this.month()&&this.date()>25){var s=i(this).startOf(t).add(1,t).date(a),o=i(this).endOf(e);if(s.isBefore(o))return 1}var r=i(this).startOf(t).date(a).startOf(e).subtract(1,"millisecond"),d=this.diff(r,e,!0);return d<0?i(this).startOf("week").week():Math.ceil(d)},s.weeks=function(e){return void 0===e&&(e=null),this.week(e)}}}()),B.exports),R=t(I);
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const U=globalThis,J=U.ShadowRoot&&(void 0===U.ShadyCSS||U.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,q=Symbol(),Z=new WeakMap;let K=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==q)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(J&&void 0===e){const n=void 0!==t&&1===t.length;n&&(e=Z.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&Z.set(t,e))}return e}toString(){return this.cssText}};const G=(e,...t)=>{const n=1===e.length?e[0]:t.reduce((t,n,a)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+e[a+1],e[0]);return new K(n,e,q)},Q=J?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return(e=>new K("string"==typeof e?e:e+"",void 0,q))(t)})(e):e,{is:X,defineProperty:ee,getOwnPropertyDescriptor:te,getOwnPropertyNames:ne,getOwnPropertySymbols:ae,getPrototypeOf:ie}=Object,se=globalThis,oe=se.trustedTypes,re=oe?oe.emptyScript:"",de=se.reactiveElementPolyfillSupport,le=(e,t)=>e,ue={toAttribute(e,t){switch(t){case Boolean:e=e?re:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=null!==e;break;case Number:n=null===e?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch(e){n=null}}return n}},ce=(e,t)=>!X(e,t),me={attribute:!0,type:String,converter:ue,reflect:!1,hasChanged:ce};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),se.litPropertyMetadata??=new WeakMap;let he=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=me){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const n=Symbol(),a=this.getPropertyDescriptor(e,n,t);void 0!==a&&ee(this.prototype,e,a)}}static getPropertyDescriptor(e,t,n){const{get:a,set:i}=te(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return a?.call(this)},set(t){const s=a?.call(this);i.call(this,t),this.requestUpdate(e,s,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??me}static _$Ei(){if(this.hasOwnProperty(le("elementProperties")))return;const e=ie(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(le("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(le("properties"))){const e=this.properties,t=[...ne(e),...ae(e)];for(const n of t)this.createProperty(n,e[n])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const n=this._$Eu(e,t);void 0!==n&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const e of n)t.unshift(Q(e))}else void 0!==e&&t.push(Q(e));return t}static _$Eu(e,t){const n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$ES??=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$ES?.splice(this._$ES.indexOf(e)>>>0,1)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{if(J)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const n of t){const t=document.createElement("style"),a=U.litNonce;void 0!==a&&t.setAttribute("nonce",a),t.textContent=n.cssText,e.appendChild(t)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$ES?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$ES?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$EO(e,t){const n=this.constructor.elementProperties.get(e),a=this.constructor._$Eu(e,n);if(void 0!==a&&!0===n.reflect){const i=(void 0!==n.converter?.toAttribute?n.converter:ue).toAttribute(t,n.type);this._$Em=e,null==i?this.removeAttribute(a):this.setAttribute(a,i),this._$Em=null}}_$AK(e,t){const n=this.constructor,a=n._$Eh.get(e);if(void 0!==a&&this._$Em!==a){const e=n.getPropertyOptions(a),i="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:ue;this._$Em=a,this[a]=i.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,n,a=!1,i){if(void 0!==e){if(n??=this.constructor.getPropertyOptions(e),!(n.hasChanged??ce)(a?i:this[e],t))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(e,t,n){this._$AL.has(e)||this._$AL.set(e,t),!0===n.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,n]of e)!0!==n.wrapped||this._$AL.has(t)||void 0===this[t]||this.C(t,this[t],n)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$ES?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$ET()}catch(t){throw e=!1,this._$ET(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$ES?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach(e=>this._$EO(e,this[e])),this._$ET()}updated(e){}firstUpdated(e){}};he.elementStyles=[],he.shadowRootOptions={mode:"open"},he[le("elementProperties")]=new Map,he[le("finalized")]=new Map,de?.({ReactiveElement:he}),(se.reactiveElementVersions??=[]).push("2.0.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const pe=globalThis,ve=e=>e,_e=pe.trustedTypes,fe=_e?_e.createPolicy("lit-html",{createHTML:e=>e}):void 0,ge="$lit$",ye=`lit$${Math.random().toFixed(9).slice(2)}$`,Me="?"+ye,ke=`<${Me}>`,we=document,De=()=>we.createComment(""),be=e=>null===e||"object"!=typeof e&&"function"!=typeof e,xe=Array.isArray,Le="[ \t\n\f\r]",Te=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ye=/-->/g,Ee=/>/g,Se=RegExp(`>|${Le}(?:([^\\s"'>=/]+)(${Le}*=${Le}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),$e=/'/g,He=/"/g,Ae=/^(?:script|style|textarea|title)$/i,Ce=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),ze=Symbol.for("lit-noChange"),je=Symbol.for("lit-nothing"),Ne=new WeakMap,Fe=we.createTreeWalker(we,129);function Oe(e,t){if(!xe(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==fe?fe.createHTML(t):t}const Pe=(e,t)=>{const n=e.length-1,a=[];let i,s=2===t?"<svg>":3===t?"<math>":"",o=Te;for(let t=0;t<n;t++){const n=e[t];let r,d,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,d=o.exec(n),null!==d);)u=o.lastIndex,o===Te?"!--"===d[1]?o=Ye:void 0!==d[1]?o=Ee:void 0!==d[2]?(Ae.test(d[2])&&(i=RegExp("</"+d[2],"g")),o=Se):void 0!==d[3]&&(o=Se):o===Se?">"===d[0]?(o=i??Te,l=-1):void 0===d[1]?l=-2:(l=o.lastIndex-d[2].length,r=d[1],o=void 0===d[3]?Se:'"'===d[3]?He:$e):o===He||o===$e?o=Se:o===Ye||o===Ee?o=Te:(o=Se,i=void 0);const c=o===Se&&e[t+1].startsWith("/>")?" ":"";s+=o===Te?n+ke:l>=0?(a.push(r),n.slice(0,l)+ge+n.slice(l)+ye+c):n+ye+(-2===l?t:c)}return[Oe(e,s+(e[n]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),a]};class Ve{constructor({strings:e,_$litType$:t},n){let a;this.parts=[];let i=0,s=0;const o=e.length-1,r=this.parts,[d,l]=Pe(e,t);if(this.el=Ve.createElement(d,n),Fe.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(a=Fe.nextNode())&&r.length<o;){if(1===a.nodeType){if(a.hasAttributes())for(const e of a.getAttributeNames())if(e.endsWith(ge)){const t=l[s++],n=a.getAttribute(e).split(ye),o=/([.?@])?(.*)/.exec(t);r.push({type:1,index:i,name:o[2],strings:n,ctor:"."===o[1]?Ue:"?"===o[1]?Je:"@"===o[1]?qe:Re}),a.removeAttribute(e)}else e.startsWith(ye)&&(r.push({type:6,index:i}),a.removeAttribute(e));if(Ae.test(a.tagName)){const e=a.textContent.split(ye),t=e.length-1;if(t>0){a.textContent=_e?_e.emptyScript:"";for(let n=0;n<t;n++)a.append(e[n],De()),Fe.nextNode(),r.push({type:2,index:++i});a.append(e[t],De())}}}else if(8===a.nodeType)if(a.data===Me)r.push({type:2,index:i});else{let e=-1;for(;-1!==(e=a.data.indexOf(ye,e+1));)r.push({type:7,index:i}),e+=ye.length-1}i++}}static createElement(e,t){const n=we.createElement("template");return n.innerHTML=e,n}}function We(e,t,n=e,a){if(t===ze)return t;let i=void 0!==a?n._$Co?.[a]:n._$Cl;const s=be(t)?void 0:t._$litDirective$;return i?.constructor!==s&&(i?._$AO?.(!1),void 0===s?i=void 0:(i=new s(e),i._$AT(e,n,a)),void 0!==a?(n._$Co??=[])[a]=i:n._$Cl=i),void 0!==i&&(t=We(e,i._$AS(e,t.values),i,a)),t}class Be{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:n}=this._$AD,a=(e?.creationScope??we).importNode(t,!0);Fe.currentNode=a;let i=Fe.nextNode(),s=0,o=0,r=n[0];for(;void 0!==r;){if(s===r.index){let t;2===r.type?t=new Ie(i,i.nextSibling,this,e):1===r.type?t=new r.ctor(i,r.name,r.strings,this,e):6===r.type&&(t=new Ze(i,this,e)),this._$AV.push(t),r=n[++o]}s!==r?.index&&(i=Fe.nextNode(),s++)}return Fe.currentNode=we,a}p(e){let t=0;for(const n of this._$AV)void 0!==n&&(void 0!==n.strings?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}}class Ie{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,a){this.type=2,this._$AH=je,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=a,this._$Cv=a?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=We(this,e,t),be(e)?e===je||null==e||""===e?(this._$AH!==je&&this._$AR(),this._$AH=je):e!==this._$AH&&e!==ze&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>xe(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==je&&be(this._$AH)?this._$AA.nextSibling.data=e:this.T(we.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:n}=e,a="number"==typeof n?this._$AC(e):(void 0===n.el&&(n.el=Ve.createElement(Oe(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===a)this._$AH.p(t);else{const e=new Be(a,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=Ne.get(e.strings);return void 0===t&&Ne.set(e.strings,t=new Ve(e)),t}k(e){xe(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,a=0;for(const i of e)a===t.length?t.push(n=new Ie(this.O(De()),this.O(De()),this,this.options)):n=t[a],n._$AI(i),a++;a<t.length&&(this._$AR(n&&n._$AB.nextSibling,a),t.length=a)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=ve(e).nextSibling;ve(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class Re{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,a,i){this.type=1,this._$AH=je,this._$AN=void 0,this.element=e,this.name=t,this._$AM=a,this.options=i,n.length>2||""!==n[0]||""!==n[1]?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=je}_$AI(e,t=this,n,a){const i=this.strings;let s=!1;if(void 0===i)e=We(this,e,t,0),s=!be(e)||e!==this._$AH&&e!==ze,s&&(this._$AH=e);else{const a=e;let o,r;for(e=i[0],o=0;o<i.length-1;o++)r=We(this,a[n+o],t,o),r===ze&&(r=this._$AH[o]),s||=!be(r)||r!==this._$AH[o],r===je?e=je:e!==je&&(e+=(r??"")+i[o+1]),this._$AH[o]=r}s&&!a&&this.j(e)}j(e){e===je?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Ue extends Re{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===je?void 0:e}}class Je extends Re{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==je)}}class qe extends Re{constructor(e,t,n,a,i){super(e,t,n,a,i),this.type=5}_$AI(e,t=this){if((e=We(this,e,t,0)??je)===ze)return;const n=this._$AH,a=e===je&&n!==je||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==je&&(n===je||a);a&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class Ze{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){We(this,e)}}const Ke=pe.litHtmlPolyfillSupport;Ke?.(Ve,Ie),(pe.litHtmlVersions??=[]).push("3.3.2");const Ge=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Qe=class extends he{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,n)=>{const a=n?.renderBefore??t;let i=a._$litPart$;if(void 0===i){const e=n?.renderBefore??null;a._$litPart$=i=new Ie(t.insertBefore(De(),e),e,void 0,n??{})}return i._$AI(e),i})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return ze}};Qe._$litElement$=!0,Qe.finalized=!0,Ge.litElementHydrateSupport?.({LitElement:Qe});const Xe=Ge.litElementPolyfillSupport;Xe?.({LitElement:Qe}),(Ge.litElementVersions??=[]).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const et=e=>(t,n)=>{void 0!==n?n.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},tt={attribute:!0,type:String,converter:ue,reflect:!1,hasChanged:ce},nt=(e=tt,t,n)=>{const{kind:a,metadata:i}=n;let s=globalThis.litPropertyMetadata.get(i);if(void 0===s&&globalThis.litPropertyMetadata.set(i,s=new Map),s.set(n.name,e),"accessor"===a){const{name:a}=n;return{set(n){const i=t.get.call(this);t.set.call(this,n),this.requestUpdate(a,i,e)},init(t){return void 0!==t&&this.C(a,void 0,e),t}}}if("setter"===a){const{name:a}=n;return function(n){const i=this[a];t.call(this,n),this.requestUpdate(a,i,e)}}throw Error("Unsupported decorator location: "+a)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function at(e){return(t,n)=>"object"==typeof n?nt(e,t,n):((e,t,n)=>{const a=t.hasOwnProperty(n);return t.constructor.createProperty(n,a?{...e,wrapped:!0}:e),a?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function it(e){return at({...e,state:!0,attribute:!1})}var st,ot={exports:{}};st||(st=1,ot.exports=function(e){function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=t(e),a={name:"ca",weekdays:"Diumenge_Dilluns_Dimarts_Dimecres_Dijous_Divendres_Dissabte".split("_"),weekdaysShort:"Dg._Dl._Dt._Dc._Dj._Dv._Ds.".split("_"),weekdaysMin:"Dg_Dl_Dt_Dc_Dj_Dv_Ds".split("_"),months:"Gener_Febrer_Març_Abril_Maig_Juny_Juliol_Agost_Setembre_Octubre_Novembre_Desembre".split("_"),monthsShort:"Gen._Febr._Març_Abr._Maig_Juny_Jul._Ag._Set._Oct._Nov._Des.".split("_"),weekStart:1,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM [de] YYYY",LLL:"D MMMM [de] YYYY [a les] H:mm",LLLL:"dddd D MMMM [de] YYYY [a les] H:mm",ll:"D MMM YYYY",lll:"D MMM YYYY, H:mm",llll:"ddd D MMM YYYY, H:mm"},relativeTime:{future:"d'aquí %s",past:"fa %s",s:"uns segons",m:"un minut",mm:"%d minuts",h:"una hora",hh:"%d hores",d:"un dia",dd:"%d dies",M:"un mes",MM:"%d mesos",y:"un any",yy:"%d anys"},ordinal:function(e){return e+(1===e||3===e?"r":2===e?"n":4===e?"t":"è")}};return n.default.locale(a,null,!0),a}(i()));var rt,dt={exports:{}};rt||(rt=1,dt.exports=function(e){function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=t(e);function a(e){return e>1&&e<5&&1!=~~(e/10)}function i(e,t,n,i){var s=e+" ";switch(n){case"s":return t||i?"pár sekund":"pár sekundami";case"m":return t?"minuta":i?"minutu":"minutou";case"mm":return t||i?s+(a(e)?"minuty":"minut"):s+"minutami";case"h":return t?"hodina":i?"hodinu":"hodinou";case"hh":return t||i?s+(a(e)?"hodiny":"hodin"):s+"hodinami";case"d":return t||i?"den":"dnem";case"dd":return t||i?s+(a(e)?"dny":"dní"):s+"dny";case"M":return t||i?"měsíc":"měsícem";case"MM":return t||i?s+(a(e)?"měsíce":"měsíců"):s+"měsíci";case"y":return t||i?"rok":"rokem";case"yy":return t||i?s+(a(e)?"roky":"let"):s+"lety"}}var s={name:"cs",weekdays:"neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),weekdaysShort:"ne_po_út_st_čt_pá_so".split("_"),weekdaysMin:"ne_po_út_st_čt_pá_so".split("_"),months:"leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"),monthsShort:"led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_"),weekStart:1,yearStart:4,ordinal:function(e){return e+"."},formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd D. MMMM YYYY H:mm",l:"D. M. YYYY"},relativeTime:{future:"za %s",past:"před %s",s:i,m:i,mm:i,h:i,hh:i,d:i,dd:i,M:i,MM:i,y:i,yy:i}};return n.default.locale(s,null,!0),s}(i()));var lt,ut={exports:{}};lt||(lt=1,ut.exports=function(e){function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=t(e),a={name:"da",weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"søn._man._tirs._ons._tors._fre._lør.".split("_"),weekdaysMin:"sø._ma._ti._on._to._fr._lø.".split("_"),months:"januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),monthsShort:"jan._feb._mar._apr._maj_juni_juli_aug._sept._okt._nov._dec.".split("_"),weekStart:1,yearStart:4,ordinal:function(e){return e+"."},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd [d.] D. MMMM YYYY [kl.] HH:mm"},relativeTime:{future:"om %s",past:"%s siden",s:"få sekunder",m:"et minut",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dage",M:"en måned",MM:"%d måneder",y:"et år",yy:"%d år"}};return n.default.locale(a,null,!0),a}(i()));var ct,mt={exports:{}};ct||(ct=1,mt.exports=function(e){function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=t(e),a={s:"ein paar Sekunden",m:["eine Minute","einer Minute"],mm:"%d Minuten",h:["eine Stunde","einer Stunde"],hh:"%d Stunden",d:["ein Tag","einem Tag"],dd:["%d Tage","%d Tagen"],M:["ein Monat","einem Monat"],MM:["%d Monate","%d Monaten"],y:["ein Jahr","einem Jahr"],yy:["%d Jahre","%d Jahren"]};function i(e,t,n){var i=a[n];return Array.isArray(i)&&(i=i[t?0:1]),i.replace("%d",e)}var s={name:"de-at",weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),months:"Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jän._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),ordinal:function(e){return e+"."},weekStart:1,formats:{LTS:"HH:mm:ss",LT:"HH:mm",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd, D. MMMM YYYY HH:mm"},relativeTime:{future:"in %s",past:"vor %s",s:i,m:i,mm:i,h:i,hh:i,d:i,dd:i,M:i,MM:i,y:i,yy:i}};return n.default.locale(s,null,!0),s}(i()));var ht,pt={exports:{}};ht||(ht=1,pt.exports=function(e){function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=t(e),a={s:"ein paar Sekunden",m:["eine Minute","einer Minute"],mm:"%d Minuten",h:["eine Stunde","einer Stunde"],hh:"%d Stunden",d:["ein Tag","einem Tag"],dd:["%d Tage","%d Tagen"],M:["ein Monat","einem Monat"],MM:["%d Monate","%d Monaten"],y:["ein Jahr","einem Jahr"],yy:["%d Jahre","%d Jahren"]};function i(e,t,n){var i=a[n];return Array.isArray(i)&&(i=i[t?0:1]),i.replace("%d",e)}var s={name:"de-ch",weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),months:"Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),ordinal:function(e){return e+"."},weekStart:1,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd, D. MMMM YYYY HH:mm"},relativeTime:{future:"in %s",past:"vor %s",s:i,m:i,mm:i,h:i,hh:i,d:i,dd:i,M:i,MM:i,y:i,yy:i}};return n.default.locale(s,null,!0),s}(i()));var vt,_t={exports:{}};vt||(vt=1,_t.exports=function(e){function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=t(e),a={s:"ein paar Sekunden",m:["eine Minute","einer Minute"],mm:"%d Minuten",h:["eine Stunde","einer Stunde"],hh:"%d Stunden",d:["ein Tag","einem Tag"],dd:["%d Tage","%d Tagen"],M:["ein Monat","einem Monat"],MM:["%d Monate","%d Monaten"],y:["ein Jahr","einem Jahr"],yy:["%d Jahre","%d Jahren"]};function i(e,t,n){var i=a[n];return Array.isArray(i)&&(i=i[t?0:1]),i.replace("%d",e)}var s={name:"de",weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),months:"Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sept._Okt._Nov._Dez.".split("_"),ordinal:function(e){return e+"."},weekStart:1,yearStart:4,formats:{LTS:"HH:mm:ss",LT:"HH:mm",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd, D. MMMM YYYY HH:mm"},relativeTime:{future:"in %s",past:"vor %s",s:i,m:i,mm:i,h:i,hh:i,d:i,dd:i,M:i,MM:i,y:i,yy:i}};return n.default.locale(s,null,!0),s}(i()));var ft,gt={exports:{}};ft||(ft=1,gt.exports=function(e){function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=t(e),a={name:"en-au",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),weekStart:1,weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),formats:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}};return n.default.locale(a,null,!0),a}(i()));var yt,Mt={exports:{}};yt||(yt=1,Mt.exports=function(e){function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=t(e),a={name:"en-ca",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),ordinal:function(e){return e},formats:{LT:"h:mm A",LTS:"h:mm:ss A",L:"YYYY-MM-DD",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"}};return n.default.locale(a,null,!0),a}(i()));var kt,wt={exports:{}};kt||(kt=1,wt.exports=function(e){function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=t(e),a={name:"en-gb",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekStart:1,yearStart:4,relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}};return n.default.locale(a,null,!0),a}(i()));var Dt,bt={exports:{}};Dt||(Dt=1,bt.exports=function(e){function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=t(e),a={name:"en-ie",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),weekStart:1,weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),ordinal:function(e){return e},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"}};return n.default.locale(a,null,!0),a}(i()));var xt,Lt={exports:{}};xt||(xt=1,Lt.exports=function(e){function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=t(e),a={name:"en-il",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),ordinal:function(e){return e},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"}};return n.default.locale(a,null,!0),a}(i()));var Tt,Yt={exports:{}};Tt||(Tt=1,Yt.exports=function(e){function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=t(e),a={name:"en-in",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekStart:1,yearStart:4,relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}};return n.default.locale(a,null,!0),a}(i()));var Et,St={exports:{}};Et||(Et=1,St.exports=function(e){function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=t(e),a={name:"en-nz",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),weekStart:1,weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"},formats:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"}};return n.default.locale(a,null,!0),a}(i()));var $t,Ht={exports:{}};$t||($t=1,Ht.exports=function(e){function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=t(e),a={name:"en-sg",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),weekStart:1,weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),ordinal:function(e){return e},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"}};return n.default.locale(a,null,!0),a}(i()));var At,Ct={exports:{}};At||(At=1,Ct.exports=function(e){function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=t(e),a={name:"en-tt",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekStart:1,yearStart:4,relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}};return n.default.locale(a,null,!0),a}(i()));var zt,jt={exports:{}};zt||(zt=1,jt.exports={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}});var Nt,Ft={exports:{}};Nt||(Nt=1,Ft.exports=function(e){function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=t(e),a={name:"es-do",weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_sá".split("_"),months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),monthsShort:"ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),weekStart:1,relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},ordinal:function(e){return e+"º"},formats:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY h:mm A",LLLL:"dddd, D [de] MMMM [de] YYYY h:mm A"}};return n.default.locale(a,null,!0),a}(i()));var Ot,Pt={exports:{}};Ot||(Ot=1,Pt.exports=function(e){function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=t(e),a={name:"es-pr",monthsShort:"ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_sá".split("_"),months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),weekStart:1,formats:{LT:"h:mm A",LTS:"h:mm:ss A",L:"MM/DD/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY h:mm A",LLLL:"dddd, D [de] MMMM [de] YYYY h:mm A"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},ordinal:function(e){return e+"º"}};return n.default.locale(a,null,!0),a}(i()));var Vt,Wt={exports:{}};Vt||(Vt=1,Wt.exports=function(e){function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=t(e),a={name:"es-us",weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_sá".split("_"),months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),monthsShort:"ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},ordinal:function(e){return e+"º"},formats:{LT:"h:mm A",LTS:"h:mm:ss A",L:"MM/DD/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY h:mm A",LLLL:"dddd, D [de] MMMM [de] YYYY h:mm A"}};return n.default.locale(a,null,!0),a}(i()));var Bt,It={exports:{}};Bt||(Bt=1,It.exports=function(e){function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=t(e);function a(e,t,n,a){var i={s:["mõne sekundi","mõni sekund","paar sekundit"],m:["ühe minuti","üks minut"],mm:["%d minuti","%d minutit"],h:["ühe tunni","tund aega","üks tund"],hh:["%d tunni","%d tundi"],d:["ühe päeva","üks päev"],M:["kuu aja","kuu aega","üks kuu"],MM:["%d kuu","%d kuud"],y:["ühe aasta","aasta","üks aasta"],yy:["%d aasta","%d aastat"]};return t?(i[n][2]?i[n][2]:i[n][1]).replace("%d",e):(a?i[n][0]:i[n][1]).replace("%d",e)}var i={name:"et",weekdays:"pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split("_"),weekdaysShort:"P_E_T_K_N_R_L".split("_"),weekdaysMin:"P_E_T_K_N_R_L".split("_"),months:"jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),monthsShort:"jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),ordinal:function(e){return e+"."},weekStart:1,relativeTime:{future:"%s pärast",past:"%s tagasi",s:a,m:a,mm:a,h:a,hh:a,d:a,dd:"%d päeva",M:a,MM:a,y:a,yy:a},formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"}};return n.default.locale(i,null,!0),i}(i()));var Rt,Ut={exports:{}};Rt||(Rt=1,Ut.exports=function(e){function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=t(e),a={name:"es",monthsShort:"ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_sá".split("_"),months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),weekStart:1,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},ordinal:function(e){return e+"º"}};return n.default.locale(a,null,!0),a}(i()));var Jt,qt={exports:{}};Jt||(Jt=1,qt.exports=function(e){function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=t(e);function a(e,t,n,a){var i={s:"muutama sekunti",m:"minuutti",mm:"%d minuuttia",h:"tunti",hh:"%d tuntia",d:"päivä",dd:"%d päivää",M:"kuukausi",MM:"%d kuukautta",y:"vuosi",yy:"%d vuotta",numbers:"nolla_yksi_kaksi_kolme_neljä_viisi_kuusi_seitsemän_kahdeksan_yhdeksän".split("_")},s={s:"muutaman sekunnin",m:"minuutin",mm:"%d minuutin",h:"tunnin",hh:"%d tunnin",d:"päivän",dd:"%d päivän",M:"kuukauden",MM:"%d kuukauden",y:"vuoden",yy:"%d vuoden",numbers:"nollan_yhden_kahden_kolmen_neljän_viiden_kuuden_seitsemän_kahdeksan_yhdeksän".split("_")},o=a&&!t?s:i,r=o[n];return e<10?r.replace("%d",o.numbers[e]):r.replace("%d",e)}var i={name:"fi",weekdays:"sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),weekdaysShort:"su_ma_ti_ke_to_pe_la".split("_"),weekdaysMin:"su_ma_ti_ke_to_pe_la".split("_"),months:"tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),monthsShort:"tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"),ordinal:function(e){return e+"."},weekStart:1,yearStart:4,relativeTime:{future:"%s päästä",past:"%s sitten",s:a,m:a,mm:a,h:a,hh:a,d:a,dd:a,M:a,MM:a,y:a,yy:a},formats:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD.MM.YYYY",LL:"D. MMMM[ta] YYYY",LLL:"D. MMMM[ta] YYYY, [klo] HH.mm",LLLL:"dddd, D. MMMM[ta] YYYY, [klo] HH.mm",l:"D.M.YYYY",ll:"D. MMM YYYY",lll:"D. MMM YYYY, [klo] HH.mm",llll:"ddd, D. MMM YYYY, [klo] HH.mm"}};return n.default.locale(i,null,!0),i}(i()));var Zt,Kt={exports:{}};Zt||(Zt=1,Kt.exports=function(e){function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=t(e),a={name:"fr-ca",weekdays:"dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),months:"janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),weekdaysShort:"dim._lun._mar._mer._jeu._ven._sam.".split("_"),monthsShort:"janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),weekdaysMin:"di_lu_ma_me_je_ve_sa".split("_"),ordinal:function(e){return e},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},relativeTime:{future:"dans %s",past:"il y a %s",s:"quelques secondes",m:"une minute",mm:"%d minutes",h:"une heure",hh:"%d heures",d:"un jour",dd:"%d jours",M:"un mois",MM:"%d mois",y:"un an",yy:"%d ans"}};return n.default.locale(a,null,!0),a}(i()));var Gt,Qt={exports:{}};Gt||(Gt=1,Qt.exports=function(e){function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=t(e),a={name:"fr-ch",weekdays:"dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),months:"janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),weekStart:1,weekdaysShort:"dim._lun._mar._mer._jeu._ven._sam.".split("_"),monthsShort:"janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),weekdaysMin:"di_lu_ma_me_je_ve_sa".split("_"),ordinal:function(e){return e},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},relativeTime:{future:"dans %s",past:"il y a %s",s:"quelques secondes",m:"une minute",mm:"%d minutes",h:"une heure",hh:"%d heures",d:"un jour",dd:"%d jours",M:"un mois",MM:"%d mois",y:"un an",yy:"%d ans"}};return n.default.locale(a,null,!0),a}(i()));var Xt,en={exports:{}};Xt||(Xt=1,en.exports=function(e){function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=t(e),a={name:"fr",weekdays:"dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),weekdaysShort:"dim._lun._mar._mer._jeu._ven._sam.".split("_"),weekdaysMin:"di_lu_ma_me_je_ve_sa".split("_"),months:"janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),monthsShort:"janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},relativeTime:{future:"dans %s",past:"il y a %s",s:"quelques secondes",m:"une minute",mm:"%d minutes",h:"une heure",hh:"%d heures",d:"un jour",dd:"%d jours",M:"un mois",MM:"%d mois",y:"un an",yy:"%d ans"},ordinal:function(e){return e+(1===e?"er":"")}};return n.default.locale(a,null,!0),a}(i()));var tn,nn={exports:{}};tn||(tn=1,nn.exports=function(e){function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=t(e),a={s:"מספר שניות",ss:"%d שניות",m:"דקה",mm:"%d דקות",h:"שעה",hh:"%d שעות",hh2:"שעתיים",d:"יום",dd:"%d ימים",dd2:"יומיים",M:"חודש",MM:"%d חודשים",MM2:"חודשיים",y:"שנה",yy:"%d שנים",yy2:"שנתיים"};function i(e,t,n){return(a[n+(2===e?"2":"")]||a[n]).replace("%d",e)}var s={name:"he",weekdays:"ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"),weekdaysShort:"א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"),weekdaysMin:"א׳_ב׳_ג׳_ד׳_ה׳_ו_ש׳".split("_"),months:"ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split("_"),monthsShort:"ינו_פבר_מרץ_אפר_מאי_יונ_יול_אוג_ספט_אוק_נוב_דצמ".split("_"),relativeTime:{future:"בעוד %s",past:"לפני %s",s:i,m:i,mm:i,h:i,hh:i,d:i,dd:i,M:i,MM:i,y:i,yy:i},ordinal:function(e){return e},format:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D [ב]MMMM YYYY",LLL:"D [ב]MMMM YYYY HH:mm",LLLL:"dddd, D [ב]MMMM YYYY HH:mm",l:"D/M/YYYY",ll:"D MMM YYYY",lll:"D MMM YYYY HH:mm",llll:"ddd, D MMM YYYY HH:mm"},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D [ב]MMMM YYYY",LLL:"D [ב]MMMM YYYY HH:mm",LLLL:"dddd, D [ב]MMMM YYYY HH:mm",l:"D/M/YYYY",ll:"D MMM YYYY",lll:"D MMM YYYY HH:mm",llll:"ddd, D MMM YYYY HH:mm"}};return n.default.locale(s,null,!0),s}(i()));var an,sn={exports:{}};an||(an=1,sn.exports=function(e){function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=t(e),a={name:"hu",weekdays:"vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"),weekdaysShort:"vas_hét_kedd_sze_csüt_pén_szo".split("_"),weekdaysMin:"v_h_k_sze_cs_p_szo".split("_"),months:"január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"),monthsShort:"jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split("_"),ordinal:function(e){return e+"."},weekStart:1,relativeTime:{future:"%s múlva",past:"%s",s:function(e,t,n,a){return"néhány másodperc"+(a||t?"":"e")},m:function(e,t,n,a){return"egy perc"+(a||t?"":"e")},mm:function(e,t,n,a){return e+" perc"+(a||t?"":"e")},h:function(e,t,n,a){return"egy "+(a||t?"óra":"órája")},hh:function(e,t,n,a){return e+" "+(a||t?"óra":"órája")},d:function(e,t,n,a){return"egy "+(a||t?"nap":"napja")},dd:function(e,t,n,a){return e+" "+(a||t?"nap":"napja")},M:function(e,t,n,a){return"egy "+(a||t?"hónap":"hónapja")},MM:function(e,t,n,a){return e+" "+(a||t?"hónap":"hónapja")},y:function(e,t,n,a){return"egy "+(a||t?"év":"éve")},yy:function(e,t,n,a){return e+" "+(a||t?"év":"éve")}},formats:{LT:"H:mm",LTS:"H:mm:ss",L:"YYYY.MM.DD.",LL:"YYYY. MMMM D.",LLL:"YYYY. MMMM D. H:mm",LLLL:"YYYY. MMMM D., dddd H:mm"}};return n.default.locale(a,null,!0),a}(i()));var on,rn={exports:{}};on||(on=1,rn.exports=function(e){function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=t(e),a={name:"it-ch",weekdays:"domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split("_"),months:"gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),weekStart:1,weekdaysShort:"dom_lun_mar_mer_gio_ven_sab".split("_"),monthsShort:"gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),weekdaysMin:"do_lu_ma_me_gi_ve_sa".split("_"),ordinal:function(e){return e},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},relativeTime:{future:"tra %s",past:"%s fa",s:"alcuni secondi",m:"un minuto",mm:"%d minuti",h:"un'ora",hh:"%d ore",d:"un giorno",dd:"%d giorni",M:"un mese",MM:"%d mesi",y:"un anno",yy:"%d anni"}};return n.default.locale(a,null,!0),a}(i()));var dn,ln={exports:{}};dn||(dn=1,ln.exports=function(e){function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=t(e),a={name:"it",weekdays:"domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split("_"),weekdaysShort:"dom_lun_mar_mer_gio_ven_sab".split("_"),weekdaysMin:"do_lu_ma_me_gi_ve_sa".split("_"),months:"gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),weekStart:1,monthsShort:"gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},relativeTime:{future:"tra %s",past:"%s fa",s:"qualche secondo",m:"un minuto",mm:"%d minuti",h:"un'ora",hh:"%d ore",d:"un giorno",dd:"%d giorni",M:"un mese",MM:"%d mesi",y:"un anno",yy:"%d anni"},ordinal:function(e){return e+"º"}};return n.default.locale(a,null,!0),a}(i()));var un,cn={exports:{}};un||(un=1,cn.exports=function(e){function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=t(e),a={name:"ja",weekdays:"日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),weekdaysShort:"日_月_火_水_木_金_土".split("_"),weekdaysMin:"日_月_火_水_木_金_土".split("_"),months:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),ordinal:function(e){return e+"日"},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日 HH:mm",LLLL:"YYYY年M月D日 dddd HH:mm",l:"YYYY/MM/DD",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日(ddd) HH:mm"},meridiem:function(e){return e<12?"午前":"午後"},relativeTime:{future:"%s後",past:"%s前",s:"数秒",m:"1分",mm:"%d分",h:"1時間",hh:"%d時間",d:"1日",dd:"%d日",M:"1ヶ月",MM:"%dヶ月",y:"1年",yy:"%d年"}};return n.default.locale(a,null,!0),a}(i()));var mn,hn={exports:{}};mn||(mn=1,hn.exports=function(e){function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=t(e),a={name:"nb",weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"sø._ma._ti._on._to._fr._lø.".split("_"),weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),ordinal:function(e){return e+"."},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] HH:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"},relativeTime:{future:"om %s",past:"%s siden",s:"noen sekunder",m:"ett minutt",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dager",M:"en måned",MM:"%d måneder",y:"ett år",yy:"%d år"}};return n.default.locale(a,null,!0),a}(i()));var pn,vn={exports:{}};pn||(pn=1,vn.exports=function(e){function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=t(e),a={name:"ne",weekdays:"आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार".split("_"),weekdaysShort:"आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.".split("_"),weekdaysMin:"आ._सो._मं._बु._बि._शु._श.".split("_"),months:"जनवरी_फेब्रुवरी_मार्च_अप्रिल_मे_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर".split("_"),monthsShort:"जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.".split("_"),relativeTime:{future:"%s पछि",past:"%s अघि",s:"सेकेन्ड",m:"एक मिनेट",mm:"%d मिनेट",h:"घन्टा",hh:"%d घन्टा",d:"एक दिन",dd:"%d दिन",M:"एक महिना",MM:"%d महिना",y:"एक वर्ष",yy:"%d वर्ष"},ordinal:function(e){return(""+e).replace(/\d/g,function(e){return"०१२३४५६७८९"[e]})},formats:{LT:"Aको h:mm बजे",LTS:"Aको h:mm:ss बजे",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, Aको h:mm बजे",LLLL:"dddd, D MMMM YYYY, Aको h:mm बजे"}};return n.default.locale(a,null,!0),a}(i()));var _n,fn={exports:{}};_n||(_n=1,fn.exports=function(e){function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=t(e),a={name:"nl-be",weekdays:"zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),months:"januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),monthsShort:"jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),weekStart:1,weekdaysShort:"zo._ma._di._wo._do._vr._za.".split("_"),weekdaysMin:"zo_ma_di_wo_do_vr_za".split("_"),ordinal:function(e){return e},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},relativeTime:{future:"over %s",past:"%s geleden",s:"een paar seconden",m:"één minuut",mm:"%d minuten",h:"één uur",hh:"%d uur",d:"één dag",dd:"%d dagen",M:"één maand",MM:"%d maanden",y:"één jaar",yy:"%d jaar"}};return n.default.locale(a,null,!0),a}(i()));var gn,yn={exports:{}};gn||(gn=1,yn.exports=function(e){function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=t(e),a={name:"nl",weekdays:"zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),weekdaysShort:"zo._ma._di._wo._do._vr._za.".split("_"),weekdaysMin:"zo_ma_di_wo_do_vr_za".split("_"),months:"januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),monthsShort:"jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),ordinal:function(e){return"["+e+(1===e||8===e||e>=20?"ste":"de")+"]"},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD-MM-YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},relativeTime:{future:"over %s",past:"%s geleden",s:"een paar seconden",m:"een minuut",mm:"%d minuten",h:"een uur",hh:"%d uur",d:"een dag",dd:"%d dagen",M:"een maand",MM:"%d maanden",y:"een jaar",yy:"%d jaar"}};return n.default.locale(a,null,!0),a}(i()));var Mn,kn={exports:{}};Mn||(Mn=1,kn.exports=function(e){function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=t(e);function a(e){return e%10<5&&e%10>1&&~~(e/10)%10!=1}function i(e,t,n){var i=e+" ";switch(n){case"m":return t?"minuta":"minutę";case"mm":return i+(a(e)?"minuty":"minut");case"h":return t?"godzina":"godzinę";case"hh":return i+(a(e)?"godziny":"godzin");case"MM":return i+(a(e)?"miesiące":"miesięcy");case"yy":return i+(a(e)?"lata":"lat")}}var s="stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_"),o="styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),r=/D MMMM/,d=function(e,t){return r.test(t)?s[e.month()]:o[e.month()]};d.s=o,d.f=s;var l={name:"pl",weekdays:"niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),weekdaysShort:"ndz_pon_wt_śr_czw_pt_sob".split("_"),weekdaysMin:"Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),months:d,monthsShort:"sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),ordinal:function(e){return e+"."},weekStart:1,yearStart:4,relativeTime:{future:"za %s",past:"%s temu",s:"kilka sekund",m:i,mm:i,h:i,hh:i,d:"1 dzień",dd:"%d dni",M:"miesiąc",MM:i,y:"rok",yy:i},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"}};return n.default.locale(l,null,!0),l}(i()));var wn,Dn={exports:{}};wn||(wn=1,Dn.exports=function(e){function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=t(e),a={name:"pt-br",weekdays:"domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado".split("_"),weekdaysShort:"dom_seg_ter_qua_qui_sex_sáb".split("_"),weekdaysMin:"Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"),months:"janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),monthsShort:"jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),ordinal:function(e){return e+"º"},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY [às] HH:mm",LLLL:"dddd, D [de] MMMM [de] YYYY [às] HH:mm"},relativeTime:{future:"em %s",past:"há %s",s:"poucos segundos",m:"um minuto",mm:"%d minutos",h:"uma hora",hh:"%d horas",d:"um dia",dd:"%d dias",M:"um mês",MM:"%d meses",y:"um ano",yy:"%d anos"}};return n.default.locale(a,null,!0),a}(i()));var bn,xn={exports:{}};bn||(bn=1,xn.exports=function(e){function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=t(e),a={name:"pt",weekdays:"domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado".split("_"),weekdaysShort:"dom_seg_ter_qua_qui_sex_sab".split("_"),weekdaysMin:"Do_2ª_3ª_4ª_5ª_6ª_Sa".split("_"),months:"janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),monthsShort:"jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),ordinal:function(e){return e+"º"},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY [às] HH:mm",LLLL:"dddd, D [de] MMMM [de] YYYY [às] HH:mm"},relativeTime:{future:"em %s",past:"há %s",s:"alguns segundos",m:"um minuto",mm:"%d minutos",h:"uma hora",hh:"%d horas",d:"um dia",dd:"%d dias",M:"um mês",MM:"%d meses",y:"um ano",yy:"%d anos"}};return n.default.locale(a,null,!0),a}(i()));var Ln,Tn={exports:{}};Ln||(Ln=1,Tn.exports=function(e){function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=t(e),a="января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),i="январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),s="янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),o="янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_"),r=/D[oD]?(\[[^[\]]*\]|\s)+MMMM?/;function d(e,t,n){var a,i;return"m"===n?t?"минута":"минуту":e+" "+(a=+e,i={mm:t?"минута_минуты_минут":"минуту_минуты_минут",hh:"час_часа_часов",dd:"день_дня_дней",MM:"месяц_месяца_месяцев",yy:"год_года_лет"}[n].split("_"),a%10==1&&a%100!=11?i[0]:a%10>=2&&a%10<=4&&(a%100<10||a%100>=20)?i[1]:i[2])}var l=function(e,t){return r.test(t)?a[e.month()]:i[e.month()]};l.s=i,l.f=a;var u=function(e,t){return r.test(t)?s[e.month()]:o[e.month()]};u.s=o,u.f=s;var c={name:"ru",weekdays:"воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),weekdaysShort:"вск_пнд_втр_срд_чтв_птн_сбт".split("_"),weekdaysMin:"вс_пн_вт_ср_чт_пт_сб".split("_"),months:l,monthsShort:u,weekStart:1,yearStart:4,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY г.",LLL:"D MMMM YYYY г., H:mm",LLLL:"dddd, D MMMM YYYY г., H:mm"},relativeTime:{future:"через %s",past:"%s назад",s:"несколько секунд",m:d,mm:d,h:"час",hh:d,d:"день",dd:d,M:"месяц",MM:d,y:"год",yy:d},ordinal:function(e){return e},meridiem:function(e){return e<4?"ночи":e<12?"утра":e<17?"дня":"вечера"}};return n.default.locale(c,null,!0),c}(i()));var Yn,En={exports:{}};Yn||(Yn=1,En.exports=function(e){function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=t(e);function a(e){return e%100==2}function i(e){return e%100==3||e%100==4}function s(e,t,n,s){var o=e+" ";switch(n){case"s":return t||s?"nekaj sekund":"nekaj sekundami";case"m":return t?"ena minuta":"eno minuto";case"mm":return a(e)?o+(t||s?"minuti":"minutama"):i(e)?o+(t||s?"minute":"minutami"):o+(t||s?"minut":"minutami");case"h":return t?"ena ura":"eno uro";case"hh":return a(e)?o+(t||s?"uri":"urama"):i(e)?o+(t||s?"ure":"urami"):o+(t||s?"ur":"urami");case"d":return t||s?"en dan":"enim dnem";case"dd":return a(e)?o+(t||s?"dneva":"dnevoma"):o+(t||s?"dni":"dnevi");case"M":return t||s?"en mesec":"enim mesecem";case"MM":return a(e)?o+(t||s?"meseca":"mesecema"):i(e)?o+(t||s?"mesece":"meseci"):o+(t||s?"mesecev":"meseci");case"y":return t||s?"eno leto":"enim letom";case"yy":return a(e)?o+(t||s?"leti":"letoma"):i(e)?o+(t||s?"leta":"leti"):o+(t||s?"let":"leti")}}var o={name:"sl",weekdays:"nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"),months:"januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),weekStart:1,weekdaysShort:"ned._pon._tor._sre._čet._pet._sob.".split("_"),monthsShort:"jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),weekdaysMin:"ne_po_to_sr_če_pe_so".split("_"),ordinal:function(e){return e+"."},formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm",l:"D. M. YYYY"},relativeTime:{future:"čez %s",past:"pred %s",s:s,m:s,mm:s,h:s,hh:s,d:s,dd:s,M:s,MM:s,y:s,yy:s}};return n.default.locale(o,null,!0),o}(i()));var Sn,$n={exports:{}};Sn||(Sn=1,$n.exports=function(e){function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=t(e),a={name:"sv",weekdays:"söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"),weekdaysShort:"sön_mån_tis_ons_tor_fre_lör".split("_"),weekdaysMin:"sö_må_ti_on_to_fr_lö".split("_"),months:"januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),monthsShort:"jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),weekStart:1,yearStart:4,ordinal:function(e){var t=e%10;return"["+e+(1===t||2===t?"a":"e")+"]"},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [kl.] HH:mm",LLLL:"dddd D MMMM YYYY [kl.] HH:mm",lll:"D MMM YYYY HH:mm",llll:"ddd D MMM YYYY HH:mm"},relativeTime:{future:"om %s",past:"för %s sedan",s:"några sekunder",m:"en minut",mm:"%d minuter",h:"en timme",hh:"%d timmar",d:"en dag",dd:"%d dagar",M:"en månad",MM:"%d månader",y:"ett år",yy:"%d år"}};return n.default.locale(a,null,!0),a}(i()));var Hn,An={exports:{}};Hn||(Hn=1,An.exports=function(e){function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=t(e);function a(e){return e>1&&e<5&&1!=~~(e/10)}function i(e,t,n,i){var s=e+" ";switch(n){case"s":return t||i?"pár sekúnd":"pár sekundami";case"m":return t?"minúta":i?"minútu":"minútou";case"mm":return t||i?s+(a(e)?"minúty":"minút"):s+"minútami";case"h":return t?"hodina":i?"hodinu":"hodinou";case"hh":return t||i?s+(a(e)?"hodiny":"hodín"):s+"hodinami";case"d":return t||i?"deň":"dňom";case"dd":return t||i?s+(a(e)?"dni":"dní"):s+"dňami";case"M":return t||i?"mesiac":"mesiacom";case"MM":return t||i?s+(a(e)?"mesiace":"mesiacov"):s+"mesiacmi";case"y":return t||i?"rok":"rokom";case"yy":return t||i?s+(a(e)?"roky":"rokov"):s+"rokmi"}}var s={name:"sk",weekdays:"nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),weekdaysShort:"ne_po_ut_st_št_pi_so".split("_"),weekdaysMin:"ne_po_ut_st_št_pi_so".split("_"),months:"január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_"),monthsShort:"jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_"),weekStart:1,yearStart:4,ordinal:function(e){return e+"."},formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd D. MMMM YYYY H:mm",l:"D. M. YYYY"},relativeTime:{future:"za %s",past:"pred %s",s:i,m:i,mm:i,h:i,hh:i,d:i,dd:i,M:i,MM:i,y:i,yy:i}};return n.default.locale(s,null,!0),s}(i()));var Cn,zn={exports:{}};Cn||(Cn=1,zn.exports=function(e){function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=t(e),a="січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_"),i="січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_"),s=/D[oD]?(\[[^[\]]*\]|\s)+MMMM?/;function o(e,t,n){var a,i;return"m"===n?t?"хвилина":"хвилину":"h"===n?t?"година":"годину":e+" "+(a=+e,i={ss:t?"секунда_секунди_секунд":"секунду_секунди_секунд",mm:t?"хвилина_хвилини_хвилин":"хвилину_хвилини_хвилин",hh:t?"година_години_годин":"годину_години_годин",dd:"день_дні_днів",MM:"місяць_місяці_місяців",yy:"рік_роки_років"}[n].split("_"),a%10==1&&a%100!=11?i[0]:a%10>=2&&a%10<=4&&(a%100<10||a%100>=20)?i[1]:i[2])}var r=function(e,t){return s.test(t)?a[e.month()]:i[e.month()]};r.s=i,r.f=a;var d={name:"uk",weekdays:"неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"),weekdaysShort:"ндл_пнд_втр_срд_чтв_птн_сбт".split("_"),weekdaysMin:"нд_пн_вт_ср_чт_пт_сб".split("_"),months:r,monthsShort:"січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),weekStart:1,relativeTime:{future:"за %s",past:"%s тому",s:"декілька секунд",m:o,mm:o,h:o,hh:o,d:"день",dd:o,M:"місяць",MM:o,y:"рік",yy:o},ordinal:function(e){return e},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY р.",LLL:"D MMMM YYYY р., HH:mm",LLLL:"dddd, D MMMM YYYY р., HH:mm"}};return n.default.locale(d,null,!0),d}(i()));var jn=Number.isNaN||function(e){return"number"==typeof e&&e!=e};function Nn(e,t){return e===t||!(!jn(e)||!jn(t))}function Fn(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(!Nn(e[n],t[n]))return!1;return!0}const On=(e,t,n,a)=>{a=a||{},n=null==n?{}:n;const i=new Event(t,{bubbles:void 0===a.bubbles||a.bubbles,cancelable:Boolean(a.cancelable),composed:void 0===a.composed||a.composed});return i.detail=n,e.dispatchEvent(i),i};var Pn={cardHeight:"100%",maxDaysToShow:7,maxEventCount:0,showLoader:!0,showLocation:!0,showMonth:!1,fullTextTime:!0,showCurrentEventLine:!1,showDate:!1,dateFormat:"LL",startDaysAhead:0,showLastCalendarWeek:!1,sortBy:"start",allDayBottom:!1,disableEventLink:!1,disableLocationLink:!1,disableCalLocationLink:!1,disableCalMonthLink:!1,linkTarget:"_blank",showDeclined:!0,showPrivate:!0,showHiddenText:!0,showCalendarName:!1,nameColor:"var(--primary-text-color)",descColor:"var(--primary-text-color)",descSize:80,showNoEventsForToday:!1,showNoEventDays:!1,hideCardIfNoEvents:!1,showHours:!0,showEndTime:!0,showRelativeTime:!0,eventTitleColor:"var(--primary-text-color)",locationIconColor:"rgb(--primary-text-color)",locationTextSize:90,hideFinishedEvents:!1,dimFinishedEvents:!0,finishedEventOpacity:.6,finishedEventFilter:"grayscale(80%)",eventBarColor:"var(--primary-color)",eventCalNameColor:"var(--primary-text-color)",eventCalNameSize:90,showProgressBar:!0,showFullDayProgress:!1,progressBarColor:"var(--primary-color)",progressBarBackgroundColor:"#555",enableModeChange:!1,defaultMode:"Event",calGridColor:"rgba(86, 86, 86, .35)",calDayColor:"var(--primary-text-color)",calWeekDayColor:"var(--primary-text-color)",calDateColor:"var(--primary-text-color)",defaultCalColor:"var(--primary-text-color)",calEventBackgroundColor:"rgba(86, 100, 86, .35)",calActiveEventBackgroundColor:"rgba(86, 128, 86, .35)",calEventTime:!1,firstDayOfWeek:1,refreshInterval:60,showEventIcon:!1,eventDateFormat:"ddd D MMM",hideDuplicates:!1,showMultiDay:!1,showMultiDayEventParts:!1,showWeekNumber:!1,showDescription:!1,showEventDate:!0,showDatePerEvent:!1,showAllDayHours:!0,showAllDayEvents:!0,offsetHeaderDate:!1,titleLength:0,descLength:0,plannerDaysToShow:7,plannerRollingWeek:!1,tap_action:{action:"more-info"},hold_action:{action:"none"},double_tap_action:{action:"none"}};var Vn={version:"Versió",show_warning:"Mostrar alerta",error:"Error",description:"Una targeta de calendari avançada per a Home Assistant amb Lovelace.",fullDayEventText:"Tot el dia",untilText:"Fins",noEventText:"Sense esdeveniments",noEventsForNextDaysText:"Sense esdeveniments en els propers dies",hiddenEventText:"esdeveniments ocults"},Wn={common:{previous:"Anterior",next:"Següent",week:"Setmana"}},Bn={invalid_configuration:"Configuració incorrecte",update_card:"No es pot carregar el calendari des del component de Home Assistant",no_entities:"No has especificat cap entitat"},In={name:"Requerit",secondary:"Opcions requerides per al funcionament d'aquesta targeta"},Rn={name:"Opcions Principals",secondary:"Opcions aplicades globalment",fields:{name:"Nom",showColors:"Mostrar Colors",maxDaysToShow:"Màxim de dies a mostrar",showLocation:"Mostrar icona de localització",showLoader:"Mostrar animació de càrrega",showDate:"Mostrar data a la targeta",showDeclined:"Mostrar esdeveniments declinats",sortBy:"Ordena per",allDayBottom:"Mostrar esdeveniments de tot el dia al final",hideFinishedEvents:"Ocultar esdeveniments finalitzats",dateFormat:"Format de data",defaultMode:"Modalitat per defecte",linkTarget:"Enllaçar destí",refreshInterval:"Interval de refresc",showRelativeTime:"Mostrar tems relatiu",firstDayOfWeek:"Primer dia de la setmana",cardHeight:"Alçada targeta",hideDuplicates:"Oculta duplicats",showMultiDay:"Divideix esdeveniments multi-dia",showMultiDayEventParts:"Mostrar parts d'esdeveniments multi-dia",eventTitle:"Estableix títol d'esdeveniment en blanc",compactMode:"Habilitar mode compacte",titleLength:"Màxima longitut del títol (0 per il·limitat)",descLength:"Màxima longitut de la descripció (0 per il·limitat)",showAllDayEvents:"Mostrat esdeveniments de tot el dia",offsetHeaderDate:"Compensació de la data de la capçalera",startDaysAhead:"Esdeveniments que comencen `x` dies a partir d'ara"}},Un={name:"Mode Esdeveniment",secondary:"Opcions específiques del Mode Esdeveniment",fields:{showCurrentEventLine:"Mostrar línia abans de l'esdeveniment?",showProgressBar:"Mostrar barra de progrés?",showMonth:"Mostrar mes?",showDescription:"Mostrar descripció?",disableEventLink:"Desactivar enllaços al títol de l'esdeveniment?",disableLocationLink:"Desactivar enllaços a la localització?",showNoEventsForToday:"Mostrar No hi ha esdeveniments avui?",showFullDayProgress:"Mostrar progres dels esdeveniments de tot el dia?",untilText:"Text fins:",noEventText:"Text No hi ha esdeveniments avui:",noEventsForNextDaysText:"Text No hi ha esdeveniments els propers dies:",fullDayEventText:"Text Esdeveniment de tot el dia:",showEventIcon:"Mostrar icona d'esdeveniment",showHiddenText:"Mostrar text dels esdeveniments ocults?",hiddenEventText:"Text per als esdeveniments ocults:",showCalendarName:"Mostrar nom del calendari",showWeekNumber:"Mostrar número de la setmana",showEventDate:"Mostrar data als dels esdeveniments",showDatePerEvent:"Mostrar data al costat de cada esdeveniment",showTimeRemaining:"Mostrar temps restant",showAllDayHours:"Mostrar text d'esdeveniment de tot el dia",hoursOnSameLine:"Mostrar hores a la línia de l'esdeveniment",eventDateFormat:"Format de data de l'esdeveniment"}},Jn={name:"Mode Calendari",secondary:"Opcions específiques del Mode Calendari",fields:{showLastCalendarWeek:"Mostrar última setmana del calendari",disableCalEventLink:"Desactivar enllaços als esdeveniments del calendari",disableCalLocationLink:"Desactivar enllaços a la localització en el calendari",calShowDescription:"Mostrar descripció",disableCalLink:"Desactivar enllaç al calendari"}},qn={name:"Aparença",secondary:"Pesonalitzar els colors etc.",main:{name:"Principal",secondary:"Ajust del color global"},fields:{dimFinishedEvents:"Atenuar esdeveniments finalitzats?"}},Zn={common:Vn,ui:Wn,errors:Bn,required:In,main:Rn,event:Un,calendar:Jn,appearance:qn},Kn=Object.freeze({__proto__:null,appearance:qn,calendar:Jn,common:Vn,default:Zn,errors:Bn,event:Un,main:Rn,required:In,ui:Wn}),Gn={version:"Verze",show_warning:"Zobrazit varování",error:"Chyba",description:"Karta pokročilého kalendáře pro Home Assistant s Lovelace.",fullDayEventText:"Celý den",untilText:"Do",noEventText:"Žádné události",noEventsForNextDaysText:"Žádné události v následujících dnech",hiddenEventText:"události jsou skyty"},Qn={common:{previous:"Předchozí",next:"Následující",week:"Týden"}},Xn={invalid_configuration:"Neplatná konfigurace",update_card:"Nelze načíst kalendář Home Assistant komponentou",no_entities:"Nejsou specifikovány žádné entity"},ea={name:"Vyžadováno",secondary:"Vyžadovaný parametr pro správné fungování"},ta={name:"Hlavní nastavení",secondary:"Globálně aplikovaná nastavení",fields:{name:"Název",showColors:"Zobrazit barvy",maxDaysToShow:"Max. počet dní k zobrazení",showLocation:"Zobrazit ikonu umístění",showLoader:"Zobrazit animaci načítání",showDate:"Zobrazit datum na kartě",showDeclined:"Zobrazit zrušené události",sortByStartTime:"Seřadit podle počátečních časů",hideFinishedEvents:"Skrýt dokončené události",dateFormat:"Formát data",defaultMode:"Výchozí režim",linkTarget:"Cíl odkazu",refreshInterval:"Interval obnovení",showRelativeTime:"Zobrazit relativní čas",firstDayOfWeek:"První den v týdnu",cardHeight:"Výška karty",hideDuplicates:"Skrýt duplicity",showMultiDay:"Spojit vícedenní události",showMultiDayEventParts:"Zobrazit části vícedenních událostí"}},na={name:"Režim událostí",secondary:"Nastavení pro režim událostí",fields:{showCurrentEventLine:"Zobrazit řádek před událostí",showProgressBar:"Zobrazit průběh",showMonth:"Zobrazit měsíc",showDescription:"Zobrazit popisek",disableEventLink:"Zakázat odkazy v titulku události",disableLocationLink:"Zakázat odkazy na lokace",showNoEventsForToday:"Zobrazit text pro žádné události",showFullDayProgress:"Zobrazit průběh u celodenních událostí",untilText:"do textu:",noEventText:"Text pro žádné události:",noEventsForNextDaysText:"Text pro žádné události následující dny:",fullDayEventText:"Text celodenní události:",showEventIcon:"Zobrazit ikonu události",showHiddenText:"Zobrazit text skryté události",hiddenEventText:"Text pro skryté události:",showCalendarName:"Zobrazit název kalendáře",showWeekNumber:"Zobrazit číslo týdne",showEventDate:"Zobrazit datum události",showDatePerEvent:"Zobrazit datum u každé události",eventDateFormat:"Formát data události"}},aa={name:"Režim kalendáře",secondary:"Nastavení pro režim kalendáře",fields:{showLastCalendarWeek:"Zobrazit poslední týden kalendáře",disableCalEventLink:"Zakázat odkazy na události",disableCalLocationLink:"Zakázat odkazy na lokace",calShowDescription:"Zobrazit popisek",disableCalLink:"Zakázat odkaz na kalendář"}},ia={name:"Nastavení zobrazení",secondary:"Přizpůsobení barev atd.",main:{name:"Hlavní",secondary:"Globální nastavení barev"},fields:{locationLinkColor:"Barva odkazu na lokaci:",dimFinishedEvents:"Ztlumit jas dokončené události"}},sa={common:Gn,ui:Qn,errors:Xn,required:ea,main:ta,event:na,calendar:aa,appearance:ia},oa=Object.freeze({__proto__:null,appearance:ia,calendar:aa,common:Gn,default:sa,errors:Xn,event:na,main:ta,required:ea,ui:Qn}),ra={version:"Version",show_warning:"Vis Advarsel",error:"Fejl",description:"Et avanceret kalender kort til Home Assistant.",fullDayEventText:"Hele dagen",untilText:"Indtil",noEventText:"Ingen aftaler",noEventsForNextDaysText:"Ingen aftaler de næste få dage",hiddenEventText:"Aftaler er skjulte"},da={common:{previous:"Forrige",next:"Næste",week:"Uge"}},la={invalid_configuration:"Konfiguration er ikke korrekt",update_card:"Kalender kan ikke blive indlæste fra Home Assistant atomic-calendar-revive",no_entities:"Der er ikke valgt nogen entiteter"},ua={name:"Påkrævet",secondary:"Valg er påkrævet for at atomic-calendar-revive skal virke"},ca={name:"Hoved muligheder",secondary:"Muligheder der virker globalt",fields:{name:"Navn",showColors:"Vis Farver",maxDaysToShow:"Antal max dage at vise",showLocation:"Vis placerings ikon",showLoader:"Vis animeret indlæsning",showDate:"Vis dato på kort",showDeclined:"Vis afviste aftaler",sortBy:"Sorter på",allDayBottom:"Vis heldagsbegivenheder nederst",hideFinishedEvents:"Skjul overståede aftaler",dateFormat:"Dato format",defaultMode:"Default mode",linkTarget:"Link mål",refreshInterval:"Opdaterings interval",showRelativeTime:"Vis den relative tid",firstDayOfWeek:"Første dag i ugen",cardHeight:"Højde på kort",hideDuplicates:"Skjul dubletter",showMultiDay:"Opdelt flerdages begivenheder",showMultiDayEventParts:"Vis flere dages begivenhedsdele",eventTitle:"Indstil tom begivenhedstitel",compactMode:"Aktiver kompakt tilstand",titleLength:"Max titellængde (0 for ubegrænset)",descLength:"Max beskrivelseslængde (0 for ubegrænset)",showAllDayEvents:"Vis heldagsbegivenheder",offsetHeaderDate:"Forskudt overskriftsdato",startDaysAhead:"Begivenheder starter `x` dage fra i dag"}},ma={name:"Tilstand for aftaler",secondary:"Tilstand for specifikke muligheder",fields:{showCurrentEventLine:"Vis en linie før aftale?",showProgressBar:"Vis status bar?",showMonth:"Vis måned?",showDescription:"Vis beskrivelse?",disableEventLink:"Fjern link i titel på aftale?",disableLocationLink:"Fjern link på placering?",showNoEventsForToday:"Vis Ingen aftaler i dag?",showFullDayProgress:"Vis fremskridt på hel dags aftaler?",untilText:"Indtil næste gang:",noEventText:"Hvis ingen aftale, vis tekst:",noEventsForNextDaysText:"Tekst der vises, Ingen aftaler de næste dage:",fullDayEventText:"Hel dags tekst:",showEventIcon:"Vis aftale ikon",showHiddenText:"Vis skjulte aftaler tekst?",hiddenEventText:"Tekst til skjulte aftaler:",showCalendarName:"Vis kalendernavn",showWeekNumber:"Vis ugenumre",showEventDate:"Vis dato for arrangementer",showDatePerEvent:"Vis dato ud for hver begivenhed",showTimeRemaining:"Vis resterende tid",showAllDayHours:"Vis Heldagsbegivenhedstekst",hoursOnSameLine:"Vis timer på begivenhedslinjen",eventDateFormat:"Begivenhedsdatoformat"}},ha={name:"Tilstand for kalender",secondary:"Specifikke kalender tilstande muligheder",fields:{showLastCalendarWeek:"Vis sidste kalender uge",disableCalEventLink:"Fjern kalender aftale link",disableCalLocationLink:"Fjern kalender lokation link",calShowDescription:"Vis beskrivelse",disableCalLink:"Fjern kalender link"}},pa={name:"Appearance",secondary:"Tilpas farver etc.",main:{name:"Main",secondary:"Global indstillinger for farver"},fields:{dimFinishedEvents:"Nedtone overståede aftaler?"}},va={common:ra,ui:da,errors:la,required:ua,main:ca,event:ma,calendar:ha,appearance:pa},_a=Object.freeze({__proto__:null,appearance:pa,calendar:ha,common:ra,default:va,errors:la,event:ma,main:ca,required:ua,ui:da}),fa={version:"Version",show_warning:"Warnung anzeigen",error:"Fehler",description:"Erweiterte Kalenderkarte für Home Assistant Lovelace",fullDayEventText:"Ganztägig",untilText:"Bis",noEventText:"Keine Einträge",noEventsForNextDaysText:"Keine Einträge in den nächsten Tagen",hiddenEventText:"Einträge sind ausgeblendet."},ga={common:{previous:"Zurück",next:"Vor",week:"Woche"}},ya={invalid_configuration:"Ungültige Konfiguration",update_card:"Der Kalender kann von der Home Assistant-Komponente nicht geladen werden!",no_entities:"Sie haben keine Entitäten festgelegt!"},Ma={name:"Benötigt",secondary:"Folgende Optionen sind notwendig, damit die Lovelace Karte angezeigt werden kann:"},ka={name:"Haupteinstellungen",secondary:"Global geltende Optionen",fields:{name:"Name",showColors:"Farben anzeigen",maxDaysToShow:"Maximal angezeigte Tage",showLocation:"Ortssymbol anzeigen",showLoader:"Ladeanimation anzeigen",showDate:"Datum mitanzeigen",showDeclined:"Abgelehnte Einträge anzeigen",sortBy:"Sortiere nach",allDayBottom:"Ganztägige Ereignisse unten anzeigen",hideFinishedEvents:"Beendete Einträge ausblenden",dateFormat:"Datumsformat",defaultMode:"Standardmodus",linkTarget:"Verknüpfungsziel",refreshInterval:"Aktualisierungsintervall",showRelativeTime:"Relative Zeit anzeigen",firstDayOfWeek:"Erster Wochentag",cardHeight:"Kartenhöhe",hideDuplicates:"Duplikate ausblenden",showMultiDay:"Mehrtägige Ereignisse aufteilen",showMultiDayEventParts:"Mehrtägige Ereignisteile anzeigen",eventTitle:"Leeren Ereignistitel setzen",compactMode:"Kompaktmodus einschalten",titleLength:"Maximale Titellänge (0 für unbegrenzt)",descLength:"Maximale Länge der Beschreibung (0 für unbegrenzt)",showAllDayEvents:"Alle Tagesereignisse anzeigen",offsetHeaderDate:"Kopfdatum verschieben",startDaysAhead:"Ereignisse, die in `x` Tagen von heute an beginnen"}},wa={name:"Ereignismodus",secondary:"Ereignismodus-spezifische Optionen",fields:{showCurrentEventLine:"Linie vor einem Eintrag anzeigen?",showProgressBar:"Fortschrittsbalken anzeigen?",showMonth:"Monat anzeigen?",showDescription:"Beschreibung anzeigen?",disableEventLink:"Links im Ereignistitel deaktivieren?",disableLocationLink:"Links zum Ort deaktivieren?",showNoEventsForToday:"'Keine Einträge heute' anzeigen?",showFullDayProgress:"Ganztägigen Fortschritt der Einträge anzeigen?",untilText:"Text für 'bis':",noEventText:"Text für 'Keine Einträge heute':",noEventsForNextDaysText:"Text für 'Keine Einträge in den nächsten Tagen':",fullDayEventText:"Text für 'Ganztägiger Eintrag':",showEventIcon:"Ereignis-Symbol anzeigen?",showHiddenText:"Versteckten Ereignistext anzeigen?",hiddenEventText:"Text für versteckte Ereignisse",showCalendarName:"Kalendername anzeigen?",showWeekNumber:"Kalenderwochen anzeigen?",showEventDate:"Datum für Ereignisse anzeigen?",showDatePerEvent:"Datum neben dem jeweiligen Ereignis anzeigen?",showTimeRemaining:"Verbleibende Zeit anzeigen?",showAllDayHours:"Ganztägigen Ereignistext anzeigen?",hoursOnSameLine:"Stunden auf der Ereigniszeile anzeigen?",eventDateFormat:"Ereignisdatumsformat"}},Da={name:"Kalendermodus",secondary:"Kalendermodus: Spezifische Optionen",fields:{showLastCalendarWeek:"Letzte Kalenderwoche anzeigen?",disableCalEventLink:"Links für Kalendereinträge deaktivieren?",disableCalLocationLink:"Links für Ortsangaben in Kalendereinträgen deaktivieren?",calShowDescription:"Beschreibung anzeigen?",disableCalLink:"Kalenderlinks deaktivieren?"}},ba={name:"Erscheinungsbild",secondary:"Farbanpassungen usw.",main:{name:"Globale Einstellungen",secondary:"Globale Farbeinstellungen"},fields:{dimFinishedEvents:"Erledigte Einträge blasser anzeigen?"}},xa={common:fa,ui:ga,errors:ya,required:Ma,main:ka,event:wa,calendar:Da,appearance:ba},La=Object.freeze({__proto__:null,appearance:ba,calendar:Da,common:fa,default:xa,errors:ya,event:wa,main:ka,required:Ma,ui:ga}),Ta={version:"Version",show_warning:"Show Warning",error:"Error",description:"An advanced calendar card for Home Assistant with Lovelace.",fullDayEventText:"All Day",untilText:"Until",noEventText:"No events",noEventsForNextDaysText:"No events in the next few days",hiddenEventText:"events are hidden"},Ya={common:{previous:"Previous",next:"Next",week:"Week"}},Ea={invalid_configuration:"Invalid Configuration",update_card:"The calendar can't be loaded from Home Assistant component",no_entities:"You have not specified any entities"},Sa={name:"Required",secondary:"Required options for this card to function"},$a={name:"Main Options",secondary:"Options that apply globally",fields:{name:"Name",showColors:"Show Colors",maxDaysToShow:"Max days to show",showLocation:"Show location icon",showLoader:"Show loader animation",showDate:"Show date on card",showDeclined:"Show declined events",sortBy:"Sort by",allDayBottom:"Show all day events at the bottom",hideFinishedEvents:"Hide finished events",dateFormat:"Date format",defaultMode:"Default mode",linkTarget:"Link target",refreshInterval:"Refresh Interval",showRelativeTime:"Show Relative Time",firstDayOfWeek:"First Day of Week",cardHeight:"Card Height",hideDuplicates:"Hide duplicates",showMultiDay:"Split Multi-Day Events",showMultiDayEventParts:"Show Multi-Day Event Parts",eventTitle:"Set blank event title",compactMode:"Enable compact mode",titleLength:"Max title length (0 for unlimited)",descLength:"Max description length (0 for unlimited)",showAllDayEvents:"Show all day events",offsetHeaderDate:"Offset header date",startDaysAhead:"Events starting `x` days from today"}},Ha={name:"Event Mode",secondary:"Event Mode specific options",fields:{showCurrentEventLine:"Show line before event?",showProgressBar:"Show progress bar?",showMonth:"Show month?",showDescription:"Show Description?",disableEventLink:"Disable links in event title?",disableLocationLink:"Disable links to location?",showNoEventsForToday:"Show No Events Today?",showFullDayProgress:"Show full day event progress?",untilText:"until text:",noEventText:"No events today text:",noEventsForNextDaysText:"No events in the next few days text:",fullDayEventText:"Full day event text:",showEventIcon:"Show Event Icon",showHiddenText:"Show hidden event text?",hiddenEventText:"Text for hidden events:",showCalendarName:"Show calendar name",showWeekNumber:"Show week numbers",showEventDate:"Show date for events",showDatePerEvent:"Show date next to each event",showTimeRemaining:"Show time remaining",showAllDayHours:"Show All Day event text",hoursOnSameLine:"Show hours on the event line",eventDateFormat:"Event date format"}},Aa={name:"Calendar Mode",secondary:"Calendar Mode specific options",fields:{showLastCalendarWeek:"Show last calendar week",disableCalEventLink:"Disable calendar event link",disableCalLocationLink:"Disable calendar location link",calShowDescription:"Show Description",disableCalLink:"Disable calendar link"}},Ca={name:"Planner Mode",secondary:"Planner Mode specific options",fields:{plannerDaysToShow:"Days to Show",plannerRollingWeek:"Rolling Week (Start Today)"}},za={name:"Appearance",secondary:"Customize the colors etc.",main:{name:"Main",secondary:"Global Color Settings"},fields:{dimFinishedEvents:"Dim finished events?"}},ja={common:Ta,ui:Ya,errors:Ea,required:Sa,main:$a,event:Ha,calendar:Aa,planner:Ca,appearance:za},Na=Object.freeze({__proto__:null,appearance:za,calendar:Aa,common:Ta,default:ja,errors:Ea,event:Ha,main:$a,planner:Ca,required:Sa,ui:Ya}),Fa={version:"Versión",show_warning:"Mostrar Advertencia",error:"Error",description:"Una tarjeta de calendario avanzada para Home Assistant con Lovelace.",fullDayEventText:"Todo el Día",untilText:"Hasta",noEventText:"Sin eventos",noEventsForNextDaysText:"Sin eventos en los próximos días",hiddenEventText:"eventos están ocultos"},Oa={common:{previous:"Anterior",next:"Siguiente",week:"Semana"}},Pa={invalid_configuration:"Configuración Inválida",update_card:"No se puede cargar el calendario desde el componente de Home Assistant",no_entities:"No ha especificado ninguna entidad"},Va={name:"Requerido",secondary:"Opciones requeridas para que esta tarjeta funcione"},Wa={name:"Opciones Principales",secondary:"Opciones que se aplican globalmente",fields:{name:"Nombre",showColors:"Mostrar Colores",maxDaysToShow:"Máximo de días a mostrar",showLocation:"Mostrar icono de ubicación",showLoader:"Mostrar animación de carga",showDate:"Mostrar fecha en la tarjeta",showDeclined:"Mostrar eventos rechazados",sortBy:"Ordenar por",allDayBottom:"Mostrar eventos de todo el día al final",hideFinishedEvents:"Ocultar eventos finalizados",dateFormat:"Formato de fecha",defaultMode:"Modo predeterminado",linkTarget:"Objetivo del enlace",refreshInterval:"Intervalo de actualización",showRelativeTime:"Mostrar Tiempo Relativo",firstDayOfWeek:"Primer día de la semana",cardHeight:"Altura de la tarjeta",hideDuplicates:"Ocultar duplicados",showMultiDay:"Dividir Eventos de Varios Días",showMultiDayEventParts:"Mostrar Partes de Eventos de Varios Días",eventTitle:"Establecer título de evento en blanco",compactMode:"Activar modo compacto",titleLength:"Longitud máxima del título (0 para ilimitado)",descLength:"Longitud máxima de la descripción (0 para ilimitado)",showAllDayEvents:"Mostrar eventos de todo el día",offsetHeaderDate:"Fecha de encabezado de compensación",startDaysAhead:"Eventos que comienzan `x` días desde hoy"}},Ba={name:"Modo de Evento",secondary:"Opciones específicas del Modo de Evento",fields:{showCurrentEventLine:"¿Mostrar línea antes del evento?",showProgressBar:"¿Mostrar barra de progreso?",showMonth:"¿Mostrar mes?",showDescription:"¿Mostrar descripción?",disableEventLink:"¿Desactivar enlaces en el título del evento?",disableLocationLink:"¿Desactivar enlaces a la ubicación?",showNoEventsForToday:"¿Mostrar No Hay Eventos Hoy?",showFullDayProgress:"¿Mostrar progreso de eventos de todo el día?",untilText:"texto de hasta:",noEventText:"Texto de No hay eventos hoy:",noEventsForNextDaysText:"Texto de No hay eventos en los próximos días:",fullDayEventText:"Texto de evento de todo el día:",showEventIcon:"¿Mostrar ícono de evento?",showHiddenText:"¿Mostrar texto de evento oculto?",hiddenEventText:"Texto para eventos ocultos:",showCalendarName:"¿Mostrar nombre del calendario?",showWeekNumber:"¿Mostrar números de semana?",showEventDate:"¿Mostrar fecha para eventos?",showDatePerEvent:"¿Mostrar fecha junto a cada evento?",showTimeRemaining:"¿Mostrar tiempo restante?",showAllDayHours:"¿Mostrar texto de evento de todo el día?",hoursOnSameLine:"¿Mostrar horas en la línea de evento?",eventDateFormat:"Formato de fecha del evento"}},Ia={name:"Modo de Calendario",secondary:"Opciones específicas del Modo de Calendario",fields:{showLastCalendarWeek:"¿Mostrar la última semana del calendario?",disableCalEventLink:"¿Desactivar enlace de evento del calendario?",disableCalLocationLink:"¿Desactivar enlace de ubicación del calendario?",calShowDescription:"¿Mostrar descripción del calendario?",disableCalLink:"¿Desactivar enlace del calendario?"}},Ra={name:"Apariencia",secondary:"Personalizar los colores, etc.",main:{name:"Principal",secondary:"Configuración de color global"},fields:{dimFinishedEvents:"¿Atenuar eventos finalizados?"}},Ua={common:Fa,ui:Oa,errors:Pa,required:Va,main:Wa,event:Ba,calendar:Ia,appearance:Ra},Ja={version:"Versioon",show_warning:"Näita hoiatusi",error:"Viga",description:"Lisa mugandatav kalender kasutajaliidesesse.",fullDayEventText:"Terve päev",untilText:"Kuni",noEventText:"üritusi pole",noEventsForNextDaysText:"Paari järgmise päeva sündmusi pole",hiddenEventText:"Sündmused on varjatud"},qa={common:{previous:"Eelmine",next:"Järgmine",week:"Nädal"}},Za={invalid_configuration:"Sätetes on viga",update_card:"Kalendri laadimine nurjus"},Ka={name:"Vajalikud",secondary:"Selle kaardi toimiseks oluline teave"},Ga={name:"Üleüldised valikud",secondary:"Valikud kõigi kaardi olemite jaoks",fields:{name:"Pealkiri",showColors:"Kasuta värve",maxDaysToShow:"Mitu päeva kuvada",showLocation:"Kuva asukoha ikooni",showLoader:"Kuva laadimisel animatsiooni",showDate:"Kuva tänane kuupäev",showDeclined:"Kuva summutatud sündmused",sortBy:"Sorteerima",allDayBottom:"Kuva allosas kogu päeva sündmused",hideFinishedEvents:"Peida lõppenud sündmused",dateFormat:"Kuupäeva vorming",defaultMode:"Vaikerežiim",linkTarget:"Viite tüüp",refreshInterval:"Värskendussagedus",showRelativeTime:"Kuva suhtelist aega",firstDayOfWeek:"Nädala esimene päev",cardHeight:"kaardi kõrgus",hideDuplicates:"peida duplikaadid",showMultiDay:"Jagatud mitmepäevased üritused",showMultiDayEventParts:"Näita mitmepäevaste sündmuste osi",eventTitle:"Määra tühi sündmuse pealkiri",compactMode:"Kompaktrežiimi lubamine",titleLength:"Pealkirja maksimaalne pikkus (0 piiramatu jaoks)",descLength:"Kirjelduse maksimaalne pikkus (0 piiramatu puhul)",showAllDayEvents:"Näita kogu päeva sündmusi",offsetHeaderDate:"Nihke päise kuupäev",startDaysAhead:"Sündmused alates tänasest `x` päeva pärast"}},Qa={name:"Sündmuste vaade",secondary:"Sündmuste vaate valikud",fields:{showCurrentEventLine:"Kas kuvada sündmuse ees eraldaja",showProgressBar:"Kas kuvada edenemise riba?",showMonth:"Kas kuvada kuu?",showDescription:"Kas kuvada kirjeldust?",disableEventLink:"Kas keelata viited sündmuse päises?",disableLocationLink:"Kas keelata asukoha viited?",showNoEventsForToday:"Kas kuvada tänaste sündmuste puudumist?",showFullDayProgress:"Kas kuvada terve päeva sündmuste edenemist?",untilText:"Kestab kuni tekst:",noEventText:"Tänased sündmused puuduvad tekst:",noEventsForNextDaysText:"Paaril järgmisel päeval pole sündmusi tekst:",fullDayEventText:"Kogu päeva kestev sündmus tekst:",showEventIcon:"Kuva sündmuse ikooni",showHiddenText:"Kas näidata summutatud teksti?",showCalendarName:"Kuva kalendri nimi",showWeekNumber:"Näita nädala numbreid",showEventDate:"Näita sündmuste kuupäeva",showDatePerEvent:"Kuva kuupäev iga sündmuse kõrval",showTimeRemaining:"Näita järelejäänud aega",showAllDayHours:"Näita kogu päeva sündmuse teksti",hoursOnSameLine:"Näidake sündmuse reale tundi",eventDateFormat:"Sündmuse kuupäeva vorming"}},Xa={name:"Kalendrivaade",secondary:"Kalendrivaate valikud",fields:{showLastCalendarWeek:"Kuva kalendri viimane nädal",disableCalEventLink:"Keela kalendrisündmuse viide",disableCalLocationLink:"Keela sündmuse asukoha viide",calShowDescription:"Kirjelduse kuvamine",disableCalLink:"Peida kalendri viide"}},ei={name:"Välimus",secondary:"Muganda värve jms.",main:{name:"Peamine",secondary:"Üldised värvuse sätted"},fields:{dimFinishedEvents:"Kas tumendada lõppenud sündmused?"}},ti={common:Ja,ui:qa,errors:Za,required:Ka,main:Ga,event:Qa,calendar:Xa,appearance:ei},ni={version:"Versio",show_warning:"Näytä varoitus",error:"Virhe",description:"Edistyksellinen kalenterikortti Home Assistantille Lovelacen kanssa.",fullDayEventText:"Koko päivä",untilText:"Asti",noEventText:"Ei tapahtumia",noEventsForNextDaysText:"Ei tapahtumia lähipäivinä",hiddenEventText:"tapahtumaa on piilotettu"},ai={common:{previous:"Edellinen",next:"Seuraava",week:"Viikko"}},ii={invalid_configuration:"Virheelliset asetukset",update_card:"Kalenteria ei voi ladata Home Assistant -komponentista",no_entities:"Et ole määrittänyt yhtään entiteettiä"},si={name:"Vaadittu",secondary:"Tämän kortin toiminnan edellyttämät vaihtoehdot"},oi={name:"Päävaihtoehdot",secondary:"Vaihtoehdot, jotka ovat voimassa kaikkialla",fields:{name:"Nimi",showColors:"Näytä värit",maxDaysToShow:"Enintään näytettävät päivät",showLocation:"Näytä sijainnin kuvake",showLoader:"Näytä latausanimaatio",showDate:"Näytä päivämäärä kortissa",showDeclined:"Näytä hylätyt tapahtumat",sortBy:"Järjestä",allDayBottom:"Näytä koko päivän tapahtumat alareunassa",hideFinishedEvents:"Piilota valmiit tapahtumat",dateFormat:"Päivämäärämuoto",defaultMode:"Oletustila",linkTarget:"Linkin kohde",refreshInterval:"Päivitysväli",showRelativeTime:"Näytä suhteellinen aika",firstDayOfWeek:"Viikon ensimmäinen päivä",cardHeight:"Kortin korkeus",hideDuplicates:"Piilota kaksoiskappaleet",showMultiDay:"Jaa monipäiväiset tapahtumat",showMultiDayEventParts:"Näytä usean päivän tapahtuman osat",eventTitle:"Aseta tyhjä tapahtuman otsikko",compactMode:"Ota kompakti tila käyttöön",titleLength:"Otsikon enimmäispituus (0 rajattomasti)",descLength:"Kuvauksen enimmäispituus (0 rajattomasti)",showAllDayEvents:"Näytä koko päivän tapahtumat",offsetHeaderDate:"Offset otsikon päivämäärä",startDaysAhead:"Tapahtumat alkavat `x` päivän kuluttua tästä päivästä"}},ri={name:"Tapahtumatila",secondary:"Tapahtumatilan erityisasetukset",fields:{showCurrentEventLine:"Näytetäänkö viiva ennen tapahtumaa?",showProgressBar:"Näytetäänkö edistymispalkki?",showMonth:"Näytä kuukausi?",showDescription:"Näytä kuvaus?",disableEventLink:"Poistetaanko linkit käytöstä tapahtuman otsikossa?",disableLocationLink:"Poistetaanko sijaintilinkit käytöstä?",showNoEventsForToday:"Näytä ei tapahtumia tänään?",showFullDayProgress:"Näytetäänkö koko päivän tapahtuman edistyminen?",untilText:"asti -teksti:",noEventText:"Ei tapahtumia tänään -teksti:",noEventsForNextDaysText:"Ei tapahtumia lähipäivinä -teksti:",fullDayEventText:"Koko päivän tapahtuma -teksti:",showEventIcon:"Näytä tapahtumakuvake",showHiddenText:"Näytetäänkö piilotetun tapahtuman teksti?",hiddenEventText:"Teksti piilotetuille tapahtumille:",showCalendarName:"Näytä kalenterin nimi",showWeekNumber:"Näytä viikkonumerot",showEventDate:"Näytä tapahtumien päivämäärä",showDatePerEvent:"Näytä päivämäärä jokaisen tapahtuman vieressä",showTimeRemaining:"Näytä jäljellä oleva aika",showAllDayHours:"Näytä koko päivän tapahtuman teksti",hoursOnSameLine:"Näytä tunnit tapahtumarivillä",eventDateFormat:"Tapahtuman päivämäärän muoto"}},di={name:"Kalenteritila",secondary:"Kalenteritilan erityisasetukset",fields:{showLastCalendarWeek:"Näytä viimeinen kalenteriviikko",disableCalEventLink:"Poista kalenterin tapahtumalinkki käytöstä",disableCalLocationLink:"Poista kalenterin sijaintilinkki käytöstä",calShowDescription:"Näytä kuvaus",disableCalLink:"Poista kalenterilinkki käytöstä"}},li={name:"Ulkomuoto",secondary:"Mukauta värejä jne.",main:{name:"Pää",secondary:"Yleiset väriasetukset"},fields:{dimFinishedEvents:"Himmennä päättyneet tapahtumat?"}},ui={common:ni,ui:ai,errors:ii,required:si,main:oi,event:ri,calendar:di,appearance:li},ci={version:"Version",show_warning:"Afficher l'avertissement",error:"Erreur",description:"Une carte avancée pour le calendrier dans Home Assistant avec Lovelace.",fullDayEventText:"Toute la journée",untilText:"Jusqu'au",noEventText:"pas d'événements",noEventsForNextDaysText:"Aucun événement dans les prochains jours",hiddenEventText:"les événements sont masqués"},mi={common:{previous:"Précédent",next:"Suivant",week:"Semaine"}},hi={invalid_configuration:"Configuration invalide",update_card:"Le calendrier ne peut pas être chargé depuis le composant Home Assistant",no_entities:"Vous n'avez pas specifier d'entitées"},pi={name:"Requis",secondary:"Options requises pour que la carte fonctionne"},vi={name:"Options principales",secondary:"Options appliquées globalement",fields:{name:"Nom",showColors:"Afficher les couleurs",maxDaysToShow:"Max jours affichés",showLocation:"Afficher l'icone de lieu",showLoader:"Afficher l'animation de chargement",showDate:"Afficher la date sur la carte",showDeclined:"Afficher les événements déclinés",sortBy:"Trier par",allDayBottom:"Afficher les événements de la journée en bas",hideFinishedEvents:"Cacher les événements terminés",dateFormat:"Format de date",defaultMode:"Mode par défaut",linkTarget:"Lien cible",refreshInterval:"Interval de raffraîchissement",showRelativeTime:"Afficher l'heure relative",firstDayOfWeek:"Premier jour de la semaine",cardHeight:"hauteur de la carte",hideDuplicates:"masquer les doublons",showMultiDay:"Séparer les événements de plusieurs jours",showMultiDayEventParts:"Afficher les parties de l'événement sur plusieurs jours",eventTitle:"Définir un titre d'événement vide",compactMode:"Activer le mode compact",titleLength:"Longueur maximale du titre (0 pour illimité)",descLength:"Longueur maximale de la description (0 pour illimité)",showAllDayEvents:"Afficher les événements de la journée",offsetHeaderDate:"Date d'en-tête décalée",startDaysAhead:"Événements commençant `x` jours à partir d’aujourd’hui"}},_i={name:"Mode événement",secondary:"Options spécifiques du mode événement",fields:{showCurrentEventLine:"Afficher une ligne avant l'événement?",showProgressBar:"Afficher la barre de progression?",showMonth:"Afficher le mois?",showDescription:"Afficher la description?",disableEventLink:"Désactiver les liens dans les titres d'événements?",disableLocationLink:"Désactiver les liens vers le lieu?",showNoEventsForToday:"Afficher Aucun événement aujourd'hui?",showFullDayProgress:"Afficher la progression des événements sur une journée?",untilText:"Texte Jusqu'au:",noEventText:"Texte Aucun événement aujourd'hui:",noEventsForNextDaysText:"Texte Aucun événement dans les prochains jours:",fullDayEventText:"Texte Toute la journée:",showEventIcon:"Afficher l'icone d'événement",showHiddenText:"Afficher le texte de l'événement masqué",hiddenEventText:"Texte pour les événements masqués:",showCalendarName:"Afficher le nom du calendrier",showWeekNumber:"Afficher les numéros de semaine",showEventDate:"Afficher la date des événements",showDatePerEvent:"Afficher la date à côté de chaque événement",showTimeRemaining:"Afficher le temps restant",showAllDayHours:"Afficher le texte de l'événement toute la journée",hoursOnSameLine:"Afficher les heures sur la ligne de l'événement",eventDateFormat:"Format de la date de l'événement"}},fi={name:"Mode calendrier",secondary:"Options spécifiques du mode calendrier",fields:{showLastCalendarWeek:"Afficher la dernière semaine du calendrier",disableCalEventLink:"Désactiver les liens sur les événements du calendrier",disableCalLocationLink:"Désactiver les liens sur les lieux du calendrier",calShowDescription:"Afficher la description",disableCalLink:"Désactiver les liens calendar"}},gi={name:"Apparence",secondary:"Customiser les couleurs etc.",main:{name:"Principal",secondary:"Paramètres globaux de couleur"},fields:{dimFinishedEvents:"Diminuer la visibilité des événements terminés?"}},yi={common:ci,ui:mi,errors:hi,required:pi,main:vi,event:_i,calendar:fi,appearance:gi},Mi={version:"Verzió",show_warning:"Figyelmeztetés megjelenítése",error:"Hiba",description:"Egy fejlett naptár kártya a Home Assistanthoz Lovelace-al.",fullDayEventText:"Egész nap",untilText:"Amíg",noEventText:"Nincs esemény",noEventsForNextDaysText:"Nincsenek események a következő napokra",hiddenEventText:"az események elrejtve"},ki={common:{previous:"Előző",next:"Következő",week:"hét"}},wi={invalid_configuration:"Érvénytelen konfiguráció",update_card:"A naptárat nem lehet Home Assistant komponensből betölteni",no_entities:"Nem adtál meg egyetlen entitást sem"},Di={name:"Szükséges",secondary:"A kártya működéséhez szükséges beállítások"},bi={name:"Általános beállítások",secondary:"Globálisan alkalmazott beállítások",fields:{name:"Név",showColors:"Színek mutatása",maxDaysToShow:"Max megjelenített napok",showLocation:"Hely ikon megjelenítése",showLoader:"Betöltő animáció megjelenítése",showDate:"Dátum megjelenítése a kártyán",showDeclined:"Elutasított események megjelenítése",sortBy:"Rendezés",allDayBottom:"Az egész napos események megjelenítése legalul",hideFinishedEvents:"Befejezett események elrejtése",dateFormat:"Dátum formátum",defaultMode:"Alapértelmezett mód",linkTarget:"Link cél",refreshInterval:"Frissítési időköz",showRelativeTime:"Relatív idő megjelenítése",firstDayOfWeek:"A hét első napja",cardHeight:"Kártya magassága",hideDuplicates:"Ismétlődések elrejtése",showMultiDay:"Többnapos események szétválasztása",showMultiDayEventParts:"Többnapos esemény részeinek megjelenítése",eventTitle:"Üres esemény címének meghatározása",compactMode:"Kompakt mód engedélyezése",titleLength:"Cím max hossza (0: végtelen)",descLength:"Leírás max hossza (0: végtelen)",showAllDayEvents:"Egész napos események megjelenítése",offsetHeaderDate:"Fejléc dátum eltolás",startDaysAhead:" Az x nap múlva kezdődő események"}},xi={name:"Esemény mód",secondary:"Esemény módhoz tartozó beállítások",fields:{showCurrentEventLine:"Mutassunk vonalat az esemény előtt?",showProgressBar:"Mutassuk a folyamatjelzőt?",showMonth:"Mutassuk a hónapot?",showDescription:"Mutassuk a leírást?",disableEventLink:"Az esemény címén lévő link letiltása?",disableLocationLink:"A helyhez kapcsolódó link letiltása?",showNoEventsForToday:"Jelezzük, hogy ma nincs esemény?",showFullDayProgress:"Mutassuk az egész napos esemény folyamatát?",untilText:"amíg szövege:",noEventText:"Ma nincs esemény szövege:",noEventsForNextDaysText:"A következő napokon nincs esemény szövege:",fullDayEventText:"Egész napos esemény szövege:",showEventIcon:"Esemény ikonjának megjelenítése",showHiddenText:"Mutassuk a rejtett esemény szöveget?",hiddenEventText:"Rejtett esemény szövege:",showCalendarName:"Naptár nevének megjelenítése",showWeekNumber:"Hét számának megjelenítése",showEventDate:"Esemény dátumának megjelenítése",showDatePerEvent:"Dátum megjelenítése az események mellett",showTimeRemaining:"Hátralévő idő megjelenítése",showAllDayHours:"Egész napos esemény szöveg megjelenítése",hoursOnSameLine:"Az idő megjelenítése az esemény sorában",eventDateFormat:"Esemény dátumának formátuma"}},Li={name:"Naptár mód",secondary:"Naptár módhoz tartozó beállítások",fields:{showLastCalendarWeek:"Az utolsó naptári hét megjelenítése",disableCalEventLink:"Naptár esemény linkjének letiltása",disableCalLocationLink:"Naptár hely linkjének letiltása",calShowDescription:"Leírás megjelenítése",disableCalLink:"Naptár link letiltása"}},Ti={name:"Kinézet",secondary:"Színek és egyéb testreszabása",main:{name:"Alap",secondary:"Globális szín beállítások"},fields:{dimFinishedEvents:"Befejezett események elhalványítása?"}},Yi={common:Mi,ui:ki,errors:wi,required:Di,main:bi,event:xi,calendar:Li,appearance:Ti},Ei={version:"Versjon",show_warning:"Vis Advarsel",error:"Feil",description:"Et avansert kalenderkort for Home Assistant med Lovelace",fullDayEventText:"Hele dagen",untilText:"Inntil",noEventText:"Ingen hendelser",noEventsForNextDaysText:"Ingen hendelser de nærmeste dager",hiddenEventText:"hendelser er skjulte"},Si={common:{previous:"Forrige",next:"Neste",week:"Uke"}},$i={invalid_configuration:"Ugyldig konfigurasjon",update_card:"Kalenderen kan ikke bli hentet fra Home Assistant komponenten",no_entities:"Du har ikke valgt noen entiteter"},Hi={name:"Obligatorisk",secondary:"Obligatoriske valg for at atomic-calendar-revive skal virke"},Ai={name:"Hovedvalg",secondary:"Valg som virker globalt",fields:{name:"Navn",showColors:"Vis Farger",maxDaysToShow:"Maksimum antall dager å vise",showLocation:"Vis lokasjonsikon",showLoader:"Vis animasjon ved innlasting",showDate:"Vis dato på kort",showDeclined:"Vis avviste hendelser",sortBy:"Sorter efter",allDayBottom:"Vis heldagshendelser nederst",hideFinishedEvents:"Skjul avsluttede hendelser",dateFormat:"Datoformat",defaultMode:"Standardmodus",linkTarget:"Lenkemål",refreshInterval:"Oppdateringsintervall",showRelativeTime:"Vis den relative tiden",firstDayOfWeek:"Første dag i uken",cardHeight:"Høyde på kort",hideDuplicates:"Skjul duplikater",showMultiDay:"Delte flerdagers arrangementer",showMultiDayEventParts:"Vis flerdagers arrangementsdeler",eventTitle:"Angi en tom hendelsestittel",compactMode:"Aktiver kompakt modus",titleLength:"Maks tittellengde (0 for ubegrenset)",descLength:"Maks beskrivelseslengde (0 for ubegrenset)",showAllDayEvents:"Vis heldagsbegivenheter",offsetHeaderDate:"Offset overskriftsdato",startDaysAhead:"Arrangementer som starter `x` dager fra i dag"}},Ci={name:"Hendelsesmodus",secondary:"Innstillinger for hendelsesmodus",fields:{showCurrentEventLine:"Vis en linje før hendelse?",showProgressBar:"Vis fremdriftsindikator?",showMonth:"Vis måned?",showDescription:"Vis beskrivelse?",disableEventLink:"Fjern lenke i hendelsestittel?",disableLocationLink:"Fjern lenke til plassering?",showNoEventsForToday:"Vis Ingen hendelser i dag?",showFullDayProgress:"Vis fremdrift på heldagshendelse?",untilText:"Inntil tekst:",noEventText:"Hvis ingen hendelse, vis tekst:",noEventsForNextDaysText:"Ingen hendelser de nærmeste dager tekst:",fullDayEventText:"Heldagshendelse tekst:",showEventIcon:"Vis hendelsesikon",showHiddenText:"Vis skjult hendelsestekst?",hiddenEventText:"Tekst for skjulte hendelser:",showCalendarName:"Vis kalendernavn",showWeekNumber:"Vis ukenummer",showEventDate:"Vis dato for arrangementer",showDatePerEvent:"Vis dato ved siden av hvert arrangement",showTimeRemaining:"Vis gjenværende tid",showAllDayHours:"Vis tekst for hele dagen",hoursOnSameLine:"Vis timer på arrangementslinjen",eventDateFormat:"Datoformat for hendelsen"}},zi={name:"Kalendermodus",secondary:"Innstillinger for kalendermodus",fields:{showLastCalendarWeek:"Vis forrige uke",disableCalEventLink:"Fjern kalenderhendelseslenke",disableCalLocationLink:"Fjern kalenderposisjonslenke",calShowDescription:"Vis beskrivelse",disableCalLink:"Fjern kalenderlenke"}},ji={name:"Utseende",secondary:"Personlige farger, osv.",main:{name:"Hovedvalg",secondary:"Valg som virker globalt"},fields:{dimFinishedEvents:"Tone ned avsluttede hendelser?"}},Ni={common:Ei,ui:Si,errors:$i,required:Hi,main:Ai,event:Ci,calendar:zi,appearance:ji},Fi={version:"Versie",show_warning:"Toon Waarschuwing",error:"Fout",description:"Een geavanceerde kalenderkaart voor Home Assistant met Lovelace.",fullDayEventText:"Hele Dag",untilText:"Tot",noEventText:"Geen gebeurtenissen",noEventsForNextDaysText:"Geen gebeurtenissen in de komende dagen",hiddenEventText:"gebeurtenissen zijn verborgen"},Oi={common:{previous:"Vorige",next:"Volgende",week:"Week"}},Pi={invalid_configuration:"Ongeldige Configuratie",update_card:"De kalender kan niet worden geladen vanuit de Home Assistant component",no_entities:"Je hebt geen entiteiten gespecificeerd"},Vi={name:"Vereist",secondary:"Vereiste opties voor deze kaart om te functioneren"},Wi={name:"Hoofdopties",secondary:"Opties die globaal van toepassing zijn",fields:{name:"Naam",showColors:"Toon Kleuren",maxDaysToShow:"Max dagen om te tonen",showLocation:"Toon locatie-icoon",showLoader:"Toon laad-animatie",showDate:"Toon datum op kaart",showDeclined:"Toon afgewezen gebeurtenissen",sortBy:"Sorteer op",allDayBottom:"Toon gebeurtenissen die de hele dag duren onderaan",hideFinishedEvents:"Verberg voltooide gebeurtenissen",dateFormat:"Datumformaat",hoursFormat:"Urenformaat",defaultMode:"Standaardmodus",linkTarget:"Link-doel",refreshInterval:"Verversingsinterval",showRelativeTime:"Toon relatieve tijd",firstDayOfWeek:"Eerste dag van de week",cardHeight:"Kaarthoogte",hideDuplicates:"Verberg duplicaten",showMultiDay:"Splits meerdaagse gebeurtenissen",showMultiDayEventParts:"Toon delen van meerdaagse gebeurtenissen",eventTitle:"Stel lege gebeurtenis titel in",compactMode:"Compacte modus inschakelen",titleLength:"Max titellengte (0 voor onbeperkt)",descLength:"Max beschrijvingslengte (0 voor onbeperkt)",showAllDayEvents:"Toon gebeurtenissen die de hele dag duren",offsetHeaderDate:"Datum van koptekst verschuiven",startDaysAhead:"Gebeurtenissen die `x` dagen vanaf vandaag beginnen"}},Bi={name:"Gebeurtenismodus",secondary:"Specifieke opties voor gebeurtenismodus",fields:{showCurrentEventLine:"Toon lijn voor gebeurtenis?",showProgressBar:"Toon voortgangsbalk?",showMonth:"Toon maand?",showDescription:"Toon Beschrijving?",disableEventLink:"Schakel link in gebeurtenistitel uit?",disableLocationLink:"Schakel link naar locatie uit?",showNoEventsForToday:"Toon geen gebeurtenissen vandaag?",showFullDayProgress:"Toon voortgang gebeurtenis die de hele dag duurt?",untilText:"tot tekst:",noEventText:"Geen gebeurtenissen vandaag tekst:",noEventsForNextDaysText:"Geen gebeurtenissen in de komende dagen tekst:",fullDayEventText:"Tekst voor gebeurtenis die de hele dag duurt:",showEventIcon:"Toon Gebeurtenis-icoon",showHiddenText:"Toon tekst voor verborgen gebeurtenissen?",hiddenEventText:"Tekst voor verborgen gebeurtenissen:",showCalendarName:"Toon kalendernaam",showWeekNumber:"Toon weeknummers",showEventDate:"Toon datum voor gebeurtenissen",showDatePerEvent:"Toon datum naast elke gebeurtenis",showTimeRemaining:"Toon resterende tijd",showAllDayHours:"Toon uren voor hele dag gebeurtenissen",hoursOnSameLine:"Toon uren op de gebeurtenislijn",eventDateFormat:"Datumformaat gebeurtenis"}},Ii={name:"Kalendermodus",secondary:"Specifieke opties voor kalendermodus",fields:{showLastCalendarWeek:"Toon de laatste kalenderweek",disableCalEventLink:"Schakel kalender gebeurtenis-link uit",disableCalLocationLink:"Schakel kalender locatie-link uit",calShowDescription:"Toon beschrijving",disableCalLink:"Schakel kalender-link uit"}},Ri={name:"Uiterlijk",secondary:"Pas de kleuren enz. aan",main:{name:"Hoofd",secondary:"Globale Kleurinstellingen"},fields:{dimFinishedEvents:"Dim voltooide gebeurtenissen?"}},Ui={common:Fi,ui:Oi,errors:Pi,required:Vi,main:Wi,event:Bi,calendar:Ii,appearance:Ri},Ji={version:"Versão",show_warning:"Mostrar alerta",error:"Erro",description:"Um cartão de calendário avançado para o Home Assistant com Lovelace.",fullDayEventText:"Todo o dia",untilText:"Até",noEventText:"Sem eventos",noEventsForNextDaysText:"Sem eventos nos próximos dias",hiddenEventText:"eventos escondidos"},qi={common:{previous:"Anterior",next:"Próximo",week:"Semana"}},Zi={invalid_configuration:"Configuração inválida",update_card:"O calendário não pode ser carregado pelo componente do Home Assistant",no_entities:"Não configurou nenhuma entidade"},Ki={name:"Obrigatório",secondary:"Opções obrigatórias para que este cartão funcione"},Gi={name:"Opções principais",secondary:"Opções globais",fields:{name:"Nome",showColors:"Mostrar cores",maxDaysToShow:"Máximo de dias a mostrar",showLocation:"Mostrar icon localização",showLoader:"Mostrar animação carregamento",showDate:"Mostrar data no cartão",showDeclined:"Mostrar convites rejeitados",sortBy:"Ordenar por",allDayBottom:"Mostrar eventos dia completo no final",hideFinishedEvents:"Esconder eventos concluídos",dateFormat:"Formato data",defaultMode:"Modo por default",linkTarget:"Destino link",refreshInterval:"Intervalo atualização",showRelativeTime:"Mostrar tempo relativo",firstDayOfWeek:"Primeiro dia da semana",cardHeight:"Altura cartão",hideDuplicates:"Esconder duplicados",showMultiDay:"Dividir eventos de mutiplos dias",showMultiDayEventParts:"Mostrar partes de eventos de multiplos dias",eventTitle:"Nome para eventos sem titulo",compactMode:"Ativar modo compacto",titleLength:"Tamanho máximo titulo (0 para ilimitado)",descLength:"Tamanho máximo descrição (0 para ilimitado)",showAllDayEvents:"Mostrar eventos dia completo",offsetHeaderDate:"Desfasamento data cabeçalho",startDaysAhead:"Eventos a iniciar a `x` dias desde hoje"}},Qi={name:"Modo evento",secondary:"Opções do modo evento",fields:{showCurrentEventLine:"Mostrar linha antes do evento?",showProgressBar:"Mostrar linha de progresso?",showMonth:"Mostrar mês?",showDescription:"Mostrar descrição?",disableEventLink:"Desativar links no titulo do evento?",disableLocationLink:"Desativar links para localização?",showNoEventsForToday:"Mostrar mensagem sem eventos hoje?",showFullDayProgress:"Mostrar progresso eventos dia completo?",untilText:"até texto:",noEventText:"Texto mensagem sem eventos hoje:",noEventsForNextDaysText:"Texto mensagem sem eventos nos próximos dias:",fullDayEventText:"Texto evento dia completo:",showEventIcon:"Mostrar icon do evento",showHiddenText:"Mostrar texto de evento oculto?",hiddenEventText:"Texto para eventos ocultos:",showCalendarName:"Mostrar nome calendário",showWeekNumber:"Mostrar números de semana",showEventDate:"Mostrar data dos eventos",showDatePerEvent:"Mostrar data junto a cada evento",showTimeRemaining:"Mostrar tempo restante",showAllDayHours:"Mostrar texto evento dia completo",hoursOnSameLine:"Mostrar horas na linha do evento",eventDateFormat:"Formato de data do evento"}},Xi={name:"Modo calendário",secondary:"Opções do modo calendário",fields:{showLastCalendarWeek:"Mostrar última semana de calendário",disableCalEventLink:"Desativar link para evento calendário",disableCalLocationLink:"Desativar link para localização",calShowDescription:"Mostrar descrição",disableCalLink:"Desativar link calendário"}},es={name:"Aparência",secondary:"Personalizar cores, etc.",main:{name:"Main",secondary:"Configuração global de cores"},fields:{dimFinishedEvents:"Colocar eventos concluidos a cinzento?"}},ts={common:Ji,ui:qi,errors:Zi,required:Ki,main:Gi,event:Qi,calendar:Xi,appearance:es},ns={version:"Версия",show_warning:"Показать предупреждение",error:"Ошибка",description:"Продвинутая карта календаря для Home Assistant с Lovelace.",fullDayEventText:"Весь день",untilText:"До",noEventText:"Нет событий",noEventsForNextDaysText:"Нет событий в ближайшие дни",hiddenEventText:"события скрыты"},as={common:{previous:"Предыдущий",next:"Следующий",week:"Неделя"}},is={invalid_configuration:"Неверная конфигурация",update_card:"Календарь не может быть загружен из компонента Home Assistant",no_entities:"Вы не указали никакие сущности"},ss={name:"Обязательно",secondary:"Обязательные параметры для работы этой карты"},os={name:"Основные параметры",secondary:"Параметры, действующие глобально",fields:{name:"Название",showColors:"Показать цвета",maxDaysToShow:"Максимальное количество дней для отображения",showLocation:"Показать значок местоположения",showLoader:"Показать анимацию загрузки",showDate:"Показать дату на карте",showDeclined:"Показать отклоненные события",sortBy:"Сортировать по",allDayBottom:"Показать события на весь день внизу",hideFinishedEvents:"Скрыть завершенные события",dateFormat:"Формат даты",defaultMode:"Режим по умолчанию",linkTarget:"Цель ссылки",refreshInterval:"Интервал обновления",showRelativeTime:"Показать относительное время",firstDayOfWeek:"Первый день недели",cardHeight:"Высота карты",hideDuplicates:"Скрыть дубликаты",showMultiDay:"Разделить многодневные события",showMultiDayEventParts:"Показать части многодневных событий",eventTitle:"Установить пустой заголовок события",compactMode:"Включить компактный режим",titleLength:"Максимальная длина заголовка (0 для неограниченной",descLength:"Максимальная длина описания (0 для неограниченной)",showAllDayEvents:"Показать события на весь день",offsetHeaderDate:"Смещение заголовка даты",startDaysAhead:"События, начинающиеся через x дней сегодня"}},rs={name:"Режим события",secondary:"Специфические параметры режима события",fields:{showCurrentEventLine:"Показать линию перед событием?",showProgressBar:"Показать полосу прогресса?",showMonth:"Показать месяц?",showDescription:"Показать описание?",disableEventLink:"Отключить ссылки в заголовке события?",disableLocationLink:"Отключить ссылки на местоположение?",showNoEventsForToday:"Показать сообщение 'Нет событий сегодня'?",showFullDayProgress:"Показать полосу прогресса для событий на весь день?",untilText:"текст 'до':",noEventText:"Текст 'Нет событий сегодня':",noEventsForNextDaysText:"Текст 'Нет событий в ближайшие дни':",fullDayEventText:"Текст для событий на весь день:",showEventIcon:"Показать значок события",showHiddenText:"Показать текст скрытых событий?",hiddenEventText:"Текст для скрытых событий:",showCalendarName:"Показать название календаря",showWeekNumber:"Показать номер недели",showEventDate:"Показать дату для событий",showDatePerEvent:"Показать дату рядом с каждым событием",showTimeRemaining:"Показать оставшееся время",showAllDayHours:"Показать текст события на весь день",hoursOnSameLine:"Показать часы на строке события",eventDateFormat:"Формат даты события"}},ds={name:"Режим календаря",secondary:"Специфические параметры режима календаря",fields:{showLastCalendarWeek:"Показать последнюю неделю календаря",disableCalEventLink:"Отключить ссылку на событие календаря",disableCalLocationLink:"Отключить ссылку на местоположение календаря",calShowDescription:"Показать описание",disableCalLink:"Отключить ссылку на календарь"}},ls={name:"Внешний вид",secondary:"Настроить цвета и т. д.",main:{name:"Основной",secondary:"Глобальные настройки цвета"},fields:{dimFinishedEvents:"Затемнить завершенные события?"}},us={common:ns,ui:as,errors:is,required:ss,main:os,event:rs,calendar:ds,appearance:ls},cs={version:"Verzia",show_warning:"Zobraziť upozornenie",error:"Error",description:"Pokročilá karta kalendára pre domáceho asistenta s Lovelace.",fullDayEventText:"Celý deň",untilText:"do",noEventText:"Žiadne udalosti",noEventsForNextDaysText:"Žiadne udalosti v najbližších dňoch",hiddenEventText:"udalosti sú skryté"},ms={common:{previous:"Predchádzajúci",next:"Nasledujúci",week:"Týždeň"}},hs={invalid_configuration:"Neplatná konfigurácia",update_card:"Kalendár sa nedá načítať z komponentu Home Assistant",no_entities:"Nezadali ste žiadne udalosti"},ps={name:"Požadované",secondary:"Požadované možnosti pre fungovanie tejto karty"},vs={name:"Hlavné možnosti",secondary:"Možnosti, ktoré platia globálne",fields:{name:"Názov",showColors:"Zobraziť farby",maxDaysToShow:"Maximálny počet dní na zobrazenie",showLocation:"Zobraziť ikonu polohy",showLoader:"Zobraziť animáciu nakladača",showDate:"Zobraziť dátum na karte",showDeclined:"Zobraziť odmietnuté udalosti",sortBy:"Triediť podľa",allDayBottom:"Zobraziť celodenné udalosti v dolnej časti",hideFinishedEvents:"Skryť dokončené udalosti",dateFormat:"Formát dátumu",defaultMode:"Predvolený režim",linkTarget:"Cieľ odkazu",refreshInterval:"Interval obnovenia",showRelativeTime:"Zobraziť relatívny čas",firstDayOfWeek:"Prvý deň v týždni",cardHeight:"Výška karty",hideDuplicates:"Skryť duplikáty",showMultiDay:"Rozdelené viacdňové podujatia",showMultiDayEventParts:"Zobraziť časti viacdňovej udalosti",eventTitle:"Nastavte prázdny názov udalosti",compactMode:"Povoliť kompaktný režim",titleLength:"Maximálna dĺžka názvu (0 pre neobmedzené)",descLength:"Maximálna dĺžka popisu (0 pre neobmedzené)",showAllDayEvents:"Zobraziť celodenné udalosti",offsetHeaderDate:"Dátum posunutia hlavičky",startDaysAhead:"Udalosti začínajúce `x` dní odo dneška"}},_s={name:"Režim udalosti",secondary:"Špecifické možnosti režimu udalosti",fields:{showCurrentEventLine:"Zobraziť riadok pred udalosťou?",showProgressBar:"Zobraziť indikátor priebehu?",showMonth:"Zobraziť mesiac?",showDescription:"Zobraziť popis?",disableEventLink:"Zakázať odkazy v názve udalosti?",disableLocationLink:"Zakázať odkazy na polohu?",showNoEventsForToday:"Zobraziť dnes žiadne udalosti?",showFullDayProgress:"Zobraziť priebeh celodennej udalosti?",untilText:"do textu:",noEventText:"Žiadne dnešné udalosti text:",noEventsForNextDaysText:"Žiadne udalosti v najbližších dňoch text:",fullDayEventText:"Text celodennej udalosti:",showEventIcon:"Zobraziť ikonu udalosti",showHiddenText:"Zobraziť skrytý text udalosti?",hiddenEventText:"Text pre skryté udalosti:",showCalendarName:"Zobraziť názov kalendára",showWeekNumber:"Zobraziť čísla týždňov",showEventDate:"Zobraziť dátumy udalostí",showDatePerEvent:"Zobraziť dátum vedľa každej udalosti",showTimeRemaining:"Zobraziť zostávajúci čas",showAllDayHours:"Zobraziť text celodennej udalosti",hoursOnSameLine:"Zobraziť hodiny na riadku udalosti",eventDateFormat:"Formát dátumu udalosti"}},fs={name:"Režim kalendára",secondary:"Špecifické možnosti režimu kalendára",fields:{showLastCalendarWeek:"Zobraziť posledný kalendárny týždeň",disableCalEventLink:"Zakázať odkaz na udalosť kalendára",disableCalLocationLink:"Zakázať odkaz na umiestnenie kalendára",calShowDescription:"Zobraziť popis",disableCalLink:"Zakázať odkaz na kalendár"}},gs={name:"Vzhľad",secondary:"Prispôsobte farby atď.",main:{name:"Hlavná",secondary:"Globálne nastavenia farieb"},fields:{dimFinishedEvents:"Stlmiť dokončené udalosti?"}},ys={common:cs,ui:ms,errors:hs,required:ps,main:vs,event:_s,calendar:fs,appearance:gs},Ms={version:"Verzija",show_warning:"Prikaži opozorilo",error:"Napaka",description:"Napreden koledar za Home Assistant z Lovelace vmesnikom.",fullDayEventText:"Ves dan",untilText:"Do",noEventText:"Ni dogodkov",noEventsForNextDaysText:"Ni dogodkov v naslednjih nekaj dneh",hiddenEventText:"dogodki so skriti"},ks={common:{previous:"Prejšnji",next:"Naslednji",week:"Teden"}},ws={invalid_configuration:"Nepravilna konfiguracija",update_card:"Koledarja ni mogoče naložiti iz komponente Home Assistant",no_entities:"Niste določili nobene entitete"},Ds={name:"Zahtevano",secondary:"Zahtevane možnosti za delovanje te kartice"},bs={name:"Glavne možnosti",secondary:"Nastavitve za celotno kartico",fields:{name:"Naziv",showColors:"Prikaži barve",maxDaysToShow:"Največje število dni za prikaz",showLocation:"Pokaži ikono lokacije",showLoader:"Pokaži animacijo nalagalnika",showDate:"Prikaži datum na kartici",showDeclined:"Prikaži zavrnjene dogodke",sortBy:"Razvrsti po",allDayBottom:"Pokaži celodnevne dogodke na dnu",hideFinishedEvents:"Skrij končane dogodke",dateFormat:"Format datuma",defaultMode:"Privzeti način",linkTarget:"Cilj povezave",refreshInterval:"Osvežitveni interval",showRelativeTime:"Pokaži relativni čas",firstDayOfWeek:"Prvi dan v tednu",cardHeight:"Višina kartice",hideDuplicates:"skrij dvojnike",showMultiDay:"Razdeljeni večdnevni dogodki",showMultiDayEventParts:"Prikaži dele večdnevnega dogodka",eventTitle:"Nastavite prazen naslov dogodka",compactMode:"Omogoči kompaktni način",titleLength:"Največja dolžina naslova (0 za neomejeno)",descLength:"Največja dolžina opisa (0 za neomejeno)",showAllDayEvents:"Pokaži celodnevne dogodke",offsetHeaderDate:"Datum zamika glave",startDaysAhead:"Dogodki, ki se začnejo `x` dni od danes"}},xs={name:"Način dogodka",secondary:"Posebne možnosti za način dogodka",fields:{showCurrentEventLine:"Prikaži vrstico pred dogodkom?",showProgressBar:"Prikaži vrstico napredka?",showMonth:"Prikaži mesec?",showDescription:"Prikaži opis?",disableEventLink:"Onemogoči povezave v naslovu dogodka?",disableLocationLink:"Onemogoči povezave do lokacije?",showNoEventsForToday:"Prikaži danes ni dogodka?",showFullDayProgress:"Pokaži celodnevni napredek dogodka?",untilText:"do besedila:",noEventText:"Besedilo danes ni dogodka:",noEventsForNextDaysText:"Besedilo v naslednjih dneh ni nobenega dogodka:",fullDayEventText:"Celodnevno besedilo dogodka:",showEventIcon:"Pokaži ikono dogodka",showHiddenText:"Pokaži skrito besedilo dogodka?",hiddenEventText:"Besedilo za skrite dogodke:",showCalendarName:"Pokaži ime koledarja",showWeekNumber:"Prikaži številke tednov",showEventDate:"Pokaži datum za dogodke",showDatePerEvent:"Prikažite datum poleg vsakega dogodka",showTimeRemaining:"Pokaži preostali čas",showAllDayHours:"Prikaži besedilo celodnevnega dogodka",hoursOnSameLine:"Prikaži ure na vrstici dogodkov",eventDateFormat:"Oblika datuma dogodka"}},Ls={name:"Način koledarja",secondary:"Možnosti za način koledarja",fields:{showLastCalendarWeek:"Pokaži zadnji koledarski teden",disableCalEventLink:"Onemogoči povezavo do dogodka v koledarju",disableCalLocationLink:"Onemogoči povezavo do lokacije koledarja",calShowDescription:"Prikaži opis",disableCalLink:"Onemogoči povezavo do koledarja"}},Ts={name:"Videz",secondary:"Prilagodite barve itd.",main:{name:"Osnovni",secondary:"Glavne barvne nastavitve"},fields:{dimFinishedEvents:"Zatemniti končane dogodke?"}},Ys={common:Ms,ui:ks,errors:ws,required:Ds,main:bs,event:xs,calendar:Ls,appearance:Ts},Es={version:"Version",show_warning:"Visa varning",error:"Fel",description:"Ett avancerat kalenderkort för Home Assistant med Lovelace",fullDayEventText:"Heldag",untilText:"Tills",noEventText:"Inga händelser",noEventsForNextDaysText:"Inga händelser de närmaste dagarna",hiddenEventText:"händelser är dolda"},Ss={common:{previous:"Föregående",next:"Nästa",week:"Vecka"}},$s={invalid_configuration:"Ogiltig konfiguration",update_card:"Kalendern kan inte laddas från Home Assistant-komponenten"},Hs={name:"Nödvändig",secondary:"Nödvändiga inställningar för att detta kort ska fungera"},As={name:"Huvudinställningar",secondary:"Globala inställningar",fields:{name:"Namn",showColors:"Visa färger",maxDaysToShow:"Max antal dagar att visa",showLocation:"Visa platsikon",showLoader:"Visa animation för laddning",showDate:"Visa datum på kortet",showDeclined:"Visa nekade händelser",sortBy:"Sortera efter",allDayBottom:"Visa heldagshändelser längst ner",hideFinishedEvents:"Dölj avslutade händelser",dateFormat:"Datumformat",defaultMode:"Förvalt läge",linkTarget:"Länkmål",refreshInterval:"Uppdateringsintervall",showRelativeTime:"Visa relativ tid",firstDayOfWeek:"Veckans första dag",cardHeight:"Kortets höjd",hideDuplicates:"Dölj dubbletter",showMultiDay:"Dela flerdagarsevenemang",showMultiDayEventParts:"Visa flerdagarsevenemangsdelar",eventTitle:"Ange tom händelsetitel",compactMode:"Aktivera kompakt läge",titleLength:"Max titellängd (0 för obegränsat)",descLength:"Max beskrivningslängd (0 för obegränsat)",showAllDayEvents:"Visa heldagshändelser",offsetHeaderDate:"Offset rubrikdatum",startDaysAhead:"Händelser som börjar `x` dagar från och med idag"}},Cs={name:"Händelse-läge",secondary:"Inställningar för händelse-läget",fields:{showCurrentEventLine:"Visa länk före händelsen?",showProgressBar:"Visa förlopp?",showMonth:"Visa månad?",showDescription:"Visa beskrivning?",disableEventLink:"Inaktivera länkar i händelsetitel?",disableLocationLink:"Inaktivera länkar till plats?",showNoEventsForToday:"Visa inga händelser idag?",showFullDayProgress:"Visa förlopp för heldagshändelser?",untilText:"Text för Tills:",noEventText:"Text för Inga händelser idag:",noEventsForNextDaysText:"Text för Inga händelser för följande dagar:",fullDayEventText:"Text för Heldagshändelse:",showEventIcon:"Visa händelseikon",showHiddenText:"Visa dold händelsetext",hiddenEventText:"Text för dolda händelser:",showCalendarName:"Visa kalendernamn",showWeekNumber:"Visa veckonummer",showEventDate:"Visa datum för evenemang",showDatePerEvent:"Visa datum bredvid varje evenemang",showTimeRemaining:"Visa återstående tid",showAllDayHours:"Visa heldagshändelsetext",hoursOnSameLine:"Visa öppettider på evenemangsraden",eventDateFormat:"Händelsedatumformat"}},zs={name:"Kalender-läge",secondary:"Inställningar för kalender-läge",fields:{showLastCalendarWeek:"Visa sista veckan",disableCalEventLink:"Inaktivera länk till händelse",disableCalLocationLink:"Inaktivera länk till plats",calShowDescription:"Visa beskrivning?",disableCalLink:"Inaktivera kalenderlänk"}},js={name:"Utseende",secondary:"Personliga färger etc.",main:{name:"Huvud",secondary:"Globala färginställningar"},fields:{dimFinishedEvents:"Dimma slutförda händelser?"}},Ns={common:Es,ui:Ss,errors:$s,required:Hs,main:As,event:Cs,calendar:zs,appearance:js},Fs={version:"Версія",show_warning:"Показати попередження",error:"Помилка",description:"Розширена картка календаря для Home Assistant з Lovelace.",fullDayEventText:"Увесь день",untilText:"До",noEventText:"Немає подій",noEventsForNextDaysText:"Немає подій на найближчі дні",hiddenEventText:"події приховані"},Os={common:{previous:"Попередній",next:"Наступний",week:"Тиждень"}},Ps={invalid_configuration:"Невірна конфігурація",update_card:"Неможливо завантажити календар з компоненту Home Assistant",no_entities:"Ви не вказали жодних сутностей"},Vs={name:"Обов'язково",secondary:"Обов'язкові налаштування для функціонування цієї картки"},Ws={name:"Основні налаштування",secondary:"Налаштування, які застосовуються глобально",fields:{name:"Назва",showColors:"Показувати кольори",maxDaysToShow:"Макс. днів для показу",showLocation:"Показувати значок місцезнаходження",showLoader:"Показувати анімацію завантаження",showDate:"Показувати дату на картці",showDeclined:"Показувати відхилені події",sortBy:"Сортувати за",allDayBottom:"Показувати цілоденні події внизу",hideFinishedEvents:"Приховати завершені події",dateFormat:"Формат дати",defaultMode:"Стандартний режим",linkTarget:"Ціль посилання",refreshInterval:"Інтервал оновлення",showRelativeTime:"Показувати час до початку події",firstDayOfWeek:"Перший день тижня",cardHeight:"Висота картки",hideDuplicates:"Приховати дублікати",showMultiDay:"Розділити багатоденні події",showMultiDayEventParts:"Показувати частини багатоденних подій",eventTitle:"Встановити заголовок порожніх подій",compactMode:"Увімкнути компактний режим",titleLength:"Макс. довжина заголовка (0 для необмеженої)",descLength:"Макс. довжина опису (0 для необмеженої)",showAllDayEvents:"Показувати цілоденні події",offsetHeaderDate:"Змістити дату в заголовку",startDaysAhead:"Події, що починаються `х` днів від сьогодні"}},Bs={name:"Режим подій",secondary:"Специфічні налаштування режиму подій",fields:{showCurrentEventLine:"Показати лінію перед подією?",showProgressBar:"Показувати індикатор прогресу?",showMonth:"Показувати місяць?",showDescription:"Показувати опис?",disableEventLink:"Вимкнути посилання в заголовку події?",disableLocationLink:"Вимкнути посилання на місцезнаходження?",showNoEventsForToday:"Показати, що сьогодні немає подій?",showFullDayProgress:"Показувати прогрес цілоденних подій?",untilText:"текст до:",noEventText:"Текст за відсутності подій сьогодні:",noEventsForNextDaysText:"Текст за відсутності подій на найближчі дні:",fullDayEventText:"Текст цілоденної події:",showEventIcon:"Показувати значок події",showHiddenText:"Показувати текст прихованих подій?",hiddenEventText:"Текст для прихованих подій:",showCalendarName:"Показувати назву календаря",showWeekNumber:"Показувати номер тижня",showEventDate:"Показувати дату події",showDatePerEvent:"Показувати дату поруч з кожною подією",showTimeRemaining:"Показувати залишок часу",showAllDayHours:"Показувати текст цілоденних подій",hoursOnSameLine:"Показувати години на лінії події",eventDateFormat:"Формат дати події"}},Is={name:"Режим календаря",secondary:"Специфічні налаштування режиму календаря",fields:{showLastCalendarWeek:"Показувати останній тиждень календаря",disableCalEventLink:"Вимкнути посилання на подію календаря",disableCalLocationLink:"Вимкнути посилання на місцезнаходження в календарі",calShowDescription:"Показувати опис",disableCalLink:"Вимкнути посилання календаря"}},Rs={name:"Зовнішній вигляд",secondary:"Налаштування кольорів тощо.",main:{name:"Основне",secondary:"Глобальні налаштування кольорів"},fields:{dimFinishedEvents:"Зменшити яскравість завершених подій?"}},Us={common:Fs,ui:Os,errors:Ps,required:Vs,main:Ws,event:Bs,calendar:Is,appearance:Rs};const Js={hass:null};function qs(e){Js.hass=e}const Zs={ca:Kn,cs:oa,da:_a,de:La,en:Na,"en-GB":Na,es:Object.freeze({__proto__:null,appearance:Ra,calendar:Ia,common:Fa,default:Ua,errors:Pa,event:Ba,main:Wa,required:Va,ui:Oa}),et:Object.freeze({__proto__:null,appearance:ei,calendar:Xa,common:Ja,default:ti,errors:Za,event:Qa,main:Ga,required:Ka,ui:qa}),fi:Object.freeze({__proto__:null,appearance:li,calendar:di,common:ni,default:ui,errors:ii,event:ri,main:oi,required:si,ui:ai}),fr:Object.freeze({__proto__:null,appearance:gi,calendar:fi,common:ci,default:yi,errors:hi,event:_i,main:vi,required:pi,ui:mi}),hu:Object.freeze({__proto__:null,appearance:Ti,calendar:Li,common:Mi,default:Yi,errors:wi,event:xi,main:bi,required:Di,ui:ki}),nb:Object.freeze({__proto__:null,appearance:ji,calendar:zi,common:Ei,default:Ni,errors:$i,event:Ci,main:Ai,required:Hi,ui:Si}),nl:Object.freeze({__proto__:null,appearance:Ri,calendar:Ii,common:Fi,default:Ui,errors:Pi,event:Bi,main:Wi,required:Vi,ui:Oi}),pt:Object.freeze({__proto__:null,appearance:es,calendar:Xi,common:Ji,default:ts,errors:Zi,event:Qi,main:Gi,required:Ki,ui:qi}),ru:Object.freeze({__proto__:null,appearance:ls,calendar:ds,common:ns,default:us,errors:is,event:rs,main:os,required:ss,ui:as}),sk:Object.freeze({__proto__:null,appearance:gs,calendar:fs,common:cs,default:ys,errors:hs,event:_s,main:vs,required:ps,ui:ms}),sl:Object.freeze({__proto__:null,appearance:Ts,calendar:Ls,common:Ms,default:Ys,errors:ws,event:xs,main:bs,required:Ds,ui:ks}),sv:Object.freeze({__proto__:null,appearance:js,calendar:zs,common:Es,default:Ns,errors:$s,event:Cs,main:As,required:Hs,ui:Ss}),uk:Object.freeze({__proto__:null,appearance:Rs,calendar:Is,common:Fs,default:Us,errors:Ps,event:Bs,main:Ws,required:Vs,ui:Os})};function Ks(e,t){try{return e.split(".").reduce((e,t)=>e[t],Zs[t])}catch(n){return void console.error(`Error translating key "${e}" in language "${t}":`,n)}}let Gs=!1;function Qs(e){const t=(Js.hass?.locale?.language||Js.hass?.language||localStorage.getItem("selectedLanguage"))??"en";if(Zs[t])var n=Ks(e,t);else n=Ks(e,"en"),Gs||(console.warn(`Language "${t}" not supported by Atomic Calendar, request it https://github.com/totaldebug/atomic-calendar-revive/discussions/new?category=feature-requests`),Gs=!0);return n??e}const Xs=[{name:"name",label:Qs("main.fields.name"),selector:{text:{}}},{name:"titleLength",label:Qs("main.fields.titleLength"),selector:{number:{min:0,max:99999999999}}},{name:"descLength",label:Qs("main.fields.descLength"),selector:{number:{min:0,max:99999999999}}},{name:"firstDayOfWeek",label:Qs("main.fields.firstDayOfWeek"),selector:{select:{options:[],mode:"dropdown"}}},{name:"maxDaysToShow",label:Qs("main.fields.maxDaysToShow"),selector:{number:{min:0,max:99999999999}}},{name:"startDaysAhead",label:Qs("main.fields.startDaysAhead"),selector:{number:{min:0,max:999}}},{name:"refreshInterval",label:Qs("main.fields.refreshInterval"),selector:{number:{min:60,max:99999999999}}},{name:"dateFormat",label:Qs("main.fields.dateFormat"),selector:{text:{}}},{name:"eventTitle",label:Qs("main.fields.eventTitle"),selector:{text:{}}},{name:"defaultMode",label:Qs("main.fields.defaultMode"),selector:{select:{options:["Event","Calendar","Planner","Inline"],mode:"dropdown"}}},{name:"linkTarget",label:Qs("main.fields.linkTarget"),selector:{select:{options:["_blank","_self","_parent","_top"],mode:"dropdown"}}},{name:"sortBy",label:Qs("main.fields.sortBy"),selector:{select:{options:["start","milestone","none"],mode:"dropdown"}}},{name:"cardHeight",label:Qs("main.fields.cardHeight"),selector:{text:{}}},{name:"showLoader",label:Qs("main.fields.showLoader"),selector:{boolean:{}}},{name:"showDate",label:Qs("main.fields.showDate"),selector:{boolean:{}}},{name:"showEndTime",label:"Show End Time",selector:{boolean:{}}},{name:"showDeclined",label:Qs("main.fields.showDeclined"),selector:{boolean:{}}},{name:"hideFinishedEvents",label:Qs("main.fields.hideFinishedEvents"),selector:{boolean:{}}},{name:"showLocation",label:Qs("main.fields.showLocation"),selector:{boolean:{}}},{name:"showRelativeTime",label:Qs("main.fields.showRelativeTime"),selector:{boolean:{}}},{name:"hideDuplicates",label:Qs("main.fields.hideDuplicates"),selector:{boolean:{}}},{name:"showMultiDay",label:Qs("main.fields.showMultiDay"),selector:{boolean:{}}},{name:"showMultiDayEventParts",label:Qs("main.fields.showMultiDayEventParts"),selector:{boolean:{}}},{name:"compactMode",label:Qs("main.fields.compactMode"),selector:{boolean:{}}},{name:"showAllDayEvents",label:Qs("main.fields.showAllDayEvents"),selector:{boolean:{}}},{name:"offsetHeaderDate",label:Qs("main.fields.offsetHeaderDate"),selector:{boolean:{}}},{name:"allDayBottom",label:Qs("main.fields.allDayBottom"),selector:{boolean:{}}}],eo=[{name:"untilText",label:Qs("event.fields.untilText"),selector:{text:{}}},{name:"noEventsForNextDaysText",label:Qs("event.fields.noEventsForNextDaysText"),selector:{text:{}}},{name:"noEventText",label:Qs("event.fields.noEventText"),selector:{text:{}}},{name:"hiddenEventText",label:Qs("event.fields.hiddenEventText"),selector:{text:{}}},{name:"eventDateFormat",label:Qs("event.fields.eventDateFormat"),selector:{text:{}}},{name:"showCurrentEventLine",label:Qs("event.fields.showCurrentEventLine"),selector:{boolean:{}}},{name:"showProgressBar",label:Qs("event.fields.showProgressBar"),selector:{boolean:{}}},{name:"showMonth",label:Qs("event.fields.showMonth"),selector:{boolean:{}}},{name:"showDescription",label:Qs("event.fields.showDescription"),selector:{boolean:{}}},{name:"disableEventLink",label:Qs("event.fields.disableEventLink"),selector:{boolean:{}}},{name:"disableLocationLink",label:Qs("event.fields.disableLocationLink"),selector:{boolean:{}}},{name:"showNoEventsForToday",label:Qs("event.fields.showNoEventsForToday"),selector:{boolean:{}}},{name:"showFullDayProgress",label:Qs("event.fields.showFullDayProgress"),selector:{boolean:{}}},{name:"showEventIcon",label:Qs("event.fields.showEventIcon"),selector:{boolean:{}}},{name:"showHiddenText",label:Qs("event.fields.showHiddenText"),selector:{boolean:{}}},{name:"showCalendarName",label:Qs("event.fields.showCalendarName"),selector:{boolean:{}}},{name:"showWeekNumber",label:Qs("event.fields.showWeekNumber"),selector:{boolean:{}}},{name:"showEventDate",label:Qs("event.fields.showEventDate"),selector:{boolean:{}}},{name:"showDatePerEvent",label:Qs("event.fields.showDatePerEvent"),selector:{boolean:{}}},{name:"showTimeRemaining",label:Qs("event.fields.showTimeRemaining"),selector:{boolean:{}}},{name:"showAllDayHours",label:Qs("event.fields.showAllDayHours"),selector:{boolean:{}}},{name:"hoursOnSameLine",label:Qs("event.fields.hoursOnSameLine"),selector:{boolean:{}}},{name:"hideCardIfNoEvents",label:"Hide card if no events",selector:{boolean:{}}}],to=[{name:"calShowDescription",label:Qs("calendar.fields.calShowDescription"),selector:{boolean:{}}},{name:"showLastCalendarWeek",label:Qs("calendar.fields.showLastCalendarWeek"),selector:{boolean:{}}},{name:"disableCalEventLink",label:Qs("calendar.fields.disableCalEventLink"),selector:{boolean:{}}},{name:"disableCalLocationLink",label:Qs("calendar.fields.disableCalLocationLink"),selector:{boolean:{}}},{name:"disableCalLink",label:Qs("calendar.fields.disableCalLink"),selector:{boolean:{}}}],no=[{name:"plannerDaysToShow",label:Qs("planner.fields.plannerDaysToShow"),selector:{number:{min:1,max:365}}},{name:"plannerRollingWeek",label:Qs("planner.fields.plannerRollingWeek"),selector:{boolean:{}}}],ao=[{name:"dimFinishedEvents",label:Qs("appearance.fields.dimFinishedEvents"),selector:{boolean:{}}}],io=[{name:"name",label:"Name",selector:{text:{}}},{name:"icon",label:"Icon",selector:{icon:{}}},{name:"color",label:"Color",selector:{color:{}}},{name:"startTimeFilter",label:"Start Time Filter",selector:{text:{}}},{name:"endTimeFilter",label:"End Time Filter",selector:{text:{}}},{name:"maxDaysToShow",label:"Max Days To Show",selector:{number:{}}},{name:"blocklist",label:"Blocklist",selector:{text:{}}},{name:"blocklistLocation",label:"Blocklist Location",selector:{text:{}}},{name:"allowlist",label:"Allowlist",selector:{text:{}}},{name:"allowlistLocation",label:"Allowlist Location",selector:{text:{}}},{name:"eventTitle",label:"Event Title",selector:{text:{}}},{name:"showMultiDay",label:"Show Multi Day",selector:{boolean:{}}}],so=G`
	.option {
		padding: 4px 0px 4px;
		cursor: pointer;
	}
	.row {
		display: flex;
		pointer-events: none;
	}
	.title {
		padding-left: 16px;
		margin-top: -6px;
		pointer-events: none;
	}
	.secondary {
		padding-left: 40px;
		color: var(--secondary-text-color);
		pointer-events: none;
	}
	.values {
		padding: 16px;
		background: var(--secondary-background-color);
	}
	.entity-box {
		margin-top: 5px;
		padding: 8px;
		background-image:
			repeating-linear-gradient(27deg, #333333, #333333 11px, transparent 11px, transparent 14px, #333333 14px),
			repeating-linear-gradient(117deg, #333333, #333333 11px, transparent 11px, transparent 14px, #333333 14px),
			repeating-linear-gradient(207deg, #333333, #333333 11px, transparent 11px, transparent 14px, #333333 14px),
			repeating-linear-gradient(297deg, #333333, #333333 11px, transparent 11px, transparent 14px, #333333 14px);
		background-size:
			3px 100%,
			100% 3px,
			3px 100%,
			100% 3px;
		background-position:
			0 0,
			0 0,
			100% 0,
			0 100%;
		background-repeat: no-repeat;
	}
	.entity-options {
		padding: 16px;
	}
	.side-by-side {
		display: flex;
	}
	.side-by-side > * {
		flex: 1;
		padding-right: 4px;
	}
	.origin-calendar {
		width: 50%;
		margin-left: 35px;
	}
	.icon {
		--mdc-icon-size: 10px;
		width: 10px;
		height: 10px;
		padding-top: 0px;
		margin-top: -10px;
		margin-right: -1px;
		margin-left: -1px;
	}
	.sponsor {
		margin: 5px;
		padding: 8px;
		background-image:
			repeating-linear-gradient(27deg, #333333, #333333 11px, transparent 11px, transparent 14px, #333333 14px),
			repeating-linear-gradient(117deg, #333333, #333333 11px, transparent 11px, transparent 14px, #333333 14px),
			repeating-linear-gradient(207deg, #333333, #333333 11px, transparent 11px, transparent 14px, #333333 14px),
			repeating-linear-gradient(297deg, #333333, #333333 11px, transparent 11px, transparent 14px, #333333 14px);
		background-size:
			3px 100%,
			100% 3px,
			3px 100%,
			100% 3px;
		background-position:
			0 0,
			0 0,
			100% 0,
			0 100%;
		background-repeat: no-repeat;
		position: relative;
	}
	.badge {
		position: absolute;
		top: 0px;
		right: 0px;
	}
`;let oo=class extends Qe{constructor(){super(...arguments),this._initialized=!1,this._computeSchema=function(e,t){void 0===t&&(t=Fn);var n=null;function a(){for(var a=[],i=0;i<arguments.length;i++)a[i]=arguments[i];if(n&&n.lastThis===this&&t(a,n.lastArgs))return n.lastResult;var s=e.apply(this,a);return n={lastResult:s,lastArgs:a,lastThis:this},s}return a.clear=function(){n=null},a}(e=>e.map(e=>{if("firstDayOfWeek"===e.name){const t=o.weekdays().map((e,t)=>({value:t,label:e}));return{...e,selector:{select:{options:t,mode:"dropdown"}}}}return e}))}static get styles(){return[so,G`
				.card-config {
					display: flex;
					flex-direction: column;
					gap: 16px;
				}
				.option {
					padding: 4px 0;
					cursor: pointer;
				}
				.row {
					display: flex;
					align-items: center;
					margin-bottom: 8px;
				}
				.title {
					font-size: 16px;
					font-weight: bold;
					margin-left: 8px;
				}
				.secondary {
					color: var(--secondary-text-color);
				}
				.values {
					padding-left: 16px;
					background: var(--secondary-background-color);
					padding: 16px;
				}
				ha-expansion-panel {
					margin-bottom: 8px;
				}
			`]}setConfig(e){this._config={...Pn,...e},this.loadCardHelpers()}shouldUpdate(){return this._initialized||this._initialize(),!0}_initialize(){void 0!==this.hass&&void 0!==this._config&&void 0!==this._helpers&&(this._initialized=!0)}async loadCardHelpers(){this._helpers=await window.loadCardHelpers()}render(){return this.hass&&this._helpers?(this.hass.language&&o.locale(this.hass.language.toLowerCase()),Ce`
			<div class="card-config">
				<div class="sponsor">
					<div>
						Please consider sponsoring this project. <br />
						This will help keep the project alive and continue development.
					</div>
					<div class="badge">
						<a href="https://github.com/sponsors/marksie1988" target="_blank">
							<img
								src="https://img.shields.io/badge/sponsor-000?style=for-the-badge&logo=githubsponsors&logoColor=red"
							/>
						</a>
					</div>
				</div>
				<ha-expansion-panel outlined>
					<div slot="header" class="title">Main Settings</div>
					<div class="values">
						<ha-form
							.hass=${this.hass}
							.data=${this._config}
							.schema=${this._computeSchema(Xs)}
							.computeLabel=${this._computeLabel}
							@value-changed=${this._valueChanged}
						></ha-form>
					</div>
				</ha-expansion-panel>

				<ha-expansion-panel outlined>
					<div slot="header" class="title">Event Mode</div>
					<div class="values">
						<ha-form
							.hass=${this.hass}
							.data=${this._config}
							.schema=${eo}
							.computeLabel=${this._computeLabel}
							@value-changed=${this._valueChanged}
						></ha-form>
					</div>
				</ha-expansion-panel>

				<ha-expansion-panel outlined>
					<div slot="header" class="title">Calendar Mode</div>
					<div class="values">
						<ha-form
							.hass=${this.hass}
							.data=${this._config}
							.schema=${to}
							.computeLabel=${this._computeLabel}
							@value-changed=${this._valueChanged}
						></ha-form>
					</div>
				</ha-expansion-panel>

				<ha-expansion-panel outlined>
					<div slot="header" class="title">Planner Mode</div>
					<div class="values">
						<ha-form
							.hass=${this.hass}
							.data=${this._config}
							.schema=${no}
							.computeLabel=${this._computeLabel}
							@value-changed=${this._valueChanged}
						></ha-form>
					</div>
				</ha-expansion-panel>

				<ha-expansion-panel outlined>
					<div slot="header" class="title">Appearance</div>
					<div class="values">
						<ha-form
							.hass=${this.hass}
							.data=${this._config}
							.schema=${ao}
							.computeLabel=${this._computeLabel}
							@value-changed=${this._valueChanged}
						></ha-form>
					</div>
				</ha-expansion-panel>

				<ha-expansion-panel outlined>
					<div slot="header" class="title">Actions</div>
					<div class="values">${this.renderActions()}</div>
				</ha-expansion-panel>

				<ha-expansion-panel outlined>
					<div slot="header" class="title">Entities</div>
					<div class="values">${this.renderEntities()}</div>
				</ha-expansion-panel>
			</div>
		`):Ce``}renderEntities(){const e=this._config.entities||[],t=e.map(e=>"string"==typeof e?e:e.entity);return Ce`
			<ha-selector
				.hass=${this.hass}
				.selector=${{entity:{multiple:!0,domain:"calendar"}}}
				.value=${t}
				.label=${"Selected Calendars"}
				@value-changed=${this._entitiesChanged}
			></ha-selector>

			${e.map((e,t)=>{const n="string"==typeof e?{entity:e}:e;return Ce`
					<ha-expansion-panel outlined style="margin-top: 8px;">
						<div slot="header">${n.entity}</div>
						<div class="values">
							<ha-form
								.hass=${this.hass}
								.data=${n}
								.schema=${io}
								.computeLabel=${e=>e.label||e.name}
								@value-changed=${e=>this._entityValueChanged(e,t)}
							></ha-form>
						</div>
					</ha-expansion-panel>
				`})}
		`}renderActions(){return Ce`
			${["tap_action","hold_action","double_tap_action"].map(e=>Ce`
					<div class="option" style="margin-bottom: 8px;">
						<ha-selector
							.hass=${this.hass}
							.selector=${{ui_action:{}}}
							.value=${this._config[e]}
							.label=${e.replace(/_/g," ").replace(/\b\w/g,e=>e.toUpperCase())}
							@value-changed=${t=>this._actionValueChanged(t,e)}
						></ha-selector>
					</div>
				`)}
		`}_computeLabel(e){return e.label||e.name}_valueChanged(e){On(this,"config-changed",{config:e.detail.value})}_actionValueChanged(e,t){this._config={...this._config,[t]:e.detail.value},On(this,"config-changed",{config:this._config})}_entitiesChanged(e){const t=e.detail.value,n=this._config.entities||[],a=t.map(e=>{const t=n.find(t=>("string"==typeof t?t:t.entity)===e);return t||{entity:e}});this._config={...this._config,entities:a},On(this,"config-changed",{config:this._config})}_entityValueChanged(e,t){const n=e.detail.value,a=[...this._config.entities||[]];a[t]=n,this._config={...this._config,entities:a},On(this,"config-changed",{config:this._config})}};e([at({attribute:!1})],oo.prototype,"hass",void 0),e([it()],oo.prototype,"_config",void 0),e([it()],oo.prototype,"_helpers",void 0),oo=e([et("atomic-calendar-revive-editor")],oo);var ro="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z",lo="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z";
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const uo=2;class co{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class mo extends co{constructor(e){if(super(e),this.it=je,e.type!==uo)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===je||null==e)return this._t=void 0,this.it=e;if(e===ze)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}}mo.directiveName="unsafeHTML",mo.resultType=1;const ho=(e=>(...t)=>({_$litDirective$:e,values:t}))(mo);class po{constructor(e,t){this._eventClass=e,this._globalConfig=t,this.isEmpty=!1}get rawEvent(){return this._eventClass}get id(){return(this.rawEvent.id||this.rawEvent.uid)+this.title}get originCalendar(){return this.rawEvent.originCalendar}get entity(){return this._eventClass.hassEntity||{}}get entityConfig(){return this._eventClass.entity||{}}set originName(e){this._customOriginName=e}get originName(){if(void 0!==this._customOriginName)return this._customOriginName;const{originCalendar:e}=this;if(e&&e.name)return e.name;const{entity:t}=this;return t&&t.attributes&&t.attributes.friendly_name?t.attributes.friendly_name:e&&e.entity?e.entity:t&&t.entity||t||"Unknown"}get startDateTime(){return void 0===this._startDateTime&&(this.rawEvent.start.date?this._startDateTime=this._processDate(o(this.rawEvent.start.date,"YYYY-MM-DD").startOf("day")):this._startDateTime=this._processDate(o(this.rawEvent.start.dateTime))),this._startDateTime.clone()}get endDateTime(){return void 0===this._endDateTime&&(this.rawEvent.end.date?this._endDateTime=this._processDate(o(this.rawEvent.end.date,"YYYY-MM-DD").subtract(1,"day").endOf("day"),!0):this._endDateTime=this._processDate(o(this.rawEvent.end.dateTime),!0)),this._endDateTime.clone()}get addDays(){return void 0!==this.rawEvent.addDays&&this.rawEvent.addDays}get daysLong(){if(this._globalConfig.showMultiDay)return this.rawEvent.daysLong;{const e=Math.round(this.endDateTime.subtract(1,"minutes").endOf("day").diff(this.startDateTime.startOf("day"),"hours")/24);return e>1?e:void 0}}get isFirstDay(){return this.rawEvent._isFirstDay}get isLastDay(){return this.rawEvent._isLastDay}_processDate(e,t=!1){return!1!==this.addDays&&(!t&&this.addDays&&(e=e.add(this.addDays,"days")),!this.isLastDay&&t?e=this.startDateTime.endOf("day"):this.isFirstDay||t||(e=e.startOf("day"))),e}get isRecurring(){return!!this.rawEvent.recurringEventId}get isDeclined(){return 0!==(this.rawEvent.attendees||[]).filter(e=>e.self&&"declined"===e.responseStatus).length}get isRunning(){return this.startDateTime.isBefore(o())&&this.endDateTime.isAfter(o())}get isFinished(){return this.endDateTime.isBefore(o())}get htmlLink(){return this.rawEvent.htmlLink||void 0}get sourceUrl(){return this.rawEvent.source&&this.rawEvent.source.url||""}get isMultiDay(){if(this.endDateTime.diff(this.startDateTime,"hours")>24)return!0;const e=Math.abs(this.startDateTime.date()-this.endDateTime.subtract(1,"minute").date());return(1!==e||0!==this.endDateTime.hour()||0!==this.endDateTime.minute())&&!!e}get isAllDayEvent(){return!(!this.rawEvent.start.date||!this.rawEvent.end.date)||(!(this.isFirstDay||this.isLastDay||!this.daysLong||!this._globalConfig.showMultiDay)||(!this.rawEvent.start.dateTime||!this.rawEvent.end.dateTime)&&void 0)}splitIntoMultiDay(e,t){const n=[];let a=2;const i=Math.round(this.endDateTime.subtract(1,"minutes").endOf("day").diff(this.startDateTime.startOf("day"),"hours")/24);i&&(a=i);for(let i=0;i<a;i++){const s=JSON.parse(JSON.stringify(e.rawEvent));s.addDays=i,s.daysLong=a,s._isFirstDay=0===i,s._isLastDay=i===a-1&&i>0;const r=new po(s,this._globalConfig);o().startOf("day").add(this._globalConfig.maxDaysToShow,"days").isAfter(r.startDateTime)&&o().startOf("day").subtract(1,"minute").isBefore(r.startDateTime)&&"Event"===t&&n.push(r),"Calendar"===t&&n.push(r)}return n}get titleColor(){return this.entityConfig.eventTitleColor?this.entityConfig.eventTitleColor:"var(--primary-text-color)"}get title(){return this.rawEvent.summary?this.rawEvent.summary:this.entityConfig.eventTitle?this.entityConfig.eventTitle:this._globalConfig.eventTitle}get description(){return new RegExp("^Observance","i").test(this.rawEvent.description)?"":this.rawEvent.description}get startTimeToShow(){const e=this.startDateTime;return this._globalConfig._showPastEvents||!o(e).isBefore(o().startOf("day"))||this._globalConfig.startDaysAhead<0?e:o().startOf("day")}get daysToSort(){return this.startTimeToShow.format("YYYYMMDD")}get location(){return this.rawEvent.location?this.rawEvent.location.split(" ").join("+"):""}get address(){return this.rawEvent.location?this.rawEvent.location.split(",")[0]:""}get visibility(){return this.rawEvent.visibility}}function vo(e,t){const n=t.states[e];return void 0===e?null:n&&n.attributes.icon||"mdi:circle"}function _o(e,t,n){const a=void 0!==t.entityConfig.color?t.entityConfig.color:e.eventTitleColor;let{icon:i}=t.entityConfig;return i&&"undefined"!==i||(i=vo(t.entityConfig.entity,n)),e.showEventIcon&&null!==i?Ce`<ha-icon class="event-icon" style="color: ${a};" icon="${i}"></ha-icon>`:Ce``}function fo(e,t){return e.disableCalLink?Ce``:Ce`<div class="calIconSelector">
			<ha-icon-button
				.path=${"M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1M17,12H12V17H17V12Z"}
				style="--mdc-icon-color: ${e.calDateColor}"
				onClick="window.open('https://calendar.google.com/calendar/r/month/${t.format("YYYY")}/${t.format("MM")}/1'), '${e.linkTarget}'"
			>
			</ha-icon-button>
		</div>`}function go(e,t,n,a){const i=0==e.maxDaysToShow?e.maxDaysToShow:e.maxDaysToShow-1,s=n?n.startOf("day"):o().add(e.startDaysAhead,"day").startOf("day"),r=a?a.endOf("day"):o().add(i+e.startDaysAhead,"day").endOf("day"),d=[];for(let e=s;e.isBefore(r);e=e.add(1,"day"))d.push(e);return d.map(n=>{let a=!1;for(let e=0;e<t.length;e++)t[e].startDateTime.isSame(n,"day")&&(a=!0);if(!a){const i={eventClass:"",config:"",start:{dateTime:n.endOf("day")},end:{dateTime:n.endOf("day")},summary:e.noEventText,isFinished:!1},s=new po(i,e);s.isEmpty=!0,t.push(s),a=!1}}),t}function yo(e){return e.format("LL").replace(e.format("YYYY"),"").replace(/\s\s+/g," ").trim().replace(/[??]\./,"").replace(/de$/,"").replace(/b\.$/,"").trim().replace(/,$/g,"")}function Mo(e,t){if(!0!=!e.showMultiDayEventParts&&(!1!==t.addDays||void 0!==t.daysLong)){if(!0===e.showMultiDayEventParts&&!1!==t.addDays&&t.daysLong)return Ce`(${t.addDays+1}/${t.daysLong})`;if(!0===e.showMultiDayEventParts&&!1===t.addDays&&t.daysLong){const e=o(t.startTimeToShow).diff(t.startDateTime,"day");return Ce`(${e+1}/${t.daysLong})`}return Ce``}}function ko(e){return/<[a-z]+\d?(\s+[\w-]+=("[^"]*"|'[^']*'))*\s*\/?>|&#?\w+;/i.test(e)}function wo(e,t){const n=(new DOMParser).parseFromString(e,"text/html").body.textContent||"";return n.length>t?n.substring(0,t)+"...":e}function Do(e,t,n,a){const i=void 0!==t.entityConfig.color?t.entityConfig.color:e.eventTitleColor,s=t.isRunning?"running":"",o=t.isDeclined?"line-through":"none";let{title:r}=t;return!ko(t.title)&&e.titleLength&&t.title.length>e.titleLength&&(r=t.title.slice(0,e.titleLength)+"..."),e.disableEventLink||void 0===t.htmlLink||null===t.htmlLink?Ce`
			<div
				class="event-title ${s} ${a}"
				style="text-decoration: ${o};color: ${i}"
			>
				${_o(e,t,n)} ${r} ${Mo(e,t)}
			</div>
		`:Ce`
			<a href="${t.htmlLink}" style="text-decoration: ${o};" target="${e.linkTarget}">
				<div class="event-title ${s} ${a}" style="color: ${i}">
					${_o(e,t,n)} <span>${r} ${Mo(e,t)} </span>
				</div>
			</a>
		`}function bo(e,t){if(t.location&&e.showLocation&&!e.disableCalLocationLink){const n=t.location,a=n.startsWith("http")?n:"https://maps.google.com/?q="+n;return Ce`
			<a
				href=${a}
				target="${e.linkTarget}"
				class="location-link"
				style="--location-link-size: ${e.locationTextSize}%"
			>
				<ha-icon
					class="event-location-icon"
					style="--location-icon-color: ${e.locationIconColor}"
					icon="mdi:map-marker"
				></ha-icon
				>&nbsp;
			</a>
		`}return Ce``}function xo(e,t){if(t.description){let{description:n}=t;return ko(t.description)&&(e.descLength&&(n=wo(t.description,e.descLength)),n=ho(n)),!ko(t.description)&&e.descLength&&t.description.length>e.descLength&&(n=t.description.slice(0,e.descLength)),Ce`<div
			class="calDescription"
			style="--description-color: ${e.descColor}; --description-size: ${e.descSize}%"
		>
			- ${n}
		</div>`}return Ce`;`}var Lo,To={exports:{}};var Yo,Eo=(Lo||(Lo=1,To.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d/,a=/\d\d/,i=/\d\d?/,s=/\d*[^-_:/,()\s\d]+/,o={},r=function(e){return(e=+e)+(e>68?1900:2e3)},d=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return 0===n?0:"+"===t[0]?-n:n}(e)}],u=function(e){var t=o[e];return t&&(t.indexOf?t:t.s.concat(t.f))},c=function(e,t){var n,a=o.meridiem;if(a){for(var i=1;i<=24;i+=1)if(e.indexOf(a(i,0,t))>-1){n=i>12;break}}else n=e===(t?"pm":"PM");return n},m={A:[s,function(e){this.afternoon=c(e,!1)}],a:[s,function(e){this.afternoon=c(e,!0)}],Q:[n,function(e){this.month=3*(e-1)+1}],S:[n,function(e){this.milliseconds=100*+e}],SS:[a,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[i,d("seconds")],ss:[i,d("seconds")],m:[i,d("minutes")],mm:[i,d("minutes")],H:[i,d("hours")],h:[i,d("hours")],HH:[i,d("hours")],hh:[i,d("hours")],D:[i,d("day")],DD:[a,d("day")],Do:[s,function(e){var t=o.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var a=1;a<=31;a+=1)t(a).replace(/\[|\]/g,"")===e&&(this.day=a)}],w:[i,d("week")],ww:[a,d("week")],M:[i,d("month")],MM:[a,d("month")],MMM:[s,function(e){var t=u("months"),n=(u("monthsShort")||t.map(function(e){return e.slice(0,3)})).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[s,function(e){var t=u("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,d("year")],YY:[a,function(e){this.year=r(e)}],YYYY:[/\d{4}/,d("year")],Z:l,ZZ:l};function h(n){var a,i;a=n,i=o&&o.formats;for(var s=(n=a.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(t,n,a){var s=a&&a.toUpperCase();return n||i[a]||e[a]||i[s].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(e,t,n){return t||n.slice(1)})})).match(t),r=s.length,d=0;d<r;d+=1){var l=s[d],u=m[l],c=u&&u[0],h=u&&u[1];s[d]=h?{regex:c,parser:h}:l.replace(/^\[|\]$/g,"")}return function(e){for(var t={},n=0,a=0;n<r;n+=1){var i=s[n];if("string"==typeof i)a+=i.length;else{var o=i.regex,d=i.parser,l=e.slice(a),u=o.exec(l)[0];d.call(t,u),e=e.replace(u,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var n=e.hours;t?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(r=e.parseTwoDigitYear);var a=t.prototype,i=a.parse;a.parse=function(e){var t=e.date,a=e.utc,s=e.args;this.$u=a;var r=s[1];if("string"==typeof r){var d=!0===s[2],l=!0===s[3],u=d||l,c=s[2];l&&(c=s[2]),o=this.$locale(),!d&&c&&(o=n.Ls[c]),this.$d=function(e,t,n,a){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var i=h(t)(e),s=i.year,o=i.month,r=i.day,d=i.hours,l=i.minutes,u=i.seconds,c=i.milliseconds,m=i.zone,p=i.week,v=new Date,_=r||(s||o?1:v.getDate()),f=s||v.getFullYear(),g=0;s&&!o||(g=o>0?o-1:v.getMonth());var y,M=d||0,k=l||0,w=u||0,D=c||0;return m?new Date(Date.UTC(f,g,_,M,k,w,D+60*m.offset*1e3)):n?new Date(Date.UTC(f,g,_,M,k,w,D)):(y=new Date(f,g,_,M,k,w,D),p&&(y=a(y).week(p).toDate()),y)}catch(e){return new Date("")}}(t,r,a,n),this.init(),c&&!0!==c&&(this.$L=this.locale(c).$L),u&&t!=this.format(r)&&(this.$d=new Date("")),o={}}else if(r instanceof Array)for(var m=r.length,p=1;p<=m;p+=1){s[1]=r[p-1];var v=n.apply(this,s);if(v.isValid()){this.$d=v.$d,this.$L=v.$L,this.init();break}p===m&&(this.$d=new Date(""))}else i.call(this,e)}}}()),To.exports),So=t(Eo),$o={exports:{}};var Ho=(Yo||(Yo=1,$o.exports=function(e,t,n){t.prototype.isBetween=function(e,t,a,i){var s=n(e),o=n(t),r="("===(i=i||"()")[0],d=")"===i[1];return(r?this.isAfter(s,a):!this.isBefore(s,a))&&(d?this.isBefore(o,a):!this.isAfter(o,a))||(r?this.isBefore(s,a):!this.isAfter(s,a))&&(d?this.isAfter(o,a):!this.isBefore(o,a))}}),$o.exports),Ao=t(Ho);class Co{constructor(e,t){this.calendarDay=e,this._lp=t,this.ymd=o(e).format("YYYY-MM-DD"),this._allEvents=[]}get date(){return o(this.calendarDay)}set allEvents(e){this._allEvents=e}get allEvents(){return this._allEvents}}function zo(e){const t=[].concat(...e).reduce(function(e,t){return e[t.daysToSort]=e[t.daysToSort]||[],e[t.daysToSort].push(t),e},{});return Object.keys(t).map(function(e){return t[e]})}async function jo(e,t,n){const a=function(e,t){const n=t.startOf("month"),a=n.day(),i=[];let s=0;s=a-e.firstDayOfWeek>=0?0:7;for(let t=e.firstDayOfWeek-a-s;t<42-a+e.firstDayOfWeek-s;t++)i.push(new Co(n.add(t,"day"),t));return i}(e,n),{events:i}=await Fo(a[0].date,a[41].date,e,t,"Calendar");return a.map(e=>(i[0].map(t=>{t.startDateTime.isSame(e.date,"day")&&e.allEvents.push(t)}),e)),a}function No(e){const t=0==e.plannerDaysToShow?e.plannerDaysToShow:e.plannerDaysToShow-1;let n=o().startOf("day").add(e.startDaysAhead,"day");if(!e.plannerRollingWeek){let t=n.day()-e.firstDayOfWeek;t<0&&(t+=7),n=n.subtract(t,"day").startOf("day")}const a=n.endOf("day").add(t,"day");return{start:n,end:a}}async function Fo(e,t,n,a,i){const s="YYYY-MM-DDTHH:mm:ss",o=e.startOf("day").format(s),r=[],d=[],l=[];return n.entities.map(n=>{const i="string"==typeof n?{entity:n}:n,u=i.entity,c=0==i.maxDaysToShow?i.maxDaysToShow:i.maxDaysToShow-1,m=void 0===i.maxDaysToShow?t.endOf("day").format(s):e.endOf("day").add(c,"day").format(s),h=`calendars/${i.entity}?start=${o}&end=${m}`;l.push(a.callApi("GET",h).then(e=>(e.map(e=>{e.entity=i,e.calendarEntity=u,e.hassEntity=a.states[u]}),e)).then(e=>{r.push(...e)}).catch(e=>{d.push({name:i.name||u,error:e})}))}),await Promise.all(l),{failedEvents:d,events:Oo(r,n,i)}}function Oo(e,t,n){let a=0,i=e.reduce((e,a)=>{a.originCalendar=t.entities.find(e=>e.entity===a.entity.entity);const i=new po(a,t);if(i.isAllDayEvent&&i.endDateTime.isBefore(o().add(t.startDaysAhead,"day")))return e;if(!t.showDeclined&&i.isDeclined)return e;if(!1===t.showAllDayEvents&&i.isAllDayEvent)return e;if(i.entityConfig.blocklist&&i.title){if(new RegExp(i.entityConfig.blocklist,"i").test(i.title))return e}if(i.entityConfig.blocklistLocation&&i.location){if(new RegExp(i.entityConfig.blocklistLocation,"i").test(i.location))return e}if(i.entityConfig.allowlist&&i.title){if(!new RegExp(i.entityConfig.allowlist,"i").test(i.title))return e}if(i.entityConfig.allowlistLocation&&i.location){if(!new RegExp(i.entityConfig.allowlistLocation,"i").test(i.location))return e}if(i.entityConfig.startTimeFilter&&i.entityConfig.endTimeFilter&&!function(e,t,n){const a=t.split(":",1)[0],i=t.split(":",2)[1],s=e.startDateTime.set("hour",a).set("minutes",i),o=n.split(":",1)[0],r=n.split(":",2)[1],d=e.startDateTime.set("hour",o).set("minutes",r);return e.startDateTime.isBetween(s,d,"minute","[]")}(i,i.entityConfig.startTimeFilter,i.entityConfig.endTimeFilter))return e;if(t.showMultiDay&&i.isMultiDay){const t=i.splitIntoMultiDay(i,n);e=e.concat(t)}else e.push(i);return e},[]);if(t.hideFinishedEvents&&(i=i.filter(function(e){return 0==e.isFinished})),t.hideDuplicates){const e={},t=[];i.forEach(n=>{const a=n.title+"|"+n.startDateTime+"|"+n.endDateTime;e[a]?e[a].calendars.push(n.originName):(e[a]={event:n,calendars:[n.originName]},t.push(n))}),t.forEach(t=>{const n=t.title+"|"+t.startDateTime+"|"+t.endDateTime;e[n]&&(t.originName=e[n].calendars.join(", "))}),i=t}return i=function(e,t){const n=o(),a=[...e].sort((e,t)=>e.startDateTime.diff(t.startDateTime)),i={};return a.forEach(e=>{const t=o(e.startDateTime).format("YYYY-MM-DD");i[t]||(i[t]=[]),i[t].push(e)}),Object.values(i).forEach(e=>{const a=e.filter(e=>e.isAllDayEvent);a.sort((e,n)=>t.allDayBottom?e.title.localeCompare(n.title):-e.title.localeCompare(n.title)),"start"===t.sortBy&&e.filter(e=>!e.isAllDayEvent).sort((e,t)=>e.startDateTime.diff(t.startDateTime)),"milestone"===t.sortBy&&(e.filter(e=>!e.isAllDayEvent).sort((e,t)=>{const a=n.isBetween(e.startDateTime,e.endDateTime),i=n.isBetween(t.startDateTime,t.endDateTime);return a&&!i?-1:!a&&i?1:Math.min(Math.abs(e.startDateTime.diff(n)),Math.abs(e.endDateTime.diff(n)))-Math.min(Math.abs(t.startDateTime.diff(n)),Math.abs(t.endDateTime.diff(n)))}),e.filter(e=>!e.isAllDayEvent).sort((e,t)=>e.isFinished!==t.isFinished?e.isFinished?1:-1:e.isFinished?o(e.endDateTime).isBefore(t.endDateTime)?-1:1:0));const s=t.allDayBottom?[...e.filter(e=>!e.isAllDayEvent),...a]:[...a,...e.filter(e=>!e.isAllDayEvent)];i[o(e[0].startDateTime).format("YYYY-MM-DD")]=s}),Object.values(i).reduce((e,t)=>[...e,...t],[])}(i,t),t.maxEventCount&&(!t.softLimit&&t.maxEventCount<i.length||t.softLimit&&i.length>t.maxEventCount+t.softLimit)&&(a=i.length-t.maxEventCount,i.length=t.maxEventCount),[i,a]}o.extend(So),o.extend(Ao);class Po{constructor(e){this.refreshCalEvents=!0,this.lastCalendarUpdateTime=null,this.showLoader=!1,this.hiddenEvents=0,this.month=[],this.eventSummary=Ce`&nbsp;`,this.clickedDate=null,this.parent=e,this.selectedMonth=o(),this.monthToGet=o().format("MM")}get hasEvents(){return this.month.some(e=>e.allEvents.length>0)}async update(e,t){this.hass=e,this.config=t,(this.refreshCalEvents||!this.lastCalendarUpdateTime||o().diff(o(this.lastCalendarUpdateTime),"second")>this.config.refreshInterval)&&(this.lastCalendarUpdateTime=o(),this.showLoader=!0,this.parent.showLoader=!0,this.parent.requestUpdate(),this.month=await jo(this.config,this.hass,this.selectedMonth),this.refreshCalEvents=!1,this.showLoader=!1,this.parent.showLoader=!1,this.hiddenEvents=0,this.parent.requestUpdate())}render(){const e=o.weekdaysMin(!0).map(e=>Ce`<th class="cal" style="color:  ${this.config.calWeekDayColor};">${e}</th>`);return Ce`
			<div class="calTitleContainer">
				${this.getCalendarHeaderHTML()}${fo(this.config,this.selectedMonth)}
			</div>
			<div class="calTableContainer">
				<table class="cal" style="color: ${this.config.eventTitleColor};--cal-border-color:${this.config.calGridColor}">
					<thead>
						<tr>
							${e}
						</tr>
					</thead>
					<tbody>
						${this.getCalendarDaysHTML(this.month)}
					</tbody>
				</table>
			</div>
			<div class="summary-div">${this.eventSummary}</div>
		`}handleMonthChange(e){this.selectedMonth=this.selectedMonth.add(e,"month"),this.monthToGet=this.selectedMonth.format("M"),this.eventSummary=Ce`&nbsp;`,this.refreshCalEvents=!0,this.parent.requestUpdate()}getCalendarHeaderHTML(){return Ce`<div class="calDateSelector">
			<ha-icon-button
				class="prev"
				style="--mdc-icon-color: ${this.config.calDateColor}"
				.path=${ro}
				.label=${this.hass.localize("ui.common.previous")}
				@click="${()=>this.handleMonthChange(-1)}"
			>
			</ha-icon-button>
			<span class="date" style="text-decoration: none; color: ${this.config.calDateColor};">
				${this.selectedMonth.format("MMMM")} ${this.selectedMonth.format("YYYY")}
			</span>
			<ha-icon-button
				class="next"
				style="--mdc-icon-color: ${this.config.calDateColor}"
				.path=${lo}
				.label=${this.hass.localize("ui.common.next")}
				@click="${()=>this.handleMonthChange(1)}"
			>
			</ha-icon-button>
		</div>`}getCalendarDaysHTML(e){let t=!0;return this.config.showLastCalendarWeek||o(e[35].date).isSame(this.selectedMonth,"month")||(t=!1),e.map((e,n)=>{const a=o(e.date),i=a.isSame(this.selectedMonth,"month")?"":"differentMonth",s=a.isSame(o(),"day")?"currentDay":"",r=6==a.isoWeekday()?"weekendSat":"",d=7==a.isoWeekday()?"weekendSun":"",l=a.isSame(o(this.clickedDate),"day")?`background-color: ${this.config.calActiveEventBackgroundColor};`:"";return a.isSame(o(),"day")&&!this.clickedDate&&this.handleCalendarEventSummary(e,!1),n<35||t?Ce`
					${n%7==0?Ce`<tr class="cal"></tr>`:""}
					<td
						@click="${()=>this.handleCalendarEventSummary(e,!0)}"
						class="cal ${r} ${d} ${i}"
						style="${l} --cal-grid-color: ${this.config.calGridColor}; --cal-day-color: ${this.config.calDayColor}"
					>
						<div class="calDay">
							<div class="${s}" style="position: relative; top: 5%;">${e.date.date()}</div>
							<div class="iconDiv">${this.handleCalendarIcons(e)}</div>
						</div>
					</td>
					${n&&n%6==0?Ce`</tr>`:""}
				`:Ce``})}handleCalendarEventSummary(e,t){t&&(this.clickedDate=e.date);const n=e.allEvents;this.eventSummary=n.map(e=>{const t=void 0!==e.entityConfig.color?e.entityConfig.color:this.config.defaultCalColor,n=e.isFinished&&this.config.dimFinishedEvents?"opacity: "+this.config.finishedEventOpacity+"; filter: "+this.config.finishedEventFilter+";":"";if(e.isAllDayEvent){const a=e.isDeclined?"summary-fullday-div-declined":"summary-fullday-div-accepted";return Ce`<div class="${a}" style="border-color:  ${t}; ${n}">
					<div aria-hidden="true">
						${Do(this.config,e,this.hass,"Calendar")} ${bo(this.config,e)}
						${this.config.calShowDescription?xo(this.config,e):""}
					</div>
				</div>`}{const a=this.config.showHours?Ce`<div class="hours">
							${e.startDateTime.format("LT")}${this.config.showEndTime?`-${e.endDateTime.format("LT")}`:""}
						</div>`:"",i=e.isDeclined?"bullet-event-div-declined":"bullet-event-div-accepted";return Ce`
					<div class="summary-event-div" style="color: ${t}; ${n}">
						<div class="${i}" style="border-color: ${t}"></div>
						${a} - ${Do(this.config,e,this.hass,"Calendar")}
						${bo(this.config,e)}
						${this.config.calShowDescription?xo(this.config,e):""}
					</div>
				`}}),this.parent.requestUpdate()}handleCalendarIcons(e){const t=[],n=[];return e.allEvents.map(e=>{let{icon:t}=e.entityConfig;t&&0!==t.length||(t=vo(e.entity.entity_id,this.hass));const a=n.findIndex(n=>n.icon===t&&n.color===e.entityConfig.color);-1===a&&n.push({icon:t,color:e.entityConfig.color})}),n.sort((e,t)=>e.icon.localeCompare(t.icon)),n.map(e=>{const n=Ce`<span>
				<ha-icon icon="${e.icon}" class="calIcon" style="color: ${e.color};"></ha-icon>
			</span>`;t.push(n)}),t}}class Vo{constructor(e){this.events=[],this.hiddenEvents=0,this.failedEvents=[],this.lastEventsUpdateTime=null,this.errorMessage=null,this.isUpdating=!1,this.parent=e}get hasEvents(){return this.events.length>0}async update(e,t){if(this.config=t,this.hass=e,!this.isUpdating&&(!this.lastEventsUpdateTime||o().diff(this.lastEventsUpdateTime,"seconds")>this.config.refreshInterval)){this.parent.showLoader=!0,this.parent.requestUpdate(),this.hiddenEvents=0,this.isUpdating=!0;try{const{events:e,failedEvents:t}=await async function(e,t){const n=0==e.maxDaysToShow?e.maxDaysToShow:e.maxDaysToShow-1,a=o().startOf("day").add(e.startDaysAhead,"day"),i=a.endOf("day").add(n,"day");return await Fo(a,i,e,t,"Event")}(this.config,this.hass);this.events=e[0],this.hiddenEvents=e[1],this.failedEvents=t,this.config.showNoEventDays&&(this.events=go(this.config,this.events)),this.events=zo(this.events)}catch(e){console.log(e),this.errorMessage=Ce`${Qs("errors.update_card")}
					<a
						href="https://docs.totaldebug.uk/atomic-calendar-revive/overview/faq.html"
						target="${this.config.linkTarget}"
						>See Here</a
					>`}this.lastEventsUpdateTime=o(),this.isUpdating=!1,this.parent.showLoader=!1,this.parent.requestUpdate()}}render(){if(this.errorMessage&&(!this.events||0===this.events.length))return this.errorMessage;if(!this.events)return this.errorMessage||Ce``;if(0===this.events.length&&(1==this.config.maxDaysToShow||0==this.config.maxDaysToShow))return Ce`${this.config.noEventText??Qs("common.noEventText")}`;if(0===this.events.length)return Ce`${this.config.noEventsForNextDaysText??Qs("common.noEventsForNextDaysText")}`;if(o(this.events[0][0]).isSame(o(),"day")&&this.events[0].length>1){let e=1;for(;e<this.events[0].length;)this.events[0][e].isFinished&&!this.events[0][e-1].isFinished?([this.events[0][e],this.events[0][e-1]]=[this.events[0][e-1],this.events[0][e]],e>1&&e--):e++}if(this.config.showNoEventsForToday&&this.events[0][0].startDateTime.isAfter(o().add(this.config.startDaysAhead,"day").startOf("day"),"day")&&this.events[0].length>0){const e={eventClass:"",config:"",start:{dateTime:o().endOf("day")},end:{dateTime:o().endOf("day")},summary:this.config.noEventText??Qs("common.noEventText"),isFinished:!1},t=new po(e,this.config);t.isEmpty=!0;const n=[];n.push(t),this.events.unshift(n)}let e=54;const t=this.events.map((t,n)=>{const a=this.getWeekNumberHTML(t,e);e=a.currentWeek;const i=t.map((e,t,a)=>{const i=0==t&&n>0?"daywrap":"",s=!(0!=n||!e.startDateTime.isAfter(o())||0!=t&&a[t-1].startDateTime.isAfter(o())),r=this.config.showCurrentEventLine&&s?Ce`<div class="eventBar">
								<hr class="event" style="--event-bar-color: ${this.config.eventBarColor} " />
							</div>`:"",d=void 0!==e.entityConfig.color?e.entityConfig.color:this.config.defaultCalColor,l=e.entityConfig.name&&this.config.showCalendarName?Ce`<div class="event-cal-name" style="color: ${d};">
								<ha-icon icon="mdi:calendar" class="event-cal-name-icon"></ha-icon>&nbsp;${e.originName}
							</div>`:"";let u=Ce``;if(0==n&&(e.isRunning&&this.config.showFullDayProgress&&e.isAllDayEvent||e.isRunning&&!e.isAllDayEvent&&this.config.showProgressBar)){const t=e.endDateTime.diff(e.startDateTime,"minutes"),n=100*o().diff(e.startDateTime,"minutes")/t/100;u=Ce`<progress
						style="--progress-bar: ${this.config.progressBarColor}; --progress-bar-bg: ${this.config.progressBarBackgroundColor};"
						value="${n}"
						max="1"
					></progress>`}const c=e.isFinished&&this.config.dimFinishedEvents?"opacity: "+this.config.finishedEventOpacity+"; filter: "+this.config.finishedEventFilter+";":"",m=this.config.showHours?Ce`<div class="hours">${this.getHoursHTML(this.config,e)}</div>`:Ce``;let h;if(this.config.showRelativeTime||this.config.showTimeRemaining){const t=o();h=Ce`<div class="relative-time time-remaining">
						${this.config.showRelativeTime&&e.startDateTime.isAfter(t,"minutes")?`(${e.startDateTime.fromNow()})`:this.config.showTimeRemaining&&e.startDateTime.isBefore(t,"minutes")&&e.endDateTime.isAfter(t,"minutes")?`${o.duration(e.endDateTime.diff(t)).humanize()}`:""}
					</div>`}else h=Ce``;const p=this.config.compactMode||t!=a.length-1?"":"padding-bottom: 8px;",v=!!this.config.showDatePerEvent||!(0!==t)?Ce`<div class="event-date-day">${e.startTimeToShow.format(this.config.eventDateFormat)}</div>`:Ce``,_=e.startTimeToShow.isSame(o(),"day")?"current-day":"",f=this.config.compactMode?"compact":"",g=this.config.showEventDate?"":"hide-date",y=!0===this.config.showEventDate?Ce`<div class="event-left ${_}">
								<!--Show the event date, see eventDateFormat-->
								${v}
							</div>`:Ce``;return Ce`<div
					class="single-event-container ${f} ${i} ${g}"
					style="${p}"
					@click="${t=>((e,t,n,a,i)=>{let s;if(n.tap_action&&(s=n.tap_action),s||(s={action:"more-info"}),s.confirmation&&(!s.confirmation.exemptions||!s.confirmation.exemptions.some(e=>e.user===t.user?.id))&&!confirm(s.confirmation.text||`Are you sure you want to ${s.action}?`))return;const o=new CustomEvent("hass-action",{bubbles:!0,composed:!0,detail:{config:s,action:a}});"more-info"===s.action&&i&&(o.detail.config={...s,entity:i}),e.dispatchEvent(o)})(t.currentTarget,this.hass,this.config,"tap",e.entity.entity_id)}"
				>
					${r} ${y}
					<div class="event-right" style="${c}">
						<div class="event-right-top">
							${Do(this.config,e,this.hass,"Event")}
							<div class="event-location">
								${function(e,t){if(t.location&&e.showLocation){if(e.disableLocationLink)return Ce`<ha-icon
				class="event-location-icon"
				style="--location-icon-color: ${e.locationIconColor}"
				icon="mdi:map-marker"
			></ha-icon
			>&nbsp;${t.address}`;{const n=t.location,a=n.startsWith("http")?n:"https://maps.google.com/?q="+n;return Ce`<a
			href=${a}
			target="${e.linkTarget}"
			class="location-link"
			style="--location-link-size: ${e.locationTextSize}%"
		>
			<ha-icon
				class="event-location-icon"
				style="--location-icon-color: ${e.locationIconColor}"
				icon="mdi:map-marker"
			>
			</ha-icon
			>&nbsp;${t.address}
		</a>`}}return Ce``}(this.config,e)} ${l} ${this.config.hoursOnSameLine?m:""}
							</div>
						</div>
						<div class="event-right-bottom">${this.config.hoursOnSameLine?"":m} ${h}</div>
						${function(e,t){if(e.showDescription&&t.description){let{description:n}=t;return ko(t.description)&&(e.descLength&&(n=wo(t.description,e.descLength)),n=ho(n)),!ko(t.description)&&e.descLength&&t.description.length>=e.descLength&&(n=Ce`${t.description.slice(0,e.descLength)}`),Ce`<div class="event-right">
			<div class="event-main">
				<div
					class="event-description"
					style="--description-color: ${e.descColor}; --description-size: ${e.descSize}%"
				>
					${n}
				</div>
			</div>
		</div>`}return Ce``}(this.config,e)} ${u}
					</div>
				</div>`});return Ce`${this.config.showWeekNumber?a.currentWeekHTML:""}${i}`}),n=this.config.showHiddenText&&this.hiddenEvents>0?this.hiddenEvents+" "+(this.config.hiddenEventText??Qs("common.hiddenEventText")):"";return Ce`${t} <span class="hidden-events">${n}</span>`}getHoursHTML(e,t){const n=o();return t.isEmpty?Ce`<div>&nbsp;</div>`:!e.showAllDayHours&&t.isAllDayEvent?Ce``:!1===e.showEndTime?t.isAllDayEvent?Ce`${e.fullDayEventText??Qs("common.fullDayEventText")}`:Ce`${t.startDateTime.format("LT")}`:t.isAllDayEvent&&t.isMultiDay&&t.startDateTime.isAfter(n,"day")||t.isAllDayEvent&&t.isMultiDay&&(t.startDateTime.isBefore(n,"day")||t.endDateTime.isAfter(n,"day"))?Ce`
				${e.fullDayEventText??Qs("common.fullDayEventText")},
				${(e.untilText??Qs("common.untilText")).toLowerCase()} ${yo(t.endDateTime)}
			`:t.isAllDayEvent?Ce`${e.fullDayEventText??Qs("common.fullDayEventText")}`:t.startDateTime.isBefore(n,"day")&&t.endDateTime.isAfter(n,"day")?Ce`${e.untilText??Qs("common.untilText")} ${yo(t.endDateTime)}`:t.startDateTime.isBefore(n,"day")&&t.endDateTime.isSame(n,"day")||t.isLastDay&&t.endDateTime.isSame(n,"day")?Ce`${e.untilText??Qs("common.untilText")} ${t.endDateTime.format("LT")} `:!t.startDateTime.isBefore(n,"day")&&t.endDateTime.isAfter(t.startDateTime,"day")?Ce`${t.startDateTime.format("LT")},
			${(e.untilText??Qs("common.untilText")).toLowerCase()} ${yo(t.endDateTime)}
			${t.endDateTime.format("HH:mm")}`:Ce`${t.startDateTime.format("LT")} - ${t.endDateTime.format("LT")} `}getWeekNumberHTML(e,t){let n=Ce``;return t!=e[0].startDateTime.isoWeek()?(t=e[0].startDateTime.isBefore(o())?o().isoWeek():e[0].startDateTime.isoWeek(),n=Ce`<div class="week-number">${Qs("ui.common.week")} ${t.toString()}</div>`,{currentWeekHTML:n,currentWeek:t}):{currentWeekHTML:n,currentWeek:t}}}class Wo{constructor(e){this.refreshCalEvents=!0,this.lastCalendarUpdateTime=null,this.showLoader=!1,this.hiddenEvents=0,this.month=[],this.clickedDate=null,this.parent=e,this.selectedMonth=o(),this.monthToGet=o().format("MM")}get hasEvents(){return this.month.some(e=>e.allEvents.length>0)}async update(e,t){this.hass=e,this.config=t,(this.refreshCalEvents||!this.lastCalendarUpdateTime||o().diff(o(this.lastCalendarUpdateTime),"second")>this.config.refreshInterval)&&(this.lastCalendarUpdateTime=o(),this.showLoader=!0,this.parent.showLoader=!0,this.parent.requestUpdate(),this.month=await jo(this.config,this.hass,this.selectedMonth),this.refreshCalEvents=!1,this.showLoader=!1,this.parent.showLoader=!1,this.hiddenEvents=0,this.parent.requestUpdate())}render(){const e=o.weekdaysMin(!0).map(e=>Ce`<th class="cal" style="color:  ${this.config.calWeekDayColor};">${e}</th>`);return Ce`
			<div class="calTitleContainer">
				${this.getCalendarHeaderHTML()}${fo(this.config,this.selectedMonth)}
			</div>
			<div class="calTableContainer">
				<table class="cal" style="color: ${this.config.eventTitleColor};--cal-border-color:${this.config.calGridColor}">
					<thead>
						<tr>
							${e}
						</tr>
					</thead>
					<tbody>
						${this.getCalendarDaysHTML(this.month)}
					</tbody>
				</table>
			</div>
		`}handleMonthChange(e){this.selectedMonth=this.selectedMonth.add(e,"month"),this.monthToGet=this.selectedMonth.format("M"),this.refreshCalEvents=!0,this.parent.requestUpdate()}getCalendarHeaderHTML(){return Ce`<div class="calDateSelector">
			<ha-icon-button
				class="prev"
				style="--mdc-icon-color: ${this.config.calDateColor}"
				.path=${ro}
				.label=${this.hass.localize("ui.common.previous")}
				@click="${()=>this.handleMonthChange(-1)}"
			>
			</ha-icon-button>
			<span class="date" style="text-decoration: none; color: ${this.config.calDateColor};">
				${this.selectedMonth.format("MMMM")} ${this.selectedMonth.format("YYYY")}
			</span>
			<ha-icon-button
				class="next"
				style="--mdc-icon-color: ${this.config.calDateColor}"
				.path=${lo}
				.label=${this.hass.localize("ui.common.next")}
				@click="${()=>this.handleMonthChange(1)}"
			>
			</ha-icon-button>
		</div>`}getCalendarDaysHTML(e){if(!e||e.length<35)return Ce``;let t=!0;return this.config.showLastCalendarWeek||o(e[35].date).isSame(this.selectedMonth,"month")||(t=!1),e.map((e,n)=>{const a=o(e.date),i=a.isSame(this.selectedMonth,"month")?"":"differentMonth",s=a.isSame(o(),"day")?"currentDay":"",r=6==a.isoWeekday()?"weekendSat":"",d=7==a.isoWeekday()?"weekendSun":"";return n<35||t?Ce`
					${n%7==0?Ce`<tr class="cal"></tr>`:""}
					<td
						class="cal ${r} ${d} ${i}"
						style="--cal-grid-color: ${this.config.calGridColor}; --cal-day-color: ${this.config.calDayColor}"
					>
						<div class="calDay inline">
							<div class="${s}" style="position: relative; top: 5%;">${e.date.date()}</div>
							<div class="events">
								${e.allEvents.map(e=>{const t=void 0!==e.entityConfig.color?e.entityConfig.color:this.config.defaultCalColor,n=e.isAllDayEvent,a=n?this.config.eventTitleColor:t,i=n?`background-color: ${t};`:"",s=n?"":`${e.startDateTime.format("LT")}${this.config.showEndTime?` - ${e.endDateTime.format("LT")}`:""}`,o=e.entityConfig.icon&&"undefined"!==e.entityConfig.icon?e.entityConfig.icon:vo(e.entity.entity_id||e.entityConfig.entity,this.hass),r=o?Ce`<ha-icon class="event-icon" style="color: ${a};" icon="${o}"></ha-icon>`:"";return Ce`
										<div
											class="event-bar ${n?"all-day":""}"
											style="${i} color: ${a};"
											@click="${t=>{t.stopPropagation(),this.parent.selectedEvent=e,this.parent.requestUpdate()}}"
										>
											${r} ${n?"":Ce`<span class="time">${s}</span>`}
											<span class="title">${e.title}</span>
										</div>
									`})}
							</div>
						</div>
					</td>
					${n&&n%6==0?Ce`</tr>`:""}
				`:Ce``})}}class Bo{constructor(e){this.events=[],this.hiddenEvents=0,this.failedEvents=[],this.lastEventsUpdateTime=null,this.errorMessage=Ce``,this.isUpdating=!1,this.parent=e}get hasEvents(){return this.events.length>0}async update(e,t){if(this.config=t,this.hass=e,!this.isUpdating&&(!this.lastEventsUpdateTime||o().diff(this.lastEventsUpdateTime,"seconds")>this.config.refreshInterval)){this.parent.showLoader=!0,this.parent.requestUpdate(),this.hiddenEvents=0,this.isUpdating=!0;try{const e={...this.config};e.plannerRollingWeek||(e._showPastEvents=!0);const{events:t,failedEvents:n}=await async function(e,t){const{start:n,end:a}=No(e);return await Fo(n,a,e,t,"Event")}(e,this.hass);this.events=t[0],this.hiddenEvents=t[1],this.failedEvents=n;const{start:a,end:i}=No(this.config);this.events=go(e,this.events,a,i.add(1,"day")),this.events=zo(this.events)}catch(e){console.log(e),this.errorMessage=Ce`${Qs("errors.update_card")}
					<a
						href="https://docs.totaldebug.uk/atomic-calendar-revive/overview/faq.html"
						target="${this.config.linkTarget}"
						>See Here</a
					>`}this.lastEventsUpdateTime=o(),this.isUpdating=!1,this.parent.showLoader=!1,this.parent.requestUpdate()}}render(){if(this.errorMessage!==Ce``&&(!this.events||0===this.events.length))return this.errorMessage;if(!this.events)return this.errorMessage;const e=(this.config.entities??[]).map(e=>{const t="string"==typeof e?{entity:e}:e,n=this.hass.states[t.entity];return{id:t.entity,name:t.name||n?.attributes?.friendly_name||t.entity,color:t.color||"var(--primary-color)"}}),t=e.map(e=>Ce`<div class="planner-header">
				<div class="day-name" style="color: ${e.color}">${e.name}</div>
			</div>`),n=this.events.map(t=>{const n=t[0].startDateTime,a=Ce`<div class="planner-day-label">
				<div class="day-name">${n.format("dddd")}</div>
				<div class="day-date">${n.format("D MMM")}</div>
			</div>`,i=e.map(e=>{const n=t.filter(t=>t.entity.entity_id===e.id&&!t.isEmpty);return Ce`<div class="planner-cell">
					${n.map(e=>Ce`
							<div class="planner-event">
								${Do(this.config,e,this.hass,"Planner")}
								<div class="planner-event-time">
									${e.isAllDayEvent?Qs("common.fullDayEventText"):`${e.startDateTime.format("LT")}${this.config.showEndTime?` - ${e.endDateTime.format("LT")}`:""}`}
								</div>
							</div>
						`)}
				</div>`});return Ce`<div class="planner-row">${a} ${i}</div>`});return Ce`
			<div class="planner-container">
				<div class="planner-header-row">
					<div class="planner-corner"></div>
					${t}
				</div>
				${n}
			</div>
		`}}const Io=G`
	.cal-card {
		cursor: default;
		padding: 16px;
		height: var(--card-height);
		overflow: auto;
	}

	/* START HEADER */
	.header {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		vertical-align: middle;
		align-items: center;
		margin: 0 8px 0 2px;
	}
	.header-name {
		color: var(--ha-card-header-color, var(--primary-text-color));
		font-family: var(--ha-card-header-font-family, inherit);
		font-size: var(--ha-card-header-font-size, 24px);
		font-weight: var(--ha-card-header-font-weight, 400);
		letter-spacing: -0.012em;
		line-height: 32px;
		padding: 4px 8px 12px 0px;
	}
	.header-date {
		font-size: 1.3rem;
		font-weight: 400;
		color: var(--primary-text-color);
		padding: 4px 8px 12px 0px;
		line-height: 32px;
		float: right;
	}
	.header-name.compact,
	.header.compact,
	.header-date.compact {
		font-size: 1rem;
		padding: 1px !important;
	}
	/* END HEADER */

	/* START EVENT MODE */
	.single-event-container {
		display: grid;
		grid-template-columns: 0.5fr 2fr;
		grid-gap: 10px;
	}
	.event-left,
	.event-right {
	}
	.event-left {
		grid-column: 1;
		justify-content: center;
		color: var(--primary-text-color);
		display: flex;
		flex-direction: row;
	}
	.event-date-day,
	.event-date-month,
	.event-date-week-day {
		margin-right: 4px;
	}
	.week-number {
		color: var(--primary-color);
		-webkit-border-radius: 5px;
		border-radius: 5px;
		border: 2px solid;
		margin: 5px 0;
		width: 6em;
		text-align: center;
	}
	.event-right {
		grid-column: 2;
		color: var(--primary-text-color);
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.event-right-top,
	.event-right-bottom {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	.event-title {
		user-select: text;
	}
	.event-title.running {
		user-select: text;
	}
	.event-title.Calendar {
		display: inline-block;
	}
	.event-location {
		text-align: right;
		display: inline-block;
		vertical-align: top;
		user-select: text;
		overflow-wrap: anywhere;
	}
	.event-location-icon {
		--mdc-icon-size: 15px;
		color: var(--location-icon-color);
		height: 15px;
		width: 15px;
		margin-top: -2px;
	}
	.location-link {
		text-decoration: none;
		color: var(--accent-color);
		font-size: var(--location-link-size);
		user-select: text;
	}
	.hours {
		color: var(--time-color);
		font-size: var(--time-size);
		display: inline-block;
	}
	.relative-time {
		color: var(--time-color);
		font-size: var(--time-size);
		float: right;
		padding-left: 5px;
	}
	.event-description {
		display: flex;
		justify-content: space-between;
		padding: 0px 5px 0 5px;
		color: var(--description-color);
		font-size: var(--description-size);
		overflow-wrap: anywhere;
		user-select: text;
	}
	.hidden-events {
		color: var(--primary-text-color);
	}
	.daywrap {
		padding: 2px 0 4px 0;
		border-top: 1px solid;
	}
	.daywrap > td {
		padding-top: 8px;
	}
	.hide-date {
		grid-template-columns: 0 1fr !important;
	}
	.compact {
		padding: 1px 1px 1px 1px;
		vertical-align: top;
	}
	/* END EVENT MODE */

	hr.event {
		color: var(--event-bar-color);
		margin: -8px 0px 2px 0px;
		border-width: 2px 0 0 0;
	}

	.single-event-container > .eventBar:first-child {
		margin-top: 8px;
	}

	.event-cal-name-icon {
		--mdc-icon-size: 15px;
	}

	.eventBar {
		margin-top: -10px;
		margin-bottom: 0px;
		grid-column: 1 / -1;
	}

	progress {
		border-radius: 2px;
		width: 100%;
		height: 3px;
		box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
	}
	progress::-webkit-progress-bar {
		background-color: var(--progress-bar-bg);
		border-radius: 2px;
	}
	progress::-webkit-progress-value {
		background-color: var(--progress-bar);
		border-radius: 2px;
	}

	ha-button-toggle-group {
		color: var(--primary-color);
	}

	.calTitleContainer {
		padding: 0px 8px 8px 8px;
	}

	.calIconSelector {
		--mdc-icon-button-size: var(--button-toggle-size, 48px);
		--mdc-icon-size: var(--button-toggle-icon-size, 24px);
		border-radius: 4px 4px 4px 4px;
		border: 1px solid var(--primary-color);
		float: right;
		display: inline-flex;
		text-align: center;
	}
	.calDateSelector {
		--mdc-icon-button-size: var(--button-toggle-size, 48px);
		--mdc-icon-size: var(--button-toggle-icon-size, 24px);
		display: inline-flex;
		text-align: center;
	}
	div.calIconSelector ha-icon-button,
	div.calDateSelector ha-icon-button {
		color: var(--primary-color);
	}
	div.calDateSelector .prev {
		border: 1px solid var(--primary-color);
		border-radius: 3px 0px 0px 3px;
	}
	div.calDateSelector .date {
		border: 1px solid var(--primary-color);
		border-radius: 0px 0px 0px 0px;
		padding: 4px 2px 2px 4px;
	}
	div.calDateSelector .next {
		border: 1px solid var(--primary-color);
		border-radius: 0px 4px 4px 0px;
	}

	ha-icon-button {
		--mdc-icon-size: 20px;
		--mdc-icon-button-size: 25px;
	}

	table.cal {
		margin-left: 0px;
		margin-right: 0px;
		border-spacing: 10px 5px;
		border-collapse: collapse;
		width: 100%;
		table-layout: fixed;
	}

	thead th.cal {
		color: var(--secondary-text-color);
		border: 1px solid --cal-border-color;
		font-size: 11px;
		font-weight: 400;
		text-transform: uppercase;
	}

	td.cal {
		padding: 5px 5px 5px 5px;
		border: 1px solid var(--cal-grid-color);
		text-align: center;
		vertical-align: middle;
		width: 100%;
		color: var(--cal-day-color);
	}

	.calDay {
		height: 38px;
		font-size: 95%;
		max-width: 38px;
		margin: auto;
	}

	.calDay .iconDiv {
		white-space: nowrap;
	}

	.calendar-icon-container {
		display: inline-block;
		margin-right: 10px; /* adjust this value to fit your layout */
	}

	.calendar-icon-container:nth-child(4n) {
		margin-right: 0;
	}

	.currentDay {
		position: relative;
		width: 20px;
		height: 20px;
		background-color: var(--primary-color);
		color: var(--text-primary-color) !important;
		text-align: center;
		line-height: 20px;
		border-radius: 50%;
		display: inline-block;
	}

	.weekendSat {
		background-color: rgba(255, 255, 255, 0.05);
	}

	.weekendSun {
		background-color: rgba(255, 255, 255, 0.15);
	}

	.differentMonth {
		opacity: 0.35;
	}

	tr.cal {
		width: 100%;
	}

	.calTableContainer {
		width: 100%;
	}

	.summary-div {
		font-size: 90%;
	}

	.summary-event-div {
		padding-top: 3px;
	}

	.bullet-event-div-accepted {
		-webkit-border-radius: 8px;
		border-radius: 8px;
		border: 4px solid;
		height: 0;
		width: 0;
		display: inline-block;
		vertical-align: middle;
	}

	.bullet-event-div-declined {
		-webkit-border-radius: 8px;
		border-radius: 8px;
		border: 1px solid;
		height: 6px;
		width: 6px;
		display: inline-block;
		vertical-align: middle;
	}

	.bullet-event-span {
		overflow: hidden;
		white-space: nowrap;
		display: inline-block;
		vertical-align: middle;
		margin: 0 5px;
		text-decoration: none !important;
	}

	.summary-fullday-div-accepted {
		-webkit-border-radius: 5px;
		border-radius: 5px;
		border: 2px solid;
		border-left: 7px solid;
		padding: 0 4px;
		margin: 5px 0;
		line-height: 16px;
	}

	.summary-fullday-div-declined {
		-webkit-border-radius: 5px;
		border-radius: 5px;
		border: 1px solid;
		padding: 0 4px;
		margin: 5px 0;
		height: 18px;
		line-height: 16px;
	}

	.calDescription {
		display: flex;
		justify-content: space-between;
		padding: 0px 5px 0 5px;
		color: var(--description-color);
		font-size: var(--description-size);
	}

	.calMain {
		flex-direction: row nowrap;
		display: inline-block;
		vertical-align: top;
	}

	.calIcon {
		--mdc-icon-size: 10px;
		width: 10px;
		height: 10px;
		padding-top: 0px;
		margin-top: -10px;
		margin-right: -1px;
		margin-left: -1px;
	}

	.event-icon {
		--mdc-icon-size: 15px !important;
		padding-top: 0px;
		margin-top: -10px;
		margin-right: -1px;
		margin-left: -1px;
	}

	.loader {
		border: 4px solid #f3f3f3;
		border-top: 4px solid grey;
		border-radius: 50%;
		width: 14px;
		height: 14px;
		animation: spin 2s linear infinite;
		float: left;
	}

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}

	/* PLANNER VIEW */
	.planner-container {
		display: flex;
		flex-direction: column;
		overflow-x: auto;
	}

	.planner-header-row {
		display: flex;
		flex-direction: row;
	}

	.planner-corner {
		min-width: 150px;
		width: 150px;
		flex-shrink: 0;
		border-bottom: 1px solid var(--divider-color);
	}

	.planner-header {
		flex: 1;
		text-align: center;
		font-weight: bold;
		padding: 8px;
		min-width: 150px;
		border-bottom: 1px solid var(--divider-color);
	}

	.planner-row {
		display: flex;
		flex-direction: row;
		border-bottom: 1px solid var(--divider-color);
	}

	.planner-day-label {
		min-width: 150px;
		width: 150px;
		flex-shrink: 0;
		padding: 8px;
		border-right: 1px solid var(--divider-color);
		border-left: 1px solid var(--divider-color);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		overflow: hidden;
	}

	.day-name {
		font-weight: bold;
	}

	.day-date {
		font-size: 0.9em;
		opacity: 0.8;
	}

	.planner-cell {
		flex: 1;
		min-width: 150px;
		padding: 4px;
		border-right: 1px solid var(--divider-color);
	}

	.planner-event {
		background-color: var(--cal-event-background-color, rgba(0, 0, 0, 0.1));
		border-radius: 4px;
		padding: 4px;
		margin-bottom: 4px;
		font-size: 0.9em;
	}

	.planner-event-time {
		font-size: 0.8em;
		opacity: 0.8;
	}

	/* INLINE CALENDAR VIEW */
	.calDay.inline {
		height: auto !important;
		max-width: none !important;
		min-height: 100px;
		display: flex;
		flex-direction: column;
		align-items: stretch;
		text-align: left;
		margin: 0;
	}

	.calDay.inline .events {
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 2px;
		padding: 2px;
		overflow-y: auto;
		max-height: 150px;
	}

	.event-bar {
		padding: 2px 4px;
		border-radius: 3px;
		font-size: 0.8em;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		cursor: pointer;
		margin-bottom: 2px;
		display: flex;
		align-items: center;
		gap: 4px;
	}

	.event-bar:hover {
		opacity: 0.8;
	}

	.event-bar .time {
		font-weight: bold;
	}

	.event-bar .title {
		flex: 1;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.event-bar .event-icon {
		--mdc-icon-size: 14px;
	}

	/* MODAL */
	.modal {
		display: none;
		position: fixed;
		z-index: 1000;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		overflow: auto;
		background-color: rgba(0, 0, 0, 0.4);
	}

	.modal.open {
		display: block;
	}

	.modal-content {
		background-color: var(--card-background-color, white);
		margin: 15% auto;
		padding: 20px;
		border: 1px solid #888;
		width: 80%;
		max-width: 500px;
		border-radius: 8px;
		position: relative;
		color: var(--primary-text-color);
	}

	.modal-close {
		color: #aaa;
		float: right;
		font-size: 28px;
		font-weight: bold;
		cursor: pointer;
	}

	.modal-close:hover,
	.modal-close:focus {
		color: black;
		text-decoration: none;
		cursor: pointer;
	}

	.modal-event-title {
		font-size: 1.5em;
		font-weight: bold;
		margin-bottom: 10px;
	}

	.modal-event-time {
		font-size: 1.1em;
		color: var(--secondary-text-color);
		margin-bottom: 10px;
	}
`;var Ro,Uo,Jo,qo,Zo;!function(e){e.language="language",e.system="system",e.comma_decimal="comma_decimal",e.decimal_comma="decimal_comma",e.space_comma="space_comma",e.none="none"}(Ro||(Ro={})),function(e){e.language="language",e.system="system",e.am_pm="12",e.twenty_four="24"}(Uo||(Uo={})),function(e){e.local="local",e.server="server"}(Jo||(Jo={})),function(e){e.language="language",e.system="system",e.DMY="DMY",e.MDY="MDY",e.YMD="YMD"}(qo||(qo={})),function(e){e.language="language",e.monday="monday",e.tuesday="tuesday",e.wednesday="wednesday",e.thursday="thursday",e.friday="friday",e.saturday="saturday",e.sunday="sunday"}(Zo||(Zo={})),o.extend(W),o.extend(C),o.extend(g),o.extend(L),o.extend(S),o.extend(w),o.extend(R),o.extend(p),o.extend(F),o.extend(u);let Ko=class extends Qe{constructor(){super(),this.showLoader=!1,this.content=Ce``,this.shouldUpdateHtml=!0,this.errorMessage=Ce``,this.modeToggle="",this.firstrun=!0,this.language=""}static async getConfigElement(){return document.createElement("atomic-calendar-revive-editor")}static getStubConfig(e){return function(e){const t=Object.keys(e.states).map(t=>({entity_id:t,stateObj:e.states[t]})).filter(e=>{const{stateObj:t}=e;return t.state&&t.attributes&&"calendar"===t.attributes.device_class||t.entity_id.includes("calendar")});return{type:"custom:atomic-calendar-revive",name:"Calendar",enableModeChange:!0,entities:[{entity:t[0]?.entity_id??"",icon:t[0]?.stateObj?.attributes?.icon??""}]}}(e)}setConfig(e){if(qs(this.hass),!e)throw new Error(Qs("errors.invalid_configuration"));if(!e.entities||!e.entities.length)throw new Error(Qs("errors.no_entities"));const t=JSON.parse(JSON.stringify(e));this._config={...Pn,...t},this.modeToggle=this._config.defaultMode,"string"==typeof this._config.entities&&(this._config.entities=[{entity:e.entities}]),this._config.entities.forEach((e,t)=>{"string"==typeof e&&(this._config.entities[t]={entity:e})})}render(){if(qs(this.hass),this.firstrun){this.language=void 0!==this._config.language?this._config.language:this.hass.locale?this.hass.locale.language.toLowerCase():this.hass.language.toLowerCase(),o.locale(this.language);const e=this.hass.locale?.time_format==Uo.am_pm?"hh:mma":this.hass.locale?.time_format==Uo.twenty_four?"HH:mm":o().localeData().longDateFormat("LT");o.updateLocale(this.language,{weekStart:this._config.firstDayOfWeek,formats:{LT:e}}),console.groupCollapsed(`%c atomic-calendar-revive %c ${Qs("common.version")}: 10.1.0`,"color: white; background: #484848; font-weight: 700;","color: white; background: #cc5500; font-weight: 700;"),console.log("'Language:'",`${this.language}`),console.log("'HASS Timezone:'",`${this.hass.config.time_zone}`),console.log("'DayJS Timezone:'",`${o.tz.guess()}`),console.groupEnd()}if(!this._config||!this.hass)return Ce``;if(this.updateCard(),this._config.hideCardIfNoEvents&&this.currentView&&!this.currentView.hasEvents&&!this.showLoader)return Ce``;const e=this._config.compactMode?"compact":"";return Ce`<ha-card
			class="cal-card"
			style="${this._config.compactMode?"line-height: 80%;":""} --card-height: ${this._config.cardHeight}"
		>
			${this.renderModal()}
			${this._config.name||this._config.showDate||this.showLoader&&this._config.showLoader?Ce` <div class="header ${e}">
						${this._config.name?Ce`<div
									class="header-name ${e}"
									style="color: ${this._config.nameColor};"
									@click="${()=>this.handleToggle()}"
								>
									${this._config.name}
								</div>`:""}
						${this.showLoader&&this._config.showLoader?Ce`<div class="loader"></div>`:""}
						${this._config.showDate?Ce`<div class="header-date ${e}">${function(e){let t=o().format(e.dateFormat);return e.startDaysAhead&&e.offsetHeaderDate&&(t=o().add(e.startDaysAhead,"day").format(e.dateFormat)),Ce`${t}`}(this._config)}</div>`:""}
					</div>`:""}
			<div class="cal-eventContainer" style="padding-top: 4px;">
				${this.currentView?this.currentView.render():Ce``}
			</div>
		</ha-card>`}renderModal(){if(!this.selectedEvent)return Ce``;const e=this.selectedEvent;return Ce`
			<div class="modal open" @click="${()=>this.selectedEvent=void 0}">
				<div class="modal-content" @click="${e=>e.stopPropagation()}">
					<span class="modal-close" @click="${()=>this.selectedEvent=void 0}">&times;</span>
					<div class="modal-event-title">${e.title}</div>
					<div class="modal-event-time">
						${e.isAllDayEvent?Qs("common.fullDayEventText"):`${e.startDateTime.format("LT")} - ${e.endDateTime.format("LT")}`}
					</div>
				</div>
			</div>
		`}async updateCard(){this.firstrun=!1,this.currentView&&("Event"!==this.modeToggle||this.currentView instanceof Vo)&&("Calendar"!==this.modeToggle||this.currentView instanceof Po)&&("Planner"!==this.modeToggle||this.currentView instanceof Bo)&&("Inline"!==this.modeToggle||this.currentView instanceof Wo)||("Event"===this.modeToggle?this.currentView=new Vo(this):"Calendar"===this.modeToggle?this.currentView=new Po(this):"Planner"===this.modeToggle?this.currentView=new Bo(this):"Inline"===this.modeToggle?this.currentView=new Wo(this):this.currentView=new Vo(this)),await this.currentView.update(this.hass,this._config)}handleToggle(){this._config.enableModeChange&&("Event"===this.modeToggle?(this.modeToggle="Calendar",this.requestUpdate()):"Calendar"===this.modeToggle&&(this.modeToggle="Event",this.requestUpdate()))}static get styles(){return Io}getCardSize(){return this._config.entities.length+1}_toggle(e){this.hass.callService("homeassistant","toggle",{entity_id:e.entity_id})}};e([at()],Ko.prototype,"hass",void 0),e([at()],Ko.prototype,"_config",void 0),e([at()],Ko.prototype,"content",void 0),e([at()],Ko.prototype,"showLoader",void 0),e([it()],Ko.prototype,"selectedEvent",void 0),Ko=e([et("atomic-calendar-revive")],Ko),function(e){const t=window;t.customCards=t.customCards||[],t.customCards.push({...e,preview:!0,documentationURL:"https://github.com/totaldebug/atomic-calendar-revive/"})}({type:"atomic-calendar-revive",name:"Atomic Calendar Revive",description:"An advanced calendar card for Home Assistant with Lovelace."});export{Ko as AtomicCalendarRevive};
