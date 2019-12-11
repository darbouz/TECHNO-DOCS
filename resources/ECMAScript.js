var ECMAScript = `<h1 id="title1">
    Introduction
</h1>
<p>
    Les fonctionnalités du langage de base JavaScript sont définies dans la
    norme ECMA-262. Le langage défini dans cette norme s'appelle ECMAScript. Ce
    que vous savez comme JavaScript dans les navigateurs et dans Node.js est en
    réalité un sur-ensemble d’ECMAScript. Les navigateurs et Node.js ajoutent
    des fonctionnalités via des objets et des méthodes supplémentaires, mais le
    noyau de JavaScript reste tel que défini dans ECMAScript. Le développement
    en cours de ECMA-262 est essentiel au succès de JavaScript dans son
    ensemble.
</p>
<h1 id="title2">
   Block Bindings
</h1>
<p>
    Traditionnellement, le fonctionnement des déclarations de variables a été
    une partie délicate de la programmation en JavaScript. Dans la plupart des
    langages basés sur le langage C, des variables (plus communément appelées
    liaisons, car un nom est lié à une valeur dans une portée) sont créées à
    l'endroit où la déclaration a lieu. En JavaScript, cependant, ce n'est pas
    le cas. Le lieu de création de vos variables dépend de la façon dont vous
    les déclarez. ECMAScript 6 offre des options permettant de contrôler plus
    facilement l'étendue. Ce chapitre explique pourquoi les déclarations var
    classiques peut prêter à confusion, présente les liaisons de niveau bloc
    dans ECMAScript 6, puis propose quelques méthodes recommandées pour les
    utiliser.
</p>
<h2>
  Var Declarations and Hoisting
</h2>
<p>
    Les déclarations de variable utilisant var sont traitées comme si elles se
    trouvaient au sommet de la fonction (ou dans la portée globale, si elles
    sont déclarées en dehors d’une fonction), quel que soit l’emplacement de la
    déclaration réelle ; c'est ce qu'on appelle le levage. Pour une
    démonstration de ce qu’est le levage, considérons la définition de fonction
    suivante :
</p>
<p>
    function getValue(condition) {
    <br/>
    if (condition) {
    <br/>
    var value = "blue";
    <br/>
    // other code
    <br/>
    return value;
    <br/>
    } else {
    <br/>
    // value exists here with a value of undefined
    <br/>
    return null;
    <br/>
    }
    <br/>
    // value exists here with a value of undefined
    <br/>
    }
</p>
<p>
    Si vous ne connaissez pas JavaScript, vous pouvez vous attendre à ce que la
    valeur de la variable soit créée uniquement si la condition est évaluée à
    true. En fait, la valeur de la variable est créée malgré tout. En coulisse,
    le moteur JavaScript change la fonction getValue pour ressembler à ceci :
</p>
<p>
    function getValue(condition) {
    <br/>
    var value;
    <br/>
    if (condition) {
    <br/>
    value = "blue";
    <br/>
    // other code
    <br/>
    return value;
    <br/>
    } else {
    <br/>
    return null;
    <br/>
    }
    <br/>
    }
</p>
<p>
    La déclaration de valeur est levée vers le haut et l'initialisation reste
    au même endroit. Cela signifie que la valeur de la variable est toujours
    accessible depuis la clause else. Si elle est utilisée à partir de la
    clause else, la variable aura simplement une valeur indéfinie car elle n’a
    pas été initialisée dans le bloc else.
</p>
<p>
    Il faut souvent un certain temps aux nouveaux développeurs JavaScript pour
    s’habituer au levage de déclarations, et une incompréhension de ce
    comportement unique peut finir par causer des bugs. Pour cette raison,
    ECMAScript 6 introduit des options de portée au niveau des blocs afin de
    donner aux développeurs plus de contrôle sur le cycle de vie d’une
    variable.
</p>
<h2>
    <a name="_Toc19544897">Déclarations au niveau du bloc</a>
</h2>
<h4>
    <a name="_Toc19544898">let Declarations</a>
</h4>
<p>
    La syntaxe de déclaration let est la même que celle de var. En gros, vous
    pouvez remplacer var par let pour déclarer une variable, mais limiter la
    portée de la variable au bloc de code actuel. Etant donné que les
    déclarations de lettres ne sont pas placées au-dessus du bloc englobant, il
    est préférable de placer les déclarations de location en premier dans le
    bloc afin qu'elles soient disponibles pour le bloc entier. Voici un exemple
    :
</p>
<p>
    <img
        width="204"
        height="241"
        src="img/Ecma6/image006.png"
    />
</p>
<h4>
    <a name="_Toc19544899">const Declarations</a>
</h4>
<p>
    Vous pouvez également définir des liaisons dans ECMAScript 6 avec la
    syntaxe de déclaration const. Les liaisons déclarées à l'aide de const sont
    considérées comme des constantes, ce qui signifie que leurs valeurs ne
    peuvent pas être modifiées une fois définies. Pour cette raison, chaque
    liaison const doit être initialisée lors de la déclaration, comme illustré
    dans cet exemple :
</p>
<p>
    <img
        width="228"
        height="78"
        src="img/Ecma6/image007.png"
    />
</p>
<h4>
    <a name="_Toc19544900">Block binding dans les boucles</a>
</h4>
<p>
    Peut-être un domaine dans lequel les développeurs souhaitent-ils le plus
    cibler les variables au niveau des blocs est la boucle for, où la variable
    de compteur jetable est censée être utilisée uniquement à l'intérieur de la
    boucle. Par exemple, il n’est pas rare de voir un code comme celui-ci en
    JavaScript :
</p>
<p>
    <img
        width="249"
        height="90"
        src="img/Ecma6/image008.png"
    />
</p>
<p>
    Dans d'autres langues où la portée au niveau du bloc est la valeur par
    défaut, cet exemple devrait fonctionner comme prévu - seule la boucle for
    devrait avoir accès à la variable i. Cependant, en JavaScript, la variable
    i est toujours accessible une fois la boucle terminée, car la déclaration
    var est levée. Utiliser let à la place, comme dans le code suivant, devrait
    produire le comportement souhaité :
</p>
<p>
    <img
        width="271"
        height="90"
        src="img/Ecma6/image009.png"
    />
</p>
<h1 id="title3">
   Functions
</h1>
<h2>
    <a name="_Toc19544902">Fonctions avec valeurs de paramètres par défaut</a>
</h2>
<p>
    ECMAScript 6 facilite la fourniture de valeurs par défaut pour les
    paramètres en fournissant les initialisations utilisées lorsque le
    paramètre n’est pas officiellement transmis. Par exemple :
</p>
<p>
    <img
        width="394"
        height="72"
        src="img/Ecma6/image010.png"
    />
</p>
<p>
    Cette fonction attend que seul le premier paramètre soit toujours passé.
    Les deux autres paramètres ont des valeurs par défaut, ce qui rend le corps
    de la fonction beaucoup plus petit, car il n’est pas nécessaire d’ajouter
    de code pour rechercher une valeur manquante.
</p>
<p>
    Paramètres non nommés
</p>
<h4>
    <a name="_Toc19544903">Paramètres non nommés dans ECMAScript 5</a>
</h4>
<p>
    Dès le début, JavaScript a fourni l’objet arguments comme moyen d’inspecter
    tous les paramètres de fonction transmis sans nécessairement définir chaque
    paramètre. Bien que l'inspection d'arguments fonctionne bien dans la
    plupart des cas, cet objet peut être un peu fastidieux. Par exemple,
    examinez ce code, qui inspecte l’objet arguments :
</p>
<p>
    <img
        width="388"
        height="316"
        src="img/Ecma6/image012.jpg"
    />
</p>
<h4>
    <a name="_Toc19544904">Rest Parameters</a>
</h4>
<p>
    Un paramètre de repos est indiqué par trois points (...) précédant un
    paramètre nommé. Ce paramètre nommé devient un tableau contenant le reste
    des paramètres transmis à la fonction, d'où proviennent les paramètres name
    rest. Par exemple, pick () peut être réécrit en utilisant des paramètres
    rest, comme ceci :
</p>
<p>
    <img
        width="315"
        height="131"
        src="img/Ecma6/image013.png"
    />
</p>
<p>
    Dans cette version de la fonction, clés est un paramètre de repos qui
    contient tous les paramètres passés après objet (contrairement aux
    arguments qui contiennent tous les paramètres, y compris le premier). Cela
    signifie que vous pouvez parcourir les touches du début à la fin sans
    souci. En prime, vous pouvez voir en regardant dans la fonction qu’elle est
    capable de gérer un nombre quelconque de paramètres.
</p>
<h2>
    <a name="_Toc19544905">Capacités accrues du constructeur de fonctions</a>
</h2>
<p>
    Le constructeur Function est une partie de JavaScript rarement utilisée qui
    vous permet de créer de manière dynamique une nouvelle fonction. Les
    arguments du constructeur sont les paramètres de la fonction et du corps de
    la fonction, le tout sous forme de chaînes. Voici un exemple :
    <br/>
    <img
        width="377"
        height="46"
        src="img/Ecma6/image014.png"
    />
</p>
<p>
    ECMAScript 6 augmente les capacités du constructeur de fonctions pour
    autoriser les paramètres par défaut et les paramètres de repos. Vous devez
    simplement ajouter un signe égal et une valeur aux noms de paramètre, comme
    suit :
</p>
<p>
    <img
        width="280"
        height="71"
        src="img/Ecma6/image015.png"
    />
</p>
<p>
    <img
        width="340"
        height="50"
        src="img/Ecma6/image016.png"
    />
</p>
<h2>
    <a name="_Toc19544906">Arrow Functions</a>
</h2>
<h4>
    <a name="_Toc19544907">Arrow Function Syntax</a>
</h4>
<p>
    La syntaxe des fonctions fléchées se présente sous plusieurs formes, en
    fonction de ce que vous essayez d'accomplir. Toutes les variations
    commencent par les arguments de la fonction, suivis de la flèche, puis du
    corps de la fonction. Les arguments et le corps peuvent prendre différentes
    formes en fonction de l'utilisation. Par exemple, la fonction de flèche
    suivante prend un seul argument et le retourne simplement :
</p>
<p>
    <img
        width="178"
        height="100"
        src="img/Ecma6/image017.png"
    />
</p>
<p>
    Si vous passez plusieurs arguments, vous devez inclure des parenthèses
    autour de ces arguments, comme ceci :
</p>
<p>
    <img
        width="223"
        height="104"
        src="img/Ecma6/image018.png"
    />
</p>
<p>
    Si la fonction ne contient aucun argument, vous devez inclure un ensemble
    vide de parenthèses dans la déclaration, comme suit :
</p>
<p>
    <img
        width="206"
        height="108"
        src="img/Ecma6/image019.png"
    />
</p>
<p>
    Lorsque vous souhaitez fournir un corps de fonction plus traditionnel,
    comprenant éventuellement plusieurs expressions, vous devez le mettre entre
    accolades et définir explicitement une valeur de retour, comme dans cette
    version de sum () :
</p>
<p>
    <img
        width="179"
        height="48"
        src="img/Ecma6/image020.png"
    />
</p>
<h4>
    <a name="_Toc19544908">This</a>
</h4>
<p>
    L'une des zones d'erreur les plus courantes en JavaScript est la liaison de
    ces fonctions internes. Comme sa valeur peut changer dans une seule
    fonction en fonction du contexte dans lequel elle est appelée, il est
    possible d’affecter par erreur un objet lorsque vous voulez en affecter un
    autre. Prenons l'exemple suivant :
</p>
<p>
    <img
        width="358"
        height="195"
        src="img/Ecma6/image021.png"
    />
</p>
<p>
    Dans ce code, l'objet PageHandler est conçu pour gérer les interactions sur
    la page. La méthode init () est appelée pour configurer les interactions et
    cette méthode affecte à son tour un gestionnaire d'événements d'appeler
    this.doSomething (). Cependant, ce code ne fonctionne pas exactement comme
    prévu.
</p>
<p>
    L'appel à this.doSomething () est interrompu car il s'agit d'une référence
    à l'objet qui était la cible de l'événement (dans ce cas, le document) au
    lieu d'être lié à PageHandler. Si vous essayez d'exécuter ce code, vous
    obtiendrez une erreur lorsque le gestionnaire d'événements se déclenche car
    this.doSomething () n'existe pas sur l'objet de document cible.
</p>
<p>
    Vous pouvez résoudre ce problème en liant la valeur de ceci à PageHandler à
    l'aide de la méthode bind () de la fonction, comme ceci :
</p>
<p>
    <img
        width="353"
        height="71"
        src="img/Ecma6/image022.png"
    />
</p>
<p>
    Maintenant, le code fonctionne comme prévu, mais cela peut paraître un peu
    étrange. En appelant bind (this), vous créez en fait une nouvelle fonction
    dont elle est liée à la fonction courante, qui est PageHandler. Pour éviter
    de créer une fonction supplémentaire, un meilleur moyen de corriger ce code
    consiste à utiliser une fonction de flèche. Les fonctions fléchées n'ont
    pas cette liaison, ce qui signifie que la valeur de cela dans une fonction
    fléchée ne peut être déterminée qu'en consultant la chaîne de
    l'oscilloscope. Si la fonction de flèche est contenue dans une fonction
    non-flèche, ce sera la même chose que la fonction contenante ; sinon, ceci
    n'est pas défini. Voici une façon d'écrire ce code en utilisant une
    fonction de flèche :
</p>
<p>
    <img
        width="363"
        height="187"
        src="img/Ecma6/image023.png"
    />
</p>
<h1 id="title4">
   
        Destruction pour un accès plus facile aux données
  
</h1>
<p>
    Dans ECMAScript 5 et les versions antérieures, la nécessité de récupérer
    des informations à partir d'objets et de tableaux peut entraîner une grande
    quantité de code en double pour obtenir certaines données dans des
    variables locales. Par exemple :
</p>
<p>
    <img
        width="175"
        height="115"
        src="img/Ecma6/image024.png"
    />
</p>
<p>
    Ce code extrait les valeurs de repeat et save de l'objet options et stocke
    ces données dans des variables locales portant le même nom. Bien que ce
    code paraisse simple, imaginez que vous ayez un grand nombre de variables à
    affecter: vous devez les affecter toutes une par une. Et si vous deviez
    parcourir une structure de données imbriquée pour rechercher les
    informations, vous devrez peut-être parcourir toute la structure uniquement
    pour rechercher un élément de données.
</p>
<p>
    C’est pourquoi ECMAScript 6 ajoute la déstructuration des objets et des
    tableaux. Lorsque vous décomposez une structure de données en parties plus
    petites, il devient beaucoup plus facile d'obtenir les informations dont
    vous avez besoin. De nombreux langages implémentent la déstructuration avec
    un minimum de syntaxe pour simplifier l'utilisation du processus.
    L’implémentation d’ECMAScript 6 utilise en fait une syntaxe avec laquelle
    vous êtes déjà familiarisé : la syntaxe des littéraux d’objet et de
    tableau.
</p>
<h2>
    <a name="_Toc19544910">Destructuration d'objets</a>
</h2>
<p>
    La syntaxe de déstructuration des objets utilise un littéral d'objet situé
    à gauche d'une opération d'affectation. Par exemple :
</p>
<p>
    <img
        width="232"
        height="128"
        src="img/Ecma6/image025.png"
    />
</p>
<p>
    Dans ce code, la valeur de node.type est stockée dans une variable appelée
    type et la valeur de node.name est stockée dans une variable appelée nom.
    Le type et le nom de l'identificateur sont à la fois des déclarations de
    variables locales et les propriétés permettant de lire la valeur sur
    l'objet node.
</p>
<h2>
    <a name="_Toc19544911">Destructuration des tableaux</a>
</h2>
<p>
    La syntaxe de déstructuration des tableaux est très similaire à la
    déstructuration des objets: elle utilise simplement la syntaxe littérale de
    tableau au lieu de la syntaxe littérale d'objet. La déstructuration opère
    sur des positions dans un tableau plutôt que sur les propriétés nommées
    disponibles dans les objets. Par exemple :
</p>
<p>
    <img
        width="250"
        height="87"
        src="img/Ecma6/image026.png"
    />
</p>
<p>
    Ici, la déstructuration de tableau extrait les valeurs "rouge" et "vert" du
    tableau de couleurs et les stocke dans les variables firstColor et
    secondColor. Ces valeurs sont choisies en raison de leur position dans le
    tableau ; les noms de variables réels pourraient être n'importe quoi. Tous
    les éléments non mentionnés explicitement dans le schéma de déstructuration
    sont ignorés. Gardez à l’esprit que le tableau n’a aucunement changé.
</p>
<h1 id="title5">
  Sets and Maps
</h1>
<p>
    Dans ECMAScript 5, les développeurs ont imité des ensembles et des cartes
    en utilisant des propriétés d'objet, comme suit :
</p>
<p>
    <img
        width="181"
        height="113"
        src="img/Ecma6/image027.png"
    />
</p>
<p>
    La variable set dans cet exemple est un objet avec un prototype null,
    garantissant qu'aucune propriété héritée ne figure sur l'objet.
    L'utilisation de propriétés d'objet en tant que valeurs uniques à vérifier
    est une approche courante dans ECMAScript 5. Lorsqu'une propriété est
    ajoutée à l'objet set, elle est définie sur true. Les instructions
    conditionnelles (telles que l'instruction if dans cet exemple) peuvent
    facilement vérifier si la valeur est présente.
</p>
<p>
    La seule différence réelle entre un objet utilisé en tant qu'ensemble et un
    objet utilisé en tant que carte est la valeur stockée. Par exemple, cet
    exemple utilise un objet comme une carte.
</p>
<p>
    <img
        width="208"
        height="98"
        src="img/Ecma6/image028.png"
    />
</p>
<h2>
    <a name="_Toc19544913">Sets</a>
</h2>
<p>
    ECMAScript 6 ajoute un type de set qui est une liste ordonnée de valeurs
    sans doublons. Les ensembles permettent un accès rapide aux données qu’ils
    contiennent, en ajoutant une méthode plus efficace de suivi des valeurs
    discrètes.
</p>
<h4>
    <a name="_Toc19544914">Créer sets et ajouter des éléments</a>
</h4>
<p>
    Les ensembles sont créés à l'aide de new Set () et les éléments sont
    ajoutés à un ensemble en appelant la méthode add (). Vous pouvez voir le
    nombre d'éléments dans un ensemble en vérifiant la propriété size :
</p>
<p>
    <img
        width="175"
        height="72"
        src="img/Ecma6/image029.png"
    />
</p>
<p>
    Les ensembles ne contraignent pas les valeurs pour déterminer si elles sont
    identiques. Cela signifie qu'un ensemble peut contenir le nombre 5 et la
    chaîne "5" sous forme de deux éléments distincts. Vous pouvez également
    ajouter plusieurs objets à l'ensemble et ces objets resteront distincts :
</p>
<p>
    <img
        width="194"
        height="116"
        src="img/Ecma6/image030.png"
    />
</p>
<h4>
    <a name="_Toc19544915">Supprimés les éléments</a>
</h4>
<p>
    Il est également possible de supprimer des éléments d'un ensemble. Vous
    pouvez supprimer un seul élément à l'aide de la méthode delete () ou le
    supprimer de l'ensemble en appelant la méthode clear (). Ce code montre les
    deux en action :
</p>
<p>
    <img
        width="126"
        height="53"
        src="img/Ecma6/image031.png"
    />
</p>
<p>
    <img
        width="230"
        height="165"
        src="img/Ecma6/image032.png"
    />
</p>
<h4>
    <a name="_Toc19544916">forEach() Method pour Sets</a>
</h4>
<p>
    La méthode forEach () reçoit une fonction de rappel qui accepte trois
    arguments :
</p>
<p>
    · La valeur de la prochaine position dans l'ensemble
</p>
<p>
    · La même valeur que le premier argument
</p>
<p>
    · L'ensemble à partir duquel la valeur est lue
</p>
<p>
    <img
        width="267"
        height="85"
        src="img/Ecma6/image033.png"
    />
</p>
<p>
    Ce code parcourt chaque élément de l'ensemble et génère les valeurs
    transmises à la fonction de rappel forEach (). Chaque fois que la fonction
    de rappel s'exécute, la clé et la valeur sont identiques, et ownerSet est
    toujours égal à set. La sortie est :
</p>
<p>
    <img
        width="112"
        height="65"
        src="img/Ecma6/image034.png"
    />
</p>
<h4>
    <a name="_Toc19544917">Conversion d'un set en tableau</a>
</h4>
<p>
    La conversion d'un tableau en un ensemble est facile car vous pouvez passer
    le tableau au constructeur Set. La conversion d'un ensemble en tableau est
    également facile si vous utilisez l'opérateur spread (...). Le chapitre 3 a
    présenté l’opérateur spread comme moyen de fractionner les éléments d’un
    tableau en paramètres de fonction distincts. L'opérateur spread peut
    également convertir des objets itérables, tels que des ensembles, en
    tableaux. Par exemple :
</p>
<p>
    <img
        width="275"
        height="61"
        src="img/Ecma6/image035.png"
    />
</p>
<h2>
    <a name="_Toc19544918">Maps</a>
</h2>
<p>
    Le type de carte ECMAScript 6 est une liste ordonnée de paires clé-valeur,
    la clé et la valeur pouvant être de n'importe quel type. L’équivalence de
    clé est déterminée en appelant la méthode Object.is (). Vous pouvez donc
    avoir une clé de 5 et une clé de "5" car il s’agit de types différents.
    Ceci est assez différent de l'utilisation de propriétés d'objet en tant que
    clés, car les propriétés d'objet contraignent toujours les valeurs en
    chaînes. Vous pouvez ajouter des éléments aux cartes en appelant la méthode
    set () et en lui transmettant une clé et la valeur à associer à la clé.
    Vous pouvez récupérer une valeur ultérieurement en transmettant la clé à la
    méthode get (). Par exemple :
</p>
<p>
    <img
        width="387"
        height="88"
        src="img/Ecma6/image036.png"
    />
</p>
<h4>
    <a name="_Toc19544919">Map Methods</a>
</h4>
<p>
    Les cartes partagent plusieurs méthodes avec des ensembles, ce qui est
    intentionnel et vous permet d'interagir avec les cartes et les ensembles de
    manière similaire. Ces trois méthodes sont disponibles sur les maps et les
    sets :
</p>
<p>
    · has (key) Détermine si la clé donnée existe dans la carte
</p>
<p>
    · delete (key) Supprime la clé et la valeur associée de la carte
</p>
<p>
    clear () Supprime toutes les clés et valeurs de la carte
</p>
<p>
    Les cartes ont également une propriété de taille qui indique le nombre de
    paires clé-valeur qu'elles contiennent. Ce code utilise les trois méthodes
    et tailles de différentes manières :
</p>
<p>
    <img
        width="326"
        height="324"
        src="img/Ecma6/image037.png"
    />
</p>
<h4>
    <a name="_Toc19544920">Initialisation du maps</a>
</h4>
<p>
    Également similaire aux ensembles, vous pouvez initialiser une carte avec
    des données en transmettant un tableau au constructeur Map. Chaque élément
    du tableau doit lui-même être un tableau où le premier élément est la clé
    et le second est la valeur correspondante de cette clé. Par conséquent, la
    carte entière est un tableau de ces tableaux à deux éléments, par exemple :
</p>
<p>
    <img
        width="321"
        height="102"
        src="img/Ecma6/image038.png"
    />
</p>
<p>
    Les clés "name" et "age" sont ajoutées à la carte via une initialisation
    dans le constructeur. Bien que le tableau de tableaux puisse sembler un peu
    étrange, il est nécessaire de représenter les clés avec précision, car les
    clés peuvent être n’importe quel type de données. Stocker les clés dans un
    tableau est le seul moyen de s’assurer qu’elles ne sont pas forcées dans un
    autre type de données avant d’être stockées dans la carte.
</p>
<h4>
    <a name="_Toc19544921">forEach() Method pour Maps</a>
</h4>
<p>
    La méthode forEach () pour les mappes est similaire à forEach () pour les
    ensembles et les tableaux en ce sens qu'elle accepte une fonction de rappel
    qui reçoit trois arguments :
</p>
<p>
    · La valeur de la prochaine position sur la carte
</p>
<p>
    · La clé pour cette valeur
</p>
<p>
    · Map à partir de laquelle la valeur est lue
</p>
<p>
    Ces arguments de rappel correspondent plus étroitement au comportement
    forEach () dans les tableaux, où le premier argument est la valeur et le
    second est la clé (correspondant à un index numérique dans les tableaux).
    Voici un exemple :
</p>
<p>
    <img
        width="318"
        height="90"
        src="img/Ecma6/image039.png"
    />
</p>
<p>
    La fonction de rappel forEach () renvoie les informations qui lui sont
    transmises. La valeur et la clé sont sorties directement, et ownerMap est
    comparé à map pour montrer que les valeurs sont équivalentes. Le code
    génère les éléments suivants :
</p>
<p>
    <img
        width="144"
        height="56"
        src="img/Ecma6/image040.png"
    />
</p>
<h1 id="title6">
  Iterators and Generators
</h1>
<h2>
    <a name="_Toc19544923">Le problème de la boucle</a>
</h2>
<p>
    <img
        width="310"
        height="73"
        src="img/Ecma6/image041.png"
    />
</p>
<p>
    Cette norme pour boucle suit l'index dans le tableau de couleurs à l'aide
    de la variable i. La valeur de i s’incrémente à chaque exécution de la
    boucle si i n’est pas supérieure à la longueur du tableau (stocké dans
    len).
</p>
<p>
    Bien que cette boucle soit relativement simple, la complexité des boucles
    augmente lorsque vous les imbriquez et que vous devez suivre plusieurs
    variables. Une complexité supplémentaire peut entraîner des erreurs et la
    nature standard de la boucle for se prête à davantage d'erreurs car un code
    similaire est écrit à plusieurs endroits. Les itérateurs sont conçus pour
    éliminer la complexité et la nature sujette aux erreurs des boucles.
</p>
<h2>
    <a name="_Toc19544924">Que sont les itérateurs ?</a>
</h2>
<p>
    Les itérateurs sont des objets avec une interface spécifique conçue pour
    l'itération. Tous les objets itérateurs ont une méthode next () qui
    retourne un objet résultat. L’objet résultat a deux propriétés : value, qui
    est la valeur suivante, et done, qui est un booléen vrai, quand il n’ya
    plus de valeurs à renvoyer. L'itérateur conserve un pointeur interne sur un
    emplacement dans une collection de valeurs et, à chaque appel de la méthode
    next (), il renvoie la valeur appropriée suivante.
</p>
<p>
    Si vous appelez next () après que la dernière valeur a été renvoyée, la
    méthode retourne done en tant que true et la valeur contient la valeur de
    retour pour l'itérateur. Cette valeur de retour ne fait pas partie de
    l'ensemble de données. Il s’agit plutôt d’un élément final de données liées
    ou indéfini s’il n’existe pas de telles données. La valeur de retour d'un
    itérateur est similaire à la valeur de retour d'une fonction en ce sens que
    c'est un dernier moyen de transmettre des informations à l'appelant.
</p>
<p>
    En gardant ces informations à l'esprit, il est possible de créer un
    itérateur à l'aide d'ECMAScript 5, comme indiqué ci-dessous :
</p>
<p>
    <img
        width="346"
        height="183"
        src="img/Ecma6/image042.png"
    />
</p>
<p>
    <img
        width="461"
        height="297"
        src="img/Ecma6/image043.png"
    />
</p>
<p>
    La fonction createIterator () renvoie un objet avec une méthode next ().
    Chaque fois que la méthode est appelée, la valeur suivante du tableau items
    est renvoyée en tant que valeur. Quand i vaut 3, done devient vrai et
    l'opérateur conditionnel ternaire qui définit la valeur est évalué comme
    indéfini. Ces deux résultats remplissent le dernier cas particulier pour
    les itérateurs dans ECMAScript 6, où next () est appelé sur un itérateur
    après l’utilisation de la dernière donnée.
</p>
<p>
    Comme le montre cet exemple, écrire des itérateurs qui se comportent
    conformément aux règles énoncées dans ECMAScript 6 est un peu complexe.
    Heureusement, ECMAScript 6 fournit également des générateurs, ce qui
    simplifie beaucoup la création d’objets itérateurs.
</p>
<h2>
    <a name="_Toc19544925">Que sont les générateurs ?</a>
</h2>
<p>
    Un générateur est une fonction qui retourne un itérateur. Les fonctions du
    générateur sont indiquées par un astérisque (*) après le mot-clé fonction
    et utilisent le nouveau mot-clé rendement. Peu importe que l’astérisque
    soit directement à côté de la fonction ou qu’il y ait un espace entre lui
    et le caractère *, comme dans cet exemple :
</p>
<p>
    <img
        width="418"
        height="190"
        src="img/Ecma6/image044.png"
    />
</p>
<p>
    Le * before createIterator () fait de cette fonction un générateur. Le
    mot-clé de rendement, également nouveau dans ECMAScript 6, spécifie les
    valeurs que l'itérateur résultant doit renvoyer lors de l'appel de next ()
    et l'ordre dans lequel elles doivent être renvoyées. L'itérateur généré
    dans cet exemple a trois valeurs différentes pour renvoyer des appels
    successifs à la méthode next (): 1, puis 2 et enfin 3. Un générateur est
    appelé comme toute autre fonction, comme indiqué lors de la création de
    l'itérateur.
</p>
<p>
    L’aspect le plus intéressant des fonctions du générateur est peut-être
    qu’elles arrêtent l’exécution après chaque instruction de rendement. Par
    exemple, après que le rendement 1 ait été exécuté dans ce code, la fonction
    n’exécute rien d’autre tant que la méthode next () de l’itérateur n’a pas
    été appelée. A ce stade, le rendement 2 est exécuté. Cette capacité à
    arrêter l'exécution au milieu d'une fonction entraîne certaines
    utilisations intéressantes des fonctions du générateur.
</p>
<p>
    Vous pouvez utiliser le mot-clé de rendement avec n'importe quelle valeur
    ou expression. Vous pouvez ainsi écrire des fonctions de générateur qui
    ajoutent des éléments aux itérateurs sans les lister un par un. Par
    exemple, voici une façon d’utiliser le rendement dans une boucle for.
</p>
<p>
    <img
        width="473"
        height="216"
        src="img/Ecma6/image045.png"
    />
</p>
<h2>
    <a name="_Toc19544926">Iterables et for-of Loops</a>
</h2>
<p>
    Une boucle for-of appelle next () sur une variable chaque fois que la
    boucle s'exécute et stocke la valeur de l'objet de résultat dans une
    variable. La boucle continue ce processus jusqu’à ce que la propriété done
    de l’objet retourné soit vraie. Voici un exemple :
</p>
<p>
    <img
        width="216"
        height="166"
        src="img/Ecma6/image046.png"
    />
</p>
<p>
    Cette boucle for-of appelle d'abord la méthode Symbol.iterator sur le
    tableau de valeurs pour récupérer un itérateur. (L'appel à Symbol.iterator
    a lieu en coulisse dans le moteur JavaScript.) Ensuite, iterator.next ()
    est appelé et la propriété value de l'objet résultat de l'itérateur est lue
    dans num. La variable num est d'abord 1, puis 2 et enfin 3. Une fois que
    l'objet du résultat est true, la boucle se termine, de sorte que la valeur
    indéfinie n'est pas affectée à num.
</p>
<p>
    Si vous parcourez simplement les valeurs d’un tableau ou d’une collection,
    il est judicieux d’utiliser une boucle for-of au lieu d’une boucle for. La
    boucle for-of est généralement moins sujette aux erreurs car il y a moins
    de conditions à suivre. Utilisez la boucle for traditionnelle pour des
    conditions de contrôle plus complexes.
</p>
<h4>
    <a name="_Toc19544927">Accéder à l'itérateur par défaut</a>
</h4>
<p>
    Vous pouvez utiliser Symbol.iterator pour accéder à l'itérateur par défaut
    d'un objet, comme ceci :
</p>
<p>
    <img
        width="443"
        height="101"
        src="img/Ecma6/image047.png"
    />
</p>
<p>
    Ce code obtient l'itérateur par défaut pour les valeurs et l'utilise pour
    parcourir les éléments du tableau. C’est le même processus qui se produit
    dans les coulisses lorsque vous utilisez une boucle for-of.
</p>
<h4>
    <a name="_Toc19544928">Création d'Iterables</a>
</h4>
<p>
    Les objets définis par le développeur ne sont pas itérables par défaut,
    mais vous pouvez les rendre itérables en créant une propriété
    Symbol.iterator contenant un générateur. Par exemple :
</p>
<p>
    <img
        width="269"
        height="244"
        src="img/Ecma6/image048.png"
    />
</p>
<p>
    Collection d'itérateurs
</p>
<p>
    ECMAScript 6 comporte trois types d’objets de collection : des tableaux,
    des cartes et des ensembles. Tous les trois ont les itérateurs intégrés
    suivants pour vous aider à naviguer dans leur contenu :
</p>
<p>
    · entries () Retourne un itérateur dont les valeurs sont des paires
    clé-valeur
</p>
<p>
    · values () Retourne un itérateur dont les valeurs sont les valeurs de la
    collection.
</p>
<p>
    · keys () Retourne un itérateur dont les valeurs sont les clés contenues
    dans la collection.
</p>
<p>
    Vous pouvez récupérer un itérateur pour une collection en appelant l'une de
    ces méthodes.
</p>
<h4>
    <a name="_Toc19544929">Entries ()</a>
</h4>
<p>
    L'itérateur entries () renvoie un tableau de deux éléments à chaque appel
    de next (). Le tableau à deux éléments représente la clé et la valeur de
    chaque élément de la collection. Pour les tableaux, le premier élément est
    l'index numérique ; pour les ensembles, le premier élément est également la
    valeur (parce que les valeurs doublent en tant que clés dans les
    ensembles); pour les cartes, le premier élément est la clé.
</p>
<p>
    Voici quelques exemples utilisant l'itérateur entries () :
</p>
<p>
    <img
        width="271"
        height="255"
        src="img/Ecma6/image049.png"
    />
</p>
<p>
    <img
        width="225"
        height="116"
        src="img/Ecma6/image050.png"
    />
</p>
<h4>
    <a name="_Toc19544930">Values ()</a>
</h4>
<p>
    L'itérateur values () renvoie simplement les valeurs telles qu'elles sont
    stockées dans la collection. Par exemple :
</p>
<p>
    <img
        width="242"
        height="161"
        src="img/Ecma6/image051.png"
    />
</p>
<p>
    <img
        width="180"
        height="115"
        src="img/Ecma6/image052.png"
    />
</p>
<h4>
    <a name="_Toc19544931">Keys ()</a>
</h4>
<p>
    L'itérateur keys () renvoie chaque clé présente dans une collection. Pour
    les tableaux, il ne retourne que les clés numériques ; il ne retourne
    jamais d'autres propriétés propres du tableau. Pour les ensembles, les clés
    sont identiques aux valeurs. Par conséquent, keys () et values () renvoient
    le même itérateur. Pour Maps, l’itérateur key () renvoie chaque clé unique.
    Voici un exemple montrant les trois :
</p>
<p>
    <img
        width="207"
        height="109"
        src="img/Ecma6/image053.png"
    />
</p>
<p>
    <img
        width="219"
        height="59"
        src="img/Ecma6/image054.png"
    />
</p>
<p>
    <img
        width="113"
        height="113"
        src="img/Ecma6/image055.png"
   
        hspace="12"
    />
</p>
<br>
<h1 id="title7">
  Promesses et asynchrones Programmation
</h1>
<h2>
    <a name="_Toc19544933">Le modèle de l'événement</a>
</h2>
<p>
    Lorsqu'un utilisateur clique sur un bouton ou appuie sur une touche du
    clavier, un événement comme onclick est déclenché. Cet événement peut
    répondre à l'interaction en ajoutant un nouveau travail à l'arrière de la
    file d'attente. Il s’agit de la forme la plus élémentaire de programmation
    asynchrone de JavaScript. Le code du gestionnaire d’événements ne s’exécute
    pas tant que l’événement n’est pas déclenché. Lorsqu’il est exécuté, il a
    le contexte approprié. Par exemple :
</p>
<p>
    <img
        width="268"
        height="68"
        src="img/Ecma6/image056.png"
    />
</p>
<p>
    Dans ce code, console.log ("Cliqué") ne sera pas exécuté tant que
    l'utilisateur n'aura pas cliqué sur le bouton. Lorsque vous cliquez sur le
    bouton, la fonction affectée à onclick est ajoutée à l'arrière de la file
    d'attente des tâches et est exécutée lorsque toutes les tâches précédentes
    sont terminées.
</p>
<p>
    Les événements fonctionnent bien pour les interactions simples, mais le
    chaînage de plusieurs appels asynchrones distincts est plus compliqué car
    vous devez suivre la cible de l'événement (bouton dans cet exemple) pour
    chaque événement.
</p>
<h2>
    <a name="_Toc19544934">Le modèle Callback</a>
</h2>
<p>
    Node.js a avancé le modèle de programmation asynchrone en vulgarisant les
    rappels. Le modèle de rappel est similaire au modèle d’événement car le
    code asynchrone ne s’exécute qu’à un moment ultérieur. C’est différent
    parce que la fonction à appeler est transmise en tant qu’argument, comme
    indiqué ici :
</p>
<p>
    <img
        width="285"
        height="126"
        src="img/Ecma6/image057.png"
    />
</p>
<p>
    Cet exemple utilise le style de rappel en premier d'erreur traditionnel
    Node.js. La fonction readFile () est destinée à lire un fichier sur le
    disque (spécifié comme premier argument), puis à exécuter le rappel (le
    second argument) une fois terminé. En cas d'erreur, l'argument d'erreur du
    rappel est un objet d’erreur ; sinon, l'argument de contenu contient le
    contenu du fichier sous forme de chaîne.
</p>
<p>
    À l'aide du modèle de rappel, readFile () commence à s'exécuter
    immédiatement et se met en pause lorsqu'il commence à lire à partir du
    disque. Cela signifie que console.log ("Hi!") Est affiché immédiatement
    après l'appel de readFile (), avant que console.log (contenu) n'imprime
    quoi que ce soit. Une fois que readFile () a terminé, il ajoute un nouveau
    travail à la fin de la file d'attente avec la fonction de rappel et ses
    arguments. Ce travail est exécuté à la fin de tous les travaux précédents.
</p>
<p>
    Le modèle de rappel est plus flexible que les événements car il est plus
    facile de chaîner plusieurs appels ensemble avec les rappels. Voici un
    exemple :
</p>
<p>
    <img
        width="287"
        height="187"
        src="img/Ecma6/image058.png"
    />
</p>
<p>
    Comme dans cet exemple, l'imbrication d'appels de méthodes multiples crée
    un réseau de code enchevêtré difficile à comprendre et à déboguer. Les
    rappels posent également des problèmes lorsque vous souhaitez implémenter
    des fonctionnalités plus complexes. Que faire si vous souhaitez que deux
    opérations asynchrones s'exécutent en parallèle et vous avertissent
    lorsqu'elles sont toutes deux terminées ? Que faire si vous voulez démarrer
    deux opérations asynchrones en même temps mais que le résultat de la
    première doit être terminé ? Dans ces cas, vous devez suivre plusieurs
    opérations de rappel et de nettoyage, et les promesses améliorent
    considérablement ces situations.
</p>
<h2>
    <a name="_Toc19544935">Bases de promise</a>
</h2>
<p>
    Une promesse est un espace réservé pour le résultat d'une opération
    asynchrone. Au lieu de s'abonner à un événement ou de transmettre un rappel
    à une fonction, celle-ci peut renvoyer une promesse, comme illustré
    ci-dessous :
</p>
<p>
    <img
        width="346"
        height="31"
        src="img/Ecma6/image059.png"
    />
</p>
<p>
    Dans ce code, readFile () ne commence pas à lire le fichier immédiatement :
    cela se produira plus tard. Au lieu de cela, la fonction retourne un objet
    de promesse représentant l'opération de lecture asynchrone afin que vous
    puissiez l'utiliser ultérieurement. Le moment exact où vous pourrez
    travailler avec ce résultat dépend entièrement de la conclusion du cycle de
    vie de la promesse.
</p>
<h4>
    <a name="_Toc19544936">Promise Life Cycle</a>
</h4>
<p>
    Chaque promesse traverse un cycle de vie court commençant dans l’état en
    attente, ce qui indique que l’opération asynchrone n’a pas encore abouti.
    Une promesse en attente est considérée comme non réglée. La promesse de
    l'exemple précédent est dans l'état en attente dès que la fonction readFile
    () la renvoie. Une fois l'opération asynchrone terminée, la promesse est
    considérée comme réglée et entre dans l'un des deux états possibles :
</p>
<p>
    Fulfilled - L’opération asynchrone de la promesse est terminée avec succès.
</p>
<p>
    Rejected - L’opération asynchrone de la promesse n’a pas abouti en raison
    d'une erreur ou d'une autre cause.
</p>
<p>
    Une propriété interne [[PromiseState]] est définie sur "pending",
    "fulfilled" ou "rejected" pour refléter l'état de la promesse. Cette
    propriété n’est pas exposée sur les objets de promesse, vous ne pouvez donc
    pas déterminer l’état dans lequel se trouve la promesse par programmation.
    Mais vous pouvez prendre une mesure spécifique lorsqu'une promesse change
    d'état en utilisant la méthode then ().
</p>
<p>
    La méthode then () est présente dans toutes les promesses et prend deux
    arguments. Le premier argument est une fonction à appeler lorsque la
    promesse est remplie. Toute donnée supplémentaire liée à l'opération
    asynchrone est transmise à cette fonction d'exécution. Le deuxième argument
    est une fonction à appeler lorsque la promesse est rejetée. Semblable à la
    fonction d'exécution, la fonction de rejet reçoit toutes les données
    supplémentaires liées au rejet.
</p>
<p>
    Les deux arguments de then () sont facultatifs, vous pouvez donc écouter
    toute combinaison de réalisation et de rejet. Par exemple, considérons cet
    ensemble d'appels then () :
    <br clear="all"/>
    <img
        width="240"
        height="271"
        src="img/Ecma6/image060.png"
    />
</p>
<p>
    Les trois appels then () fonctionnent sur la même promise. Le premier appel
    écoute la réalisation et le rejet. Le second n'écoute que pour se réaliser
    ; les erreurs ne seront pas signalées. La troisième écoute seulement le
    rejet et ne signale pas le succès.
</p>
<p>
    Les promesses ont également une méthode catch () qui se comporte de la même
    manière que then () lorsque seul un gestionnaire de rejet est transmis. Par
    exemple, les appels catch () et then () suivants sont fonctionnellement
    équivalents :
</p>
<p>
    <img
        width="219"
        height="160"
        src="img/Ecma6/image061.png"
    />
</p>
<h2>
    <a name="_Toc19544937">Settled Promises</a>
</h2>
<h4>
    <a name="_Toc19544938">Promise.resolve()</a>
</h4>
<p>
    La méthode Promise.resolve () accepte un seul argument et renvoie une
    promesse dans l'état rempli. Cela signifie qu'aucune planification de
    travail ne se produit et vous devez ajouter un ou plusieurs gestionnaires
    d'exécution à la promesse de récupération de la valeur. Par exemple :
</p>
<p>
    <img
        width="247"
        height="72"
        src="img/Ecma6/image062.png"
    />
</p>
<p>
    Ce code crée une promesse remplie afin que le gestionnaire d'exécution
    reçoive 42 comme valeur. Si un gestionnaire de rejet était ajouté à cette
    promesse, le gestionnaire de rejet ne serait jamais appelé, car la promesse
    ne serait jamais dans l'état rejeté.
</p>
<h4>
    <a name="_Toc19544939">Promise.reject()</a>
</h4>
<p>
    Vous pouvez également créer des promesses rejetées à l'aide de la méthode
    Promise.reject (). Cela fonctionne comme Promise.resolve () sauf que la
    promesse créée est dans l'état rejeté, comme suit :
</p>
<p>
    <img
        width="213"
        height="71"
        src="img/Ecma6/image063.png"
    />
</p>
<h1 id="title8">
    Encapsuler du code avec des modules
</h1>
<h2>
    <a name="_Toc19544941">Que sont les MODULES ?</a>
</h2>
<p>
    Un module est un code JavaScript qui s'exécute automatiquement en mode
    strict sans possibilité de retrait. Contrairement à une architecture à tout
    partagé, les variables créées au niveau supérieur d’un module ne sont pas
    automatiquement ajoutées à la portée globale partagée. Les variables
    n'existent que dans la portée de niveau supérieur du module et le module
    doit exporter tous les éléments, tels que les variables ou les fonctions,
    qui devraient être disponibles pour le code en dehors du module. Les
    modules peuvent également importer des liaisons à partir d'autres modules.
</p>
<h2>
    <a name="_Toc19544942">Exportation</a>
</h2>
<p>
    Vous pouvez utiliser le mot clé export pour exposer des parties du code
    publié à d'autres modules. Dans le cas le plus simple, vous pouvez placer
    l'export devant toute déclaration de variable, de fonction ou de classe
    pour l'exporter à partir du module, comme suit :
</p>
<p>
    <img
        width="255"
        height="391"
        src="img/Ecma6/image064.png"
    />
</p>
<p>
    <img
        width="187"
        height="39"
        src="img/Ecma6/image065.png"
    />
</p>
<p>
    Il y a quelques détails à noter dans cet exemple. Hormis le mot-clé export,
    chaque déclaration est la même que dans un script. Chaque fonction ou
    classe exportée a également un nom, car les déclarations de fonction et de
    classe exportées nécessitent un nom. Vous ne pouvez pas exporter de
    fonctions ou de classes anonymes à l’aide de cette syntaxe, à moins
    d’utiliser le mot-clé par défaut.
</p>
<p>
    En outre, considérons la fonction multiply (), qui n’est pas exportée
    lorsqu’elle est définie. Cela fonctionne car vous n’avez pas toujours
    besoin d’exporter une déclaration : vous pouvez également exporter des
    références. En outre, notez que cet exemple n’exporte pas la fonction
    subtract (). Cette fonction ne sera pas accessible de l’extérieur de ce
    module car toutes les variables, fonctions ou classes qui ne sont pas
    explicitement exportées restent privées du module.
</p>
<h2>
    <a name="_Toc19544943">importation</a>
</h2>
<p>
    Lorsque vous avez un module avec des exportations, vous pouvez accéder à la
    fonctionnalité d’un autre module en utilisant le mot-clé import. Les deux
    parties d’une instruction d’importation sont les identifiants que vous
    importez et le module à partir duquel ces identifiants doivent être
    importés. Voici la forme de base de la déclaration :
</p>
<p>
    <img
        width="325"
        height="21"
        src="img/Ecma6/image066.png"
    />
</p>
<h1 id="title9">
   classes
</h1>
<h2>
    <a name="_Toc19544945">Déclarations de classe</a>
</h2>
<p>
    Les déclarations de classe commencent par le mot-clé de classe suivi du nom
    de la classe. Le reste de la syntaxe ressemble à des méthodes concises dans
    les littéraux d’objet, mais ne nécessite pas de virgule entre les éléments
    de la classe.
</p>
<p>
    Voici une déclaration de classe simple :
</p>
<p>
    <img
        width="284"
        height="139"
        src="img/Ecma6/image067.png"
    />
</p>
<p>
    <img
        width="374"
        height="170"
        src="img/Ecma6/image068.png"
    />
</p>
<p>
    La déclaration de classe pour PersonClass se comporte de manière similaire
    à PersonType dans l'exemple précédent. Mais au lieu de définir une fonction
    en tant que constructeur, les déclarations de classe vous permettent de
    définir le constructeur directement à l'intérieur de la classe à l'aide du
    nom de méthode de constructeur spécial. Comme les méthodes de classe
    utilisent une syntaxe concise, il n’est pas nécessaire d’utiliser le mot
    clé function. Tous les autres noms de méthodes n'ont aucune signification
    particulière, vous pouvez donc ajouter autant de méthodes que vous le
    souhaitez.
</p>
<h2>
    <a name="_Toc19544946">Propriétés de l'accesseur</a>
</h2>
<p>
    Bien que vous deviez créer vos propres propriétés à l'intérieur des
    constructeurs de classe, les classes vous permettent de définir des
    propriétés d'accesseur sur le prototype. Pour créer un getter, utilisez le
    mot-clé get suivi d'un espace, suivi d'un identifiant ; pour créer un
    passeur, faites la même chose en utilisant le mot-clé set, comme indiqué
    ici :
</p>
<p>
    <img
        width="272"
        height="201"
        src="img/Ecma6/image069.png"
    />
</p>
<h2>
    <a name="_Toc19544947">Noms de membres calculés</a>
</h2>
<p>
    Il existe encore plus de similitudes entre les littéraux d'objet et les
    classes. Les méthodes de classe et les propriétés d'accès peuvent également
    avoir des noms calculés. Au lieu d'utiliser un identifiant, utilisez des
    crochets autour d'une expression, qui correspond à la syntaxe utilisée pour
    les noms calculés littéralement. Par exemple :
</p>
<p>
    <img
        width="232"
        height="212"
        src="img/Ecma6/image070.png"
    />
</p>
<p>
    Cette version de PersonClass utilise une variable pour attribuer un nom à
    une méthode dans sa définition. La chaîne "sayName" est attribuée à la
    variable methodName, puis methodName est utilisé pour déclarer la méthode.
    La méthode sayName () est ensuite accessible directement.
</p>
<h2>
    <a name="_Toc19544948">Héritage avec des classes dérivées</a>
</h2>
<p>
    Les classes facilitent l'implémentation de l'héritage en utilisant le mot
    clé familiar bien connu pour spécifier la fonction dont la classe doit
    hériter. Les prototypes sont automatiquement ajustés et vous pouvez accéder
    au constructeur de la classe de base en appelant la méthode super (). Voici
    l'exemple d'ECMAScript 6 :
</p>
<p>
    <img
        width="214"
        height="102"
        src="img/Ecma6/image071.png"
    />
</p>
<p>
    <img
        width="374"
        height="263"
        src="img/Ecma6/image072.png"
    />
</p>
<p>
    Cette fois, la classe Square hérite de Rectangle à l’aide du mot-clé
    extend. Le constructeur Square utilise super () pour appeler le
    constructeur Rectangle avec les arguments spécifiés. Notez que,
    contrairement à la version ECMAScript 5 du code, l'identificateur Rectangle
    n'est utilisé que dans la déclaration de classe (après l'extension).
</p>
<p>
    <img
        width="243"
        height="158"
        src="img/Ecma6/image073.png"
    />
</p>
<h1 id="title10">
    Arrays
</h1>
<h2>
    <a name="_Toc19544950">Création de tableaux</a>
</h2>
<p>
    Avant ECMAScript 6, les deux méthodes principales pour créer des tableaux
    étaient le constructeur Array et la syntaxe littérale de tableau. Les deux
    approches nécessitaient de lister les éléments du tableau individuellement
    et étaient par ailleurs assez limitées. Les options permettant de convertir
    un objet de type tableau (c'est-à-dire un objet avec des index numériques
    et une propriété de longueur) en tableau étaient également limitées et
    nécessitaient souvent du code supplémentaire. Pour faciliter la création de
    tableaux JavaScript, ECMAScript 6 utilise les méthodes Array.of () et
    Array.from ().
</p>
<h4>
    <a name="_Toc19544951">Array.of() Method</a>
</h4>
<p>
    ECMAScript 6 a notamment ajouté de nouvelles méthodes de création à
    JavaScript pour aider les développeurs à éviter les problèmes de création
    de tableaux avec le constructeur Array. En réalité, le constructeur Array
    se comporte différemment en fonction du type et du nombre d'arguments qui
    lui sont transmis. Par exemple :
</p>
<p>
    <img
        width="292"
        height="253"
        src="img/Ecma6/image074.png"
    />
</p>
<p>
    Lorsque le constructeur de tableau reçoit une valeur numérique unique, la
    propriété length du tableau est définie sur cette valeur. Si une seule
    valeur non numérique est passée, cette valeur devient le seul et unique
    élément du tableau. Si plusieurs valeurs sont passées (numérique ou non),
    elles deviennent des éléments du tableau. Ce comportement est source de
    confusion et de risque, car vous n'êtes peut-être pas toujours au courant
    du type de données transmis.
</p>
<p>
    ECMAScript 6 introduit Array.of () pour résoudre ce problème. La méthode
    Array.of () fonctionne de la même manière que le constructeur Array mais ne
    présente aucun cas particulier concernant une valeur numérique unique. La
    méthode Array.of () crée toujours un tableau contenant ses arguments, quel
    que soit le nombre d'arguments ou le type d'arguments. Voici quelques
    exemples utilisant la méthode Array.of () :
</p>
<p>
    <img
        width="240"
        height="115"
        src="img/Ecma6/image075.png"
    />
</p>
<p>
    <img
        width="243"
        height="39"
        src="img/Ecma6/image076.png"
    />
</p>
<h4>
    <a name="_Toc19544952">Array.from() Method</a>
</h4>
<p>
    Convertir des objets non matrices en matrices réelles a toujours été
    fastidieux en JavaScript. Par exemple, si vous avez un objet arguments (qui
    ressemble à un tableau) et que vous voulez l’utiliser comme un tableau,
    vous devez d’abord le convertir. Pour convertir un objet semblable à un
    tableau à un tableau dans ECMAScript 5, vous devez écrire une fonction
    semblable à celle de cet exemple :
</p>
<p>
    <img
        width="336"
        height="213"
        src="img/Ecma6/image077.png"
    />
</p>
<p>
    Cette approche crée manuellement un tableau de résultats et copie chaque
    élément des arguments dans le nouveau tableau. Bien que cette approche
    fonctionne, il faut une bonne quantité de code pour effectuer une opération
    relativement simple. Finalement, les développeurs ont découvert qu'ils
    pourraient réduire la quantité de code utilisée en appelant la méthode
    native slice () pour les tableaux sur les objets de type tableau, comme
    suit :
</p>
<p>
    <img
        width="282"
        height="134"
        src="img/Ecma6/image078.png"
    />
</p>
<p>
    Même si vous n'avez pas besoin de taper autant lorsque vous utilisez cette
    technique, appeler Array.prototype.slice.call (arrayLike) ne se traduit
    évidemment pas par «Convertir arrayLike en tableau». Heureusement,
    ECMAScript 6 a ajouté le paramètre Array.from. La méthode () est un moyen
    évident, mais propre, de convertir des objets en tableaux.
</p>
<p>
    Étant donné que le premier argument est un objet itérable ou semblable à un
    tableau, la méthode Array.from () renvoie un tableau. Voici un exemple
    simple :
</p>
<p>
    <img
        width="218"
        height="72"
        src="img/Ecma6/image079.png"
    />
</p>
<h4>
    <a name="_Toc19544953">Mapping Conversion</a>
</h4>
<p>
    Si vous souhaitez aller encore plus loin dans la conversion de tableau,
    vous pouvez fournir à Array.from () une fonction de mappage en tant que
    second argument. Cette fonction agit sur chaque valeur de l'objet de type
    tableau et la convertit en une forme finale avant de stocker le résultat à
    l'index approprié du tableau final. Prenons l'exemple suivant.
</p>
<p>
    <img
        width="329"
        height="99"
        src="img/Ecma6/image080.png"
    />
</p>
<h2>
    <a name="_Toc19544954">Nouvelles méthodes sur tous les tableaux</a>
</h2>
<h4>
    <a name="_Toc19544955">find () and findIndex() Methods</a>
</h4>
<p>
    Find () et findIndex () acceptent deux arguments : une fonction de rappel
    et une valeur facultative à utiliser à cet effet dans la fonction de
    rappel. La fonction de rappel reçoit un élément de tableau, l'index de cet
    élément dans le tableau et le tableau réel, les mêmes arguments étant
    transmis aux méthodes telles que map () et forEach (). Le rappel doit
    retourner la valeur true si la valeur donnée correspond à certains critères
    que vous avez définis. Find () et findIndex () arrêtent également de
    chercher dans le tableau la première fois que la fonction de rappel renvoie
    true.
</p>
<p>
    La seule différence entre ces méthodes est que find () renvoie la valeur,
    tandis que findIndex () renvoie l'index auquel la valeur a été trouvée.
    Voici un exemple à démontrer :
</p>
<p>
    <img
        width="304"
        height="57"
        src="img/Ecma6/image081.png"
    />
</p>
<h4>
    <a name="_Toc19544956">fill() Method</a>
</h4>
<p>
    La méthode fill () remplit un ou plusieurs éléments de tableau avec une
    valeur spécifique. Quand une valeur est passée, fill () écrase toutes les
    valeurs d'un tableau avec cette valeur. Par exemple :
</p>
<p>
    <img
        width="276"
        height="75"
        src="img/Ecma6/image082.png"
    />
</p>`;