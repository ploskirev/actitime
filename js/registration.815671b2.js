(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["registration"],{"3fd1":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"moke-page registration-page"},[a("h1",{staticClass:"moke-heading registration-heading"},[t._v("Registration page")]),a("form",{staticClass:"registration-form",attrs:{action:"#"},on:{submit:function(e){return e.preventDefault(),t.register(e)}}},[a("div",{staticClass:"registration-form__item"},[a("label",{staticClass:"registration-form__label",attrs:{for:"email"}},[t._v("email")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"registration-form__input",attrs:{type:"email",id:"email",placeholder:"abc@abc.abc",tabindex:"0"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),a("div",{staticClass:"registration-form__item"},[a("label",{staticClass:"registration-form__label",attrs:{for:"pass"}},[t._v("password")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"registration-form__input",attrs:{type:"password",id:"pass",placeholder:"min 6 characters",tabindex:"0"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),a("input",{staticClass:"button",attrs:{disabled:t.inProcess,type:"submit",value:"Sign Up",tabindex:"0"},on:{click:t.register}}),a("div",{staticClass:"registration-form__err"},[t._v(t._s(t.error))])]),a("div",{staticClass:"link-wrapper"},[t._v(" or you can "),a("router-link",{staticClass:"link-wrapper__link",attrs:{to:"/login",tabindex:"0"}},[t._v(" Login ")])],1)])},s=[],r={name:"Registration",metaInfo:{title:"actiTIME - Registration",meta:[{name:"description",content:"Registration page - actiTIME test task"},{name:"keywords",content:"actiTIME, Registration"}]},data:function(){return{inProcess:!1,name:"Registration",email:this.$store.getters.emailFSU||"",password:""}},computed:{error:function(){return this.$store.getters.error&&(this.inProcess=!1),this.$store.getters.error},updatedEmail:function(){return this.$store.getters.emailFSU}},watch:{updatedEmail:function(){this.email=this.updatedEmail}},methods:{register:function(){this.inProcess=!0,this.$store.dispatch("register",{email:this.email,password:this.password})}}},o=r,n=(a("65e9"),a("2877")),l=Object(n["a"])(o,i,s,!1,null,"1395c253",null);e["default"]=l.exports},"65e9":function(t,e,a){"use strict";var i=a("c08a"),s=a.n(i);s.a},c08a:function(t,e,a){}}]);
//# sourceMappingURL=registration.815671b2.js.map