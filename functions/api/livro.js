// POST /api/livro  -> salva o livro (JSON com fotos) no KV e devolve o id
export async function onRequestPost({ request, env }) {
  const corpo = await request.text();
  if (corpo.length > 20e6) return Response.json({ erro: "Livro muito grande (use menos fotos)" }, { status: 413 });
  try { JSON.parse(corpo); } catch { return Response.json({ erro: "Dados inválidos" }, { status: 400 }); }
  const id = crypto.randomUUID().replace(/-/g, "").slice(0, 10);
  await env.LIVROS.put(id, corpo);
  return Response.json({ id });
}
