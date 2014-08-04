/*!build time : 2014-08-04 1:35:41 PM*/
KISSY.add("kg/kcharts/2.0.2/piechart/util",function(a,b,c,d){function e(a){function b(a){for(var f=0,g=a.length;g>f;f++)d.call(a[f])==e?b(a[f]):c.push(a[f])}var c=[],d=Object.prototype.toString,e=d.call(a);return b(a),c}function f(b,c){function d(b,f){for(var g=0,h=b.length;h>g;g++)a.isArray(b[g])?d(b[g],f++):c(b[g])&&(e[f]||(e[f]=[]),e[f].push(b[g]))}var e=[];return d(b,0),e}function g(b,c,d,e){function f(b,d){for(var e=0,g=b.length;g>e;e++)if(a.isArray(b[e].data)){var j=d.push(a.mix({},b[e],!0,["label"]));d[j].data=[],f(b[e].data,d[j].data)}else{var k=b[e].data,l=k/i;c(k,l)?d.push(b[e]):h+=b[e].data}}var g=[],h=0,i=k(b);return f(b,g),d===!0&&g.push({label:e,data:h}),g}function h(a){function b(a){for(var c,d=[],e=0,f=a.length;f>e;e++)"object"==typeof a[e].data&&d.push(1+b(a[e].data));return c=d.length?Math.max.apply(null,d):0}var c=b(a);return c+1}function i(a,b){for(var c=0,d=0,e=a.length;e>d;d++){var f=b(a[d]);f&&(c+=f)}return c}function j(b){return i(b,function(b){return b.value&&a.isNumber(b.value)?b.value:0})}function k(b){for(var c=0,d=0,e=b.length;e>d;d++)c+=a.isArray(b[d].data)?k(b[d].data):b[d].data;return c}function l(a){function b(a,f,g){for(var h=0,i=a.length;i>h;h++){var j;if(j=g?g:h+1,w(a[h].data)){var l=k(a[h].data);a[h].value=l,d[f]||(d[f]=[]),d[f].push(a[h]),e[j-1]||(e[j-1]=[]),e[j-1].push(a[h]),b(a[h].data,f+1,j)}else{if(a[h].value=a[h].data,d[f]||(d[f]=[]),d[f].push(a[h]),c-1>f){var m=f+1;for(a[h].crossdepth=f;c>m;)d[m]||(d[m]=[]),d[m].push(a[h]),m++}e[j-1]||(e[j-1]=[]),e[j-1].push(a[h])}}}var c,d=[],e=[],f={};return c=h(a),b(a,0),f.groups=d,f.set=e,f}function m(a,b){var c,d=this.el.get("start"),e=this.prev,f=this.el.get("donutIndex");f&&(d=e.el.get("end")),c=d-b,this.el.set("start",d),this.el.set("end",c)}function n(a,c){var d=c.get("rs"),e=[],f=c.get("interval")||2,g=c.get("paper"),h=c.get("cx"),i=c.get("cy"),k=c.get("pathcfg"),l=!!c.get("donut"),n=c.get("initdeg");void 0==n&&(n=90);for(var o=0,p=a.length;p>o;o++)for(var q=g.set(),r=j(a[o]),s=0,t=0,u=a[o].length;u>t;t++){var v,w,x=a[o],y=x[t],z="number"==typeof y.crossdepth;if(!(z&&p-1>o)){v=o?z?0==y.crossdepth?[d[o]]:[d[y.crossdepth-1]+f,d[o]]:[d[o-1]+f,d[o]]:d[o],l&&1==p&&(v=[d[0],d[1]]),y.el=new b({paper:g,cx:h,cy:i,r:v,start:n,end:n-1,pathcfg:k,framedata:y}),w=y.el.get("$path"),q.push(w),y.el.set("group",q),y.el.set("groupLength",p),y.el.set("framedata",y);var A=[];if(z)for(var B=y.crossdepth;p>B;)A.push(B),B++;else A.push(o);y.el.set("groupIndex",A),y.el.set("donutIndex",t),y.el.set("label",y.label||""),e.push(y.el),function(a){y.el.on("mouseout",function(){c.fire("mouseout",{sector:a})}),y.el.on("mouseover",function(){c.fire("mouseover",{sector:a})}),y.el.on("click",function(){c.fire("click",{sector:a})})}(y.el),y.frame=m,y.from||(y.from={}),y.to||(y.to={}),y.percent=y.value/r,y.from.deg=0,y.to.deg=t==u-1?360-s:360*y.percent,s+=360*y.percent,y.prev=t>0?x[t-1]:x[u-1],y.next=u-1>t?x[t+1]:x[0]}}return e}function o(a,b){for(var c=b.get("paper"),d=0,e=a.length;e>d;d++)for(var f=c.set(),g=0,h=a[d].length;h>g;g++){var i=a[d][g],j=i.el,k=j.get("$path");f.push(k),j.set("set",f)}}function p(a){var b;return(!a||0>a||a>1)&&(b=.1),b}function q(a,b,c){if(c||(c=0),a){this.color=a;var e,f,g,h,i,j=d.getRGB(a);e=d.rgb2hsb(j),f=e.h,g=e.s,h=e.b,i=(g-c)/b,this.step=i,this.h=f,this.s=g,this.b=h}}function r(a,b,e){for(var f=(b.get("paper"),b.get("color")),g=b.get("theme"),h=new c({themeCls:g||"ks-chart-default"}),i=f&&f.initial,j=i&&d.getRGB(i),k=f&&p(f.min),l=new q(j,e,k),m=0,n=j,o=b.get("gradient"),r=0,s=a.length;s>r;r++)for(var t=a[r][0].color,u=a[r].length,v=new q(t,u),w=0,x=a[r].length;x>w;w++){var y,z=a[r][w],A=z.el,B=A.get("framedata"),C=A.get("$path");if(z.color)y=z.color;else{var D;if(D=v.getColor())y=D;else{var E=l.getColor();y=E?E:h.getColor(r+w).DEFAULT}}A.set("fill",y),C.attr("fill",y);var F=B.gradientcolor||n;o&&C.attr("gradient",m+B.to.deg/2+"-"+F+"-"+y),m+=B.to.deg,n=y}}function s(b){b=f(b,function(a){var b=a.el.get("$path");return a.hide?(b.hide(),!1):(b.show(),!0)});for(var c=0,d=b.length;d>c;c++)for(var e=b[c],g=i(e,function(b){return b.value&&!b.hide&&a.isNumber(b.value)?b.value:0}),h=0,j=0,k=e.length;k>j;j++){{var l=e[j];l.el.get("$path")}l.percent=l.value/g,l.to.deg=j==k-1?360-h:360*l.percent,h+=360*l.percent,l.prev=j>0?e[j-1]:e[k-1],l.next=k-1>j?e[j+1]:e[0]}}function t(a){for(a%=360;0>a;)a+=360;return a>=0&&90>=a||a>270&&360>=a?!0:!1}function u(a){var b=l(a.get("data")),c=n(b.groups,a),d=(a.get("color"),a.get("hsb"),e(b.groups));return o(b.set,a),r(b.set,a,d.length),{$sectors:c,groups:b.groups,set:b.set,framedata:d}}function v(a,b,c){return c||(c=5),Math.abs(a-b)<c}var w=a.isArray;q.prototype.getColor=function(){var a;return this.color&&(a="hsb("+[this.h,this.s-=this.step,this.b].join(",")+")"),a};var x={initPath:u,fillColor:r,adjustFrameData:s,isRightAngel:t,filterdata:g,closeto:v};return x},{requires:["kg/kcharts/2.0.2/piechart/sector","kg/kcharts/2.0.2/tools/color/index","kg/kcharts/2.0.2/raphael/index"]});