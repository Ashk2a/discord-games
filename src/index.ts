import 'dotenv/config'
import 'module-alias/register';

import Client from "@bot/client";

const client = new Client();

client.login();
