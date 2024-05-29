import * as nfs from "node:fs/promises";
import Fastify from "fastify";
import cors from "@fastify/cors";
const fastify = Fastify({
    logger: true,
});
fastify.register(cors, {});
fastify.get("/", async (request, reply) => {
    const _json_string = await nfs.readFile("./json/users.json", "utf-8");
    const parsed_json = JSON.parse(_json_string);
    const search_query = request.query.term?.toLowerCase();
    if (search_query) {
        const _filtered = parsed_json.filter((_item) => _item.name.toLowerCase().search(search_query) !== -1);
        //  const _json_string_send = JSON.stringify(__filtered);
        reply.code(200).send(_filtered);
    }
    else {
        reply.code(200).send(parsed_json);
    }
});
fastify.listen({ port: 3000 }, (error, address) => {
    if (error) {
        console.error(error);
        process.exit(1);
    }
    console.log(`Server listening at ${address}`);
});
