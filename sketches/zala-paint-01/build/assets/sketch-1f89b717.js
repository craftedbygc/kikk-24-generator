import"./p5.min-97db493f.js";import"./index-adf130ac.js";let i,f,g=[],A=60,q=100,k=0,G=15e3,B={color1:{value:"#fbb7cc",type:"color",displayName:"Top Base Color"},color2:{value:"#007ecc",type:"color",displayName:"Bottom Base Color"}};const z=.5*(Math.sqrt(3)-1),b=(3-Math.sqrt(3))/6;var F=[151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180];const P=new Array(512),D=new Array(512);function s(e,t,r){this.x=e,this.y=t,this.z=r}s.prototype.dot2=function(e,t){return this.x*e+this.y*t};s.prototype.dot3=function(e,t,r){return this.x*e+this.y*t+this.z*r};var E=[new s(1,1,0),new s(-1,1,0),new s(1,-1,0),new s(-1,-1,0),new s(1,0,1),new s(-1,0,1),new s(1,0,-1),new s(-1,0,-1),new s(0,1,1),new s(0,-1,1),new s(0,1,-1),new s(0,-1,-1)];function V(e){e>0&&e<1&&(e*=65536),e=Math.floor(e),e<256&&(e|=e<<8);for(var t=0;t<256;t++){var r;t&1?r=F[t]^e&255:r=F[t]^e>>8&255,P[t]=P[t+256]=r,D[t]=D[t+256]=E[r%12]}}function I(e,t){var r,l,n,c=(e+t)*z,o=Math.floor(e+c),a=Math.floor(t+c),d=(o+a)*b,u=e-o+d,m=t-a+d,h,y;u>m?(h=1,y=0):(h=0,y=1);var v=u-h+b,R=m-y+b,w=u-1+2*b,x=m-1+2*b;o&=255,a&=255;var S=D[o+P[a]],N=D[o+h+P[a+y]],j=D[o+1+P[a+1]],p=.5-u*u-m*m;p<0?r=0:(p*=p,r=p*p*S.dot2(u,m));var C=.5-v*v-R*R;C<0?l=0:(C*=C,l=C*C*N.dot2(v,R));var M=.5-w*w-x*x;return M<0?n=0:(M*=M,n=M*M*j.dot2(w,x)),70*(r+l+n)}function L(e,t,r,l,n,c){if(e.noFill(),c==="y")for(let o=0;o<=r;o++){let a=e.map(o,0,r,0,1),d=e.lerpColor(l,n,a);e.stroke(d),e.line(0,o,t,o)}else if(c==="x")for(let o=0;o<=t;o++){let a=e.map(o,0,t,0,1),d=e.lerpColor(l,n,a);e.stroke(d),e.line(o,0,o,r)}}function O(e){f.background(0),f.loadPixels();let t=0;for(let r=0;r<f.width;r++){let l=0;for(let n=0;n<f.height;n++){let c=I(t*15,l*33),o=f.map(c,0,1,0,150);f.set(r,n,f.color(o)),l+=.01}t+=.01}f.updatePixels()}function W({p:e,width:t,height:r}){V(Math.random()),e.pixelDensity(2),e.frameRate(A),i=e.createGraphics(t,r),i.pixelDensity(2),i.drawingContext.willReadFrequently=!0,e.drawingContext.willReadFrequently=!0,Y(),i.loadPixels(),f=e.createGraphics(t,r),f.pixelDensity(2),O(),f.loadPixels(),f.drawingContext.willReadFrequently=!0;const l=.008,n=10,c=3,o=25;for(let a=-20;a<t+20;a+=n)for(let d=-20;d<r+20;d+=n){let u=a+e.random(-o,o),m=d+e.random(-o,o);e.randomSeed(a*d+451.2);const h=Math.floor(e.random(5,16)),y={x:a,y:d,segments:[]};for(let v=h;v>0;v--){const w=(e.noise(u*l,m*l)-.2)*1.7*Math.PI*2,x=Math.cos(w)*c+u,S=Math.sin(w)*c+m;y.segments.push({x1:u,y1:m,x2:x,y2:S}),u=x,m=S}g.push(y)}}function Y(){i.background(0),L(i,i.width,i.height,i.color(B.color1.value),i.color(B.color2.value),"y")}function Q(e){if(k<G){let t=q;k+q>G&&(t=G-k),k+=t}for(let t=0;t<k;t++){e.randomSeed(t*50+t);const r=Math.floor(e.random(0,g.length)),l=Math.floor(e.random(0,i.width*i.height*4));e.stroke(i.pixels[l*4],i.pixels[l*4+1],i.pixels[l*4+2],255),e.strokeCap(e.SQUARE);for(let n=0;n<g[r].segments.length;n++){let c=5,o=3,a=e.map(n,0,g[r].segments.length,c,o);e.strokeWeight(a),e.line(g[r].segments[n].x1,g[r].segments[n].y1,g[r].segments[n].x2,g[r].segments[n].y2)}}}function X({p:e}){e.randomSeed(),e.tint(255,255),e.blendMode(e.BLEND),e.background(0,0,0),e.image(i,0,0),Q(e),e.blendMode(e.OVERLAY),e.tint(255,50),e.image(f,0,0)}let H="p5",J={gui:{output:!0}};export{J as buildConfig,X as draw,B as props,H as rendering,W as setup};
