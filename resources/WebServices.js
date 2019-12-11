var webService = `<h1 id="title1">
    Introduction
</h1>
<h2>
    <a name="_Toc19719660">Qu'est ce qu'un service WEB ?</a>
</h2>
<p>
    Il s'agit d'une technologie permettant à des applications de dialoguer à
    distance via Internet, et ceci indépendamment des plates-formes et des
    langages sur lesquelles elles reposent. Pour ce faire, les services Web
    s'appuient sur un ensemble de protocoles Internet très répandus (XML,
    HTTP), afin de communiquer. Cette communication est basée sur le principe
    de demandes et réponses, effectuées avec des messages XML.
</p>
<p>
    Les services web sont décrits par des documents WSDL (Web Service
    Description Language), qui précisent les méthodes pouvant être invoquées,
    leurs signatures et les points d'accès du service (URL, port.). Les
    services Web sont accessibles via SOAP, la requête et les réponses sont des
    messages XML transportés sur HTTP.
</p>
<p>
    Il existe probablement autant de définitions des Web Services que
    d'entreprises qui les créent, mais presque toutes ces définitions ont ceci
    en commun :
</p>
<p>
    · Les Web Services proposent aux utilisateurs du Web des fonctionnalités
    pratiques grâce à un protocole Web standard (dans la plupart des cas, le
    protocole utilisé est SOAP)
</p>
<p>
    · Les Web Services offrent un moyen de décrire leurs interfaces
    suffisamment en détail pour permettre à un utilisateur de créer une
    application cliente capable de converser avec eux cette description est
    généralement fournie dans un document XML nommé WSDL (Web Services
    Description Language)
</p>
<p>
    · Les Web Services sont inscrits afin que les utilisateurs potentiels
    puissent les trouver facilement. Ceci est possible grâce à UDDI (Universal
    Discovery Description and Integration).
</p>
<h2>
    <a name="_Toc19719661">Rôles d'interaction dans la SOA</a>
</h2>
<p>
    Les principaux éléments constitutifs d’une architecture SOA sont au nombre
    de trois et sont déterminés en fonction de trois rôles principaux que
    peuvent jouer ces modules d’architecture. Il s'agit du fournisseur de
    services, du registre de services et du demandeur de service (client). Les
    fournisseurs sont des agents logiciels qui fournissent le service. Les
    fournisseurs sont responsables de la publication d'une description du ou
    des services qu'ils fournissent dans un registre de services. Les clients
    sont des agents logiciels qui demandent l'exécution d'un service. Les
    agents peuvent être simultanément clients et fournisseurs de services. Les
    clients doivent pouvoir trouver la ou les descriptions des services dont
    ils ont besoin et être en mesure de les lier.
</p>
<p>
    1. Web services provider
</p>
<p>
    Le fournisseur de services Web est responsable de la publication des
    services Web qu'il fournit dans un registre de services hébergé par une
    agence de découverte de services. Cela implique de décrire les informations
    commerciales, de service et techniques du service Web et d'enregistrer ces
    informations dans le registre des services Web dans le format prescrit par
    l'agence de découverte.
</p>
<p>
    2. Web services requestor
</p>
<p>
    Le demandeur de services Web recherche dans le registre de services les
    services Web souhaités. Cela signifie en fait que la description de
    services Web doit être découverte dans un registre fourni par une agence de
    découverte et que les informations de la description sont utilisées pour se
    lier au service. Il existe deux types de demandeurs de services Web. Le
    rôle de demandeur peut être joué par un navigateur piloté par un
    utilisateur final ou par un autre service Web dans le cadre d'une
    application sans interface utilisateur.
</p>
<p>
    3. Web services registry
</p>
<p>
    Le dernier rôle important que l’on puisse distinguer dans l’architecture
    des services Web est celui du registre des services Web, qui est un
    répertoire de recherche dans lequel les descriptions de service peuvent
    être publiées et consultées. Les demandeurs de service trouvent les
    descriptions de service dans le registre et obtiennent des informations de
    liaison pour les services. Ces informations sont suffisantes pour que le
    demandeur de service puisse contacter ou se lier au fournisseur de services
    et utiliser ainsi les services qu'il fournit.
</p>
<p>
    L'agence de découverte de services Web est chargée de fournir
    l'infrastructure requise pour permettre les trois opérations de
    l'architecture de services Web, comme décrit dans la section précédente :
    publication des services Web par le fournisseur de services Web, recherche
    de services Web par des demandeurs de services Web et appel des services
    Web.
</p>
<h2>
    <a name="_Toc19719662">Opérations dans la SOA</a>
</h2>
<p>
    Pour qu'une application tire parti des interactions de services Web entre
    les trois rôles de la SOA, trois opérations principales doivent avoir lieu.
    Il s’agit de la publication des descriptions de service, de la recherche
    des descriptions de service et de la liaison ou de l’appel de services en
    fonction de leur description de service. Ces trois opérations de base
    peuvent être effectuées séparément ou de manière itérative.
</p>
<p>
    Une vue logique de la SOA est donnée à la Figure 1. Cette figure illustre
    la relation entre les rôles et les opérations SOA. Premièrement, le
    fournisseur de services Web publie son ou ses services Web avec l’agence de
    découverte. Ensuite, le client de services Web recherche les services Web
    souhaités à l'aide du registre de l'agence de découverte. Enfin, le client
    de services Web, à l'aide des informations obtenues de l'agence de
    découverte, appelle (se lie à) les services Web fournis par le fournisseur
    de services Web.
</p>
<p align="center">
    <img
        width="394"
        height="224"
        src="img/webServices/image006.png"
    />
</p>
<p align="center">
    <a name="_Ref19627913">Figure </a>
    1 : Web service roles et operations
</p>
<p>
    1. Publish operation
</p>
<p>
    La publication d'un service Web afin que d'autres utilisateurs ou
    applications puissent le trouver consiste en deux opérations d'égale
    importance. La première opération décrit le service Web lui-même ; l'autre
    est l'enregistrement réel du service Web. La première exigence pour la
    publication de services Web avec le registre de services consiste pour un
    fournisseur de services à les décrire correctement dans WSDL. On distingue
    trois catégories d’informations de base nécessaires à la description
    correcte d’un service Web :
</p>
<p>
    · Informations commerciales : informations relatives au fournisseur de
    services Web ou à l'implémenteur du service ;
</p>
<p>
    · Informations de service : informations sur la nature du service Web ;
</p>
<p>
    · Informations techniques : informations sur les détails de la mise en
    œuvre et les méthodes d'appel du service Web.
</p>
<p>
    La prochaine étape de la publication d'un service Web est l'enregistrement.
    L'enregistrement consiste à stocker les trois catégories de base
    d'informations descriptives relatives à un service dans le registre de
    services Web. Pour que les demandeurs de services Web puissent trouver un
    service Web, ces informations de description de service doivent être
    publiées avec au moins une agence de reconnaissance.
</p>
<p>
    2. Find operation
</p>
<p>
    De la même manière que la publication, la recherche de services Web est
    également une opération en deux temps. Pour trouver les services Web
    souhaités, vous devez d'abord rechercher les services dans le registre de
    l'agence de détection, puis sélectionner le ou les services Web souhaités
    dans les résultats de la recherche.
</p>
<p>
    La découverte de services Web implique d'interroger le registre de l'agence
    de découverte pour des services Web correspondant aux besoins d'un
    demandeur de services Web. Une requête comprend des critères de recherche
    tels que le type de service, la fourchette de prix préférée, les produits
    associés à ce service, les catégories de taxonomies de sociétés et de
    produits auxquelles ce service Web est associé, ainsi que d'autres
    caractéristiques de service technique. Une requête est exécutée sur les
    informations de service Web du registre entrées par le fournisseur de
    services Web. L'opération de recherche peut être impliquée dans deux
    instances différentes par le demandeur. L’opération find peut être
    spécifiée statiquement au moment de la conception pour extraire la
    description de l’interface d’un service pour le développement du programme
    ou dynamiquement (au moment de l’exécution) pour extraire la liaison d’un
    service et la description de l’emplacement pour l’appel.
</p>
<p>
    3. Bind operation
</p>
<p>
    L’opération finale dans l’architecture des services Web et peut-être la
    plus importante est l’appel effectif des services Web. Au cours de
    l'opération de liaison, le demandeur de service appelle ou initie une
    interaction au moment de l'exécution en utilisant les détails de la liaison
    dans la description du service pour localiser et contracter avec le
    service. Les informations techniques entrées dans le registre par le
    fournisseur de services Web sont utilisées ici. Deux possibilités
    différentes existent pour cette invocation. La première possibilité est
    l'invocation directe du service Web par le demandeur de services Web à
    l'aide des informations techniques incluses dans la description du service.
    La deuxième possibilité est la médiation par l'agence de découverte lors de
    l'appel du service Web. Dans ce cas, toutes les communications entre le
    demandeur de services Web et le fournisseur de services Web passent par le
    registre de services Web de l'agence de détection.
</p>
<h1 id="title2">
    SOAP
</h1>
<h2>
    <a name="_Toc19719664">Qu'est ce que SOAP</a>
</h2>
<p>
    SOAP (Object Access Protocol) est un protocole de RPC (Remote Procedure
    Call) permettant d'invoquer des méthodes d'objets distants. Il est
    comparable à DCOM ou CORBA mais contrairement à eux, il s'appuie sur des
    standards très connus. Il utilise XML pour définir les fonctions et les
    définitions disponibles. Il prend en charge divers protocoles de transport,
    tels que HTTP et SMTP, ainsi que différents formats comme MIME. Ces
    derniers sont très répandus sur de multiples plates-formes, ce qui donne à
    SOAP une grande portabilité et interopérabilité.
</p>
<p>
    SOAP est une spécification non propriétaire. Il n'est pas lié à un
    protocole particulier. Il n'est pas non plus lié à un système
    d'exploitation ni à un langage de programmation.
</p>
<p>
    SOAP étant un protocole d'échange d'informations entre diverses machines
    sur un réseau, elle nécessite un format pour transporter les données. Pour
    cela elle utilise des messages SOAP qui sont en fait des documents XML.
</p>
<h2>
    <a name="_Toc19719665">La structure d'un message SOAP</a>
</h2>
<p>
    SOAP définit un format pour l'envoi des messages. Les messages SOAP sont
    structuré en un document XML et comporte :
</p>
<ul>
    <li>
        Une envelope
    </li>
    <li>
        Un corps
    </li>
</ul>
<p align="center">
    <img
        width="197"
        height="281"
        src="img/webServices/image007.png"
    />
</p>
<p align="center">
    Figure 2 : SOAP Architecture
</p>
<p>
    L'en-tête contient diverses informations (autorisations et transactions par
    exemple). Le corps transporte les informations sur l'appel et la réponse
    ainsi que sur les erreurs et les attachements éventuels.
</p>
<p>
    Voici un exemple de message SOAP :
</p>
<p align="center">
    <img
        width="506"
        height="242"
        src="img/webServices/image009.jpg"
    />
</p>
<h1 id="title3">
    WDSL
</h1>
<h2>
    <a name="_Toc19719667">Qu'est-ce que WSDL ?</a>
</h2>
<p>
    WSDL est un fichier XML qui indique à l'application cliente ce que fait le
    service Web. Il s'appelle le langage WSDL (Web Services Description
    Language).
</p>
<p>
    Dans ce tutoriel, nous allons nous concentrer sur le dernier point qui
    constitue la partie la plus importante des services Web, à savoir le
    langage de description WSDL ou Web.
</p>
<p>
    Le fichier WSDL est utilisé pour décrire en résumé ce que fait le service
    Web et donne au client toutes les informations nécessaires pour se
    connecter au service Web et utiliser toutes les fonctionnalités fournies
    par le service Web.
</p>
<h2>
    <a name="_Toc19719668">Structure d'un document WSDL</a>
</h2>
<p>
    Un document WSDL est utilisé pour décrire un service Web. Cette description
    est nécessaire pour que les applications client puissent comprendre ce que
    fait réellement le service Web.
</p>
<p>
    · Le fichier WSDL contient l’emplacement du service Web et
</p>
<p>
    · Les méthodes exposées par le service Web.
</p>
<p>
    Le fichier WSDL lui-même peut sembler très complexe à tout utilisateur,
    mais il contient toutes les informations nécessaires à toute application
    cliente pour utiliser le service Web approprié.
</p>
<p>
    Vous trouverez ci-dessous la structure générale d'un fichier WSDL.
</p>
<ul>
    <li>
        Definition
    </li>
    <li>
        TargetNamespace
    </li>
    <li>
        DataTypes
    </li>
    <li>
        Messages
    </li>
    <li>
        Porttype
    </li>
    <li>
        Bindings
    </li>
    <li>
        Service
    </li>
</ul>
<p>
    Un élément clé à noter ici est que la définition des messages, qui est
    transmise par le protocole SOAP, est en réalité définie dans le document
    WSDL.
</p>
<p>
    Le document WSDL indique en réalité à une application cliente quels sont
    les types de messages SOAP qui sont envoyés et acceptés par le service Web.
</p>
<p>
    En d'autres termes, le WSDL est semblable à une carte postale qui a
    l'adresse d'un emplacement particulier. L'adresse fournit les coordonnées
    de la personne qui a livré la carte postale. Par conséquent, de la même
    manière, le fichier WSDL est la carte postale, qui porte l'adresse du
    service Web qui peut fournir toutes les fonctionnalités souhaitées par le
    client.
</p>
<p>
    &lt;!-- WSDL definition structure --&gt;
</p>
<p>
    &lt;definitions
</p>
<p>
    name="mql"
</p>
<p>
    targetNamespace=http://example.org/math/
</p>
<p>
    xmlns=http://schemas.xmlsoap.org/wsdl/&gt;
</p>
<p>
    &lt;!-- abstract definitions --&gt;
</p>
<p>
    &lt;types&gt; ...
</p>
<p>
    &lt;message&gt; ...
</p>
<p>
    &lt;portType&gt; ...
</p>
<p>
    &lt;!-- concrete definitions --&gt;
</p>
<p>
    &lt;binding&gt; ...
</p>
<p>
    &lt;service&gt; ...
</p>
<p>
    &lt;/definition&gt;
</p>
<h2>
    <a name="_Toc19719669">Eléments WSDL</a>
</h2>
<p>
    Le fichier WSDL contient les parties principales suivantes
</p>
<p>
    1. <strong>La balise &lt;types&gt;</strong> est utilisée pour définir tous
    les types de données complexes, qui seront utilisés dans le message échangé
    entre l'application cliente et le service Web. Il s'agit d'un aspect
    important de l'application client car, si le service Web fonctionne avec un
    type de données complexe, l'application client doit savoir comment traiter
    le type de données complexe. Les types de données tels que float, nombres
    et chaînes sont tous des types de données simples, mais il peut exister des
    types de données structurés pouvant être fournis par le service Web.
</p>
<p>
    Par exemple, il pourrait exister un type de données appelé EmployeeDataType
    pouvant comporter 2 éléments appelés "EmployeeName" de type chaîne et
    "EmployeeID" de type numéro ou entier. Ensemble, ils forment une structure
    de données qui devient alors un type de données complexe.
</p>
<p>
    2. <strong>La balise &lt;messages&gt;</strong> est utilisée pour définir le
    message qui est échangé entre l'application cliente et le serveur Web. Ces
    messages expliqueront les opérations d'entrée et de sortie pouvant être
    effectuées par le service Web. Un exemple de message peut être un message
    qui accepte l'identificateur d'employé d'un employé et le message de sortie
    peut être le nom de l'employé en fonction de l'identificateur EmpoyeeID
    fourni.
</p>
<p>
    3. <strong>La balise &lt;portType&gt;</strong> permet d’encapsuler chaque
    message d’entrée et de sortie en une seule opération logique. Il pourrait
    donc y avoir une opération appelée "GetEmployee" qui combine le message
    d'entrée d'acceptation de l'identifiant d'employé à partir d'une
    application client, puis l'envoi du nom d'employé en tant que message de
    sortie.
</p>
<p>
    4. <strong>La balise &lt;binding&gt;</strong> est utilisée pour lier
    l'opération au type de port particulier. Ainsi, lorsque l'application
    cliente appelle le type de port approprié, elle pourra alors accéder aux
    opérations liées à ce type de port. Les types de port sont comme des
    interfaces. Ainsi, si une application cliente doit utiliser un service Web,
    elle doit également utiliser les informations de liaison pour pouvoir se
    connecter à l'interface fournie par ce service Web.
</p>
<p>
    5. <strong>La balise &lt;service&gt;</strong> est un nom donné au service
    Web lui-même. Initialement, lorsqu'une application client appelle le
    service Web, elle appelle le nom du service Web. Par exemple, un service
    Web peut être situé à une adresse telle que http:
    //localhost/mql/wdsl.asmx. L’URL définie comme http: //:
    localhost/mql/wdsl.asmx sur le tag de service indiquera à l’application
    client qu’un service Web est disponible à cet emplacement.
</p>
<h3>
    <a name="_Toc19719670">Partie de message WSDL</a>
</h3>
<p>
    Le WSDL consiste en une section appelée "messages" qui est désignée par
    l'élément &lt;message&gt;.
</p>
<p>
    Cet élément est essentiellement utilisé pour décrire les données échangées
    entre le service Web et l'application client.
</p>
<p>
    Chaque service Web aura toujours 2 types de messages,
</p>
<p>
    · L'une concerne l'entrée du service Web et l'autre, la sortie du service
    Web.
</p>
<p>
    · L'entrée sert à décrire les paramètres acceptés par le service Web. Il
    s'agit d'un aspect important de l'application client, car elle connaît les
    valeurs à envoyer en tant que paramètres au service Web.
</p>
<p>
    · L'autre type de message est le message de sortie, qui indique les
    résultats fournis par le service Web.
</p>
<p>
    Chaque message, à son tour, aura un élément &lt;part&gt; utilisé pour
    décrire le paramètre utilisé par le message d'entrée et de sortie.
</p>
<p>
    Vous trouverez ci-dessous un exemple simple de ce à quoi ressemble un
    message pour un service Web. La fonctionnalité du service Web consiste à
    fournir le nom d'un "didacticiel" une fois qu'un "ID de didacticiel" est
    soumis en tant que paramètre au service Web.
</p>
<p align="center">
    <img
        width="576"
        height="232"
        src="img/webServices/image011.jpg"
    />
</p>
<p align="center">
    Figure 3 : Input &amp; Output messages
</p>
<p>
    Comme nous pouvons le constater, le service Web contient 2 messages, l’un
    pour l’entrée et l’autre pour la sortie.
</p>
<p>
    Le message d'entrée est appelé TutorialNameRequest, qui possède un
    paramètre appelé TutorialID. Ce paramètre est du type numéro spécifié par
    le type xsd: number
</p>
<p>
    Le message de sortie est appelé TutorialNameResponse, qui possède un
    paramètre appelé TutorialName. Ce paramètre est du type chaîne spécifié par
    le type xsd: string
</p>
<h3>
    <a name="_Toc19719671">Port Type Binding</a>
</h3>
<p>
    Les ports sont utilisés dans WSDL pour définir une opération complète
    proposée par le service Web.
</p>
<p>
    Dans la rubrique précédente, nous avons vu que notre service Web
    fournissait 2 messages, l'un pour l'entrée appelée "TutorialNameRequest" et
    l'autre pour la sortie appelée "TutorialNameResponse". Ensemble, le
    formulaire de message d'entrée et de sortie s'appelle une opération
    complète.
</p>
<p>
    WSDL fournit un élément appelé &lt;portType&gt; qui permet de définir les
    opérations fournies par le service Web.
</p>
<p align="center">
    <img
        width="554"
        height="326"
        src="img/webServices/image012.png"
    />
</p>
<p align="center">
    Figure 4 : port type
</p>
<p>
    Donc, dans notre exemple ci-dessus, nous pouvons noter ce qui suit:
</p>
<p>
    · Le nom du type de port qui encapsule l'opération est donné sous la forme
    "Tutorial_PortType".
</p>
<p>
    · L'opération elle-même reçoit le nom de "Tutorial". Donc, notre opération
    fournit essentiellement un TutorialName si le TutorialID est donné en tant
    que paramètre d'entrée.
</p>
<p>
    · Viennent ensuite nos 2 messages, un pour l’entrée et l’autre pour la
    sortie qui forme notre opération
</p>
<p>
    En plus de l'élément &lt;portType&gt;, il existe également l'élément
    &lt;binding&gt; utilisé pour définir le mode de transfert des messages.
</p>
<p align="center">
    <img
        width="576"
        height="211"
        src="img/webServices/image014.jpg"
    />
</p>
<p align="center">
    Figure 5 : binding element
</p>
<p>
    L’exemple ci-dessus montre que la liaison consiste en un nom de liaison
    qui, dans notre cas, est appelé "TutorialSoapBinding". La liaison, en
    termes simples, désigne les informations que l'application client utilise
    pour se lier réellement au service Web. Une fois qu’il est lié au service
    Web, il peut appeler les différentes opérations exposées par le service
    Web.
</p>
<p>
    La couche de transport est donnée sous la forme http: //, ce qui signifie
    que les messages seront transférés via le protocole HTTP.
</p>
<h2>
    <a name="_Toc19719672">Hello World Example</a>
</h2>
<h3>
    <a name="_Toc19719673">Web Service Endpoint Interface</a>
</h3>
<p>
    <img
        width="408"
        height="204"
        src="img/webServices/image015.png"
    />
</p>
<p>
    Dans le développement de JAX-WS, la conversion de «style RPC» en «style de
    document» est très simple. Il suffit de changer l’option de style
    @SOAPBinding.
</p>
<h3>
    <a name="_Toc19719674">Web Service Endpoint Implementation</a>
</h3>
<p>
    <img
        width="406"
        height="206"
        src="img/webServices/image016.png"
    />
</p>
<h3>
    <a name="_Toc19719675">Endpoint Publisher.</a>
</h3>
<p>
    <img
        width="576"
        height="174"
        src="img/webServices/image017.png"
    />
</p>
<h3>
    <a name="_Toc19719676">Done</a>
</h3>
<p>
    Terminé, publiez-le et testez-le via l’URL : http: // localhost: 9999 / ws
    / hello? Wsdl.
</p>
<p>
    <img
        width="576"
        height="373"
        src="img/webServices/image019.jpg"
    />
</p>
<h3>
    <a name="_Toc19719677">Web Service Client</a>
</h3>
<p>
    <img
        width="576"
        height="355"
        src="img/webServices/image020.png"
    />
</p>
<p>
    Sortie:
</p>
<p>
    <img
        width="220"
        height="58"
        src="img/webServices/image021.png"
    />
</p>
<h1 id="title4">
    UDDI
</h1>
<p>
    UDDI est une norme basée sur XML pour la description, la publication et la
    recherche de services Web.
</p>
<p>
    · UDDI signifie Universal Description, Discovery et Integration.
</p>
<p>
    · UDDI est une spécification pour un registre distribué de services Web.
</p>
<p>
    · UDDI est un framework ouvert indépendant de la plate-forme.
</p>
<p>
    · UDDI peut communiquer via les protocoles SOAP, CORBA et Java RMI.
</p>
<p>
    · UDDI utilise le langage WSDL (Web Service Definition Language) pour
    décrire les interfaces avec les services Web.
</p>
<p>
    · UDDI est considéré avec SOAP et WSDL comme l’une des trois normes
    fondamentales des services Web.
</p>
<p>
    · UDDI est une initiative de l'industrie ouverte, permettant aux
    entreprises de se découvrir et de définir leurs interactions sur Internet.
</p>
<p>
    UDDI a deux sections -
</p>
<p>
    · Un registre de toutes les métadonnées du service Web, y compris un
    pointeur sur la description WSDL d'un service.
</p>
<p>
    · Un ensemble de définitions de type de port WSDL pour manipuler et
    rechercher ce registre.
</p>
<h2>
    <a name="_Toc19719679">UDDI Éléments</a>
</h2>
<p>
    Une entreprise ou une entreprise peut enregistrer trois types
    d'informations dans un registre UDDI. Cette information est contenue dans
    trois éléments de UDDI.
</p>
<p>
    Ces trois éléments sont -
</p>
<p>
    · Pages blanches,
</p>
<p>
    · Pages Jaunes, et
</p>
<ul>
    <li>
        Pages vertes.
    </li>
</ul>
<h3>
    <a name="_Toc19719680">Pages blanches</a>
</h3>
<p>
    Les pages blanches contiennent -
</p>
<p>
    · Informations de base sur la société et son activité.
</p>
<p>
    · Informations de contact de base comprenant le nom de l'entreprise,
    l'adresse, le numéro de téléphone du contact, etc.
</p>
<p>
    · Identificateurs uniques pour les identifiants de taxe d'entreprise. Ces
    informations permettent aux autres utilisateurs de découvrir votre service
    Web en fonction de votre identification d'entreprise.
</p>
<h3>
    <a name="_Toc19719681">Pages Jaunes</a>
</h3>
<p>
    · Les pages jaunes contiennent plus de détails sur la société. Elles
    incluent des descriptions du type de capacités électroniques que la société
    peut offrir à quiconque veut faire affaire avec elle.
</p>
<p>
    · Les pages jaunes utilisent des schémas de catégorisation industrielle,
    des codes d’industrie, des codes de produit, des codes d’identité
    commerciale, etc., communément acceptés, afin de permettre aux entreprises
    de rechercher plus facilement dans les listes et de trouver exactement ce
    qu’elles veulent.
</p>
<h3>
    <a name="_Toc19719682">Pages vertes</a>
</h3>
<p>
    Les pages vertes contiennent des informations techniques sur un service
    Web. Une page verte permet à une personne de se connecter à un service Web
    après sa découverte. Il comprend -
</p>
<p>
    · Les différentes interfaces
</p>
<p>
    · Les emplacements d'URL
</p>
<p>
    · Informations de découverte et données similaires requises pour rechercher
    et exécuter le service Web.
</p>
<h2>
    <a name="_Toc19719683">Modèle de données</a>
</h2>
<p>
    UDDI inclut un schéma XML décrivant les structures de données suivantes :
</p>
<ul>
    <li>
        businessEntity
    </li>
    <li>
        businessService
    </li>
    <li>
        bindingTemplate
    </li>
    <li>
        tModel
    </li>
    <li>
        publisherAssertion
    </li>
</ul>
<h3>
    <a name="_Toc19719684">businessEntity Data Structure</a>
</h3>
<p>
    La structure d'entité commerciale représente le fournisseur de services
    Web. Dans le registre UDDI, cette structure contient des informations sur
    la société elle-même, y compris des informations de contact, des catégories
    de secteur, des identificateurs d'entreprise et une liste des services
    fournis.
</p>
<p>
    Voici un exemple d’entrée de registre UDDI d’une entreprise fictive :
</p>
<p>
    <img
        width="571"
        height="554"
        src="img/webServices/image022.png"
    />
</p>
<h3>
    <a name="_Toc19719685">businessService Data Structure</a>
</h3>
<p>
    La structure de services métier représente un service Web individuel fourni
    par l'entité commerciale. Sa description comprend des informations sur la
    manière de se lier au service Web, son type et ses catégories taxonomiques.
</p>
<p>
    Voici un exemple de structure de service métier pour le service Web Hello
    World.
</p>
<p>
    <img
        width="556"
        height="174"
        src="img/webServices/image023.png"
    />
    <br/>
    <br/>
</p>
<h3>
    <a name="_Toc19719686">bindingTemplate Data Structure</a>
</h3>
<p>
    Les modèles de liaison sont les descriptions techniques des services Web
    représentés par la structure de services métier. Un seul service métier
    peut avoir plusieurs modèles de liaison. Le modèle de liaison représente la
    mise en œuvre réelle du service Web.
</p>
<p>
    Voici un exemple de modèle de liaison pour Hello World.
</p>
<p>
    <img
        width="576"
        height="384"
        src="img/webServices/image024.png"
    />
</p>
<p>
    Comme un service commercial peut avoir plusieurs modèles de liaison, le
    service peut spécifier différentes implémentations du même service, chacune
    liée à un ensemble de protocoles différent ou à une adresse réseau
    différente.
</p>
<h3>
    <a name="_Toc19719687">tModel Data Structure</a>
</h3>
<p>
    Le tModel est le dernier type de données principal, mais potentiellement le
    plus difficile à saisir. Le tModel est synonyme de modèle technique.
</p>
<p>
    Le tModel est un moyen de décrire les différentes structures d'entreprise,
    de service et de modèle stockées dans le registre UDDI. Tout concept
    abstrait peut-être enregistré dans l'UDDI en tant que tModel. Par exemple,
    si vous définissez un nouveau type de port WSDL, vous pouvez définir un
    tModel qui représente ce type de port dans l'UDDI. Ensuite, vous pouvez
    spécifier qu'un service métier donné implémente ce type de port en
    associant le tModel à l'un des modèles de liaison de ce service métier.
</p>
<p>
    Voici un exemple de tModel représentant le type de port de l'interface
    Hello World.
</p>
<p>
    <img
        width="538"
        height="252"
        src="img/webServices/image025.png"
    />
</p>
<h3>
    <a name="_Toc19719688">publisherAssertion Data Structure</a>
</h3>
<p>
    Il s'agit d'une structure de relation associant deux ou plusieurs
    structures businessEntity selon un type de relation spécifique, tel qu'une
    filiale ou un service.
</p>
<p>
    La structure publisherAssertion est composée des trois éléments suivants :
    fromKey (le premier businessKey), toKey (le deuxième businessKey) et
    keyedReference.
</p>
<p>
    KeyedReference désigne le type de relation affirmé en termes de pair
    keyName keyValue au sein d'un tModel, référencée de manière unique par une
    tModelKey.
</p>
<p>
    <img
        width="533"
        height="150"
        src="img/webServices/image026.png"
    />
</p>
<h1 id="title5">
    RESTful
</h1>
<h2>
    <a name="_Toc19719690">Qu'est-ce que l'architecture REST ?</a>
</h2>
<p>
    REST est synonyme de Representational State Transfer. REST est une
    architecture basée sur les normes Web et utilise le protocole HTTP. Il
    s'articule autour d'une ressource où chaque composant est une ressource et
    où une interface commune accède à une ressource à l'aide de méthodes
    standard HTTP. REST a été introduit par Roy Fielding en 2000.
</p>
<p>
    Dans l'architecture REST, un serveur REST fournit simplement un accès aux
    ressources et le client REST accède et modifie les ressources. Ici, chaque
    ressource est identifiée par des URI / ID globaux. REST utilise diverses
    représentations pour représenter une ressource telle que text, JSON, XML.
    JSON est le plus populaire.
</p>
<p>
    <strong>Méthodes HTTP</strong>
</p>
<p>
    Les quatre méthodes HTTP suivantes sont couramment utilisées dans
    l'architecture basée sur REST.
</p>
<p>
    GET - Fournit un accès en lecture seule à une ressource.
</p>
<p>
    POST - Utilisé pour créer une nouvelle ressource.
</p>
<p>
    DELETE - Utilisé pour supprimer une ressource.
</p>
<p>
    PUT - Utilisé pour mettre à jour une ressource existante ou créer une
    nouvelle ressource.
</p>
<h2>
    <a name="_Toc19719691">Introduction aux services Web RESTFul</a>
</h2>
<p>
    Les services Web basés sur l'architecture REST sont appelés services Web
    RESTful. Ces services Web utilisent des méthodes HTTP pour implémenter le
    concept d'architecture REST. Un service Web RESTful définit généralement un
    URI, un identifiant de ressource uniforme est un service, fournit une
    représentation de ressource telle que JSON et un ensemble de méthodes HTTP.
</p>
<p align="center">
    <img
        width="576"
        height="140"
        src="img/webServices/image028.jpg"
    />
</p>
<h2>
    <a name="_Toc19719692">Création d'un projet Java</a>
</h2>
<p>
    La première étape consiste à créer un projet Web dynamique à l'aide d'IDE
    Eclipse. Suivez l’option Fichier → Nouveau → Projet et sélectionnez
    l’assistant Projet Web dynamique dans la liste des assistants. Maintenant,
    nommez votre projet en utilisant la fenêtre de l’assistant.
</p>
<h3>
    <a name="_Toc19719693">Ajout des bibliothèques requises</a>
</h3>
<p>
    Dans un deuxième temps, ajoutons Jersey Framework et ses dépendances
    (bibliothèques) à notre projet. Copiez tous les fichiers JAR des
    répertoires suivants du dossier zip jersey de téléchargement dans le
    répertoire WEB-INF / lib du projet.
</p>
<ul type="disc">
    <li>
        \jaxrs-ri-2.17\jaxrs-ri\api
    </li>
    <li>
        \jaxrs-ri-2.17\jaxrs-ri\ext
    </li>
    <li>
        \jaxrs-ri-2.17\jaxrs-ri\lib
    </li>
</ul>
<p>
    Maintenant, cliquez avec le bouton droit de la souris sur le nom de votre
    projet UserManagement, puis suivez l'option disponible dans le menu
    contextuel - Chemin de construction → Configurer le chemin de construction
    pour afficher la fenêtre Chemin de construction Java.
</p>
<p>
    Utilisez maintenant le bouton Ajouter des fichiers JAR disponible sous
    l’onglet Bibliothèques pour ajouter les fichiers JAR présents dans le
    répertoire WEBINF / lib.
</p>
<h3>
    <a name="_Toc19719694">Création des fichiers source</a>
</h3>
<p>
    Créons maintenant les fichiers source réels dans le projet. Nous devons
    d’abord créer un package appeler org.mql. Pour ce faire, cliquez avec le
    bouton droit de la souris sur src dans la section de l'explorateur de
    paquets et suivez l'option - Nouveau → Package.
</p>
<p>
    Nous allons ensuite créer les fichiers UserService.java, User.java,
    UserDao.java sous le package com.mql.
</p>
<p>
    <strong>User.java</strong>
</p>
<p>
    <img
        width="467"
        height="376"
        src="img/webServices/image029.png"
    />
</p>
<p>
    <strong>UserDao.java</strong>
</p>
<p>
    <img
        width="471"
        height="394"
        src="img/webServices/image030.png"
    />
</p>
<p>
    <strong>
        UserService.java
        <br/>
    </strong>
    <img
        width="333"
        height="208"
        src="img/webServices/image031.png"
    />
    <strong></strong>
</p>
<h3>
    <a name="_Toc19719695">Création du fichier de configuration Web.xml</a>
</h3>
<p>
    Vous devez créer un fichier de configuration Web xml qui est un fichier XML
    et est utilisé pour spécifier le servlet d'infrastructure Jersey pour notre
    application.
</p>
<p>
    <img
        width="576"
        height="222"
        src="img/webServices/image033.jpg"
    />
</p>`;