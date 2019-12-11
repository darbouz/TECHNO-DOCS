var testing = `<h1 id="title1">
   Introduction
</h1>
<p>
    Le test consiste à exécuter un programme ou une bibliothèque avec des
    entrées valides et non valides pour vérifier qu'il se comporte comme prévu
    dans toutes les situations. De nombreuses personnes exécutent leur
    application avec des entrées valides, mais cela prouve simplement qu’elle
    peut fonctionner dans des conditions contrôlées. Les tests ont pour but de
    casser l’application avec des données erronées et de montrer qu’elle est
    cassée. Les tests automatisés sont l'idée que les tests doivent être
    exécutés automatiquement et que les résultats doivent être évalués par des
    machines. Les processus de développement de logiciels modernes englobent
    tous les tests le plus tôt possible dans le cycle de développement.
</p>
<h1 id="title2">
    JUNIT
</h1>
<h2>
    <a name="_Toc19286110">Overview</a>
</h2>
<p>
    JUnit est l'un des frameworks de tests unitaires les plus populaires de
    l'écosystème Java. La version JUnit 5 contient un certain nombre
    d'innovations intéressantes, dans le but de prendre en charge les nouvelles
    fonctionnalités de Java 8 et versions ultérieures, ainsi que de permettre
    différents styles de test.
</p>
<h2>
    <a name="_Toc19286111">Maven dependencies</a>
</h2>
<p>
    Configurer JUnit 5.x.0 est assez simple, nous devons ajouter la dépendance
    suivante à notre pom.xml :
</p>
<p>
    &lt;dependency&gt;
</p>
<p>
    &lt;groupId&gt;org.junit.jupiter&lt;/groupId&gt;
</p>
<p>
    &lt;artifactId&gt;junit-jupiter-engine&lt;/artifactId&gt;
</p>
<p>
    &lt;version&gt;5.5.2&lt;/version&gt;
</p>
<p>
    &lt;scope&gt;test&lt;/scope&gt;
</p>
<p>
    &lt;/dependency&gt;
</p>
<p>
    Il est important de noter que cette version nécessite Java 8 pour
    fonctionner.
</p>
<p>
    De plus, il existe désormais un support direct pour l'exécution de tests
    unitaires sur la plate-forme JUnit dans Eclipse ainsi que dans IntelliJ.
    Vous pouvez bien sûr aussi exécuter des tests en utilisant l'objectif Maven
    Test.
</p>
<p>
    Par ailleurs, IntelliJ prend en charge JUnit 5 par défaut. Par conséquent,
    exécuter JUnit 5 sur IntelliJ est assez simple, il suffit de cliquer avec
    le bouton droit de la souris -&gt; Exécuter ou de Ctrl-Maj-F10.
</p>
<h2>
    <a name="_Toc19286112">Architecture</a>
</h2>
<p>
    JUnit 5 est composé de plusieurs modules différents issus de trois
    sous-projets différents :
</p>
<h3>
    <a name="_Toc19286113">JUnit Platform</a>
</h3>
<p>
    La plateforme est responsable du lancement des infrastructures de test sur
    la machine virtuelle Java. Il définit une interface stable et puissante
    entre JUnit et son client, telle que des outils de construction.
</p>
<p>
    L'objectif final est de savoir comment ses clients s'intègrent facilement à
    JUnit dans la découverte et l'exécution des tests.
</p>
<p>
    Il définit également l'API TestEngine pour développer un framework de test
    qui s'exécute sur la plate-forme JUnit. Grâce à cela, vous pouvez brancher
    des bibliothèques de test tierces, directement dans JUnit, en implémentant
    TestEngine personnalisé.
</p>
<h3>
    <a name="_Toc19286114">JUnit Jupiter</a>
</h3>
<p>
    Ce module inclut de nouveaux modèles de programmation et d’extension
    permettant d’écrire des tests dans JUnit 5. Les nouvelles annotations par
    rapport à JUnit 4 sont les suivantes :
</p>
<p>
    @TestFactory - désigne une méthode qui est une fabrique de tests pour les
    tests dynamiques
</p>
<p>
    @ DisplayName - définit un nom d'affichage personnalisé pour une classe de
    test ou une méthode de test.
</p>
<p>
    @Nested - indique que la classe annotée est une classe de test imbriquée
    non statique
</p>
<p>
    @Tag - déclare les tags pour les tests de filtrage
</p>
<p>
    @ExtendWith - il est utilisé pour enregistrer des extensions personnalisées
</p>
<p>
    @BeforeEach - indique que la méthode annotée sera exécutée avant chaque
    méthode de test (précédemment @Before)
</p>
<p>
    @AfterEach - indique que la méthode annotée sera exécutée après chaque
    méthode de test (précédemment @After)
</p>
<p>
    @BeforeAll - indique que la méthode annotée sera exécutée avant toutes les
    méthodes de test de la classe actuelle (précédemment @BeforeClass)
</p>
<p>
    @AfterAll - indique que la méthode annotée sera exécutée après toutes les
    méthodes de test de la classe en cours (précédemment @AfterClass).
</p>
<p>
    @Disable - il est utilisé pour désactiver une classe ou une méthode de test
    (précédemment @Ignore)
</p>
<h3>
    <a name="_Toc19286115">JUnit Vintage</a>
</h3>
<p>
    Prend en charge l'exécution de tests basés sur JUnit 3 et JUnit 4 sur la
    plate-forme JUnit 5.
</p>
<h2>
    <a name="_Toc19286116">Annotations de base</a>
</h2>
<p>
    Pour discuter des nouvelles annotations, nous avons divisé la section en
    groupes suivants, chargés de l’exécution : avant les tests, pendant les
    tests (facultatif) et après les tests :
</p>
<h4>
    @BeforeAll and @BeforeEach
</h4>
<p>
    Vous trouverez ci-dessous un exemple de code simple à exécuter avant les
    principaux cas de test :
</p>
<p>
    @BeforeAll
</p>
<p>
    static void setup() {
</p>
<p>
    log.info("@BeforeAll - s'exécute une fois avant toutes les méthodes de test
    de cette classe");
</p>
<p>
    }
</p>
<p>
    @BeforeEach
</p>
<p>
    void init() {
</p>
<p>
    log.info("@BeforeEach - s'exécute avant chaque méthode de test de cette
    classe");
</p>
<p>
    }
</p>
<p>
    Il est important de noter que la méthode avec l'annotation @BeforeAll doit
    être statique, sinon le code ne sera pas compilé.
</p>
<h4>
    @DisplayName and @Disabled
</h4>
<p>
    Passons aux nouvelles méthodes optionnelles de test :
</p>
<p>
    @DisplayName("Single test successful")
</p>
<p>
    @Test
</p>
<p>
    void testSingleSuccessTest() {
</p>
<p>
    log.info("Success");
</p>
<p>
    }
</p>
<p>
    @Test
</p>
<p>
    @Disabled("Pas encore mis en œuvre ")
</p>
<p>
    void testShowSomething() {
</p>
<p>
    }
</p>
<p>
    Comme nous pouvons le voir, nous pouvons changer le nom d'affichage ou
    désactiver la méthode avec un commentaire, en utilisant de nouvelles
    annotations.
</p>
<h4>
    @AfterEach and @AfterAll
</h4>
<p>
    Enfin, discutons des méthodes liées aux opérations après l'exécution des
    tests :
</p>
<p>
    @AfterEach
</p>
<p>
    void tearDown() {
</p>
<p>
    log.info("@AfterEach - exécuté après chaque méthode de test.");
</p>
<p>
    }
</p>
<p>
    @AfterAll
</p>
<p>
    static void done() {
</p>
<p>
    log.info("@AfterAll - exécuté après toutes les méthodes de test.");
</p>
<p>
    }
</p>
<p>
    Veuillez noter que la méthode avec @AfterAll doit également être une
    méthode statique.
</p>
<h2>
    <a name="_Toc19286117">Assertions and Assumptions</a>
</h2>
<p>
    JUnit 5 tente de tirer pleinement parti des nouvelles fonctionnalités de
    Java 8, en particulier des expressions lambda.
</p>
<h3>
    <a name="_Toc19286118">Assertions</a>
</h3>
<p>
    Les assertions ont été déplacées vers org.junit.jupiter.api.Assertions et
    ont été considérablement améliorées. Comme mentionné précédemment, vous
    pouvez maintenant utiliser lambdas dans les assertions :
</p>
<p>
    @Test
</p>
<p>
    void lambdaExpressions() {
</p>
<p>
    assertTrue(Stream.of(1, 2, 3)
</p>
<p>
    .stream()
</p>
<p>
    .mapToInt(i -&gt; i)
</p>
<p>
    .sum() &gt; 5, () -&gt; "Sum should be greater than 5");
</p>
<p>
    }
</p>
<p>
    Bien que l'exemple ci-dessus soit trivial, l'un des avantages de
    l'utilisation de l'expression lambda pour le message d'assertion est
    qu'elle est évaluée paresseuse, ce qui permet de gagner du temps et des
    ressources si la construction du message est coûteuse.
</p>
<p>
    Il est également maintenant possible de grouper des assertions avec
    assertAll (), qui signalera toutes les assertions ayant échoué au sein du
    groupe avec une erreur MultipleFailuresError:
</p>
<p>
    @Test
</p>
<p>
    void groupAssertions() {
</p>
<p>
    int[] numbers = {0, 1, 2, 3, 4};
</p>
<p>
    assertAll("numbers",
</p>
<p>
    () -&gt; assertEquals(numbers[0], 1),
</p>
<p>
    () -&gt; assertEquals(numbers[3], 3),
</p>
<p>
    () -&gt; assertEquals(numbers[4], 1)
</p>
<p>
    );
</p>
<p>
    }
</p>
<p>
    Cela signifie qu'il est maintenant plus sûr de faire des assertions plus
    complexes, car vous serez en mesure de localiser l'emplacement exact de
    toute défaillance.
</p>
<h3>
    <a name="_Toc19286119">Assumptions</a>
</h3>
<p>
    Les assumptions sont utilisées pour exécuter des tests uniquement si
    certaines conditions sont remplies. Cela est généralement utilisé pour les
    conditions externes requises pour le bon fonctionnement du test, mais qui
    ne sont pas directement liées à ce qui est testé.
</p>
<p>
    Vous pouvez déclarer une hypothèse avec assumTrue (), supposeFalse () et
    supposingThat ().
</p>
<p>
    @Test
</p>
<p>
    void trueAssumption() {
</p>
<p>
    assumeTrue(5 &gt; 1);
</p>
<p>
    assertEquals(5 + 2, 7);
</p>
<p>
    }
</p>
<p>
    @Test
</p>
<p>
    void falseAssumption() {
</p>
<p>
    assumeFalse(5 &lt; 1);
</p>
<p>
    assertEquals(5 + 2, 7);
</p>
<p>
    }
</p>
<p>
    @Test
</p>
<p>
    void assumptionThat() {
</p>
<p>
    String someString = "Just a string";
</p>
<p>
    assumingThat(
</p>
<p>
    someString.equals("Just a string"),
</p>
<p>
    () -&gt; assertEquals(2 + 2, 4)
</p>
<p>
    );
</p>
<p>
    }
</p>
<p>
    Si un assumption échoue, une exception TestAbortedException est levée et le
    test est simplement ignoré.
</p>
<p>
    Les hypothèses comprennent également les expressions lambda.
</p>
<h2>
    <a name="_Toc19286120">Exception Testing</a>
</h2>
<p>
    JUnit 5 permet de tester les exceptions de deux manières différentes en
    utilisant la méthode assertThrows ():
</p>
<p>
    @Test
</p>
<p>
    void shouldThrowException() {
</p>
<p>
    Throwable exception = assertThrows(UnsupportedOperationException.class, ()
    -&gt; {
</p>
<p>
    throw new UnsupportedOperationException("Not supported");
</p>
<p>
    });
</p>
<p>
    assertEquals(exception.getMessage(), "Not supported");
</p>
<p>
    }
</p>
<p>
    @Test
</p>
<p>
    void assertThrowsException() {
</p>
<p>
    String str = null;
</p>
<p>
    assertThrows(IllegalArgumentException.class, () -&gt; {
</p>
<p>
    Integer.valueOf(str);
</p>
<p>
    });
</p>
<p>
    }
</p>
<p>
    Le premier exemple est utilisé pour vérifier plus de détails de l'exception
    levée et le second ne fait que valider le type d'exception.
</p>
<h2>
    <a name="_Toc19286121">Test Suites</a>
</h2>
<p>
    Pour continuer avec les nouvelles fonctionnalités de JUnit 5, nous allons
    essayer de connaître le concept d'agrégation de plusieurs classes de test
    dans une suite de tests afin de pouvoir les exécuter ensemble. JUnit 5
    fournit deux annotations : @SelectPackages et @SelectClasses pour créer des
    suites de tests.
</p>
<p>
    N'oubliez pas qu'à ce stade précoce, la plupart des IDE ne prennent pas en
    charge ces fonctionnalités.
</p>
<p>
    Regardons le premier :
</p>
<p>
    @RunWith(JUnitPlatform.class)
</p>
<p>
    @SelectPackages("org.mql")
</p>
<p>
    public class AllTests {}
</p>
<p>
    @SelectPackage est utilisé pour spécifier les noms des packages à
    sélectionner lors de l'exécution d'une suite de tests. Dans notre exemple,
    tous les tests seront exécutés. La deuxième annotation, @SelectClasses, est
    utilisée pour spécifier les classes à sélectionner lors de l'exécution
    d'une suite de tests :
</p>
<p>
    @RunWith(JUnitPlatform.class)
</p>
<p>
    @SelectClasses({AssertionTest.class, AssumptionTest.class,
    ExceptionTest.class})
</p>
<p>
    public class AllTests {}
</p>
<p>
    Par exemple, la classe ci-dessus créera une suite contenant trois classes
    de test. Veuillez noter que les cours ne doivent pas nécessairement être
    dans un seul paquet.
</p>
<h2>
    <a name="_Toc19286122">Dynamic Tests</a>
</h2>
<p>
    Le dernier sujet que nous souhaitons aborder est la fonctionnalité de tests
    dynamiques JUnit 5, qui permet de déclarer et d’exécuter des scénarios de
    test générés au moment de l’exécution. Contrairement aux tests statiques
    qui définissent un nombre fixe de cas de test au moment de la compilation,
    les tests dynamiques nous permettent de définir le cas de test de manière
    dynamique au moment de l'exécution.
</p>
<p>
    Les tests dynamiques peuvent être générés par une méthode d'usine annotée
    avec @TestFactory. Regardons l'exemple de code :
</p>
<p>
    @TestFactory
</p>
<p>
    public Stream&lt;DynamicTest&gt; translateDynamicTestsFromStream() {
</p>
<p>
    return in.stream()
</p>
<p>
    .map(word -&gt;
</p>
<p>
    DynamicTest.dynamicTest("Test translate " + word, () -&gt; {
</p>
<p>
    int id = in.indexOf(word);
</p>
<p>
    assertEquals(out.get(id), translate(word));
</p>
<p>
    })
</p>
<p>
    );
</p>
<p>
    }
</p>
<p>
    Cet exemple est très simple et facile à comprendre. Nous voulons traduire
    des mots en utilisant deux ArrayList, nommés respectivement dans et hors.
    La méthode factory doit renvoyer un flux, une collection, un itérateur ou
    un itérateur. Dans notre cas, nous avons choisi Java 8 Stream.
</p>
<p>
    Veuillez noter que les méthodes @TestFactory ne doivent pas être privées ou
    statiques. Le nombre de tests est dynamique et dépend de la taille de
    ArrayList.
</p>
<h1 id="title3">
    Testng
</h1>
<h2>
    <a name="_Toc19286124">overview</a>
</h2>
<p>
    Dans cette section, nous présentons le framework de test TestNG.
</p>
<p>
    Nous nous concentrerons sur : la configuration de la structure, la
    rédaction cas de test simples et la configuration, l'exécution de tests, la
    génération de rapports de tests et l'exécution de tests simultanés
</p>
<h2>
    <a name="_Toc19286125">Setup</a>
</h2>
<p>
    Commençons par ajouter la dépendance Maven dans notre fichier pom.xml :
</p>
<p>
    &lt;dependency&gt;
</p>
<p>
    &lt;groupId&gt;org.testng&lt;/groupId&gt;
</p>
<p>
    &lt;artifactId&gt;testng&lt;/artifactId&gt;
</p>
<p>
    &lt;version&gt;7.0.0&lt;/version&gt;
</p>
<p>
    &lt;scope&gt;test&lt;/scope&gt;
</p>
<p>
    &lt;/dependency&gt;
</p>
<p>
    La dernière version se trouve dans le référentiel Maven.
</p>
<p>
    Lors de l'utilisation d'Eclipse, le plugin TestNG peut être téléchargé et
    installé à partir du marché Eclipse.
</p>
<h2>
    <a name="_Toc19286126">Écrire un cas de test</a>
</h2>
<p>
    Pour écrire un test à l'aide de TestNG, il suffit d'annoter la méthode de
    test avec l'annotation org.testng.annotations.Test :
</p>
<p>
    @Test
</p>
<p>
    public void givenNumber_whenEven_thenTrue() {
</p>
<p>
    assertTrue(number % 2 == 0);
</p>
<p>
    }
</p>
<h2>
    <a name="_Toc19286127">Configurations de test</a>
</h2>
<p>
    Lors de l'écriture de scénarios de test, nous devons souvent exécuter
    certaines instructions de configuration ou d'initialisation avant les
    exécutions de test, ainsi qu'un certain nettoyage une fois les tests
    terminés. TestNG fournit un certain nombre de fonctions d'initialisation et
    de nettoyage aux niveaux des méthodes, des classes, des groupes et des
    suites
</p>
<p>
    @BeforeClass
</p>
<p>
    public void setup() {
</p>
<p>
    number = 12;
</p>
<p>
    }
</p>
<p>
    @AfterClass
</p>
<p>
    public void tearDown() {
</p>
<p>
    number = 0;
</p>
<p>
    }
</p>
<p>
    La méthode setup () annotée avec les annotations @BeforeClass sera invoquée
    avant l'exécution de toute méthode de cette classe de test, et tearDown ()
    après l'exécution de toutes les méthodes de la classe de test.
</p>
<p>
    De même, nous pouvons utiliser les annotations @BeforeMethod, @AfterMethod,
    @ Before / AfterGroup, @ Before / AfterTest et @ Before / AfterSuite pour
    toute configuration aux niveaux méthode, groupe, test et suite.
</p>
<h2>
    <a name="_Toc19286128">Test Execution</a>
</h2>
<p>
    Nous pouvons exécuter les scénarios de test avec la commande «test» de
    Maven, qui exécutera tous les scénarios de test annotés avec @Test en les
    plaçant dans une suite de tests par défaut. Nous pouvons également exécuter
    des scénarios de test à partir des fichiers XML de la suite de tests
    TestNG, en utilisant le plugin maven-surefire:
</p>
<p>
    &lt;plugin&gt;
</p>
<p>
    &lt;groupId&gt;org.apache.maven.plugins&lt;/groupId&gt;
</p>
<p>
    &lt;artifactId&gt;maven-surefire-plugin&lt;/artifactId&gt;
</p>
<p>
    &lt;version&gt;2.19.1&lt;/version&gt;
</p>
<p>
    &lt;configuration&gt;
</p>
<p>
    &lt;suiteXmlFiles&gt;
</p>
<p>
    &lt;suiteXmlFile&gt;
</p>
<p>
    src\test\resources\test_suite.xml
</p>
<p>
    &lt;/suiteXmlFile&gt;
</p>
<p>
    &lt;/suiteXmlFiles&gt;
</p>
<p>
    &lt;/configuration&gt;
</p>
<p>
    &lt;/plugin&gt;
</p>
<p>
    Notez que si nous avons plusieurs fichiers XML couvrant tous les cas de
    test, nous pouvons tous les ajouter dans la balise suiteXmlFiles:
</p>
<p>
    &lt;suiteXmlFiles&gt;
</p>
<p>
    &lt;suiteXmlFile&gt;
</p>
<p>
    src/test/resources/parametrized_test.xml
</p>
<p>
    &lt;/suiteXmlFile&gt;
</p>
<p>
    &lt;suiteXmlFile&gt;
</p>
<p>
    src/test/resources/registration_test.xml
</p>
<p>
    &lt;/suiteXmlFile&gt;
</p>
<p>
    &lt;/suiteXmlFiles&gt;
</p>
<p>
    Pour exécuter le test en mode autonome, nous devons disposer de la
    bibliothèque TestNG dans le chemin de classe et de la classe de test
    compilée, ainsi que du fichier de configuration XML :
</p>
<p>
    java org.testng.TestNG test_suite.xml
</p>
<h2>
    <a name="_Toc19286129">Tests de regroupement</a>
</h2>
<p>
    Les tests peuvent être exécutés en groupes. Par exemple, sur 50 scénarios
    de test, 15 peuvent être regroupés et exécutés, laissant les autres tels
    quels.
</p>
<p>
    Dans TestNG, les tests de regroupement en suites sont effectués à l'aide
    d'un fichier XML:
</p>
<p>
    &lt;suite name="suite"&gt;
</p>
<p>
    &lt;test name="test suite"&gt;
</p>
<p>
    &lt;classes&gt;
</p>
<p>
    &lt;class name="org.mql.RegistrationTest" /&gt;
</p>
<p>
    &lt;class name="org.mql.SignInTest" /&gt;
</p>
<p>
    &lt;/classes&gt;
</p>
<p>
    &lt;/test&gt;
</p>
<p>
    &lt;/suite&gt;
</p>
<p>
    Notez que les deux classes de test RegistrationTest, SignInTest
    appartiennent maintenant à la même suite et qu'une fois la suite exécutée,
    les scénarios de test de cette classe seront exécutés.
</p>
<p>
    Outre les suites de tests, nous pouvons également créer des groupes de
    tests dans TestNG, dans lesquels les méthodes de classes de tests sont
    regroupées. Pour ce faire, ajoutez le paramètre groups dans l'annotation
    @Test :
</p>
<p>
    @Test(groups = "regression")
</p>
<p>
    public void givenNegativeNumber_sumLessthanZero_thenCorrect() {
</p>
<p>
    int sum = numbers.stream().reduce(0, Integer::sum);
</p>
<p>
    assertTrue(sum &lt; 0);
</p>
<p>
    }
</p>
<p>
    Utilisons un XML pour exécuter les groupes :
</p>
<p>
    &lt;test name="test groups"&gt;
</p>
<p>
    &lt;groups&gt;
</p>
<p>
    &lt;run&gt;
</p>
<p>
    &lt;include name="regression" /&gt;
</p>
<p>
    &lt;/run&gt;
</p>
<p>
    &lt;/groups&gt;
</p>
<p>
    &lt;classes&gt;
</p>
<p>
    &lt;class
</p>
<p>
    name="org.mql.SummationServiceTest" /&gt;
</p>
<p>
    &lt;/classes&gt;
</p>
<p>
    &lt;/test&gt;
</p>
<p>
    Ceci exécutera la méthode de test étiquetée avec la régression de groupe,
    dans la classe SummationServiceTest.
</p>
<h2>
    <a name="_Toc19286130">Tests paramétrés</a>
</h2>
<p>
    Les tests unitaires paramétrés sont utilisés pour tester le même code dans
    plusieurs conditions. À l’aide de tests unitaires paramétrés, nous pouvons
    configurer une méthode de test permettant d’obtenir des données à partir de
    certaines sources de données. L'idée principale est de rendre la méthode de
    test unitaire réutilisable et de tester avec un ensemble d'entrées
    différent.
</p>
<p>
    Dans TestNG, nous pouvons paramétrer des tests à l'aide de l'annotation
    @Parameter ou @DataProvider. Tout en utilisant le fichier XML, annotez la
    méthode de test avec @Parameter:
</p>
<p>
    @Test
</p>
<p>
    @Parameters({"value", "isEven"})
</p>
<p>
    public void
</p>
<p>
    givenNumberFromXML_ifEvenCheckOK_thenCorrect(int value, boolean isEven) {
</p>
<p>
    assertEquals(isEven, value % 2 == 0);
</p>
<p>
    }
</p>
<p>
    Et fournissez les données en utilisant le fichier XML:
</p>
<p>
    &lt;suite name="My test suite"&gt;
</p>
<p>
    &lt;test name="numbersXML"&gt;
</p>
<p>
    &lt;parameter name="value" value="1"/&gt;
</p>
<p>
    &lt;parameter name="isEven" value="false"/&gt;
</p>
<p>
    &lt;classes&gt;
</p>
<p>
    &lt;class name="org.mql.ParametrizedTests"/&gt;
</p>
<p>
    &lt;/classes&gt;
</p>
<p>
    &lt;/test&gt;
</p>
<p>
    &lt;/suite&gt;
</p>
<p>
    Utiliser les données d'un fichier XML est utile, mais nous avons souvent
    besoin de données plus complexes. L'annotation @DataProvider est utilisée
    pour gérer ces scénarios, qui peuvent être utilisés pour mapper des types
    de paramètres complexes pour des méthodes de test. @ DataProvider pour les
    types de données primitifs :
</p>
<p>
    @DataProvider(name = "numbers")
</p>
<p>
    public static Object[][] evenNumbers() {
</p>
<p>
    return new Object[][]{{1, false}, {2, true}, {4, true}};
</p>
<p>
    }
</p>
<p>
    @Test(dataProvider = "numbers")
</p>
<p>
    public void
</p>
<p>
    givenNumberFromDataProvider_ifEvenCheckOK_thenCorrect(Integer number,
    boolean expected) {
</p>
<p>
    assertEquals(expected, number % 2 == 0);
</p>
<p>
    }
</p>
<p>
    @DataProviderfor objets:
</p>
<p>
    @Test(dataProvider = "numbersObject")
</p>
<p>
    public void
</p>
<p>
    givenNumberObjectFromDataProvider_ifEvenCheckOK_thenCorrect(EvenNumber
    number) {
</p>
<p>
    assertEquals(number.isEven(), number.getValue() % 2 == 0);
</p>
<p>
    }
</p>
<p>
    @DataProvider(name = "numbersObject")
</p>
<p>
    public Object[][] parameterProvider() {
</p>
<p>
    return new Object[][]{{new EvenNumber(1, false)},
</p>
<p>
    {new EvenNumber(2, true)}, {new EvenNumber(4, true)}};
</p>
<p>
    }
</p>
<p>
    Grâce à cela, tout objet à tester peut être créé et utilisé dans le test.
    Ceci est surtout utile pour les cas de test d'intégration.
</p>
<h2>
    <a name="_Toc19286131">Ignoring Test Cases</a>
</h2>
<p>
    Nous voulons parfois ne pas exécuter un certain cas de test, temporairement
    pendant le processus de développement. Cela peut être fait en ajoutant
    enabled = false, dans l'annotation @Test:
</p>
<p>
    @Test(enabled=false)
</p>
<p>
    public void givenNumbers_sumEquals_thenCorrect() {
</p>
<p>
    int sum = numbers.stream.reduce(0, Integer::sum);
</p>
<p>
    assertEquals(6, sum);
</p>
<p>
    }
</p>
<h2>
    <a name="_Toc19286132">Dependent Tests</a>
</h2>
<p>
    Prenons un scénario dans lequel, en cas d'échec du scénario de test
    initial, tous les scénarios de test suivants doivent être exécutés et
    marqués plutôt comme ignorés. TestNG fournit cette fonctionnalité avec le
    paramètre dependOnMethods de l'annotation @Test :
</p>
<p>
    @Test
</p>
<p>
    public void givenEmail_ifValid_thenTrue() {
</p>
<p>
    boolean valid = email.contains("@");
</p>
<p>
    assertEquals(valid, true);
</p>
<p>
    }
</p>
<p>
    @Test(dependsOnMethods = {"givenEmail_ifValid_thenTrue"})
</p>
<p>
    public void givenValidEmail_whenLoggedIn_thenTrue() {
</p>
<p>
    LOGGER.info("Email {} valid &gt;&gt; logging in", email);
</p>
<p>
    }
</p>
<p>
    Notez que le cas de test de connexion dépend du cas de test de validation
    de courrier électronique. Ainsi, si la validation du courrier électronique
    échoue, le test de connexion sera ignoré.
</p>
<h2>
    <a name="_Toc19286133">Exécution de tests simultanés</a>
</h2>
<p>
    TestNG permet aux tests de s'exécuter en parallèle ou en mode multi-thread,
    offrant ainsi un moyen de tester ces morceaux de code multi-thread.
</p>
<p>
    Vous pouvez configurer les méthodes, les classes et les suites afin
    qu'elles s'exécutent dans leurs propres threads, réduisant ainsi le temps
    d'exécution total.
</p>
<h3>
    <a name="_Toc19286134">Classes and Methods in Parallel</a>
</h3>
<p>
    Pour exécuter des classes de test en parallèle, mentionnez l'attribut
    parallel dans la balise de suite du fichier de configuration XML, avec les
    classes de valeur :
</p>
<p>
    &lt;suite name="suite" parallel="classes" thread-count="2"&gt;
</p>
<p>
    &lt;test name="test suite"&gt;
</p>
<p>
    &lt;classes&gt;
</p>
<p>
    &lt;class name="baeldung.com.RegistrationTest" /&gt;
</p>
<p>
    &lt;class name="baeldung.com.SignInTest" /&gt;
</p>
<p>
    &lt;/classes&gt;
</p>
<p>
    &lt;/test&gt;
</p>
<p>
    &lt;/suite&gt;
</p>
<p>
    Notez que, si nous avons plusieurs balises de test dans le fichier XML, ces
    tests peuvent également être exécutés en parallèle, en mentionnant parallel
    = "tests". Également pour exécuter des méthodes individuelles en parallèle,
    mentionnez parallel = ”méthodes”.
</p>
<h3>
    <a name="_Toc19286135">Exécution multi-thread de la méthode de test</a>
</h3>
<p>
    Disons que nous devons tester le comportement d'un code lors de l'exécution
    de plusieurs threads. TestNG permet d'exécuter une méthode de test dans
    plusieurs threads :
</p>
<p>
    public class MultiThreadedTests {
</p>
<p>
    @Test(threadPoolSize = 5, invocationCount = 10, timeOut = 1000)
</p>
<p>
    public void givenMethod_whenRunInThreads_thenCorrect() {
</p>
<p>
    int count = Thread.activeCount();
</p>
<p>
    assertTrue(count &gt; 1);
</p>
<p>
    }
</p>
<p>
    }
</p>
<p>
    ThreadPoolSize indique que la méthode sera exécutée dans un nombre n de
    threads, comme indiqué. InvocationCount et timeOut indiquent que le test
    sera exécuté plusieurs fois et échoueront si le test prend plus de temps.
</p>
<h2>
    <a name="_Toc19286136">Test fonctionel</a>
</h2>
<p>
    TestNG est livré avec des fonctionnalités qui peuvent également être
    utilisées pour les tests fonctionnels. Associé à Selenium, il peut être
    utilisé pour tester les fonctionnalités d'une application Web ou pour
    tester des services Web avec HttpClient.
</p>
<p>
    Plus de détails sur les tests fonctionnels avec Selenium et TestNG sont
    disponibles ici. Également, quelques articles supplémentaires sur les tests
    d'intégration dans cet article.
</p>
<h1 id="title4">
    arquillian
</h1>
<h2>
    <a name="_Toc19286138">Overview</a>
</h2>
<p>
    Arquillian est une infrastructure de test d'intégration agnostique par
    conteneur pour Java EE. L'utilisation d'Arquillian minimise la charge de
    gestion des conteneurs, des déploiements, des initialisations
    d'infrastructure, etc.
</p>
<p>
    Nous pouvons nous concentrer sur l'écriture de tests réels et non sur
    l'amorçage de l'environnement de test.
</p>
<h2>
    <a name="_Toc19286139">Concepts de base</a>
</h2>
<h3>
    <a name="_Toc19286140">Archives de déploiement</a>
</h3>
<p>
    Il existe un moyen simple de tester notre application lors de l'exécution à
    l'intérieur d'un conteneur.
</p>
<p>
    Premièrement, la classe ShrinkWrap fournit une API pour créer des fichiers
    * .jar, * .war et * .ear déployables.
</p>
<p>
    Ensuite, Arquillian nous permet de configurer le déploiement de test à
    l'aide de l'annotation @Deployment - sur une méthode renvoyant un objet
    ShrinkWrap.
</p>
<h3>
    <a name="_Toc19286141">Containers</a>
</h3>
<p>
    Arquillian distingue trois types de conteneurs :
</p>
<p>
    · Remote - testé avec un protocole distant tel que JMX
</p>
<p>
    · Managed - conteneurs distants mais leur cycle de vie est géré par
    Arquillian
</p>
<p>
    · Embedded - Conteneurs locaux où les tests sont effectués à l'aide de
    protocoles locaux
</p>
<p>
    Nous pouvons également classer les conteneurs en fonction de leurs
    capacités :
</p>
<p>
    · Applications Java EE déployées sur un serveur d'applications tel que
    Glassfish ou JBoss
</p>
<p>
    · Conteneurs de servlets déployés sur Tomcat ou Jetty
</p>
<p>
    · Conteneurs autonomes
</p>
<p>
    · Conteneurs OSGI
</p>
<p>
    Il examine le chemin de classe d'exécution et sélectionne automatiquement
    le conteneur disponible.
</p>
<h3>
    <a name="_Toc19286142">Test d'enrichissement</a>
</h3>
<p>
    Arquillian enrichit les tests en fournissant par exemple l'injection de
    dépendance afin que nous puissions écrire nos tests facilement.
</p>
<p>
    Nous pouvons injecter des dépendances en utilisant @Inject, injecter des
    ressources avec @Resource, des beans de session EJB en utilisant @EJB, etc.
</p>
<h3>
    <a name="_Toc19286143">Multiple Test Runners</a>
</h3>
<p>
    Nous pouvons créer plusieurs déploiements en utilisant l’annotation :
</p>
<p>
    @Deployment(name="myname" order = 1)
</p>
<p>
    Où le name est le nom du fichier de déploiement et le paramètre order est
    l'ordre d'exécution du déploiement, nous pouvons donc maintenant exécuter
    des tests sur plusieurs déploiements en même temps en utilisant
    l'annotation :
</p>
<p>
    @Test @OperateOnDeployment("myname")
</p>
<p>
    Le test avant est exécuté sur le conteneur de déploiement myname à l'aide
    de l'ordre défini dans l'annotation @Deployment.
</p>
<h3>
    <a name="_Toc19286144">Arquillian Extensions</a>
</h3>
<p>
    Arquillian propose plusieurs extensions au cas où nos besoins en tests ne
    seraient pas couverts par le cœur de l'exécution. Nous avons la
    persistance, les transactions, client / serveur, les extensions REST, etc.
</p>
<p>
    Nous pouvons activer ces extensions en ajoutant des dépendances appropriées
    aux fichiers de configuration Maven ou Gradle.
</p>
<p>
    Les extensions couramment utilisées sont Drone, Graphene et Selenium.
</p>
<h2>
    <a name="_Toc19286145">Dépendances et configuration Maven</a>
</h2>
<p>
    Ajoutons la dépendance suivante à notre fichier pom.xml :
</p>
<p>
    &lt;dependency&gt;
</p>
<p>
    &lt;groupId&gt;org.jboss.arquillian&lt;/groupId&gt;
</p>
<p>
    &lt;artifactId&gt;arquillian-bom&lt;/artifactId&gt;
</p>
<p>
    &lt;version&gt;1.1.13.Final&lt;/version&gt;
</p>
<p>
    &lt;scope&gt;import&lt;/scope&gt;
</p>
<p>
    &lt;type&gt;pom&lt;/type&gt;
</p>
<p>
    &lt;/dependency&gt;
</p>
<p>
    &lt;dependency&gt;
</p>
<p>
    &lt;groupId&gt;org.glassfish.main.extras&lt;/groupId&gt;
</p>
<p>
    &lt;artifactId&gt;glassfish-embedded-all&lt;/artifactId&gt;
</p>
<p>
    &lt;version&gt;4.1.2&lt;/version&gt;
</p>
<p>
    &lt;scope&gt;test&lt;/scope&gt;
</p>
<p>
    &lt;/dependency&gt;
</p>
<p>
    &lt;dependency&gt;
</p>
<p>
    &lt;groupId&gt;org.jboss.arquillian.container&lt;/groupId&gt;
</p>
<p>
    &lt;artifactId&gt;arquillian-glassfish-embedded-3.1&lt;/artifactId&gt;
</p>
<p>
    &lt;version&gt;1.0.0.Final&lt;/version&gt;
</p>
<p>
    &lt;scope&gt;test&lt;/scope&gt;
</p>
<p>
    &lt;/dependency&gt;
</p>
<p>
    La dernière version des dépendances est disponible ici: arquillian-bom,
    org.glassfish.main.extras, org.jboss.arquillian.container.
</p>
<h2>
    <a name="_Toc19286146">Simple Test</a>
</h2>
<h3>
    <a name="_Toc19286147">Créer un composant</a>
</h3>
<p>
    Commençons par un composant simple. Nous n'incluons aucune logique avancée
    pour pouvoir se concentrer sur les tests :
</p>
<p>
    public class Component {
</p>
<p>
    public void sendMessage(PrintStream to, String msg) {
</p>
<p>
    to.println(message(msg));
</p>
<p>
    }
</p>
<p>
    public String message(String msg) {
</p>
<p>
    return "Message, " + msg;
</p>
<p>
    }
</p>
<p>
    }
</p>
<p>
    En utilisant Arquillian, nous voulons vérifier que cette classe se comporte
    correctement lorsqu'elle est appelée en tant que bean CDI.
</p>
<h3>
    <a name="_Toc19286148">Écris notre premier test arquillien</a>
</h3>
<p>
    Tout d'abord, nous devons spécifier que notre classe de test doit être
    exécutée à l'aide du programme d'exécution spécifique à l'infrastructure :
</p>
<p>
    @RunWith(Arquillian.class)
</p>
<p>
    Si nous allons exécuter nos tests dans un conteneur, nous devons utiliser
    l'annotation @Deployment.
</p>
<p>
    Arquillian n'utilise pas l'intégralité du chemin d'accès aux classes pour
    isoler l'archive de test. Au lieu de cela, il utilise la classe ShrinkWrap,
    qui est une API Java pour créer des archives. Lorsque nous créons l'archive
    à tester, nous spécifions les fichiers à inclure dans le chemin d'accès aux
    classes pour utiliser le test. Pendant le déploiement, ShrinkWrap n'isole
    que les classes nécessaires au test.
</p>
<p>
    En utilisant la méthode addclass (), nous pouvons spécifier toutes les
    classes nécessaires et ajouter une ressource manifeste vide.
</p>
<p>
    JavaArchive.class crée une archive Web de maquette appelée test.war. Ce
    fichier est déployé dans le conteneur, puis utilisé par Arquillian pour
    effectuer des tests :
</p>
<p>
    @Deployment
</p>
<p>
    public static JavaArchive createDeployment() {
</p>
<p>
    return ShrinkWrap.create(JavaArchive.class)
</p>
<p>
    .addClass(Component.class)
</p>
<p>
    .addAsManifestResource(EmptyAsset.INSTANCE, "beans.xml");
</p>
<p>
    }
</p>
<p>
    Ensuite, nous injectons notre composant dans le test :
</p>
<p>
    @Inject
</p>
<p>
    private Component component;
</p>
<p>
    Enfin, nous effectuons notre test:
</p>
<p>
    assertEquals("Message, MESSAGE",component.message(("MESSAGE")));
</p>
<p>
    component.sendMessage(System.out, "MESSAGE");
</p>
<h2>
    <a name="_Toc19286149">Testing Enterprise Java Beans</a>
</h2>
<h3>
    <a name="_Toc19286150">Enterprise Java Bean</a>
</h3>
<p>
    Avec Arquillian, nous pouvons tester l'injection de dépendance d'un bean
    Enterprise Java. Pour ce faire, nous créons une classe qui possède une
    méthode pour convertir n'importe quel mot en minuscule :
</p>
<p>
    public class ConvertToLowerCase {
</p>
<p>
    public String convert(String word){
</p>
<p>
    return word.toLowerCase();
</p>
<p>
    }
</p>
<p>
    }
</p>
<p>
    En utilisant cette classe, nous créons une classe sans état pour appeler la
    méthode créée avant :
</p>
<p>
    @Stateless
</p>
<p>
    public class CapsConvertor {
</p>
<p>
    public ConvertToLowerCase getLowerCase(){
</p>
<p>
    return new ConvertToLowerCase();
</p>
<p>
    }
</p>
<p>
    }
</p>
<p>
    La classe CapsConvertor est injectée dans un bean de service :
</p>
<p>
    @Stateless
</p>
<p>
    public class CapsService {
</p>
<p>
    @Inject
</p>
<p>
    private CapsConvertor capsConvertor;
</p>
<p>
    public String getConvertedCaps(final String word){
</p>
<p>
    return capsConvertor.getLowerCase().convert(word);
</p>
<p>
    }
</p>
<p>
    }
</p>
<h3>
    <a name="_Toc19286151">Test Enterprise Java Bean</a>
</h3>
<p>
    Nous pouvons maintenant utiliser Arquillian pour tester notre bean Java
    d'entreprise en injectant CapsService :
</p>
<p>
    @Inject
</p>
<p>
    private CapsService capsService;
</p>
<p>
    @Test
</p>
<p>
    public void givenWord_WhenUppercase_ThenLowercase(){
</p>
<p>
    assertTrue("capitalize".equals(capsService.getConvertedCaps("CAPITALIZE")));
</p>
<p>
    assertEquals("capitalize", capsService.getConvertedCaps("CAPITALIZE"));
</p>
<p>
    }
</p>
<p>
    En utilisant ShrinkWrap, nous nous assurons que toutes les classes sont
    câblées correctement :
</p>
<p>
    @Deployment
</p>
<p>
    public static JavaArchive createDeployment() {
</p>
<p>
    return ShrinkWrap.create(JavaArchive.class)
</p>
<p>
    .addClasses(CapsService.class, CapsConvertor.class,
    ConvertToLowerCase.class)
</p>
<p>
    .addAsManifestResource(EmptyAsset.INSTANCE, "beans.xml");
</p>
<p>
    }
</p>
<h2>
    <a name="_Toc19286152">Testing JPA</a>
</h2>
<h3>
    <a name="_Toc19286153">Persistance</a>
</h3>
<p>
    Nous pouvons également utiliser Arquillian pour tester la persistance. Tout
    d'abord, nous allons créer notre entité :
</p>
<p>
    @Entity
</p>
<p>
    public class Car {
</p>
<p>
    @Id
</p>
<p>
    @GeneratedValue
</p>
<p>
    private Long id;
</p>
<p>
    @NotNull
</p>
<p>
    private String name;
</p>
<p>
    // getters and setters
</p>
<p>
    }
</p>
<p>
    Nous avons une table qui contient les noms des voitures.
</p>
<p>
    Ensuite, nous allons créer notre EJB pour effectuer des opérations de base
    sur nos données
</p>
<p>
    @Stateless
</p>
<p>
    public class CarEJB {
</p>
<p>
    @PersistenceContext(unitName = "defaultPersistenceUnit")
</p>
<p>
    private EntityManager em;
</p>
<p>
    public Car saveCar(Car car) {
</p>
<p>
    em.persist(car);
</p>
<p>
    return car;
</p>
<p>
    }
</p>
<p>
    public List&lt;Car&gt; findAllCars() {
</p>
<p>
    Query query
</p>
<p>
    = em.createQuery("SELECT b FROM Car b ORDER BY b.name ASC");
</p>
<p>
    List&lt;Car&gt; entries = query.getResultList();
</p>
<p>
    return entries == null ? new ArrayList&lt;&gt;() : entries;
</p>
<p>
    public void deleteCar(Car car) {
</p>
<p>
    car = em.merge(car);
</p>
<p>
    em.remove(car);
</p>
<p>
    }
</p>
<p>
    }
</p>
<p>
    Avec saveCar, nous pouvons enregistrer les noms de voiture dans la base de
    données, nous pouvons obtenir toutes les voitures stockées avec
    findAllCars, et nous pouvons également supprimer une voiture de la base de
    données avec deleteCar.
</p>
<h3>
    <a name="_Toc19286154">Test de persistance avec Arquillian</a>
</h3>
<p>
    Nous pouvons maintenant effectuer des tests de base avec Arquillian.
</p>
<p>
    Premièrement, nous ajoutons nos classes à notre ShrinkWrap:
</p>
<p>
    .addClasses(Car.class, CarEJB.class)
</p>
<p>
    .addAsResource("META-INF/persistence.xml")
</p>
<p>
    Ensuite, nous créons notre test :
</p>
<p>
    @Test
</p>
<p>
    public void testCars() {
</p>
<p>
    assertTrue(carEJB.findAllCars().isEmpty());
</p>
<p>
    Car c1 = new Car();
</p>
<p>
    c1.setName("Impala");
</p>
<p>
    Car c2 = new Car();
</p>
<p>
    c2.setName("Lincoln");
</p>
<p>
    carEJB.saveCar(c1);
</p>
<p>
    carEJB.saveCar(c2);
</p>
<p>
    assertEquals(2, carEJB.findAllCars().size());
</p>
<p>
    carEJB.deleteCar(c1);
</p>
<p>
    assertEquals(1, carEJB.findAllCars().size());
</p>
<p>
    }
</p>
<p>
    Dans ce test, nous créons d’abord quatre instances de voiture et nous
    vérifions que le nombre de lignes de la base de données est identique à
    celui que nous avons créé.
</p>
<h1 id="title5">
    Selenium
</h1>
<h2>
    <a name="_Toc19286156">overview</a>
</h2>
<p>
    Selenium est un outil Open Source permettant d'automatiser les applications
    basées sur un navigateur. Selenium est un ensemble d'outils logiciels
    différents, chacun avec une approche différente pour prendre en charge
    l'automatisation des tests. Les tests peuvent être écrits sous forme de
    tableaux HTML ou codés dans un certain nombre de langages de programmation
    courants et peuvent être exécutés directement dans les navigateurs Web les
    plus modernes. Selenium peut être déployé sous Windows, Linux et Macintosh
    et dans de nombreux systèmes d'exploitation pour des applications mobiles
    telles qu'iOS, Windows Mobile et Android.
</p>
<p>
    Parmi tous les outils Open Source, l’outil de test fonctionnel Selenium est
    considéré comme un framework de test logiciel très portable et l’un des
    meilleurs outils disponibles sur le marché actuel pour l’automatisation des
    applications Web.
</p>
<h2>
    <a name="_Toc19286157">Selenium Configuration</a>
</h2>
<h3>
    <a name="_Toc19286158">Importing Packages</a>
</h3>
<p>
    Pour commencer, vous devez importer les deux packages suivants :
</p>
<p>
    · org.openqa.selenium. * - contient la classe WebDriver nécessaire pour
    instancier un nouveau navigateur chargé avec un pilote spécifique
</p>
<p>
    · org.openqa.selenium.firefox.FirefoxDriver - contient la classe
    FirefoxDriver nécessaire pour instancier un pilote spécifique à Firefox sur
    le navigateur instancié par la classe WebDriver
</p>
<p>
    Si votre test nécessite des actions plus complexes, telles qu'accéder à une
    autre classe, prendre des captures d'écran du navigateur ou manipuler des
    fichiers externes, vous devrez certainement importer plus de packages.
</p>
<h3>
    <a name="_Toc19286159">Instanciation d'objets et de variables</a>
</h3>
<p>
    Normalement, c'est comment un objet de pilote est instancié.
</p>
<p>
    <img
        width="334"
        height="16"
        src="img/testing/image007.png"
    />
</p>
<p>
    Une classe FirefoxDriver sans paramètre signifie que le profil Firefox par
    défaut sera lancé par notre programme Java. Le profil Firefox par défaut
    est similaire au lancement de Firefox en mode sans échec (aucune extension
    n'est chargée).
</p>
<p>
    Pour plus de commodité, nous avons enregistré l’URL de base et le titre
    attendu en tant que variables.
</p>
<h3>
    <a name="_Toc19286160">Lancer une session de navigateur</a>
</h3>
<p>
    La méthode get () de WebDriver permet de lancer une nouvelle session de
    navigateur et de la diriger vers l'URL que vous spécifiez comme paramètre.
</p>
<p>
    <img
        width="166"
        height="19"
        src="img/testing/image008.png"
    />
</p>
<h3>
    <a name="_Toc19286161">Obtenir le titre de la page réelle</a>
</h3>
<p>
    La classe WebDriver a la méthode getTitle () qui est toujours utilisée pour
    obtenir le titre de la page chargée.
</p>
<p>
    <img
        width="255"
        height="12"
        src="img/testing/image009.png"
    />
</p>
<h3>
    <a name="_Toc19286162">Comparer les valeurs attendues et réelles</a>
</h3>
<p>
    Cette partie du code utilise simplement une structure Java if-else de base
    pour comparer le titre réel avec celui attendu.
</p>
<p>
    <img
        width="378"
        height="89"
        src="img/testing/image010.png"
    />
</p>
<h3>
    <a name="_Toc19286163">Terminer une session de navigateur</a>
</h3>
<p>
    La méthode "close ()" est utilisée pour fermer la fenêtre du navigateur.
</p>
<p>
    <img
        width="119"
        height="12"
        src="img/testing/image011.png"
    />
</p>
<h3>
    <a name="_Toc19286164">Code</a>
</h3>
<p>
    <strong>package</strong>
    <u>newproject</u>
    ;
</p>
<p>
    <strong>import</strong>
    <u>org.openqa</u>
    .selenium.WebDriver;
</p>
<p>
    <strong>import</strong>
    <u>org.openqa</u>
    .selenium.firefox.FirefoxDriver;
</p>
<p>
    <strong>public</strong>
    <strong>static</strong>
    <strong>void</strong>
    main(String[] args) {
</p>
<p>
    System.<em>setProperty</em>
    ("webdriver.firefox.marionette","C:\\geckodriver.exe");
</p>
<p>
    <u>WebDriver</u>
    driver = <strong>new</strong> <u>FirefoxDriver</u>();
</p>
<p>
    String baseUrl = "http://www.google.com";
</p>
<p>
    String expectedTitle = "Google";
</p>
<p>
    String actualTitle = "";
</p>
<p>
    driver.get(baseUrl);
</p>
<p>
    actualTitle = driver.getTitle();
</p>
<p>
    <strong>if</strong>
    (actualTitle.contentEquals(expectedTitle)){
</p>
<p>
    System.<strong><em>out</em></strong>.println("Test Passed!");
</p>
<p>
    } <strong>else</strong> {
</p>
<p>
    System.<strong><em>out</em></strong>.println("Test Failed");
</p>
<p>
    }
</p>
<p>
    driver.close();
</p>
<p>
    }
</p>
<p>
    }
</p>
<h2>
    <a name="_Toc19286165">Running the Test</a>
</h2>
<p>
    Il existe deux manières d'exécuter du code dans Eclipse IDE.
</p>
<p>
    · Dans la barre de menus Eclipse, cliquez sur Exécuter&gt; Exécuter.
</p>
<p>
    · Appuyez sur Ctrl + F11 pour exécuter le code entier.
</p>
<p>
    Si vous avez tout fait correctement, Eclipse afficherait "Test passed !"
</p>
<p>
    <img
        width="177"
        height="115"
        src="img/testing/image012.png"
    />
</p>
<h2>
    <a name="_Toc19286166">Locating GUI Elements</a>
</h2>
<p>
    La localisation d'éléments dans WebDriver est effectuée à l'aide de la
    méthode "findElement (By.locator ())". La partie "code" du code est
    identique à celle des codes précédemment décrits dans les chapitres
    Selenium IDE de ces didacticiels. Enfait, il est recommandé de localiser
    les éléments de l'interface graphique à l'aide de l'EDI et, une fois
    identifié, d'exporter le code vers webdriver.
</p>
<p>
    Voici un exemple de code permettant de localiser un élément par son
    identifiant. Facebook est utilisé comme URL de base.
</p>
<p>
    <strong>package</strong>
    <u>newproject</u>
    ;
</p>
<p>
    <strong>import</strong>
    <u>org.openqa</u>
    .selenium.By;
</p>
<p>
    <strong>import</strong>
    <u>org.openqa</u>
    .selenium.WebDriver;
</p>
<p>
    <strong>import</strong>
    <u>org.openqa</u>
    .selenium.firefox.FirefoxDriver;
</p>
<p>
    <strong>public</strong>
    <strong>class</strong>
    <u>PG2</u>
    {
</p>
<p>
    <strong>public</strong>
    <strong>static</strong>
    <strong>void</strong>
    main(String[] args) {
</p>
<p>
    System.<em><u>setProperty</u></em>
    ("webdriver.firefox.marionette","C:\\geckodriver.exe");
</p>
<p>
    <u>WebDriver</u>
    driver = <strong>new</strong> <u>FirefoxDriver</u>();
</p>
<p>
    String baseUrl = "http://www.facebook.com";
</p>
<p>
    String tagName = "";
</p>
<p>
    driver.get(baseUrl);
</p>
<p>
    tagName = driver.findElement(<u>By</u>.id("email")).getTagName();
</p>
<p>
    System.<strong><em>out</em></strong>.println(tagName);
</p>
<p>
    driver.close();
</p>
<p>
    System.<em>exit</em>(0);
</p>
<p>
    }
</p>
<p>
    }
</p>
<p>
    Nous avons utilisé la méthode getTagName () pour extraire le nom de balise
    de cet élément particulier dont l'id est "email". Lorsqu'il est exécuté, ce
    code doit pouvoir identifier correctement le nom de la balise "input" et
    sera imprimé dans la fenêtre de la console Eclipse.
</p>
<p>
    <img
        width="176"
        height="112"
        src="img/testing/image013.png"
    />
</p>
<h2>
    <a name="_Toc19286167">Commandes communes</a>
</h2>
<h3>
    <a name="_Toc19286168">Instanciation des éléments Web</a>
</h3>
<p>
    Au lieu d'utiliser la longue syntaxe "driver.findElement (By.locator ())"
    chaque fois que vous accédez à un élément particulier, nous pouvons
    instancier un objet WebElement pour celui-ci. La classe WebElement est
    contenue dans le package "org.openqa.selenium. *".
</p>
<p>
    <img
        width="505"
        height="52"
        src="img/testing/image014.png"
    />
</p>
<h3>
    <a name="_Toc19286169">Cliquer sur un élément</a>
</h3>
<p>
    Le clic est peut-être le moyen le plus courant d'interagir avec les
    éléments Web. La méthode click () est utilisée pour simuler le clic d'un
    élément. L'exemple suivant montre comment click () a été utilisé pour
    cliquer sur le bouton "Sign-In" de Mercury Tours.
</p>
<p>
    <img
        width="314"
        height="15"
        src="img/testing/image015.png"
    />
</p>
<h3>
    <a name="_Toc19286170">Get Commands</a>
</h3>
<p>
    Les commandes Get récupèrent diverses informations importantes sur la page
    / l'élément. Voici quelques commandes "get" importantes que vous devez
    connaître.
</p>
<p>
    get () Exemple d'utilisation:
</p>
<p>
    · Il ouvre automatiquement une nouvelle fenêtre de navigateur et récupère
    la page que vous spécifiez entre ses parenthèses.
</p>
<p>
    · C'est la contrepartie de la commande "open" de Selenium IDE.
</p>
<p>
    · Le paramètre doit être un objet String.
</p>
<p>
    getTitle () Exemple d'utilisation:
</p>
<p>
    · Pas besoin de paramètres
</p>
<p>
    · Récupère le titre de la page en cours
</p>
<p>
    · Les espaces blancs de début et de fin sont supprimés
</p>
<p>
    · Retourne une chaîne nulle si la page n'a pas de titre
</p>
<p>
    getPageSource () Exemple d'utilisation:
</p>
<p>
    · Pas besoin de paramètres
</p>
<p>
    · Renvoie le code source de la page sous forme de valeur String
</p>
<p>
    getCurrentUrl () Exemple d'utilisation:
</p>
<p>
    · Pas besoin de paramètres
</p>
<p>
    · Récupère la chaîne représentant l'URL actuelle que le navigateur est en
    train de regarder
</p>
<p>
    getText () Exemple d'utilisation:
</p>
<p>
    · Récupère le texte intérieur de l'élément que vous spécifiez
</p>
<h3>
    <a name="_Toc19286171">Navigate commands</a>
</h3>
<p>
    Ces commandes vous permettent d'actualiser, d'accéder et de basculer entre
    différentes pages Web.
</p>
<p>
    navigate ().to () Exemple d'utilisation:
</p>
<p>
    · Il ouvre automatiquement une nouvelle fenêtre de navigateur et récupère
    la page que vous spécifiez entre ses parenthèses.
</p>
<p>
    · Il fait exactement la même chose que la méthode get ().
</p>
<p>
    navigate().refresh () Exemple d'utilisation:
</p>
<p>
    · N'a besoin d'aucun paramètre.
</p>
<p>
    · Il actualise la page en cours.
</p>
<p>
    navigate ().back() Exemple d'utilisation:
</p>
<p>
    · Pas besoin de paramètres
</p>
<p>
    · Vous ramène d'une page à l'historique du navigateur.
</p>
<p>
    browse (). forward () Exemple d'utilisation:
</p>
<p>
    · Pas besoin de paramètres
</p>
<p>
    · Vous fait avancer d'une page sur l'historique du navigateur.
</p>`;