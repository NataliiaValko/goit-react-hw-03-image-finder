(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{11:function(e,t,a){e.exports={backdrop:"Modal_backdrop__vVAU6",content:"Modal_content__3LFlp",button:"Modal_button__1RnL4"}},13:function(e,t,a){e.exports={gallery:"Gallery_gallery__2bemD",text:"Gallery_text__eIHdw"}},14:function(e,t,a){e.exports={imageGallery__list:"ImageDataView_imageGallery__list__s04o9",image:"ImageDataView_image__1yZnr"}},15:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__3Yj61",ImageGalleryItem__image:"ImageGalleryItem_ImageGalleryItem__image__3oI3N"}},17:function(e,t,a){e.exports={container:"Container_container__3XD_N"}},20:function(e,t,a){e.exports={loader:"Loader_loader__10QJN"}},21:function(e,t,a){e.exports={text:"ImageErrorView_text__1JW-K"}},22:function(e,t,a){e.exports={text:"ImageIdlingView_text__1Hr0t"}},23:function(e,t,a){e.exports={button:"Button_button__2VTfs"}},29:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(8),o=a.n(r),s=(a(29),a(16)),c=a(4),i=a(5),l=a(7),u=a(6),d=a(10),h=(a(30),a(13)),m=a.n(h),g=a(17),j=a.n(g),b=a(2),p=function(e){var t=e.children;return Object(b.jsx)("div",{className:j.a.container,children:t})},f=a(14),_=a.n(f),y=a(15),O=a.n(y),x=function(e){e.id;var t=e.openModal,a=e.toggleOnloading,n=e.webformatURL,r=e.largeImageURL,o=e.tags,s=void 0===o?"photo":o;return Object(b.jsx)("li",{className:O.a.ImageGalleryItem,children:Object(b.jsx)("img",{onClick:function(e){t(e.target.dataset.large),a()},src:n,"data-large":r,alt:s,className:O.a.ImageGalleryItem__image})})},v=a(18),w=a(11),I=a.n(w),S=document.querySelector("#modal-root"),M=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(r.createPortal)(Object(b.jsx)("div",{className:I.a.backdrop,onClick:this.handleBackdropClick,children:Object(b.jsxs)("div",{className:I.a.content,children:[Object(b.jsx)("button",{type:"button",className:I.a.button,onClick:this.props.onClose,children:Object(b.jsx)(v.a,{})}),this.props.children]})}),S)}}]),a}(n.Component),k=a(19),q=a.n(k),C=a(20),N=a.n(C),L=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(q.a,{type:"Bars",color:"#5ab1e4",height:80,width:80,className:N.a.loader}),Object(b.jsx)("p",{children:"Loading..."})]})},F=function(e){var t=e.images,a=e.showModal,n=e.onLoading,r=e.openModal,o=e.closeModal,s=e.urlModal,c=e.toggleOnloading;return Object(b.jsxs)(b.Fragment,{children:[a&&Object(b.jsxs)(M,{onClose:o,children:[n&&Object(b.jsx)(L,{}),Object(b.jsx)("img",{onLoad:c,src:s,alt:"",className:_.a.image})]}),Object(b.jsx)("ul",{className:_.a.imageGallery__list,children:t.map((function(e){var t=e.id,a=e.webformatURL,n=e.largeImageURL,o=e.tags;return Object(b.jsx)(x,{openModal:r,toggleOnloading:c,webformatURL:a,largeImageURL:n,tags:o},t)}))})]})},G=a(21),D=a.n(G),U=function(e){var t=e.message;return Object(b.jsxs)("p",{className:D.a.text,children:["Oops! ",t]})},R=function(){return Object(b.jsx)(L,{})},T=a(22),E=a.n(T),V=function(){return Object(b.jsx)("p",{className:E.a.text,children:"Please, enter your request!"})},A=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={showModal:!1,urlModal:"",onLoading:!1},e.openModal=function(t){e.setState((function(e){return{showModal:!e.showModal,urlModal:t}}))},e.closeModal=function(){e.setState((function(e){return{showModal:!e.showModal,urlModal:""}}))},e.toggleOnloading=function(){e.setState((function(e){return{onLoading:!e.onLoading}}))},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,t){this.state.showModal||t.showModal||window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this.state,t=e.onLoading,a=e.showModal,n=e.urlModal,r=this.props,o=r.error,s=r.status,c=r.images;return"idle"===s?Object(b.jsx)(V,{}):"pending"===s?Object(b.jsx)(R,{}):"rejected"===s?Object(b.jsx)(U,{message:o}):"resolved"===s?Object(b.jsx)(F,{onLoading:t,toggleOnloading:this.toggleOnloading,urlModal:n,images:c,closeModal:this.closeModal,openModal:this.openModal,showModal:a}):void 0}}]),a}(n.Component),B=a(23),J=a.n(B),K=function(e){var t=e.text,a=e.handleIncrement;return Object(b.jsx)("button",{type:"button",className:J.a.button,onClick:a,children:t})},Q=function(e){var t=e.query,a=e.images,n=e.page,r=e.error,o=e.status,s=e.total,c=e.handleIncrement;return Object(b.jsx)("section",{className:m.a.gallery,children:Object(b.jsxs)(p,{children:["resolved"===o&&Object(b.jsxs)("p",{className:m.a.text,children:['Results on request of "',t,'"']}),Object(b.jsx)(A,{query:t,images:a,page:n,error:r,status:o}),n<s&&Object(b.jsx)(K,{text:"Load more",handleIncrement:c})]})})},W=a(24),H=a(9),P=a.n(H),z=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.handleQueryChange=function(t){e.setState({query:t.currentTarget.value.toLowerCase().trim()})},e.handleSubmit=function(t){t.preventDefault(),e.state.query?(e.props.onSubmit(e.state.query),e.setState({query:""})):d.b.error("Please, enter your request!")},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(b.jsx)("header",{className:P.a.header,children:Object(b.jsx)(p,{children:Object(b.jsxs)("form",{onSubmit:this.handleSubmit,className:P.a.searchForm,children:[Object(b.jsx)("input",{className:P.a.searchForm__input,name:"queryToSearch",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:this.handleQueryChange,value:this.state.query}),Object(b.jsx)("button",{type:"submit",className:P.a.searchForm__button,children:Object(b.jsx)(W.a,{className:P.a.icon})})]})})})}}]),a}(n.Component),Y="22065853-88fcaf807f7c22500af22ab22",Z={fetchImage:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return fetch("https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&key=").concat(Y,"&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.json()}))}},X="idle",$="pending",ee="resolved",te="rejected",ae=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:"",images:[],page:1,error:"",status:X,total:null},e.handleFormSubmit=function(t){e.setState({query:t})},e.handleIncrement=function(){e.setState({page:e.state.page+1})},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this,n=this.state.query,r=this.state.page;t.query!==n&&(this.setState({status:$,error:"",images:[],page:1}),Z.fetchImage(n).then((function(e){var t=e.hits,n=e.total;return a.setState({images:t,total:n/12>500?500:n/12}),t})).then((function(e){setTimeout((function(){e[0]?a.setState({status:ee}):a.setState({status:te,error:"We couldn\u2019t find anything =/. Change your request, please!"})}),300)})).catch((function(e){a.setState({status:te,error:"".concat(e)})}))),t.query===n&&t.page!==r&&(this.setState({error:""}),Z.fetchImage(n,r).then((function(e){var t=e.hits,n=e.total;return a.setState({images:[].concat(Object(s.a)(a.state.images),Object(s.a)(t)),total:n/12>500?500:n/12}),t})).then((function(e){setTimeout((function(){e[0]?a.setState({status:ee}):a.setState({status:te,error:"We couldn\u2019t find anything =/. Change your request, please!"})}),300)})).catch((function(e){a.setState({status:te,error:"".concat(e)})})))}},{key:"render",value:function(){var e=this.state,t=e.query,a=e.images,n=e.page,r=e.error,o=e.status,s=e.total;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(d.a,{}),Object(b.jsx)(z,{onSubmit:this.handleFormSubmit}),Object(b.jsx)(Q,{handleIncrement:this.handleIncrement,query:t,images:a,page:n,error:r,status:o,total:s})]})}}]),a}(n.Component);a(52);o.a.render(Object(b.jsx)(n.StrictMode,{children:Object(b.jsx)(ae,{})}),document.getElementById("root"))},9:function(e,t,a){e.exports={header:"Searchbar_header__20Kde",searchForm:"Searchbar_searchForm__tQY3G",searchForm__input:"Searchbar_searchForm__input__3Z392",searchForm__button:"Searchbar_searchForm__button__3znW9",icon:"Searchbar_icon__1foQJ"}}},[[53,1,2]]]);
//# sourceMappingURL=main.b6f7f77f.chunk.js.map