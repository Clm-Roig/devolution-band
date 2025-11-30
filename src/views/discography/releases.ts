export interface Track {
  title: string
  lyrics?: string
}

export interface Release {
  id: string
  title: string
  coverImage: string
  year: number
  releaseInfo: string
  tracks: Track[]
  credits: {
    label: string
    content: string
    link?: string
    linkLabel?: string
  }[]
}

export const releases: Release[] = [
  {
    id: 'labsolution',
    title: "L'Absolution (Double-single)",
    coverImage: 'labsolution_cover.jpg',
    year: 2024,
    releaseInfo: 'Self-released',
    tracks: [
      {
        title: "L'Absolution",
        lyrics: `Impuissance contre impunité,
Jouissance sans culpabilité
Profanation de l'éternelle
Indicible souffrance charnelle

Corps d'aube et cocon d'âme dépossédés
Secret, confiance sacrés invoqués
Doux visage, yeux d'émeraude
Cornes vicieuses, à la honte, une ode

Quand brille l'espoir de la justice
Nouvelle instance de supplice
Silence ! Mensonge !

Oserais-tu ternir l'éclat de la sagesse
Mordre la main qui t'a couvert de largesses

Va en paix, dompte ton feu intérieur
Le confort de l'oubli t'est promis
À tes jours meilleurs

Le temps n'érode jamais
Les cicatrices et les douleurs
Se refermeront-elles les plaies
De mes cauchemars aux mille couleurs
(Sordides)

Quand brille l'espoir de la justice
Nouvelle instance de supplice
Silence ! Mensonge !

Oserais-tu ternir l'éclat de la sagesse
Mordre la main qui t'a couvert de largesses

Un seul juge saura le punir
Le Très Haut par sa voix blanche
Sait ce que tu as fait subir
Bientôt, nous aurons notre revanche
Ton âme pourrie, comme ton cœur
Fera pencher la balance
Aux portes de la mort
Ne tiendra jamais ta défense

Mon père, le démon a guidé ma chair
De grâce, à Lui, je demande pardon

Mon fils, au nom du très saint, de notre père
Par ces mots, j'accorde à ton être l'Absolution`,
      },
      {
        title: "Lunatic of God's Creation (Deicide cover)",
        lyrics: `Servants of death, enchanter of pain
From the land of no return, you’ll kill again
Smear the blood on the naked corpse
Manson

Lunatic of God’s creation
No resist
Hear the voices of devastation

There is darkness in his eyes
And you won’t see it, before you die
Feel the knife of the Lord divine’s creation

Lunatic of God’s creation
No resist
Hear the voices of devastation`,
      },
    ],
    credits: [
      {
        label: 'Interpreted by',
        content: 'Clément (guitar & vocals), Antoine (guitar), MAD (drums), Lunel (bass)',
      },
      {
        label: 'Writting & lyrics',
        content: "Antoine (L'Absolution)",
      },
      {
        label: 'Arrangement',
        content:
          "Clément (L'Absolution / Lunatic of God's Creation), Lunel (Lunatic of God's Creation)",
      },
      {
        label: 'Drum recording',
        content: 'Frédéric Blanchard',
        link: 'https://silentruinsstudio.fr/',
        linkLabel: 'Silent Ruins Studio',
      },
      {
        label: 'Guitar / bass / vocals recording, mix & master',
        content: 'Clément',
        link: 'https://onyx-studio.fr',
        linkLabel: 'Onyx Studio',
      },
      {
        label: 'Artwork',
        content: 'Demonios de Dolores',
        link: 'https://www.instagram.com/demonios_de_dolores/',
      },
    ],
  },
  {
    id: 'consumer',
    title: 'Consumer (Album)',
    coverImage: 'consumer_cover.jpg',
    year: 2021,
    releaseInfo: 'Self-released',
    tracks: [
      {
        title: 'Aux Portes du Vide',
        lyrics: `Dans le siège de ma raison,
Sous les archives de mon existence,
Demeure cette cloison,
Barrière à ma démence.

Constamment fermées, emprisonnant
Ce flux fertile permanent,
Source des idées et des jugements.
Elles les protègent du néant.

Protection déraisonnable,
Que de dresser cette égide en vain,
Par crainte de l’inexorable
Montée des marées du destin !

Aux portes du vide !
Dans mon inconscience,
Dans les limbes, réside,
La clé, fruit de l’insouciance.

Rarement entrebâillées,
De par ces charnières rouillées,
Paralysé sur le seuil,
De mon repos, je fais le deuil.

Désespérément, mon âme fait crisser
Ses ongles sur la serrure.
Supplier pour pénétrer,
Se débarrasser de cette souillure.`,
      },
      {
        title: 'Le Poids du Jugement',
        lyrics: `Tourments permanents,
Esprit désemparé et troublé,
Leurs visions m’entravent,
Mon esprit est sous leur joug.

Hostiles individus,
Ils seront ignorés.
Ces impropres paroles,
En douter et demeurer.

Influences perpétuelles,
Cette charge ne doit me dominer,
Pesée spirituelle,
Seul, je trace ma destinée.

Considérer, évaluer
Nos discordances.
Survivre et s’équilibrer,
Dans l’adversité.

Le poids du jugement !
Le poids du jugement !

Influences perpétuelles,
Cette charge ne doit me dominer,
Pesée spirituelle,
Seul, je trace ma destinée.`,
      },
      {
        title: "De l'Étincelle à la Conflagration",
        lyrics: `Élément primordial, rare,
Fruit de circonstances hasardeuses,
Perçu comme une menace,
Je fascine l’homme depuis l’aube des temps.

Monstre de flammes imprévisible,
Galvanisé par la sécheresse,
Déchaîné par les vents,
L’orage est mon étincelle.
J’engloutis toute forme de vie.

Asservi, capturé,
Ou fruit de vos expérimentations,
Aux dépens de la nuit et de la mort,
Vos jours, vos vies j’ai prolongés.

De l’étincelle,
Sauvage, indomptée.
À la conflagration,
Surnaturelle abomination.

Brûler, se nourrir,
Brûler, dans les cendres,
Brûler, se répandre,
Brûler, les voir mourir.

De l’étincelle,
Sauvage, indomptée.
À la conflagration,
Surnaturelle abomination.`,
      },
      {
        title: "Au Crépuscule de l'Humanité",
        lyrics: `Exécrables parasites,
Aveuglés et leurrés,
Ils se croyaient protégés
Des fruits de leurs péchés.

Au crépuscule de l’humanité,
Sombres lueurs d’espoir.
Au crépuscule de l’humanité,
Éclatant désespoir.

Chape de plomb cérébrale
Obstruant toute pensée.
L’agonie marche vers ces contrées
Prétendument immaculées.

Au crépuscule de l’humanité,
Sombres lueurs d’espoir.
Au crépuscule de l’humanité,
Éclatant désespoir.

De son ombre pernicieuse,
L’effroi tapisse leur conscience
Et annihile
Toutes pensées sereines.

Au crépuscule de l’humanité,
Sombres lueurs d’espoir.
Au crépuscule de l’humanité,
Éclatant désespoir.`,
      },
      {
        title: 'Déliquescence',
        lyrics: `Luttant contre leurs semblables,
Corrompus, ils les écrasent.
Aveuglés, pieds et poings liés,
Formatés et inadaptés.

Inexorable, l’impuissance s’infiltre
Et souille leurs entrailles.
Le rideau du désespoir tombe lentement,
Sur leurs consciences harassées.

Du désespoir à la colère,
Du pouvoir à la peur,
Transmutation irréversible !

Instoppable déliquescence,
Fatale obsolescence,
Du crépuscule jaillit,
Cette nuit infinie.

Leur rédemption n’est qu’illusion,
À tort bafoués et moqués,
Espoir, coopération
Absurdes utopies conspuées.

Acteurs de ce suicide à grande échelle,
Déplorant les effets dont ils chérissent les causes.

Instoppable déliquescence,
Fatale obsolescence,
Du crépuscule jaillit,
Cette nuit infinie.

Leur rédemption n’est qu’illusion,
À tort bafoués et moqués,
Espoir, coopération
Utopies réalisées.`,
      },
      {
        title: 'Vestiges',
        lyrics: `Plongé dans l’incertitude,
Depuis les premières secondes,
Sondant mes aspirations profondes,
Découvrir ma plénitude.
La voie de l’aboutissement
Disparaît derrière l’horizon.
Je poursuis ma quête inlassablement,
Assoiffé par mes interrogations.

Vestiges, vestiges, vestiges, vestiges !
L’existence n’est que le sillage tracé par la somme de nos actes,
Chahutés, nos destins se mêlent et s’unissent,
S’influencent par leurs multiples contacts,
Naissent, subsistent ou s’évanouissent.

Subsister après notre repos éternel,
N’est-ce que par pure vanité ?
Comprendre ces inéluctables causalités,
S’apaiser et les accepter.

Vestiges, vestiges, vestiges, vestiges !
L’existence n’est que le sillage tracé par la somme de nos actes,
Chahutés, nos destins se mêlent et s’unissent,
S’influencent par leurs multiples contacts,
Naissent, subsistent ou s’évanouissent.`,
      },
      {
        title: "Écimer l'Âme",
        lyrics: `Tout au long de l’existence,
Secoué, blessé et entravé,
Par ses pantins aveuglés,
Par ses invisibles règles et instances.

Sculptée par les codes implicites,
Les branches de ma personnalité
Sont coupées, tranchées, suturées.
Mon âme n’est plus qu’anthracite.

Bâillonné et contraint à la mutation,
L’expression de mon être n’est que silence.
Imposant l’anonymat comme prison,
Seul chemin vers l’espérance.

Ci-gisent les bourgeons de mon âme,
Martyrs de cet esprit consensuel.
Ressort profond du contrôle mutuel,
Conformisme infâme.

Sculptée par les codes implicites,
Les branches de ma personnalité
Sont coupées, tranchées, suturées.
Mon âme n’est plus qu’anthracite.`,
      },
      {
        title: 'Chaos Cérébral',
        lyrics: `Ces provocations extérieures,
Sans relâche, éveillent mes sens.
Mes neurones s’activent
Dans une cacophonie infernale.

De cette spirale indisciplinée,
Les hypothèses naissent et affluent,
S’entrechoquent et disparaissent.
De ce fracas, éclosent des perspectives.

Chaos, chaos, cérébral !
Chaos, chaos, cérébral !
Chaos, chaos, cérébral !
Chaos, chaos, cérébral !

Flot impitoyable et indompté,
Déferlant dans ce carcan osseux,
Capturé et enchaîné,
Torrent chaotique et furieux.

Chaos, chaos, cérébral !
Chaos, chaos, cérébral !
Chaos, chaos, cérébral !
Chaos, chaos, cérébral !

Un à un, ces fragments du présent
Écorchent ma vision,
Taisent toute décision,
Furieux hurlements !

Horizons multiples,
L’étendue des possibles se dresse.
Que ces visions disparaissent !
Que le réel me redevienne perceptible !

Chaos, chaos, cérébral !
Chaos, chaos, cérébral !
Chaos, chaos, cérébral !
Chaos, chaos, cérébral !`,
      },
    ],
    credits: [
      {
        label: 'Interpreted by',
        content: 'Clément (guitar, bass, vocals, drums programming)',
      },
      {
        label: 'Writting & lyrics',
        content: 'Clément',
      },
      {
        label: 'Record / Mix / Master',
        content: 'Clément',
        link: 'https://onyx-studio.fr',
        linkLabel: 'Onyx Studio',
      },
      {
        label: 'Artwork & graphic design',
        content: 'Julie Docteur',
        link: 'https://www.instagram.com/liminalmarks/',
        linkLabel: 'Liminal Marks',
      },
      {
        label: 'Pictures',
        content: 'Laura Kaczmarek',
        link: 'https://laurakaczmarek.fr/',
      },
    ],
  },
  {
    id: 'perpetual-motion',
    title: 'The Perpetual Motion (Demo)',
    coverImage: 'the_perpetual_motion_cover.jpg',
    year: 2015,
    releaseInfo: 'Self-released',
    tracks: [
      {
        title: 'Dawn',
        lyrics: '[Instrumental]',
      },
      {
        title: 'Reduced to Ash',
        lyrics: `Hate in blood, wild spirit changed us in war machines.
Ready to annihilate. For glory, hurt deadly.
Relentless, merciless.
No questions, smash these fools !

Time to slaughter, to butcher war is art.
Let your bloodlust lead your rage to their heart.

We remain deaf to your laments, we crush all opposition forms.
You are just a weak kind of life ahead a furious storm.
Pray your wretched gods if you want, nothing can't stop the punishment
Except your painful and slow death on this morbid lowland.

Our wrath curves your flesh, crush your bones in thin dust.
You’re nothing more than germs, for this earth you’re useless.
Relentless, merciless.
Just one rule, kill or die !

Time to slaughter, to butcher war is art.
Let your bloodlust lead your rage to their heart.

Burn your mind, insane
Leave your skin, die !

Burn your mind, soulless
Nil right now, reduced to ash !`,
      },
      {
        title: 'Even the Most Powerful Ones Must Die',
        lyrics: `Two tyrants fallen, one territory
 Top of food chain, lords of misery
 Blind faith destroyed them
 Watch the world going to mayhem

Fire and death reign in this place
Nobody survived to the furious wrath

Strike all creatures, crushed deeper
For your stupid thirst of power
You walk on the earth alone in dust
The kingdom's ravaged by them
Once again

 After so many millenaries
 Of evolution you’re now fallen
 'cause of your scorn wasted away
 Your decay will come
 From your flesh, from their tears, from their blood
To a new age

Extermination, the last wave of treat
Empty the earth of wild beasts

Every hope of life is swallowed
It's time to let the silent spread
Your future is reduced to ash
Genocide, rebirth a new cycle begins...
Right now!`,
      },
    ],
    credits: [
      {
        label: 'Interpreted by',
        content: 'Clément (guitar, drums programming), Steeve (vocals), Maelstrom (bass)',
      },
      {
        label: 'Writting',
        content: 'Clément',
      },
      { label: 'Lyrics', content: 'Clément & Steeve' },
      {
        label: 'Record / Mix / Master',
        content: 'Clément',
      },
      {
        label: 'Artwork',
        content: 'Clément',
      },
    ],
  },
]
