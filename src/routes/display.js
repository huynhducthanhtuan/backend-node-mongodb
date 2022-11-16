const express = require("express");
const router = express.Router();
const DisplayController = require("../controllers/Display");

/**
 * @swagger
 * /display/coins-and-tokens/reducing:
 *   get:
 *     description: Get top 10 reducing coins and tokens
 *     tags: [Coin - Token]
 *     responses:
 *       200:
 *         description: Get top 10 reducing coins and tokens successfully
 *       400:
 *         description: Get top 10 reducing coins and tokens failed
 */
router.get(
	"/coins-and-tokens/reducing",
	DisplayController.getReducingCoinsAndTokens,
);

/**
 * @swagger
 * /display/coins-and-tokens/all:
 *   get:
 *     description: Get list of coins
 *     tags: [Coin - Token]
 *     responses:
 *       200:
 *         description: Get list of coins successfully
 *       400:
 *         description: Get list of coins failed
 */
router.get("/coins-and-tokens/all", DisplayController.getCoinsAndTokens);

/**
 * @swagger
 * /display/coins/trending:
 *   get:
 *     description: Get top 10 trending coins
 *     tags: [Coin - Token]
 *     responses:
 *       200:
 *         description: Get top 10 trending coins successfully
 *       400:
 *         description: Get top 10 trending coins failed
 */
router.get("/coins/trending", DisplayController.getTrendingCoins);

/**
 * @swagger
 * /display/tokens/trending:
 *   get:
 *     description: Get top 10 trending tokens
 *     tags: [Coin - Token]
 *     responses:
 *       200:
 *         description: Get top 10 trending tokens successfully
 *       400:
 *         description: Get top 10 trending tokens failed
 */
router.get("/tokens/trending", DisplayController.getTrendingTokens);

/**
 * @swagger
 * /display/coin/details:
 *   get:
 *     description: Get coin or token details
 *     tags: [Coin - Token]
 *     parameters:
 *      - in: query
 *        name: symbol
 *        schema:
 *          type: string
 *     responses:
 *       200:
 *         description: Get coin or token details successfully
 *       400:
 *         description: Get coin or token details failed
 */
router.get("/coin/details", DisplayController.getCoinOrTokenDetails);

/**
 * @swagger
 * /display/sharks:
 *   get:
 *     description: Get list of sharks
 *     tags: [Shark]
 *     responses:
 *       200:
 *         description: Get list of sharks successfully
 *       400:
 *         description: Get list of sharks failed
 */
router.get("/sharks", DisplayController.getSharks);

/**
 * @swagger
 * /display/sharks/transaction-history/length:
 *   get:
 *     description: Get the length of list transactions
 *     tags: [Shark]
 *     responses:
 *       200:
 *         description: Get the length of list transactions successfully
 *       400:
 *         description: Get the length of list transactions failed
 */
 router.get("/sharks/transaction-history/length", DisplayController.getListTransactionsLength);

/**
 * @swagger
 * /display/sharks/transaction-history:
 *   get:
 *     description: Get list transactions history of all sharks
 *     tags: [Shark]
 *     parameters:
 *      - in: query
 *        name: page
 *        schema:
 *          type: string
 *     responses:
 *       200:
 *         description: Get list transactions history of all sharks successfully
 *       400:
 *         description: Get list transactions history of all sharks failed
 */
router.get(
	"/sharks/transaction-history",
	DisplayController.getListTransactionsOfAllSharks,
);

/**
 * @swagger
 * /display/shark/crypto:
 *   get:
 *     description: Get list of coin and token of shark
 *     tags: [Shark]
 *     parameters:
 *      - in: query
 *        name: sharkId
 *        schema:
 *          type: string
 *     responses:
 *       200:
 *         description: Get list of coin and token of shark successful
 *       400:
 *         description: Get list of coin and token of shark failed
 */
router.get("/shark/crypto", DisplayController.getCryptosOfShark);

/**
 * @swagger
 * /display/shark/transaction-history:
 *   get:
 *     description: Get the transaction history of shark
 *     tags: [Shark]
 *     parameters:
 *      - in: query
 *        name: id
 *        schema:
 *          type: string
 *     responses:
 *       200:
 *         description: Get transaction history of shark successful
 *       400:
 *         description: Get transaction history of shark failed
 */
router.get(
	"/shark/transaction-history",
	DisplayController.getTransactionsOfShark,
);

/**
 * @swagger
 * /display/shark/trade-transaction-history:
 *   get:
 *     description: Get trade coin transaction history
 *     tags: [Shark]
 *     parameters:
 *      - in: query
 *        name: sharkId
 *        schema:
 *          type: string
 *      - in: query
 *        name: coinSymbol
 *        schema:
 *          type: string
 *     responses:
 *       200:
 *         description: Get trade coin transaction history successful
 *       400:
 *         description: Get trade coin transaction history failed
 */
router.get(
	"/shark/trade-transaction-history",
	DisplayController.getTradeTransactionHistory,
);

/**
 * @swagger
 * /display/gain-loss/sharks:
 *   get:
 *     description: Get list gain and loss of sharks
 *     tags: [Gain and Loss]
 *     parameters:
 *      - in: query
 *        name: isLoss
 *        schema:
 *          type: string
 *     responses:
 *       200:
 *         description: Get list gain and loss of sharks successfully
 *       400:
 *         description: Get list gain and loss of sharks failed
 */
 router.get(
	"/gain-loss/sharks",
	DisplayController.getGainLossOfSharks,
);

/**
 * @swagger
 * /display/gain-loss/coins:
 *   get:
 *     description: Get list gain and loss of coins
 *     tags: [Gain and Loss]
 *     parameters:
 *      - in: query
 *        name: isLoss
 *        schema:
 *          type: string
 *     responses:
 *       200:
 *         description: Get list gain and loss of coins successfully
 *       400:
 *         description: Get list gain and loss of coins failed
 */
 router.get(
	"/gain-loss/coins",
	DisplayController.getGainLossOfCoins,
);

/**
 * @swagger
 * /display/tags:
 *   get:
 *     description: Get list of tags
 *     tags: [Others]
 *     responses:
 *       200:
 *         description: Get list of tags successfully
 *       400:
 *         description: Get list of tags failed
 */
router.get("/tags", DisplayController.getTags);

module.exports = router;
