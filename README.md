# Livro 3D para ela ❤️

- **`criar.html`**: editor feito para o celular. Preencha nomes e textos, escolha a cor, adicione fotos da galeria, veja a prévia e toque em **Publicar**. Você recebe um link para mandar no WhatsApp.
- **`index.html?id=...`**: o livro 3D que ela abre pelo link.

O rascunho fica salvo no navegador, então dá para fechar e continuar depois. As fotos são comprimidas automaticamente.

## Colocar no ar de graça (Cloudflare Pages + KV), uma vez só

1. Crie uma conta em https://dash.cloudflare.com.
2. **Storage & Databases → KV → Create namespace** com o nome `livros`.
3. **Workers & Pages → Create → Pages → Connect to Git** e escolha o repositório `livroPraEla` (e o branch).
   - Framework: *None* · Build command: (vazio) · Output directory: `/`
   - Save and Deploy.
4. No projeto criado: **Settings → Bindings → Add → KV namespace**
   - Variable name: `LIVROS` · Namespace: `livros` → Save.
5. **Deployments → ⋯ → Retry deployment** (para aplicar o binding).

Pronto. O editor fica em `https://SEU-PROJETO.pages.dev/criar.html`.
No celular: abra o editor, monte o livro, toque em **Publicar** e mande o link para ela.

O plano grátis do KV aceita 1.000 livros publicados por dia e 1 GB de espaço, o que dá muito livro.
