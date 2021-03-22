(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{370:function(s,t,a){"use strict";a.r(t);var n=a(45),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"diddocumenthelper"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#diddocumenthelper"}},[s._v("#")]),s._v(" DidDocumentHelper")]),s._v(" "),a("p",[a("code",[s._v("DidDocumentHelper")]),s._v(" allows to easily create a "),a("code",[s._v("DidDocument")]),s._v(" object.")]),s._v(" "),a("h2",{attrs:{id:"provided-operations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#provided-operations"}},[s._v("#")]),s._v(" Provided Operations")]),s._v(" "),a("ol",[a("li",[a("p",[a("code",[s._v("fromWallet")]),s._v(", creates a "),a("code",[s._v("DidDocument")]),s._v(" from the given "),a("code",[s._v("wallet")]),s._v(" and the "),a("code",[s._v("pubKeys")]),s._v(". Optionally the list "),a("code",[s._v("service")]),s._v(" can be specified.")]),s._v(" "),a("div",{staticClass:"language-dart line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-dart"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" Future"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("DidDocument"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("fromWallet")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  required Wallet wallet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  required List"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("CommercioPublicKey"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" pubKeys"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  List"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("DidDocumentService"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" service"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])])])]),s._v(" "),a("h2",{attrs:{id:"usage-examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-examples"}},[s._v("#")]),s._v(" Usage examples")]),s._v(" "),a("div",{staticClass:"language-dart line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-dart"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("final")]),s._v(" wallet "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Wallet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("derive")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("mnemonic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" networkInfo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Generate keys")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("final")]),s._v(" rsaVerificationKeyPair "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("await")]),s._v(" KeysHelper"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("generateRsaKeyPair")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("final")]),s._v(" rsaVerificationPubKey "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" rsaVerificationKeyPair"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("publicKey"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("final")]),s._v(" rsaSignatureKeyPair "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("await")]),s._v(" KeysHelper"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("generateRsaKeyPair")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'RsaSignatureKey2018'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("final")]),s._v(" rsaSignaturePubKey "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" rsaSignatureKeyPair"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("publicKey"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("final")]),s._v(" pubKeys "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("rsaVerificationPubKey"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" rsaSignaturePubKey"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Generate service")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("final")]),s._v(" serviceId "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Uuid")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("v4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("final")]),s._v(" service "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("DidDocumentService")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" serviceId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'service-type'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    endpoint"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'https://endpoint.com/services/${serviceId}'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Create the Did Document")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("final")]),s._v(" didDocument "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" DidDocumentHelper"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("fromWallet")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n  wallet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" wallet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  pubKeys"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" pubKeys"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  service"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" service"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);