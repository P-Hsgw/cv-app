(this["webpackJsonpcv-app"]=this["webpackJsonpcv-app"]||[]).push([[0],{22:function(e,t,i){},23:function(e,t,i){},29:function(e,t,i){"use strict";i.r(t);var s=i(2),a=i.n(s),n=i(17),c=i.n(n),l=(i(22),i(7)),o=i(3),r=i(4),d=i(6),u=i(5),m=(i(23),i(8)),j=i(15),h=i(0),b=function(e){Object(d.a)(i,e);var t=Object(u.a)(i);function i(){return Object(o.a)(this,i),t.apply(this,arguments)}return Object(r.a)(i,[{key:"render",value:function(){return Object(h.jsxs)("nav",{className:"navbar",role:"navigation","aria-label":"main navigation",children:[Object(h.jsx)("div",{className:"navbar-brand",children:Object(h.jsx)("h3",{className:"title ml-2 mt-2",children:"CV CREATOR"})}),Object(h.jsx)("div",{className:"navbar-menu",children:Object(h.jsxs)("div",{className:"navbar-end",children:[Object(h.jsx)("div",{className:"navbar-item",children:Object(h.jsx)("p",{children:"Website created by Patryk Hasegawa"})}),Object(h.jsx)("div",{className:"navbar-item p-0 is-mobile",children:Object(h.jsx)("a",{href:"https://github.com/P-Hsgw",target:"blank",children:Object(h.jsx)("span",{className:"icon",children:Object(h.jsx)(m.a,{icon:j.a})})})}),Object(h.jsx)("div",{className:"navbar-item",children:Object(h.jsx)("a",{href:"https://linkedin.com/in/patryk-hasegawa",target:"blank",children:Object(h.jsx)("span",{className:"icon",children:Object(h.jsx)(m.a,{icon:j.b})})})})]})})]})}}]),i}(a.a.Component),p=i(10),O=function(e){Object(d.a)(i,e);var t=Object(u.a)(i);function i(e){var s;return Object(o.a)(this,i),(s=t.call(this,e)).inputHandler=function(e){s.setState(Object(l.a)({},e.target.name,e.target.value))},s.onTrigger=function(){s.props.handleData(s.state.firstName,s.state.lastName,s.state.phone,s.state.email)},s.state={firstName:s.props.name,lastName:s.props.surname,phone:s.props.phone,email:s.props.email},s.inputHandler=s.inputHandler.bind(Object(p.a)(s)),s.onTrigger=s.onTrigger.bind(Object(p.a)(s)),s}return Object(r.a)(i,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("p",{className:"title has-text-primary",children:"Personal information"}),Object(h.jsxs)("div",{className:"field is-horizontal",children:[Object(h.jsx)("div",{className:"field-label is-normal",children:Object(h.jsx)("label",{className:"label"})}),Object(h.jsxs)("div",{className:"field-body",children:[Object(h.jsx)("div",{className:"field",children:Object(h.jsx)("p",{className:"control is-expanded has-icons-left",children:Object(h.jsx)("input",{className:"input",name:"firstName",type:"text",placeholder:"Name",onChange:this.inputHandler,value:this.state.firstName})})}),Object(h.jsx)("div",{className:"field",children:Object(h.jsx)("p",{className:"control is-expanded has-icons-left has-icons-right",children:Object(h.jsx)("input",{className:"input",name:"lastName",type:"text",placeholder:"Surname",onChange:this.inputHandler,value:this.state.lastName})})})]})]}),Object(h.jsxs)("div",{className:"field is-horizontal",children:[Object(h.jsx)("div",{className:"field-label is-normal"}),Object(h.jsxs)("div",{className:"field-body",children:[Object(h.jsx)("div",{className:"field",children:Object(h.jsx)("p",{className:"control is-expanded has-icons-left",children:Object(h.jsx)("input",{className:"input",name:"phone",type:"tel",pattern:"[0-9]{3}-[0-9]{3}-[0-9]{4}",placeholder:"Phone number",onChange:this.inputHandler,value:this.state.phone})})}),Object(h.jsx)("div",{className:"field",children:Object(h.jsx)("p",{className:"control is-expanded has-icons-left has-icons-right",children:Object(h.jsx)("input",{className:"input",type:"email",placeholder:"Email",name:"email",onChange:this.inputHandler,value:this.state.email})})})]})]}),Object(h.jsxs)("div",{className:"field is-horizontal",children:[Object(h.jsx)("div",{className:"field-label"}),Object(h.jsx)("div",{className:"field-body",children:Object(h.jsx)("div",{className:"field",children:Object(h.jsx)("div",{className:"control",children:Object(h.jsx)("button",{className:"button is-primary",onClick:this.onTrigger,children:"Submit"})})})})]})]})}}]),i}(a.a.Component),x=i(12),f=i.n(x),v=i(9);function N(e){return Object(h.jsx)("div",{className:"buttons is-centered",children:Object(h.jsx)("button",{onClick:e.onClick,className:"button is-medium mt-5",children:"Display CV"})})}function _(e){return Object(h.jsx)("div",{className:"buttons is-centered",children:Object(h.jsx)("button",{onClick:e.onClick,className:"button is-medium mt-5",children:"Edit CV"})})}function y(e){return Object(h.jsx)("div",{className:"buttons is-centered",children:Object(h.jsx)("button",{onClick:e.onClick,className:"button is-warning is-medium",children:"Display Demo"})})}function g(e){return Object(h.jsx)("div",{className:"buttons is-right",children:e.visible?Object(h.jsx)("button",{onClick:e.onClick,className:"button is-warning",children:"Remove Work Experience"}):Object(h.jsx)("button",{onClick:e.onClick,className:"button is-warning",children:"Add Work Experience"})})}function k(e){return Object(h.jsx)("div",{className:"buttons is-right",children:e.visible?Object(h.jsx)("button",{onClick:e.onClick,className:"button is-warning",children:"Remove Education"}):Object(h.jsx)("button",{onClick:e.onClick,className:"button is-warning",children:"Add Education"})})}var w=function(e){Object(d.a)(i,e);var t=Object(u.a)(i);function i(e){var s;return Object(o.a)(this,i),(s=t.call(this,e)).inputHandler=function(e){s.setState(Object(l.a)({},e.target.name,e.target.value))},s.onTrigger=function(e){s.props.handleData(s.state.company,s.state.position,s.state.from,s.state.to,s.state.location,s.state.details,s.state.id)},s.state={company:s.props.company,position:s.props.position,from:s.props.from,to:s.props.to,location:s.props.location,details:s.props.details,id:s.props.id},s}return Object(r.a)(i,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("p",{className:"title has-text-primary",children:"Work experience"}),Object(h.jsxs)("div",{className:"field is-horizontal",children:[Object(h.jsx)("div",{className:"field-label is-normal",children:Object(h.jsx)("label",{className:"label"})}),Object(h.jsxs)("div",{className:"field-body",children:[Object(h.jsx)("div",{className:"field",children:Object(h.jsx)("p",{className:"control is-expanded has-icons-left",children:Object(h.jsx)("input",{className:"input",name:"company",type:"text",placeholder:"Company",onChange:this.inputHandler,value:this.state.company})})}),Object(h.jsx)("div",{className:"field",children:Object(h.jsx)("p",{className:"control is-expanded has-icons-left has-icons-right",children:Object(h.jsx)("input",{className:"input",name:"position",type:"text",placeholder:"Position",onChange:this.inputHandler,value:this.state.position})})})]})]}),Object(h.jsxs)("div",{className:"field is-horizontal",children:[Object(h.jsx)("div",{className:"field-label is-normal",children:Object(h.jsx)("label",{className:"label",children:"From"})}),Object(h.jsxs)("div",{className:"field-body",children:[Object(h.jsx)("div",{className:"field",children:Object(h.jsxs)("p",{className:"control is-expanded has-icons-right",children:[Object(h.jsx)("input",{className:"input",name:"from",type:"date",onChange:this.inputHandler,value:this.state.from}),Object(h.jsx)("span",{className:"icon is-right",children:Object(h.jsx)(m.a,{icon:v.a})})]})}),Object(h.jsxs)("div",{className:"field is-horizontal",children:[Object(h.jsx)("div",{className:"field-label is-normal",children:Object(h.jsx)("label",{className:"label",children:"To"})}),Object(h.jsxs)("p",{className:"control is-expanded has-icons-right",children:[Object(h.jsx)("input",{className:"input",type:"date",name:"to",onChange:this.inputHandler,value:this.state.to}),Object(h.jsx)("span",{className:"icon is-right",children:Object(h.jsx)(m.a,{icon:v.a})})]})]}),Object(h.jsx)("div",{className:"field",children:Object(h.jsx)("p",{className:"control is-expanded has-icons-right",children:Object(h.jsx)("input",{className:"input",type:"text",placeholder:"City, country",name:"location",onChange:this.inputHandler,value:this.state.location})})})]})]}),Object(h.jsxs)("div",{className:"field is-horizontal",children:[Object(h.jsx)("div",{className:"field-label is-normal",children:Object(h.jsx)("label",{className:"label",children:"Responsibilities"})}),Object(h.jsx)("div",{className:"field-body",children:Object(h.jsx)("div",{className:"field",children:Object(h.jsx)("div",{className:"control",children:Object(h.jsx)("textarea",{className:"textarea",name:"details",onChange:this.inputHandler,value:this.state.details})})})})]}),Object(h.jsxs)("div",{className:"field is-horizontal",children:[Object(h.jsx)("div",{className:"field-label"}),Object(h.jsx)("div",{className:"field-body",children:Object(h.jsx)("div",{className:"field",children:Object(h.jsxs)("div",{className:"control",children:[Object(h.jsx)("button",{className:"button is-primary",id:f()(),onClick:this.onTrigger,children:"Submit"}),this.props.buttonVisible?Object(h.jsx)(g,{onClick:this.props.onClick,visible:this.props.visible}):Object(h.jsx)(h.Fragment,{})]})})})]})]})}}]),i}(a.a.Component),C=function(e){Object(d.a)(i,e);var t=Object(u.a)(i);function i(e){var s;return Object(o.a)(this,i),(s=t.call(this,e)).inputHandler=function(e){s.setState(Object(l.a)({},e.target.name,e.target.value))},s.onTrigger=function(e){s.props.handleData(s.state.university,s.state.major,s.state.studied_from,s.state.studied_to,s.state.location,s.state.details,s.state.id)},s.state={university:s.props.university,major:s.props.major,studied_from:s.props.studied_from,studied_to:s.props.studied_to,location:s.props.location,details:s.props.details,id:s.props.id},s}return Object(r.a)(i,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("p",{className:"title has-text-primary",children:"Education"}),Object(h.jsxs)("div",{className:"field is-horizontal",children:[Object(h.jsx)("div",{className:"field-label is-normal",children:Object(h.jsx)("label",{className:"label"})}),Object(h.jsxs)("div",{className:"field-body",children:[Object(h.jsx)("div",{className:"field",children:Object(h.jsx)("p",{className:"control is-expanded",children:Object(h.jsx)("input",{className:"input",name:"university",type:"text",placeholder:"University",onChange:this.inputHandler,value:this.state.university})})}),Object(h.jsx)("div",{className:"field",children:Object(h.jsx)("p",{className:"control is-expanded has-icons-right",children:Object(h.jsx)("input",{className:"input",name:"major",type:"text",placeholder:"Major",onChange:this.inputHandler,value:this.state.major})})})]})]}),Object(h.jsxs)("div",{className:"field is-horizontal",children:[Object(h.jsx)("div",{className:"field-label is-normal",children:Object(h.jsx)("label",{className:"label",children:"From"})}),Object(h.jsxs)("div",{className:"field-body",children:[Object(h.jsx)("div",{className:"field",children:Object(h.jsxs)("p",{className:"control is-expanded has-icons-right",children:[Object(h.jsx)("input",{className:"input",name:"studied_from",type:"date",onChange:this.inputHandler,value:this.state.studied_from}),Object(h.jsx)("span",{className:"icon is-right",children:Object(h.jsx)(m.a,{icon:v.a})})]})}),Object(h.jsxs)("div",{className:"field is-horizontal",children:[Object(h.jsx)("div",{className:"field-label is-normal",children:Object(h.jsx)("label",{className:"label ",children:"To"})}),Object(h.jsxs)("p",{className:"control is-expanded has-icons-right",children:[Object(h.jsx)("input",{className:"input",type:"date",name:"studied_to",onChange:this.inputHandler,value:this.state.studied_to}),Object(h.jsx)("span",{className:"icon is-right",children:Object(h.jsx)(m.a,{icon:v.a})})]})]}),Object(h.jsx)("div",{className:"field",children:Object(h.jsx)("p",{className:"control is-expanded has-icons-right",children:Object(h.jsx)("input",{className:"input",type:"text",placeholder:"City, country",name:"location",onChange:this.inputHandler,value:this.state.location})})})]})]}),Object(h.jsxs)("div",{className:"field is-horizontal",children:[Object(h.jsx)("div",{className:"field-label is-normal",children:Object(h.jsx)("label",{className:"label",children:"Description"})}),Object(h.jsx)("div",{className:"field-body",children:Object(h.jsx)("div",{className:"field",children:Object(h.jsx)("div",{className:"control",children:Object(h.jsx)("textarea",{className:"textarea",name:"details",onChange:this.inputHandler,value:this.state.details})})})})]}),Object(h.jsxs)("div",{className:"field is-horizontal",children:[Object(h.jsx)("div",{className:"field-label"}),Object(h.jsx)("div",{className:"field-body",children:Object(h.jsx)("div",{className:"field",children:Object(h.jsxs)("div",{className:"control",children:[Object(h.jsx)("button",{className:"button is-primary",id:f()(),onClick:this.onTrigger,children:"Submit"}),this.props.buttonVisible?Object(h.jsx)(k,{onClick:this.props.onClick,visible:this.props.visible}):Object(h.jsx)(h.Fragment,{})]})})})]})]})}}]),i}(a.a.Component),V=function(e){Object(d.a)(i,e);var t=Object(u.a)(i);function i(){return Object(o.a)(this,i),t.apply(this,arguments)}return Object(r.a)(i,[{key:"render",value:function(){var e=this.props,t=e.name,i=e.surname,s=e.phone,a=e.email;return Object(h.jsxs)("div",{className:"columns is-multiline is-centered",children:[Object(h.jsxs)("div",{className:"column is-narrow",children:[Object(h.jsx)("p",{className:"subtitle is-6",children:"Name:"}),Object(h.jsxs)("p",{className:"title is-6",children:[t," ",i]}),Object(h.jsx)("hr",{})]}),Object(h.jsxs)("div",{className:"column is-narrow",children:[Object(h.jsx)("p",{className:"subtitle is-6",children:"Phone:"}),Object(h.jsx)("p",{className:"title is-6",children:s}),Object(h.jsx)("hr",{})]}),Object(h.jsxs)("div",{className:"column is-narrow",children:[Object(h.jsx)("p",{className:"subtitle is-6",children:"Email:"}),Object(h.jsx)("p",{className:"title is-6",children:a}),Object(h.jsx)("hr",{})]})]})}}]),i}(a.a.Component),S=function(e){Object(d.a)(i,e);var t=Object(u.a)(i);function i(){return Object(o.a)(this,i),t.apply(this,arguments)}return Object(r.a)(i,[{key:"render",value:function(){var e=this.props,t=e.company,i=e.position,s=e.from,a=e.to,n=e.location,c=e.details;return Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"columns is-centered",children:[Object(h.jsxs)("div",{className:"column",children:[Object(h.jsxs)("p",{className:"title is-5 mt-3",children:[i,", ",t]}),Object(h.jsxs)("p",{className:"subtitle is-6",children:[s," - ",a]}),Object(h.jsx)("div",{className:"container",children:c})]}),Object(h.jsx)("div",{className:"column is-narrow has-text-right",children:Object(h.jsx)("p",{children:n})})]})})}}]),i}(a.a.Component),D=function(e){Object(d.a)(i,e);var t=Object(u.a)(i);function i(){return Object(o.a)(this,i),t.apply(this,arguments)}return Object(r.a)(i,[{key:"render",value:function(){var e=this.props,t=e.university,i=e.major,s=e.studied_from,a=e.studied_to,n=e.description,c=e.city;return Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"columns is-centered",children:[Object(h.jsxs)("div",{className:"column",children:[Object(h.jsxs)("p",{className:"title is-5 mt-3",children:[i,", ",t]}),Object(h.jsxs)("p",{className:"subtitle is-6",children:[s," - ",a]}),Object(h.jsx)("div",{className:"container",children:n})]}),Object(h.jsx)("div",{className:"column is-narrow has-text-right",children:Object(h.jsx)("p",{children:c})})]})})}}]),i}(a.a.Component),H=function(e){Object(d.a)(i,e);var t=Object(u.a)(i);function i(e){var s;return Object(o.a)(this,i),(s=t.call(this,e)).handlePersonalData=function(e,t,i,a){s.setState((function(s){return{personalInformations:{firstName:e,lastName:t,phone:i,email:a}}}))},s.handleWorkData=function(e,t,i,a,n,c,o){s.setState((function(s){return Object(l.a)({},o,{company:e,position:t,from:i,to:a,city:n,description:c})}))},s.handleEducationData=function(e,t,i,a,n,c,o){s.setState((function(s){return Object(l.a)({},o,{university:e,major:t,studied_from:i,studied_to:a,location:n,details:c})}))},s.handleResumeVisible=function(){s.setState({resumeIsVisible:!0})},s.handleResumeNotVisible=function(){s.setState({resumeIsVisible:!1})},s.toggleWork2=function(){s.setState((function(e){return{work2Visible:!e.work2Visible}}))},s.toggleWork3=function(){s.setState((function(e){return{work3Visible:!e.work3Visible}}))},s.toggleEdu2=function(){s.setState((function(e){return{edu2Visible:!e.edu2Visible}}))},s.toggleEdu3=function(){s.setState((function(e){return{edu3Visible:!e.edu3Visible}}))},s.handleDemo=function(){s.setState({work2Visible:!0,work3Visible:!0,personalInformations:{firstName:"John",lastName:"Doe",phone:"+91 9999 1234",email:"john.doe@gmail.com"},work_1:{company:"Google",position:"Senior Software Engineer",from:"2020-01-01",to:"2021-02-01",city:"San Francisco, California",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at fermentum velit, ac bibendum diam. Pellentesque quis convallis sem. Aliquam erat volutpat. Curabitur congue eleifend eleifend. Pellentesque rutrum felis nec nisi egestas, sit amet blandit justo auctor. Donec id diam non nulla semper ultrices. Proin finibus varius odio in finibus."},work_2:{company:"Amazon.com",position:"Software Engineer",from:"2019-01-01",to:"2019-12-30",city:"Seattle, Washington",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam facilisis dolor justo, sit amet aliquet dolor iaculis sit amet. Sed venenatis neque arcu, eu ornare velit fringilla et. Nunc mi nisl, dapibus in magna pulvinar, semper malesuada tortor. Curabitur ac efficitur arcu. Vestibulum ante ipsum primis in faucibus orci luctus."},work_3:{company:"Netflix",position:"Junior Software Engineer",from:"2018-01-01",to:"2018-06-15",city:"Portland, Oregon",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam facilisis dolor justo, sit amet aliquet dolor iaculis sit amet. Sed venenatis neque arcu, eu ornare velit fringilla et. Nunc mi nisl, dapibus in magna pulvinar, semper malesuada tortor. Curabitur ac efficitur arcu. Vestibulum ante ipsum primis in faucibus orci luctus. "},edu_1:{university:"University of California",major:"Computer Science",studied_from:"2013-01-01",studied_to:"2016-09-30",location:"Oakland, California",details:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dictum viverra tempor. Ut tristique dolor ac commodo laoreet. Proin porta hendrerit ex, non elementum ante consectetur rutrum. In a volutpat sapien, tincidunt porttitor elit. In hac habitasse platea dictumst. Mauris malesuada imperdiet libero id vehicula. Aliquam neque tellus, consectetur elementum. "},edu_2:{university:"California High School",major:"High School",studied_from:"2009-09-01",studied_to:"2012-04-30",location:"San Ramon, California",details:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend, tortor in fringilla ornare, nisi leo euismod nunc, vel rutrum nunc ligula a orci. Suspendisse dignissim lorem urna, non lobortis nibh elementum in. Morbi vestibulum, lectus quis lobortis porta, risus augue vulputate ligula, vitae maximus nulla nibh nec enim. Nunc. "},edu_3:{university:"",major:"",studied_from:"",studied_to:"",location:"",details:""}})},s.state={personalInformations:{firstName:"",lastName:"",phone:"",email:""},work_1:{company:"",position:"",from:"",to:"",city:"",description:""},work_2:{company:"",position:"",from:"",to:"",city:"",description:""},work_3:{company:"",position:"",from:"",to:"",city:"",description:""},edu_1:{university:"",major:"",studied_from:"",studied_to:"",location:"",details:""},edu_2:{university:"",major:"",studied_from:"",studied_to:"",location:"",details:""},edu_3:{university:"",major:"",studied_from:"",studied_to:"",location:"",details:""},resumeIsVisible:!1,work2Visible:!1,work3Visible:!1,edu2Visible:!1,edu3Visible:!1},s}return Object(r.a)(i,[{key:"render",value:function(){var e,t=this.state.personalInformations,i=t.firstName,s=t.lastName,a=t.phone,n=t.email;return e=this.state.resumeIsVisible?Object(h.jsx)(_,{onClick:this.handleResumeNotVisible}):Object(h.jsx)(N,{onClick:this.handleResumeVisible}),Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(b,{}),Object(h.jsx)("div",{className:"section",children:this.state.resumeIsVisible?Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("p",{className:"title has-text-primary",children:"Resume"}),Object(h.jsx)(V,{name:i,surname:s,phone:a,email:n}),Object(h.jsx)("p",{className:"title has-text-primary mt-5",children:"Work Experience"}),Object(h.jsx)(S,{company:this.state.work_1.company,position:this.state.work_1.position,from:this.state.work_1.from,to:this.state.work_1.to,location:this.state.work_1.city,details:this.state.work_1.description}),""!==this.state.work_2.company?Object(h.jsx)(S,{company:this.state.work_2.company,position:this.state.work_2.position,from:this.state.work_2.from,to:this.state.work_2.to,location:this.state.work_2.city,details:this.state.work_2.description}):Object(h.jsx)(h.Fragment,{}),""!==this.state.work_3.company?Object(h.jsx)(S,{company:this.state.work_3.company,position:this.state.work_3.position,from:this.state.work_3.from,to:this.state.work_3.to,location:this.state.work_3.city,details:this.state.work_3.description}):Object(h.jsx)(h.Fragment,{}),Object(h.jsx)("hr",{}),Object(h.jsx)("p",{className:"title has-text-primary",children:"Education"}),Object(h.jsx)(D,{university:this.state.edu_1.university,major:this.state.edu_1.major,studied_from:this.state.edu_1.studied_from,studied_to:this.state.edu_1.studied_to,description:this.state.edu_1.details,city:this.state.edu_1.location}),""!==this.state.edu_2.university?Object(h.jsx)(D,{university:this.state.edu_2.university,major:this.state.edu_2.major,studied_from:this.state.edu_2.studied_from,studied_to:this.state.edu_2.studied_to,description:this.state.edu_2.details,city:this.state.edu_2.location}):Object(h.jsx)(h.Fragment,{}),""!==this.state.edu_3.university?Object(h.jsx)(D,{university:this.state.edu_3.university,major:this.state.edu_3.major,studied_from:this.state.edu_3.studied_from,studied_to:this.state.edu_3.studied_to,description:this.state.edu_3.details,city:this.state.edu_3.location}):Object(h.jsx)(h.Fragment,{}),Object(h.jsx)("hr",{}),e,Object(h.jsx)(y,{onClick:this.handleDemo})]}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(O,{handleData:this.handlePersonalData,name:i,surname:s,phone:a,email:n}),Object(h.jsx)("hr",{}),Object(h.jsx)(w,{id:"work_1",handleData:this.handleWorkData,company:this.state.work_1.company,position:this.state.work_1.position,from:this.state.work_1.from,to:this.state.work_1.to,location:this.state.work_1.city,details:this.state.work_1.description,onClick:this.toggleWork2,visible:this.state.work2Visible,buttonVisible:!0}),this.state.work2Visible&&Object(h.jsx)(w,{id:"work_2",handleData:this.handleWorkData,company:this.state.work_2.company,position:this.state.work_2.position,from:this.state.work_2.from,to:this.state.work_2.to,location:this.state.work_2.city,details:this.state.work_2.description,onClick:this.toggleWork3,visible:this.state.work3Visible,buttonVisible:!0}),this.state.work3Visible&&Object(h.jsx)(w,{id:"work_3",handleData:this.handleWorkData,company:this.state.work_3.company,position:this.state.work_3.position,from:this.state.work_3.from,to:this.state.work_3.to,location:this.state.work_3.city,details:this.state.work_3.description,onClick:this.toggleWork3,visible:this.state.work3Visible,buttonVisible:!1}),Object(h.jsx)("hr",{}),Object(h.jsx)(C,{id:"edu_1",handleData:this.handleEducationData,university:this.state.edu_1.university,major:this.state.edu_1.major,studied_from:this.state.edu_1.studied_from,studied_to:this.state.edu_1.studied_to,details:this.state.edu_1.details,location:this.state.edu_1.location,onClick:this.toggleEdu2,visible:this.state.edu2Visible,buttonVisible:!0}),this.state.edu2Visible&&Object(h.jsx)(C,{id:"edu_2",handleData:this.handleEducationData,university:this.state.edu_2.university,major:this.state.edu_2.major,studied_from:this.state.edu_2.studied_from,studied_to:this.state.edu_2.studied_to,details:this.state.edu_2.details,location:this.state.edu_2.location,onClick:this.toggleEdu3,visible:this.state.edu3Visible,buttonVisible:!0}),this.state.edu3Visible&&Object(h.jsx)(C,{id:"edu_3",handleData:this.handleEducationData,university:this.state.edu_3.university,major:this.state.edu_3.major,studied_from:this.state.edu_3.studied_from,studied_to:this.state.edu_3.studied_to,details:this.state.edu_3.details,location:this.state.edu_3.location,onClick:this.toggleEdu3,visible:this.state.edu3Visible,buttonVisible:!1}),Object(h.jsx)("hr",{}),e]})})]})}}]),i}(a.a.Component);c.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(H,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.5408e798.chunk.js.map