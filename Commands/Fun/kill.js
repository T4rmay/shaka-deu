const Discord = module.require("discord.js");

module.exports = {
  name: "kill",
  description: "Kills a user",
  run: async (client, message, args) => {
    let target = message.mentions.members.first() || args.join(" ");
    let author = message.member;
    let isBotOwner = require("../../config.json").OWNER_ID;
    if (args.length == 0) {
      return message.channel
        .send("Damn, You are trying to kill the air..??")
        .then((msg) => setTimeout(() => msg.delete(), 2300));
    }
    var kills = [
      `${author} lässt sich nach einem langen Tag mit ${target} auf die Couch fallen und schaltet The Big Bang Theory ein. Nach einem Sheldon-Cooper-Witz lacht ${target} unkontrolliert, sodass ${target} einen Lachanfall bekommen hat!`,
      `${author} Alt+F4'd ${target}.exe!`,
      `${author} versuchte, eine Flöte zu spielen, wobei ${target}'s Kopf explodierte!`,
      `${author} blies sein Trommelfell aus, als er zu stark Musik hörte!`,
      `${author} fordert ${target} zu einem Faustkampf auf Leben und Tod heraus. ${target} gewinnt!`,
      `${author} spaltet den Kopf von ${target} mit einer Tastatur!`,
      `${author} zerquetscht ${target} mit einem Kühlschrank!`,
      `${author} enthauptet ${target} mit einem Schwert!`,
      `${author} zieht ${target}s Ohren zu stark und reißt sie ab!`,
      `${author} ertränkt ${target} in einem Bierfass!`,
      `${author} ertränkt ${target} in einem Becher heißer Schokolade! *Wie war dein letztes Getränk?*`,
      `${author} weidet ${target} mit einem rostigen Buttermesser aus! Ouch!`,
      `${author} füttert mit Zahnpasta gefüllte Oreos an ${target}, die anscheinend allergisch gegen Fluor waren! GGWP.`,
      `${author} verliebte sich in ${target} und brach ihm dann buchstäblich das Herz!`,
      `${author} feuert einen gefrorenen Überschalltruthahn auf ${target} und tötet ihn sofort!`,
      `${author} vergaß das Autotürfenster offen zu lassen und ${target} stirbt an Überhitzung!`,
      `${author} vergessen, den Rasen von ${target} zombiesicher zu machen... Sieht so aus, als hätten die Zombies letzte Nacht ein Festessen gehabt!`,
      `${author} bekommt ${target}, um mit ihnen Anime zu schauen. ${target} konnte damit nicht umgehen.`,
      `${author} schnappt sich ${target} und schiebt sie mit etwas Saft in eine Auto-Freeze-Maschine und stellt die Temperatur auf 100 Kelvin ein, wodurch menschliche Eiswürfel erzeugt werden!`,
      `${author} hat mich angeheuert, dich zu töten, aber ich will nicht! ${target}`,
      `${author}umarmt ${target} zu fest..`,
      `${author} Hulk zerschmettert ${target} zu Brei!`,
      `${author} hat ${target} getötet, indem er ihnen die Haut vom Gesicht gerissen und eine Maske daraus gemacht hat!`,
      `${author} tötet ${target} nach stundenlanger Folter!`,
      `${author} tötet ${target} mit einer Kerze in der Studie!`,
      `${author} tötet ${target} mit Freundlichkeit!`,
      `${author} tötet ${target} mit ihrem eigenen Fuß!`,
      `${author} ermordet ${target} mit einer Axt!`,
      `${author} auf Löschen gedrückt. Es hat gelöscht ${target}`,
      `${author} schiebt ${target} in das kalte Vakuum des Weltraums!`,
      `${author} fährt ${target} mit einem PT-Kreuzer über!`,
      `${author} schießt ${target} in den Kopf.`,
      `${author} schießt mit einem Regenbogenlaser in den Mund von ${target}, was dazu führt, dass der Kopf von ${target} mit Regenbögen explodiert und ${target} als Einhorn wiedergeboren wird. :Einhorn:`,
      `${author} hat ${target} mit der Starkiller-Basis erschossen!`,
      `${author} schlüpft Bleichmittel in die Limonade von ${target}.`,
      `${author} erwürgt ${target}.`,
      `${author} schnallt ${target} an eine Interkontinentalrakete und schickt sie zusammen nach Nordkorea.`,
      `${author} schlägt ${target} mit dem Todesfluch... *Avada Kedavra!*`,
      `${author} reißt ${target}s Lippen nach einem Kuss ab.`,
      `${author} thicc und kollabiert den Brustkorb von ${target}`,
      `${author} versucht auf die breite Seite einer Scheune zu schießen, verfehlt und trifft stattdessen ${target}.`,
      `${author} schaltet Gänsehaut (Film von 2015) auf dem Fernseher ein. ${target} stirbt als Angsthase an einem Herzinfarkt.`,
      `${author} war so swag, dass ${target} daran gestorben ist. #Swag`,
      `${author}, willst du ${target} wirklich töten? Sie scheinen mir nett zu sein.`,
      `${target} hat aus Versehen auf eine Popup-Werbung geklickt, die lautet: \`Ärzte hassen uns, sehen Sie sich den einen besten Trick an, um heute zu sterben!\``,
      `${target} stolperte aus Versehen und starb, als sie aufstand, um ihren Abschiedsbrief zu schreiben.`,
      `${target} hat ein Stück exotische Butter gegessen. Es war so erstaunlich, dass es sie getötet hat.`,
      `${target} aß einen Apfel und stellte sich heraus, dass er aus Wachs bestand. Später an diesem Tag starb jemand an einer Wachsvergiftung.`,
      `${target} hat zu viele Abführmittel gegessen und ist in ihrer eigenen Scheiße ertrunken. Ew.`,
      `${target} blutet aus, nachdem er versucht hat, in \`dümmste Hinterwäldler-Momente\` zu kommen.`,
      `${target} kaufte einen Zappelspinner und ertrank in der Muschi.`,
      `${target} kann nicht getötet werden, da sie ein Geist sind.`,
      `${target} erstickt in einem Mülleimer.`,
      `${target} würgt an einem Hühnerknochen.`,
      `${target} erstickt an Cheerios und stirbt. Was für ein Idiot...`,
      `${target} dreht das Musiksystem hoch, nur um festzustellen, dass die Lautstärke auf Maximum war und der Song Baby von Justin Beiber gespielt wurde...`,
      `${target} spritzt ins Auge, erblindet, rennt um Hilfe, rennt aber direkt auf die Bahngleise und wird von einem Zug umgepflügt.`,
      `${target} entschied, dass es eine gute Idee war, einen Tiger zu bekämpfen, während er nach Fleisch roch. Es endete nicht gut.`,
      `${target} hat ein Meme nicht geil genug gemacht und war stoned.`,
      `${target} starb, nachdem er 50 Mal hintereinander ohne Unterbrechung gekippt hatte.`,
      `${target} starb, nachdem er 90 Stunden am Stück gespielt hatte, ohne sich zu bewegen oder zu essen.`,
      `${target} starb, nachdem er mit einem kantigen Zappelspinner mit Rasierklingen gespielt hatte.`,
      `${target} starb, als sie merkte, wie beschissen ihre Grammatik war`,
      `${target} starb, nachdem er versucht hatte, Dank Memer auszutricksen.`,
      `${target} ist eines ehrenvollen Todes gestorben. Tod durch Snoo Snoo.`,
      `${target} starb, weil RemindMeBot vergessen hat, sie ans Atmen zu erinnern`,
      `${target} ist gestorben, weil sie angefangen haben, mit einem Zappelspinner zu spielen, aber sie erkennen, dass es 2016 ist, also fängst du an, auf die alte Hexe in Schneewittchen zu hauen und Obama fängt an, ihren Rasen zu mähen und sie springen aus dem Fenster und werden von Obamas in Stücke gerissen Rasenmäher`,
      `${target} starb, weil ${author} so dumm war`,
      `${target} starb, weil er in Vorbereitung auf sein Date am Freitagabend VIEL zu viele Hotdogs gegessen hatte.`,
      `${target} starb beim Essen von abgelaufenem und infiziertem rohem Fisch mit dem schmutzigsten Reis der Welt als Sushi, während er ständig mit einem 9-Zoll-Nagel in den Hodensack gestochen wurde, der scharf genug war, um durch Kevlar zu stechen. Die Sojasauce war Katzenpisse.`,
      `${target} starb an einer hohen Salzaufnahme`,
      `${target} starb an einem schnellen Tritt ins Gehirn.`,
      `${target} starb an einer tragischen Menge an Misserfolg`,
      `${target} starb an der Eiskübel-Challenge.`,
      `${target} ist gestorben, weil sie zu viel Wasser getrunken hat Huh, ich denke, es IST möglich!.`,
      `${target} ist an Kaktusnadeln gestorben.`,
      `${target} ist gestorben, weil sie zu viel Arsch gegessen hat.`,
      `${target} starb an zu viel Brot :/`,
      `${target} ist an Ebola gestorben.`,
      `${target} starb an einer Meme-Unterdosis :/`,
      `${target} ist gestorben, weil er nicht genug Arsch gegessen hat.`,
      `${target} starb, weil er es nicht genug verprügelt hatte. (Es gibt ein gesundes Gleichgewicht, Jungs)`,
      `${target} starb durch Reposting in der falschen Nachbarschaft`,
      `${target} ist 36 Stunden am Stück durch Scheiße gestorben.`,
      `${target} starb durch zu schnelles Verschlucken von Steinen`,
      `${target} ist an zu vielen Sonnenbränden gestorben.`,
      `${target} ist gestorben, weil er zu viel draufgehauen hat. (Es gibt ein gesundes Gleichgewicht, Jungs)`,
      `${target} starb an Übererfolg`,
      `${target} starb beim Testen einer Wasserstoffbombe. Es gibt nichts mehr zu begraben.`,
      `${target} starb beim Hören von 'It's every day bro'`,
      `${target} starb beim Hüpfen auf *scheinbar* deaktivierten Landminen.`,
      `${target} starb beim Versuch, die Stadt England zu finden`,
      `${target} ist gestorben. OOF`,
      `${target} stirbt nach dem Verschlucken eines Zahnstochers.`,
      `${target} stirbt durch ${author}.`,
      `${target} stirbt, weil sie eine Haarnadel benutzt haben, um ihre Wimpern zu heben`,
      `${target} stirbt, weil sie einfach zu wütend waren.`,
      `${target} stirbt durch Fluchen auf einem christlichen Minecraft-Server`,
      `${target} stirbt aus Mangel an Freunden.`,
      `${target} stirbt an schlechtem Erfolg.`,
      `${target} stirbt durch zu starkes Tupfen.`,
      `${target} stirbt durch zu starkes Tupfen`,
      `${target} stirbt an respektlosen Wahmen.`,
      `${target} stirbt, weil er nur ein schlechter, unsympathischer Typ ist.`,
      `${target} stirbt durch das Posten von Normie-Memes.`,
      `${target} stirbt an starker Abneigung gegen Sand. Es ist grob und rau und irritierend kommt es überall an`,
      `${target} stirbt daran, sich den Emoji-Film anzusehen und ihn zu genießen.`,
      `${target} stirbt bei einem schrecklichen Unfall und wurde von ${author} entwickelt.`,
      `${target} stirbt nördlich der Mauer und verwandelt sich in einen weißen Wanderer`,
      `${target} stirbt an AIDS.`,
      `${target} stirbt an Ruhr.`,
      `${target} stirbt eines natürlichen Todes.`,
      `${target} verhungert.`,
      `${target} stirbt im Todestrakt durch eine tödliche Injektion, nachdem er ${author} und ihre Familie ermordet hat.`,
      `${target} stirbt, aber lassen Sie sich dadurch nicht von der Tatsache ablenken, dass The Undertaker 1998 die Menschheit aus Hell In A Cell geworfen hat und 5 Meter durch einen Ansagertisch gestürzt ist`,
      `${target} stirbt.`,
      `Nach einem Kampf tötet ${target} ${author}`,
      `${target} ist aus dem Universum verschwunden.`,
      `${target} hat giftiges Soda getrunken, bevor es zurückgerufen wurde.`,
      `${target} ließ ein Nokia-Handy auf ihr Gesicht fallen und spaltete ihren Schädel.`,
      `${target} ertrank in ihren eigenen Tränen.`,
      `${target} isst zu viel Copypasta und explodiert`,
      `${target} ist beim Spielen von Pokemon Go von einer Klippe gefallen. Gut gemacht, die Nase in diesem kümmerlichen Telefon zu behalten. :iphone:`,
      `${target} ist in eine Grube wütender Feministinnen gefallen.`,
      `${target} wird von einem Auto angefahren.`,
      `${target} wird von ${author} erstochen`,
      `${target} wird vom Blitz getroffen.`,
      `${target} geht Völkermord und Sans taucht ${target} total ein!`,
      `${target} geriet in einen Messerkampf mit dem Papst. Einer von ihnen ist jetzt in der Hölle.`,
      `${target} wurde von einem Elefanten getreten.`,
      `${target} ist gestorben, weil sie zu viel Arsch gefressen hat.`,
      `${target} hat nach einem traurigen, elenden Dasein einen Schlaganfall. Sie werden dann von ihren üppigen Katzen gefressen.`,
      `${target} wurde für schuldig befunden, Zeit für ihre Hinrichtung!`,
      `${target} hat schlechtes chinesisches Essen und zahlt den ultimativen Preis.`,
      `${target} wird von Außerirdischen entführt und die Regierung tötet sie, um es zu vertuschen.`,
      `${target} ist tot durch ${author}.`,
      `${target} wird mit Schokoladensirup injiziert, der sie zu einer Person aus Schokolade mutiert. Während eines Nebenjobs in der Kita werden sie von den hungrigen Babys verschlungen. :chocolate_bar:`,
      `${target} wird von einem Kaninchen mit einem teuflischen Streifen von einer Meile Breite getötet`,
      `${target} wird durch ihre eigene Dummheit getötet.`,
      `${target} wird bei einem fehlgeschlagenen Raubüberfall getötet.`,
      `${target} kann nicht getötet werden. Oh, warte, nein, ${author} tötet sie sowieso.`,
      `${target} ist so dumm, dass sie an Sauerstoff erstickt sind.`,
      `${target} wird von Freddy bei Nachtwache in einen Anzug gestopft. Oh, nicht wieder diese Animatronik!`,
      `${target} wird in Minecraft gesaugt. ${target}, ein Neuling im sogenannten Real-Life Minecraft, steht vor dem Game Over-Bildschirm.`,
      `${target} hat sich umgebracht, nachdem sie die Normie-Memes gesehen haben, die ${author} postet.`,
      `${target} bringt sich um, nachdem sie erkannt hat, wie dumm ${author} ist.`,
      `${target} lebt trotz des Mordversuchs von ${author}.`,
      `${target} verliert den Lebenswillen`,
      `${target} drückt einen zufälligen Knopf und wird in eine Höhe von 100m teleportiert, wodurch sie in ihren unvermeidlichen Tod stürzen können. Moral der Geschichte: Gehen Sie nicht herum und drücken Sie zufällige Tasten.`,
      `${target} liest Meme, bis sie sterben.`,
      `${target} hat ihm das Herz herausgerissen..`,
      `${target} hat ihr eigenes Herz herausgerissen, um ihre Liebe zu ${author} zu zeigen.`,
      `${target} schreit entsetzt, als sie versehentlich im Cthulhu spawnen, während sie zufällige lateinische Wörter äußern. Cthulhu packt ${target} am rechten Bein und bringt sie in seine Dimension und schreit: \`Schatz, das Abendessen ist fertig!\``,
      `${target} ist im Badezimmer ausgerutscht und am Duschvorhang erstickt.`,
      `${target} rutscht auf einer Bananenschale aus und fällt die Treppe runter.`,
      `${target} dreht einen Zappelspinner und wenn er aufhört, stirbt er...`,
      `${target} tritt auf einen George Vorarbeiter und stirbt an Waffelfuß.`,
      `${target} bringt einen Pfeil zum Knie. Und überall sonst.`,
      `${target} hat mit Mods geredet und wurde vom Bannhammer zerstört.`,
      `${target} kippt seinen Filzhut zu weit und fällt auf die Gleise einer entgegenkommenden U-Bahn.`,
      `${target} versuchte schlau zu werden, aber sie haben sich versehentlich mit der Schere geschnitten.:scissors:`,
      `${target} hat versucht, auf YouTube berühmt zu werden, indem er etwas Dummes live streamte. Fallschirmspringen, während man an einen Kühlschrank gekettet ist.`,
      `${target} hat versucht, einem Zug zu entkommen, der Zug hat gewonnen.`,
      `${target} hat versucht, den heiligen Gral herauszusuchen. Er hat... schlecht gewählt.`,
      `${target} hat versucht, auf der Straße zu spielen...`,
      `${target} stolpert über seine eigenen Schnürsenkel und stirbt.`,
      `${target} widersetzte sich lautstark den Clintons und verschwand dann plötzlich.`,
      `${target} war ein Bewohner von Alderaan, bevor Darth Vader den Planeten zerstörte...`,
      `${target} wurde beschuldigt, Neptuns Krone gestohlen zu haben...`,
      `${target} hat ihr Samsung Galaxy Note 7 aufgeladen...`,
      `${target} wurde von Ameisen lebendig gefressen`,
      `${target} erhielt die Chance, Element 119 (Ununennium) zu synthetisieren und nach ihnen benannt zu bekommen, aber sie haben es vermasselt. R.I.P.`,
      `${target} wurde von ${author} mit Babytüchern getötet.`,
      `${target} wurde von ${author} ermordet und jeder weiß es, aber es gibt keine Beweise.`,
      `${target} wurde von ${author} geschöpft und ihre Innereien sind jetzt Ennard.`,
      `${target} wurde auf die Zeitachse teleportiert, in der Jurassic World real war, und sie wurden von Indominus Rex lebendig gefressen.`,
      `${target} wurde von ${author} in den Brecher eines Müllwagens geworfen.`,
      `${target} ging normal, als sie aus dem Augenwinkel sahen, wie jemand eine Flasche umdrehte und abtupfte, wodurch ${target} einen Schlaganfall bekam.`,
      `${target} hat sich den Emoji-Film angesehen und ist vor lauter Erschaudern gestorben.`,
      `${target} hat eine Fahrt mit einem Bleiballon gemacht.`,
      `Nachdem er von ${author} ins Meer gestoßen wurde, wird ${target} von einem Hai gefressen.`,
      `Nach einer Razzia von Roblox-Kindern, die den Server betraten, starb ${target} an Krebs.`,
      `Aids, ${target} ist an Aids gestorben.`,
      `Die göttlichen Mächte anrufend, schlägt ${author} ${target} und ihre heidnischen Wege`,
      `In einer plötzlichen Wendung der Ereignisse töte ich ${target} **nicht**.`,
      `Nein du`,
      `Unser Herr und Retter Gaben trifft ${target} mit einem Blitz.`,
      `Entschuldigung, ${author}, ich mag es nicht, Menschen zu töten.`,
      `Die Kugel verfehlte Harambe und traf stattdessen ${target}. Juhu für Harambe!`,
      `Bei der Koloskopie an einem Elefanten bleibt ${target} mit dem Kopf im Mastdarm des Elefanten stecken und erstickt.`,
    ];
    await message.channel.send(kills[Math.floor(Math.random() * kills.length)]);
  },
};