(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{27:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(8),o=a.n(c),l=(a(27),a(10)),i=a(4),s=a(5),u=a(7),h=a(6),d=a(19),m=a.n(d),g=a(20),b=a.n(g),j="20832523-2bf34066ca306390d6c2fd3bb",p="https://pixabay.com/api/",f={fetchGalleryWithQuery:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return b.a.get("".concat(p,"?q=").concat(e,"&page=").concat(t,"&key=").concat(j,"&image_type=photo&orientation=horizontal&per_page=").concat(12)).then((function(e){return e.data.hits}))}},y=a(21),v=a(0),O=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={value:""},e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(y.a)({},n,r))},e.handeleSubmit=function(t){t.preventDefault();var a=e.state.value;e.props.onSubmit(a.trim())},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state.value;return Object(v.jsx)("header",{className:"Searchbar",children:Object(v.jsxs)("form",{className:"SearchForm",onSubmit:this.handeleSubmit,children:[Object(v.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(v.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(v.jsx)("input",{className:"SearchForm-input",type:"text",name:"value",value:e,autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:this.handleChange})]})})}}]),a}(n.Component),x=function(e){var t=e.img,a=e.alt,n=e.onClick,r=t.id,c=t.webformatURL,o=t.largeImageURL;return Object(v.jsx)("li",{className:"ImageGalleryItem",children:Object(v.jsx)("img",{src:c,"data-url":o,"data-id":r,alt:a,className:"ImageGalleryItem-image",onClick:n})})},w=function(e){var t=e.gallery,a=e.alt,n=e.onClick;return Object(v.jsx)("ul",{className:"ImageGallery",children:t.map((function(e){return Object(v.jsx)(x,{img:e,alt:a,onClick:n},e.id)}))})},k=function(e){var t=e.children;return Object(v.jsx)("div",{className:"WrappLoader",children:t})},S=function(e){var t=e.onClick;return Object(v.jsx)("button",{className:"Button",type:"button",onClick:t,children:"Load more"})},C=document.querySelector("#modal-root"),N=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){e.props.closeModal(t)},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this.props,t=e.alt,a=e.url,n=e.closeModal;return Object(c.createPortal)(Object(v.jsx)("div",{className:"Overlay",onClick:n,children:Object(v.jsx)("div",{className:"Modal",children:Object(v.jsx)("img",{src:a,alt:t})})}),C)}}]),a}(n.Component),M=a(22),F=(a(67),new M.a),L=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={gallery:[],searchQuery:"",page:1,error:"",isLoading:!1,showModal:!1,imgUrl:""},e.toggleModal=function(t){t.target!==t.currentTarget&&"Escape"!==t.code||e.setState((function(e){return{showModal:!e.showModal}}))},e.handleSubmit=function(t){""!==t&&e.setState((function(e){if(e.searchQuery!==t)return{searchQuery:t,page:1,error:"",gallery:[]}}))},e.handleClick=function(){e.handleFetch()},e.handleClickImg=function(t){e.setState({imgUrl:t.target.dataset.url}),e.toggleModal(t)},e.handleFetch=function(){var t=e.state,a=t.searchQuery,n=t.page,r=t.gallery;e.setState({isLoading:!0}),f.fetchGalleryWithQuery(a,n).then((function(t){if(0===t.length){if(0===r.length)return void F.error({message:"Nothing found",position:{x:"center",y:"top"},dismissible:!0});F.error({message:"End of image list",position:{x:"center",y:"top"},dismissible:!0})}t.length>0&&e.setState((function(e){return{gallery:[].concat(Object(l.a)(e.gallery),Object(l.a)(t))}}))})).catch((function(t){return e.setState({error:t})})).finally((function(){return e.setState((function(e){return{isLoading:!1,page:e.page+1}}))}))},e}return Object(s.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.searchQuery!==this.state.searchQuery&&this.handleFetch(),t.gallery!==this.state.gallery&&0!==t.gallery.length&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this.state,t=e.gallery,a=e.isLoading,n=e.showModal,r=e.searchQuery,c=e.imgUrl,o=this.state.gallery.length>0;return Object(v.jsxs)("div",{className:"App",children:[n&&Object(v.jsx)(N,{alt:r,url:c,closeModal:this.toggleModal}),Object(v.jsx)(O,{onSubmit:this.handleSubmit}),Object(v.jsx)(w,{gallery:t,alt:r,onClick:this.handleClickImg}),Object(v.jsx)(k,{children:a?Object(v.jsx)(m.a,{type:"ThreeDots",color:"#00BFFF",height:100,width:100,timeout:3e3}):o&&Object(v.jsx)(S,{onClick:this.handleClick})})]})}}]),a}(n.Component);o.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(L,{})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.1d7a225e.chunk.js.map