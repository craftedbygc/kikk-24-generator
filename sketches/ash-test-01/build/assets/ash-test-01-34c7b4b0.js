let t={radius:{value:20,params:{min:1,max:200,step:1}},color:{value:"#0000ff"}},u=({canvas:e,context:l,width:i,height:a})=>{},d=({context:e,width:l,height:i,time:a,deltaTime:s})=>{e.fillStyle="#000000",e.fillRect(0,0,l,i);const r=t.radius.value+Math.sin(a*.005)*5;e.fillStyle=t.color.value,e.beginPath(),e.arc(l*.5,i*.5,r,0,2*Math.PI,!1),e.fill()},p=({width:e,height:l})=>{},f="2d",o="./exports",h={gui:{output:!0,size:.2}};export{h as buildConfig,o as exportDir,u as init,t as props,f as rendering,p as resize,d as update};
