var ant = `<h1 id="title1">
    INTRODUCTION
</h1>
<p>
    Ant est un logiciel créé par la fondation Apache qui vise à automatiser les
    opérations répétitives du développement de logiciel telles que la
    compilation, la génération de documents (Javadoc) ou l'archivage au format
    JAR, à l'instar des logiciels Make. Ant est écrit en Java et son nom est un
    acronyme pour « Another Neat Tool » (un autre chouette outil). Il est
    principalement utilisé pour automatiser la construction de projets en
    langage Java, mais il peut être utilisé pour tout autre type
    d'automatisation dans n'importe quel langage. Parmi les tâches les plus
    courantes, Ant permet la compilation, la génération de pages HTML de
    documentation (Javadoc), la génération de rapports, l'exécution d'outils
    annexes (checkstyle, FindBugs, etc.), l'archivage sous forme distribuable
    (JAR, etc.).
</p>
<p>
    Ant est basé sur Java et essaie de masquer tous les détails de la
    plate-forme possible. C’est aussi très extensible en Java même. Cela
    facilite l'extension du code Ant via Java, en utilisant toute la
    fonctionnalité de la plate-forme Java et des bibliothèques tierces. Il fait
    aussi la construction très rapide, car vous pouvez exécuter des programmes
    Java à partir de la même machine virtuelle Java que ant elle-même.
</p>
<p>
    Mettant les extensions Ant de côté beaucoup plus tard, voici les concepts
    de base de Ant en tant que vu par un utilisateur de l'outil :
</p>
<p>
    <strong><em>Build files</em></strong>
</p>
<p>
    Ant utilise des fichiers XML appelés fichiers de construction pour décrire
    comment construire un projet. Dans le fichier de construction Les
    développeurs répertorient les différents objectifs de haut niveau de la
    construction (les cibles) et les actions à entreprendre pour atteindre
    chaque objectif - les tâches.
</p>
<p>
    <strong><em>Un fichier de construction contient un projet</strong></em>
</p>
<p>
    Chaque fichier de construction décrit comment construire un projet. Les
    très grands projets peuvent être composés de plusieurs petits projets,
    chacun avec son propre fichier de construction. Une construction de niveau
    supérieur fichier peut coordonner les constructions des sous-projets.
</p>
<p>
    <strong><em>Chaque projet contient plusieurs cibles</strong></em>
</p>
<p>
    Dans le projet unique du fichier de construction, vous déclarez différentes
    cibles. Ces cibles peuvent représentent les sorties réelles de la
    construction, telles qu'un fichier redistribuable, ou des activités, telles
    que en compilant la source ou en exécutant les tests.
</p>
<p>
    <strong><em>Les cibles peuvent dépendre d'autres cibles</strong></em>
</p>
<p>
    Lors de la déclaration d'une cible, vous pouvez déclarer quelles cibles
    doivent être construites en premier. Cela peut assurez-vous que la source
    est compilée avant que les tests ne soient exécutés et construits, et que
    le l'application n'est pas téléchargée jusqu'à la fin des tests. Quand Ant
    construit un projet, il exécute les cibles dans l'ordre implicite de leurs
    dépendances.
</p>
<p>
    <strong><em>Les cibles contiennent des tâches</strong></em>
</p>
<p>
    À l'intérieur des cibles, vous déclarez le travail nécessaire pour achever
    cette étape de la construction processus. Vous faites cela en énumérant les
    tâches qui constituent chaque étape. Quand Ant s'exécute une cible, il
    exécute les tâches à l'intérieur, l'une après l'autre.
</p>
<p>
    <strong><em>Les tâches font le travail</strong></em>
</p>
<p>
    Les tâches Ant sont des éléments XML, éléments que le moteur d'exécution
    Ant se transforme en actions. Derrière chaque tâche est une classe Java qui
    effectue le travail décrit par les attributs de la tâche et données
    imbriquées. Ces tâches doivent être intelligentes : elles gèrent la plupart
    de leurs propres validations d'arguments, vérification de dépendance et
    rapport d'erreur.
</p>
<p>
    <strong><em>De nouvelles tâches étendent Ant</strong></em>
</p>
<p>
    Le fait qu’il soit facile d’étendre Ant avec de nouvelles classes est l’un
    de ses principaux atouts. Souvent, quelqu'un aura rencontré la même étape
    de construction que vous et aurez ont écrit la tâche pour l'exécuter, de
    sorte que vous pouvez simplement utiliser leur travail. Si non, vous pouvez
    étendez-le en Java, produisant une autre tâche Ant ou type de données
    réutilisable.
</p>
<p>
    Pour résumer, Ant lit dans un fichier de construction contenant un projet.
    Le projet contient des cibles qui décrivent différentes choses que le
    projet peut faire. À l'intérieur des cibles il y a les tâches, tâches qui
    font les étapes individuelles de la construction. Ant exécute les cibles
    dans l'ordre impliquées par leurs dépendances déclarées, et les tâches qui
    les composent, construisant ainsi L'application. C’est la théorie. À quoi
    cela ressemble-t-il en pratique ?
</p>
<h1 id="title2">
    première construction de ANT
</h1>
<p>
    Commençons cette introduction en douceur à Ant avec une démonstration de ce
    qu’elle peut faire. Le premier chapitre décrit comment Ant considère un
    projet : un projet contient des cibles, chacune qui est un ensemble
    d'actions - tâches - qui effectuent une partie de la construction. Les
    cibles peuvent dépendre sur d'autres cibles, qui sont toutes déclarées dans
    un fichier XML, appelé fichier de construction.
</p>
<p>
    Ce chapitre vous montrera comment utiliser Ant pour compiler et exécuter un
    programme Java.
</p>
<p>
    Compiler et exécuter un programme Java sous Ant introduira les concepts de
    base Ant : sa ligne de commande, la structure d’un fichier de construction
    et certaines tâches de Ant.
</p>
<h2>
    <a name="_Toc18075179">ÉTAPE ZÉRO : CRÉATION Le derectoire DE PROJET</a>
</h2>
<p>
    Avant toute chose, créez un répertoire vide. Tout ira sous ici : les
    fichiers source, les fichiers de sortie créés et le fichier de construction
    lui-même. Tous les nouveaux projets Java / Ant devrait commencer de cette
    façon.
</p>
<p>
    Notre nouveau répertoire, firstbuild, sera le répertoire de base de notre
    premier projet. Nous créons ensuite de vraies sources Java à compiler. Dans
    le nouveau répertoire, nous créons un fichier appelé Main.java, contenant
    le programme Java minimal suivant :
</p>
<p align="center">
    <img
        width="363"
        height="100"
        src="img/ant/image004.png"
    />
</p>
<p align="center">
    <a name="_Ref18072801">Figure </a>
    1: Main.java
</p>
<h2>
    <a name="_Toc18075180">
        PREMIÈRE ÉTAPE : VÉRIFICATION DES OUTILS SONT EN PLACE
    </a>
</h2>
<p>
    Avant de commencer il faut tout d’abord installer Ant de site web
    <a href="https://ant.apache.org/bindownload.cgi">
        https://ant.apache.org/bindownload.cgi
    </a>
    .
</p>
<p>
    Ant est un outil de ligne de commande qui doit figurer sur le chemin
    d'accès à utiliser.
</p>
<p>
    Pour vérifier que Ant est installé, à l'invite de commande, tapez : ant
    -version
</p>
<h2>
    <a name="_Toc18075181">
        ÉTAPE DEUX : ÉCRIRE VOTRE PREMIER FICHIER DE CONSTRUCTION ANT
    </a>
</h2>
<p>
    Ant est contrôlé en fournissant un fichier texte qui explique comment
    effectuer toutes les étapes de construire, tester et déployer un projet.
    Ces fichiers sont des fichiers de construction, et chaque projet qui
    utilise Ant doit avoir au moins un. Le fichier de construction le plus
    minimal utile dans le développement Java est celui qui construit toutes les
    sources Java dans et sous le répertoire actuel :
</p>
<p align="center">
    <img
        border="0"
        width="375"
        height="127"
        src="img/ant/image005.png"
    />
</p>
<p align="center">
    Figure 2 : build.xml
</p>
<p>
    Ceci est un morceau de texte XML que nous sauvegardons dans un fichier
    appelé build.xml. Ce n'est pas vraiment un très bon fichier de
    construction. Nous ne vous recommandons pas de l’utiliser dans un projet
    réel.
</p>
<p>
    <strong><em>Examiner le fichier de construction</strong></em>
</p>
<p>
    Ce fichier peut être représenté sous la forme d’une arborescence. C’est
    ainsi que les analyseurs syntaxiques XML représentent XML. Contenu
    lorsqu'un programme demande à l'analyseur un DOM (Document Object Model) du
    fichier.
</p>
<p align="center">
    <img
        border="0"
        width="360"
        height="346"
        src="img/ant/image006.png"
    />
</p>
<p align="center">
    Figure 3 : representation XML pour build file
</p>
<p>
    Au sommet de l'arbre se trouve un élément &lt;project&gt;, qui a deux
    attributs, name et default. Tous les fichiers de construction ANT doit
    contenir un élément seul &lt;project&gt;.
</p>
<p>
    Cet élément contient l’élément &lt;target&gt; avec le nom compiler.Une
    cible représente une seule étape du processus de construction.
</p>
<p>
    La cible de compilation du fichier de construction contient deux éléments
    XML, l’un appelé &lt;javac&gt; et un appelé &lt;echo&gt;. Les noms de ces
    éléments devraient faire allusion à leur fonction : on appelle le
    compilateur javac pour compiler le code source Java ; l’autre écho un
    message à l'écran.
</p>
<h2>
    <a name="_Toc18075182">
        TROISIÈME ÉTAPE : FAITES FONCTIONNER le PREMIER build
    </a>
</h2>
<p>
    Nous venons de couvrir la théorie de base d’Ant: un fichier de construction
    XML peut décrire les cibles à construire et les tâches utilisées pour les
    construire. A l’invite de commande dans le répertoire du projet, tapez ant.
</p>
<p>
    Si le fichier de construction a été correctement saisi, vous devriez voir
    la réponse suivante:
</p>
<p align="center">
    <img
        border="0"
        width="624"
        height="142"
        src="img/ant/image007.png"
    />
</p>
<p align="center">
    Figure 4 : command ant
</p>
<h2>
    <a name="_Toc18075183">QUATRIÈME ÉTAPE : STRUCTURE IMPOSANTE</a>
</h2>
<p>
    Le fichier de construction compile maintenant des fichiers Java, mais le
    processus de construction est compliqué. Fichiers source, les fichiers de
    sortie et le fichier de construction, ils se trouvent tous dans le même
    répertoire. Si ce projet en reçoit plus gros, les choses vont devenir
    incontrôlables. Avant que cela ne se produise, nous devons imposer une
    structure. La structure que nous allons imposer est assez commune avec Ant
    et est guidée par les trois changements que nous voulons apporter au
    projet.
</p>
<p>
    o Nous souhaitons automatiser le nettoyage dans Ant. Si cela est mal fait,
    cela pourrait effacer accidentellement les fichiers source. Pour minimiser
    ce risque, vous devez toujours séparer les fichiers source et générés, dans
    différents répertoires.
</p>
<p>
    o Nous voulons placer le fichier source Java dans un package Java.
</p>
<p>
    o Nous voulons créer un fichier JAR contenant le code compilé. Cela devrait
    être placé quelque part qui peut également être nettoyé par Ant.
</p>
<p>
    <strong><em>Disposer les répertoires sources</strong></em>
</p>
<p>
    Nous aimons avoir une structure de répertoire standard pour la mise en page
    des projets. Ant n’exige pas cela, mais cela aide si tout le monde utilise
    une disposition similaire. Par exemple la structure suivante :
</p>
<p align="center">
    <img
        border="0"
        width="124"
        height="97"
        src="img/ant/image008.png"
    />
</p>
<p align="center">
    Figure 5 : Structure de répertoire
</p>
<p>
    Src : les fichier source (java source)
</p>
<p>
    Build : Tous les fichiers générés dans une construction pouvant être
    supprimés et recréés
</p>
<p>
    Build/classes : Sortie intermédiaire (créée ; nettoyable)
</p>
<p>
    Dist : Fichiers distribuables (créés; nettoyables)
</p>
<p>
    Nous enregistrons le fichier Main.java dans une arborescence située sous le
    répertoire source correspondant à la hiérarchie de packages : src/org/ mql/
    ant.
</p>
<p>
    Et n’oubliez pas d’ajoute la ligne package org.mql.ant dans le fichier.
</p>
<p>
    <strong><em>Disposer les répertoires de construction</strong></em>
</p>
<p>
    Les répertoires de construction et de distribution sont séparés des
    répertoires sources. Bien configure Ant pour mettre tous les fichiers
    intermédiaires, ces fichiers générés par n’importe quelle étape du
    processus de construction qui n’est pas directement déployé - dans ou sous
    le répertoire de construction. Nous voulons pour pouvoir nettoyer tous les
    fichiers générés en supprimant simplement les arborescences de répertoires
    appropriées. Garder les répertoires séparés et hors du contrôle de tout
    logiciel L'outil de gestion de la configuration (SCM) facilite le
    nettoyage, mais signifie que nous avons besoin de dire à Ant de créer ces
    répertoires à la demande.
</p>
<p>
    Notre projet mettra les fichiers compilés dans un sous-répertoire de
    construction, un répertoire appelé "classes". Différents types de sorties
    intermédiaires peuvent avoir leurs propres répertoires à côté de celui-ci.
</p>
<p>
    Nous devons créer le répertoire de construction de niveau supérieur et le
    sous-répertoire classes. Nous faisons cela avec la tâche Ant &lt;mkdir&gt;,
    qui, à l'instar de la commande shell du même nom, crée un répertoire. En
    fait, il crée aussi des répertoires parents si nécessaire :
</p>
<p>
    &lt;mkdir dir= "build/classes"/&gt;
</p>
<p>
    <strong><em>Disposer les répertoires de distribution</strong></em>
</p>
<p>
    Le répertoire dist contient des artefacts redistribuables du projet. Une
    étape courante du processus de construction consiste à empaqueter les
    fichiers, en plaçant le fichier empaqueté dans le répertoire dist. Il peut
    y avoir différents types d'empaquetage - JAR, Zip, tar et WAR, par exemple
    - et un sous-répertoire est donc nécessaire pour conserver tous ces
    fichiers à un endroit où ils peuvent être identifiés et supprimés pour une
    construction propre. Pour créer le répertoire de distribution, insérons un
    autre appel à &lt;mkdir&gt; :
</p>
<p>
    &lt;mkdir dir = "dist"&gt;
</p>
<p>
    Pour créer le fichier JAR, nous allons utiliser une tâche Ant appelée, à
    juste titre, &lt;jar&gt; :
</p>
<p>
    &lt;jar destfile = "dist / project.jar" basedir = "build / classes" /&gt;
</p>
<p>
    <strong><em>Création du fichier de construction</strong></em>
</p>
<p>
    Maintenant que nous avons les fichiers aux bons endroits et que nous savons
    ce que nous voulons faire, le fichier de construction doit être réécrit.
    Plutôt que de coller toutes les tâches dans une longue liste d'actions,
    nous avons divisé les étapes distinctes - création, compilation, création
    et nettoyage de répertoires - en quatre cibles distinctes dans le fichier
    de construction.
</p>
<p align="center">
    <img
        border="0"
        width="426"
        height="418"
        src="img/ant/image009.png"
    />
</p>
<p align="center">
    Figure 6 : fichier de construction structuré
</p>
<p>
    Ce fichier de construction ajoute une cible init pour effectuer le travail
    d'initialisation, ce qui signifie créer des répertoires. Nous avons
    également ajouté deux autres nouvelles cibles, clean et archive. La cible
    d'archive utilise la tâche &lt;jar&gt; pour créer le fichier JAR contenant
    tous les fichiers situés dans et sous le répertoire build / classes, ce
    qui, dans ce cas, désigne tous les fichiers .class créés par la cible de
    compilation. La cible de nettoyage nettoie les répertoires de sortie en les
    supprimant. Il utilise une nouvelle tâche, &lt;delete&gt;. Nous avons
    également modifié la cible par défaut pour archiver. Il s’agit donc de la
    cible exécutée par Ant lorsque vous l’exécutez.
</p>
<h2>
    <a name="_Toc18075184">ÉTAPE CINQ : EXÉCUTION DU PROGRAMME</a>
</h2>
<p>
    Nous avons maintenant un processus de construction structuré qui crée le
    fichier JAR à partir du source Java. À ce stade, les prochaines étapes
    pourraient consister à exécuter des tests sur le code, à le distribuer ou à
    le déployer. Nous couvrirons ceux plus tard. Pour l'instant, nous voulons
    simplement exécuter le programme.
</p>
<p>
    <strong><em>Ajout d'une cible "execute"</strong></em>
</p>
<p>
    Pour exécuter le programme, nous ajoutons une nouvelle cible, execute, qui
    dépend de la compilation. Il contient une tâche, &lt;java&gt;, qui exécute
    notre classe Main.class en utilisant l’arborescence de répertoires build /
    classes provisoire comme chemin de classe:
</p>
<p align="center">
    <img
        border="0"
        width="327"
        height="135"
        src="img/ant/image010.png"
    />
</p>
<p align="center">
    Figure 7 : execute tag
</p>
<p>
    Nous avons trois balises &lt;arg&gt; dans la tâche &lt;java&gt; ; chaque
    balise contient l'un des arguments du programme : "a", "b" et ".", comme
    avec la version en ligne de commande. Notez cependant que l'argument final,
    &lt;arg file = "." /&gt;, Est différent des deux autres. Les deux premiers
    arguments utilisent l'attribut value de la balise &lt;arg&gt;, qui transmet
    la valeur directement au programme. Le dernier argument utilise l'attribut
    de fichier, qui indique à Ant de résoudre cet attribut en un emplacement de
    fichier absolu avant d'appeler le programme.
</p>
<p>
    <strong><em>Exécuter la nouvelle cible</strong></em>
</p>
<p align="center">
    <img
        border="0"
        width="561"
        height="312"
        src="img/ant/image011.png"
    />
</p>
<p align="center">
    Figure 8 : le resultat de target execute
</p>
<p>
    Ant a préfixé chaque ligne de sortie avec le nom de la tâche en cours
    d'exécution, indiquant ici qu'il s'agit de la sortie d'une application Java
    invoquée. Les deux premiers arguments sont allés directement à notre
    application, tandis que le troisième argument a été résolu dans le
    répertoire actuel ; Ant a transformé «.» En une référence de fichier
    absolue.
</p>
<h2>
    <a name="_Toc18075185">RUNNING THE BUILD SOUS Eclipse IDE</a>
</h2>
<p>
    Pour que Eclipse construise un projet avec Ant, vous devez créer un nouveau
    générateur, que vous pouvez utiliser à partir des propriétés du projet.
</p>
<p align="center">
    <img
        border="0"
        width="620"
        height="518"
        src="img/ant/image012.png"
    />
</p>
<p align="center">
    Figure 9 : project properties
</p>
<p>
    La sélection de “New…” ouvre la fenêtre de la Figure 10 qui offre le choix
    entre une compilation Ant et un autre programme.
</p>
<p align="center">
    <img
        border="0"
        width="384"
        height="431"
        src="img/ant/image013.png"
    />
</p>
<p align="center">
    <a name="_Ref17816681">Figure </a>
    10
</p>
<p>
    La sélection de « Ant Build» ouvre la boîte de dialogue finale, qui fournit
    un contrôle détaillé sur la construction, y compris le choix du fichier de
    construction, des cibles et du chemin de classe, des propriétés et de
    l'environnement opérationnel de Ant. La première action consiste à
    sélectionner le fichier de construction et son répertoire de base, comme
    illustré à la Figure 11.
</p>
<p align="center">
    <img
        border="0"
        width="624"
        height="503"
        src="img/ant/image014.png"
    />
</p>
<p align="center">
    <a name="_Ref17816849">Figure </a>
    11
</p>
<p align="center">
    <img
        border="0"
        width="624"
        height="503"
        src="img/ant/image015.png"
    />
</p>
<p align="center">
    Figure 12
</p>
<p>
    Pour définir une cible pour une action IDE particulière, cliquez sur le
    bouton “Définir les cibles” situé à droite de la liste des cibles de chaque
    action, ce qui affichera la forme de la figure C.6. Pour une construction
    complète ou manuelle, Eclipse exécute normalement la cible par défaut d'un
    projet, celle déclarée dans la déclaration &lt;project&gt;. Pour le changer
    en une autre cible, vous devez désélectionner la cible par défaut et
    sélectionner la cible souhaitée. La navigation dans la liste est plus
    facile dans un grand projet si vous triez les cibles et masquez toutes les
    cibles « internes », ces cibles sans attribut de description.
</p>
<p>
    La boîte de dialogue du générateur Ant vous permet également de
    personnaliser le moteur d’exécution Ant utilisé le JRE, les variables
    d’environnement et l’implémentation Ant à utiliser. Il est généralement
    préférable de configurer Ant pour l'ensemble de l'EDI plutôt que de le
    faire projet par projet, sauf pour les projets ayant des besoins très
    spécifiques.
</p>
<p align="center">
    <img
        border="0"
        width="600"
        height="173"
        src="img/ant/image016.png"
    />
</p>
<p align="center">
    Figure 13 : Résultat de compilation
</p>
<h1 id="title3">
    Ant datatypes and properties
</h1>
<p>
    Dans le dernier chapitre, nous avons utilisé Ant pour créer, archiver et
    exécuter un programme Java. Nous allons maintenant voir comment contrôler
    ce processus à travers les types de données et les propriétés de Ant.
</p>
<p>
    <strong><em>Qu'est-ce qu'un type de données Ant ?</strong></em>
</p>
<p>
    Un type de données Ant équivaut à une classe Java. En coulisse, ils sont
    réellement implémentés en tant que tels. Les types de données stockent des
    informations complexes utilisées dans la construction, par exemple une
    liste de fichiers à compiler ou un ensemble de répertoires à supprimer. Les
    types de données agissent comme des paramètres pour les tâches. Vous pouvez
    les déclarer à l'intérieur d'une tâche ou les définir à l'extérieur, leur
    donner un nom, puis transmettre ce nom à une tâche. Cela vous permet de
    partager un type de données sur plusieurs tâches.
</p>
<h2>
    <a name="_Toc18075187">Paths</a>
</h2>
<p>
    Un chemin, parfois appelé structure de type chemin dans la documentation de
    Ant, est une liste ordonnée d’éléments, chaque élément pouvant être un
    fichier ou un répertoire. Il décrit des chemins d'accès tels que Java
    CLASSPATH ou la variable d'environnement PATH d'Unix et Windows. Il peut
    avoir un nom spécifique à la tâche, tel que &lt;classpath&gt; ci-dessus, ou
    simplement le nom simple &lt;chemin&gt;.
</p>
<p>
    Un exemple de définition de chemin est :
</p>
<p>
    &lt;path&gt;
    <br/>
    &lt;pathelement location="lib/junit.jar"/&gt;
    <br/>
    &lt;/path&gt;
</p>
<p>
    Cette définition contient un élément dont l'attribut location peut
    spécifier un fichier ou un répertoire unique. Vous pouvez également
    prolonger un chemin avec un autre chemin, en utilisant chemin à la place de
    l’emplacement :
</p>
<p>
    &lt;path&gt;
    <br/>
    &lt;pathelement path="build/classes;lib/junit.jar"/&gt;
    <br/>
    &lt;/path&gt;
</p>
<p>
    <strong><em>Comment utiliser un chemin ?</strong></em>
</p>
<p>
    Il y a deux façons d'utiliser un chemin. Un nom de chemin standalone peut
    être nommé via son attribut id. Ce nom doit être unique pour tous les types
    de données Ant, en fonction des valeurs d'ID. il s'agit d'un espace de noms
    distinct des noms de propriété et de cible.
</p>
<p>
    &lt;path location="lib/junit.jar" id="junit.path"/&gt;
</p>
<p>
    Le nom peut être référencé chaque fois qu'un chemin est nécessaire :
</p>
<p>
    &lt;path refid="junit.path" /&gt;
</p>
<p>
    L'attribut refid fait référence au chemin défini. Si aucun chemin n'a été
    défini à ce stade de la construction, Ant échouera avec une erreur.
</p>
<p>
    L'autre façon d'utiliser un chemin est en ligne, dans toute tâche qui prend
    un élément imbriqué du type chemin. Ces éléments ne peuvent pas s'appeler
    chemin. Ils peuvent avoir d'autres noms, bien que le mot chemin y soit
    généralement indiqué. Notre exemple actuel, la tâche &lt;javac&gt;,
    comprend les éléments &lt;classpath&gt;, &lt;sourcepath&gt;,
    &lt;bootclasspath&gt; et &lt;extdirs&gt;.
</p>
<h2>
    <a name="_Toc18075188">filesets</a>
</h2>
<p>
    Filesets est un ensemble de fichiers enracinés dans un seul répertoire. Par
    défaut, un ensemble de fichiers spécifié avec uniquement un répertoire
    racine inclura tous les fichiers de cette arborescence complète, y compris
    les fichiers de tous les sous-répertoires de manière récursive. Pour un
    exemple concret en cours d’exécution qui illustrera les fonctionnalités
    d’un ensemble de fichiers au fur et à mesure que nous en discuterons,
    copions les fichiers d’un répertoire à un autre :
</p>
<p>
    &lt;copy todir="newweb"&gt;
    <br/>
    &lt;fileset dir="web"/&gt;
    <br/>
    &lt;/copy&gt;
</p>
<h2>
    <a name="_Toc18075189">Patternsets</a>
</h2>
<p>
    Un groupe de fichiers peut contenir plusieurs modèles, ce qui limite les
    fichiers du groupe à ceux qui correspondent ou ne correspondent pas à un
    modèle spécifié. Nous pouvons en utiliser un pour inclure tous les fichiers
    JSP dans un répertoire Web.
</p>
<p>
    &lt;copy todir="newweb"&gt;
    <br/>
    &lt;fileset dir="web" includes="**/*.jsp"/&gt;
    <br/>
    &lt;/copy&gt;
</p>
<p>
    Si nous n'avions spécifié que * .jsp, seuls les fichiers JSP du répertoire
    Web auraient été copiés, mais les fichiers des sous-répertoires n’auraient
    pas été copiés.
</p>
<p>
    Les motifs peuvent être imbriqués les uns dans les autres, tels que :
</p>
<p>
    &lt;patternset&gt;
</p>
<p>
    &lt;include name="**/*.gif"/&gt;
</p>
<p>
    &lt;include name="**/*.jpg"/&gt;
</p>
<p>
    &lt;patternset&gt;
</p>
<p>
    &lt;exclude name="**/*.txt"/&gt;
</p>
<p>
    &lt;exclude name="**/*.xml"/&gt;
</p>
<p>
    &lt;/patternset&gt;
</p>
<p>
    &lt;/patternset&gt;
</p>
<h2>
    <a name="_Toc18075190">selectors</a>
</h2>
<p>
    Les noms de fichiers sont un moyen courant de sélectionner des fichiers
    pour les opérations, mais pas toujours suffisamment. Parfois, vous
    souhaitez supprimer des fichiers obsolètes ou télécharger uniquement les
    fichiers modifiés sur un site distant. Que faire si vous souhaitez
    supprimer des fichiers en laissant des répertoires à leur place ? Vous
    pouvez faire toutes ces choses en affinant le jeu de fichiers avec des
    sélecteurs. Chaque sélecteur est un test appliqué à chaque fichier du
    groupe de fichiers (ou de tout autre conteneur de sélecteur). Il réduit la
    sélection des fichiers dans le groupe de fichiers.
</p>
<p>
    Ces sélecteurs peuvent être combinés dans des conteneurs de sélecteurs pour
    fournir un regroupement et une logique. Les conteneurs sont &lt;and&gt;,
    &lt;or&gt;, &lt;not&gt;, &lt;none&gt;, &lt;selector&gt; et
    &lt;majority&gt;.
</p>
<p align="center">
    <img
        border="0"
        width="487"
        height="346"
        src="img/ant/image017.png"
    />
</p>
<p align="center">
    Figure 14 : List du different selector
</p>
<p>
    Pour comparer deux arborescences de répertoires et copier les fichiers qui
    existent dans une arborescence mais pas dans une autre, nous utilisons une
    combinaison de &lt;not&gt; et de &lt;present&gt; :
</p>
<p>
    &lt;copy todir="newfiles" includeemptydirs="false"&gt;
</p>
<p>
    &lt;fileset dir="web"&gt;
</p>
<p>
    &lt;not&gt;
</p>
<p>
    &lt;present targetdir="currentfiles"/&gt;
</p>
<p>
    &lt;/not&gt;
</p>
<p>
    &lt;/fileset&gt;
</p>
<p>
    &lt;/copy&gt;
</p>
<h2>
    <a name="_Toc18075191">properties</a>
</h2>
<p>
    L'un des concepts les plus importants dans Ant est celui des propriétés.
    Les propriétés Ant contiennent des valeurs de chaîne pouvant être utilisées
    chaque fois qu'une chaîne est nécessaire dans un fichier de construction.
    Ils peuvent être définis dans des tâches ou sur la ligne de commande, et
    peuvent à la fois contrôler le processus de construction et le configurer.
</p>
<p>
    Ant fournit diverses propriétés intégrées, propriétés que le moteur
    d'exécution définit pour vous.
</p>
<p align="center">
    <img
        border="0"
        width="499"
        height="206"
        src="img/ant/image018.png"
    />
</p>
<p align="center">
    Figure 15 : Ant build-in properties
</p>
<p>
    Les propriétés sont développées en les entourant de $ {}, comme dans la
    chaîne "ant.file = $ {ant.file}". Les propriétés écrites de la sorte seront
    développées dans toutes les affectations de chaînes aux attributs de tâches
    et à l'intérieur de la plupart des éléments de texte de tâches. Par
    exemple, pour examiner les propriétés intégrées, nous pouvons utiliser la
    tâche &lt;echo&gt;:
</p>
<p>
    &lt;target name="echo"&gt;
</p>
<p>
    &lt;echo message="ant.file = $/{ant.file}"/&gt;
</p>
<p>
    &lt;echo message="ant.home = $/{ant.home}"/&gt;
</p>
<p>
    &lt;echo message="ant.java.version = $/{ant.java.version}"/&gt;
</p>
<p>
    &lt;echo&gt;basedir = $/{basedir}&lt;/echo&gt;
</p>
<p>
    &lt;/target&gt;
</p>
<p>
    La tâche &lt;propriété&gt; est le moyen habituel de définir des propriétés.
    Il offre de nombreuses façons d’attribuer des propriétés, la plus populaire
    étant
</p>
<p>
    o Nom / valeur assignée
</p>
<p>
    o Nom / localisation
</p>
<p>
    o Chargement d'un ensemble de propriétés à partir d'un fichier de
    propriétés
</p>
<p>
    o Variables d'environnement de lecture
</p>
<p>
    <strong><em>Définition et utilisation d'une propriété simple</strong></em>
</p>
<p>
    Une action courante dans un fichier de construction consiste à sélectionner
    l'un des deux choix, par exemple, s'il faut compiler des informations de
    débogage dans les fichiers.class. Les versions de développement en ont
    besoin, mais les versions de production peuvent choisir de l’omettre. Ce
    choix peut être géré via une propriété. Nous pouvons définir une propriété
    nommée build.debug et lui attribuer la valeur true.
</p>
<p>
    &lt;property name = "build.debug" value = "true" /&gt;
</p>
<p>
    Cette propriété peut être transmise à l'attribut debug dans une tâche
    &lt;javac&gt; :
</p>
<p>
    &lt;javac srcdir = "src" debug = "$ {build.debug}" /&gt;
</p>
<p>
    <strong><em>Définir une propriété sur un nom de fichier</strong></em>
</p>
<p>
    L'attribut location de la tâche &lt;property&gt; convertit un chemin
    relatif en un emplacement absolu et convertit les séparateurs de
    répertoires en ceux de la plate-forme cible. Les auteurs de fichiers de
    construction peuvent choisir entre des barres obliques (/) ou des barres
    obliques inverses en fonction de leurs préférences personnelles :
</p>
<p>
    &lt;property name = "release.dir" location = "../ release" /&gt;
</p>
<p>
    <strong><em>Chargement des propriétés à partir d'un fichier de propriétés</strong></em>
</p>
<p>
    Le chargement de propriétés à partir d'un fichier de propriétés Java est
    une méthode courante de personnalisation des générations. Nous pouvons
    créer un fichier nommé build.properties dans le répertoire racine de notre
    projet, à côté du fichier de construction. Ce fichier a un commentaire et
    quelques propriétés :
</p>
<p>
    <img
        border="0"
        width="210"
        height="34"
        src="img/ant/image019.png"
    />
</p>
<p>
    La tâche &lt;property&gt; de Ant chargera le fichier dans l'attribut file :
</p>
<p>
    &lt;property file="build.properties"/&gt;
</p>
<p>
    <img
        border="0"
        width="415"
        height="72"
        src="img/ant/image020.png"
    />
</p>
<h1 id="title4">
    Test avec JUnit
</h1>
<p>
    JUnit est membre de la famille de framework de test xUnit et constitue
    désormais le framework de test standard de facto pour le développement
    Java. JUnit, créé à l'origine par Kent Beck et Erich Gamma, est une API qui
    facilite l'écriture de cas de test Java, des cas de test dont l'exécution
    peut être entièrement automatisée.
</p>
<p>
    JUnit est disponible en téléchargement sur http://www.junit.org. Toutes les
    versions de JUnit peuvent être téléchargées à partir de
    http://prdownloads.sourceforge.net/junit/. L'archive contient junit.jar (le
    fichier JAR dont vous avez besoin), le JavaDocs et le source (dans
    src.jar). Conservez le code source à portée de main pour déboguer vos
    tests.
</p>
<p>
    <strong><em>Architecture de JUnit</strong></em>
</p>
<p>
    La Figure 16 illustre le modèle UML de la bibliothèque JUnit 3.8.2. La
    classe abstraite TestCase nous intéresse le plus. La classe TestCase
    représente un test à exécuter. La classe Assert fournit un ensemble
    d'assertions que les méthodes d'un cas de test peuvent générer, des
    assertions qui vérifient que le programme fonctionne comme prévu. Les
    classes de cas de test sont ce que les développeurs écrivent pour tester
    leurs applications.
</p>
<p align="center">
    <img
        border="0"
        width="410"
        height="345"
        src="img/ant/image021.png"
    />
</p>
<p align="center">
    <a name="_Ref17985456"></a>
    <a name="_Ref17985471">Figure </a>
    16 : Junit architecture
</p>
<h2>
    <a name="_Toc18075193">Écrire un cas de test</a>
</h2>
<p>
    La première chose à faire avec JUnit est d’écrire un cas de test, une
    classe contenant des méthodes de test. Cela est facile à faire. Pour un cas
    de test simple, nous suivons trois étapes :
</p>
<p>
    o Créez une sous-classe de junit.framework.TestCase.
</p>
<p>
    o Fournissez un constructeur acceptant un paramètre de nom de chaîne
    unique, qui appelle super (nom).
</p>
<p>
    o Écrivez des méthodes vides publiques sans argument, préfixées par le mot
    test.
</p>
<p>
    Voici un de ces cas de test, le premier pour notre application :
</p>
<p align="center">
    <img
        border="0"
        width="340"
        height="189"
        src="img/ant/image022.png"
    />
</p>
<p align="center">
    Figure 17 : Cas de test (creationTest)
</p>
<h2>
    <a name="_Toc18075194">Affirmer les résultats souhaités</a>
</h2>
<p>
    Une méthode de test dans un scénario de test JUnit réussit si elle se
    termine sans générer d'exception. Un test échoue s'il lève une classe
    junit.framework.AssertionFailedError ou dérivée. Un test se termine par une
    erreur si la méthode lève un autre type d'exception. Toute autre chose que
    le succès signifie que quelque chose s'est mal passé, mais les échecs et
    les erreurs sont signalés différemment.
</p>
<p>
    Les exceptions AssertionFailedError sont levées chaque fois qu'une
    assertion ou un test de la structure JUnit échoue. Ce ne sont pas des
    déclarations d’assertion Java, mais des méthodes héritées que vous placez
    dans les tests. La plupart des méthodes d'assertion comparent une valeur
    réelle à une valeur attendue ou examinent d'autres états simples de
    références d'objet. Il existe des variantes des méthodes d'assert pour les
    types de données primitifs et la classe Object elle-même.
</p>
<p align="center">
    <img
        border="0"
        width="486"
        height="453"
        src="img/ant/image023.png"
    />
</p>
<p align="center">
    Figure 18 : Assertions qui se trouve dans junit
</p>
<p>
    Pour utiliser les assertions, nous devons écrire une méthode de test qui
    crée un événement avec des exemples de données.
</p>
<p align="center">
    <img
        border="0"
        width="473"
        height="244"
        src="img/ant/image024.png"
    />
</p>
<p align="center">
    Figure 19 : Classe LessSimpleTest
</p>
<h2>
    <a name="_Toc18075195">JUnit et Ant</a>
</h2>
<p>
    Les anciennes versions d’Ant nécessitaient que junit.jar soit dans le
    chemin de classe d’Ant en le plaçant dans un répertoire chargé par Ant au
    démarrage. Ant 1.7 a changé cela, de sorte qu’une copie de JUnit dans le
    chemin de classe que vous avez configurée pour la compilation et
    l’exécution du code de test est tout ce dont vous avez besoin.
    Malheureusement, de nombreux fichiers de construction existants supposent
    que le fichier junit.jar est toujours sur le classpath de Ant. Ils ne se
    donnent donc pas la peine de l’ajouter. Etant donné l’importance de JUnit,
    vous pouvez également le copier et le placer à l’endroit où Ant pourra le
    charger. C'est un bon moment pour expliquer comment Ant ajoute des
    bibliothèques à son classpath.
</p>
<p>
    Lorsque vous tapez ant sur la ligne de commande, il exécute le code de
    lanceur de Ant dans antlauncher.jar. Ceci configure le chemin de classe
    pour le reste de la course en
</p>
<p>
    o Ajout de tous les fichiers JAR répertoriés dans la variable
    d'environnement CLASSPATH, sauf si l'option -noclasspath est définie.
</p>
<p>
    o Ajout de tous les fichiers JAR du répertoire ANT_HOME / lib
</p>
<p>
    o Ajout de chaque fichier JAR dans $ {user.home} /. Ant / lib, où $
    {user.home} est le répertoire de base spécifique à l'OS de l'utilisateur,
    sauf si l'option -nouserlib est définie.
</p>
<p>
    o Ajout de chaque fichier JAR dans chaque répertoire répertorié sur la
    ligne de commande avec l'option -lib
</p>
<p>
   <strong><em> LA TACHE JUNIT : &lt;JUNIT&gt;</strong></em>
</p>
<p>
    La tâche &lt;junit&gt; est une tâche « optionnelle », une tâche tellement
    importante que vous devez l'avoir avec junit.jar dans votre distribution
    Ant. La tâche exécute un ou plusieurs tests JUnit, puis collecte et affiche
    les résultats. Cela peut également arrêter la construction lorsqu'un test
    échoue.
</p>
<p>
    Pour exécuter le scénario de test que nous venons d'écrire via Ant, nous
    pouvons déclarer la tâche avec le nom du test et son chemin de classe,
    comme suit :
</p>
<p align="center">
    <img
        border="0"
        width="502"
        height="119"
        src="img/ant/image025.png"
    />
</p>
<p align="center">
    Figure 20 : Junit task
</p>
<p>
    Quand on le lance, on voit ce qui suit :
</p>
<p>
    <img
        border="0"
        width="624"
        height="178"
        src="img/ant/image026.png"
    />
</p>
<p>
    Cela nous dit deux choses. Premièrement, notre code est cassé et
    deuxièmement, nous avons besoin de &lt;junit&gt; pour nous dire ce qui a
    échoué et pour arrêter la construction par la suite.
</p>
<p>
    Avant de résoudre ces problèmes, nous devons configurer notre structure de
    répertoires et notre fichier de compilation Ant pour pouvoir effectuer des
    tests.
</p>
<p>
    <strong><em>Intégration de JUnit dans le processus de construction</strong></em>
</p>
<p>
    Nous utilisons des propriétés et des types de données Ant pour rendre
    l'écriture de nos cibles de test plus propre, pour éviter les chemins codés
    en dur et pour permettre un contrôle flexible du processus de test. Tout
    d'abord, nous affectons des propriétés aux différents répertoires utilisés
    par nos cibles de test :
</p>
<p align="center">
    <img
        border="0"
        width="557"
        height="123"
        src="img/ant/image027.png"
    />
</p>
<p align="center">
    Figure 21 : propriétés pour différents répertoires
</p>
<p>
    Nous avons besoin d'un autre chemin de classe pour nos tests que pour la
    source principale. Nous avons besoin du fichier JAR de JUnit pour la
    compilation et l’exécution, ainsi que du répertoire test / classes pour
    l’exécution. Comment faisons-nous cela ? Nous nous appuyons sur junit.jar
    sur classpath d’Ant. Tant que nous incluons Classpath dans nos tâches, nous
    obtenons JUnit gratuitement. Ceci est trompeur et ne fonctionne que si tous
    les projets peuvent utiliser la même version de JUnit.
</p>
<p>
    Commençons par le chemin de classe pour la compilation de notre
    bibliothèque. Il inclut tous les JAR du sous-répertoire lib.
</p>
<p>
    <img
        border="0"
        width="252"
        height="88"
        src="img/ant/image028.png"
    />
</p>
<p>
    Pour compiler les tests, nous devons ajouter les classes compilées :
</p>
<p>
    <img
        border="0"
        width="419"
        height="77"
        src="img/ant/image029.png"
    />
</p>
<p>
    Pour exécuter les tests, nous avons également besoin des tests compilés sur
    le classpath :
</p>
<p>
    <img
        border="0"
        width="403"
        height="71"
        src="img/ant/image030.png"
    />
</p>
<p>
    Cette technique de chaînage de chemins de classes est très efficace. Si
    nous ajoutons une dépendance au projet principal, les chemins de classe à
    compiler et à exécuter les tests la récupèrent immédiatement.
</p>
<p>
    Avant de compiler les tests, nous devons créer les répertoires appropriés :
</p>
<p>
    <img
        border="0"
        width="321"
        height="123"
        src="img/ant/image031.png"
    />
</p>
<p>
    Cette cible crée tous les répertoires de sortie. Plus inhabituellement, il
    en supprime deux avant de les recréer. Il s’agit d’une purge brutale du
    contenu des répertoires permettant de s’assurer que les résultats des tests
    précédents ne sont pas combinés à la dernière exécution.
</p>
<p>
    Notre cible test-compile utilise test.classpath ainsi que test.dir :
</p>
<p>
    <img
        border="0"
        width="450"
        height="137"
        src="img/ant/image032.png"
    />
</p>
<p>
    <strong><em>Arrêt de la construction lorsque les tests échouent</strong></em>
</p>
<p>
    Si nous nous soucions des tests, la construction doit s’arrêter lorsque les
    tests échouent. Nous ne voulons pas empaqueter ou libérer un programme qui
    ne fonctionne pas. Par défaut, &lt;junit&gt; n’arrête pas la construction
    lorsque les tests échouent. Il y a une raison à cela: vous voudrez
    peut-être formater les résultats avant de vous arrêter. Pour l'instant,
    nous pouvons définir l'attribut haltonfailure sur true pour arrêter la
    construction immédiatement.
</p>
<p>
    Ajoutons à la fois haltonfailure = "true" et printsummary = "true" à notre
    déclaration &lt;junit&gt; :
</p>
<p>
    <img
        border="0"
        width="392"
        height="71"
        src="img/ant/image033.png"
    />
</p>
<p>
    Nous obtenons maintenant le résultat suivant :
</p>
<p>
    <img
        border="0"
        width="624"
        height="62"
        src="img/ant/image034.png"
    />
</p>
<p>
    <strong><em>Voir les résultats du test</strong></em>
</p>
<p>
    Pour analyser pourquoi les tests échouent, nous devons voir les résultats
    en détail, y compris les noms des tests ayant échoué, les traces
    d'empilement d'exceptions et tout élément imprimé dans les flux de sortie
    et d'erreur.
</p>
<p>
    La tâche JUnit génère les résultats des tests via des formateurs. Un ou
    plusieurs éléments &lt;formateur&gt; peuvent être imbriqués directement
    sous &lt;junit&gt; ou sous ses éléments &lt;test&gt; et &lt;batchtest&gt;.
</p>
<p>
    Par défaut, la sortie de &lt;formateur&gt; est dirigée vers les fichiers,
    mais elle peut également être dirigée vers la console de Ant. Pour obtenir
    une sortie de console détaillée, nous modifions légèrement la tâche:
</p>
<p>
    <img
        border="0"
        width="421"
        height="87"
        src="img/ant/image035.png"
    />
</p>
<p>
    <img
        border="0"
        width="624"
        height="287"
        src="img/ant/image036.png"
    />
    <strong></strong>
</p>
<h1 id="title5">
    Packaging projects
</h1>
<p>
    Lors de la préparation de la distribution du code, commencez toujours par
    une nouvelle génération. Nous ne voulons pas de reliques des versions
    précédentes. Notre cible propre devrait nettoyer tous les répertoires de
    sortie :
</p>
<p>
    <img
        border="0"
        width="455"
        height="120"
        src="img/ant/image037.png"
    />
</p>
<p>
    <strong><em>Ajout de fichiers de données au chemin de classe</strong></em>
</p>
<p>
    Aux côtés des fichiers .class générés, les développeurs doivent souvent
    inclure des fichiers de données dans la hiérarchie des packages Java et, ce
    faisant, les copier dans le fichier JAR. Ces fichiers, appelés ressources
    quand ils se trouvent dans le chemin de classe, peuvent ensuite être
    récupérés avec un appel à this.getClass (). GetResource () ou
    getResourceAsStream (). La manière habituelle de travailler avec ces
    fichiers consiste à les conserver tous dans le répertoire source et à les
    copier dans le répertoire des classes compilées après la compilation du
    code Java. Tout d'abord, nous définissons une propriété contenant le motif
    à inclure :
</p>
<p>
    <img
        border="0"
        width="534"
        height="36"
        src="img/ant/image038.png"
    />
</p>
<p>
    Nous déclarons cela comme une propriété pour faciliter la réutilisation.
    Pour la source, nous ajoutons :
</p>
<p>
    <img
        border="0"
        width="357"
        height="70"
        src="img/ant/image039.png"
    />
</p>
<p>
    Nous faisons normalement cette copie immédiatement après la compilation de
    la source, juste après la tâche &lt;javac&gt;. Il n’ya jamais de situation
    dans laquelle nous ne voudrions pas copier les ressources, alors il est bon
    d’avoir une cible unifiée.
</p>
<p>
    <strong><em>Génération de documentation</strong></em>
</p>
<p>
    Pour créer les fichiers JavaDoc, nous passons à la tâche &lt;javadoc&gt;,
    qui offre un accès complet au programme javadoc. Son utilisation de base
    est assez simple. Comme d'habitude, nous devons déclarer et créer un
    répertoire de destination dans notre cible init :
</p>
<p>
    <img
        border="0"
        width="236"
        height="22"
        src="img/ant/image040.png"
    />
</p>
<p>
    Ensuite, nous déclarons une nouvelle cible pour créer la documentation.
</p>
<p>
    <img
        border="0"
        width="614"
        height="125"
        src="img/ant/image041.png"
    />
</p>
<p>
    Pour que &lt;javadoc&gt; fonctionne, il doit avoir accès à toutes les
    bibliothèques utilisées dans l'application. Si la tâche ne peut pas
    résoudre les références aux classes, elle imprime des avertissements et la
    documentation est incomplète. Pour minimiser cela, nous passons à la tâche
    le chemin de classe de compilation via l'attribut classpathref. En plaçant
    la tâche &lt;javadoc&gt; dans une cible appelée javadocs, avec une
    déclaration de dépendance de depend = "compile", la tâche n'est appelée que
    lorsque le chemin d'accès aux classes est défini et la source compilée.
</p>
<p>
    Un grand choix à faire est le niveau de méthodes et de champs à documenter
    (interne par rapport à externe). Nous avons défini access = "private" pour
    tout exposer ; les autres options étant package, protected et public.
</p>
<p>
    Figure 22 montre le résultat : les pages HTML qui couvrent notre
    bibliothèque. Cette documentation peut être incluse dans les
    redistribuables ou affichée sur le site Web de l’équipe. Beaucoup de
    projets font les deux.
</p>
<p>
    Les documents existants peuvent être regroupés tels quels ou copiés via un
    jeu de filtres pour développer des jetons courants tels qu'une version. Il
    existe un autre changement pour certains fichiers : la correction des fins
    de ligne.
</p>
<p align="center">
    <img
        border="0"
        width="624"
        height="313"
        src="img/ant/image042.png"
    />
</p>
<p align="center">
    <a name="_Ref18072808">Figure </a>
    22 : documentation de la classe date
</p>`;