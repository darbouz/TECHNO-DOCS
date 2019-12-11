var jettyUndertow = `<h1 id="title1">
    Introduction
</h1>
<p>
    Un serveur web est spécifiquement un serveur multi-service utilisé pour
    publier des sites web sur Internet ou un intranet. L'expression « serveur
    Web » désigne également le logiciel utilisé sur le serveur pour exécuter
    les requêtes HTTP, le protocole de communication employé sur le World Wide
    Web.
</p>
<p>
    Un serveur web diffuse généralement des sites web, il peut contenir
    d'autres services liés comme l'envoi d'e-mails, du streaming, le transfert
    de fichiers par FTP, etc.
</p>
<p>
    Les serveurs web publics sont reliés à Internet et hébergent des ressources
    (pages web, images, vidéos, etc.) du Web. Certains serveurs sont seulement
    accessibles sur des réseaux privés (intranets) et hébergent des sites
    utilisateurs, des documents, ou des logiciels, internes à une entreprise,
    une administration, etc. Techniquement il serait possible qu'un même
    ordinateur remplisse les deux fonctions, mais c'est rarement le cas pour
    des raisons de sécurité.
</p>
<p>
    La fonction principale d'un serveur Web est de stocker et délivrer des
    pages web qui sont généralement écrites en HTML. Le protocole de
    communication Hypertext Transfer Protocol (HTTP) permet de dialoguer avec
    le logiciel client, généralement un navigateur web.
</p>
<h1 id="title2">
    Jetty
</h1>
<p>
    Jetty est un conteneur Servlet et un serveur Web réputé portable, léger,
    robuste, flexible, extensible et facile à intégrer.
</p>
<p>
    Jetty peut être déployé en tant que serveur autonome et peut également être
    intégré à une application existante. En plus de ceux-ci, un plugin Maven
    Jetty est disponible pour exécuter des applications dans votre
    environnement de développement.
</p>
<p>
    SPDY, WebSocket, OSGi, JMX, JNDI, JAAS sont quelques-unes des technologies
    que Jetty intègre parfaitement.
</p>
<p>
    Aujourd'hui, Jetty est largement utilisé sur de nombreuses plateformes,
    tant pour le développement que pour la production. Petites et grandes
    applications d'entreprise. SaaS (tel que Zimbra), les applications cloud
    (telles que Google AppEngine), les serveurs d'applications (tels qu’Apache
    Geronimo) et les outils (tels que SoapUI) fonctionnent avec Jetty.
</p>
<p>
    Jetty est open source, hébergé par la fondation Eclipse. La version
    actuelle (à compter de juin 2015) est la version 9.4.x. Vous pouvez obtenir
    des informations plus détaillées sur la page d’accueil de Jetty.
</p>
<h2>
    <a name="_Toc20407576"></a>
    <a name="_Toc18848133">Jetty en tant que serveur StandAlone</a>
</h2>
<h4>
   Download
</h4>
<p>
    Les fichiers binaires Jetty peuvent être téléchargés à partir de la page
    d'accueil Jetty. Les fichiers binaires sont disponibles aux formats zip et
    tgz. Jetty est entièrement crossplatform, de sorte que les mêmes fichiers
    binaires sont valables pour les environnements Java et Unix.
</p>
<h4>
    Running Jetty
</h4>
<p>
    Après avoir téléchargé les fichiers binaires, il est très facile d’activer
    votre serveur Jetty. Vous devez d’abord extraire l’archive zip (ou tgz)
    dans un répertoire pratique. Après avoir extrait les fichiers binaires,
    vous devez accéder au répertoire (_jetty-distribution-9.4.20.v20190813
    _dans cet exemple). Nous allons l'appeler _JETTY_HOME _à partir de
    maintenant dans cet article. Dans JETTY_HOME, vous devez exécuter la
    commande shell suivante pour pouvoir démarrer Server :
</p>
<p>
    java -jar start.jar
</p>
<p>
    Cette commande donne lieu à la sortie suivante :
</p>
<p>
    <img
        width="576"
        height="202"
        src="img/jettyUndertow/image009.jpg"
    />
</p>
<p>
    Voir la dernière ligne comme 2015-08-30 20: 57: 07.730: INFO: oejs.Server:
    main: Started @ 606ms signifie que: vous avez démarré Jetty avec succès.
    Afin de vérifier que le démarrage a réussi, vous pouvez accéder à https: //
    localhost: 8080 / et voir la réponse suivante :
</p>
<p align="center">
    <img
        width="440"
        height="205"
        src="img/jettyUndertow/image010.png"
    />
</p>
<p align="center">
    Figure 1 : Jetty Server Response
</p>
<h4>
    Exécution d'applications Web dans jetty
</h4>
<p>
    Il est très utile d'installer vos applications Web (WAR) dans Jetty. Tout
    ce que vous avez à faire est de supprimer le fichier WAR sous JETTY_HOME /
    webapps. Vous n'avez même pas besoin de redémarrer Jetty. Le répertoire
    webapps est surveillé périodiquement et les nouvelles applications sont
    déployées automatiquement.
</p>
<h4>
    Anatomie du répertoire JETTY_HOME
</h4>
<p>
    Lorsque vous examinez le contenu de JETTY_HOME, vous verrez les répertoires
    suivants :
</p>
<p>
    <img
        width="105"
        height="175"
        src="img/jettyUndertow/image011.png"
    />
</p>
<p>
    Certains de ces répertoires méritent d’être mentionnés :
</p>
<p>
    • etc: configuration XML des modules Jetty définis dans ce répertoire.
</p>
<p>
    • lib : comme dans la plupart des applications Java, les fichiers JAR sont
    stockés dans le répertoire lib.
</p>
<p>
    • logs : lorsque la journalisation est activée, les fichiers de log sont
    créés dans ce répertoire.
</p>
<p>
    • modules : les modules Jetty sont définis dans le répertoire modules
</p>
<p>
    • ressources : les ressources de configuration externes (telles que les
    ressources de configuration de journalisation) sont généralement placées
    sous ce répertoire.
</p>
<p>
    • Webapps : les applications Web (fichiers WAR) exécutées sur notre serveur
    Jetty sont déposées dans ce répertoire.
</p>
<p>
    Dans les répertoires JETTY_HOME, il existe des fichiers start.ini et
    start.jar. Start.ini est le fichier de configuration où la configuration la
    plus courante de Jetty est effectuée. start.jar est le fichier exécutable
    initial qui lance le démarrage du serveur.
</p>
<h4>
    <a name="_Toc18848138">Configuration de base</a>
</h4>
<h5>
    Changer le port de jetty
</h5>
<p>
    Par défaut, Jetty fonctionne sur 8080. Pour le changer en 7070 ou sur un
    autre port, vous devez procéder comme suit :
</p>
<p>
    • Ouvrez le fichier start.ini sous JETTY_HOME.
</p>
<p>
    • Ajouter cette ligne jetty.port = 7070
</p>
<p>
    • Enregistrez et fermez le fichier.
</p>
<p>
    Lorsque vous redémarrez jetty, elle fonctionnera sur le port 7070.
</p>
<h5>
    Changer le répertoire des applications Web
</h5>
<p>
    JETTY_HOME / webapps est le répertoire par défaut pour déployer vos
    applications. Si vous devez le changer pour une raison quelconque, procédez
    comme suit :
</p>
<p>
    • Ouvrez le fichier start.ini.
</p>
<p>
    • Supprimer le commentaire avant le paramètre jetty.deploy.monitoredDirName
</p>
<p>
    • Modifiez ce paramètre à votre guise (E.g: jetty.deploy.monitoredDirName =
    .. / webapps2).
</p>
<p>
    • Enregistrez et fermez le fichier.
</p>
<p>
    Nous pouvons maintenant placer nos WAR dans le répertoire webapps2, qui est
    au même niveau que notre JETTY_HOME.
</p>
<h4>
    <a name="_Toc20407582">Architecture modulaire de jetty</a>
</h4>
<p>
    Jetty fonctionne sur une architecture modulaire, ce qui signifie que de
    nombreuses installations et intégrations sont présentées sous forme de
    modules. HTTP, HTTPS, SSL, la journalisation, JMX, JNDI, WebSockets et de
    nombreuses autres fonctionnalités sont implémentés en tant que modules
    séparés. Certains modules courants tels que HTTP, JSP et WebSocket sont
    activés par défaut. Les autres (tels que HTTPS, JMX, etc.) doivent être
    activés manuellement.
</p>
<h4>
    Anatomie d'un seul module
</h4>
<p>
    Les modules sont répertoriés dans le répertoire JETTY_HOME / modules en
    tant que fichiers mod. Les fichiers mod indiquent les fichiers JAR à
    activer (situés dans le répertoire JETTY_HOME / lib), les fichiers de
    configuration XML (situés dans le répertoire JETTY_HOME / etc) et les
    autres ressources à activer lors de l'activation du module.
</p>
<p>
    Par exemple, lorsque vous affichez le contenu de JETTY_HOME / modules /
    logging.mod, vous verrez à peu près ce qui suit :
</p>
<p>
    xml etc / jetty-logging.xml
</p>
<p>
    fichiers journaux /
</p>
<p>
    lib lib / logging / **. jar resources /
</p>
<p>
    La configuration indique que la journalisation est configurée via etc /
    jetty-logging.xml; et les fichiers JAR requis sont sous lib / logging. En
    plus de ceux-ci, le répertoire logs est requis pour ce module.
</p>
<h4>
    Activation des modules via la ligne de commande
</h4>
<p>
    Il existe deux manières d'activer les modules Jetty. La première façon est
    d'activer via la ligne de commande :
</p>
<p>
    java -jar start.jar --add-to-startd = logging
</p>
<p>
    La commande ci-dessus crée le fichier logging.ini sous JETTY_HOME. La
    configuration associée peut être trouvée dans ce fichier. Après avoir
    configuré la journalisation, vous pouvez redémarrer Jetty et constater que
    la journalisation est active.
</p>
<h2>
    <a name="_Toc20407583">Embedding Jetty</a>
</h2>
<h4>
    <a name="_Toc20407584">Création du projet Maven</a>
</h4>
<p>
    • Aller au File ! New ! Other ! Projet Maven
</p>
<p>
    • Cochez Créer un projet simple et appuyez sur “Suivant”.
</p>
<p>
    • Entrez groupId en tant que : org.mql.snippets.entreprise
</p>
<p>
    • Entrez artifactId en tant que : embedded-jetty-example
</p>
<p>
    • Appuyez sur “Terminer”.
</p>
<p align="center">
    <img
        width="576"
        height="527"
        src="img/jettyUndertow/image012.png"
    />
</p>
<p align="center">
    Figure 2 : simple Maven project in Eclipse
</p>
<h4>
    <a name="_Toc20407585">Ajout de dépendances pour embedded jetty</a>
</h4>
<p>
    Les dépendances suivantes Maven doivent être ajoutées dans le projet :
</p>
<p>
    • jetty-server: utilitaires principaux de jetty
</p>
<p>
    • jetty-servlet: Utilitaires Jetty Servlet
</p>
<p>
    Vous devez ajouter ces dépendances à votre pom.xml. Une fois les
    dépendances ajoutées, votre fichier pom.xml apparaît comme suit :
</p>
<p>
    <img
        width="334"
        height="62"
        src="img/jettyUndertow/image013.png"
    />
</p>
<p>
    <img
        width="318"
        height="235"
        src="img/jettyUndertow/image014.png"
    />
</p>
<h4>
    <a name="_Toc20407586">Créer un serveur Jetty intégré par programme</a>
</h4>
<p>
    Nous allons maintenant créer un serveur Jetty intégré par programme. Afin
    de garder les choses simples, nous allons créer le serveur dans la méthode
    main () de notre application. Pour cela, vous pouvez procéder comme suit :
</p>
<p>
    • Créez le package org.mql.snippets.entreprise.embeddedJetty
</p>
<p>
    • Créez une classe nommée EmbeddedJettyMain.
</p>
<p>
    • Ajoutez une méthode principale à cette classe.
</p>
<p>
    Le code qui crée et démarre et Embedded Jetty est le suivant :
</p>
<p align="center">
    <img
        width="576"
        height="349"
        src="img/jettyUndertow/image016.jpg"
    />
</p>
<p align="center">
    Figure 3 : EmbeddedJettyMain classe
</p>
<p>
    · Dans la première ligne (ligne 10), nous créons un serveur sur le port
    8080.
</p>
<p>
    · Dans la ligne suivante (ligne 11), nous créons un ServletContextHandler
    avec le chemin de contexte * / example *
</p>
<p>
    · En ligne 12, nous lions la classe de servlet ExampleServlet (décrite
    ci-dessous) à ce gestionnaire de contexte de servlet créé dans ligne
    précédente.
</p>
<p>
    · Sur la dernière ligne, nous démarrons le serveur.
</p>
<p>
    ServletContextHandler est une fonctionnalité puissante permettant la
    création et la configuration programmées de servlets et de filtres de
    servlets.
</p>
<p>
    ExampleServlet est un simple HttpServlet qui ne fait que renvoyer une
    sortie constante EmbeddedJetty en tant que réponse.
</p>
<p align="center">
    <img
        width="576"
        height="287"
        src="img/jettyUndertow/image018.jpg"
    />
</p>
<p align="center">
    Figure 4 : ExampleServlet classe
</p>
<h4>
    <a name="_Toc20407587">Running Embedded Jetty</a>
</h4>
<p>
    Exécutez la classe EmbeddedJettyMain par le biais de l'exécution Eclipse.
    Embedded Jetty commence à s'exécuter sur le port défini (8080).
</p>
<p>
    Vous pouvez accéder à l'application via votre navigateur à l'URL suivante :
    https: // localhost: 8080 / example Vous pouvez voir ici la réponse
    ci-dessous :
</p>
<p>
    <img
        width="455"
        height="119"
        src="img/jettyUndertow/image019.png"
    />
</p>
<h2>
    <a name="_Toc20407588">Exemple de configuration Jetty web.xml</a>
</h2>
<h4>
    <a name="_Toc20407589">
        Fichier descripteur de déploiement (a.k.a web.xml)
    </a>
</h4>
<p>
    Le descripteur de déploiement est un fichier XML contenant la configuration
    d'une application Web Java. Dans les applications Web Java, il doit figurer
    dans le répertoire WEB-INF de l'application Web (ou du fichier WAR) et
    s'appeler «web.xml». L'élément racine de ce XML est nommé en tant
    qu'application Web. Ci-dessous, vous pouvez voir un simple fichier web.xml.
</p>
<p>
    &lt;web-app xmlns="https://java.sun.com/xml/ns/javaee"
    xmlns:xsi="https://www.w3.org/2001/ -
    <em>
        <br/>
    </em>
    XMLSchema-instance"
    <br/>
    xsi:schemaLocation="https://java.sun.com/xml/ns/javaee
    <br/>
    https://java.sun.com/xml/ns/javaee/web-app_3_0.xsd"
    <br/>
    version="3.0"&gt;
</p>
<p>
    &lt;display-name&gt;Webapp2&lt;/display-name&gt;
</p>
<p>
    <br/>
    &lt;/web-app&gt;
</p>
<h4>
    <a name="_Toc20407590">
        Création d'un serveur Jetty intégré et exemples d'applications Web
    </a>
</h4>
<p>
    Nous allons configurer deux applications simples dans cet exemple, à savoir
    webapp1 et webapp2, identiques au départ.
</p>
<p>
    Pour créer webapp1, procédez comme suit :
</p>
<p>
    • Créez le dossier webapp1 dans le répertoire / src / main (src / main /
    webapp1).
</p>
<p>
    • Créez un dossier nommé WEB-INF sous src / main / webapp1.
</p>
<p>
    • Créez un fichier web.xml initial sous src / main / webapp1 / WEB-XML. Le
    contenu de ce web.xml est donné ci-dessous.
</p>
<p>
    • Créez un fichier HTML simple nommé jcgindex.html sous src / main /
    webapp1.
</p>
<p>
    Maintenant, webapp1 est prêt à être déployé. Notre seconde application,
    webapp2, peut être préparée en répétant les étapes décrites ci-dessus
    (remplacement des expressions webapp1 par webapp2 bien sûr).
</p>
<p>
    Nous allons également placer un fichier webdefault.xml dans notre projet.
    Pour ce faire, suivez les étapes suivantes :
</p>
<p>
    • Créer un dossier webdefault sous src / main.
</p>
<p>
    • Placez un fichier webdefault.xml sous src / main / webdefault.
</p>
<p>
    Le fichier webdefault.xml peut être obtenu à partir d’une installation
    autonome de Jetty. L'emplacement est JETTY_HOME / etc / webdefault.xml.
</p>
<p>
    <img
        width="199"
        height="292"
        src="img/jettyUndertow/image020.png"
    />
</p>
<p>
    Nous allons exécuter nos applications Web sur Embedded Jetty. Par souci de
    simplicité, notre jetty embarquée traversera la classe principale.
</p>
<p>
    <img
        width="493"
        height="363"
        src="img/jettyUndertow/image021.png"
    />
</p>
<p>
    Nous créons d’abord un serveur sur le port 8080. Nous initialisons ensuite
    un HandlerCollection, qui permet de créer plusieurs contextes d’application
    Web sur un même serveur. Ensuite, nous définissons le chemin de contexte et
    la base de ressources (src / main / webappX) pour les deux applications
    Web. De plus, nous définissons le chemin du descripteur de déploiement par
    défaut (src / main / webdefault / webdefault.xml). Après avoir configuré
    les contextes d'application Web, nous les attachons à HandlerCollections.
    Enfin, nous démarrons notre serveur intégré.
</p>
<p>
    Lorsque nous exécutons notre classe principale, notre serveur démarre sur
    le port 8080. Nous pouvons accéder aux deux applications Web via https: //
    localhost: 8080 / - webapp1 et https: // localhost: 8080 / webapp2.
</p>
<p>
    <img
        width="486"
        height="116"
        src="img/jettyUndertow/image022.png"
    />
</p>
<h1 id="title3">
    Undertow
</h1>
<h2>
    <a name="_Toc20407592">Qu'est-ce que UNDERTOW ?</a>
</h2>
<p>
    Undertow est un serveur NIO construit et maintenu par l’équipe Red Hat
    JBoss. À partir de la version 8 de Wildfly, Undertow est devenu le
    conteneur Web par défaut de Wildfly. Auparavant, l’équipe JBoss s’appuyait
    sur Apache Tomcat pour le traitement des requêtes Web.
</p>
<p>
    Undertow utilise un autre projet JBoss appelé XNIO pour ses capacités NIO.
</p>
<p>
    Bien que Undertow soit un serveur NIO, il est conçu pour gérer les demandes
    bloquantes et non bloquantes.
</p>
<p>
    La première version d'Undertow a été publiée en février 2014. Au moment de
    la rédaction de cet article, Undertow est à la version 2.0.17 et peut
    éventuellement prendre en charge l'intégralité de la spécification Servlet
    4.0.
</p>
<p>
    Certains frameworks de microservice tels que Spring Boot et Jooby prennent
    également en charge Undertow en tant que conteneur Web. L’équipe de Wildfly
    a construit leur implémentation MicroProfile, appelée Thorntail, au-dessus
    d’Undertow.
</p>
<p>
    Nous pouvons visualiser Undertow comme un serveur Http basé sur Java,
    entièrement programmable à l'aide de son interface HttpHandler. Nous
    pouvons l'utiliser pour créer tout type de services orientés HTTP.
</p>
<h2>
    <a name="_Toc20407593">Undertow Architecture</a>
</h2>
<p>
    L'assemblage d'applications basées sur Undertow est simple. Undertow est
    composé comme une application Java standard dans laquelle la configuration
    du serveur peut être spécifiée via une configuration interne ou externe,
    telle que des fichiers de propriétés, etcd, consul, AWS KMS, etc.
</p>
<p>
    Voici comment différents composants interagissent dans une application
    Undertow :
</p>
<p align="center">
    <img
        width="306"
        height="403"
        src="img/jettyUndertow/image023.png"
    />
</p>
<p align="center">
    Figure 5 : Undertow Architecture
</p>
<p>
    Voici différentes étapes du cycle de vie :
</p>
<p>
    · Le serveur reçoit une requête HTTP via un gestionnaire HTTP, tel que le
    gestionnaire de routage, qui explique comment résoudre le routage vers un
    gestionnaire HTTP spécifique.
</p>
<p>
    · La demande est transmise au connecteur HTTP.
</p>
<p>
    · Le connecteur l'achemine vers l'instance de travail XNIO.
</p>
<p>
    · Si la demande est bloquante, il est souhaitable de la transmettre au
    worker pool si ce n'est pas disponible, nous le remettons au pool IO.
</p>
<h2>
    <a name="_Toc20407594">JBoss XNIO</a>
</h2>
<p>
    XNIO est un autre projet lancé par JBoss qui est un bloc de construction
    d’Undertow. Il s'agit d'un framework IO de bas niveau qui fournit des
    abstractions basées sur des canaux similaires à Java NIO. Cependant, il
    ajoute la notion de rappel et la gestion des threads et des ressources
    facilitant l'accès aux réseaux de niveau inférieur et aux fichiers IO. Cela
    permet aux programmeurs de créer plus facilement des services réseau hautes
    performances. La discussion détaillée de XNIO dépasse le cadre de cette
    série d'articles, car la plupart des développeurs auront rarement besoin
    d'utiliser directement les API de bas niveau XNIO.
</p>
<h2>
    <a name="_Toc20407595">Core Undertow Concepts</a>
</h2>
<p>
    Undertow est un serveur configurable avec des paramètres par défaut sains.
    Les développeurs d'applications peuvent vouloir personnaliser ces
    paramètres pour répondre aux besoins de leur application. Certaines des
    configurations à garder à l'esprit sont les suivantes:
</p>
<p>
    1. <strong>Worker Thread Pool</strong> : les pools de threads de travail
    gèrent les tâches bloquantes. Tous les appels d'API bloquants doivent
    chaîner leur gestionnaire dans BlockingHandler pour s'assurer que les
    threads de travail sont utilisés. Cette taille de pool peut être beaucoup
    plus élevée que le pool de threads IO. La recommandation générale est
    d'environ dix par cœur de processeur. Remarque : Dans votre fichier journal
    pour un appel d'API donné, si le nom du thread est affiché sous la forme
    XNIO-1 task- {some-thread-Id}, cela signifie que le thread de travail est
    utilisé pour gérer de tels appels.
</p>
<p>
    2. <strong>Pool de threads IO</strong> : le pool de threads IO gère les
    threads qui exécutent des tâches non bloquantes. Tout appel d'API
    nécessitant des systèmes de blocage externes, tels qu'une base de données,
    une instance Redis ou des passerelles d'API, est de nature bloquante et ne
    doit pas être exécuté sur des threads IO. Ces appels doivent être déchargés
    sur les threads de travail. BlockingHandler peut être utilisé pour
    décharger ces appels vers un pool de threads de travail. La taille de pool
    de threads d'E / S de deux par cœur d'UC est une recommandation
    raisonnable. Remarque : Dans votre fichier journal pour un appel d'API
    donné, si le nom du thread est indiqué par XNIO-1 I / O- {some-thread-Id},
    cela signifie que le thread IO est utilisé pour gérer de tels appels.
</p>
<h2>
    <a name="_Toc20407596">Simple Undertow-Based REST Service</a>
</h2>
<p>
    <img
        width="503"
        height="361"
        src="img/jettyUndertow/image024.png"
    />
</p>
<p>
    Explication de la configuration du serveur :
</p>
<p>
    Ligne n ° 12 - Définit les threads d'E / S du serveur.
</p>
<p>
    Ligne n ° 13 - Définit les threads de travail du serveur.
</p>
<p>
    Ligne n ° 14 - Définit l'écouteur HTTP sur le port 8080 et toute adresse
    réseau. Si l'adresse réseau est laissée vide, la valeur par défaut est
    localhost afin que le service ne soit pas accessible via l'adresse IP.
</p>
<p>
    Ligne n ° 15 - Définit le gestionnaire de chemin. Cela peut être chaîné
    pour spécifier plusieurs modèles de chemin.
</p>
<p>
    Ligne n ° 16 - Il s'agit du gestionnaire qui écoute le chemin racine de
    l'application ("/"). Ceci peut être utilisé comme gestionnaire
    attrape-tout.
</p>
<p>
    Ligne n ° 17 - HttpServerExchange génère une réponse qui peut être utilisée
    par les appelants (navigateurs, services).
</p>
<p>
    Ligne n ° 21 - Cette commande démarre le serveur en tant que daemon thread.
</p>
<h2>
    <a name="_Toc20407597">Déploiement d'applications sur Undertow</a>
</h2>
<p>
    En s'éloignant de l'exemple de base, nous allons apprendre à déployer une
    application Web sur Undertow contenant un ensemble de composants tels que :
</p>
<ul>
    <li>
        Une servlet
    </li>
</ul>
<p>
    · Un auditeur Web
</p>
<p>
    La classe suivante utilise l’API DeploymentInfo pour déployer un servlet
    (attribution du chemin de l’URL "/ mql").
</p>
<p>
    <img
        width="576"
        height="440"
        src="img/jettyUndertow/image026.jpg"
    />
</p>
<p>
    <img
        width="576"
        height="205"
        src="img/jettyUndertow/image028.jpg"
    />
</p>
<p>
    La classe ci-dessus démarrera une instance du serveur Web Undertow et
    déploiera un servlet accessible sur localhost : 8080/app/mql comme indiqué
    :
</p>
<p>
    <img
        width="470"
        height="99"
        src="img/jettyUndertow/image029.png"
    />
</p>`;