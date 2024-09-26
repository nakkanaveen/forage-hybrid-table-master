(this["webpackJsonpforage-hybrid-table"]=this["webpackJsonpforage-hybrid-table"]||[]).push([[0],{878:function(e,t,r){"use strict";r.r(t);var a=r(0),i=r.n(a),l=r(21),n=r.n(l),s=r(346),c=r.n(s),d=r(441),o=r(354),b=r(426),m=r(50);const u=m.b.div`
  //Fix Display Here
  /* max-width: 1120px;
  height: 230px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly; */
  
  .custom-filters {
    display: flex;
    flex-direction: column;
    align-items: left;
  }

  .custom-filter-item {
    display: flex;
    align-items: center;
    margin: 0.2rem 0rem;
  }

  .custom-filter-item:last-child{
    margin-bottom: 2rem;
  }

  .custom-filter-item p{
    width: 150px;
  }

  .custom-filter-item .select-filter{
    background-color: #e0e0e0;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    width: 180px;
  }

  .show-filter-select-box {
    margin: 0.5rem 0rem;
    width: 170px;
  }

  table {
    width: 100%;

    th {
      color: var(--text-title);
      padding: 1rem 0rem;
      text-align: center;
      line-height: 1rem;
      font-weight: 600;
    }

    td {
      text-align: center;
    }
  }

  button {
    margin: 0.5rem;
    font-weight: 600;
    font-family: "Poppins", sans-serif;
    color: #000;
  }

  button.selected {
    margin: 0.5rem;
    font-weight: 600;
    font-family: "Poppins", sans-serif;
    color: #fff;
    background-color: var(--green);
  }

  button.selected {
    margin: 0.5rem;
    font-weight: 600;
    font-family: "Poppins", sans-serif;
    color: #fff;
    background-color: var(--green);
  }

  button.tutorial-button{
    margin-left: 2rem;
    background-color: var(--orange);
  }
  
  .tutorial-button a{
    color: #fafafa;
    text-decoration: none;
  }

  .tutorial-button:hover{
    background-color: var(--orange-dark);
  }

  .chart-title {
    text-align: center;
    font-size: 1.25rem;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 500;
    line-height: 1.6;
    letter-spacing: 0.0075em;
    padding: 0.6rem 0 0.6rem 0;
  }

  .chart-sub-title {
    text-align: center;
    background-color: var(--orange);
    padding: 0.6rem 0 0.6rem 0;
    font-weight: bold;
    font-size: 0.9rem;
  }

  .chart-container {
    margin: auto;
  }

  .chart-box {
    border: 0;
	  border-radius: 2px;
	  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }

  .top-characteristic {
    color: var(--green);
    font-weight: bold;
    font-size: 0.9rem;
  }

`;var f=r(911),j=r(910),h=r(278),g=r(577),p=r(578),x=r(124),O=r(203),y=r(580);const v=m.b.header`
  
`,k=m.b.div`
  .footer {
    display: grid;
    grid-template-columns: 1fr;
    margin: 1rem;
  }
`;var N=r(7);function w(){return Object(N.jsx)(v,{children:Object(N.jsx)(k,{children:Object(N.jsxs)("div",{className:"footer",children:[Object(N.jsx)("span",{children:"All the information were gathered from the University of Florida Corn Silage and Forage Field Day WebSite."}),Object(N.jsxs)("span",{children:["Visit the"," ",Object(N.jsx)("b",{children:Object(N.jsxs)("a",{href:"https://programs.ifas.ufl.edu/forage/",target:"_blank",rel:"noopener noreferrer",children:[" ","UF/IFAS Forage Team",""]})})," and the ",Object(N.jsx)("b",{children:Object(N.jsxs)("a",{href:"https://animal.ifas.ufl.edu/extension/courses/csfd/",target:"_blank",rel:"noopener noreferrer",children:["","Corn Silage and Forage Field Day",""]})})," ","for more information."]}),Object(N.jsxs)("span",{children:["Contact your ",Object(N.jsx)("b",{children:Object(N.jsx)("a",{href:"https://directory.ifas.ufl.edu/extprogram?pageID=3&p=BB",target:"_blank",rel:"noopener noreferrer",children:"Local Extension Agent"})})," or reach out to us through ",Object(N.jsx)("b",{children:Object(N.jsx)("a",{href:"mailto: forages@ifas.ufl.edu",children:"forages@ifas.ufl.edu"})}),"."]})]})})})}function S(){const[e,t]=Object(a.useState)([]),[r,i]=Object(a.useState)(!1),[l,n]=Object(a.useState)([]),[s,m]=Object(a.useState)([]),[v,k]=Object(a.useState)([]),[S,F]=Object(a.useState)([]),[C,D]=Object(a.useState)("table2020"),A=function(){const[e,t]=Object(a.useState)([0,0]);return Object(a.useLayoutEffect)((()=>{function e(){t([window.innerWidth,window.innerHeight])}return window.addEventListener("resize",e),e(),()=>window.removeEventListener("resize",e)}),[]),e}()[0],z=A>1120?1090:A-30,T=z<600?300:z/2,[I,M]=Object(a.useState)([]),[P,E]=Object(a.useState)("all"),[H,L]=Object(a.useState)([]),[Y,_]=Object(a.useState)("Corn"),[U,B]=Object(a.useState)("all");Object(a.useEffect)((()=>{var t;const r=function(e){return"all"===U?e:e.filter((e=>e.season===U))}(function(e){return"all"===Y?e:e.filter((e=>e.species===Y))}(function(e){return 0===H.length?e:e.filter((e=>H.includes(e.company)))}((t=e,"all"===P?t:t.filter((e=>e.year===Number(P)))))));M(r)}),[P,H,Y,U]),Object(a.useEffect)((()=>{fetch("https://raw.githubusercontent.com/nakkanaveen/Demo1/master/data.json").then((e=>e.json())).then((e=>{const r=e.map((e=>({year:e.year,species:e.species,company:e.company,hybrid:e.hybrid,companyhybrid:e.company+" / "+e.hybrid,season:e.season,relativematurity:null===e.relativematurity||""===e.relativematurity?-1:Number(e.relativematurity),topyield:e.topyield,yield:null===e.yield||""===e.yield?-1:Number(e.yield),at35dm:null===e.at35dm||""===e.at35dm?-1:Number(e.at35dm),topmilksilage:e.topmilksilage,milksilage:null===e.milksilage||""===e.milksilage?-1:Number(e.milksilage),topmilkacre:e.topmilkacre,milkacre:null===e.milkacre||""===e.milkacre?-1:Number(e.milkacre),drymatter:null===e.drymatter||""===e.drymatter?-1:Number(e.drymatter),crudeprotein:null===e.crudeprotein||""===e.crudeprotein?-1:Number(e.crudeprotein),ndf:null===e.ndf||""===e.ndf?-1:Number(e.ndf),ndfd:null===e.ndfd||""===e.ndfd?-1:Number(e.ndfd),at240undf:null===e.at240undf||""===e.at240undf?-1:Number(e.at240undf),adf:null===e.adf||""===e.adf?-1:Number(e.adf),starch:null===e.starch||""===e.starch?-1:Number(e.starch),sugar:null===e.sugar||""===e.sugar?-1:Number(e.sugar),nel:null===e.nel||""===e.nel?-1:Number(e.nel),ivdmd:null===e.ivdmd||""===e.ivdmd?-1:Number(e.ivdmd),tdn:null===e.tdn||""===e.tdn?-1:Number(e.tdn),yielddigestiblendf:null===e.yielddigestiblendf||""===e.yielddigestiblendf?-1:Number(e.yielddigestiblendf),diseasedonotuse:null===e.diseasedonotuse||""===e.diseasedonotuse?-1:Number(e.diseasedonotuse),disease:null===e.disease||""===e.disease?-1:Number(e.disease),donotuselodging:null===e.donotuselodging||""===e.donotuselodging?-1:Number(e.donotuselodging),lodging:null===e.lodging||""===e.lodging?-1:Number(e.lodging),active:e.active}))).filter((e=>1===e.active)),a=r.reduce(((e,t)=>t.year>e?t.year:e),r[0].year);return M(r),t(r),E(a.toString()),_("Corn"),t(r)}))}),[]);const W=[{title:"Year",field:"year"},{title:"Company",field:"company"},{title:"Hybrid",field:"hybrid"},{title:"Season",field:"season"},{title:"Yield Dry Tons/acre",field:"yield",defaultSort:"desc",render:e=>Object(N.jsx)("div",{className:"*"===e.topyield?"top-characteristic":"",children:-1!==e.yield?e.yield:"n/a"})},{title:"Milk lb/Ton of silage",field:"milksilage",render:e=>Object(N.jsx)("div",{className:"*"===e.topmilksilage?"top-characteristic":"",children:-1!==e.milksilage?e.milksilage:"n/a"})},{title:"Milk lb/acre",field:"milkacre",render:e=>Object(N.jsx)("div",{className:"*"===e.topmilkacre?"top-characteristic":"",children:-1!==e.milkacre?e.milkacre:"n/a"})},{title:"NDF %",field:"ndf",render:e=>Object(N.jsx)("div",{children:-1!==e.ndf?e.ndf:"n/a"})},{title:"NDFD %",field:"ndfd",render:e=>Object(N.jsx)("div",{children:-1!==e.ndfd?e.ndfd:"n/a"})},{title:"Starch %",field:"starch",render:e=>Object(N.jsx)("div",{children:-1!==e.starch?e.starch:"n/a"})}],K=()=>{D("chart2020")},R=()=>{D("table2020")},V=e.map((e=>e.year)),J=Array.from(new Set(V)).sort().reverse(),X=e.map((e=>e.company)),$=Array.from(new Set(X)).sort(),q=e.map((e=>e.species)),G=Array.from(new Set(q)).sort(),Q=e.map((e=>e.season)),Z=Array.from(new Set(Q)).sort();return"table2020"===C?Object(N.jsxs)(u,{children:[Object(N.jsx)(d.a,{onClick:R,variant:"contained",className:"selected",children:"Table"}),Object(N.jsx)(d.a,{onClick:K,variant:"contained",children:"Chart"}),Object(N.jsx)(d.a,{className:"tutorial-button",variant:"contained",children:Object(N.jsx)("a",{href:"https://nwdistrict.ifas.ufl.edu/phag/2022/06/10/introducing-the-new-uf-silage-hybrid-decision-tool/",target:"_blank",children:"Tutorial"})}),Object(N.jsx)("div",{className:"show-filter-select-box",children:Object(N.jsxs)("p",{style:{fontSize:"1rem"},children:[" ",Object(N.jsx)("b",{children:"Available Filters"})," "]})}),Object(N.jsxs)("div",{className:"custom-filters",children:[Object(N.jsxs)("div",{className:"custom-species-filter custom-filter-item",children:[Object(N.jsx)("p",{children:"Filter by Species:"}),Object(N.jsx)(o.a,{className:"select-filter",labelId:"filter-species-label",id:"filter-species-id",value:Y,label:"Species",onChange:e=>_(e.target.value),children:G.map((e=>Object(N.jsx)(b.a,{value:e,children:e})))})]}),Object(N.jsxs)("div",{className:"custom-year-filter custom-filter-item",children:[Object(N.jsx)("p",{children:"Filter by Year:"}),Object(N.jsxs)(o.a,{className:"select-filter",labelId:"filter-year-label",id:"filter-year-id",value:P,label:"Year",onChange:e=>E(e.target.value),children:[Object(N.jsx)(b.a,{value:"all",children:Object(N.jsx)("em",{children:"All"})}),J.map((e=>Object(N.jsx)(b.a,{value:e,children:e})))]})]}),Object(N.jsxs)("div",{className:"custom-season-filter custom-filter-item",children:[Object(N.jsx)("p",{children:"Filter by Season:"}),Object(N.jsxs)(o.a,{className:"select-filter",labelId:"filter-season-label",id:"filter-season-id",value:U,label:"Season",onChange:e=>B(e.target.value),children:[Object(N.jsx)(b.a,{value:"all",children:Object(N.jsx)("em",{children:"All"})}),Z.map((e=>Object(N.jsx)(b.a,{value:e,children:e})))]})]}),Object(N.jsxs)("div",{className:"custom-company-filter custom-filter-item",children:[Object(N.jsx)("p",{children:"Filter by Companies:"}),Object(N.jsxs)(o.a,{className:"select-filter",labelId:"filter-company-label",id:"filter-company-id",value:H,multiple:!0,label:"Company",onChange:e=>L(e.target.value),children:[Object(N.jsx)(b.a,{value:"Companies",children:Object(N.jsx)("em",{children:"Companies"})}),$.map((e=>Object(N.jsx)(b.a,{value:e,children:e})))]})]})]}),Object(N.jsx)(c.a,{icons:{Filter:()=>Object(N.jsx)("div",{})},columns:W,data:I,options:{filtering:r,emptyRowsWhenPaging:!1,pageSize:10,pageSizeOptions:[10,20,50,100],exportButton:!0,exportAllData:!0,padding:"dense",tableLayout:"auto",headerStyle:{backgroundColor:"#FA4616",color:"#fefefe"},rowStyle:(e,t,r)=>t%2==0?{backgroundColor:"#f8f8f8",fontSize:"85%"}:{backgroundColor:"#fdfdfd",fontSize:"85%"},searchFieldVariant:"outlined"},detailPanel:[{tooltip:"Show Details",render:e=>Object(N.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"repeat(5, 1fr)",gap:"1rem",fontSize:"1rem",padding:"1rem",textAlign:"center",color:"white",backgroundColor:"#0021A5"},children:[Object(N.jsxs)("p",{children:["Relative Maturity:"," ",-1!==e.relativematurity?e.relativematurity:"n/a"]}),Object(N.jsxs)("p",{children:["Estimated Silage T/A:"," ",-1!==e.at35dm?e.at35dm:"n/a"]}),Object(N.jsxs)("p",{children:["Dry matter %:"," ",-1!==e.drymatter?e.drymatter:"n/a"]}),Object(N.jsxs)("p",{children:["Crude protein %:"," ",-1!==e.crudeprotein?e.crudeprotein:"n/a"]}),Object(N.jsxs)("p",{children:["240 UNDF:"," ",-1!==e.at240undf?e.at240undf:"n/a"]}),Object(N.jsxs)("p",{children:["ADF %: ",-1!==e.adf?e.adf:"n/a"]}),Object(N.jsxs)("p",{children:["Sugar %: ",-1!==e.sugar?e.sugar:"n/a"]}),Object(N.jsxs)("p",{children:["NEL Mcal/lb: ",-1!==e.nel?e.nel:"n/a"]}),Object(N.jsxs)("p",{children:["IVDMD %: ",-1!==e.ivdmd?e.ivdmd:"n/a"]}),Object(N.jsxs)("p",{children:["TDN %: ",-1!==e.tdn?e.tdn:"n/a"]}),Object(N.jsxs)("p",{children:["Yield digestible NDF, T/A:"," ",-1!==e.yielddigestiblendf?e.yielddigestiblendf:"n/a"]}),Object(N.jsxs)("p",{children:["Disease %:"," ",-1!==e.disease?e.disease:"n/a"]}),Object(N.jsxs)("p",{children:["Lodging %:"," ",-1!==e.lodging?e.lodging:"n/a"]})]})}],title:"UF Silage Hybrid Trial Table"}),Object(N.jsx)("span",{style:{color:"darkblue",fontWeight:"bold",margin:"1rem"},children:"Blue and bold characteristics in the table mean it was a top performer within that season and year."}),Object(N.jsx)("br",{}),Object(N.jsx)(w,{})]}):Object(N.jsxs)(u,{children:[Object(N.jsx)(d.a,{onClick:R,variant:"contained",children:"Table"}),Object(N.jsx)(d.a,{onClick:K,variant:"contained",className:"selected",children:"Chart"}),Object(N.jsx)(d.a,{className:"tutorial-button",variant:"contained",children:Object(N.jsx)("a",{href:"#",children:"Tutorial"})}),Object(N.jsx)("div",{className:"show-filter-select-box",children:Object(N.jsxs)("p",{style:{fontSize:"1rem"},children:[" ",Object(N.jsx)("b",{children:"Available Filters"})," "]})}),Object(N.jsxs)("div",{className:"custom-filters",children:[Object(N.jsxs)("div",{className:"custom-species-filter custom-filter-item",children:[Object(N.jsx)("p",{children:"Filter by Species:"}),Object(N.jsx)(o.a,{className:"select-filter",labelId:"filter-species-label",id:"filter-species-id",value:Y,label:"Species",onChange:e=>_(e.target.value),children:G.map((e=>Object(N.jsx)(b.a,{value:e,children:e})))})]}),Object(N.jsxs)("div",{className:"custom-year-filter custom-filter-item",children:[Object(N.jsx)("p",{children:"Filter by Year:"}),Object(N.jsxs)(o.a,{className:"select-filter",labelId:"filter-year-label",id:"filter-year-id",value:P,label:"Year",onChange:e=>E(e.target.value),children:[Object(N.jsx)(b.a,{value:"all",children:Object(N.jsx)("em",{children:"All"})}),J.map((e=>Object(N.jsx)(b.a,{value:e,children:e})))]})]}),Object(N.jsxs)("div",{className:"custom-season-filter custom-filter-item",children:[Object(N.jsx)("p",{children:"Filter by Season:"}),Object(N.jsxs)(o.a,{className:"select-filter",labelId:"filter-season-label",id:"filter-season-id",value:U,label:"Season",onChange:e=>B(e.target.value),children:[Object(N.jsx)(b.a,{value:"all",children:Object(N.jsx)("em",{children:"All"})}),Z.map((e=>Object(N.jsx)(b.a,{value:e,children:e})))]})]}),Object(N.jsxs)("div",{className:"custom-company-filter custom-filter-item",children:[Object(N.jsx)("p",{children:"Filter by Companies:"}),Object(N.jsxs)(o.a,{className:"select-filter",labelId:"filter-company-label",id:"filter-company-id",value:H,multiple:!0,label:"Company",onChange:e=>L(e.target.value),children:[Object(N.jsx)(b.a,{value:"Companies",children:Object(N.jsx)("em",{children:"Companies"})}),$.map((e=>Object(N.jsx)(b.a,{value:e,children:e})))]})]})]}),Object(N.jsxs)("div",{className:"chart-box",children:[Object(N.jsx)("div",{className:"chart-title",children:"UF Silage Hybrid Trial Chart"}),Object(N.jsxs)("div",{className:"chart-sub-title",style:{color:"#FAFAFA"},children:["Yield Dry Matter (DM tons/acre) X Milk Production (lb milk/ton)"," "]}),Object(N.jsxs)(f.a,{className:"chart-container",width:z,height:T,margin:{top:20,right:30,bottom:10,left:0},children:[Object(N.jsx)(j.a,{strokeDasharray:"1 1"}),Object(N.jsx)(h.a,{dataKey:"companyhybrid",name:"Company/Hybrid",unit:""}),Object(N.jsx)(g.a,{tickCount:4,dataKey:"yield",type:"number",domain:[1,16],name:"Total Production",unit:" lb DM/A"}),Object(N.jsx)(p.a,{interval:0,tickCount:4,dataKey:"milksilage",type:"number",domain:[1400,4100],name:"Milk Production",unit:" mk/ton"}),Object(N.jsx)(x.a,{cursor:{strokeDasharray:"10 10"}}),Object(N.jsx)(O.a,{}),Object(N.jsx)(y.a,{name:Y,data:I,fill:"#22884C"})]})]}),Object(N.jsx)(w,{})]})}const F=m.b.main`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0.5rem 1rem;
  background-color: #fff;
`;function C(){return Object(N.jsx)(F,{children:Object(N.jsx)(S,{})})}var D=r.p+"static/media/logo-uf-ifas.4f5deef3.png",A=r.p+"static/media/background.08602167.jpg";const z=m.b.header`
  background: var(--dark-green);
`,T=m.b.div`
  max-width: 1280px;
  height: 230px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  background-image: url(${A});

  img {
    opacity: 0.95;
    width: 160px;
    height: auto;
    margin-left: 1rem;
    margin-right: 1rem;
    border-radius: 0.4rem;
    background-color: #fefefe;

    transition: filter 0.4s;
    &:hover {
      filter: brightness(1.1);
    }
  }

  button {
    margin-left: 1rem;
    margin-right: 1rem;
    font-size: 1.5rem;
    font-weight: 600;
    background-color: #fefefe;
    opacity: 0.9;

    border: 0;
    padding: 1rem 2rem;
    border-radius: 0.4rem;

    transition: filter 0.2s;
    &:hover {
      filter: brightness(1.2);
    }
  }
`;function I(){return Object(N.jsx)(z,{children:Object(N.jsxs)(T,{children:[Object(N.jsx)("a",{href:"https://animal.ifas.ufl.edu/extension/courses/csfd/",target:"_blank",rel:"noopener noreferrer",children:Object(N.jsx)("img",{src:D,alt:"CSFD Logo"})}),Object(N.jsx)("button",{type:"button",children:Object(N.jsx)("a",{href:"https://animal.ifas.ufl.edu/extension/courses/csfd/",target:"_blank",rel:"noopener noreferrer",children:"UF Silage Hybrid Decision Tool"})})]})})}const M=m.a`
:root {
    --red: #e52e4d;
    --blue: #5429cc;
    --green: #0021A5;
    --orange: #fa4616;
    --orange-dark: #fa1616;

    --dark-green: #0021A5;
    --light-green: #d2f8d2;

    --blue-light: #6933ff;

    --text-title: #363f5f;
    --text-body: #969cb3;

    --background: #f0f2f5;
    --shape: #FFFFFF;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    // default font-size (6.25% per pixel)
    font-size: 87.5%; //14px

    @media (max-width: 1080px) {
        font-size: 75%; //13px
    }

    @media (max-width: 768px) {
        font-size: 62.5%; //12px
    }
}

body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
}

body, input, textarea, button {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
}

h1, h2, h3, h4, h5, h6, strong, th {
    font-family: "Poppins", sans-serif;
    font-weight: 600;
}

button {
    cursor: pointer;
}

[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
}

`;var P=r(579);const E=m.b.footer`
  background: #f0f2f5;
  padding: 1rem 0;
`,H=m.b.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: end;
  padding: 0 2rem;
`,L=m.b.div`
  height: 20px;
  width: 1px;
  background-color: #ccc;
  margin: 0 1rem;
`,Y=m.b.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #fff;
  font-size: 0.875rem;
  border: 1px solid #6c757d;
  padding: 0.25rem 0.5rem;
  border-radius: 0.4rem;
  margin-left: 0.5rem;
  background-color: #6c757d;

  svg {
    font-size: 16px;
    margin-right: 0.5rem;
  }

  &:hover {
    background-color: #333;
  }
`;function _(){return Object(N.jsx)(E,{children:Object(N.jsxs)(H,{children:[Object(N.jsx)("span",{children:"Developed by Felizardo"}),Object(N.jsx)(L,{}),Object(N.jsxs)(Y,{href:"https://github.com/devfel",target:"_blank",rel:"noopener noreferrer",children:[Object(N.jsx)(P.a,{}),"DevFel"]})]})})}function U(){return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(M,{}),Object(N.jsx)(I,{}),Object(N.jsx)(C,{}),Object(N.jsx)(_,{})]})}n.a.render(Object(N.jsx)(i.a.StrictMode,{children:Object(N.jsx)(U,{})}),document.getElementById("root"))}},[[878,1,2]]]);
//# sourceMappingURL=main.803e7f16.chunk.js.map