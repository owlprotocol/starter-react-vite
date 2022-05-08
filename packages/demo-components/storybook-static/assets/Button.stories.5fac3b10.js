var f=Object.defineProperty,S=Object.defineProperties;var k=Object.getOwnPropertyDescriptors;var a=Object.getOwnPropertySymbols;var d=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable;var u=(o,t,n)=>t in o?f(o,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[t]=n,s=(o,t)=>{for(var n in t||(t={}))d.call(t,n)&&u(o,n,t[n]);if(a)for(var n of a(t))p.call(t,n)&&u(o,n,t[n]);return o},m=(o,t)=>S(o,k(t));var y=(o,t)=>{var n={};for(var e in o)d.call(o,e)&&t.indexOf(e)<0&&(n[e]=o[e]);if(o!=null&&a)for(var e of a(o))t.indexOf(e)<0&&p.call(o,e)&&(n[e]=o[e]);return n};import{r as _}from"./index.229e7bac.js";import{a as x,j as C}from"./jsx-runtime.67f9f49e.js";const r=j=>{var c=j,{primary:o=!1,size:t="medium",backgroundColor:n,label:e}=c,g=y(c,["primary","size","backgroundColor","label"]);const b=o?"storybook-button--primary":"storybook-button--secondary",[i,B]=_.exports.useState(0);return x("button",m(s({type:"button",className:["storybook-button",`storybook-button--${t}`,b].join(" "),style:{backgroundColor:n},onClick:()=>B(i+1)},g),{children:[e," count ",i]}))};try{r.displayName="Button",r.__docgenInfo={description:"Primary UI component for user interaction",displayName:"Button",props:{primary:{defaultValue:{value:"false"},description:"Is this the principal call to action on the page?",name:"primary",required:!1,type:{name:"boolean"}},backgroundColor:{defaultValue:null,description:"What background color to use",name:"backgroundColor",required:!1,type:{name:"string"}},size:{defaultValue:{value:"medium"},description:"How large should the button be?",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},label:{defaultValue:null,description:"Button contents",name:"label",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"Optional click handler",name:"onClick",required:!1,type:{name:"(() => void)"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.tsx#Button"]={docgenInfo:r.__docgenInfo,name:"Button",path:"src/components/Button/Button.tsx#Button"})}catch{}var z={parameters:{storySource:{source:`import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Example/Button',
    component: Button,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    primary: true,
    label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
    label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
    size: 'large',
    label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
    size: 'small',
    label: 'Button',
};
`,locationsMap:{primary:{startLoc:{col:48,line:17},endLoc:{col:78,line:17},startBody:{col:48,line:17},endBody:{col:78,line:17}},secondary:{startLoc:{col:48,line:17},endLoc:{col:78,line:17},startBody:{col:48,line:17},endBody:{col:78,line:17}},large:{startLoc:{col:48,line:17},endLoc:{col:78,line:17},startBody:{col:48,line:17},endBody:{col:78,line:17}},small:{startLoc:{col:48,line:17},endLoc:{col:78,line:17},startBody:{col:48,line:17},endBody:{col:78,line:17}}}}},title:"Example/Button",component:r,argTypes:{backgroundColor:{control:"color"}}};const l=o=>C(r,s({},o)),h=l.bind({});h.args={primary:!0,label:"Button"};const L=l.bind({});L.args={label:"Button"};const T=l.bind({});T.args={size:"large",label:"Button"};const v=l.bind({});v.args={size:"small",label:"Button"};const q=["Primary","Secondary","Large","Small"];export{T as Large,h as Primary,L as Secondary,v as Small,q as __namedExportsOrder,z as default};
//# sourceMappingURL=Button.stories.5fac3b10.js.map
