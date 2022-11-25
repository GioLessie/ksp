"use strict";(self.webpackChunkemployees_app=self.webpackChunkemployees_app||[]).push([[305],{4305:(O,p,a)=>{a.r(p),a.d(p,{AuthModule:()=>v});var M=a(9808),b=a(7134),r=a(4521),n=a(5e3);let C=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-lobby"]],decls:3,vars:0,consts:[[1,"lobby"],[1,"lobby__content"]],template:function(e,o){1&e&&(n.TgZ(0,"div",0),n.TgZ(1,"div",1),n._UZ(2,"router-outlet"),n.qZA(),n.qZA())},directives:[r.lC],styles:[".lobby[_ngcontent-%COMP%]{position:absolute;top:100px;left:0;width:100%;background-color:#fafafa;height:calc(100% - 80px);box-sizing:border-box}.lobby__content[_ngcontent-%COMP%]{max-width:400px;width:100%;position:absolute;left:50%;top:40%;transform:translate(-50%,-50%);border:1px solid #3f51b5;padding:30px;border-radius:8px;box-sizing:border-box}@media screen and (max-width: 980px){.lobby[_ngcontent-%COMP%]{top:56px}}@media screen and (max-width: 580px){.lobby[_ngcontent-%COMP%]{top:0}}"]}),t})();var d=a(7501),c=a(1271),i=a(3075),g=a(4106),m=a(7531),h=a(7423);const f=function(){return{standalone:!0}},Z=function(){return{standalone:!0}},T=[{path:"",component:C,children:[{path:"login",component:(()=>{class t{constructor(e,o,l){this.serviceAuth=e,this.router=o,this.snackbar=l,this.email="",this.password=""}ngOnInit(){}login(){this.serviceAuth.login(this.email,this.password).then(e=>{this.router.navigate(["empleados"]),this.showSnack("Bienvenido")}).catch(e=>{this.showSnack(e.message)})}showSnack(e){this.snackbar.open(e,"OK!",{duration:3500})}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(d.e),n.Y36(r.F0),n.Y36(c.ux))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-login"]],decls:17,vars:6,consts:[[1,"login"],["appearance","fill"],["matInput","","placeholder","hola@mail.com","required","",3,"ngModel","ngModelOptions","ngModelChange"],["matInput","","placeholder","password","type","password","required","",3,"ngModel","ngModelOptions","ngModelChange"],["mat-raised-button","",3,"click"],["routerLink","../registrate"]],template:function(e,o){1&e&&(n.TgZ(0,"form",0),n.TgZ(1,"h2"),n._uU(2,"Inicia Sesi\xf3n"),n.qZA(),n.TgZ(3,"mat-form-field",1),n.TgZ(4,"mat-label"),n._uU(5,"Email"),n.qZA(),n.TgZ(6,"input",2),n.NdJ("ngModelChange",function(u){return o.email=u}),n.qZA(),n.qZA(),n.TgZ(7,"mat-form-field",1),n.TgZ(8,"mat-label"),n._uU(9,"Contrase\xf1a"),n.qZA(),n.TgZ(10,"input",3),n.NdJ("ngModelChange",function(u){return o.password=u}),n.qZA(),n.qZA(),n.TgZ(11,"button",4),n.NdJ("click",function(){return o.login()}),n._uU(12," Iniciar Sesi\xf3n "),n.qZA(),n.TgZ(13,"span"),n._uU(14," A\xfan no tienes una cuenta? "),n.TgZ(15,"a",5),n._uU(16,"Reg\xedstrate"),n.qZA(),n.qZA(),n.qZA()),2&e&&(n.xp6(6),n.Q6J("ngModel",o.email)("ngModelOptions",n.DdM(4,f)),n.xp6(4),n.Q6J("ngModel",o.password)("ngModelOptions",n.DdM(5,f)))},directives:[i._Y,i.JL,i.F,g.KE,g.hX,m.Nt,i.Fj,i.Q7,i.JJ,i.On,h.lW,r.yS],styles:[".login[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-bottom:20px}"]}),t})()},{path:"registrate",component:(()=>{class t{constructor(e,o,l){this.serviceAuth=e,this.router=o,this.snackbar=l,this.email="",this.password=""}ngOnInit(){}signin(){this.serviceAuth.register(this.email,this.password).then(e=>{this.router.navigate(["empleados"]),this.showSnack("Registrado correctamente")}).catch(e=>{this.showSnack(e.message)})}showSnack(e){this.snackbar.open(e,"OK!",{duration:5500})}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(d.e),n.Y36(r.F0),n.Y36(c.ux))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-signin"]],decls:17,vars:6,consts:[[1,"signin"],["appearance","fill"],["matInput","","placeholder","hola@mail.com","required","",3,"ngModel","ngModelOptions","ngModelChange"],["matInput","","placeholder","password","type","password","required","",3,"ngModel","ngModelOptions","ngModelChange"],["mat-raised-button","",3,"click"],["routerLink","../login"]],template:function(e,o){1&e&&(n.TgZ(0,"form",0),n.TgZ(1,"h2"),n._uU(2,"Reg\xedstrate"),n.qZA(),n.TgZ(3,"mat-form-field",1),n.TgZ(4,"mat-label"),n._uU(5,"Email"),n.qZA(),n.TgZ(6,"input",2),n.NdJ("ngModelChange",function(u){return o.email=u}),n.qZA(),n.qZA(),n.TgZ(7,"mat-form-field",1),n.TgZ(8,"mat-label"),n._uU(9,"Contrase\xf1a"),n.qZA(),n.TgZ(10,"input",3),n.NdJ("ngModelChange",function(u){return o.password=u}),n.qZA(),n.qZA(),n.TgZ(11,"button",4),n.NdJ("click",function(){return o.signin()}),n._uU(12," Registrarse "),n.qZA(),n.TgZ(13,"span"),n._uU(14," Ya tienes una cuenta? "),n.TgZ(15,"a",5),n._uU(16,"Inicia sesi\xf3n"),n.qZA(),n.qZA(),n.qZA()),2&e&&(n.xp6(6),n.Q6J("ngModel",o.email)("ngModelOptions",n.DdM(4,Z)),n.xp6(4),n.Q6J("ngModel",o.password)("ngModelOptions",n.DdM(5,Z)))},directives:[i._Y,i.JL,i.F,g.KE,g.hX,m.Nt,i.Fj,i.Q7,i.JJ,i.On,h.lW,r.yS],styles:[".signin[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-bottom:20px}"]}),t})()},{path:"**",redirectTo:"login"}]}];let y=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[r.Bz.forChild(T)],r.Bz]}),t})(),v=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[M.ez,y,b.q,i.u5]]}),t})()}}]);