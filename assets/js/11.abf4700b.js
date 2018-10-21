(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{176:function(e,t,s){"use strict";s.r(t);var n=s(20),a=Object(n.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[e._m(0),e._v(" "),s("Avertissement"),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),e._m(9),e._v(" "),e._m(10),e._v(" "),s("p",[e._v("On peut diviser les types de données de Rust en 4 grandes catégories, que l'on va voir en détail dans les chapitres suivant.")]),e._v(" "),e._m(11)],1)},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"les-types-de-donnees"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#les-types-de-donnees","aria-hidden":"true"}},[this._v("#")]),this._v(" Les types de données")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"qu-est-ce-qu-un-type-de-donnee"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#qu-est-ce-qu-un-type-de-donnee","aria-hidden":"true"}},[this._v("#")]),this._v(" Qu'est ce qu'un type de donnée ?")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[e._v("En programmation, quand on déclare une variable, elle toujours d'un certain "),s("strong",[e._v("type")]),e._v(" : il peut s'agir d'un "),s("em",[e._v("booléen")]),e._v(", d'un "),s("em",[e._v("nombre")]),e._v(", ou d'une "),s("em",[e._v("chaîne de caractères")]),e._v("... Mais aussi de types plus complexes comme des "),s("em",[e._v("tableaux")]),e._v(", des "),s("em",[e._v("collections")]),e._v(", des "),s("em",[e._v("objets")]),e._v("... C'est ce qu'on désigne par "),s("strong",[e._v("types de données")]),e._v(".")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[e._v("Dans la mémoire de l'ordinateur, la valeur d'une variable est toujours stockée dans un emplacement mémoire sous forme d'une "),s("strong",[e._v("séquence de bits")]),e._v(", comme par exemple "),s("code",[e._v("11000000")]),e._v(" (on a ici 8 "),s("em",[e._v("bits")]),e._v(", soit un "),s("em",[e._v("octet")]),e._v("). Du point de vue de la machine, il n'y a pas de "),s("em",[e._v("nombres")]),e._v(", de "),s("em",[e._v("chaînes de caractères")]),e._v(" ou de "),s("em",[e._v("booléen")]),e._v(", seulement des séquences de bits, plus ou moins longues.")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[e._v("C'est le langage de programmation qui "),s("strong",[e._v("interprète")]),e._v(" ensuite ces séquences de bits comme étant un "),s("em",[e._v("nombre")]),e._v(", une "),s("em",[e._v("chaîne de caractères")]),e._v(" ou autre ; en lui assignant justement un "),s("strong",[e._v("type")]),e._v(" : ainsi le programme ne stocke pas simplement la valeur "),s("code",[e._v("11000000")]),e._v(" en mémoire ; mais aussi le type de donnée que cet octet (ou plusieurs octets) représente pour lui ; afin de savoir comment l'interpréter.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("L'interprétation de "),t("code",[this._v("11000000")]),this._v(' dépend du type qui lui est assigné. Si le type est "entier non-signé" ('),t("code",[this._v("u8")]),this._v(" en Rust), la séquence de bits sera interprétée comme un nombre décimal valant "),t("strong",[this._v("192")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[e._v("EXPLICATION")]),e._v(" "),s("div",{staticClass:"language-rust line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-rust"}},[s("code",[s("span",{attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{attrs:{class:"token number"}},[e._v("2")]),s("span",{attrs:{class:"token operator"}},[e._v("^")]),s("span",{attrs:{class:"token number"}},[e._v("7")]),e._v(" "),s("span",{attrs:{class:"token operator"}},[e._v("+")]),e._v(" "),s("span",{attrs:{class:"token number"}},[e._v("2")]),s("span",{attrs:{class:"token operator"}},[e._v("^")]),s("span",{attrs:{class:"token number"}},[e._v("8")]),s("span",{attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),s("span",{attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{attrs:{class:"token number"}},[e._v("192")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Si le type était en entier "),t("strong",[this._v("signé")]),this._v(" ("),t("code",[this._v("i8")]),this._v("), la séquence de bits sera interprétée comme le nombre décimal négatif "),t("code",[this._v("-64")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[e._v("EXPLICATION")]),e._v(" "),s("p",[e._v("Le bit le plus à gauche est utilisé pour indiquer si le nombre est négatif ou positif. On considère que "),s("code",[e._v("0")]),e._v(" veut dire "),s("code",[e._v("+")]),e._v(" et "),s("code",[e._v("1")]),e._v(" veut dire "),s("code",[e._v("-")]),e._v(". Il nous reste ensuite seulement 7 bits pour le calcul :")]),e._v(" "),s("div",{staticClass:"language-rust line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-rust"}},[s("code",[s("span",{attrs:{class:"token operator"}},[e._v("-")]),s("span",{attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{attrs:{class:"token number"}},[e._v("2")]),s("span",{attrs:{class:"token operator"}},[e._v("^")]),s("span",{attrs:{class:"token number"}},[e._v("7")]),s("span",{attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),s("span",{attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{attrs:{class:"token operator"}},[e._v("-")]),s("span",{attrs:{class:"token number"}},[e._v("64")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Sur la même logique, "),t("code",[this._v("11000000")]),this._v(" pourrait aussi bien représenter un caractère de la norme ISO/CEI 8859-1, un emoji, ou tout autre chose que le langage aura décidé de lui faire représenter.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"vue-d-ensemble-des-types-de-donnees-de-rust"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue-d-ensemble-des-types-de-donnees-de-rust","aria-hidden":"true"}},[this._v("#")]),this._v(" Vue d'ensemble des types de données de Rust")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[s("strong",[e._v("les primitifs atomiques")])]),e._v(" "),s("li",[s("strong",[e._v("les primitifs composés")]),e._v(" (collections de primitifs atomiques)")]),e._v(" "),s("li",[s("strong",[e._v("les collections")])]),e._v(" "),s("li",[s("strong",[e._v("les types personnalisés")]),e._v(" ("),s("em",[e._v("custom")]),e._v(", crée par le développeur)")])])}],!1,null,null,null);a.options.__file="type-de-donnees.md";t.default=a.exports}}]);