var tomcat=`<h1 id="title1">
    Introduction
</h1>
<p>
    Dans ce chapitre, nous présentons le monde du serveur Apache Tomcat.
</p>
<p>
    Tout au long de ce chapitre, nous
</p>
<p>
    - Décrivons l’architecture Apache Tomcat.
</p>
<p>
    - Expliquons les conditions d’installation et de configuration de Tomcat.
</p>
<p>
    - Décrivez les étapes de l’installation et de la configuration de Tomcat
</p>
<p>
    - Testez l’installation Tomcat.
</p>
<h2>
    <a name="_Toc17643805"></a>
    <a name="_Toc17643667"></a>
    <a name="_Toc17643275">Apache tomcat</a>
</h2>
<p>
    L'Apache Software Fondation s'est tout d'abord développé sur un produit
    phare : un serveur HTTP nommé Apache. Apache s'est développé rapidement, et
    a notamment créé une famille très riche de modules, permettant d'enrichir
    ses fonctionnalités. Au tout début du web dynamique, le langage de
    prédilection des scripts CGI était le Perl, et pour en améliorer les
    performances, Apache avait publié un module : mod_perl, prenant en charge
    l'exécution de ces scripts.
</p>
<p>
    Lorsque la première version de l'API Servlet a été publiée, il était
    logique qu'Apache en propose le support. La première solution technique
    disponible pour ce support a été mod_jserv, tombé depuis longtemps dans
    l'obsolescence, et probablement l'oubli. Il n'empêche, mod_jserv est à
    l'origine des premiers développements de Tomcat, container de Servlets
    complet, aujourd'hui universellement utilisé.
</p>
<h2>
    <a name="_Toc17643806"></a>
    <a name="_Toc17643668"></a>
    <a name="_Toc17643276">Organisation des répertoires de Tomcat</a>
</h2>
<p>
    Après l’installation de TOMCAT, vous trouvez les répertoires suivants :
</p>
<p align="center">
	<img src="img/tomcat/image004.png" align="center"/>
</p>
<p align="center">
    Figure 1 : Organisation Des Répertoires de Tomcat
</p>
<p>
    - Répertoire bin :
</p>
<p>
    Le répertoire bin contient tous les fichiers qui permettent de lancer
    Tomcat, que ce soit sous Linux (fichiers .sh) ou Windows (fichiers .bat).
    Notons l'utilitaire version, qui permet de tester la valeur des variables
    d'environnement "vues" par Tomcat, sa version, ainsi que différents détails
    sur l'environnement d'exécution.
</p>
<p>
    - Répertoire conf :
</p>
<p>
    Ce répertoire contient les fichiers de configuration de Tomcat. Les
    fichiers de ces répertoires permettent de configurer tous les aspects du
    fonctionnement de Tomcat, de sa sécurité, et aussi du chargement des
    applications web.
</p>
<p>
    - Répertoire lib :
</p>
<p>
    Ce répertoire contient les librairies Java dont Tomcat a besoin pour
    fonctionner.
</p>
<p>
    - Répertoire logs :
</p>
<p>
    Ce répertoire est vide. C'est ici que Tomcat écrit ses fichiers de
    journalisation dans sa configuration par défaut.
</p>
<p>
    - Répertoire temp :
</p>
<p>
    Répertoire temporaire contenant des fichiers temporaires.
</p>
<p>
    - Répertoire webapps :
</p>
<p>
    Le répertoire webapps contient les applications web gérées par Tomcat. Cet
    endroit peut bien sûr être redéfini. Par défaut, il contient cinq
    applications, très utiles lorsque l'on débute :
</p>
<p>
    1. docs : contient les pages de documentation de Tomcat, également
    accessibles en ligne
</p>
<p>
    2. examples : contient des exemples simples de servlets et de pages JSP ;
</p>
<p>
    3. host-manager et manager : contiennent l'application de gestion des
    applications web de Tomcat. Cette application permet de charger des
    applications web à chaud, et de les visualiser dans une interface web.
</p>
<p>
    4. ROOT : racine des applications web chargées par défaut.
</p>
<p>
    - Répertoire work :
</p>
<p>
    Répertoire de travail de Tomcat, dans lequel, entre autres, les classes
    Java correspondant aux pages JSP sont créées et compilées.
</p>
<h2>
    <a name="_Toc17643807"></a>
    <a name="_Toc17643669"></a>
    <a name="_Toc17643277">l'architecture Et configuration de tomcat</a>
</h2>
<h3>
    <a name="_Toc17643808"></a>
    <a name="_Toc17643670"></a>
    <a name="_Toc17643278">Introduction</a>
</h3>
<p>
    Une instance ou un serveur Tomcat est le composant de niveau supérieur de
    la hiérarchie de conteneurs de Tomcat. Une seule instance Tomcat peut vivre
    dans une seule machine virtuelle Java (JVM). Cette approche sécurise toutes
    les autres applications Java exécutées sur la même machine physique que le
    serveur Tomcat en cas de panne de Tomcat et / ou de sa machine virtuelle
    Java.
</p>
<p>
    Vous pouvez toujours exécuter plusieurs instances sur le même boîtier
    physique, mais en tant que processus Java distincts s'exécutant sur des
    ports réseau distincts.
</p>
<p>
La configuration de Tomcat passe par l'édition du fichier    <strong>server.xml</strong> qui se trouve dans le répertoire conf de
    l'installation. Ce fichier XML se découpe en différents éléments, qui
    correspondent à des notions propres à Tomcat, que nous allons voir une par
    une.
</p>
<p>
    Ces éléments XML se divisent en deux groupes. Le premier est constiué des
    éléments conteneur : Engine : Host et Context. Ces éléments s'imbriquent
    les uns dans les autres suivant des règles très précises, et sont
    obligatoires. Le second groupe est constitué d'éléments facultatifs et
    flottants, au sens où ils peuvent être placés dans les différents
    conteneurs : GlobalNamingResources, Resources, Realm et Valve.
</p>
<h3>
    <a name="_Toc17643809"></a>
    <a name="_Toc17643671"></a>
    <a name="_Toc17643279">Élément Server</a>
</h3>
<p>
    L'unique élément racine Server modélise un serveur Catalina dans sa
    totalité. Catalina est le nom du serveur proprement dit, alors que Tomcat
    est le nom du projet complet. Tout ce qui est défini dans cet élément est
    global au serveur, et sera donc appliqué, entre autres, à toutes les
    applications web qu'il supporte. Techniquement, un server est un élément
    XML, et une interface Java : org.apache.catalina.Server.
</p>
<p>
    Cet élément supporte trois attributs :
</p>
<p>
    1. className : la classe d'implémentation de l'interface
    org.apache.catalina.Server. En principe on n'en change pas, et l'on peut
    omettre cet attribut, qui prendra alors sa valeur par défaut.
</p>
<p>
    2. port : le port d'arrêt ( shutdown ) de Tomcat. Ce port ne correspond pas
    au port HTTP écouté par Tomcat, mais à un port sur lequel Tomcat reçoit la
    commande de s'arrêter. Lorsque l'on tape la commande shutdown sur l'invite
    de commande, cet ordre est émis, et Tomcat s'éteint alors.
</p>
<p>
    3. shutdown : la commande envoyée sur ce port.
</p>
<p>
    Seul l'attribut port est réellement susceptible d'être modifié. Cette
    modification est même nécessaire si l'on installe plusieurs Tomcat en même
    temps sur une même machine.
</p>
<p>
    L'élément server accepte trois types d'enfants : des Listener, un
    GlobalNamingResources et des Service
</p>
<p align="center">
	<img src="img/tomcat/image005.png" align="center"/>
</p>
<p align="center">
    Figure 2 : Element Server
</p>
<h3>
    <a name="_Toc17643810"></a>
    <a name="_Toc17643672"></a>
    <a name="_Toc17643280">Élément Service</a>
</h3>
<p>
    Un service est un container dans lequel on peut trouver autant de
    sous-éléments Connector que l'on veut, et un unique sous-élément Engine. On
    peut définir autant de services que l'on veut au sein d'un serveur donné, à
    condition qu'ils diffèrent tous par leurs noms.
</p>
<p>
    Cet élément possède deux attributs :
</p>
<p>
    1. className : nom de la classe Java qui implémente l'interface
    org.apache.catalina.Service. Peut-être omis, dans ce cas l'implémentation
    par défaut est choisie.
</p>
<p>
    2. name : nom logique de ce service, doit être unique au sein de tous les
    services définis dans un serveur.
</p>
<p align="center">
	<img src="img/tomcat/image006.png" align="center"/>
</p>
<p align="center">
    Figure 3 : Element Service
</p>
<h3>
    <a name="_Toc17643811"></a>
    <a name="_Toc17643673"></a>
    <a name="_Toc17643281">Élément Connector</a>
</h3>
<p>
    Un connecteur est un objet Java capable d'écouter un port précis et
    comprenant un protocole précis. À chaque protocole supporté par Tomcat est
    associé une classe Java de connecteur. Chaque connecteur dirige ensuite les
    requêtes qu'il reçoit au moteur de servlets défini dans ce service. Donc un
    moteur de servlet donné peut répondre à des requêtes en provenance de
    plusieurs ports, et suivant des protocoles différents.
</p>
<p>
    Quel que soit le connecteur choisi, un certain nombre d'attributs sont
    toujours disponibles :
</p>
<p>
    1. port : le port que ce connecteur écoute.
</p>
<p>
    2. enableLookups : autorise ou non les requêtes DNS lorsqu'une servlet
    invoque la méthode request.getRemoteHost(). Une requête DNS est un
    processus éventuellement coûteux. Si enableLookups est à false, alors
    request.getRemoteHost() retourne l'adresse IP plutôt que le nom de domaine
    associé.
</p>
<p>
    3. maxPostSize : la taille maximale des requêtes POST supportée par ce
    serveur. La valeur par défaut est fixée à 2Mo. Une valeur de -1 signifie
    qu'il n'y a pas de limite.
</p>
<h4>
    Connecteur http
</h4>
<p>
    Le connecteur HTTP supporte le standard HTTP/1.1, et permet à Tomcat de
    fonctionner comme un serveur web à part entière.
</p>
<p>
    <strong>maxThreads</strong>
    : indique le nombre maximal de requêtes que ce connecteur peut traiter à la
    fois (une requête est traitée dans son propre thread par le connecteur
    HTTP). Au-delà de cette limite, les requêtes sont placées dans une file
    d'attente.
</p>
<p>
    <strong>acceptCount</strong>
    : taille maximale de la file d'attente des requêtes. Si des requêtes
    supplémentaires arrivent, alors elles sont rejetées.
</p>
<p>
    <strong>Protocol</strong>
    : cet attribut peut prendre deux types de valeur, un nom de protocole, tel
    que HTTP/1.1, ou un nom de classe. Les trois classes supportées par défaut
    sont :
</p>
<p>
    1. org.apache.coyote.http11.Http11Protocol : correspond au protocole
    HTTP/1.1 standard.
</p>
<p>
    2. org.apache.coyote.http11.Http11NioProtocol : correspond au protocole
    HTTP construit sur l'API NIO.
</p>
<p>
    3. org.apache.coyote.http11.Http11AprProtocol : correspond au protocole
    construit sur l'APR (Apache Portable Runtime, qui est la librairie runtime
    utilisée par Apache 2.2).
</p>
<h4>
    Connecteur AJP
</h4>
<p>
    Le connecteur AJP communique avec un autre serveur web, en utilisant le
    protocole AJP. Il existe deux connecteurs de ce type :
</p>
<p>
    1. JK 1.2.* : permet de communiquer avec tous les serveurs web qui
    supportent le protocole JK
</p>
<p>
    2. mod_proxy : permet de communiquer avec Apache 2.2.*.
</p>
<p align="center">
	<img src="img/tomcat/image007.png" align="center"/>
</p>
<p align="center">
    Figure 4 : Connector HTTP
</p>
<p align="center">
	<img src="img/tomcat/image008.png" align="center"/>
</p>
<p align="center">
    Figure 5 : Connector AJP
</p>
<h3>
    <a name="_Toc17643812"></a>
    <a name="_Toc17643674"></a>
    <a name="_Toc17643282">Élément Engine</a>
</h3>
<p>
    L'élément Engine modélise le moteur de servlet proprement dit. À chaque
    serveur Catalina est associé un unique moteur de servlet, auquel on accède
    via des connecteurs. Un moteur peut comporter plusieurs sous-éléments Host,
    chacune représentant un hôte virtuel.
</p>
<p>
    Toutes les implémentations par défaut de cet élément supportent les
    attributs suivants :
</p>
<p>
    1. name : le nom de ce moteur, notamment utilisé dans les fichiers journal
    ;
</p>
<p>
    2. defaultHost : l'hôte virtuel par défaut vers lequel diriger cette
    requête.
</p>
<p align="center">
	<img src="img/tomcat/image009.png" align="center"/>
</p>
<p align="center">
    Figure 6 : Element Engine
</p>
<h3>
    <a name="_Toc17643813"></a>
    <a name="_Toc17643675"></a>
    <a name="_Toc17643283">Élément Host</a>
</h3>
<p>
    Cet élément modélise un hôte virtuel. Un hôte virtuel doit être associé à
    l'adresse IP de ce serveur, via un DNS ou un fichier hosts. Si l'attribut
    defaultHost du moteur dans lequel se trouve cet hôte est défini, alors au
    moins un des hôtes doit obligatoirement posséder ce nom.
</p>
<p>
    Toutes les implémentations de Host doivent supporter les attributs suivants
    :
</p>
<p>
    1. name : le nom de cet hôte virtuel ;
</p>
<p>
    2. appBase : l' application base pour cet hôte. Il s'agit du répertoire
    contenant les applications web pour cet hôte. Il peut s'agir d'un chemin
    absolu, ou d'un chemin relation au répertoire $CATALINA_BASE.
</p>
<p>
    3. autoDeploy : indique à Tomcat s'il doit charger automatiquement les
    applications web qui sont copiées dans le répertoire appBase. Le cas
    échéant, Tomcat scrute le contenu de ce répertoire à intervalles de temps
    réguliers, afin de détecter de nouveaux répertoires, ou de nouveaux
    fichiers .war.
</p>
<p>
    L'implémentation par défaut supporte en plus les attributs suivants.
</p>
<p>
    4. deployOnStartup : indique à Tomcat s'il doit charger les applications
    web se trouvant dans appBase lors de son démarrage. La valeur par défaut de
    cet attribut est true.
</p>
<p>
    5. workDir : répertoire de travail propre à cet hôte. Par défaut, Catalina
    utilise un sous-répertoire de $CATALINA_BASE/work pour chaque hôte, mais il
    est possible d'en choisir un autre. On peut accéder à ce répertoire d'une
    servlet, via l'attribut d'application javax.servlet.context.tempdir.
</p>
<p>
    6. unpackWARs : indique à Catalina qu'il doit exécuter les applications web
    de cet hôte dans un répertoire de travail avant de les exécuter. La valeur
    par défaut de cet attribut est true.
</p>
<p>
    7. deployXML : indique à Catalina s'il peut ou non prendre en compte les
    fichiers /META-INF/context.xml des applications web. La valeur par défaut
    de cet attribut est true.
</p>
<p align="center">
	<img src="img/tomcat/image010.png" align="center"/>
</p>
<p align="center">
    Figure 7 : Element Host
</p>
<h3>
    <a name="_Toc17643814"></a>
    <a name="_Toc17643676"></a>
    <a name="_Toc17643284">Élément Context</a>
</h3>
<p>
    Enfin, l'élément Context modélise une application web. Cet élément est un
    peu particulier, car il peut se trouver en plusieurs endroits.
</p>
<p>
    Historiquement (Tomcat v4), cet élément se trouvait nécessairement dans le
    fichier server.xml de Tomcat. Cette façon de faire posait deux problèmes :
</p>
<p>
    o Toute modification d'un contexte pour une unique application web imposait
    de redémarrer l'ensemble du serveur Tomcat, puisque ce fichier est pris en
    compte au démarrage de Tomcat ;
</p>
<p>
    o Ce fichier étant la propriété de l'administrateur de Tomcat, il y avait
    un problème de partage de droits, puisque ce sont les administrateurs des
    applications web qui connaissent le contenu de ces éléments.
</p>
<p>
    Ce problème a été levé, et il est maintenant possible de placer cet élément
dans un fichier context.xml rangé dans le répertoire    <strong>META-INF</strong> de l'application.
</p>
<p>
    La prise en compte ou non de ce fichier à cet endroit peut être réglé par
    l'administrateur de Tomcat (attribut deployXML de l'élément Host). S'il
    choisit de ne pas prendre en compte ces fichiers, alors Tomcat ira chercher
    ce fichier ailleurs, dans un endroit contrôlé par l'administrateur.
</p>
<p>
    On peut définir autant d'éléments Context que l'on veut dans un hôte
    virtuel, avec une restriction :
</p>
<p>
    o Chaque élément Context doit être associé à un unique attribut path, qui
    représente le chemin vers cette application web.
</p>
<p>
    o Au moins un Context doit être associé à un chemin vide. C'est cette
    application qui servira toutes les requêtes non servies par les autres
    applications.
</p>
<h3>
    <a name="_Toc17643815"></a>
    <a name="_Toc17643677"></a>
    <a name="_Toc17643285">Élément GlobalNamingResources</a>
</h3>
<p>
    Cet élément permet de configurer des ressources et des variables
    d'environnement, qui seront ensuite disponibles pour toutes les
    applications web gérées par cette instance de Tomcat. La distribution par
    défaut nous donne l'exemple de la base d'utilisateurs reconnue par cette
    instance de Tomcat.
</p>
<p align="center">
	<img src="img/tomcat/image011.png" align="center"/>
</p>
<p align="center">
    Figure 8 : Element GlobalNamingResources
</p>
<h3>
    <a name="_Toc17643816"></a>
    <a name="_Toc17643678"></a>
    <a name="_Toc17643286">Élément Realm</a>
</h3>
<p>
    Un Realm est une notion qui appartient à l'environnement de sécurité de
    Java, défini par JAAS (Java Authentification and Authroization Service)
    pour la partie JSE et JCCA pour la partie JEE. Par définition, un Realm est
    un ensemble d'utilisateurs qui partagent la même méthode
    d'authentification. Techniquement pour Tomcat, un Realm est défini par
    cette méthode d'authentification.
</p>
<p>
    Comme il a été dit, un élément Realm est un élément qui peut être inclus
    dans plusieurs éléments conteneur du fichier conf/server.xml de Tomcat :
    Engine, Host ou Context. Un élément Realm inclus dans un élément parent est
    automatiquement hérité dans les éléments enfants. Ainsi, un Realm défini
    dans un Host (donc au niveau d'un hôte virtuel) sera automatiquement pris
    en compte par tous les Context (donc les applications web) de ce Host.
</p>
<p>
    Un élément Realm permet d'associer des droits d'utilisation aux application
    web. Un tel élément modélise une base d'utilisateurs et rôles, qu'il est
    ensuite possible d'utiliser pour restreindre l'utilisation de certaines
    applications.
</p>
<p>
    Tomcat propose plusieurs implémentations de Realm. Nous en avons déjà vu
    une : org.apache.catalina.realm.MemoryRealm, qui utilise le fichier
    tomcat-users.xml. Les autres implémentations permettent notamment de lire
    la liste des utilisateurs et des rôles dans des bases de données, qui
    elles-mêmes peuvent être administrées par ailleurs.
</p>
<p>
    Le choix d'une implémentation particulière se fait en fixant une valeur à
    l'attribut className de l'élément Realm.
</p>
<p align="center">
	<img src="img/tomcat/image012.png" align="center"/>
</p>
<p align="center">
    Figure 9 : Element Realm
</p>
<h3>
    <a name="_Toc17643817"></a>
    <a name="_Toc17643679"></a>
    <a name="_Toc17643287">Élément Valve</a>
</h3>
<p>
    De même que l'élément Realm, l'élément Valve peut se placer dans les
    conteneurs Engine, Host et Context. De même que pour le Realm, une valve
    définie au niveau d'un conteneur s'applique à ses sous-conteneurs. Une
    valve est un élément utilitaire, qui peut avoir différentes fonctions, qui
    s'insère dans le processus de traitement d'une requête, et realise un
    certain traitement. À chaque type de valve est associé un traitement
    particulier.
</p>
<p>
    Un élément Valve comporte toujours un attribut className, qui indique
    quelle implémentation de Valve est utilisée pour cet élément. Suivent
    ensuite une liste d'attributs propres à chaque implémentation.
</p>
<p>
    Voyons les principales implémentations de Valve :
</p>
<h4>
    Valve de journalisation
</h4>
<p>
    On crée ici une valve de journalisation, qui enregistre ses informations
    dans des fichiers dont le préfixe est fichier_log, dans le répertoire
    $CATALINA_BASE/logs. Ce fichier subira une rotation toutes les heures, ce
    qui est fixé par la valeur de l'attribut yyyy-MM-dd.HH. L'attribut
    resolveHost décide si une requête DNS est faite afin d'enregistrer le nom
    d'hôte du client, ou juste son adresse IP.
</p>
<p align="center">
	<img src="img/tomcat/image013.png" align="center"/>
</p>
<p align="center">
    Figure 10 : Element Valve
</p>
<h4>
    Valve de filtrage par adresse IP
</h4>
<p align="center">
	<img src="img/tomcat/image014.png" align="center"/>
</p>
<p align="center">
    Figure 11 : Valve de filtrage par adresse IP
</p>
<p>
    Si l'attribut allow est présent, alors la requête doit correspondre à sa
    valeur. S'il n'est pas présent, alors la requête est acceptée, sauf si elle
    correspond à la valeur de l'attribut deny. Dans tous les cas, une requête
    qui correspond à la valeur de l'attribut deny est rejetée.
</p>
<p>
    Notons enfin que l'attribut deny de RemoteHostValve est décodé en utilisant
    la expressions régulières Java (package java.util.regex).
</p>
<h4>
    Autres valves
</h4>
<p>
    Tomcat propose d'autres valves que celles présentées ici :
</p>
<p>
    1. Une valve de débugage : la RequestDumperValve permet d'enregistrer dans
    un fichier l'intégralité des paramètres d'une requête HTTP. Elle ne doit
    être utilisée qu'en phase de mise au point d'une application, sous peine de
    saturer rapidement le disque dur.
</p>
<p>
    2. Des valves de sécurité et d'authentification :
</p>
<p>
    o SingleSignOn : permet de s'authentifier sur plusieurs applications web
    d'un même hôte virtuel ;
</p>
<p>
    o BasicAuthenticator et DigestAuthenticator : permettent de forcer
    l'authentification HTTP basic ou digest pour l'accès à une application web.
</p>
<p>
    o FormAuthenticator et SSLAuthenticator : activent l'authentification par
    formulaire, en mode normal ou SSL.
</p>
<p>
    Et voici l’architecture de tomcat avec les composants principaux.
</p>
<p align="center">
	<img src="img/tomcat/image015.png" align="center"/>
</p>
<p align="center">
    Figure 12 : Architecture de Tomcat
</p>
<h2>
    <a name="_Toc17643818"></a>
    <a name="_Toc17643680"></a>
    <a name="_Toc17643288">Lancement de Tomcat</a>
</h2>
<h3>
    <a name="_Toc17643819"></a>
    <a name="_Toc17643681"></a>
    <a name="_Toc17643289">Lancement par défaut</a>
</h3>
<p>
    La distribution par défaut de Tomcat permet de le lancer avec une
    adaptation minimale de la configuration.
</p>
<p>
    Pour que le lancement se déroule bien, il faut vérifier que la variable
    JAVA_HOME soit bien positionnée sur une installation du JDK ou du JRE qui
    correspondent à la version de Java dont Tomcat a besoin. Ensuite, il suffit
    de se placer dans le répertoire bin, et de taper la commande :
</p>
<p align="center">
	<img src="img/tomcat/image016.jpg" align="center"/>
</p>
<p>
    Une fenêtre s'ouvre alors, qui détaille le déroulement des opérations de
    lancement.
</p>
<p>
    Il suffit alors d'ouvrir un navigateur, et de le faire pointer vers l'URL
    http://localhost:8080/, on obtient la page d'accueil suivante.
</p>
<p align="center">
	<img src="img/tomcat/image017.jpg" align="center"/>
</p>
<p align="center">
    Figure 13 : Page d'accueil de Tomcat
</p>
<p>
    Cette page d'accueil permet d'accéder à l'intégralité de la documentation
    de Tomcat, en local (cartouche Documentation), aux ressources en ligne sur
    le site de l'ASF, et à des exemples de servlet ou de JSP.
</p>
<p>
    Le cartouche Administration n'est pas encore accessible : il faut pour cela
    modifier certains droits d'accès, ce que nous allons faire.
</p>
<p>
    Pour arrêter Tomcat il suffit de tapez la commande SHUTDOWN.
</p>
<h3>
    <a name="_Toc17643820"></a>
    <a name="_Toc17643682"></a>
    <a name="_Toc17643290">Plusieurs instances de Tomcat</a>
</h3>
<p>
    Pour un certain nombre de raisons (bonnes ou mauvaises...), on peut avoir
    besoin de lancer plusieurs instances de Tomcat en parallèle. Cela est
    parfaitement possible, à condition de positionner les bonnes variables
    d'environnement.
</p>
<p>
    La variable CATALINA_HOME doit pointer vers le répertoire d'installation de
    Tomcat. La valeur de cette variable doit être la même pour tous les
    contextes de lancement de chaque instance de Tomcat.
</p>
<p>
    Une deuxième variable est utilisée, CATALINA_BASE, qui peut prendre une
    valeur propre à chaque lancement.
</p>
<p>
    Tomcat utilise plusieurs classloader pour fonctionner. Chaque classloader
    charge des classes et des JAR tel que défini dans le fichier
    conf/catalina.properties.
</p>
<p>
    o common.loader : les classes chargées par ce classloader sont disponibles
    dans Tomcat et pour toutes les applications web que cette instance prend en
    charge.
</p>
<p>
    o server.loader : ces classes sont accessibles au niveau du serveur. Par
    exemple, si une connexion JDBC est définie dans le Server, c'est ce
    classloader qui doit charger le pilote JDBC.
</p>
<p>
    o shared.loader : ces classes sont disponibles dans toutes les applications
    web.
</p>
<p>
    Par défaut, les classloader server et shared sont vides, et Tomcat
    n'utilise que le classloader common.
</p>
<p>
    Ensuite, Tomcat crée un classloader par application web, ce qui permet de
    garantir l'étanchéité complète d'une application web à l'autre. Ce
    classloader charge le contenu de WEB-INF/classes et WEB-INF/lib, tel que
    défini dans l'API Servlet.
</p>
<p>
    On voit donc qu'il est possible, en jouant sur la variable CATALINA_BASE de
    définir un jeu de classes commun aux applications web, instance par
    instance.
</p>
<p>
    Chaque instance de Tomcat peut ensuite gérer son propre environnement : les
    répertoires conf, work, temp, webapps et logs sont, par défaut, relatifs à
    CATALINA_BASE, et peuvent être redéfinis par des options dans le fichier de
    configuration conf/server.xml.
</p>
<h1 id="title2">
    Déploiement des applications Web à Tomcat
</h1>
<h2>
    <a name="_Toc17643822"></a>
    <a name="_Toc17643684"></a>
    <a name="_Toc17643292">Déploiement des archives WAR</a>
</h2>
<p>
    Le fichier WAR (Web Archive) est un fichier unique contenant toutes les
    ressources de l’application Web et pouvant être déployé directement sur
    Tomcat. Le fichier WAR est en fait un fichier archivé compatible zip qui,
    lorsque décompressé, contient la même structure de répertoires que les
    autre apps.
</p>
<p>
    Un fichier WAR est la méthode standard pour empaqueter les applications Web
    Java. Vous pouvez en créer un. En utilisant l’outil d’archivage de Java,
    jar. Vous pouvez créer un fichier WAR à partir du répertoire éclaté en
    passant à et en exécutant la commande suivante à partir du répertoire de
    l’application :
</p>
<p>
    Ø Jar cvf [(le nom de l’archive).war] [le répertoire de destination]
</p>
<p>
    Pour déployer une application Web fournie avec WAR, il suffit de la copier
    sur le Répertoire CATALINA_HOME/webapps.
</p>
<p>
    Lors du déploiement de l’archive WAR, Tomcat le décompresse dans le
    répertoire CATALINA_HOME/webapps, en le nom du sous-répertoire
    correspondant au nom du fichier WAR, sans extension.
</p>
<h2>
    <a name="_Toc17643823"></a>
    <a name="_Toc17643685"></a>
    <a name="_Toc17643293">Autres méthodes de déploiement</a>
</h2>
<p>
    Jusqu'à présent, nous avons vu comment déployer manuellement des
    applications Web sur Tomcat, en copiant des fichiers sur un serveur tiers.
    Ou en créant l’archive WAR et en la copiant dans le répertoire de
    déploiement de Tomcat. Copier les fichiers sur des serveurs distants pour
    le déploiement en production peut devenir fastidieux ou simplement
    impossible si vous n’avez pas accès au système de fichiers du serveur
    distant. C’est pourquoi Tomcat distribue avec l’application Web Manager, un
    frontal intégré pour la gestion des applications Web, qui peut être utilisé
    pour le déploiement. Vous pouvez accéder à la page d'accueil de
    l'application Web Manager sur un serveur distant. Depuis le navigateur,
    remplissez le formulaire Web avec les détails de votre application Web,
    sélectionnez l'archive WAR à déployer, et appuyez sur soumettre.
    L'application Web sera déployée automatiquement.
</p>
<h1 id="title3">
   tomcat manager web application
</h1>
<p>
    Dans le chapitre précédent, nous avons notamment appris à déployer des
    applications Web Java pour Serveur Apache Tomcat. Dans notre exemple, nous
    avons copié le répertoire ou le fichier WAR de l’application Web dans
    Répertoire / webapps de Tomcat et démarré (ou redémarré) le serveur.
    Cependant, dans une production il peut être gênant d’arrêter le serveur en
    cours d’exécution avec des applications existantes - c’est là que Les
    applications Web de Tomcat Manager sont pratiques. Utilisation de
    l’application Web Manager fournie avec Apache Tomcat, vous pouvez déployer
    de nouvelles applications, annuler le déploiement d’activités existantes et
    effectuer diverses autres tâches de gestion de serveur à partir de votre
    navigateur.
</p>
<h2>
    <a name="_Toc17643825"></a>
    <a name="_Toc17643687"></a>
    <a name="_Toc17643295">Qu'est-ce que l'application Web MANAGER ?</a>
</h2>
<p>
    L'application Web Tomcat Manager est fournie avec le serveur Tomcat. Il est
    installé dans le contexte chemin de /manager et fournit la fonctionnalité
    de base pour gérer les applications Web exécutées dans le Serveur Tomcat.
    Certaines des fonctionnalités fournies incluent la possibilité d’installer,
    de démarrer, d’arrêter, de supprimer et de signaler les applications Web. À
    l'aide de l'application Web Manager, vous pouvez facilement déployer des
    applications Web sur le serveur local ou distant, sans besoin d'un accès
    FTP au serveur lui-même - toutes les commandes sont appelées sur protocole
    HTTP - en utilisant votre navigateur préféré ou la ligne de commande.
</p>
<h2>
    <a name="_Toc17643826"></a>
    <a name="_Toc17643688"></a>
    <a name="_Toc17643296">Accéder à l'application Web Manager</a>
</h2>
<p>
    Avant de pouvoir utiliser le gestionnaire, vous devez configurer un nouvel
    utilisateur avec les privilèges appropriés pour l'application web du
    gestionnaire. Si vous essayez d'accéder à une partie de l'application Web
    Manager sans configuration des privilèges de sécurité, une page d’erreur
    Tomcat vous sera présentée, avec HTML standard. Code d'état 403 – interdit.
</p>
<p>
    Tomcat username, passwords et roles des utilisateurs sont stockés dans le
    fichier CATALINA_HOME / conf / tomcat-users.xml. Si vous ouvrez ce fichier
    dans votre éditeur de texte, vous verrez qu'il est vide. Ce serait très
    dangereux si Tomcat livré avec des utilisateurs et des rôles préconfigurés
    - il se peut que quelqu'un utilise par défaut la configuration en
    production, permettant la gestion de toute application Web déployée à toute
    personne qui connaît la configuration utilisateur par défaut de Tomcat.
</p>
<p>
    Donc, nous devrons ajouter quelques lignes au fichier tomcat-users.xml afin
    de pouvoir créer des utilisateurs pouvant accéder à Application web
    Manager.
</p>
<p align="center">
	<img src="img/tomcat/image018.png" align="center"/>
</p>
<p align="center">
    Figure 14 : Tomcat Users Configuration.
</p>
<p>
    Dans la ligne 1, nous avons défini un utilisateur avec le nom d'utilisateur
    managerGui et le rôle de managergui. Dans la ligne suivante, nous avons
    créé l’utilisateur managerScript avec le rôle de manager-script.
    Utilisateur managerGui ne peut donc accéder qu’à l’interface HTML de
    l’application Web Manager, et les utilisateurs managerScript ne peut
    émettre que des commandes utilisant un moteur de script textuel.
</p>
<p>
    Les deux utilisateurs peuvent accéder aux pages d'état.
</p>
<h2>
    <a name="_Toc17643827"></a>
    <a name="_Toc17643689"></a>
    <a name="_Toc17643297">
        Accès à l'application Web Manager à l'aide de l'interface Web
    </a>
</h2>
<p>
    La moyenne la plus courant d'accéder à l'application Web Manager consiste à
    utiliser son interface Web riche. Une fois que tu as utilisateur
    privilégié, vous pouvez accéder à la page d'accueil de l'application Web
    Manager en entrant les informations suivantes URL dans la barre d’adresse
    de votre navigateur : http://localhost:8080/manager/html. Parce que le
    manager web application est une page Web protégée. La boîte de dialogue
    d'authentification de base vous sera présentée.
</p>
<p align="center">
	<img src="img/tomcat/image020.jpg" align="center"/>
</p>
<p align="center">
    Figure 15 : Login page
</p>
<p>
    Après avoir saisi les informations d’identification correctes, vous verrez
    la page d’accueil de l’application Web Manager.
</p>
<p align="center">
	<img src="img/tomcat/image021.jpg" align="center"/>
</p>
<p align="center">
    Figure 16 : Tomcat Manager web application – web interface home page
</p>
<p>
    Le lien List applications exécute la commande de liste sur l’instance
    Tomcat. La commande résulte en une liste de toutes les applications Web
    actuellement déployées sur le serveur. La commande list est celle invoquée
    par défaut lors de l'utilisation de l'interface Web du gestionnaire Tomcat.
    Donc, quand nous avons chargé Tomcat Page d’accueil du gestionnaire, nous
    avons en fait invoqué la commande list. Si vous cliquez sur le lien List
    applications, vous invoquera la commande list, ce qui entraînera le
    rechargement de la même page dans le navigateur. La boîte de message
    contiendra le message «OK» pour vous informer que la commande de liste a
    été envoyée. Invoqué avec succès.
</p>
<h2>
    <a name="_Toc17643828"></a>
    <a name="_Toc17643690"></a>
    <a name="_Toc17643298">Vérification de l'état du serveur</a>
</h2>
<p>
    Pour accéder Apache Tomcat status, cliquez sur le lien Server Status dans
    la partie supérieure droite du page d'accueil de l'application web manager.
</p>
<p align="center">
	<img src="img/tomcat/image022.jpg" align="center"/>
</p>
<p align="center">
    Figure 17 : Apache Tomcat Server Status page
</p>
<p>
    Sur la page server status, vous pouvez voir les détails de votre système
    d’exploitation (nom, architecture, et version), votre machine virtuelle
    Java (fournisseur et version) et la version d’Apache Tomcat que vous
    utilisez.
</p>
<p>
    De plus, au bas de l'écran, vous pouvez voir l'état de la mémoire de la
    machine virtuelle Java et l'état de AJP.et connecteurs HTTP Tomcat - état
    des threads et état des demandes actives.
</p>
<h2>
    <a name="_Toc17643829"></a>
    <a name="_Toc17643691"></a>
    <a name="_Toc17643299">Déploiement d'une nouvelle application Web</a>
</h2>
<p>
    Pour déployer une nouvelle application Web à l’aide de l’interface Web,
    vous utiliserez le formulaire HTML du gestionnaire de page d'accueil. Il y
    a deux formulaires HTML sont disponibles l'un pour déployer une application
    Web pour un fichier ou un répertoire déjà disponible sur le serveur sur
    lequel l'instance Tomcat est en cours d'exécution et l’autre vous permet de
    déployer une application Web à partir du fichier WAR situé sur votre
    ordinateur local.
</p>
<p align="center">
	<img src="img/tomcat/image023.jpg" align="center"/>
</p>
<p align="center">
    Figure 18 : formulaires HTML pour déployer une application
</p>
<p>
    L’utilisation la plus courante de l’application Web Manager pour le
    déploiement sur Tomcat est le Déploiement distante- où vous avez
    l'application Web emballée dans le fichier WAR sur votre ordinateur local,
    et vous souhaitez le déployer sur un serveur Tomcat distant. Pour ce faire,
    nous utiliserons le deuxième formulaire dans le déploiement section de la
    page d'accueil de l'application Web Manager, intitulée "Fichier WAR à
    déployer".
</p>
<p>
    Pour faire ça il suffit de choisir l’emplacement de votre fichier WAR en
    cliquant sur « choose file » et clique sur deploy.
</p>
<p>
    Vous pouvez également utiliser l’application Web Manager pour déployer une
    application Web située sur le serveur. Système de fichiers. Pour ce faire,
    utilisez le formulaire en haut dans la section Déployer. Le formulaire a
    trois champs de saisie : Chemin du contexte, «URL du fichier de
    configuration XML » et «URL du fichier WAR ou du répertoire ». Paramètre,
    Chemin du contexte, est, comme son nom l'indique, un chemin de contexte
    dans lequel l'application Web sera déployé à. Nous allons déployer notre
    application Web sous le chemin de contexte /app, nous entrons donc que dans
    le champ de saisie de chemin de contexte du formulaire HTML. Le champ
    Chemin du contexte est obligatoire lorsque déployer une application Web à
    partir du chemin local. Vous devriez renseigner l'un des deux autres
    paramètres, en fonction de l’emplacement de l’application Web que vous
    déployez. Si vous connaissez l'emplacement de la guerre fichier, ou le
    répertoire de l’application Web sur le système de fichiers local, vous
    devez le spécifier dans le “WAR ou "URL du répertoire" - et laissez le
    champ "URL de configuration XML" vide. D'autre part, si vous avoir un
    fichier XML de descripteur de déploiement, entrez son emplacement dans le
    champ «URL du fichier de configuration XML », et laissez le champ pour
    l'emplacement du fichier WAR vide. Lorsque vous avez entré tous les
    détails, vous pouvez soumettez le formulaire en cliquant sur le bouton
    Déployer.
</p>
<p align="center">
	<img src="img/tomcat/image024.jpg" align="center"/>
</p>
<p align="center">
    Figure 19 : Deploiment d'une application
</p>
<p align="center">
	<img src="img/tomcat/image025.jpg" align="center"/>
</p>
<h1 id="title4">
   Configuration de Security Realms
</h1>
<p>
    Jusqu'à présent, nous avons appris les bases de l'architecture Tomcat. Dans
    ce chapitre, nous couvrons certaines des méthodes fournies par Tomcat pour
    la protection des ressources. Premièrement, nous parlons d'utiliser des
    domaines de sécurité pour protéger une ressource. Ensuite, nous passons aux
    communs domaines de sécurité utilisés avec Tomcat. Enfin, nous couvrons les
    bases de la sécurité des conteneurs Tomcat avec BASIC.et l'authentification
    basée sur le formulaire.
</p>
<h2>
    <a name="_Toc17643831"></a>
    <a name="_Toc17643693"></a>
    <a name="_Toc17643301">Security Realms</a>
</h2>
<p>
    Realm security est un mécanisme de Tomcat pour la protection des ressources
    d’applications Web. Il te donne la possibilité de protéger une ressource
    avec une contrainte de sécurité définie, puis de définir les rôles
    d’utilisateur pouvant accéder à la ressource protégée. Plus précisément, le
    domaine de Tomcat peut être défini comme une collection de noms
    d’utilisateur, mots de passe correspondants et les rôles d’utilisateur
    associés à chaque utilisateur intégré à Serveur Tomcat.
</p>
<p>
    L’abstraction d’un domaine de sécurité par Tomcat est définie par
    l’interface org.apache.catalina.Realm, vous pouvez trouver cette interface
    dans l'emplacement suivant :
</p>
<p>
    /src/catalina/src/share/org/apache/catalina/Realm.java
</p>
<p>
    Tomcat fournit plusieurs implémentations de l'interface de realm :
</p>
<p align="center">
	<img src="img/tomcat/image026.jpg" align="center"/>
</p>
<p align="center">
    <a name="_Ref17560586">Figure </a>
    20 : Realm Implementation
</p>
<h2>
    <a name="_Toc17643832"></a>
    <a name="_Toc17643694"></a>
    <a name="_Toc17643302">Memory Realm</a>
</h2>
<p>
    MemoryRealm (contenu dans package org.apache.catalina.realm.MemoryRealm)
    utilise une base de données utilisateur en mémoire, lue à partir d’un
    fichier XML au démarrage du serveur. La racine de la structure XML est
    l’élément &lt;tomcat-users&gt;, qui contient les éléments &lt;user&gt;.
    Chaque élément &lt;user&gt; contient les attributs requis pour chaque
    utilisateur.
</p>
<h3>
    <a name="_Toc17643833"></a>
    <a name="_Toc17643695"></a>
    <a name="_Toc17643303">Protéger une ressource avec un MemoryRealm</a>
</h3>
<p>
    Pour voir réellement le fonctionnement d’un MemoryRealm, créons un domaine
    qui protège notre exemple d’application Web /app.
</p>
<p>
    La première étape consiste à activer MemoryRealm dans le fichier de
    configuration Tomcat. CATALINA_HOME / conf / server.xml. Pour ce faire, il
    suffit d’ajouter la ligne suivante sous le nom Élément &lt;Engine&gt;,
    &lt;Host&gt; ou &lt;Context&gt; de server.xml. Nous allons le configurer
    pour notre /app web application sous l'élément &lt;Context&gt;.
</p>
<p align="center">
	<img src="img/tomcat/image027.png" align="center"/>
</p>
<p align="center">
    Figure 21 : MemoryRealm Configuration
</p>
<p>
    Un seul domaine est actif pour chaque application Web à la fois. Par
    conséquent, le domaine défini dans &lt;Engine&gt; s’appliquera à toutes les
    applications Web déployées sur le serveur, à moins qu’il ne soit remplacé
    par le paramètre &lt;Realm&gt; élément sous &lt;hôte&gt;. De même, un
    domaine défini sous les éléments &lt;Engine&gt; ou &lt;Host&gt; peut être
    remplacé par un seul domaine configuré par une application Web, sous
    l'élément &lt;Context&gt;. Pour éviter la confusion et pour maintenir la
    configuration aussi robuste que possible, il est recommandé de configurer
    un realm sur le niveau de l'application Web, dans l'élément
    &lt;Context&gt;, comme le montre notre exemple.
</p>
<p>
    Cependant, la configuration du realm de cette manière ne sécurisera pas
    l’application Web; en ajoutant le L'élément &lt;Realm&gt; dans server.xml
    active simplement le domaine de l'application Web.
</p>
<p>
    Alors il reste une autre configuration, c’est la configuration de web.xml
    en ajoutant l’élément &lt; security-constraint &gt; :
</p>
<p align="center">
	<img src="img/tomcat/image028.png" align="center"/>
</p>
<p align="center">
    Figure 22 : Definition des resources securiser dans web.xml
</p>
<p>
    Tout d’abord, nous définissons l’élément &lt;security-constraint&gt;, qui
    agit en tant que détenteur de toute sécurité Configurations pour cette
    application Web. Cet élément a deux éléments enfants requis :
    &lt;web-resourcecollection&gt;, qui définit le chemin d'URL des
    applications Web à protéger, et &lt;auth-constraint&gt;, qui définit les
    rôles d'autorisation qu'un utilisateur accédant aux URL protégées doit
    avoir.
</p>
<p>
    Maintenant si vous naviguez au web application, vous allez voir error 403 -
    Forbidden :
</p>
<p align="center">
	<img src="img/tomcat/image029.jpg" align="center"/>
</p>
<p align="center">
    Figure 23 : Error 403
</p>
<p>
    Nous avons donc sécurisé notre application Web, mais lorsque nous avons
    essayé d'y accéder, nous avons eu la page d'erreur tout de suite. Nous
    devrions avoir la possibilité d'entrer un nom d'utilisateur et un mot de
    passe et, si nous nous connectons avec succès et avoir le rôle requis, nous
    devrions voir la page réelle.
</p>
<p>
    Pour faire ça, il doit ajouter quelques lignes dans le fichier web.xml :
</p>
<p align="center">
	<img src="img/tomcat/image030.png" align="center"/>
</p>
<p align="center">
    Figure 24 : Login configuration
</p>
<p>
    Pour la configuration de la connexion, nous devons définir la méthode
    d'authentification à utiliser. Pour cet exemple, nous allons utilisez
    l'authentification de base prise en charge par Tomcat BASIC. Avec
    l'authentification de base, le serveur affichera une fenêtre contextuelle
    lorsque vous essayez d’accéder à une ressource sécurisée. Dans cette
    fenêtre, vous pouvez taper un nom d'utilisateur et mot de passe. Le nom
    d’utilisateur et le mot de passe sont ensuite transférés (en texte brut)
    vers la base de données intégrée de Tomcat mécanisme d'authentification,
    qui vérifiera vos informations d'identification par rapport à une base de
    données d'utilisateurs configurée (dans notre cas, le fichier
    tomcat-users.xml, tel que défini par MemoryRealm). Nous configurons
    également le domaine d'authentification nom, qui sera affiché dans la
    fenêtre de connexion.
</p>
<p align="center">
	<img src="img/tomcat/image031.jpg" align="center"/>
</p>
<p align="center">
    Figure 25 : BASIC Authentifaction login
</p>
<p>
    Maintenant, entrez le nom d'utilisateur et le mot de passe de l'utilisateur
    qui a le rôle requis « appuser ».
</p>
<p align="center">
	<img src="img/tomcat/image032.png" align="center"/>
</p>
<p align="center">
    Figure 26 : utilisateur avec le role appuser dans tomcat-users.xml
</p>
<p align="center">
	<img src="img/tomcat/image033.png" align="center"/>
</p>
<p align="center">
    Figure 27 : page d'accueil de app web application
</p>
<h3>
    <a name="_Toc17643834"></a>
    <a name="_Toc17643696"></a>
    <a name="_Toc17643304">Protection contre les attaques par force brute</a>
</h3>
<p>
    Les attaques par force brute sont généralement effectuées par d’autres
    programmes, qui testent un grand nombre de noms d’utilisateur et mots de
    passe pour tenter d'accéder au serveur. Ces programmes malveillants sont
    généralement écrits de sorte qu'ils essayent des mots connus pour être
    utilisés comme noms d’utilisateur et souvent comme mots de passe (noms,
    dates de naissance, noms suivis avec l'année de naissance, etc.). Bien
    qu'il existe des millions de combinaisons disponibles, est toujours
    possible - compte tenu du temps - de deviner les noms d'utilisateur et les
    mots de passe, en particulier sur les sites Web avec des millions
    d'utilisateurs. Une approche courante pour éviter cela consiste à
    verrouiller les utilisateurs pendant une période donnée.
</p>
<p>
    La solution Tomcat disponible est LockOutRealm, que nous avons déjà
    mentionné en tant que l’un des realms disponibles dans Figure 20.
    LockOutRealm est un simple CombinedRealm, qui encapsule tous les autres
    realms que nous pouvons utiliser. Il doit être configuré en tant que realm
    par défaut, en remplaçant le domaine que nous avons défini.
</p>
<p align="center">
	<img src="img/tomcat/image034.png" align="center"/>
</p>
<p align="center">
    Figure 28 : Configuration de LockOutRealm.
</p>
<p>
    o failureCount : définit le nombre de tentatives infructueuses qu'un
    utilisateur peut avoir avant d'être enfermé dehors. La valeur par défaut
    est 5.
</p>
<p>
    o LockoutTime : Définit combien de temps (en secondes) l’utilisateur sera
    verrouillé si le failureCount a été dépassé. La valeur par défaut est 300.
</p>
<h2>
    <a name="_Toc17643835"></a>
    <a name="_Toc17643697"></a>
    <a name="_Toc17643305">JDBC Realms</a>
</h2>
<p>
    La deuxième implémentation de realm fournie avec Tomcat que nous allons
    couvrir est un JDBC realm, qui est implémenté par la classe
    org.apache.catalina.realm.JDBCRealm. Cette classe ressemble beaucoup à la
    MemoryRealm décrit dans la section précédente, à l'exception du fait qu'il
    stocke sa collection d'utilisateurs. Une JDBCRealm stocke tous ses
    utilisateurs dans une base de données définie par l'utilisateur et
    compatible JDBC. Configurer un JDBC Realm implique plusieurs étapes, mais
    il est très simple à gérer une fois qu’il est configuré.
</p>
<p>
    Avant de commencer à configurer Tomcat pour l’utilisation de JDBCRealm,
    vous devez d’abord créer une base de données qui contiendra votre
    collection d'utilisateurs. Pour cet exemple, nous allons configurer une
    base de données MySQL.
</p>
<p>
    Pour stocker les informations utilisateur dans la base de données SQL et
    utiliser JDBCRealm avec les données, vous allez besoin d'avoir deux tables
    dans le schéma de base de données.
</p>
<p align="center">
	<img src="img/tomcat/image035.png" align="center"/>
</p>
<p align="center">
    Figure 29 : Table users
</p>
<p align="center">
	<img src="img/tomcat/image036.png" align="center"/>
</p>
<p align="center">
    Figure 30 : Table users_roles
</p>
<p>
    Maintenant que nous avons un ensemble d’utilisateurs stockés dans une base
    de données relationnelle (MySQL), configurons Tomcat pour utiliser le
    conteneur JDBC au lieu du MemoryRealm précédemment configuré.
</p>
<p align="center">
	<img src="img/tomcat/image037.jpg" align="center"/>
</p>
<p align="center">
    Figure 31 : JDBCRealm configuration
</p>
<p>
    Un JDBCRealm est maintenant configuré pour pouvoir sécuriser les ressources
    de vos applications Web. À ce stade, vous devrait pouvoir se connecter à
    l’application Web /app en sélectionnant dans la table des utilisateurs
    l’utilisateur qui a un rôle appuser. Le processus de connexion et les
    écrans du navigateur seront exactement les mêmes qu'avec les exemples de
    MemoryRealm de la section précédente.
</p>
<h2>
    <a name="_Toc17643836"></a>
    <a name="_Toc17643698"></a>
    <a name="_Toc17643306">DataSource Realm</a>
</h2>
<p>
    DataSourceRealm est la version mise à niveau de JDBCRealm, qui permet la
    configuration de la base de données connexion en tant que ressource JNDI.
    La configuration JNDI offre plus de flexibilité et une gestion plus facile
    - soit par programme (à l'aide de l'API JNDI), soit via un accès JMX.
    Similaire à UserDatabaseRealm, qui est un Version configurable JNDI de
    MemoryRealm, la configuration de DataSourceRealm est très similaire à
    JDBCRealm configuration, avec l’ajout de la configuration des ressources
    JNDI. La fonctionnalité proposée est la même que celle de JDBCRealm, avec
    des tables et des colonnes de base de données définies de la même manière.
    Configurer DataSourceRealm, il vous suffit de configurer la ressource de
    source de données JNDI et de l'utiliser avec le domaine de sécurité
    configuré de la manière habituelle.
</p>
<p align="center">
	<img src="img/tomcat/image038.png" align="center"/>
</p>
<p align="center">
    Figure 32 : Configuration Datasource – 1
</p>
<p align="center">
	<img src="img/tomcat/image039.png" align="center"/>
</p>
<p align="center">
    Figure 33 : Configuration Datasource – 2
</p>`;