(()=>{var e={313:e=>{"use strict";e.exports=flarum.extensions["ziiven-decoration-store"]}},t={};function o(a){var r=t[a];if(void 0!==r)return r.exports;var n=t[a]={exports:{}};return e[a](n,n.exports,o),n.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var a in t)o.o(t,a)&&!o.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var a={};(()=>{"use strict";o.r(a);const e=flarum.core.compat["forum/app"];var t=o.n(e);const r=flarum.core.compat.extend,n=flarum.core.compat["common/extend"],i=flarum.core.compat["components/IndexPage"];var d=o.n(i);const s=flarum.core.compat["components/LinkButton"];var c=o.n(s);const l=flarum.core.compat["forum/components/HeaderSecondary"];var u=o.n(l);const p=flarum.core.compat["common/components/Button"];var h=o.n(p);const f=flarum.core.compat["forum/components/SessionDropdown"];var b=o.n(f);function L(e,t){return L=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},L(e,t)}function v(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,L(e,t)}const k=flarum.core.compat["components/Page"];var y=o.n(k);const C=flarum.core.compat["common/helpers/listItems"];var x=o.n(C);const g=flarum.core.compat["components/LoadingIndicator"];var I=o.n(g);const M=flarum.core.compat["components/Button"];var B=o.n(M);const R=flarum.core.compat.Component;var H=o.n(R);const N=flarum.core.compat["components/Link"];var w=o.n(N);const P=flarum.core.compat["helpers/avatar"];var T=o.n(P);const O=flarum.core.compat["helpers/username"];var S=o.n(O),_=function(e){function t(){return e.apply(this,arguments)||this}return v(t,e),t.prototype.view=function(){var e,t,a=this.attrs,r=a.leaderboardListItem,n=a.rankID,i=app.forum.attribute("antoinefr-money.moneyname")||"[money]",d=r.attribute("money"),s={1:["倒霉透顶"],2:["时运不济"],3:["平淡无奇"],4:["寻常如故"],5:["转运亨通"],6:["幸运降临"],7:["顺风顺水"],8:["福气绵绵"],9:["鸿运当头"],10:["天时地利人和"]}[d=Math.min(Math.max(1,Math.round(d)),10)][0],c="1"===app.forum.attribute("checkinLeaderBoardHideMoneyText")?d:i.replace("[money]",d),l="CheckinLeaderboardListItemTrophyNone",u="CheckinLeaderboardListItemRankTop";if(1===n?l="CheckinLeaderboardListItemTrophyGold":2===n?l="CheckinLeaderboardListItemTrophySilver":3===n?l="CheckinLeaderboardListItemTrophyBronze":u="CheckinLeaderboardListItemRankLower","ziiven-decoration-store"in flarum.extensions){var p=o(313).components;e=p.avatarWithFrame,t=p.usernameWithColor}return m("div",{className:"CheckinLeaderboardListItemContainer"},m("div",{class:"CheckinLeaderboardListHeaderRank"},m("div",{class:u},n),m("div",{class:l},m("i",{class:"fas fa-trophy"}))),m("div",{class:"CheckinLeaderboardListHeaderUser"},m(w(),{href:app.route.user(r),className:"transferHistoryUser",style:"color:var(--heading-color)"},e?e(r):T()(r),t?t(r):S()(r))),m("div",{class:"CheckinLeaderboardListHeaderLucky"},s),m("div",{class:"CheckinLeaderboardListHeaderMoney"},c))},t}(H()),j=function(e){function t(){return e.apply(this,arguments)||this}v(t,e);var o=t.prototype;return o.oninit=function(t){e.prototype.oninit.call(this,t),this.loading=!0,this.moreResults=!1,this.checkinLeaderboardList=[],this.totalLoadCount=0,this.additionalInfo=app.forum.attribute("checkinLeaderBoardAdditionalInfo"),this.maxLoadCount=app.forum.attribute("leaderboardMaxLoadCount")||50,this.initloadCount=app.forum.attribute("leaderboardInitLoadCount")||20,this.loadMoreCount=app.forum.attribute("leaderboardLoadMoreCount")||10,this.loadResults(0,this.initloadCount)},o.oncreate=function(t){e.prototype.oncreate.call(this,t);var o=app.translator.trans("nodeloc-checkin-leaderboard.forum.leaderboard-list-title");app.setTitle(o),app.setTitleCount(0),$(".item-nav button .Button-label").text(o)},o.view=function(){var e,t=this,o=0;return this.loading&&(e=I().component({size:"large"})),m("div",{className:"CheckinLeaderboardPage"},d().prototype.hero(),m("div",{className:"container"},m("div",{className:"sideNavContainer"},m("nav",{className:"IndexPage-nav sideNav"},m("ul",null,x()(d().prototype.sidebarItems().toArray()))),m("div",{class:"CheckinLeaderboardContainer"},m("div",{class:"CheckinLeaderboardListTitle"},app.translator.trans("nodeloc-checkin-leaderboard.forum.leaderboard-list-title")),this.additionalInfo&&this.additionalInfo.length>0&&m("p",{class:"CheckinLeaderboardListAdditionalInformation"},this.additionalInfo),m("div",{class:"CheckinLeaderboardListHeader"},m("div",{class:"CheckinLeaderboardListHeaderRank"},app.translator.trans("nodeloc-checkin-leaderboard.forum.leaderboard-list-rank")),m("div",{class:"CheckinLeaderboardListHeaderUser"},app.translator.trans("nodeloc-checkin-leaderboard.forum.leaderboard-list-user")),m("div",{class:"CheckinLeaderboardListHeaderLucky"},app.translator.trans("nodeloc-checkin-leaderboard.forum.leaderboard-list-lucky")),m("div",{class:"CheckinLeaderboardListHeaderMoney"},app.translator.trans("nodeloc-checkin-leaderboard.forum.leaderboard-list-money"))),m("ul",{class:"CheckinLeaderboardList"},this.checkinLeaderboardList.map((function(e){return o++,m("li",{class:"CheckinLeaderboardListItems"},_.component({leaderboardListItem:e,rankID:o}))}))),!this.loading&&0===this.checkinLeaderboardList.length&&m("div",null,m("div",{style:"font-size:1.4em;color: var(--muted-more-color);text-align: center;height: 300px;line-height: 100px;"},app.translator.trans("nodeloc-checkin-leaderboard.forum.leaderboard-list-empty"))),!e&&this.hasMoreResults()&&m("div",{style:"text-align:center;padding:20px"},m(B(),{className:"Button Button--primary",disabled:this.loading,loading:this.loading,onclick:function(){return t.loadMore()}},app.translator.trans("nodeloc-checkin-leaderboard.forum.leaderboard-load-more"))),e&&m("div",{className:"CheckinLeaderboard-loadMore"},e)))))},o.hasMoreResults=function(){return this.moreResults&&this.maxLoadCount>this.totalLoadCount},o.loadMore=function(){this.loading=!0,this.loadResults(this.checkinLeaderboardList.length,this.loadMoreCount)},o.parseResults=function(e){return this.moreResults=!!e.payload.links&&!!e.payload.links.next,[].push.apply(this.checkinLeaderboardList,e),this.loading=!1,m.redraw(),e},o.loadResults=function(e,t){if(void 0===e&&(e=0),void 0===t&&(t=20),this.maxLoadCount!==this.totalLoadCount){var o=t;return this.maxLoadCount<this.totalLoadCount+t&&(o=this.maxLoadCount-this.totalLoadCount,this.totalLoadCount=this.maxLoadCount),this.totalLoadCount+=t,app.store.find("checkinLeaderboard",{page:{offset:e,limit:o}}).catch((function(){})).then(this.parseResults.bind(this))}},t}(y());t().initializers.add("nodeloc-checkin-leaderboard",(function(){t().routes.checkinLeaderboard={path:"/checkinLeaderboard",component:j},(0,n.extend)(b().prototype,"items",(function(e){if(t().forum.attribute("allowViewLeaderbaord")){var o=t().forum.attribute("checkinLeaderBoardEntryPosition");0==o?(0,r.extend)(d().prototype,"navItems",(function(e){var o=t().forum.attribute("checkinLeaderBoardIcon");return e.add("CheckinLeaderboard",m(c(),{icon:o,href:t().route("checkinLeaderboard")},t().translator.trans("nodeloc-checkin-leaderboard.forum.leaderboard-name")),15),e})):1==o&&(0,n.extend)(u().prototype,"items",(function(e){var o=t().forum.attribute("checkinLeaderBoardIcon");e.add("CheckinLeaderboard",m(h(),{className:"Button Button--flat",style:"width:36px",onclick:function(){window.location.href=t().route("checkinLeaderboard")},icon:o},t().translator.trans("nodeloc-checkin-leaderboard.forum.leaderboard-name")),15)}))}}))}))})(),module.exports=a})();
//# sourceMappingURL=forum.js.map