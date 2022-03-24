const { Article } = require("../models");

const articledata = [
  {
    title: "Long Shot: The Dice Game",
    article_text_1:
      "This is your ticket to the track!  In Long Shot: The Dice Game, you and up to seven other players will strategize and push your luck as the action unfolds in a tense race of eight horses. During the game you buy horses, place bets, influence race movement, and utilize special abilities. The roll of the dice determines which horses move and the options available each turn, so be ready to adapt your plans. Once three horses cross the finish line, earnings are totaled. While there are many ways to earn money during a horse race, only the player that makes the most money will be declared the winner. Will you play it safe, or risk it big on a long shot?",
    article_text_2:
      "This game is an updated version of our 2009 hit Long Shot.  Here we have made attempts to speed up the gameplay.  Each turn a player rolls the dice and then everyone gets to perform one quick action and then your back to the race with another dice roll sending the horses speeding around the track.  Visit our store page to get your copy today.  Also stay tuned for a future article where we interview the designer Chris Handy and give you a behind the scenes look at the process behind making this game.",
  },
  {
    title: "Twilight Imperium: Fourth Edition",
    article_text_1:
      "Twilight Imperium (Fourth Edition) is a game of galactic conquest in which three to six players take on the role of one of seventeen factions vying for galactic domination through military might, political maneuvering, and economic bargaining. Every faction offers a completely different play experience, from the wormhole-hopping Ghosts of Creuss to the Emirates of Hacan, masters of trade and economics. These seventeen races are offered many paths to victory, but only one may sit upon the throne of Mecatol Rex as the new masters of the galaxy.",
    article_text_2:
      "No two games of Twilight Imperium are ever identical. At the start of each galactic age, the game board is uniquely and strategically constructed using 51 galaxy tiles that feature everything from lush new planets and supernovas to asteroid fields and gravity rifts. Players are dealt a hand of these tiles and take turns creating the galaxy around Mecatol Rex, the capital planet seated in the center of the board. An ion storm may block your race from progressing through the galaxy while a fortuitously placed gravity rift may protect you from your closest foes. The galaxy is yours to both craft and dominate.  Visit our Store Page to get your copy today.",
  },
  {
    title: "Cosmic Encounter",
    article_text_1:
      "Build a galactic empire... In the depths of space, the alien races of the Cosmos vie with each other for control of the universe. Alliances form and shift from moment to moment, while cataclysmic battles send starships screaming into the warp. This classic game of alien politics returns from the warp once more!",
    article_text_2:
      "In Cosmic Encounter, each player becomes the leader of one of dozens of alien races, each with its own unique power. On a player's turn, he or she becomes the offense. The offense encounters another player on a planet by moving a group of his or her ships through the hyperspace gate to that planet. Both sides can invite allies and play cards to try and tip the encounter in their favor. The object of the game is to establish colonies in other players' planetary systems. The winner(s) are the first player(s) to have five colonies on any planets outside his or her home system. These colonies may all be in one system or scattered over multiple systems. The players must use force, cunning, and diplomacy to ensure their victory. And, because alliances are a key part of the game, multiple players can win together!  Vist our Store Page to get your copy today.",
  },
  {
    title: "Picture Perfect",
    article_text_1:
      "How do you take the perfect picture of a group of people if you only have one try? Each character has different wishes. Some want to be at the front of the picture; some want to stand next to another; and some really don't want to be next to that one particular person by any means. Do your best to make everyone happy even if you don't actually know all the characters' preferences… ",
    article_text_2:
      "In Picture Perfect, first released as Der Perfekte Moment, you need to arrange fourteen characters to take the perfect photograph. Each of them has three specific desires that you want to fulfill. Unfortunately, these desires are hidden in envelopes. During the game, the players try to take a look inside these envelopes to figure out how to place the characters correctly. To do so, they trade their information with others — or maybe try to hide it... Whoever earns the most points at the end of the game has fulfilled the most desires and becomes the master photographer.",
  },
];

const seedArticles = () => Article.bulkCreate(articledata);

module.exports = seedArticles;
