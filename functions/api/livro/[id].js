// GET /api/livro/:id -> devolve o livro salvo
export async function onRequestGet({ params, env }) {
  const dados = await env.LIVROS.get(params.id);
  if (!dados) return Response.json({ erro: "não encontrado" }, { status: 404 });
  return new Response(dados, { headers: { "content-type": "application/json", "cache-control": "public, max-age=86400" } });
}
