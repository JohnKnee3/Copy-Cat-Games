const { Article } = require("../models");

const articledata = [
  {
    title: "Long Shot: The Dice Game",
    article_text_1:
      "This is your ticket to the track!  In Long Shot: The Dice Game, you and up to seven other players will strategize and push your luck as the action unfolds in a tense race of eight horses. During the game you buy horses, place bets, influence race movement, and utilize special abilities. The roll of the dice determines which horses move and the options available each turn, so be ready to adapt your plans. Once three horses cross the finish line, earnings are totaled. While there are many ways to earn money during a horse race, only the player that makes the most money will be declared the winner. Will you play it safe, or risk it big on a long shot?",
    article_text_2:
      "This is your ticket to the track!  In Long Shot: The Dice Game, you and up to seven other players will strategize and push your luck as the action unfolds in a tense race of eight horses. During the game you buy horses, place bets, influence race movement, and utilize special abilities. The roll of the dice determines which horses move and the options available each turn, so be ready to adapt your plans. Once three horses cross the finish line, earnings are totaled. While there are many ways to earn money during a horse race, only the player that makes the most money will be declared the winner. Will you play it safe, or risk it big on a long shot?",
  },
  {
    title: "Twilight Imperium: Fourth Edition",
    article_text_1:
      "Twilight Imperium (Fourth Edition) is a game of galactic conquest in which three to six players take on the role of one of seventeen factions vying for galactic domination through military might, political maneuvering, and economic bargaining. Every faction offers a completely different play experience, from the wormhole-hopping Ghosts of Creuss to the Emirates of Hacan, masters of trade and economics. These seventeen races are offered many paths to victory, but only one may sit upon the throne of Mecatol Rex as the new masters of the galaxy.",
    article_text_2:
      "Twilight Imperium (Fourth Edition) is a game of galactic conquest in which three to six players take on the role of one of seventeen factions vying for galactic domination through military might, political maneuvering, and economic bargaining. Every faction offers a completely different play experience, from the wormhole-hopping Ghosts of Creuss to the Emirates of Hacan, masters of trade and economics. These seventeen races are offered many paths to victory, but only one may sit upon the throne of Mecatol Rex as the new masters of the galaxy.",
  },
  {
    title: "Cosmic Encounter",
    article_text_1:
      "Build a galactic empire... In the depths of space, the alien races of the Cosmos vie with each other for control of the universe. Alliances form and shift from moment to moment, while cataclysmic battles send starships screaming into the warp. This classic game of alien politics returns from the warp once more!",
    article_text_2:
      "Build a galactic empire... In the depths of space, the alien races of the Cosmos vie with each other for control of the universe. Alliances form and shift from moment to moment, while cataclysmic battles send starships screaming into the warp. This classic game of alien politics returns from the warp once more!",
  },
  {
    title: "Picture Perfect",
    article_text_1:
      "How do you take the perfect picture of a group of people if you only have one try? Each character has different wishes. Some want to be at the front of the picture; some want to stand next to another; and some really don't want to be next to that one particular person by any means. Do your best to make everyone happy even if you don't actually know all the characters' preferences… In Picture Perfect, first released as Der Perfekte Moment, you need to arrange fourteen characters to take the perfect photograph. Each of them has three specific desires that you want to fulfill. Unfortunately, these desires are hidden in envelopes. During the game, the players try to take a look inside these envelopes to figure out how to place the characters correctly. To do so, they trade their information with others — or maybe try to hide it... Whoever earns the most points at the end of the game has fulfilled the most desires and becomes the master photographer.",
    article_text_2:
      "How do you take the perfect picture of a group of people if you only have one try? Each character has different wishes. Some want to be at the front of the picture; some want to stand next to another; and some really don't want to be next to that one particular person by any means. Do your best to make everyone happy even if you don't actually know all the characters' preferences… In Picture Perfect, first released as Der Perfekte Moment, you need to arrange fourteen characters to take the perfect photograph. Each of them has three specific desires that you want to fulfill. Unfortunately, these desires are hidden in envelopes. During the game, the players try to take a look inside these envelopes to figure out how to place the characters correctly. To do so, they trade their information with others — or maybe try to hide it... Whoever earns the most points at the end of the game has fulfilled the most desires and becomes the master photographer.",
  },
];

const seedArticles = () => Article.bulkCreate(articledata);

module.exports = seedArticles;
