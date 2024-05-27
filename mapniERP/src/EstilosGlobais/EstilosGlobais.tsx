import { createGlobalStyle } from "styled-components";


const EstilosGlobais= createGlobalStyle`

@font-face {
  font-family: "roboto";
  src: url(../../fonts/roboto/Roboto-Regular.ttf);
}

@font-face {
  font-family: 'inter';
  src: url(../../fonts/inter/Inter-Regular.ttf);
}

@font-face {
  font-family: 'poppins';
  src: url(../../fonts/poppins/Poppins-Light.ttf);
}

:root {
  --amarelo-padrao:#ba9009;
  --amarelo-hover:#FBC105;
  --preto-padrao:#1F1F1F;
  --cinza-padrao:#00000019;
  --vermelho-erro:#e22a2a;
  --vermelho-botao-cancelar:#ff4343;
  --cinza-borda-input:#83838380;
  --preto-hover-input:#000000b3;
  --azul-icones:#004b79;
  --background-input-cinza:#a7a7a71c;
}

html {
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
  font-family: "poppins", "inter", "roboto";
  font-weight:200;
  font-size:13px;
  box-sizing:border-box;
}

body {
  margin: 0;
}
main {
  display: block;
}
h1 {
  font-size: 1.1em;
  margin: 0;
}

h2,h3{
  font-size: 1em;
  margin:0;
}

hr {
  box-sizing: content-box;
  height: 0;
  overflow: visible;
}

pre {
  font-family: monospace, monospace;
  font-size: 1em;
}

a {
  background-color: transparent;
  text-decoration:none;
}

abbr[title] {
  border-bottom: none;
  text-decoration: underline;
  text-decoration: underline dotted;
}

b,
strong {
  font-weight: bolder;
}

code,
kbd,
samp {
  font-family: monospace, monospace;
  font-size: 1em;
}

small {
  font-size: 80%;
}

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

img {
  border-style: none;
  margin:0;
  padding:0;
}

label {
  padding:0;
  margin:0;
}

button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
  outline:none;
  box-sizing:border-box;
  padding:0;
}

button,
input {
  overflow: visible;
}


button,
select {
  text-transform: none;
}

button,
select:hover {
  cursor:pointer;
}

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}


button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}


button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

fieldset {
  padding: 0.35em 0.75em 0.625em;
}

legend {
  box-sizing: border-box;
  color: inherit;
  display: table;
  max-width: 100%;
  padding: 0;
  white-space: normal;
}


progress {
  vertical-align: baseline;
}

textarea {
  overflow: auto;
}

li,ul {
  list-style-type:none;
  padding:0;
  margin:0;
}


[type="checkbox"],
[type="radio"] {
  box-sizing: border-box;
  padding: 0;
}

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}


[type="search"] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}


[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}


details {
  display: block;
}



summary {
  display: list-item;
}


template {
  display: none;
}

[hidden] {
  display: none;
}

`

export default EstilosGlobais;
