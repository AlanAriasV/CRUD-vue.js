import { config } from "dotenv";
config();

export default {
  dbUser: process.env.USER || "",
  dbPassword: process.env.PASSWORD || "",
  port: process.env.PORT || "",
};
