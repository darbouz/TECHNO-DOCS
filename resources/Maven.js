var maven = `<h1 id="title1">
    Introduction
</h1>
<p>
    La grande majorité des utilisateurs de Maven vont appeler Maven un « outil
    de construction » : un outil utilisé pour créer des artefacts déployables à
    partir du code source. Les ingénieurs de construction et les chefs de
    projet peuvent se référer à Maven pour quelque chose de plus complet : un
    outil de gestion de projet. Quelle est la différence ? Un outil de
    compilation tel que Ant est uniquement axé sur le prétraitement, la
    compilation, l’emballage, les tests et la distribution. Un outil de gestion
    de projet tel que Maven fournit un sur-ensemble de fonctionnalités trouvées
    dans un outil de génération. En plus de fournir des fonctionnalités de
    construction, Maven peut également générer des rapports, générer un site
    Web et faciliter la communication entre les membres d'une équipe de
    travail.
</p>
<p>
    Une définition plus formelle d'Apache Maven : Maven est un outil de gestion
    de projet qui comprend un modèle d'objet de projet, un ensemble de normes,
    un cycle de vie de projet, un système de gestion de dépendances et une
    logique pour l'exécution d'objectifs de plug-in à des phases définies du
    cycle de vie. Lorsque vous utilisez Maven, vous décrivez votre projet à
    l'aide d'un modèle d'objet de projet bien défini. Maven peut alors
    appliquer une logique transversale à un ensemble de plug-ins partagés (ou
    personnalisés).
</p>
<h2>
    <a name="_Toc20150809">Installer Maven</a>
</h2>
<h4>
    Téléchargement de Maven
</h4>
<p>
    Vous pouvez télécharger Apache Maven à partir du site Web du projet à
    l’adresse
    <a href="http://maven.apache.org/download.html">
        http://maven.apache.org/download.html
    </a>
    .
</p>
<p>
    Lors du téléchargement de Maven, veillez à choisir la dernière version
    d’Apache Maven sur le site Web de Maven.
</p>
<h4>
    Installer Maven
</h4>
<p>
    Après le téléchargement de Maven vous allez obtenir un fichier zip,
    l’extrait dans un répertoire.
</p>
<p>
    Une fois que vous avez décompressé Maven dans le répertoire d'installation,
    vous devez mettre à jour la variable d'environnement PATH :
</p>
<p>
    C:\Users\tobrien &gt; set PATH="c:\Program Files\apache-maven-3.0.5\bin»; %
    ←-
</p>
<p>
    PATH%
</p>
<p>
    La définition de cette variable d’environnement sur la ligne de commande
    vous permettra d’exécuter Maven dans votre session actuelle. Sauf si vous
    les ajoutez aux variables d'environnement Système ou Utilisateur via le
    Panneau de configuration, vous devrez exécuter ces deux lignes à chaque
    fois que vous vous connecterez à votre système. Vous devez modifier ces
    deux variables via le Panneau de configuration de Microsoft Windows.
</p>
<h4>
    Test d'une installation Maven
</h4>
<p>
    Une fois Maven installé, vous pouvez vérifier la version en exécutant mvn
    -v à partir de la ligne de commande. Si Maven a été installé, vous devriez
    voir quelque chose qui ressemble à la sortie suivante.
</p>
<p>
    <img
        border="0"
        width="553"
        height="135"
        src="img/maven/image007.png"
    />
</p>
<p>
    Si vous voyez cette sortie, vous savez que Maven est disponible et prêt à
    être utilisé. Si vous ne voyez pas cette sortie et que votre système
    d'exploitation ne trouve pas la commande mvn, assurez-vous que votre
    variable d'environnement PATH et votre variable d'environnement M2_HOME ont
    été correctement définies.
</p>
<h4>
    Détails d'installation Maven
</h4>
<p>
    Le téléchargement de Maven est d’environ 1,5 Mio *. Il a atteint une taille
    de téléchargement aussi réduite, car le noyau de Maven a été conçu pour
    récupérer des plug-ins et des dépendances d’un référentiel distant à la
    demande.
</p>
<p>
    /usr/local/maven $ ls -p1
</p>
<p>
    LICENSE.txt
</p>
<p>
    NOTICE.txt
</p>
<p>
    README.txt
</p>
<p>
    bin/
</p>
<p>
    boot/
</p>
<p>
    conf/
</p>
<p>
    lib/
</p>
<p>
    LICENSE.txt contient la licence logicielle pour Apache Maven. Cette licence
    est décrite plus en détail plus loin dans la section «À propos de la
    licence du logiciel Apache». NOTICE.txt contient certaines notifications et
    attributions requises par les bibliothèques dont dépend Maven. README.txt
    contient des instructions d’installation. bin / contient le script mvn qui
    exécute Maven. boot / contient un fichier JAR (classwords-1.1.jar) chargé
    de créer le chargeur de classes dans lequel Maven s'exécute. conf /
    contient un fichier settings.xml global pouvant être utilisé pour
    personnaliser le comportement de votre installation Maven. Si vous devez
    personnaliser Maven, il est courant de remplacer tous les paramètres d'un
    fichier setings.xml stocké dans ~ / .m2. lib / contient un seul fichier JAR
    (maven-core-2.0.9uber.jar) contenant le noyau de Maven....
</p>
<h2>
    <a name="_Toc20150810">User-Specific Configuration et Repository</a>
</h2>
<p>
    Une fois que vous aurez commencé à utiliser Maven de manière intensive,
    vous remarquerez que Maven a créé des fichiers de configuration locaux
    spécifiques à l’utilisateur et un référentiel local dans votre répertoire
    de base. Dans ~ / .m2 il y aura :
</p>
<p>
    ~ / .m2 / settings.xml
</p>
<p>
    Un fichier contenant une configuration spécifique à l'utilisateur pour
    l'authentification, des référentiels et d'autres informations permettant de
    personnaliser le comportement de Maven.
</p>
<p>
    ~ / .m2 / repository /
</p>
<p>
    Ce répertoire contient votre référentiel Maven local. Lorsque vous
    téléchargez une dépendance depuis un référentiel Maven distant, Maven
    stocke une copie de la dépendance dans votre référentiel local.
</p>
<h1 id="title2">
    Simple Maven projet
</h1>
<h2>
    <a name="_Toc20150812">Créer un projet simple</a>
</h2>
<p>
    Pour démarrer un nouveau projet Maven, utilisez le plugin Maven Archetype à
    partir de la ligne de commande. Exécutez le type d’arc : générer un
    objectif, sélectionnez l'archétype par défaut suggéré en appuyant sur
    "Entrée". Cela utilisera l'archétype org.apache.maven.archetypes:
    maven-archetype-quickstart. Appuyez à nouveau sur "Entrée" pour confirmer
    la dernière version de l'archétype, puis sur "Entrée" pour confirmer les
    paramètres fournis.
</p>
<p>
    mvn archetype:generate -DgroupId=org.mql.maven
    <br/>
    -DartifactId=simple
    <br/>
    -Dpackage=org.mql.maven
    <br/>
    -Dversion=1.0-SNAPSHOT
</p>
<p>
    MVN est la commande Maven. archetype: generate est appelé un objectif
    Maven. Un archétype est défini comme «un modèle ou un type original après
    lequel d'autres objets similaires sont modelés; un prototype. "Un certain
    nombre d'archétypes sont disponibles dans Maven, qu'il s'agisse d'une
    simple application ou d'une application Web complexe.
</p>
<p>
    Une fois que nous avons généré un projet, jetez un coup d’œil à la
    structure de répertoires créée par Maven dans le répertoire simple :
</p>
<p>
    <img
        border="0"
        width="127"
        height="138"
        src="img/maven/image008.png"
    />
</p>
<p>
    <img
        border="0"
        width="96"
        height="25"
        src="img/maven/image009.png"
    />
</p>
<p>
    Essayons simplement de comprendre ces quelques répertoires de base :
</p>
<p>
    Simple : Le plugin Maven Archetype crée un répertoire simple qui correspond
    à l’art artifactId. Ceci est appelé le répertoire de base du projet.
</p>
<p>
    Pom.xml : Chaque projet Maven a ce qu’on appelle un POM (Project Object
    Model) dans un fichier nommé pom.xml. Ce fichier décrit le projet,
    configure les plugins et déclare les dépendances.
</p>
<p>
    Src/main : Le code source et les ressources de notre projet sont placés
    sous src / main. Dans le cas de notre projet Java simple, il s'agira de
    quelques classes Java et de quelques fichiers de propriétés. Dans un autre
    projet, il peut s'agir de la racine du document d'une application Web ou
    des fichiers de configuration d'un serveur d'applications. Dans un projet
    Java, les classes Java sont placées dans src / main / java et les
    ressources classpath dans src / main / resources.
</p>
<p>
    Src/test : Les cas de test de notre projet sont situés dans src / test.
    Sous ce répertoire, les classes Java telles que les tests JUnit ou TestNG
    sont placées dans src / test / java et les ressources de chemin de classes
    pour les tests se trouvent dans src / test / resources.
</p>
<p>
    Le plug-in Maven Archetype a généré une classe unique org.mql.maven.App,
    qui est une classe Java avec une fonction principale statique qui affiche
    un message.
</p>
<h2>
    <a name="_Toc20150813">Construire un projet simple</a>
</h2>
<p>
    Le répertoire créé simple contient le fichier pom.xml et vous pouvez
    facilement construire le projet:
</p>
<p>
    <img
        border="0"
        width="576"
        height="97"
        src="img/maven/image011.jpg"
    />
</p>
<p>
    <img
        border="0"
        width="576"
        height="170"
        src="img/maven/image013.jpg"
    />
</p>
<p>
    <img
        border="0"
        width="576"
        height="179"
        src="img/maven/image015.jpg"
    />
</p>
<p>
    <img
        border="0"
        width="576"
        height="129"
        src="img/maven/image017.jpg"
    />
</p>
<p>
    Nous venons de créer, compiler, tester, packager et installer le projet
    Maven le plus simple possible. Exécutez-le à partir de la ligne de commande
    :
</p>
<p>
    <img
        border="0"
        width="576"
        height="37"
        src="img/maven/image019.jpg"
    />
</p>
<h2>
    <a name="_Toc20150814">Simple Project Object Model (POM)</a>
</h2>
<p align="center">
    <img
        border="0"
        width="576"
        height="309"
        src="img/maven/image021.jpg"
    />
</p>
<p align="center">
    Figure 1 : Le fichier POM de Simple Project
</p>
<p>
    Les premiers éléments - groupId, artifactId, packaging, version -
    constituent ce que l’on appelle les coordonnées Maven, qui identifient de
    manière unique un projet. name et url sont des éléments descriptifs du POM
    fournissant un nom lisible par l'homme et associant le projet à un site
    Web. L'élément dependencies définit une dépendance unique, basée sur un
    test, sur un framework de test unitaire appelé JUnit.
</p>
<p>
    Maven exécute toujours contre un POM efficace, une combinaison de
    paramètres du pom de ce projet. xml, tous les POM parents, un super-POM
    défini dans Maven, des paramètres définis par l'utilisateur et des profils
    actifs. En fin de compte, tous les projets étendent le super-POM, qui
    définit un ensemble de paramètres de configuration par défaut judicieux.
    Bien que votre projet puisse avoir un fichier pom.xml relativement minimal,
    le contenu de son POM est interpolé avec le contenu de tous les POM
    parents, des paramètres utilisateur et des profils actifs. Pour voir ce POM
    "efficace", exécutez la commande suivante dans le répertoire de base du
    projet simple.
</p>
<p>
    mvn help:effective-pom
</p>
<p>
    Lorsque vous exécutez ceci, vous devriez voir un POM beaucoup plus grand
    qui expose les paramètres par défaut de Maven.
</p>
<h2>
    <a name="_Toc20150815">Concepts de base</a>
</h2>
<h4>
    Maven Plugins and Goals
</h4>
<p>
    Pour exécuter un objectif de plug-in Maven unique, nous avons utilisé la
    syntaxe mvn archetype: generate, où arc hetype est l'identifiant d'un
    plugin et generate est l'identifiant d'un objectif. Lorsque Maven exécute
    un objectif de plug-in, il affiche l'identifiant du plug-in et
    l'identifiant de l'objectif dans la sortie standard :
</p>
<p>
    [INFO] [archetype:generate]
</p>
<p>
    Un plugin Maven est une collection d'un ou plusieurs objectifs. Des
    exemples de plugins Maven peuvent être de simples plugins principaux tels
    que le plugin Jar, qui contient des objectifs pour la création de fichiers
    JAR, le plugin Compiler, qui contient des objectifs pour la compilation de
    code source et de tests unitaires, ou le plugin Surefire, qui contient des
    objectifs pour l'exécution de tests unitaires et la génération de fichiers.
    Rapports. D'autres plugins Maven plus spécialisés incluent des plugins tels
    que le plugin Hibernate3 pour l'intégration avec la bibliothèque de
    persistance populaire Hibernate, le plugin JRuby qui vous permet d'exécuter
    ruby dans le cadre d'une construction Maven ou d'écrire des plugins Maven
    dans Ruby. Maven prévoit également la possibilité de définir des plugins
    personnalisés. Un plugin personnalisé peut être écrit en Java, ou dans un
    nombre quelconque de langues, y compris Ant, Groovy, Beanshell et, comme
    mentionné précédemment, Ruby.
</p>
<p align="center">
    <img
        border="0"
        width="290"
        height="101"
        src="img/maven/image022.png"
    />
</p>
<p align="center">
    Figure 2 : plugin avec des goal
</p>
<p>
    Un objectif est une tâche spécifique qui peut être exécutée en tant
    qu'objectif autonome ou avec d'autres objectifs dans le cadre d'une
    construction plus grande. Un objectif est une «unité de travail» chez
    Maven. Des exemples d'objectifs incluent l'objectif de compilation dans le
    plug-in Compiler, qui compile tout le code source d'un projet, ou
    l'objectif de test du plug-in Surefire, capable d'exécuter des tests
    unitaires.
</p>
<h4>
    Maven Lifecycle
</h4>
<p>
    La deuxième commande que nous avons exécutée dans la section précédente
    incluait une exécution du cycle de vie Maven. Il commence par une phase de
    validation de l'intégrité de base du projet et se termine par une phase de
    déploiement d'un projet en production. Les phases du cycle de vie sont
    intentionnellement vagues, définies uniquement comme une validation, des
    tests ou un déploiement, et peuvent signifier différentes choses pour
    différents projets. Par exemple, dans un projet produisant une archive
    Java, la phase de package génère un fichier JAR. Dans un projet produisant
    une application Web, la phase de package génère un fichier WAR.
</p>
<p>
    Les objectifs de plug-in peuvent être associés à une phase de cycle de vie.
    Au fur et à mesure que Maven avance dans les différentes phases d'un cycle
    de vie, il exécute les objectifs associés à chaque phase. Chaque phase peut
    avoir zéro ou plusieurs objectifs liés. Dans la section précédente, lorsque
    vous avez exécuté l'installation mvn, vous avez peut-être remarqué que
    plusieurs objectifs ont été exécutés. Examinez la sortie après avoir
    exécuté mvn install et notez les différents objectifs exécutés. Lorsque cet
    exemple simple a atteint la phase de package, il a exécuté l'objectif jar
    dans le plugin Jar. Notre projet Quickstart simple ayant (par défaut) un
    type d’emballage de jar, l’objectif jar: jar est lié à la phase
    d’emballage.
</p>
<p align="center">
    <img
        border="0"
        width="248"
        height="120"
        src="img/maven/image023.png"
    />
</p>
<p align="center">
    Figure 3 : Un objectif se lie à une phase
</p>
<p>
    <strong>ressources: ressources</strong>
</p>
<p>
    Plugin est lié à la phase processus-ressources. Cet objectif copie toutes
    les ressources de src / main / resources et de tout autre répertoire de
    ressources configuré dans le répertoire de sortie.
</p>
<p>
    <strong>compilateur: compiler</strong>
</p>
<p>
    Est lié à la phase de compilation. Cet objectif compile tout le code source
    de src / main / java ou de tout autre répertoire source configuré dans le
    répertoire de sortie.
</p>
<p>
    <strong>ressources: testResources</strong>
</p>
<p>
    Plugin est lié à la phase processus-test-ressources. Cet objectif copie
    toutes les ressources de src / test / resources et de tout autre répertoire
    de ressources de test configuré dans un répertoire de sortie de test.
</p>
<p>
    <strong>compilateur: testCompile</strong>
</p>
<p>
    Le plugin est lié à la phase test-compilation. Cet objectif compile les cas
    de test de src / test / java et de tout autre répertoire de source de test
    configuré dans un répertoire de sortie de test.
</p>
<p>
    <strong>surefire: test</strong>
</p>
<p>
    Lié à la phase de test. Cet objectif exécute tous les tests et crée des
    fichiers de sortie qui capturent des résultats détaillés. Par défaut, cet
    objectif mettra fin à une construction en cas d'échec du test.
</p>
<p>
    <strong>jar: jar</strong>
</p>
<p>
    À la phase de paquet. Cet objectif intègre le répertoire de sortie dans un
    fichier JAR.
</p>
<p align="center">
    <img
        border="0"
        width="358"
        height="426"
        src="img/maven/image024.png"
    />
</p>
<p align="center">
    Figure 4 : Les objectifs liés sont exécutés lors de l'exécution des phases
</p>
<h4>
    Site Generation and Reporting
</h4>
<p>
    Une autre caractéristique importante de Maven est sa capacité à générer de
    la documentation et des rapports. Dans le répertoire de votre projet
    simple, exécutez la commande suivante :
</p>
<p>
    <strong>mvn site</strong>
</p>
<p>
    Ceci exécutera la phase de cycle de vie du site. Contrairement au cycle de
    vie de génération par défaut qui gère la génération de code, la
    manipulation de ressources, la compilation, la compilation, etc., ce cycle
    de vie concerne uniquement le traitement du contenu de site sous les
    répertoires src / site et la génération de rapports. Une fois cette
    commande exécutée, vous devriez voir un site Web de projet dans le
    répertoire target / site. Chargez target / site / index.html et vous
    devriez voir un shell de base d'un site de projet. Ce shell contient des
    rapports sous «Rapports du projet» dans le menu de navigation de gauche. Il
    contient également des informations sur le projet, les dépendances et les
    développeurs qui lui sont associés sous «Informations sur le projet». Le
    site Web du projet simple est généralement vide. POM contient très peu
    d'informations sur lui-même au-delà de ses coordonnées Maven, d'un nom,
    d'une URL et d'une dépendance de test unique.
</p>`;