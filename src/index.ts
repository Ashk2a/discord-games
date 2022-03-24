import 'dotenv/config'
import 'module-alias/register';

import Client from "@bot/Client";

const client = new Client();

client.login();
