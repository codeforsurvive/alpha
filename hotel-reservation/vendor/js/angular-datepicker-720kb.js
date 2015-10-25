/*!
 * Angular Datepicker v0.2.12
 *
 * Released by 720kb.net under the MIT license
 * www.opensource.org/licenses/MIT
 *
 * 2015-10-07
 */


!function(a,b){"use strict";var c=864e5,d=function(){return b.userAgent&&(b.userAgent.match(/Android/i)||b.userAgent.match(/webOS/i)||b.userAgent.match(/iPhone/i)||b.userAgent.match(/iPad/i)||b.userAgent.match(/iPod/i)||b.userAgent.match(/BlackBerry/i)||b.userAgent.match(/Windows Phone/i))?!0:void 0}(),e=function(a,b){return d?['<div class="_720kb-datepicker-calendar-header">','<div class="_720kb-datepicker-calendar-header-middle _720kb-datepicker-mobile-item _720kb-datepicker-calendar-month">','<select ng-model="month" title="{{ dateMonthTitle }}" ng-change="selectedMonthHandle(month)">','<option ng-repeat="item in months" ng-selected="month === item" ng-disabled=\'!isSelectableMaxDate(item + " " + day + ", " + year) || !isSelectableMinDate(item + " " + day + ", " + year)\' ng-value="item">',"{{ item }}","</option>","</select>","</div>","</div>",'<div class="_720kb-datepicker-calendar-header">','<div class="_720kb-datepicker-calendar-header-middle _720kb-datepicker-mobile-item _720kb-datepicker-calendar-month">','<select ng-model="mobileYear" title="{{ dateYearTitle }}" ng-change="setNewYear(mobileYear)">','<option ng-repeat="item in paginationYears" ng-selected="year === item" ng-value="item" ng-disabled="!isSelectableMinYear(item) || !isSelectableMaxYear(item)">',"{{ item }}","</option>","</select>","</div>","</div>"]:['<div class="_720kb-datepicker-calendar-header">','<div class="_720kb-datepicker-calendar-header-left">','<a href="javascript:void(0)" ng-click="prevMonth()" title="{{ buttonPrevTitle }}">',a,"</a>","</div>",'<div class="_720kb-datepicker-calendar-header-middle _720kb-datepicker-calendar-month">',"{{month}}&nbsp;",'<a href="javascript:void(0)" ng-click="showYearsPagination = !showYearsPagination">',"<span>","{{year}}","<i ng-class=\"{'_720kb-datepicker-calendar-header-closed-pagination': !showYearsPagination, '_720kb-datepicker-calendar-header-opened-pagination': showYearsPagination}\"></i>","</span>","</a>","</div>",'<div class="_720kb-datepicker-calendar-header-right">','<a href="javascript:void(0)" ng-click="nextMonth()" title="{{ buttonNextTitle }}">',b,"</a>","</div>","</div>"]},f=function(a,b){return['<div class="_720kb-datepicker-calendar-header" ng-show="showYearsPagination">','<div class="_720kb-datepicker-calendar-years-pagination">','<a ng-class="{\'_720kb-datepicker-active\': y === year, \'_720kb-datepicker-disabled\': !isSelectableMaxYear(y) || !isSelectableMinYear(y)}" href="javascript:void(0)" ng-click="setNewYear(y)" ng-repeat="y in paginationYears">',"{{y}}","</a>","</div>",'<div class="_720kb-datepicker-calendar-years-pagination-pages">','<a href="javascript:void(0)" ng-click="paginateYears(paginationYears[0])" ng-class="{\'_720kb-datepicker-item-hidden\': paginationYearsPrevDisabled}">',a,"</a>",'<a href="javascript:void(0)" ng-click="paginateYears(paginationYears[paginationYears.length -1 ])" ng-class="{\'_720kb-datepicker-item-hidden\': paginationYearsNextDisabled}">',b,"</a>","</div>","</div>"]},g=function(){return['<div class="_720kb-datepicker-calendar-days-header">','<div ng-repeat="d in daysInString">',"{{d}}","</div>","</div>"]},h=function(){return['<div class="_720kb-datepicker-calendar-body">','<a href="javascript:void(0)" ng-repeat="px in prevMonthDays" class="_720kb-datepicker-calendar-day _720kb-datepicker-disabled">',"{{px}}","</a>","<a href=\"javascript:void(0)\" ng-repeat=\"item in days\" ng-click=\"setDatepickerDay(item)\" ng-class=\"{'_720kb-datepicker-active': day === item, '_720kb-datepicker-disabled': !isSelectableMinDate(year + '/' + monthNumber + '/' + item ) || !isSelectableMaxDate(year + '/' + monthNumber + '/' + item) || !isSelectableDate(monthNumber, year, item)}\" class=\"_720kb-datepicker-calendar-day\">","{{item}}","</a>",'<a href="javascript:void(0)" ng-repeat="nx in nextMonthDays" class="_720kb-datepicker-calendar-day _720kb-datepicker-disabled">',"{{nx}}","</a>","</div>"]},i=function(a,b){var c=['<div class="_720kb-datepicker-calendar" ng-blur="hideCalendar()">',"</div>"],d=e(a,b),i=f(a,b),j=g(),k=h(),l=function(a){c.splice(c.length-1,0,a)};return d.forEach(l),i.forEach(l),j.forEach(l),k.forEach(l),c.join("")},j=function(b,e,f,g,h){var j=function(j,k,l){var m,n,o=l.selector,p=a.element(o?k[0].querySelector("."+o):k[0].children[0]),q='<b class="datepicker-default-button">&lang;</b>',r='<b class="datepicker-default-button">&rang;</b>',s=l.buttonPrev||q,t=l.buttonNext||r,u=l.dateFormat,v=j.dateDisabledDates,w=new Date,x=g("date")(w,"M"),y=!1,z=!1,A=f.DATETIME_FORMATS,B=i(s,t),C=function(){j.month=g("date")(new Date(j.dateMinLimit),"MMMM"),j.monthNumber=Number(g("date")(new Date(j.dateMinLimit),"MM")),j.day=Number(g("date")(new Date(j.dateMinLimit),"dd")),j.year=Number(g("date")(new Date(j.dateMinLimit),"yyyy"))},D=function(){j.month=g("date")(new Date(j.dateMaxLimit),"MMMM"),j.monthNumber=Number(g("date")(new Date(j.dateMaxLimit),"MM")),j.day=Number(g("date")(new Date(j.dateMaxLimit),"dd")),j.year=Number(g("date")(new Date(j.dateMaxLimit),"yyyy"))},E=function(){j.year=Number(j.year)-1},F=function(){j.year=Number(j.year)+1},G=function(){if(!j.isSelectableMinDate(j.year+"/"+j.monthNumber+"/"+j.day)||!j.isSelectableMaxDate(j.year+"/"+j.monthNumber+"/"+j.day))return!1;var a=new Date(j.year+"/"+j.monthNumber+"/"+j.day);l.dateFormat?p.val(g("date")(a,u)):p.val(a),p.triggerHandler("input"),p.triggerHandler("change")},H={add:function(a,b){var c;a.className.indexOf(b)>-1||(c=a.className.split(" "),c.push(b),a.className=c.join(" "))},remove:function(a,b){var c,d;if(-1!==a.className.indexOf(b)){for(d=a.className.split(" "),c=0;c<d.length;c+=1)if(d[c]===b){d=d.slice(0,c).concat(d.slice(c+1));break}a.className=d.join(" ")}}},I=function(){n=b.document.getElementsByClassName("_720kb-datepicker-calendar"),a.forEach(n,function(a,b){n[b].classList?n[b].classList.remove("_720kb-datepicker-open"):H.remove(n[b],"_720kb-datepicker-open")}),m.classList?m.classList.add("_720kb-datepicker-open"):H.add(m,"_720kb-datepicker-open")},J=function(a,b){var c,d,e,f,g=new Date(b,a,0).getDate(),h=new Date(b+"/"+a+"/1").getDay(),i=new Date(b+"/"+a+"/"+g).getDay(),k=[],l=[];for(j.days=[],c=1;g>=c;c+=1)j.days.push(c);if(0===h)j.prevMonthDays=[];else{for(e=h,f=1===Number(a)?12:a-1,c=1;c<=new Date(b,f,0).getDate();c+=1)k.push(c);j.prevMonthDays=k.slice(-e)}if(6>i){for(d=6-i,c=1;d>=c;c+=1)l.push(c);j.nextMonthDays=l}else j.nextMonthDays=[]},K=j.$watch("dateSet",function(a){a&&(w=new Date(a),j.month=g("date")(w,"MMMM"),j.monthNumber=Number(g("date")(w,"MM")),j.day=Number(g("date")(w,"dd")),j.year=Number(g("date")(w,"yyyy")),J(j.monthNumber,j.year),"true"!==j.dateSetHidden&&G())});j.nextMonth=function(){12===j.monthNumber?(j.monthNumber=1,F()):j.monthNumber+=1,j.month=g("date")(new Date(j.year,j.monthNumber-1),"MMMM"),J(j.monthNumber,j.year),j.dateMaxLimit&&x>j.monthNumber&&(j.isSelectableMaxDate(j.year+"/"+j.monthNumber+"/"+j.day)||D()),j.day=void 0},j.prevMonth=function(){1===j.monthNumber?(j.monthNumber=12,E()):j.monthNumber-=1,j.month=g("date")(new Date(j.year,j.monthNumber-1),"MMMM"),J(j.monthNumber,j.year),j.dateMinLimit&&(j.isSelectableMinDate(j.year+"/"+j.monthNumber+"/"+j.day)||C()),j.day=void 0},j.selectedMonthHandle=function(a){j.monthNumber=Number(g("date")(new Date("01 "+a+" 2000"),"MM")),J(j.monthNumber,j.year),G()},j.setNewYear=function(a){if(j.day=void 0,j.dateMaxLimit&&j.year<Number(a)){if(!j.isSelectableMaxYear(a))return}else if(j.dateMinLimit&&j.year>Number(a)&&!j.isSelectableMinYear(a))return;j.year=Number(a),J(j.monthNumber,j.year),j.paginateYears(a)},j.hideCalendar=function(){m.classList?m.classList.remove("_720kb-datepicker-open"):H.remove(m,"_720kb-datepicker-open")},j.setDatepickerDay=function(a){j.isSelectableDate(j.monthNumber,j.year,a)&&j.isSelectableMaxDate(j.year+"/"+j.monthNumber+"/"+a)&&j.isSelectableMinDate(j.year+"/"+j.monthNumber+"/"+a)&&(j.day=Number(a),G(),j.hideCalendar())},j.paginateYears=function(a){var b,c=[],e=10,f=10;for(j.paginationYears=[],d&&(e=50,f=50,j.dateMinLimit&&j.dateMaxLimit&&(a=new Date(j.dateMaxLimit).getFullYear(),e=a-new Date(j.dateMinLimit).getFullYear(),f=1)),b=e;b>0;b-=1)c.push(Number(a)-b);for(b=0;f>b;b+=1)c.push(Number(a)+b);j.dateMaxLimit&&c&&c.length&&!j.isSelectableMaxYear(Number(c[c.length-1])+1)?j.paginationYearsNextDisabled=!0:j.paginationYearsNextDisabled=!1,j.dateMinLimit&&c&&c.length&&!j.isSelectableMinYear(Number(c[0])-1)?j.paginationYearsPrevDisabled=!0:j.paginationYearsPrevDisabled=!1,j.paginationYears=c},j.isSelectableDate=function(a,b,c){var d=0;if(v&&v.length>0)for(d;d<=v.length;d+=1)if(new Date(v[d]).getTime()===new Date(a+"/"+c+"/"+b).getTime())return!1;return!0},j.isSelectableMinDate=function(a){return j.dateMinLimit&&new Date(j.dateMinLimit)&&new Date(a).getTime()<new Date(j.dateMinLimit).getTime()?!1:!0},j.isSelectableMaxDate=function(a){return j.dateMaxLimit&&new Date(j.dateMaxLimit)&&new Date(a).getTime()>new Date(j.dateMaxLimit).getTime()?!1:!0},j.isSelectableMaxYear=function(a){return j.dateMaxLimit&&a>new Date(j.dateMaxLimit).getFullYear()?!1:!0},j.isSelectableMinYear=function(a){return j.dateMinLimit&&a<new Date(j.dateMinLimit).getFullYear()?!1:!0},B=B.replace(/{{/g,h.startSymbol()).replace(/}}/g,h.endSymbol()),j.dateMonthTitle=j.dateMonthTitle||"Select month",j.dateYearTitle=j.dateYearTitle||"Select year",j.buttonNextTitle=j.buttonNextTitle||"Next",j.buttonPrevTitle=j.buttonPrevTitle||"Prev",j.month=g("date")(w,"MMMM"),j.monthNumber=Number(g("date")(w,"MM")),j.day=Number(g("date")(w,"dd")),j.dateMaxLimit?j.year=Number(g("date")(new Date(j.dateMaxLimit),"yyyy")):j.year=Number(g("date")(w,"yyyy")),j.months=A.MONTH,j.daysInString=["0","1","2","3","4","5","6"].map(function(a){return g("date")(new Date(new Date("06/08/2014").valueOf()+c*a),"EEE")}),p.after(e(a.element(B))(j)),m=k[0].querySelector("._720kb-datepicker-calendar"),p.on("focus click",function(){z=!0,I()}),p.on("focusout blur",function(){z=!1}),a.element(m).on("mouseenter",function(){y=!0}),a.element(m).on("mouseleave",function(){y=!1}),a.element(m).on("focusin",function(){y=!0}),a.element(b).on("click focus",function(){y||z||!m||j.hideCalendar()}),j.dateMinLimit&&!j.isSelectableMinYear(j.year)&&C(),j.dateMaxLimit&&!j.isSelectableMaxYear(j.year)&&D(),j.paginateYears(j.year),J(j.monthNumber,j.year),j.$on("$destroy",function(){K(),p.off("focus click focusout blur"),a.element(m).off("mouseenter mouseleave focusin"),a.element(b).off("click focus")}),l.hasOwnProperty("visibleOnLoad")&&I()};return{restrict:"AEC",scope:{dateSet:"@",dateMinLimit:"@",dateMaxLimit:"@",dateMonthTitle:"@",dateYearTitle:"@",buttonNextTitle:"@",buttonPrevTitle:"@",dateDisabledDates:"@",dateSetHidden:"@"},link:j}};a.module("720kb.datepicker",[]).directive("datepicker",["$window","$compile","$locale","$filter","$interpolate",j])}(angular,navigator);
