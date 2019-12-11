var gradle = `<h1 id="title1">
    Introduction
</h1>
<p>
    Gradle est la prochaine étape évolutive des outils de génération basés sur
    JVM. Il s’appuie sur les enseignements tirés d’outils établis tels que Ant
    et Maven et fait passer leurs meilleures idées au niveau supérieur. En
    suivant une approche par convention, Gradle permet de modéliser de manière
    déclarative le domaine de votre problème en utilisant un langage DSL
    puissant et expressif implémenté dans Groovy au lieu de XML. Étant donné
    que Gradle est un langage JVM natif, il vous permet d’écrire une logique
    personnalisée dans le langage avec lequel vous êtes le plus à l’aise, qu’il
    soit Java ou Groovy.
</p>
<h2>
    <a name="_Toc18326368">Installer Gradle</a>
</h2>
<p>
    Avant de commencer, assurez-vous d’avoir déjà installé le JDK avec une
    version de 1.5 ou supérieure. Bien que certains systèmes d'exploitation
    vous fournissent une installation Java prête à l'emploi, vérifiez qu'une
    version valide est installée sur votre système. Pour vérifier la version du
    JDK, exécutez java –version.
</p>
<p>
    Commencer avec Gradle est facile. Vous pouvez télécharger la distribution
    directement à partir de la page d'accueil de Gradle à l'adresse
    http://gradle.org/downloads. En tant que débutant, il est judicieux de
    choisir le fichier ZIP qui comprend la documentation et un large éventail
    d’exemples de code source à explorer. Décompressez le fichier téléchargé
    dans un répertoire de votre choix. Pour référencer votre environnement
    d'exécution Gradle dans le shell, vous devez créer la variable
    d'environnement GRADLE_HOME et ajouter les fichiers binaires au chemin
    d'exécution de votre shell.
</p>
<p>
    Dans la variable d'environnement de dialogue, définissez la variable
    GRADLE_HOME et mettez à jour vos paramètres de chemin.
</p>
<h2>
    <a name="_Toc18326369">Commencer avec Gradle</a>
</h2>
<p>
    Démarrer avec Gradle Chaque construction de Gradle commence par un script.
    La convention de dénomination par défaut pour un script de génération
    Gradle est build.gradle. Lors de l'exécution de la commande gradle dans un
    shell, Gradle recherche un fichier portant exactement ce nom. S'il est
    introuvable, le moteur d'exécution affiche un message d'aide.
</p>
<p>
    Fixons-nous le noble objectif de créer l’exemple typique « Hello world !»
    Dans Gradle. Vous allez d’abord créer un fichier appelé build.gradle. Dans
    ce script, définissez un travail atomique unique. Dans le vocabulaire de
    Gradle, cela s’appelle une tâche. Dans cet exemple, la tâche s'appelle
    helloWorld. Pour imprimer le message « Hello world !», Utilisez Groovy, la
    lingua franca de Gradle, en ajoutant la commande println à l’action doLast
    de la tâche. La méthode println est l’équivalent plus court de Groovy à
    System.out.println de Java :
</p>
<p>
    <img
        width="245"
        height="82"
        src="img/gradle/image007.png"
    />
</p>
<p>
    <img
        width="367"
        height="34"
        src="img/gradle/image008.png"
    />
</p>
<p>
    Comme prévu, vous voyez la sortie « Hello world !» Lors de l'exécution du
    script. En définissant l'option de ligne de commande facultative quiet avec
    –q, vous indiquez à Gradle de ne générer que le résultat de la tâche.
</p>
<p>
    Sans le savoir, vous avez déjà utilisé le DSL de Gradle. Les tâches et les
    actions sont des éléments importants du langage. Une action nommée doLast
    est presque auto-expressive. C’est la dernière action exécutée pour une
    tâche. Gradle permet de spécifier la même logique de manière plus concise.
    L'opérateur de décalage à gauche &lt;&lt; est un raccourci pour l'action
    doLast. L'extrait de code suivant montre une version modifiée du premier
    exemple :
</p>
<p>
    task helloWorld &lt;&lt; {
</p>
<p>
    println 'Hello world!'
</p>
<p>
    }
</p>
<h1 id="title2">
    Construire les bases du script
</h1>
<h2>
    <a name="_Toc18326371">blocs de construction</a>
</h2>
<p>
    Chaque version de Gradle est composée de trois éléments de base : projets,
    tâches et propriétés. Chaque build contient au moins un projet, qui
    contient à son tour une ou plusieurs tâches. Les projets et les tâches
    exposent des propriétés pouvant être utilisées pour contrôler la
    construction.
</p>
<p>
    Gradle applique les principes de la conception pilotée par le domaine (DDD)
    pour modéliser son propre logiciel de création de domaines. En conséquence,
    les projets et les tâches ont une représentation de classe directe dans
    l’API de Gradle. Examinons de plus près chaque composant et son homologue
    API.
</p>
<h3>
    <a name="_Toc18326372">Projets</a>
</h3>
<p>
    Dans la terminologie de Gradle, un projet représente un composant que vous
    essayez de construire (par exemple, un fichier JAR) ou un objectif que vous
    essayez d’atteindre, comme le déploiement d’une application. Si vous venez
    de Maven, ce concept devrait vous paraître familier. L’équivalent de Gradle
    au fichier pom.xml de Maven est le fichier build.gradle. Chaque script de
    construction Gradle définit au moins un projet. Lors du démarrage du
    processus de construction, Gradle instancie la classe
    org.gradle.api.Project en fonction de votre configuration dans build.gradle
    et la rend implicitement disponible via la variable de projet. La Figure 2
    montre l'interface de l'API et ses méthodes les plus importantes.
</p>
<p align="center">
    <img
        width="423"
        height="157"
        src="img/gradle/image009.png"
    />
</p>
<p align="center">
    <a name="_Ref18162478">Figure </a>
    1 : Deux concepts de base d'une construction Gradle sont des projets et des
    taches.
</p>
<p align="center">
    <img
        width="459"
        height="368"
        src="img/gradle/image010.png"
    />
</p>
<p align="center">
    <a name="_Ref18162630">Figure </a>
    2 : Point d’entrée principal d'une construction Gradle: l'interface du
    projet
</p>
<p>
    Un projet peut créer de nouvelles tâches, ajouter des dépendances et des
    configurations, et appliquer des plugins et d'autres scripts de
    construction. Beaucoup de ses propriétés, comme le nom et la description,
    sont accessibles via les méthodes getter et setter.
</p>
<h3>
    <a name="_Toc18326373">Taches</a>
</h3>
<p>
    Nous avons déjà créé des tâches simples dans le chapitre précédent. Même si
    les cas d'utilisation que j'ai présentés étaient triviaux, vous avez appris
    à connaître certaines des fonctionnalités importantes d'une tâche : actions
    et dépendances de tâches. Une action définit une unité de travail atomique
    exécutée lors de l’exécution de la tâche. Cela peut être aussi simple que
    d’imprimer un texte du type « Hello world !» Ou aussi complexe que la
    compilation de code source Java, comme indiqué dans le chapitre précédent.
    Plusieurs fois, une tâche nécessite une autre tâche à exécuter en premier.
    Cela est particulièrement vrai si la tâche dépend du résultat produit par
    une autre tâche en tant qu'entrée pour effectuer ses propres actions. Par
    exemple, vous avez constaté que vous devez d'abord compiler les sources
    Java avant de pouvoir les regrouper dans un fichier JAR. Examinons la
    représentation d’une tâche dans l’API de Gradle, l’interface
    org.gradle.api.Task, comme illustré à la Figure 3.
</p>
<p>
    L'interface de tâche fournit encore plus de méthodes que celles présentées
    dans la figure. Vous les utiliserez un par un en appliquant des exemples
    concrets tout au long du livre. Maintenant que nous avons discuté des
    projets et des tâches, examinons différents types de propriétés.
</p>
<p align="center">
    <img
        width="377"
        height="248"
        src="img/gradle/image011.png"
    />
</p>
<p align="center">
    <a name="_Ref18163105">Figure </a>
    3 : Task interface in Gradle’s API
</p>
<h3>
    <a name="_Toc18326374">Propriétés</a>
</h3>
<p>
    Chaque instance de projet et de tâche fournit des propriétés accessibles
    via les méthodes getter et setter. Une propriété peut être une description
    de la tâche ou la version du projet.
</p>
<p>
    Souvent, vous voudrez définir vos propres propriétés. Par exemple, vous
    souhaiterez peut-être déclarer une variable qui référence un fichier
    utilisé plusieurs fois dans le même script de génération. Gradle permet de
    définir des variables définies par l'utilisateur via des propriétés
    supplémentaires.
</p>
<h4>
    Propriétés supplémentaires
</h4>
<p>
    De nombreuses classes de modèles de domaine de Gradle prennent en charge
    les propriétés ad-hoc. En interne, ces propriétés sont stockées sous forme
    de paires clé-valeur dans une carte. Pour ajouter des propriétés, vous
    devez utiliser l’espace de nom ext. Regardons un exemple concret. L'extrait
    de code suivant montre qu'il est possible d'ajouter, de lire et de modifier
    une propriété de différentes manières :
</p>
<p>
    project.ext.myProp = 'myValue'
    <br/>
    ext {
    <br/>
    someOtherProp = 123
    <br/>
    }
    <br/>
    assert myProp == 'myValue'
    <br/>
    println project.someOtherProp
    <br/>
    ext.someOtherProp = 567
</p>
<p>
    De même, des propriétés supplémentaires peuvent être alimentées via un
    fichier de propriétés.
</p>
<h4>
    Propriétés de gradle
</h4>
<p>
    Les propriétés peuvent être directement injectées dans votre projet en les
    déclarant dans un fichier de propriétés nommé gradle.properties sous le
    répertoire &lt;USER_HOME&gt; /. Gradle ou le répertoire racine du projet.
    Ils sont accessibles via l’instance de projet. Sachez qu’il ne peut y avoir
    qu’un seul fichier de propriétés Gradle par utilisateur sous
    &lt;USER_HOME&gt; /. Gradle, même si vous avez affaire à plusieurs projets.
    C'est actuellement une limitation de Gradle.
</p>
<p>
    Toute propriété déclarée dans le fichier de propriétés sera disponible pour
    tous vos projets. Supposons que les propriétés suivantes sont déclarées
    dans votre fichier gradle.properties:
</p>
<p>
    <img
        width="172"
        height="28"
        src="img/gradle/image012.png"
    />
</p>
<p>
    Vous pouvez accéder aux deux variables de votre projet comme suit :
</p>
<p>
    assert project.exampleProp == 'myValue'
    <br/>
    task printGradleProperty &lt;&lt; {
    <br/>
    println "Second property: $someOtherProp"
    <br/>
    }
</p>
<h2>
    <a name="_Toc18326375">Travailler avec des tâches</a>
</h2>
<p>
    Par défaut, chaque tâche nouvellement créée est de type
    org.gradle.api.DefaultTask, l'implémentation standard de
    org.gradle.api.Task. Tous les champs de la classe DefaultTask sont marqués
    comme privés. Cela signifie qu'ils ne sont accessibles que par leurs
    méthodes de lecture et de définition publiques. Heureusement, Groovy vous
    fournit du sucre syntaxique qui vous permet d’utiliser les champs par leur
    nom. Sous le capot, Groovy appelle la méthode pour vous. Dans cette
    section, nous allons explorer les caractéristiques les plus importantes
    d’une tâche par exemple.
</p>
<h3>
    <a name="_Toc18326376">Déclarer des actions de tâches</a>
</h3>
<p>
    Une action est l'endroit approprié dans une tâche pour définir votre
    logique de génération. L'interface de tâche vous fournit deux méthodes
    pertinentes pour déclarer une action de tâche : doFirst (Closure) et doLast
    (Closure). Lorsqu'une tâche est exécutée, la logique d'action définie comme
    paramètre de fermeture est exécutée à son tour.
</p>
<p>
    Vous allez commencer facilement en ajoutant une seule tâche nommée
    printVersion. L’objectif de la tâche est d’imprimer la version actuelle du
    projet. Définissez cette logique comme dernière action de cette tâche,
    comme indiqué dans l'extrait de code suivant :
</p>
<p>
    <img
        width="287"
        height="112"
        src="img/gradle/image013.png"
    />
</p>
<p>
    Lors de l'exécution de la tâche avec gradle printVersion, vous devez voir
    le numéro de version correct :
</p>
<p>
    <img
        width="175"
        height="33"
        src="img/gradle/image014.png"
    />
</p>
<h4>
    AJOUTER DES ACTIONS À DES TÂCHES EXISTANTES
</h4>
<p>
    Jusqu'à présent, vous n'avez ajouté qu'une seule action à la tâche
    printVersion, en tant que première ou dernière action. Mais vous n’êtes pas
    limité à une seule action par tâche. En fait, vous pouvez ajouter autant
    d’actions que nécessaire même après la création de la tâche. En interne,
    chaque tâche conserve une liste des actions de la tâche. Au moment de
    l'exécution, ils sont exécutés de manière séquentielle. Examinons une
    version modifiée de votre exemple de TACHE :
</p>
<p>
    <img
        width="421"
        height="127"
        src="img/gradle/image015.png"
    />
</p>
<h3>
    <a name="_Toc18326377">Accéder aux propriétés de DefaultTask</a>
</h3>
<p>
    Ensuite, vous améliorerez la manière dont vous indiquez le numéro de
    version. Gradle fournit une implémentation de consignateur basée sur la
    bibliothèque de consignation SLF4J. Outre l'implémentation de la plage
    habituelle de niveaux de journalisation (DEBUG, ERROR, INFO, TRACE, WARN),
    il ajoute des niveaux supplémentaires. L’instance du consignateur est
    directement accessible via l’une des méthodes de la tâche. Pour l'instant,
    nous allons imprimer le numéro de version avec le niveau de journalisation
    QUIET :
</p>
<p>
    <img
        width="296"
        height="42"
        src="img/gradle/image016.png"
    />
</p>
<h3>
    <a name="_Toc18326378">Définir les dépendances de tâches</a>
</h3>
<p>
    La méthode dependOn permet de déclarer une dépendance à une ou plusieurs
    tâches. Vous avez constaté que le plug-in Java utilise largement ce concept
    en créant des graphiques de tâches pour modéliser les cycles de vie
    complets des tâches, comme la tâche de construction. La liste suivante
    montre différentes manières d'appliquer des dépendances de tâches à l'aide
    de la méthode dependOn.
</p>
<p>
    <img
        width="576"
        height="303"
        src="img/gradle/image018.jpg"
    />
</p>
<p>
    Vous allez exécuter la chaîne de dépendance des tâches en appelant la
    troisième tâche à partir de la ligne de commande :
</p>
<p>
    <img
        width="327"
        height="108"
        src="img/gradle/image019.png"
    />
</p>
<h3>
    <a name="_Toc18326379">Finalizer tasks</a>
</h3>
<p>
    En pratique, vous pouvez vous retrouver dans des situations qui nécessitent
    le nettoyage d’une ressource donnée après l’exécution d’une tâche qui en
    dépend. Un cas d'utilisation typique pour une telle ressource est un
    conteneur Web nécessaire pour exécuter des tests d'intégration sur une
    application déployée. La réponse de Gradle à un tel scénario consiste à
    finaliser les tâches, qui sont des tâches Gradle régulières dont
    l’exécution est planifiée même si la tâche finalisée échoue. L'extrait de
    code suivant montre comment utiliser une tâche de finalisation spécifique à
    l'aide de la méthode Task finalizedBy :
</p>
<p>
    <img
        width="199"
        height="19"
        src="img/gradle/image020.png"
    />
</p>
<p>
    Vous constaterez que l’exécution de la tâche en premier déclenchera
    automatiquement la tâche nommée en second :
</p>
<p>
    <img
        width="327"
        height="54"
        src="img/gradle/image021.png"
    />
</p>
<h3>
    <a name="_Toc18326380">Comprendre la configuration d’une tâche</a>
</h3>
<p>
    Avant de commencer à écrire du code, vous devez créer un fichier de
    propriétés nommé version.properties à côté du script de construction. Pour
    chacune des catégories de version telles que majeure et mineure, vous allez
    créer une propriété individuelle. Les paires clé-valeur suivantes
    représentent la version initiale 0.1-SNAPSHOT :
</p>
<p>
    <img
        width="129"
        height="47"
        src="img/gradle/image022.png"
    />
</p>
<h4>
    AJOUT D'UN BLOC DE CONFIGURATION DE TÂCHE
</h4>
<p>
    La déclare une tâche nommée loadVersion pour lire les classificateurs de
    version à partir du fichier de propriétés et affecter la nouvelle instance
    de ProjectVersion créée au champ de version du projet. À première vue, la
    tâche peut ressembler à n'importe quelle autre tâche que vous avez définie
    auparavant. Mais si vous regardez de plus près, vous remarquerez que vous
    n’avez pas défini d’action ni utilisé l’opérateur de décalage à gauche.
    Gradle appelle cela une configuration de tâche.
</p>
<p>
    <img
        width="576"
        height="363"
        src="img/gradle/image024.jpg"
    />
</p>`;