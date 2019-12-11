var loggin = `<h1 id="title1">
    Introduction
</h1>
<h2>
    <a name="_Toc18601494">Qu'est-ce que la journalisation ?</a>
</h2>
<p>
    La journalisation consiste à garder les traces sur un support sûr des
    évènements survenus dans un système ou dans une application.
</p>
<p>
    Un ou plusieurs fichiers de log au format prédéfini sont générés en cours
    d'exécution et conservent des messages informant sur la date et l'heure de
    l'évènement, la nature de l'évènement et sa gravité par un code ou une
    description sémantique, éventuellement d'autres informations : utilisateur,
    classe, etc.
</p>
<h2>
    <a name="_Toc18601495">Pourquoi créer un fichier de log ?</a>
</h2>
<p>
    Les journaux peuvent utilement être réutilisés par :
</p>
<p>
    o Un administrateur, afin de produire des statistiques sur l'utilisation
    d'un système (par exemple les logs du serveur Web Apache) ;
</p>
<p>
    o Un développeur, afin de détecter des défaillances et de corriger les
    bogues qui en sont responsables. Il est plus facile de repérer la source
    d'une défaillance si le journal est dense en informations (fonctions
    appelées, valeurs des paramètres passés…) ;
</p>
<p>
    o Un développeur, pour éviter de polluer son code avec des println() ;
</p>
<p>
    o Un utilisateur, qui peut utiliser un journal afin de revenir sur un crash
    et refaire les opérations qui auraient été perdues (transactions).
</p>
<h1 id="title2">
    L'API Logging de Java
</h1>
<p>
    L'API utilisée : « java.util.logging » est fournie par défaut dans le JDK
    1.4.
</p>
<p>
    D'usage simple, elle permet de journaliser des évènements dans un fichier
    au format texte ou XML. Différents niveaux de sévérité sont applicables aux
    messages journalisés. Et la fonction standard se décline en une myriade de
    fonctions spécifiques.
</p>
<p>
    Cette API doit être appelée dans toute classe qui nécessite de journaliser
    des informations :
</p>
<p>
    import java.util.logging.*;
</p>
<h2>
    <a name="_Toc18601497">Création d'un journal</a>
</h2>
<p>
    Pour utiliser un journal dans une classe, il faut :
</p>
<p>
    o Créer un attribut statique et protégé faisant référence au journal ;
</p>
<p>
    o Appeler la méthode « getLogger() » de la classe « Logger » de l'API «
    Logging » qui prend en paramètre le nom du journal ;
</p>
<p>
    o L’affecter à un flux de sortie, généralement un fichier.
</p>
<p>
    Par convention, on donne au journal le nom complet de la classe en cours
    avec la hiérarchie des packages. Ainsi, chaque classe aura son journal. On
    peut aussi donner le nom du package pour que toutes les classes utilisent
    le même journal. Mais en toute rigueur, vous pouvez donner le nom que vous
    souhaitez au journal.
</p>
<p>
    Exemple :
</p>
<p>
    <strong> protected</strong>
    <strong>static</strong>
    Logger logger=
</p>
<p>
    Logger.getLogger("myPackage.mySubPackage.myClasse");
</p>
<p>
    Le journal n'est créé qu'une seule fois, si plusieurs classes appellent la
    méthode « getLogger() » avec le même nom, le journal sera créé au premier
    appel ; ensuite, le journal sera récupéré, mais pas recréé aux prochains
    appels. C'est l'aspect statique du journal.
</p>
<p>
    Il faut ensuite créer un pointeur vers un fichier, ce pointeur est une
    instance de la classe « FileHandler » de l'API Logging. Puis on l'associe
    au journal via la méthode « addHandler() » du journal à laquelle on passe
    le pointeur en paramètre.
</p>
<p>
    Exemple :
</p>
<p>
    Handler fh = newFileHandler("myLog.log");
</p>
<p>
    logger.addHandler(fh);
</p>
<p>
    À noter que le (ou les) fichier(s) de log se distingue(nt) du journal. Les
    premiers sont la représentation physique du journal. Alors que le journal «
    Logger » est le système logiciel de gestion des messages du journal.
</p>
<h2>
    <a name="_Toc18601498">Fichier de log</a>
</h2>
<p>
    Le fichier stockant le journal peut se voir affecter des propriétés
    particulières :
</p>
<p>
    o Le nom du fichier peut contenir des caractères spéciaux définissant un
    motif « pattern » ;
</p>
<p>
    o Une taille limite pour le fichier « limit » (exprimée en octets, infini
    par défaut) ;
</p>
<p>
    o Un nombre de fichiers cycliques « count » (1 par défaut) ;
</p>
<p>
    o Un mode d'appel « append » (true ou false).
</p>
<p>
    FileHandler()
</p>
<p>
    FileHandler(String pattern)
</p>
<p>
    FileHandler(String pattern,boolean append)
</p>
<p>
    FileHandler(String pattern,int limit,int count)
</p>
<p>
    FileHandler(String pattern,int limit,int count,boolean append)
</p>
<p>
    Le fichier est recréé (false) ou repris tel quel (true) :
</p>
<p>
    Handler fh = newFileHandler("myLog.log", false);
</p>
<p>
    Le journal sera divisé en cinq fichiers de 10 000 octets chacun. Leur nom
    sera en myLog.log.i avec i de 0 à 4 (motif par défaut) :
</p>
<p>
    Handler fh = newFileHandler("myLog.log", 10000, 5);
</p>
<p>
    Handler fh = newFileHandler("myLog.log", 10000, 5, false);
</p>
<h2>
    <a name="_Toc18601499">Message à journaliser</a>
</h2>
<p>
    Pour poster un message «msg» dans le journal, il faut utiliser la fonction
    « log() » de l'objet « Logger ». L'argument « level » définit le niveau de
    criticité du message « msg » passé en paramètre. Si ce niveau est l'un de
    ceux gérés par le journal, alors, le message sera redirigé vers tous les
    flux de sortie associés au journal.
</p>
<p>
    Syntaxe :
</p>
<pre>      void log(Level level, String msg)</pre>
<p>
    logger.log(Level.WARNING, "argument out of limit");
</p>
<h3>
    <a name="_Toc18601500">Niveaux de criticité</a>
</h3>
<p>
    La classe « Level » définit 7 + 2 niveaux de criticité pour les messages à
    journaliser. Ces niveaux ont chacun un poids différent. Le tableau
    ci-dessous présente les niveaux du plus fort au plus faible.
</p>
<p align="center">
    <img
        width="576"
        height="187"
        src="img/loggin/image008.jpg"
    />
</p>
<p align="center">
    Figure 1 : Niveaux de criticité
</p>
<h2>
    <a name="_Toc18601501">Formatage</a>
</h2>
<p>
    Il existe deux classes de formatage de base dans l'API Logging :
</p>
<p align="center">
    <img
        width="576"
        height="64"
        src="img/loggin/image010.jpg"
    />
</p>
<p align="center">
    Figure 2 : default Formatters
</p>
<p>
    Il est là encore possible d'en créer un nouveau en étendant la classe «
    Formatter ».
</p>
<p>
    Un formateur s'applique à un flux de sortie par la méthode « setFormatter()
    » de l'objet « Handler ».
</p>
<p>
    Syntaxe :
</p>
<p>
    void setFormatter(Formatter newFormatter)
</p>
<h2>
    <a name="_Toc18601502">Exemple</a>
</h2>
<p>
    <img
        width="576"
        height="487"
        src="img/loggin/image011.png"
    />
</p>
<h1 id="title3">
    Log4j
</h1>
<h2>
    <a name="_Toc18601504">Obtenez Log4j</a>
</h2>
<p>
    Déclare les dépendances suivantes :
</p>
<div>
    <p>
        &lt;dependency&gt;
    </p>
    <p>
        &lt;groupId&gt;log4j&lt;/groupId&gt;
    </p>
    <p>
        &lt;artifactId&gt;log4j&lt;/artifactId&gt;
    </p>
    <p>
        &lt;version&gt;2.12.1&lt;/version&gt;
    </p>
    <p>
        &lt;/dependency&gt;
    </p>
</div>
<p>
    Pour les utilisateurs non-Maven, visitez la page officielle de log4j,
    téléchargez le fichier jar et placez-le manuellement dans le chemin de la
    bibliothèque de projet.
</p>
<h2>
    <a name="_Toc18601505">log4j.properties</a>
</h2>
<p>
    Créez un fichier log4j.properties et placez-le dans le dossier des
    ressources.
</p>
<p>
    # Root logger option
</p>
<p>
    log4j.rootLogger=DEBUG, <u>stdout</u>, file
</p>
<p>
    # Redirect log messages to console
</p>
<p>
    log4j.appender.stdout=org.apache.log4j.ConsoleAppender
</p>
<p>
    log4j.appender.stdout.Target=System.out
</p>
<p>
    log4j.appender.stdout.layout=org.apache.log4j.PatternLayout
</p>
<p>
    log4j.appender.stdout.layout.ConversionPattern=%d{<u>yyyy</u>-MM-<u>dd</u>
    HH:mm:ss} %-5p %c<strong>{1}</strong>:%L - %m%n
</p>
<p>
    # Redirect log messages to a log file, support file rolling.
</p>
<p>
    log4j.appender.file=org.apache.log4j.RollingFileAppender
</p>
<p>
    log4j.appender.file.File=./mylog.log
</p>
<p>
    log4j.appender.file.MaxFileSize=5MB
</p>
<p>
    log4j.appender.file.MaxBackupIndex=10
</p>
<p>
    log4j.appender.file.layout=org.apache.log4j.PatternLayout
</p>
<p>
    log4j.appender.file.layout.ConversionPattern=%d{<u>yyyy</u>-MM-<u>dd</u>
    HH:mm:ss} %-5p %c<strong>{1}</strong>:%L - %m%n
</p>
<p>
    Pour que log4j se fonctionne il faut ajouter cette ligne dans votre code :
</p>
<p>
    BasicConfigurator.<em>configure</em>();
</p>
<h2>
    <a name="_Toc18601506">Comment log un MESSAGE ?</a>
</h2>
<p>
    Pour consigner un message, commencez par créer un consignateur statique
    final et définissez un nom pour le consignateur. Nous utilisons normalement
    le nom complet de la classe du package.
</p>
<p>
    Ensuite, enregistre les messages avec des priorités différentes, par
    exemple, débogage, informations, avertir, erreur et fatal. Normalement, il
    vous suffit d'utiliser le débogage ou l'erreur.
</p>
<p align="center">
    <img
        width="535"
        height="407"
        src="img/loggin/image012.png"
    />
</p>
<p align="center">
    Figure 3 : Exemple de logging avec log4j
</p>
<h2>
    <a name="_Toc18601507">Comment Log une exception</a>
</h2>
<p>
    Un exemple pour vous montrer comment utiliser log4j pour enregistrer une
    exception.
</p>
<p>
    <img
        width="311"
        height="168"
        src="img/loggin/image013.png"
    />
</p>
<p>
    <img
        width="394"
        height="103"
        src="img/loggin/image014.png"
    />
</p>
<h1 id="title4">
    Logback
</h1>
<p>
    Logback est l'un des frameworks de journalisation les plus utilisés dans la
    communauté Java. C'est un remplacement pour son prédécesseur, Log4j.
    Logback offre une mise en œuvre plus rapide que Log4j, offre plus d'options
    de configuration et plus de flexibilité pour l'archivage d'anciens fichiers
    journaux.
</p>
<h2>
    <a name="_Toc18601509">Logback Architecture</a>
</h2>
<p>
    Trois classes constituent l’architecture Logback; Logger, Appender et
    Layout.
</p>
<p>
    Un enregistreur est un contexte pour les messages de journal. Il s'agit de
    la classe avec laquelle les applications interagissent pour créer des
    messages de journal.
</p>
<p>
    Les appendices placent des messages de journal dans leurs destinations
    finales. Un enregistreur peut avoir plus d'un appeleur. Nous pensons
    généralement que les appendices sont attachés à des fichiers texte, mais
    Logback est beaucoup plus puissant que cela.
</p>
<p>
    La mise en page prépare les messages pour la sortie. Logback prend en
    charge la création de classes personnalisées pour le formatage des
    messages, ainsi que des options de configuration robustes pour les messages
    existants.
</p>
<h2>
    <a name="_Toc18601510">Exemple de base et configuration</a>
</h2>
<p>
    Commençons par un exemple rapide d'utilisation de Logback dans une
    application.
</p>
<p>
    Tout d'abord, nous avons besoin d'un fichier de configuration. Nous allons
    créer un fichier texte nommé logback.xml et le placer quelque part dans
    notre chemin de classe :
</p>
<p>
    &lt;configuration&gt;
</p>
<p>
    &lt;appender name="STDOUT" class="ch.qos.logback.core.ConsoleAppender"&gt;
</p>
<p>
    &lt;encoder&gt;
</p>
<p>
    &lt;pattern&gt;%d{HH:mm:ss.SSS} [%thread] %-5level %logger{36} -
    %msg%n&lt;/pattern&gt;
</p>
<p>
    &lt;/encoder&gt;
</p>
<p>
    &lt;/appender&gt;
</p>
<p>
    &lt;root level="debug"&gt;
</p>
<p>
    &lt;appender-ref ref="STDOUT" /&gt;
</p>
<p>
    &lt;/root&gt;
</p>
<p>
    &lt;/configuration&gt;
</p>
<p>
    Ensuite, nous avons besoin d’une classe simple avec une méthode principale
    :
</p>
<p align="center">
    <img
        width="576"
        height="291"
        src="img/loggin/image015.png"
    />
</p>
<p align="center">
    Figure 4 : Exemple de Logback
</p>
<p>
    Cette classe crée un enregistreur et appelle info () pour générer un
    message de journalisation.
</p>
<p>
    Lorsque nous exécutons Example, nous voyons notre message enregistré sur la
    console :
</p>
<p>
    <img
        width="520"
        height="17"
        src="img/loggin/image016.png"
    />
</p>
<h2>
    <a name="_Toc18601511">Logger Contexts</a>
</h2>
<p>
    Ceci est notre contexte de journalisation. Lorsque nous l'avons créé, nous
    avons transmis notre classe à LoggerFactory. Cela donne un nom au logger
    (il y a aussi une surcharge qui accepte une chaîne).
</p>
<p>
    Les contextes de journalisation existent dans une hiérarchie proche de la
    hiérarchie des objets Java :
</p>
<p>
    · Un enregistreur est un ancêtre lorsque son nom, suivi d'un point, préfixe
    le nom de l'enregistreur descendant.
</p>
<p>
    · Un enregistreur est un parent quand il n'y a pas d'ancêtres entre lui et
    un enfant
</p>
<h3>
    <a name="_Toc18601512">Utiliser un contexte</a>
</h3>
<p>
    Créons un exemple de programme qui illustre l'utilisation d'un contexte
    dans les hiérarchies de journalisation :
</p>
<p>
    <img
        width="576"
        height="232"
        src="img/loggin/image018.jpg"
    />
</p>
<p>
    Lorsque nous courons cela, nous voyons ces messages :
</p>
<p>
    <img
        width="576"
        height="48"
        src="img/loggin/image019.png"
    />
</p>
<h3>
    <a name="_Toc18601513">Messages paramétrés</a>
</h3>
<p>
    Contrairement aux exemples de fragments ci-dessus, les messages de
    journalisation les plus utiles nécessitaient l’ajout de chaînes. Cela
    implique l'allocation de mémoire, la sérialisation des objets, la
    concaténation de chaînes et éventuellement le nettoyage ultérieur de la
    corbeille.
</p>
<p>
    Considérez le message suivant :
</p>
<p>
    log.debug("Current count is " + count);
</p>
<p>
    Que le message soit consigné ou non, nous assumons le coût de création du
    message.
</p>
<p>
    Logback offre une alternative avec ses messages paramétrés :
</p>
<p>
    log.debug("Current count is {}", count);
</p>
<p>
    Les accolades {} accepteront n'importe quel objet et utiliseront sa méthode
    toString () pour générer un message uniquement après avoir vérifié que le
    message de journal est requis.
</p>
<p>
    Essayons quelques paramètres différents :
</p>
<p>
    <img
        width="442"
        height="184"
        src="img/loggin/image020.png"
    />
</p>
<p>
    Cet extrait donne :
</p>
<p>
    <img
        width="576"
        height="101"
        src="img/loggin/image022.jpg"
    />
</p>`;