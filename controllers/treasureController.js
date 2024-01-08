const { Op } = require("sequelize");
const { Treasure, MoneyValue } = require("../models"); // Adjust the path to your models

const findTreasureBoxes = async (req, res) => {
  const { latitude, longitude, distance, prize_value } = req.body;

  // Validate input fields
  if (!latitude || !longitude || ![1, 10].includes(distance)) {
    return res.status(400).json({
      error:
        "Invalid input. Please provide valid latitude, longitude, and distance (1 or 10).",
    });
  }

  let validPrizeValue;
  if (prize_value !== undefined) {
    // Check if the prize_value is a float or decimal number
    if (Number.isInteger(prize_value)) {
      validPrizeValue = Math.floor(prize_value); // Ensure it's a whole number
      if (validPrizeValue < 10 || validPrizeValue > 30) {
        return res.status(400).json({
          error:
            "Invalid prize value. It should be a whole number between $10 and $30.",
        });
      }
    } else {
      return res.status(400).json({
        error:
          "Invalid prize value. It should be a whole number between $10 and $30.",
      });
    }
  }

  try {
    const distanceInDegrees = distance / 111.12; // Roughly 1km is 1/111.12 degrees

    const treasures = await Treasure.findAll({
      where: {
        Latitude: {
          [Op.between]: [
            latitude - distanceInDegrees,
            latitude + distanceInDegrees,
          ],
        },
        Longitude: {
          [Op.between]: [
            longitude - distanceInDegrees,
            longitude + distanceInDegrees,
          ],
        },
      },
      include: [
        {
          model: MoneyValue,
          where:
            validPrizeValue !== undefined ? { Amount: validPrizeValue } : {},
          attributes: ["Amount"],
          required: false,
        },
      ],
    });

    let data = treasures.map((t) => ({
      id: t.id,
      Latitude: t.Latitude,
      Longitude: t.Longitude,
      Name: t.Name,
      amount:
        t.MoneyValues.length > 0 ? t.MoneyValues.map((m) => m.Amount) : null,
      createdAt: t.createdAt,
      updatedAt: t.updatedAt,
    }));

    if (validPrizeValue !== undefined) {
      data = data.filter((t) => t.amount !== null);
    }

    res.status(200).json({ treasures: data });
  } catch (error) {
    console.error("Error finding treasure boxes:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { findTreasureBoxes };
