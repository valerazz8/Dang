(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0e4d5c3f"],{"064d":function(e,t,r){},bb1f:function(e,t,r){"use strict";r("064d")},cdff:function(e,t,r){"use strict";r.r(t);var c=r("7a23");function s(e,t,r,s,n,i){var d=Object(c["x"])("slider-card");return Object(c["p"])(),Object(c["d"])("div",null,[(Object(c["p"])(!0),Object(c["d"])(c["a"],null,Object(c["v"])(n.cards,(function(e){return Object(c["p"])(),Object(c["d"])("div",{class:"card",key:e.src},[Object(c["g"])(d,{data:e},null,8,["data"])])})),128))])}var n=Object(c["D"])("data-v-5db6e19a");Object(c["s"])("data-v-5db6e19a");var i={class:"text-card"};Object(c["q"])();var d=n((function(e,t,r,s,d,a){var o=Object(c["x"])("splide-slide"),p=Object(c["x"])("splide");return Object(c["p"])(),Object(c["d"])(p,{options:d.sliderOptions,class:"splide"},{default:n((function(){return[Object(c["g"])(o,null,{default:n((function(){return[Object(c["g"])("div",null,[Object(c["g"])("img",{src:"./img/"+r.data.src+".png"},null,8,["src"])])]})),_:1}),(Object(c["p"])(!0),Object(c["d"])(c["a"],null,Object(c["v"])(r.data.descriptions,(function(e,t){return Object(c["p"])(),Object(c["d"])(o,{key:t},{default:n((function(){return[Object(c["g"])("div",i,Object(c["z"])(e),1)]})),_:2},1024)})),128))]})),_:1},8,["options"])})),a=r("5e2b"),o=(r("ee7e"),{components:{Splide:a["a"],SplideSlide:a["b"]},props:{data:{type:Object,required:!0}},data:function(){return{sliderOptions:{type:"loop",arrows:!1,lazyload:"nearby",keyboard:!1}}}});r("bb1f");o.render=d,o.__scopeId="data-v-5db6e19a";var p=o,b={components:{SliderCard:p},data:function(){return{cards:[{title:"Оружие",src:"@/assets/img/kulak.png",descriptions:["Вы начинаете игру с кулаком. Он просто изображен на вашем планшете. Сообщение с количеством следов на карте оружия обозначает дальность поражения оружия. Например, у кулака - это один. Чтобы попасть в цель с большего расстояния, вам надо сыграть карту более совершенного оружия. Сыграв, кладите её на плашет поверх кулака.",'Сыгранную карту оружия могут отдолжить (картой "По-братски") или сбросить (картой "Утрата"). Свой кулак вы не потеряете ни при каких обстоятельствах.',"Важно! Оружие не меняет расстояния между игроками, а устанавливает максимальное расстояние, на котором вы можете попасть в другого игрока",'"Пердеж Дениса" и "Пукич" позволяет за один ход пердеть сколько угодно раз, а в дополнение сыграть сколько угодно карт "Дэнг!" против одной или нескольких целей на расстоянии 1.']},{src:"dang",descriptions:['Карта "Дэнг!" основной способ лишить игрока бургеров. По умолчанию, если не указана конкретная цель, то целью "Дэнга!" может стать любой игрок на ваш выбор, находящийся в досягаемости вашего оружия.',"Если хотите сыграть карту против игрока, то определите: расстояние до него, а также может ли ваше оружие достать до цели на таком расстоянии."]},{src:"zohan",descriptions:['Если против вас сыграна карта "Дэнг!" или "Кавабанга", вы можете тут же отменить попадание сыграв карту "Я не чувствую боли!" (даже не в свой ход!). В противном случае потеряйте бургер - сбросьте его на середину стола. Потеряв последний бургер, вы тут же выбываете из игры (кроме случая, если вы сыграете "МакДрайв").','Вы не можете предотвращать попадания в других игроков. Карта "Дэнг!" уходит в сброс даже если её эффект был отменён.']},{src:"mcdrive",descriptions:['Здесь вы можете получить бургер. Вы не можете получить больше бургеров, чем у вас в начале партии! Вы всегда разыгрываете "МакДрайв" на себя (искл. Помощь от Бога!).',"МакДрайв играется двумя способами:\n1)в свой ход как обычная разовая карта.\n2) сразу после того как ваш персонаж потерял последний бургер (только смертельное попадание позволяет сыграть МакДрайв в чужой ход). Так можно сыграть несколько карт МакДрайв, но ими нельзя повысить количество бургеров выше 1.","МакДрайв не действует, если в игре остались только двое. Сыграть карту при этом можно, но бургер вы не получите (но вы можете использовать эффект Помощь от Бога!, если только это не восстановление количества бргеров)."]},{src:"fortnite",descriptions:["Каждый игрок восстанавливает один бургер. Потеряв последний бургер, вы не сможете поиграть в Фортнайт ни в свой ход, ни в чужой."]},{src:"friday",descriptions:["Возьмите 2 карты с колоды. С помощью Бога - 3."]},{src:"hubabuba",descriptions:["Раскройте из колоды столько карт, сколько игроков осталось в игре. Начиная с вас и далее по часовой стрелке, каждый игрок забирает на руку одну из разыгранных карт."]},{src:"bro",descriptions:["Заберите себе на руку карту игрока на расстоянии 1 от вас (это может быть случайная карта с руки, либо выбранная вами карта у него в игре. Не забывайте, что Роуетр и Соренто изменяют расстояние между игроками, а оружие - нет."]},{src:"utrata",descriptions:["Заставьте любого игрока, независимо от расстояния, сбросить карту. Вы сами решаете, будет ли это случайная карта с руки или выбранная вами из игры."]},{src:"kavabanga",descriptions:['Каждый игрок, независимо от расстояния, получает одно попадание (если не сыграет "Я не чувствую Боли!"). Кавабанга не считается картой "Дэнг!", поэтому она не попдает под запрет играть больше одной карты "Дэнг!"']},{src:"pavlik",descriptions:['Каждый игрок должен либо сбросить карту "Дэнг!", либо потерять бургер. Карты "Я не чувствую боли!" и "Дюрекс" не помагают. Сброс карты "Дэнг!" не считается её розыгрышем, и никакие эффекты Помощи от Бога не действуют. Если игрок-Валера выбыл из игры из-за Павлика, никто не получает за это награду.']},{src:"sparring",descriptions:['Вызовите любого игрока на поединок (независимо от расстояния). Вызванный игрок может сбросить карту "Дэнг!", пусть это и не его ход. Затем вы можете сбросить "Дэнг!", потом снова он и так далее. Как только один из вас не сможет или не захочет сбросить "Дэнг!", спарринг закончится поражением этого игрока, и он поетряет бургер.','Карты "Я не чувствую боли!" и "Дюрекс" не помогают. "Спарринг" не считается дэнгом и, сброшенные в ходе спрарринга карты "Дэнг!" не считаются разыгранными. Таким образом на эти карты не действует запрет играть больше одной карты "Дэнг!" за ход.']},{src:"sorento",descriptions:["Пока эта карта у вас в игре, для всех остальных игроков расстояние до вас увеличивается на 1. Однако вы всегда можете подкатить к другим игрокам, они находятся для вас на обычном расстоянии."]},{src:"router",descriptions:['Пока эта карта у вас в игре, для вас расстоянии до всех остальных игроков уменьшается на 1. Другие игроки видят вас на обычном расстоянии. "Роутер" не может сократить расстояние до 0 - расстояние 1 остается минимальным.']}]}}};b.render=s;t["default"]=b}}]);
//# sourceMappingURL=chunk-0e4d5c3f.2d093f5f.js.map