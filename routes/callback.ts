// Copyright 2023 the Deno authors. All rights reserved. MIT license.
import type { Handlers } from "$fresh/server.ts";
import { handleCallback } from "deno_kv_oauth";
import { provider } from "@/utils/provider.ts";

export const handler: Handlers = {
  async GET(req) {
    return await handleCallback(req, provider, "/success");
  },
};
