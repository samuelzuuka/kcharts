/*! kcharts - v1.3 - 2014-02-20 2:37:37 PM
* Copyright (c) 2014 数据可视化小组; Licensed  */
KISSY.add("gallery/kcharts/1.3/legend/index",function(t,e,i,n,a,r,o){function s(e){f||(f=t.Node("<div/>").css({visibility:"hidden",position:"fixed",left:"-9999em",top:0}).appendTo(m)),n.append(e,f);var i={width:n.outerWidth(f),height:n.outerHeight(f)};return f.html(""),i}function c(t,e){var i=this.el,n=i.icon,a=i.des;"cy"===t?n.transform("t0,"+e):"top"===t&&a.css("top",e+"px")}function l(t,e){var i=this.el,n=i.icon,a=i.des;"cx"===t?n.transform("t"+e+",0"):"left"===t&&a.css(t,e+"px")}function h(e){var i=e.get("disablestyle"),n={icon:{stroke:"#ccc",fill:"#ccc"},text:{color:"#ccc"}};n=t.isFunction(i)?t.mix(n,i(this,this.index)):t.mix(n,i);var a=this.icon,r=this.des;a.attr(n.icon),r.css(n.text)}function d(e,i){var n=e.get("enablestyle"),a={icon:{stroke:i.DEFAULT,fill:i.DEFAULT},text:{color:i.DEFAULT}};a=t.isFunction(n)?t.mix(a,n(this,this.index)):t.mix(a,n);var r=this.icon,o=this.des;r.attr(a.icon),o.css(a.text)}t.merge;var f,p,u=r.BASIC[1],g=window,x=g.Raphael,m=t.one(document.body),y={offset:[0,0],globalConfig:{interval:5}},v={initializer:function(){this._setupPaper(),this._setupCon();var e=(this.get("bbox"),this.get("paper"),this.get("align")),i=this.get("iconfn");i&&t.isFunction(i)&&(this.icon=i),this.align(e)},_setupPaper:function(){var t=this.get("paper");if(!t){var e=this.get("container");t=x(e[0],n.width(e),n.height(e)),this.set("paper",t)}"VML"==x.type||(t.canvas.style.zIndex=10)},bindEvent:function(){var e=this.get("els"),i=this;t.each(e,function(e){var n=e.icon,a=e.des,r={icon:n,text:a,index:e.index,el:e};t.each(["click","mouseover","mouseout"],function(t){n[t](function(){i.fire(t,r)}),a.on(t,function(){i.fire(t,r)})})})},unbindEvent:function(){var e=this.get("els");t.each(e,function(e){var i=e.icon,n=e.des;t.each(["click","mouseover","mouseout"],function(t){i["un"+t](),n.detach(t)})})},remmoveLegendIconAndText:function(){var e=this.get("els");t.each(e,function(t){var e=t.icon,i=t.des;e.remove(),i.remove()})},onframeend:function(){this.bindEvent()},_setupCon:function(){var t=this.get("container"),e=n.css(t,"position");"static"==e&&n.css(t,"position","relative")},item:function(t){var e=this.get("els");return e[t]},icon:function(t,e,i,n){var a,o=this.get("paper"),s=i;switch(n){case"triangle":a=r.triangle(t,e,{paper:o,size:s});break;case"linetriangle":a=r.linetriangle(t,e,{paper:o,size:s});break;case"rhomb":case"diamon":a=r.diamond(t,e,{paper:o,size:s});break;case"linerhomb":case"linediamond":a=r.linediamond(t,e,{paper:o,size:s});break;case"square":a=r.square(t,e,{paper:o,size:s});break;case"linesquare":a=r.linesquare(t,e,{paper:o,size:s});break;case"linecircle":a=r.linecircle(t,e,{paper:o,size:s});break;default:a=r.circle(t,e,{paper:o,size:s})}return a},align:function(t){var e={tl:"alignTopLeft",tc:"alignTopCenter",tr:"alignTopRight",rt:"alignRightTop",rm:"alignRightMiddle",rb:"alignRightBottom",bl:"alignBottomLeft",bc:"alignBottomCenter",br:"alignBottomRight",lt:"alignLeftTop",lm:"alignLeftMiddle",lb:"alignLeftBottom"},i=e[t]||"alignRight";this[i]()},alignTop:function(e,i){var a=this.get("container"),r=this.get("bbox"),c=this.get("offset"),f=(this.get("paper"),this.get("config")),p=this.get("globalConfig"),g=this,x=p.iconsize||[1,1],m=x*u||6,y=p.icontype,v=0,_=[];t.each(f,function(e,i){var n=e.text||"data"+i,a=t.Node('<span class="kcharts-legend-item">'+n+"</span>"),r=s(a);v+=r.width,_.push({el:a,width:r.width,height:r.height,zIndex:10,cursor:"pointer"})});var b=v,w=g.icon(-9999,9999,x,y),A=w.getBBox(),C=p.iconright||0,k=p.interval||0;w.remove(),b+=(A.width+C)*f.length+k*(f.length-1);var S=r.left+c[0],L=r.top+c[1]-2*m,T=S+(r.width-b)/2+m,I=L;if(i&&(I=I+4*m+r.height),"l"==e)T=0+c[0]+m;else if("r"==e){var z=n.width(a);T=z-b}var Y=[],E=this.get("alignhook"),X=this.get("iconAttrHook"),G=this.get("spanAttrHook"),R=[],P=this.get("anim"),D=P?n.width(a):0,F={icontype:y,iconsize:m,iconright:C};t.each(f,function(e,i){E&&(F=E.call(g,F,i));var r=T,o=I;r+=D;var c=g.icon(r,o,x,e.icontype||F.icontype),f=c.getBBox(),p={};t.mix(p,e,!0,["DEFAULT","HOVER"]);var u={fill:p.DEFAULT};X&&(u=t.merge({fill:p.DEFAULT},X.call(g,i))),u.stroke=u.fill,c.attr(u);var m=e.text||"data"+i,y=n.create('<span class="kcharts-legend-item"></span>');n.html(y,m);var v,_,b=s(y);y=t.Node('<span class="kcharts-legend-item">'+m+"</span>"),v=T+F.iconsize+F.iconright,_=I-(f.height/2+(b.height-f.height)/2),v+=D;var w={left:v+"px",top:_+"px",position:"absolute",zIndex:10,cursor:"pointer"};p.DEFAULT&&(w.color=p.DEFAULT),G&&(w=t.merge(w,G.call(g,i))),y.css(w),y.appendTo(a),T+=b.width+2*F.iconsize+k+F.iconright;var A={icon:c,des:y,index:i,disable:function(){h.call(A,g,e)},enable:function(){d.call(A,g,e)}};Y.push(A),P&&R.push({el:A,frame:l,from:{cx:0,left:v},to:{cx:-D,left:v-D}})}),this.set("els",Y),P?(P.endframe=function(){g.onframeend()},o.AnimateObject(R,P)):g.onframeend()},alignTopLeft:function(){this.alignTop("l")},alignTopCenter:function(){this.alignTop("c")},alignTopRight:function(){this.alignTop("r")},alignRight:function(t){this.alignLeft(t,!0)},alignRightTop:function(){this.alignRight("t")},alignRightMiddle:function(){this.alignRight("m")},alignRightBottom:function(){this.alignRight("b")},alignBottomLeft:function(){this.alignTop("l",!0)},alignBottomCenter:function(){this.alignTop("c",!0)},alignBottomRight:function(){this.alignTop("r",!0)},alignLeft:function(e,i){var a=this.get("container"),r=this.get("bbox"),l=this.get("offset"),f=(this.get("paper"),this.get("config")),p=this.get("globalConfig"),g=this,x=p.iconsize||[1,1],m=x*u||6,y=p.icontype,v=0,_=f[0],b=g.icon(-9999,-9999,x,y),w=b.getBBox(),A=f.length,C=p.iconright||0,k=p.interval;b.remove();var S=_.text||"data",L=t.Node('<span class="kcharts-legend-item">'+S+"</span>"),T=s(L),I=Math.max(T.height,w.height);v+=I*A+k*(A-1);var z,Y,E,X,G=0,R=[];t.each(f,function(e,i){var n=t.Node('<span class="kcharts-legend-item">'+e.text+"</span>"),a=s(n);e.text||"data"+i,a.width>G&&(G=a.width),R.push({el:n,width:a.width,height:a.height})}),G+=C,i?(z=r.left+r.width+l[0],Y=r.top+l[1],E=z+m,X=Y):(z=r.left+l[0],Y=r.top+l[1],E=z,X=Y),"m"==e?X=r.top+(r.height-v)/2:"b"==e&&(X=r.top+r.height-v);var P=[],D=this.get("alignhook"),F=this.get("iconAttrHook"),B=this.get("spanAttrHook"),N=[],M=this.get("anim"),O=M?n.height(a):0,$={icontype:y,iconright:C};t.each(f,function(e,n){D&&($=D.call(g,$,n));var r,o;i?(r=E+l[0],o=X+l[1]):(r=E-G-m+l[0],o=X+l[1]),o+=O;var s=g.icon(r,o,x,e.icontype||$.icontype),f=s.getBBox(),p=R[n],u={};t.mix(u,e,!0,["DEFAULT","HOVER"]);var y={fill:u.DEFAULT};F&&(y=t.merge(y,F.call(g,n))),y.stroke=y.fill,s.attr(y);var v,_,b=t.Node('<span class="kcharts-legend-item">'+e.text+"</span>");i?(v=E+m+f.width+l[0],_=X-(f.height/2+(T.height-f.height)/2)+l[1]):(v=E+l[0]-G+$.iconright,_=X-(f.height/2+(p.height-f.height)/2)+l[1]),_+=O;var w={left:v+"px",top:_+"px",position:"absolute",zIndex:10,cursor:"pointer"};u.DEFAULT&&(w.color=u.DEFAULT),B&&(w=t.merge(w,B.call(g,n))),b.css(w),b.appendTo(a);var A=Math.max(p.height,f.height);X+=A+k;var C={icon:s,des:b,index:n,disable:function(){h.call(C,g,e)},enable:function(){d.call(C,g,e)}};P.push(C),M&&N.push({el:C,frame:c,from:{cy:0,top:_},to:{cy:-O,top:_-O}})}),this.set("els",P),M?(M.endframe=function(){g.onframeend()},o.AnimateObject(N,M)):g.onframeend()},alignLeftTop:function(){this.alignLeft("t")},alignLeftMiddle:function(){this.alignLeft("m")},alignLeftBottom:function(){this.alignLeft("b")},destroy:function(){this.unbindEvent(),this.remmoveLegendIconAndText()}};return e.extend?p=e.extend(v):(p=function(e){e=t.merge(y,e),this.set(e),this.initializer()},t.extend(p,e,v)),p},{requires:["base","node","dom","event","gallery/kcharts/1.3/icons/index","gallery/kcharts/1.3/animate/index","gallery/kcharts/1.3/raphael/index"]});