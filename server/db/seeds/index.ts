import { BookLocation, sequelize } from "../index";
import { bookLocationsSeed } from "./bookLocationsSeed";

(async () => {
  await sequelize.sync({ force: true })

  await Promise.all([
    BookLocation.bulkCreate(bookLocationsSeed)
  ])

  sequelize.close()
  console.log("Database seed successfully!");
})()

