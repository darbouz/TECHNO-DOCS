var DP = `<h1  id="title1">
    Introduction
</h1>
<h2>
    <a name="_Toc18765270">QU'EST-CE QU'UN Design pattern ?</a>
</h2>
<p>
    Les design patterns offrent des solutions aux problèmes courants de
    conception d'applications. Dans la programmation orientée objet, les
    modèles de conception visent généralement à résoudre les problèmes associés
    à la création et à l'interaction d'objets, plutôt que les problèmes à
    grande échelle rencontrés par l'architecture logicielle globale. Ils
    proposent des solutions généralisées sous forme de passe-partout pouvant
    être appliqués à des problèmes concrets.
</p>
<p>
    Habituellement, les modèles de conception sont visualisés à l'aide d'un
    diagramme de classes, montrant les comportements et les relations entre les
    classes.
</p>
<h2>
    <a name="_Toc18765271">
        Comment les patterns ont été découverts et pourquoi nous en avons
        besoin
    </a>
</h2>
<p>
    Les modèles de conception sont un sujet brûlant depuis que le célèbre Gang
    of Four (GoF, composé de Erich Gamma, Richard Helm, Ralph Johnson et John
    Vlissides) a écrit le livre Design Patterns: Eléments de logiciels orientés
    objet réutilisables 1, donnant enfin aux développeurs dans le monde entier,
    des solutions éprouvées aux problèmes de génie logiciel les plus courants.
    Ce livre important décrit diverses techniques de développement et leurs
    pièges et fournit 23 modèles de conception de programmation orientés objet.
</p>
<p>
    Ces modèles sont divisés en trois catégories : créationnel, structurel et
    comportemental.
</p>
<p>
    Mais pourquoi ? Pourquoi avons-nous soudainement compris que nous avions
    tant besoin de modèles de conception ? La décision n'était pas si soudaine.
    La programmation orientée objet est apparue dans les années 1980, et
    plusieurs langages fondés sur cette nouvelle idée ont suivi. Smalltalk, C
    ++ et Objective C sont quelques-unes des rares langues qui sont encore
    répandues aujourd'hui. Ils ont apporté leurs propres problèmes, cependant,
    et contrairement au développement de la programmation procédurale, cette
    fois, le changement a été trop rapide pour voir ce qui fonctionnait et ce
    qui ne fonctionnait pas.
</p>
<p>
    Bien que les modèles de conception aient résolu de nombreux problèmes (tels
    que le code spaghetti) que les ingénieurs logiciels rencontrent avec les
    langages de programmation procéduraux tels que C et COBOL, les langages
    orientés objet ont introduit leur propre ensemble de problèmes. Le langage
    C ++ a progressé rapidement et, en raison de sa complexité, il a amené de
    nombreux développeurs à se confronter à des problèmes tels que les fuites
    de mémoire, une conception médiocre des objets, une utilisation non
    sécurisée de la mémoire et du code hérité non maintenable.
</p>
<p>
    Cependant, la plupart des problèmes rencontrés par les développeurs ont
    suivi les mêmes schémas et il n’est pas exagéré de dire qu’une personne
    quelque part a déjà résolu le problème. À l'époque où la programmation
    orientée objet a émergé, c'était toujours un monde pré-Internet et il était
    difficile de partager des expériences avec les masses. C’est la raison pour
    laquelle il a fallu un certain temps avant que le GoF forme un ensemble de
    modèles de problèmes récurrents bien connus.
</p>
<h1 id="title2">
    Presentation Tier
</h1>
<h2>
    <a name="_Toc18765273">Intercepting Filter Design Pattern</a>
</h2>
<h4>
    Problem
</h4>
<p>
    Le pré-traitement et le post-traitement d'une requête Web client et d'une
    réponse sont requis. Lorsqu'une demande entre dans une application Web,
    elle doit souvent passer plusieurs tests d'entrée avant l'étape de
    traitement principale. Par exemple,
</p>
<p>
    o Le client a-t-il été authentifié ?
</p>
<p>
    o Le client a-t-il une session valide ?
</p>
<p>
    o L'adresse IP du client provient-elle d'un réseau approuvé ?
</p>
<p>
    o Le chemin de la demande enfreint-il des contraintes ?
</p>
<p>
    o Quel codage le client utilise-t-il pour envoyer les données ?
</p>
<p>
    o Est-ce que nous supportons le type de navigateur du client ? Certaines de
    ces vérifications sont des tests, aboutissant à une réponse par oui ou par
    non qui détermine si le traitement va continuer. D'autres contrôles
    manipulent le flux de données entrant sous une forme adaptée au traitement.
    Vous souhaitez intercepter et manipuler une demande et une réponse avant et
    après le traitement de la demande.
</p>
<h4>
    Motivation
</h4>
<p>
    o Vous souhaitez centraliser le traitement commun des demandes, par exemple
    vérifier le schéma de codage des données de chaque demande, consigner les
    informations relatives à chaque demande ou compresser une réponse sortante.
</p>
<p>
    o Vous souhaitez que les composants de prétraitement et de post-traitement
    soient associés de manière lâche aux services principaux de traitement des
    demandes afin de faciliter l'ajout et la suppression non intrusifs.
</p>
<p>
    o Vous souhaitez que les composants de prétraitement et de post-traitement
    soient indépendants les uns des autres et autonomes afin de faciliter leur
    réutilisation.
</p>
<h4>
    Solution
</h4>
<p>
    Utilisez un filtre d'interception en tant que filtre enfichable pour pré et
    post-traiter les demandes et les réponses. Un gestionnaire de filtres
    combine des filtres faiblement couplés dans une chaîne, déléguant le
    contrôle au filtre approprié. De cette manière, vous pouvez ajouter,
    supprimer et combiner ces filtres de différentes manières sans changer le
    code existant.
</p>
<h4>
    Structure
</h4>
<p>
    <img
        width="576"
        height="224"
        src="img/designPatternJee/image007.jpg"
    />
</p>
<p align="center">
    Figure 1 : Diagramme de classe
</p>
<p align="center">
    <img
        width="443"
        height="336"
        src="img/designPatternJee/image009.jpg"
    />
</p>
<p align="center">
    Figure 2 : Diagramme de séquence
</p>
<h4>
    Participants
</h4>
<p>
    Filtre - Filtre qui effectuera certaines tâches avant ou après l'exécution
    de la demande par le gestionnaire de demandes.
</p>
<p>
    Chaîne de filtres - La chaîne de filtres contient plusieurs filtres et aide
    à les exécuter dans un ordre défini sur la cible.
</p>
<p>
    Target - L'objet cible est le gestionnaire de demandes.
</p>
<p>
    Gestionnaire de filtres - Le gestionnaire de filtres gère les filtres et la
    chaîne de filtres.
</p>
<p>
    Client - Le client est l'objet qui envoie la demande à l'objet cible.
</p>
<h4>
    Implémentation
</h4>
<p>
    Étape 1 : Créer une interface de filtre
</p>
<div>
    <p>
        public interface Filter {
    </p>
    <p>
        public void execute(String request);
    </p>
    <p>
        }
    </p>
</div>
<p>
    Étape 2 : Créer des filtres concrets - AuthenticationFilter, DebugFilter
</p>
<div>
    <p>
        public class AuthenticationFilter implements Filter {
    </p>
    <p>
        public void execute(String request){
    </p>
    <p>
        System.out.println("Authenticating request: " + request);
    </p>
    <p>
        }
    </p>
    <p>
        }
    </p>
    <p>
        public class DebugFilter implements Filter {
    </p>
    <p>
        public void execute(String request){
    </p>
    <p>
        System.out.println("request log: " + request);
    </p>
    <p>
        }
    </p>
    <p>
        }
    </p>
</div>
<p>
    Étape 3 : Créer une cible
</p>
<div>
    <p>
        public class Target {
    </p>
    <p>
        public void execute(String request){
    </p>
    <p>
        System.out.println("Executing request: " + request);
    </p>
    <p>
        }
    </p>
    <p>
        }
    </p>
</div>
<p>
    Étape 4 : Créer une chaîne de filtrage
</p>
<div>
    <p>
        import java.util.ArrayList;
    </p>
    <p>
        import java.util.List;
    </p>
    <p>
        public class FilterChain {
    </p>
    <p>
        private List&lt;Filter&gt; filters = new ArrayList&lt;Filter&gt;();
    </p>
    <p>
        private Target target;
    </p>
    <p>
        public void addFilter(Filter filter){
    </p>
    <p>
        filters.add(filter);
    </p>
    <p>
        }
    </p>
    <p>
        public void execute(String request){
    </p>
    <p>
        for (Filter filter : filters) {
    </p>
    <p>
        filter.execute(request);
    </p>
    <p>
        }
    </p>
    <p>
        target.execute(request);
    </p>
    <p>
        }
    </p>
    <p>
        public void setTarget(Target target){
    </p>
    <p>
        this.target = target;
    </p>
    <p>
        }
    </p>
    <p>
        }
    </p>
</div>
<p>
    Étape 5 : Créer FilterManager
</p>
<div>
    <p>
        public class FilterManager {
    </p>
    <p>
        FilterChain filterChain;
    </p>
    <p>
        public FilterManager(Target target){
    </p>
    <p>
        filterChain = new FilterChain();
    </p>
    <p>
        filterChain.setTarget(target);
    </p>
    <p>
        }
    </p>
    <p>
        public void setFilter(Filter filter){
    </p>
    <p>
        filterChain.addFilter(filter);
    </p>
    <p>
        }
    </p>
    <p>
        public void filterRequest(String request){
    </p>
    <p>
        filterChain.execute(request);
    </p>
    <p>
        }
    </p>
    <p>
        }
    </p>
</div>
<p>
    Étape 6 : Créer un client
</p>
<div>
    <p>
        public class Client {
    </p>
    <p>
        FilterManager filterManager;
    </p>
    <p>
        public void setFilterManager(FilterManager filterManager){
    </p>
    <p>
        this.filterManager = filterManager;
    </p>
    <p>
        }
    </p>
    <p>
        public void sendRequest(String request){
    </p>
    <p>
        filterManager.filterRequest(request);
    </p>
    <p>
        }
    </p>
    <p>
        }
    </p>
</div>
<p>
    Étape 7 : Utilisez le client pour démontrer le modèle de conception du
    filtre d'interception
</p>
<div>
    <p>
        public class InterceptingFilterDemo {
    </p>
    <p>
        public static void main(String[] args) {
    </p>
    <p>
        FilterManager filterManager = new FilterManager(new Target());
    </p>
    <p>
        filterManager.setFilter(new AuthenticationFilter());
    </p>
    <p>
        filterManager.setFilter(new DebugFilter());
    </p>
    <p>
        Client client = new Client();
    </p>
    <p>
        client.setFilterManager(filterManager);
    </p>
    <p>
        client.sendRequest("HOME");
    </p>
    <p>
        }
    </p>
    <p>
        }
    </p>
</div>
<p>
    Étape 8 : vérifiez la sortie
</p>
<div>
    <p>
        Authenticating request: HOME
    </p>
    <p>
        request log: HOME
    </p>
    <p>
        Executing request: HOME
    </p>
</div>
<h4>
    Conséquences
</h4>
<p>
    o Centralise le contrôle avec des manipulateurs faiblement couplés
</p>
<p>
    o Améliore la réutilisabilité
</p>
<p>
    o Configuration déclarative et flexible
</p>
<p>
    o Le partage d'informations est inefficace
</p>
<h4>
    Applicabilité
</h4>
<p>
    Utilisez le modèle de filtre d'interception lorsque
</p>
<p>
    o Un système utilise des demandes de pré-traitement ou de post-traitement
</p>
<p>
    o Un système doit effectuer l’authentification / autorisation /
    journalisation ou le suivi de la demande, puis transmettre les demandes aux
    gestionnaires correspondants.
</p>
<p>
    o Vous souhaitez une approche modulaire de la configuration des schémas de
    pré-traitement et de post-traitement
</p>
<h2>
    <a name="_Toc18765274">Front Controller Design Pattern</a>
</h2>
<h4>
    Problem
</h4>
<p>
    Vous souhaitez un point d'accès centralisé pour le traitement des demandes
    de niveau présentation.
</p>
<h4>
    Motivation
</h4>
<p>
    o Vous voulez éviter la logique de contrôle en double.
</p>
<p>
    o Vous souhaitez appliquer une logique commune à plusieurs demandes.
</p>
<p>
    o Vous souhaitez séparer la logique de traitement du système de la vue.
</p>
<p>
    o Vous souhaitez centraliser les points d'accès contrôlés dans votre
    système.
</p>
<h4>
    Solution
</h4>
<p>
    Utilisez un contrôleur frontal comme point de contact initial pour traiter
    toutes les demandes associées. Le contrôleur frontal centralise la logique
    de contrôle qui pourrait autrement être dupliquée et gère les activités de
    traitement des demandes de clé.
</p>
<h4>
    Structure
</h4>
<p align="center">
    <img
        width="576"
        height="204"
        src="img/designPatternJee/image011.jpg"
    />
</p>
<p align="center">
    Figure 3 : Diagramme de classe - Front Controller DP
</p>
<p align="center">
    <img
        width="576"
        height="365"
        src="img/designPatternJee/image013.jpg"
    />
</p>
<p align="center">
    Figure 4 : Diagramme de séquence
</p>
<h4>
    Participants
</h4>
<p>
    FrontController - FrontController est le point de contact initial pour le
    traitement des demandes dans le système. Il délègue à un
    ApplicationController pour effectuer la gestion des actions et des vues.
</p>
<p>
    ApplicationController - Un ApplicationController est responsable de la
    gestion des actions et des vues, notamment de la localisation et du routage
    vers les actions spécifiques qui serviront une demande, ainsi que de la
    recherche et de l'envoi à la vue appropriée.
</p>
<p>
    Commande - Une commande exécute l'action qui gère la demande.
</p>
<p>
    Vue - Une vue représente l'affichage renvoyé au client.
</p>
<h4>
    Implémentation
</h4>
<p>
    Étape 1 : Créer des classes Java View, HomeView, StudentView, ErrorView et
    DashboardView
</p>
<div>
    <p>
        public class HomeView {
    </p>
    <p>
        public void show() {
    </p>
    <p>
        System.out.println("Displaying Home Page");
    </p>
    <p>
        }
    </p>
    <p>
        }
    </p>
    <p>
        public class StudentView {
    </p>
    <p>
        public void show() {
    </p>
    <p>
        System.out.println("Displaying Student Page");
    </p>
    <p>
        }
    </p>
    <p>
        }
    </p>
    <p>
        public class ErrorView {
    </p>
    <p>
        public void show() {
    </p>
    <p>
        System.out.println("Displaying Error Page");
    </p>
    <p>
        }
    </p>
    <p>
        }
    </p>
    <p>
        public class DashboadView {
    </p>
    <p>
        public void show() {
    </p>
    <p>
        System.out.println("Displaying Dashboad Page");
    </p>
    <p>
        }
    </p>
    <p>
        }
    </p>
</div>
<p>
    Étape 2 : Créer Dispatcher - Dispatcher.java
</p>
<div>
    <p>
        public class Dispatcher {
    </p>
    <p>
        private StudentView studentView;
    </p>
    <p>
        private HomeView homeView;
    </p>
    <p>
        private DashboardView dashboardView;
    </p>
    <p>
        private ErrorView errorView;
    </p>
    <p>
        public Dispatcher() {
    </p>
    <p>
        studentView = new StudentView();
    </p>
    <p>
        homeView = new HomeView();
    </p>
    <p>
        dashboardView = new DashboardView();
    </p>
    <p>
        errorView = new ErrorView();
    </p>
    <p>
        }
    </p>
    <p>
        public void dispatch(String request) {
    </p>
    <p>
        if (request.equalsIgnoreCase("STUDENT")) {
    </p>
    <p>
        studentView.show();
    </p>
    <p>
        }
    </p>
    <p>
        if (request.equalsIgnoreCase("DASHBOARD")) {
    </p>
    <p>
        dashboardView.show();
    </p>
    <p>
        }
    </p>
    <p>
        if (request.equalsIgnoreCase("HOME")) {
    </p>
    <p>
        homeView.show();
    </p>
    <p>
        } else {
    </p>
    <p>
        errorView.show();
    </p>
    <p>
        }
    </p>
    <p>
        }
    </p>
    <p>
        }
    </p>
</div>
<p>
    Étape 3 : Créer un contrôleur frontal - FrontController.java
</p>
<div>
    <p>
        public class FrontController {
    </p>
    <p>
        private Dispatcher dispatcher;
    </p>
    <p>
        public FrontController() {
    </p>
    <p>
        dispatcher = new Dispatcher();
    </p>
    <p>
        }
    </p>
    <p>
        private boolean isAuthenticUser() {
    </p>
    <p>
        System.out.println("User is authenticated successfully.");
    </p>
    <p>
        return true;
    </p>
    <p>
        }
    </p>
    <p>
        private void trackRequest(String request) {
    </p>
    <p>
        System.out.println("Page requested: " + request);
    </p>
    <p>
        }
    </p>
    <p>
        public void dispatchRequest(String request) {
    </p>
    <p>
        //log each request
    </p>
    <p>
        trackRequest(request);
    </p>
    <p>
        //authenticate the user
    </p>
    <p>
        if (isAuthenticUser()) {
    </p>
    <p>
        dispatcher.dispatch(request);
    </p>
    <p>
        }
    </p>
    <p>
        }
    </p>
    <p>
        }
    </p>
</div>
<p>
    Étape 4 : Utiliser le contrôleur frontal pour illustrer le modèle de
    conception du contrôleur frontal - FrontControllerPatternDemo.java
</p>
<div>
    <p>
        public class FrontControllerPatternDemo {
    </p>
    <p>
        public static void main(String[] args) {
    </p>
    <p>
        FrontController frontController = new FrontController();
    </p>
    <p>
        frontController.dispatchRequest("HOME");
    </p>
    <p>
        frontController.dispatchRequest("STUDENT");
    </p>
    <p>
        frontController.dispatchRequest("DASHBOARD");
    </p>
    <p>
        frontController.dispatchRequest("ERROR");
    </p>
    <p>
        }
    </p>
    <p>
        }
    </p>
</div>
<h4>
    Conséquences
</h4>
<p>
    o Centralise le contrôle
</p>
<p>
    o Améliore la facilité de gestion
</p>
<p>
    o Améliore la réutilisabilité
</p>
<p>
    o Améliore la séparation des rôles
</p>
<h4>
    Applicabilité
</h4>
<p>
    Utilisez le modèle de contrôleur frontal lorsque
</p>
<p>
    o Vous souhaitez encapsuler la fonctionnalité commune de traitement des
    demandes en un seul endroit.
</p>
<p>
    o Vous souhaitez implémenter le traitement dynamique des requêtes,
    c'est-à-dire modifier le routage sans modifier le code.
</p>
<p>
    o Pour que la configuration du serveur Web soit portable, il vous suffit
    d’enregistrer la manière spécifique du serveur Web du gestionnaire.
</p>
<h2>
    <a name="_Toc18765275">Context Object Design Pattern</a>
</h2>
<h4>
    Problem
</h4>
<p>
    Vous souhaitez éviter d'utiliser des informations système spécifiques à un
    protocole en dehors de son contexte pertinent.
</p>
<h4>
    Motivation
</h4>
<p>
    o Vous avez des composants et des services qui nécessitent un accès aux
    informations système.
</p>
<p>
    o Vous souhaitez découpler les composants d'application et les services des
    spécificités de protocole des informations système.
</p>
<p>
    o Vous souhaitez exposer uniquement les API pertinentes dans un contexte.
</p>
<h4>
    Solution
</h4>
<p>
    Utilisez un objet de contexte pour encapsuler l'état d'une manière
    indépendante du protocole à partager dans toute votre application.
</p>
<h4>
    Structure
</h4>
<p align="center">
    <img
        width="576"
        height="246"
        src="img/designPatternJee/image015.jpg"
    />
</p>
<p align="center">
    Figure 5 : Diagramme de classe - Context Object DP
</p>
<p align="center">
    <img
        width="566"
        height="427"
        src="img/designPatternJee/image016.png"
    />
</p>
<p align="center">
    Figure 6 : Diagramme de séquence
</p>
<h4>
    Participants
</h4>
<p>
    Un client utilise un ContextFactory pour créer un ContextObject à l'aide
    d'un ProtocolInterface. ContextObject protège les composants et services
    d'application environnants des détails sous-jacents de ProtocolInterface.
</p>
<p>
    Client : crée un objet avec ProtocolInterface.
</p>
<p>
    ProtocolInterface: un objet qui expose des détails spécifiques au protocole
    ou au niveau.
</p>
<p>
    ContextFactory: une ContextFactory crée un protocole indépendant du niveau
    et du niveau
</p>
<p>
    ContextObject : ContextObject ContextObject est un objet générique utilisé
    pour partager un état indépendant du domaine dans une application.
</p>
<h4>
    Implémentation
</h4>
<p>
    Il existe de nombreuses stratégies pour implémenter un objet de contexte.
    Ces stratégies sont donc regroupées en fonction du type d'objet de contexte
    en cours de création. Lorsqu'un objet ContextObject encapsule l'état de la
    demande, il est également appelé RequestContext.
</p>
<p>
    Dans l'exemple ci-dessous, HttpServletRequest est un objet Request
    spécifique au protocole et doit avoir une exposition limitée dans une
    application.
</p>
<p>
    ContextFactory crée un RequestContext (ContextObject) et y transfère un
    état à partir de HttpServletRequest. Les données du RequestContext passent
    généralement par une validation initiale au niveau du formulaire. Par
    exemple, une vérification des champs vides ou un numéro de carte de crédit
    comportant le nombre correct de chiffres.
</p>
<p>
    Au fur et à mesure que le traitement commercial est effectué, l'état
    ContextObject passe généralement par la deuxième phase de validation liée
    aux activités commerciales, par exemple si une valeur est comprise dans une
    plage appropriée. L'état de la demande pertinent est transféré dans une
    implémentation Map standard, qui est transmise.
</p>
<div>
    <p>
        public class FrontController extends HttpServlet {
    </p>
    <p>
        ...
    </p>
    <p>
        private void processRequest(HttpServletRequest request,
    </p>
    <p>
        HttpServletResponse response) throws ServletException,
    </p>
    <p>
        java.io.IOException {
    </p>
    <p>
        // create RequestContext object using Map Strategy
    </p>
    <p>
        Map requestContextMap = new HashMap(request.getParameterMap());
    </p>
    <p>
        Dispatcher dispatcher = new Dispatcher(request, response);
    </p>
    <p>
        requestContextMap.put("dispatcher", dispatcher);
    </p>
    <p>
        // Create ApplicationController instance
    </p>
    <p>
        ApplicationController applicationController =
    </p>
    <p>
        new ApplicationControllerImpl();
    </p>
    <p>
        // Request processing
    </p>
    <p>
        ResponseContext responseContext =
    </p>
    <p>
        applicationController.handleRequest(requestContextMap);
    </p>
    <p>
        // Response processing
    </p>
    <p>
        applicationController.handleResponse(requestContextMap,
    </p>
    <p>
        responseContext);
    </p>
    <p>
        }
    </p>
    <p>
        ...
    </p>
    <p>
        }
    </p>
</div>
<h4>
    Applicabilité
</h4>
<p>
    Dans une architecture en couches, si nous voulons partager des informations
    système entre différentes couches système, utilisez ce modèle de
    conception.
</p>
<h2>
    <a name="_Toc18765276">Application Controller Design Pattern</a>
</h2>
<h4>
    Problem
</h4>
<p>
    Vous souhaitez centraliser et modulariser les actions et la gestion des
    vues.
</p>
<p>
    Dans la partie présentation, deux décisions doivent être prises à l’arrivée
    de chaque demande :
</p>
<p>
    o Tout d'abord, la demande entrante doit être résolue en une action qui
    traite la demande. Ceci s'appelle la gestion d'action.
</p>
<p>
    o Deuxièmement, la vue appropriée est localisée et expédiée. C'est ce qu'on
    appelle la gestion des vues.
</p>
<h4>
    Motivation
</h4>
<p>
    o Vous souhaitez réutiliser le code d'action et de gestion des vues.
</p>
<p>
    o Vous souhaitez améliorer l'extensibilité du traitement des demandes, par
    exemple en ajoutant de manière incrémentielle la fonctionnalité de cas
    d'utilisation à une application.
</p>
<p>
    o Vous souhaitez améliorer la modularité et la maintenabilité du code, en
    facilitant l'extension de l'application et le test de parties discrètes de
    votre code de traitement de la demande, indépendamment d'un conteneur Web.
</p>
<h4>
    Solution
</h4>
<p>
    Utilisez un contrôleur d’application pour centraliser la récupération et
    l’appel des composants de traitement des demandes, tels que les commandes
    et les vues.
</p>
<p>
    Au niveau de la présentation, nous mappons les paramètres de requête
    entrants à des classes de traitement de requête spécifiques et affichons
    les composants gérant chaque requête.
</p>
<p>
    La gestion des actions consiste à localiser et à appeler des actions pour
    traiter des demandes spécifiques, tandis que la gestion des vues se réfère
    à la navigation et à la distribution vers la vue ou le mécanisme de
    génération de vues approprié.
</p>
<h4>
    Structure
</h4>
<p align="center">
    <img
        width="576"
        height="272"
        src="img/designPatternJee/image018.jpg"
    />
</p>
<p align="center">
    Figure 7 : Diagramme de classe - Application Controller DP
</p>
<p align="center">
    <img
        width="576"
        height="354"
        src="img/designPatternJee/image020.jpg"
    />
</p>
<p align="center">
    Figure 8 : Diagramme de séquence
</p>
<h4>
    Participants
</h4>
<p>
    Client : appelle le contrôleur d'application. Dans la couche présentation,
    un FrontController ou un InterceptingFilter remplit généralement ce rôle.
</p>
<p>
    ApplicationController: Utilise Mapper pour résoudre une demande entrante en
    action et vue appropriées, auxquelles il délègue ou envoie des messages.
</p>
<p>
    Mapper : utilise une carte pour traduire une demande entrante en action et
    en vue appropriées. Un mappeur agit comme une usine.
</p>
<p>
    Map : contient les références aux descripteurs qui représentent les
    ressources cibles. Les cartes peuvent être réalisées sous forme de classe
    ou de registre.
</p>
<p>
    Target : ressource permettant de répondre à une demande particulière,
    notamment des commandes, des vues et des feuilles de style.
</p>
<h4>
    Implémentation
</h4>
<p>
    Étape 1 : Créons des composants d'affichage tels que les pages index.jsp et
    viewStudent.jsp.
</p>
<div>
    <p>
        &lt;%@ page language="java" contentType="text/html; charset=ISO-8859-1"
        pageEncoding="ISO-8859-1"%&gt;
    </p>
    <p>
        &lt;!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
        "http://www.w3.org/TR/html4/loose.dtd"&gt;
    </p>
    <p>
        &lt;html&gt;
    </p>
    <p>
        &lt;head&gt;
    </p>
    <p>
        &lt;meta http-equiv="Content-Type" content="text/html;
        charset=ISO-8859-1"&gt;
    </p>
    <p>
        &lt;title&gt;Index Page&lt;/title&gt;
    </p>
    <p>
        &lt;/head&gt;
    </p>
    <p>
        &lt;body&gt;
    </p>
    <p>
        &lt;a href="studentView.do?id=10"&gt;Show Student Information&lt;/a&gt;
    </p>
    <p>
        &lt;/body&gt;
    </p>
    <p>
        &lt;/html&gt;
    </p>
    <p>
        &lt;%@ page language="java" contentType="text/html; charset=ISO-8859-1"
        pageEncoding="ISO-8859-1"%&gt;
    </p>
    <p>
        &lt;jsp:useBean id="student" type="design.StudentVO" scope="request"
        /&gt;
    </p>
    <p>
        &lt;!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
        "http://www.w3.org/TR/html4/loose.dtd"&gt;
    </p>
    <p>
        &lt;html&gt;
    </p>
    <p>
        &lt;head&gt;
    </p>
    <p>
        &lt;meta http-equiv="Content-Type" content="text/html;
        charset=ISO-8859-1"&gt;
    </p>
    <p>
        &lt;title&gt;Student Information&lt;/title&gt;
    </p>
    <p>
        &lt;/head&gt;
    </p>
    <p>
        &lt;body&gt;
    </p>
    <p>
        &lt;p style="color: blue;font-size:x-large; large;font-family:
        sans-serif;"&gt;
    </p>
    <p>
        Student Id : &lt;jsp:getProperty property="id"
        name="student"/&gt;&lt;br&gt;
    </p>
    <p>
        Student Name : &lt;jsp:getProperty property="name" name="student"/&gt;
    </p>
    <p>
        &lt;/p&gt;
    </p>
    <p>
        &lt;/body&gt;
    </p>
    <p>
        &lt;/html&gt;
    </p>
</div>
<p>
    Étape 2 : Le modèle de contrôleur d'application est un modèle de conception
    J2EE. Nous allons donc créer un descripteur de déploiement qui est web.xml.
</p>
<div>
    <p>
        &lt;web-app xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    </p>
    <p>
        xmlns="http://java.sun.com/xml/ns/javaee"
    </p>
    <p>
        xsi:schemaLocation="http://java.sun.com/xml/ns/javaee
    </p>
    <p>
        http://java.sun.com/xml/ns/javaee/web-app_3_0.xsd"
    </p>
    <p>
        id="WebApp_ID" version="3.0"&gt;
    </p>
    <p>
        &lt;display-name&gt;ApplicationControllerWeb&lt;/display-name&gt;
    </p>
    <p>
        &lt;servlet&gt;
    </p>
    <p>
        &lt;servlet-name&gt;front&lt;/servlet-name&gt;
    </p>
    <p>
        &lt;servlet-class&gt;design.FrontController&lt;/servlet-class&gt;
    </p>
    <p>
        &lt;/servlet&gt;
    </p>
    <p>
        &lt;servlet-mapping&gt;
    </p>
    <p>
        &lt;servlet-name&gt;front&lt;/servlet-name&gt;
    </p>
    <p>
        &lt;url-pattern&gt;*.do&lt;/url-pattern&gt;
    </p>
    <p>
        &lt;/servlet-mapping&gt;
    </p>
    <p>
        &lt;welcome-file-list&gt;
    </p>
    <p>
        &lt;welcome-file&gt;index.jsp&lt;/welcome-file&gt;
    </p>
    <p>
        &lt;/welcome-file-list&gt;
    </p>
    <p>
        &lt;/web-app&gt;
    </p>
</div>
<p>
    Étape 3 : Créons un objet de valeur ou un DTO comme StudentVO.java.
</p>
<div>
    <p>
        public class StudentVO {
    </p>
    <p>
        private String id;
    </p>
    <p>
        private String name;
    </p>
    <p>
        //constructor
    </p>
    <p>
        public StudentVO(String id, String name) {
    </p>
    <p>
        this.id = id;
    </p>
    <p>
        this.name = name;
    </p>
    <p>
        }
    </p>
    <p>
        //setters and getters
    </p>
    <p>
        public String getId() {
    </p>
    <p>
        return id;
    </p>
    <p>
        }
    </p>
    <p>
        public void setId(String id) {
    </p>
    <p>
        this.id = id;
    </p>
    <p>
        }
    </p>
    <p>
        public String getName() {
    </p>
    <p>
        return name;
    </p>
    <p>
        }
    </p>
    <p>
        public void setName(String name) {
    </p>
    <p>
        this.name = name;
    </p>
    <p>
        }
    </p>
    <p>
        }
    </p>
</div>
<p>
    Maintenant, créez une interface de commande.
</p>
<div>
    <p>
        public interface Command {
    </p>
    <p>
        String execute(RequestContext requestContext);
    </p>
    <p>
        }
    </p>
</div>
<p>
    Classe StudentViewCommand qui implémente l'interface de commande
</p>
<div>
    <p>
        public class StudentViewCommand implements Command {
    </p>
    <p>
        @Override
    </p>
    <p>
        public String execute(RequestContext requestContext) {
    </p>
    <p>
        String id = null;
    </p>
    <p>
        StudentVO studentVo = null;
    </p>
    <p>
        id = requestContext.getParameter("id");
    </p>
    <p>
        //call delegate and dao
    </p>
    <p>
        studentVo = new StudentVO(id, "Ramesh");
    </p>
    <p>
        requestContext.setAttribute("student", studentVo);
    </p>
    <p>
        return "showStudent";
    </p>
    <p>
        }
    </p>
    <p>
        }
    </p>
</div>
<p>
    Créez ContextFactory pour gérer les informations de contexte.
</p>
<div>
    <p>
        import java.util.Map;
    </p>
    <p>
        import javax.servlet.http.HttpServletRequest;
    </p>
    <p>
        public class ContextFactory {
    </p>
    <p>
        public RequestContext getContextObject(HttpServletRequest request) {
    </p>
    <p>
        Map &lt; String, String[] &gt; requestMap = null;
    </p>
    <p>
        RequestContext requestContext = null;
    </p>
    <p>
        HttpRequestMapper requestMapper = null;
    </p>
    <p>
        requestMapper = new HttpRequestMapper();
    </p>
    <p>
        requestMap = requestMapper.extract(request);
    </p>
    <p>
        requestContext = new RequestContext(request.getRequestURI(),
        requestMap);
    </p>
    <p>
        return requestContext;
    </p>
    <p>
        }
    </p>
    <p>
        public void bindContextObject(HttpServletRequest request,
        RequestContext requestContext) {
    </p>
    <p>
        HttpRequestMapper requestMapper = null;
    </p>
    <p>
        requestMapper = new HttpRequestMapper();
    </p>
    <p>
        requestMapper.bind(request, requestContext.getResponseMap());
    </p>
    <p>
        }
    </p>
    <p>
        }
    </p>
</div>
<p>
    Créons la classe RequestContext.
</p>
<div>
    <p>
        import java.util.HashMap;
    </p>
    <p>
        import java.util.Map;
    </p>
    <p>
        public class RequestContext {
    </p>
    <p>
        private String requestUri;
    </p>
    <p>
        private Map &lt; String, String[] &gt; requestMap;
    </p>
    <p>
        private Map &lt; String, Object &gt; responseMap;
    </p>
    <p>
        public RequestContext() {
    </p>
    <p>
        requestUri = null;
    </p>
    <p>
        requestMap = new HashMap &lt; String, String[] &gt; ();
    </p>
    <p>
        responseMap = new HashMap &lt; String, Object &gt; ();
    </p>
    <p>
        }
    </p>
    <p>
        public RequestContext(String requestUri, Map &lt; String, String[] &gt;
        requestMap) {
    </p>
    <p>
        this.requestUri = requestUri;
    </p>
    <p>
        this.requestMap = requestMap;
    </p>
    <p>
        this.responseMap = new HashMap &lt; String, Object &gt; ();
    </p>
    <p>
        }
    </p>
    <p>
        public String getParameter(String param) {
    </p>
    <p>
        String[] val = null;
    </p>
    <p>
        if (param != null) {
    </p>
    <p>
        val = requestMap.get(param);
    </p>
    <p>
        }
    </p>
    <p>
        return val[0];
    </p>
    <p>
        }
    </p>
    <p>
        public void setAttribute(String param, Object value) {
    </p>
    <p>
        responseMap.put(param, value);
    </p>
    <p>
        }
    </p>
    <p>
        public String getRequestUri() {
    </p>
    <p>
        return requestUri;
    </p>
    <p>
        }
    </p>
    <p>
        public Map &lt; String, String[] &gt; getRequestMap() {
    </p>
    <p>
        return requestMap;
    </p>
    <p>
        }
    </p>
    <p>
        public Map &lt; String, Object &gt; getResponseMap() {
    </p>
    <p>
        return responseMap;
    </p>
    <p>
        }
    </p>
    <p>
        }
    </p>
</div>
<p>
    Étape 4 : Il est temps de créer FrontController.java.
</p>
<div>
    <p>
        import javax.servlet.ServletException;
    </p>
    <p>
        import javax.servlet.http.HttpServlet;
    </p>
    <p>
        import javax.servlet.http.HttpServletRequest;
    </p>
    <p>
        import javax.servlet.http.HttpServletResponse;
    </p>
    <p>
        public class FrontController extends HttpServlet {
    </p>
    <p>
        private static final long serialVersionUID = 1 L;
    </p>
    <p>
        @Override
    </p>
    <p>
        protected void service(HttpServletRequest request, HttpServletResponse
        response)
    </p>
    <p>
        throws ServletException, IOException {
    </p>
    <p>
        String page = null;
    </p>
    <p>
        String view = null;
    </p>
    <p>
        Dispatcher dispatcher = null;
    </p>
    <p>
        RequestContext requestContext = null;
    </p>
    <p>
        ContextFactory contextFactory = null;
    </p>
    <p>
        ApplicationController applicationController = null;
    </p>
    <p>
        // plubbing code (security, authorization)
    </p>
    <p>
        // extracting data from protocol
    </p>
    <p>
        contextFactory = new ContextFactory();
    </p>
    <p>
        requestContext = contextFactory.getContextObject(request);
    </p>
    <p>
        applicationController = new ApplicationController();
    </p>
    <p>
        view = applicationController.process(requestContext);
    </p>
    <p>
        // binding data back to protocol
    </p>
    <p>
        contextFactory.bindContextObject(request, requestContext);
    </p>
    <p>
        page = applicationController.mapViewToPage(view);
    </p>
    <p>
        dispatcher = new Dispatcher();
    </p>
    <p>
        dispatcher.dispatch(request, response, page);
    </p>
    <p>
        }
    </p>
    <p>
        }
    </p>
</div>
<p>
    Étape 5: Créez la classe ApplicationController et les classes respectives
    requises pour illustrer ce modèle.
</p>
<div>
    <p>
        public class ApplicationController {
    </p>
    <p>
        public String process(RequestContext requestContext) {
    </p>
    <p>
        String view = null;
    </p>
    <p>
        Command command = null;
    </p>
    <p>
        CommandHelper commandHelper = null;
    </p>
    <p>
        commandHelper = new CommandHelper();
    </p>
    <p>
        command = commandHelper.getCommand(requestContext.getRequestUri());
    </p>
    <p>
        view = command.execute(requestContext);
    </p>
    <p>
        return view;
    </p>
    <p>
        }
    </p>
    <p>
        public String mapViewToPage(String view) {
    </p>
    <p>
        String page = null;
    </p>
    <p>
        if (view != null) {
    </p>
    <p>
        page = "viewStudent.jsp";
    </p>
    <p>
        }
    </p>
    <p>
        return page;
    </p>
    <p>
        }
    </p>
    <p>
        }
    </p>
    <p>
        public class CommandHelper {
    </p>
    <p>
        public Command getCommand(String uri) {
    </p>
    <p>
        Command command = null;
    </p>
    <p>
        if (uri.contains("studentView.do")) {
    </p>
    <p>
        command = new StudentViewCommand();
    </p>
    <p>
        }
    </p>
    <p>
        return command;
    </p>
    <p>
        }
    </p>
    <p>
        }
    </p>
    <p>
        public class Dispatcher {
    </p>
    <p>
        public void dispatch(HttpServletRequest request, HttpServletResponse
        response, String page) {
    </p>
    <p>
        RequestDispatcher rd = null;
    </p>
    <p>
        rd = request.getRequestDispatcher(page);
    </p>
    <p>
        try {
    </p>
    <p>
        rd.forward(request, response);
    </p>
    <p>
        } catch (ServletException e) {
    </p>
    <p>
        e.printStackTrace();
    </p>
    <p>
        } catch (IOException e) {
    </p>
    <p>
        e.printStackTrace();
    </p>
    <p>
        }
    </p>
    <p>
        }
    </p>
    <p>
        }
    </p>
    <p>
        import java.util.Map;
    </p>
    <p>
        import java.util.Set;
    </p>
    <p>
        import javax.servlet.http.HttpServletRequest;
    </p>
    <p>
        public class HttpRequestMapper {
    </p>
    <p>
        public Map &lt; String, String[] &gt; extract(HttpServletRequest
        request) {
    </p>
    <p>
        Map &lt; String, String[] &gt; requestMap = null;
    </p>
    <p>
        requestMap = request.getParameterMap();
    </p>
    <p>
        return requestMap;
    </p>
    <p>
        }
    </p>
    <p>
        public void bind(HttpServletRequest request, Map &lt; String, Object
        &gt; responseMap) {
    </p>
    <p>
        Set &lt; String &gt; keys = null;
    </p>
    <p>
        keys = responseMap.keySet();
    </p>
    <p>
        for (String param: keys) {
    </p>
    <p>
        request.setAttribute(param, responseMap.get(param));
    </p>
    <p>
        }
    </p>
    <p>
        }
    </p>
    <p>
        }
    </p>
</div>
<p>
    Sortie :
</p>
<div>
    <p>
        http://localhost:8001/javaT/
    </p>
    <p>
        http://localhost:8001/javaT/studentView.do?id=10
    </p>
    <p>
        browser :
    </p>
    <p>
        Student Id : 100
    </p>
    <p>
        Student Name : Ramesh
    </p>
</div>
<h4>
    Conséquences
</h4>
<p>
    o Améliore la modularité
</p>
<p>
    o Améliore la réutilisabilité
</p>
<p>
    o Améliore l'extensibilité
</p>
<h1 id="title3">
    Business Tier
</h1>
<h2>
    <a name="_Toc18765278">Business Delegate Design Pattern</a>
</h2>
<h4>
    Problem
</h4>
<p>
    Vous souhaitez masquer les clients de la complexité de la communication à
    distance avec les composants de service métier.
</p>
<h4>
    Motivation
</h4>
<p>
    o Vous souhaitez accéder aux composants de niveau métier à partir de vos
    composants et clients présentation, tels que les périphériques, les
    services Web et les clients enrichis.
</p>
<p>
    o Vous souhaitez minimiser le couplage entre les clients et les services
    métier, masquant ainsi les détails d'implémentation sous-jacents du
    service, tels que la recherche et l'accès.
</p>
<p>
    o Vous voulez éviter une invocation inutile de services distants.
</p>
<p>
    o Vous souhaitez traduire les exceptions réseau en exceptions d'application
    ou utilisateur.
</p>
<p>
    o Vous souhaitez masquer les détails des tentatives de création de service,
    de reconfiguration et d'appel des clients.
</p>
<h4>
    Solution
</h4>
<p>
    Utilisez Business Delegate pour encapsuler l’accès à un service
    professionnel. Le délégué commercial masque les détails d'implémentation du
    service métier, tels que les mécanismes de recherche et d'accès.
</p>
<h4>
    Structure
</h4>
<p align="center">
    <img
        width="576"
        height="238"
        src="img/designPatternJee/image022.jpg"
    />
</p>
<p align="center">
    Figure 9 : Diagramme de classe - Business Delegate DP
</p>
<p align="center">
    <img
        width="576"
        height="487"
        src="img/designPatternJee/image023.png"
    />
</p>
<p align="center">
    Figure 10 : Diagramme de séquence
</p>
<h4>
    Participants
</h4>
<p>
    BusinessDelegate - Le rôle de BusinessDelegate est d’assurer le contrôle et
    la protection du service métier.
</p>
<p>
    ServiceLocator - ServiceLocator encapsule les détails d'implémentation de
    la localisation d'un composant BusinessService.
</p>
<p>
    BusinessService - BusinessService est un composant de niveau métier, tel
    qu'un bean enterprise, auquel le client a accès.
</p>
<p>
    Client - Le client peut être un code JSP, un servlet ou une interface
    utilisateur.
</p>
<h4>
    Implémentation
</h4>
<p>
    Étape 1 : Créer une interface BusinessService
</p>
<p>
    Implémentations de services d'interface professionnelle telles que
    JMSService et EJBService.
</p>
<div>
    <p>
        public interface BusinessService {
    </p>
    <p>
        void doProcessing();
    </p>
    <p>
        }
    </p>
</div>
<p>
    Étape 2 : Créez des classes de service concrètes
</p>
<div>
    <p>
        public class EJBService implements BusinessService {
    </p>
    <p>
        @Override
    </p>
    <p>
        public void doProcessing() {
    </p>
    <p>
        System.out.println("EJBService is now processing");
    </p>
    <p>
        }
    </p>
    <p>
        }
    </p>
    <p>
        //This is Service JMS implementation.
    </p>
    <p>
        public class JMSService implements BusinessService {
    </p>
    <p>
        @Override
    </p>
    <p>
        public void doProcessing() {
    </p>
    <p>
        System.out.println("JMSService is now processing");
    </p>
    <p>
        }
    </p>
    <p>
        }
    </p>
    <p>
        //Service Email implementation.
    </p>
    <p>
        public class EmailService implements BusinessService {
    </p>
    <p>
        @Override
    </p>
    <p>
        public void doProcessing() {
    </p>
    <p>
        System.out.println("EmailService is now processing");
    </p>
    <p>
        }
    </p>
    <p>
        }
    </p>
</div>
<p>
    Étape 3 : Créer un service de recherche d'entreprise
</p>
<p>
    Classe permettant d'effectuer des recherches de service.
</p>
<p>
    Cette classe fait office de ServiceLocator qui encapsule les détails
    d'implémentation de la localisation des composants BusinessService.
</p>
<div>
    <p>
        public class BusinessLookup {
    </p>
    <p>
        private EjbService ejbService;
    </p>
    <p>
        private JmsService jmsService;
    </p>
    <p>
        private EmailService emailService;
    </p>
    <p>
        /**
    </p>
    <p>
        * @param serviceType
    </p>
    <p>
        * Type of service instance to be returned.
    </p>
    <p>
        * @return Service instance.
    </p>
    <p>
        */
    </p>
    <p>
        public BusinessService getBusinessService(ServiceType serviceType) {
    </p>
    <p>
        if (serviceType.equals(ServiceType.EJB)) {
    </p>
    <p>
        return ejbService;
    </p>
    <p>
        } else if (serviceType.equals(ServiceType.JMS)) {
    </p>
    <p>
        return jmsService;
    </p>
    <p>
        } else {
    </p>
    <p>
        return emailService;
    </p>
    <p>
        }
    </p>
    <p>
        }
    </p>
    <p>
        public void setJmsService(JmsService jmsService) {
    </p>
    <p>
        this.jmsService = jmsService;
    </p>
    <p>
        }
    </p>
    <p>
        public void setEjbService(EjbService ejbService) {
    </p>
    <p>
        this.ejbService = ejbService;
    </p>
    <p>
        }
    </p>
    <p>
        public void setEmailService(EmailService emailService) {
    </p>
    <p>
        this.emailService = emailService;
    </p>
    <p>
        }
    </p>
    <p>
        }
    </p>
</div>
<p>
    Étape 4 : Créer un Business delegate
</p>
<div>
    <p>
        public class BusinessDelegate {
    </p>
    <p>
        private BusinessLookup lookupService;
    </p>
    <p>
        private BusinessService businessService;
    </p>
    <p>
        private ServiceType serviceType;
    </p>
    <p>
        public void setLookupService(BusinessLookup businessLookup) {
    </p>
    <p>
        this.lookupService = businessLookup;
    </p>
    <p>
        }
    </p>
    <p>
        public void setServiceType(ServiceType serviceType) {
    </p>
    <p>
        this.serviceType = serviceType;
    </p>
    <p>
        }
    </p>
    <p>
        public void doTask() {
    </p>
    <p>
        businessService = lookupService.getBusinessService(serviceType);
    </p>
    <p>
        businessService.doProcessing();
    </p>
    <p>
        }
    </p>
    <p>
        }
    </p>
    <p>
        Enumeration of service types
    </p>
    <p>
        public enum ServiceType {
    </p>
    <p>
        EJB, JMS,EMAIL;
    </p>
    <p>
        }
    </p>
</div>
<p>
    Étape 5 : Créer un client. Le client utilise BusinessDelegate pour appeler
    le niveau métier
</p>
<div>
    <p>
        public class Client {
    </p>
    <p>
        private BusinessDelegate businessDelegate;
    </p>
    <p>
        public Client(BusinessDelegate businessDelegate) {
    </p>
    <p>
        this.businessDelegate = businessDelegate;
    </p>
    <p>
        }
    </p>
    <p>
        public void doTask() {
    </p>
    <p>
        businessDelegate.doTask();
    </p>
    <p>
        }
    </p>
    <p>
        }
    </p>
</div>
<p>
    Étape 6 : Utilisez les classes BusinessDelegate et Client pour illustrer le
    modèle de délégué d’entreprise.
</p>
<div>
    <p>
        public class App {
    </p>
    <p>
        /**
    </p>
    <p>
        * Program entry point.
    </p>
    <p>
        *
    </p>
    <p>
        * @param args command line args
    </p>
    <p>
        */
    </p>
    <p>
        public static void main(String[] args) {
    </p>
    <p>
        BusinessDelegate businessDelegate = new BusinessDelegate();
    </p>
    <p>
        BusinessLookup businessLookup = new BusinessLookup();
    </p>
    <p>
        businessLookup.setEjbService(new EjbService());
    </p>
    <p>
        businessLookup.setJmsService(new JmsService());
    </p>
    <p>
        businessLookup.setEmailService(new EmailService());
    </p>
    <p>
        businessDelegate.setLookupService(businessLookup);
    </p>
    <p>
        businessDelegate.setServiceType(ServiceType.EJB);
    </p>
    <p>
        Client client = new Client(businessDelegate);
    </p>
    <p>
        client.doTask();
    </p>
    <p>
        businessDelegate.setServiceType(ServiceType.JMS);
    </p>
    <p>
        client.doTask();
    </p>
    <p>
        businessDelegate.setServiceType(ServiceType.EMAIL);
    </p>
    <p>
        client.doTask();
    </p>
    <p>
        }
    </p>
    <p>
        }
    </p>
</div>
<h4>
    Applicabilité
</h4>
<p>
    Utilisez le modèle de délégué d’affaires lorsque
</p>
<p>
    o Vous voulez un couplage lâche entre les niveaux présentation et métier
</p>
<p>
    o Vous souhaitez orchestrer des appels vers plusieurs services métier
</p>
<p>
    o Vous voulez encapsuler des recherches de service et des appels de service
</p>
<h2>
    <a name="_Toc18765279">Service Locator Design Pattern</a>
</h2>
<h4>
    Problem
</h4>
<p>
    Vous souhaitez localiser de manière transparente les composants et les
    services de l'entreprise de manière uniforme.
</p>
<h4>
    Motivation
</h4>
<p>
    o Vous souhaitez utiliser l'API JNDI pour rechercher et utiliser des
    composants métier, tels que des beans beans enterprise et des composants
    JMS, et des services tels que des sources de données.
</p>
<p>
    o Vous souhaitez centraliser et réutiliser l'implémentation de mécanismes
    de recherche pour les clients d'applications J2EE.
</p>
<p>
    o Vous souhaitez encapsuler les dépendances des fournisseurs pour les
    implémentations de registre et masquer la dépendance et la complexité des
    clients.
</p>
<p>
    o Vous souhaitez éviter une surcharge de performances liée à la création
    initiale du contexte et aux recherches de service.
</p>
<p>
    o Vous souhaitez rétablir une connexion à une instance de bean entreprise
    consultée précédemment, à l'aide de son objet Handle.
</p>
<h4>
    Solution
</h4>
<p>
    Utilisez un localisateur de services pour implémenter et encapsuler la
    recherche de services et de composants. Un localisateur de service masque
    les détails d'implémentation du mécanisme de recherche et encapsule les
    dépendances associées.
</p>
<p>
    Les clients d'application peuvent réutiliser le localisateur de services
    pour réduire la complexité du code, fournir un point de contrôle unique et
    améliorer les performances en fournissant une fonction de mise en cache.
</p>
<h4>
    Structure
</h4>
<p align="center">
    <img
        width="451"
        height="378"
        src="img/designPatternJee/image024.png"
    />
</p>
<p align="center">
    Figure 11 : Diagramme de classe - Service Locator DP
</p>
<p align="center">
    <img
        width="576"
        height="436"
        src="img/designPatternJee/image026.jpg"
    />
</p>
<p align="center">
    Figure 12 : Diagramme de séquence
</p>
<h4>
    Participants
</h4>
<p>
    Client - Le client représente un client du localisateur de service qui doit
    localiser et accéder à un composant ou à un service du niveau métier ou
    d'intégration.
</p>
<p>
    ServiceLocator - ServiceLocator encapsule les services de recherche d'API
    (attribution de noms), les dépendances des fournisseurs, les complexités de
    la recherche et la création d'objet métier, et fournit une interface simple
    aux clients. Cela réduit la complexité du client et augmente la
    réutilisation.
</p>
<p>
    Cache - Cache représente un ServiceLocator facultatif destiné à conserver
    les références précédemment consultées. L'utilisation du cache a pour seul
    objectif d'optimiser ServiceLocator en réduisant les recherches
    redondantes.
</p>
<p>
    InitialContext - L'objet InitialContext est le point de départ du processus
    de recherche et de création. Les fournisseurs de services fournissent
    l'objet de contexte, qui varie en fonction du type de cible recherchée par
    ServiceLocator.
</p>
<p>
    Target - La cible représente le service ou le composant, dans les niveaux
    métier ou d'intégration, que le client recherche à l'aide de
    ServiceLocator.
</p>
<p>
    RegistryService - RegistryService représente l'implémentation du registre
    contenant les références aux services ou composants enregistrés en tant que
    fournisseurs de services pour les clients.
</p>
<h4>
    Implémentation
</h4>
<p>
    Étape 1 : C'est l'interface de service parent que nous utiliserons pour
    créer nos services. Tous les services auront un nom de service, un
    identifiant unique et un workflow d'exécution.
</p>
<div>
    <p>
        public interface Service {
    </p>
    <p>
        /*
    </p>
    <p>
        * The human readable name of the service
    </p>
    <p>
        */
    </p>
    <p>
        String getName();
    </p>
    <p>
        /*
    </p>
    <p>
        * Unique ID of the particular service
    </p>
    <p>
        */
    </p>
    <p>
        int getId();
    </p>
    <p>
        /*
    </p>
    <p>
        * The workflow method that defines what this service does
    </p>
    <p>
        */
    </p>
    <p>
        void execute();
    </p>
    <p>
        }
    </p>
</div>
<p>
    Étape 2 : Il s'agit d'une implémentation de service unique d'un exemple de
    service. C'est le service réel qui traitera la demande. La référence de ce
    service doit être examinée dans le serveur JNDI pouvant être défini dans le
    descripteur de déploiement web.xml.
</p>
<div>
    <p>
        public class ServiceImpl implements Service {
    </p>
    <p>
        private final String serviceName;
    </p>
    <p>
        private final int id;
    </p>
    <p>
        /**
    </p>
    <p>
        * Constructor
    </p>
    <p>
        */
    </p>
    <p>
        public ServiceImpl(String serviceName) {
    </p>
    <p>
        // set the service name
    </p>
    <p>
        this.serviceName = serviceName;
    </p>
    <p>
        // Generate a random id to this service object
    </p>
    <p>
        this.id = (int) Math.floor(Math.random() * 1000) + 1;
    </p>
    <p>
        }
    </p>
    <p>
        @Override
    </p>
    <p>
        public String getName() {
    </p>
    <p>
        return serviceName;
    </p>
    <p>
        }
    </p>
    <p>
        @Override
    </p>
    <p>
        public int getId() {
    </p>
    <p>
        return id;
    </p>
    <p>
        }
    </p>
    <p>
        @Override
    </p>
    <p>
        public void execute() {
    </p>
    <p>
        System.out.println("Service " + getName() + " is now executing with id
        " + getId());
    </p>
    <p>
        }
    </p>
    <p>
        }
    </p>
</div>
<p>
    Étape 3 : Créez InitialContext pour la recherche JNDI.
</p>
<p>
    Pour la recherche JNDI des services à partir du fichier web.xml.
    Correspondra au nom du service demandé et renverra un objet de service
    nouvellement créé avec le nom.
</p>
<div>
    <p>
        public class InitContext {
    </p>
    <p>
        /**
    </p>
    <p>
        * Perform the lookup based on the service name. The returned object
        will need to be casted into a
    </p>
    <p>
        * {@link Service}
    </p>
    <p>
        *
    </p>
    <p>
        * @param serviceName a string
    </p>
    <p>
        * @return an {@link Object}
    </p>
    <p>
        */
    </p>
    <p>
        public Object lookup(String serviceName) {
    </p>
    <p>
        if (serviceName.equals("jndi/serviceA")) {
    </p>
    <p>
        System.out.println("Looking up service A and creating new service for
        A");
    </p>
    <p>
        return new ServiceImpl("jndi/serviceA");
    </p>
    <p>
        } else if (serviceName.equals("jndi/serviceB")) {
    </p>
    <p>
        System.out.println("Looking up service B and creating new service for
        B");
    </p>
    <p>
        return new ServiceImpl("jndi/serviceB");
    </p>
    <p>
        } else {
    </p>
    <p>
        return null;
    </p>
    <p>
        }
    </p>
    <p>
        }
    </p>
    <p>
        }
    </p>
</div>
<p>
    Étape 4 : Créer un cache.
</p>
<p>
    L'implémentation de cache de service qui mettra en cache les services en
    cours de création. Sur le premier hit, le cache sera vide et ainsi tout
    service demandé sera créé à nouveau puis placer dans la carte du cache.
    Lors du prochain hit, si le même nom de service était demandé, il serait
    renvoyé du cache.
</p>
<div>
    <p>
        public class ServiceCache {
    </p>
    <p>
        private final Map&lt;String, Service&gt; serviceCache;
    </p>
    <p>
        public ServiceCache() {
    </p>
    <p>
        serviceCache = new HashMap&lt;&gt;();
    </p>
    <p>
        }
    </p>
    <p>
        /**
    </p>
    <p>
        * Get the service from the cache. null if no service is found matching
        the name
    </p>
    <p>
        *
    </p>
    <p>
        * @param serviceName a string
    </p>
    <p>
        * @return {@link Service}
    </p>
    <p>
        */
    </p>
    <p>
        public Service getService(String serviceName) {
    </p>
    <p>
        Service cachedService = null;
    </p>
    <p>
        for (String serviceJndiName : serviceCache.keySet()) {
    </p>
    <p>
        if (serviceJndiName.equals(serviceName)) {
    </p>
    <p>
        cachedService = serviceCache.get(serviceJndiName);
    </p>
    <p>
        System.out.println("(cache call) Fetched service " +
        cachedService.getName() + "("
    </p>
    <p>
        + cachedService.getId() + ") from cache... !");
    </p>
    <p>
        }
    </p>
    <p>
        }
    </p>
    <p>
        return cachedService;
    </p>
    <p>
        }
    </p>
    <p>
        /**
    </p>
    <p>
        * Adds the service into the cache map
    </p>
    <p>
        *
    </p>
    <p>
        * @param newService a {@link Service}
    </p>
    <p>
        */
    </p>
    <p>
        public void addService(Service newService) {
    </p>
    <p>
        serviceCache.put(newService.getName(), newService);
    </p>
    <p>
        }
    </p>
    <p>
        }
    </p>
</div>
<p>
    Étape 5 : Créer un localisateur de services.
</p>
<p>
    Le module de localisation de service va chercher le service dans le cache,
    sinon il crée un nouveau service et met à jour le cache.
</p>
<div>
    <p>
        public final class ServiceLocator {
    </p>
    <p>
        private static ServiceCache serviceCache = new ServiceCache();
    </p>
    <p>
        private ServiceLocator() {
    </p>
    <p>
        }
    </p>
    <p>
        public static Service getService(String serviceJndiName) {
    </p>
    <p>
        Service serviceObj = serviceCache.getService(serviceJndiName);
    </p>
    <p>
        if (serviceObj != null) {
    </p>
    <p>
        return serviceObj;
    </p>
    <p>
        } else {
    </p>
    <p>
        /*
    </p>
    <p>
        * If we are unable to retrive anything from cache, then lookup the
        service and add it in the
    </p>
    <p>
        * cache map
    </p>
    <p>
        */
    </p>
    <p>
        InitContext ctx = new InitContext();
    </p>
    <p>
        serviceObj = (Service) ctx.lookup(serviceJndiName);
    </p>
    <p>
        if (serviceObj != null) { // Only cache a service if it actually exists
    </p>
    <p>
        serviceCache.addService(serviceObj);
    </p>
    <p>
        }
    </p>
    <p>
        return serviceObj;
    </p>
    <p>
        }
    </p>
    <p>
        }
    </p>
    <p>
        }
    </p>
</div>
<p>
    Étape 6 : Testons ce modèle en utilisant la méthode principale.
</p>
<div>
    <p>
        public class TestServiceLocatorPattern{
    </p>
    <p>
        /**
    </p>
    <p>
        * Program entry point
    </p>
    <p>
        *
    </p>
    <p>
        * @param args command line args
    </p>
    <p>
        */
    </p>
    <p>
        public static void main(String[] args) {
    </p>
    <p>
        Service service = ServiceLocator.getService("jndi/serviceA");
    </p>
    <p>
        service.execute();
    </p>
    <p>
        service = ServiceLocator.getService("jndi/serviceB");
    </p>
    <p>
        service.execute();
    </p>
    <p>
        service = ServiceLocator.getService("jndi/serviceA");
    </p>
    <p>
        service.execute();
    </p>
    <p>
        service = ServiceLocator.getService("jndi/serviceA");
    </p>
    <p>
        service.execute();
    </p>
    <p>
        }
    </p>
    <p>
        }
    </p>
</div>
<h4>
    Applicabilité
</h4>
<p>
    Le modèle de localisateur de service est applicable chaque fois que nous
    souhaitons localiser / récupérer divers services à l'aide de JNDI, qui est
    généralement une recherche redondante et coûteuse.
</p>
<p>
    Le modèle de localisateur de service répond à cette recherche coûteuse en
    utilisant des techniques de mise en cache, c'est-à-dire. Pour la toute
    première fois qu'un service particulier est demandé, le localisateur de
    services recherche dans JNDI, récupère le service correspondant, puis met
    en cache cet objet de service. Désormais, des recherches supplémentaires du
    même service via Service Locator sont effectuées dans son cache, ce qui
    améliore considérablement les performances de l'application.
</p>
<h4>
    Conséquences
</h4>
<p>
    o Complexité des résumés
</p>
<p>
    o Fournit un accès de service uniforme aux clients
</p>
<p>
    o Facilite l'ajout de composants métier EJB
</p>
<p>
    o Améliore les performances du réseau
</p>
<p>
    o Améliore les performances du client en mettant en cache
</p>
<h2>
    <a name="_Toc18765280">Transfer Object Assembler Design Pattern</a>
</h2>
<h4>
    Problem
</h4>
<p>
    Vous souhaitez obtenir un modèle d'application qui agrège les objets de
    transfert de plusieurs composants métier.
</p>
<h4>
    Motivation
</h4>
<p>
    o Vous souhaitez encapsuler la logique métier de manière centralisée et
    empêcher sa mise en œuvre dans le client.
</p>
<p>
    o Vous souhaitez réduire les appels réseau aux objets distants lors de la
    création d'une représentation de données du modèle d'objet de niveau
    métier.
</p>
<p>
    o Vous souhaitez créer un modèle complexe à remettre au client à des fins
    de présentation.
</p>
<p>
    o Vous souhaitez que les clients soient indépendants de la complexité de la
    mise en œuvre du modèle et vous souhaitez réduire le couplage entre le
    client et les composants métier.
</p>
<h4>
    Solution
</h4>
<p>
    Utilisez un assembleur d'objets de transfert pour créer un modèle
    d'application en tant qu'objet de transfert composite. L'assistant de
    transfert d'objets regroupe plusieurs objets de transfert provenant de
    divers services et composants métier et les renvoie au client.
</p>
<p align="center">
    <img
        width="576"
        height="331"
        src="img/designPatternJee/image028.jpg"
    />
</p>
<p align="center">
    Figure 13 : Diagramme de classe - Transfer Object DP
</p>
<p align="center">
    <img
        width="576"
        height="283"
        src="img/designPatternJee/image030.jpg"
    />
</p>
<p align="center">
    Figure 14 : Diagramme de sequence
</p>
<h4>
    Participants
</h4>
<p>
    Client - Le client appelle TransferObjectAssembler pour obtenir les données
    de modèle d'application. Le client peut être un composant du niveau
    présentation ou une façade de session fournissant la couche d'accès distant
    aux clients accédant à TransferObjectAssembler.
</p>
<p>
    TransferObjectAssembler - TransferObjectAssembler est la classe principale
    de ce modèle. TransferObjectAssembler construit un nouvel objet de
    transfert composite en fonction des exigences de l'application lorsque le
    client demande les données de modèle d'application.
</p>
<p>
    ApplicationModel - L'objet ApplicationModel est un objet de transfert
    composite construit par TransferObjectAssembler et renvoyé au client.
</p>
<p>
    BusinessObject - BusinessObject représente un objet métier qui fournit des
    objets de transfert à TransferObjectAssembler pour l'assemblage du modèle
    d'application.
</p>
<p>
    SessionFacade - SessionFacade représente une façade de session fournissant
    une partie des données nécessaires à la construction de l'objet de
    transfert ApplicationModel.
</p>
<p>
    DataAccessObject - DataAccessObject représente un objet d'accès aux
    données, utilisé lorsque TransferObjectAssembler doit obtenir des données
    directement à partir du magasin persistant.
</p>
<p>
    Service - Le service est un objet de service arbitraire, y compris un
    service d'application situé dans la couche de gestion, qui fournit les
    données nécessaires à la construction de l'objet ApplicationModel.
</p>
<h4>
    Implémentation
</h4>
<p>
    Étape 1 : Créer une classe d'objet de transfert composite
</p>
<div>
    <p>
        public class ProjectDetailsData {
    </p>
    <p>
        private ProjectTO projectData;
    </p>
    <p>
        private ProjectManagerTO projectManagerData;
    </p>
    <p>
        private Collection &lt; TaskResourceTO &gt; listOfTasks;
    </p>
    <p>
        public ProjectDetailsData(ProjectTO projectData, ProjectManagerTO
        projectManagerData,
    </p>
    <p>
        Collection &lt; TaskResourceTO &gt; listOfTasks) {
    </p>
    <p>
        super();
    </p>
    <p>
        this.projectData = projectData;
    </p>
    <p>
        this.projectManagerData = projectManagerData;
    </p>
    <p>
        this.listOfTasks = listOfTasks;
    </p>
    <p>
        }
    </p>
    <p>
        }
    </p>
</div>
<p>
    Étape 2 : Créez la ressource TO, la tâche TO, les projets ProjectTO et
    ProjectManager TO pour transférer des classes d'objets.
</p>
<div>
    <p>
        public class ResourceTO {
    </p>
    <p>
        private String resourceId;
    </p>
    <p>
        private String resourceName;
    </p>
    <p>
        private String resourceEmail;
    </p>
    <p>
        public String getResourceId() {
    </p>
    <p>
        return resourceId;
    </p>
    <p>
        }
    </p>
    <p>
        public void setResourceId(String resourceId) {
    </p>
    <p>
        this.resourceId = resourceId;
    </p>
    <p>
        }
    </p>
    <p>
        public String getResourceName() {
    </p>
    <p>
        return resourceName;
    </p>
    <p>
        }
    </p>
    <p>
        public void setResourceName(String resourceName) {
    </p>
    <p>
        this.resourceName = resourceName;
    </p>
    <p>
        }
    </p>
    <p>
        public String getResourceEmail() {
    </p>
    <p>
        return resourceEmail;
    </p>
    <p>
        }
    </p>
    <p>
        public void setResourceEmail(String resourceEmail) {
    </p>
    <p>
        this.resourceEmail = resourceEmail;
    </p>
    <p>
        }
    </p>
    <p>
        }
    </p>
    <p>
        public class TaskTO {
    </p>
    <p>
        private String projectId;
    </p>
    <p>
        private String taskId;
    </p>
    <p>
        private String name;
    </p>
    <p>
        private String description;
    </p>
    <p>
        private Date startDate;
    </p>
    <p>
        private Date endDate;
    </p>
    <p>
        private String assignedResourceId;
    </p>
    <p>
        public String getProjectId() {
    </p>
    <p>
        return projectId;
    </p>
    <p>
        }
    </p>
    <p>
        public void setProjectId(String projectId) {
    </p>
    <p>
        this.projectId = projectId;
    </p>
    <p>
        }
    </p>
    <p>
        public String getTaskId() {
    </p>
    <p>
        return taskId;
    </p>
    <p>
        }
    </p>
    <p>
        public void setTaskId(String taskId) {
    </p>
    <p>
        this.taskId = taskId;
    </p>
    <p>
        }
    </p>
    <p>
        public String getName() {
    </p>
    <p>
        return name;
    </p>
    <p>
        }
    </p>
    <p>
        public void setName(String name) {
    </p>
    <p>
        this.name = name;
    </p>
    <p>
        }
    </p>
    <p>
        public String getDescription() {
    </p>
    <p>
        return description;
    </p>
    <p>
        }
    </p>
    <p>
        public void setDescription(String description) {
    </p>
    <p>
        this.description = description;
    </p>
    <p>
        }
    </p>
    <p>
        public Date getStartDate() {
    </p>
    <p>
        return startDate;
    </p>
    <p>
        }
    </p>
    <p>
        public void setStartDate(Date startDate) {
    </p>
    <p>
        this.startDate = startDate;
    </p>
    <p>
        }
    </p>
    <p>
        public Date getEndDate() {
    </p>
    <p>
        return endDate;
    </p>
    <p>
        }
    </p>
    <p>
        public void setEndDate(Date endDate) {
    </p>
    <p>
        this.endDate = endDate;
    </p>
    <p>
        }
    </p>
    <p>
        public String getAssignedResourceId() {
    </p>
    <p>
        return assignedResourceId;
    </p>
    <p>
        }
    </p>
    <p>
        public void setAssignedResourceId(String assignedResourceId) {
    </p>
    <p>
        this.assignedResourceId = assignedResourceId;
    </p>
    <p>
        }
    </p>
    <p>
        }
    </p>
    <p>
        public class TaskResourceTO {
    </p>
    <p>
        private String projectId;
    </p>
    <p>
        private String taskId;
    </p>
    <p>
        private String name;
    </p>
    <p>
        private String description;
    </p>
    <p>
        private Date startDate;
    </p>
    <p>
        private Date endDate;
    </p>
    <p>
        private TaskResourceTO assignedResource;
    </p>
    <p>
        public String getProjectId() {
    </p>
    <p>
        return projectId;
    </p>
    <p>
        }
    </p>
    <p>
        public void setProjectId(String projectId) {
    </p>
    <p>
        this.projectId = projectId;
    </p>
    <p>
        }
    </p>
    <p>
        public String getTaskId() {
    </p>
    <p>
        return taskId;
    </p>
    <p>
        }
    </p>
    <p>
        public void setTaskId(String taskId) {
    </p>
    <p>
        this.taskId = taskId;
    </p>
    <p>
        }
    </p>
    <p>
        public String getName() {
    </p>
    <p>
        return name;
    </p>
    <p>
        }
    </p>
    <p>
        public void setName(String name) {
    </p>
    <p>
        this.name = name;
    </p>
    <p>
        }
    </p>
    <p>
        public String getDescription() {
    </p>
    <p>
        return description;
    </p>
    <p>
        }
    </p>
    <p>
        public void setDescription(String description) {
    </p>
    <p>
        this.description = description;
    </p>
    <p>
        }
    </p>
    <p>
        public Date getStartDate() {
    </p>
    <p>
        return startDate;
    </p>
    <p>
        }
    </p>
    <p>
        public void setStartDate(Date startDate) {
    </p>
    <p>
        this.startDate = startDate;
    </p>
    <p>
        }
    </p>
    <p>
        public Date getEndDate() {
    </p>
    <p>
        return endDate;
    </p>
    <p>
        }
    </p>
    <p>
        public void setEndDate(Date endDate) {
    </p>
    <p>
        this.endDate = endDate;
    </p>
    <p>
        }
    </p>
    <p>
        public TaskResourceTO getAssignedResource() {
    </p>
    <p>
        return assignedResource;
    </p>
    <p>
        }
    </p>
    <p>
        public void setAssignedResource(TaskResourceTO assignedResource) {
    </p>
    <p>
        this.assignedResource = assignedResource;
    </p>
    <p>
        }
    </p>
    <p>
        }
    </p>
    <p>
        public class ProjectManagerTO {
    </p>
    <p>
        private String name;
    </p>
    <p>
        private String address;
    </p>
    <p>
        private String projects;
    </p>
    <p>
        public String getName() {
    </p>
    <p>
        return name;
    </p>
    <p>
        }
    </p>
    <p>
        public void setName(String name) {
    </p>
    <p>
        this.name = name;
    </p>
    <p>
        }
    </p>
    <p>
        public String getAddress() {
    </p>
    <p>
        return address;
    </p>
    <p>
        }
    </p>
    <p>
        public void setAddress(String address) {
    </p>
    <p>
        this.address = address;
    </p>
    <p>
        }
    </p>
    <p>
        public String getProjects() {
    </p>
    <p>
        return projects;
    </p>
    <p>
        }
    </p>
    <p>
        public void setProjects(String projects) {
    </p>
    <p>
        this.projects = projects;
    </p>
    <p>
        }
    </p>
    <p>
        }
    </p>
    <p>
        public class ProjectTO {
    </p>
    <p>
        private String projectId;
    </p>
    <p>
        private String projectName;
    </p>
    <p>
        private String projectDesc;
    </p>
    <p>
        public String getProjectId() {
    </p>
    <p>
        return projectId;
    </p>
    <p>
        }
    </p>
    <p>
        public void setProjectId(String projectId) {
    </p>
    <p>
        this.projectId = projectId;
    </p>
    <p>
        }
    </p>
    <p>
        public String getProjectName() {
    </p>
    <p>
        return projectName;
    </p>
    <p>
        }
    </p>
    <p>
        public void setProjectName(String projectName) {
    </p>
    <p>
        this.projectName = projectName;
    </p>
    <p>
        }
    </p>
    <p>
        public String getProjectDesc() {
    </p>
    <p>
        return projectDesc;
    </p>
    <p>
        }
    </p>
    <p>
        public void setProjectDesc(String projectDesc) {
    </p>
    <p>
        this.projectDesc = projectDesc;
    </p>
    <p>
        }
    </p>
    <p>
        }
    </p>
</div>
<p>
    Étape 3 : Implémentation de l'assembleur d'objets de transfert.
</p>
<div>
    <p>
        public class ProjectDetailsAssembler {
    </p>
    <p>
        public ProjectDetailsData getData(String projectId) {
    </p>
    <p>
        // Construct the composite transfer object
    </p>
    <p>
        // get project related information from database and set to
        ProjectDetailsData class object.
    </p>
    <p>
        ProjectTO projectData = new ProjectTO();
    </p>
    <p>
        // get ProjectManager info and add to ProjectDetailsData
    </p>
    <p>
        ProjectManagerTO projectManagerData = new ProjectManagerTO();
    </p>
    <p>
        // construct a new TaskResourceTO using Task and Resource data.
    </p>
    <p>
        //get the Resource details from database.
    </p>
    <p>
        // construct a list of TaskResourceTOs
    </p>
    <p>
        Collection &lt; TaskResourceTO &gt; listOfTasks = new ArrayList &lt;
        &gt; ();
    </p>
    <p>
        // Add Project Info to ProjectDetailsData
    </p>
    <p>
        // Add ProjectManager info to ProjectDetailsData
    </p>
    <p>
        ProjectDetailsData pData = new ProjectDetailsData(projectData,
        projectManagerData, listOfTasks);
    </p>
    <p>
        return pData;
    </p>
    <p>
        }
    </p>
    <p>
        }
    </p>
</div>
<h4>
    Conséquences
</h4>
<p>
    o Sépare la logique métier, simplifie la logique client
</p>
<p>
    o Réduit le couplage entre les clients et le modèle d'application
</p>
<p>
    o Améliore les performances du réseau
</p>
<p>
    o Améliore les performances du client
</p>
<p>
    o Peut introduire des données périmées
</p>
<p>
    o
</p>
<p>
    <strong></strong>
</p>
<h1 id="title4">
    Integration Tier
</h1>
<h2>
    <a name="_Toc18765282">Service Activator Design Pattern</a>
</h2>
<h4>
    Problem
</h4>
<p>
    Vous souhaitez appeler des services de manière asynchrone.
</p>
<h4>
    Motivation
</h4>
<p>
    o Vous souhaitez appeler des services métier, des POJO ou des composants
    EJB de manière asynchrone.
</p>
<p>
    o Vous souhaitez intégrer la publication / abonnement et la messagerie
    point à point pour activer les services de traitement asynchrone.
</p>
<p>
    o Vous souhaitez exécuter une tâche de gestion composée logiquement de
    plusieurs tâches.
</p>
<h4>
    Solution
</h4>
<p>
    Utilisez un activateur de service pour recevoir des demandes asynchrones et
    appeler un ou plusieurs services professionnels.
</p>
<p>
    Service Activator est implémenté en tant que service d'écoute et de
    délégation JMS capable d'écouter et de recevoir des messages JMS.
</p>
<h4>
    Structure
</h4>
<p align="center">
    <img
        width="576"
        height="277"
        src="img/designPatternJee/image032.jpg"
    />
</p>
<p align="center">
    Figure 15 : Diagramme de classe - Service Activator DP
</p>
<p align="center">
    <img
        width="576"
        height="338"
        src="img/designPatternJee/image034.jpg"
    />
</p>
<p align="center">
    Figure 16 : Diagramme de sequence
</p>
<h4>
    Participants
</h4>
<p>
    Client : le client est tout client de l'application qui doit appeler un
    service métier de manière asynchrone. Le client peut être n'importe quel
    type de composant d'application, tel qu'un composant POJO ou un composant
    EJB, capable de créer et d'envoyer des messages JMS.
</p>
<p>
    Request - La requête est l'objet de message créé par le client et envoyé à
    ServiceActivator à l'aide du middleware orienté message (MOM). Selon la
    spécification JMS, l'objet Request doit implémenter l'interface
    javax.jms.Message. L'API JMS fournit plusieurs types de message, tels que
    TextMessage, ObjectMessage, etc., qui peuvent être utilisés en tant
    qu'objets de requête en fonction du type de message que vous souhaitez
    envoyer.
</p>
<p>
    ServiceActivator - ServiceActivator est la classe principale du modèle. Il
    implémente l'interface javax.jms.MessageListener, définie par la
    spécification JMS. ServiceActivator implémente une méthode onMessage () qui
    est appelée lors de l'arrivée d'un nouveau message. ServiceActivator
    analyse le message (demande) pour déterminer ce qui doit être fait.
    ServiceActivator peut utiliser un localisateur de service pour rechercher
    ou créer des composants BusinessService.
</p>
<p>
    BusinessService - BusinessService est l'objet cible demandé au client pour
    effectuer un traitement asynchrone.
</p>
<p>
    Response - La réponse est un objet de message créé et envoyé par
    ServiceActivator ou par BusinessService. La réponse peut être un accusé de
    réception indiquant au client que la demande a été reçue. La réponse peut
    également être le résultat du traitement asynchrone.
</p>
<h4>
    Implémentation
</h4>
<p>
    Envisagez une application de traitement des commandes dans laquelle les
    clients achètent en ligne et dont le processus d’exécution se passe en
    arrière-plan. Dans certains cas, l'exécution des commandes peut être
    sous-traitée à un entrepôt tiers. Dans ce cas, la boutique en ligne doit
    appeler ces services d'exécution de manière asynchrone.
</p>
<p>
    Cet exemple illustre l'utilisation de la messagerie point à point (PTP)
    pour effectuer un traitement asynchrone. Toutefois, l’utilisation de la
    messagerie de publication / abonnement serait similaire, sauf que Topic est
    utilisé à la place d’une file d’attente. Le choix de la méthode à utiliser,
    PTP ou publication / souscription, dépend des exigences de l'entreprise et
    des applications, et sort donc du cadre de ce modèle.
</p>
<p>
    Étape 1 : Créer un activateur de service de commande.
</p>
<div>
    <p>
        public class OrderServiceActivator implements
    </p>
    <p>
        javax.jms.MessageListener {
    </p>
    <p>
        // Queue session and receiver: see JMS API for
    </p>
    <p>
        // details
    </p>
    <p>
        private QueueSession orderQueueSession;
    </p>
    <p>
        private QueueReceiver orderQueueReceiver;
    </p>
    <p>
        // Note: values should come from property files or
    </p>
    <p>
        // environment instead of hard coding.
    </p>
    <p>
        private String connFactoryName =
    </p>
    <p>
        "PendingOrdersQueueFactory";
    </p>
    <p>
        private String queueName = "PendingOrders";
    </p>
    <p>
        // use a service locator to locate administered
    </p>
    <p>
        // JMS components such as a Queue or a Queue
    </p>
    <p>
        // Connection factory
    </p>
    <p>
        private JMSServiceLocator serviceLocator;
    </p>
    <p>
        public OrderServiceActivator(String connFactoryName,
    </p>
    <p>
        String queueName) {
    </p>
    <p>
        super();
    </p>
    <p>
        this.connFactoryName = connFactoryName;
    </p>
    <p>
        this.queueName = queueName;
    </p>
    <p>
        startListener();
    </p>
    <p>
        }
    </p>
    <p>
        private void startListener() {
    </p>
    <p>
        try {
    </p>
    <p>
        serviceLocator = new JMSServiceLocator(connFactoryName);
    </p>
    <p>
        qConnFactory =
    </p>
    <p>
        serviceLocator.getQueueConnectionFactory();
    </p>
    <p>
        qConn = qConnFactory.createQueueConnection();
    </p>
    <p>
        // See JMS API for method usage and arguments
    </p>
    <p>
        orderQueueSession = qConn.createQueueSession(...);
    </p>
    <p>
        Queue ordersQueue =
    </p>
    <p>
        serviceLocator.getQueue(queueName);
    </p>
    <p>
        orderQueueReceiver =
    </p>
    <p>
        orderQueueSession.createReceiver(ordersQueue);
    </p>
    <p>
        orderQueueReceiver.setMessageListener(this);
    </p>
    <p>
        } catch (JMSException excp) {
    </p>
    <p>
        // handle error
    </p>
    <p>
        }
    </p>
    <p>
        }
    </p>
    <p>
        // The JMS API specifies the onMessage method in the
    </p>
    <p>
        // javax.jms.MessageListener interface.
    </p>
    <p>
        // This method is asynchronously invoked
    </p>
    <p>
        // when a message arrives on the Queue being
    </p>
    <p>
        // listened to by the ServiceActivator.
    </p>
    <p>
        // See JMS Specification and API for more details.
    </p>
    <p>
        public void onMessage(Message msg) {
    </p>
    <p>
        try {
    </p>
    <p>
        // parse Message msg. See JMS API for Message.
    </p>
    <p>
        ...
    </p>
    <p>
        // Invoke business method on an enterprise
    </p>
    <p>
        // bean using the bean's business delegate.
    </p>
    <p>
        // OrderProcessorDelegate is the business
    </p>
    <p>
        // delegate for OrderProcessor Session bean.
    </p>
    <p>
        // See Business Delegate pattern for details.
    </p>
    <p>
        OrderProcessorDelegate orderProcDeleg =
    </p>
    <p>
        new OrderProcessorDelegate();
    </p>
    <p>
        // Use data values from the parsed message to
    </p>
    <p>
        // invoke business method on bean via delegate
    </p>
    <p>
        orderProcDeleg.fulfillOrder(...);
    </p>
    <p>
        // send any acknowledgement here...
    </p>
    <p>
        }
    </p>
    <p>
        catch (JMSException jmsexcp) {
    </p>
    <p>
        // Handle JMSExceptions, if any
    </p>
    <p>
        } catch (Exception excp) {
    </p>
    <p>
        // Handle any other exceptions
    </p>
    <p>
        }
    </p>
    <p>
        }
    </p>
    <p>
        public void close() {
    </p>
    <p>
        try {
    </p>
    <p>
        // cleanup before closing
    </p>
    <p>
        orderQueueReceiver.setMessageListener(null);
    </p>
    <p>
        orderQueueSession.close();
    </p>
    <p>
        } catch (Exception excp) {
    </p>
    <p>
        // Handle exception - Failure to close
    </p>
    <p>
        }
    </p>
    <p>
        }
    </p>
    <p>
        }
    </p>
</div>
<p>
    Étape 2 : Façade de session en tant que client pour Service Activator.
</p>
<div>
    <p>
        public class OrderDispatcherFacade
    </p>
    <p>
        implements javax.ejb.SessionBean {
    </p>
    <p>
        ...
    </p>
    <p>
        // business method to create new Order
    </p>
    <p>
        public int createOrder(...) throws OrderException {
    </p>
    <p>
        // create new business order entity bean
    </p>
    <p>
        ...
    </p>
    <p>
        // successfully created Order. send Order to
    </p>
    <p>
        // asynchronous backend processing
    </p>
    <p>
        OrderSender orderSender = new OrderSender();
    </p>
    <p>
        orderSender.sendOrder(order);
    </p>
    <p>
        // close the sender, if done...
    </p>
    <p>
        orderSender.close();
    </p>
    <p>
        // other processing
    </p>
    <p>
        ...
    </p>
    <p>
        }
    </p>
    <p>
        }
    </p>
</div>
<p>
    Étape 3: OrderSender: utilisé pour envoyer les commandes en file d'attente.
</p>
<div>
    <p>
        public class OrderSender {
    </p>
    <p>
        // Queue session and sender: see JMS API for details
    </p>
    <p>
        private QueueSession orderQueueSession;
    </p>
    <p>
        private QueueSender orderQueueSender;
    </p>
    <p>
        // These values could come from some property files
    </p>
    <p>
        private String connFactoryName =
    </p>
    <p>
        "PendingOrdersQueueFactory";
    </p>
    <p>
        private String queueName = "PendingOrders";
    </p>
    <p>
        // use a service locator to locate administered
    </p>
    <p>
        // JMS components such as a Queue or a Queue.
    </p>
    <p>
        // Connection factory
    </p>
    <p>
        private JMSServiceLocator serviceLocator;
    </p>
    <p>
        ...
    </p>
    <p>
        // method to initialize and create queue sender
    </p>
    <p>
        private void createSender() {
    </p>
    <p>
        try {
    </p>
    <p>
        // using ServiceLocator and getting Queue
    </p>
    <p>
        // Connection Factory is similar to the
    </p>
    <p>
        // Service Activator code.
    </p>
    <p>
        serviceLocator = new JMSServiceLocator(connFactoryName);
    </p>
    <p>
        qConnFactory =
    </p>
    <p>
        serviceLocator.getQueueConnectionFactory();
    </p>
    <p>
        qConn = qConnFactory.createQueueConnection();
    </p>
    <p>
        // See JMS API for method usage and arguments
    </p>
    <p>
        orderQueueSession = qConn.createQueueSession(...);
    </p>
    <p>
        Queue ordersQueue =
    </p>
    <p>
        serviceLocator.getQueue(queueName);
    </p>
    <p>
        orderQueueSender =
    </p>
    <p>
        orderQueueSession.createSender(ordersQueue);
    </p>
    <p>
        catch (Exception excp) {
    </p>
    <p>
        // Handle exception - Failure to create sender
    </p>
    <p>
        }
    </p>
    <p>
        }
    </p>
    <p>
        // method to dispatch order to fulfillment service
    </p>
    <p>
        // for asynchronous processing
    </p>
    <p>
        public void sendOrder(Order newOrder) {
    </p>
    <p>
        // create a new Message to send Order object
    </p>
    <p>
        ObjectMessage objMessage =
    </p>
    <p>
        queueSession.createObjectMessage(order);
    </p>
    <p>
        // set object message properties and delivery
    </p>
    <p>
        // mode as required.
    </p>
    <p>
        // See JMS API for ObjectMessage
    </p>
    <p>
        // Set the Order into the object message
    </p>
    <p>
        objMessage.setObject(order);
    </p>
    <p>
        // send the message to the Queue
    </p>
    <p>
        orderQueueSender.send(objMessage);
    </p>
    <p>
        ...
    </p>
    <p>
        } catch (Exception e) {
    </p>
    <p>
        // Handle exceptions
    </p>
    <p>
        }
    </p>
    <p>
        ...
    </p>
    <p>
        }
    </p>
    <p>
        ...
    </p>
    <p>
        public void close() {
    </p>
    <p>
        try {
    </p>
    <p>
        // cleanup before closing
    </p>
    <p>
        orderQueueReceiver.setMessageListener(null);
    </p>
    <p>
        orderQueueSession.close();
    </p>
    <p>
        } catch (Exception excp) {
    </p>
    <p>
        // Handle exception - Failure to close
    </p>
    <p>
        }
    </p>
    <p>
        }
    </p>
    <p>
        }
    </p>
</div>
<h4>
    Applicabilité
</h4>
<p>
    o Certains cas d'utilisation de longue durée prennent beaucoup de temps. Au
    lieu de bloquer les utilisateurs, nous pouvons les exécuter de manière
    asynchrone.
</p>
<p>
    o JMS est un bon exemple de modèle d'activateur de service - JMS (Java
    Message Service) est une API qui permet de créer, d'envoyer et de lire des
    messages. Il fournit une communication fiable et asynchrone faiblement
    couplée.
</p>
<h4>
    Conséquences
</h4>
<p>
    o Intègre JMS dans les applications d'entreprise
</p>
<p>
    o Fournit un traitement asynchrone pour tout composant de niveau métier
</p>
<p>
    o Active l'écouteur JMS autonome
</p>`;