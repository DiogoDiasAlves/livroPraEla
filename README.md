# Livro 3D para ela ❤️

- **`criar.html`**: editor feito para o celular. Preencha nomes e textos, escolha a cor, adicione fotos da galeria, veja a prévia e toque em **Publicar**. Você recebe um link para mandar no WhatsApp.
- **`index.html?id=...`**: o livro 3D que ela abre pelo link.

O rascunho fica salvo no navegador, então dá para fechar e continuar depois. As fotos são comprimidas automaticamente.

## Configuração (uma vez só, ~5 min)

### 1. Firebase (guarda o livro e as fotos, grátis)
1. Acesse https://console.firebase.google.com → **Adicionar projeto** (pode desativar o Analytics).
2. No menu **Build → Firestore Database → Criar banco de dados** (modo produção, região `southamerica-east1`).
3. Na aba **Regras**, cole o conteúdo de `firestore.rules` e publique.
4. Em ⚙️ **Configurações do projeto → Seus apps → Web (`</>`)**, registre um app e copie o objeto `firebaseConfig` para o arquivo `config.js`.

### 2. Colocar no ar (GitHub Pages)
No repositório: **Settings → Pages → Branch** (escolha o branch e `/root`) → Save.
Depois disso, o editor fica em `https://SEU-USUARIO.github.io/livroPraEla/criar.html`.

Pelo celular: abra o link do editor, crie o livro, toque em Publicar e envie para ela.
