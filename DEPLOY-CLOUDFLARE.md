# Subir o Bueno TI no Cloudflare Workers

Este pacote contém o código completo do site (TanStack Start, com renderização no servidor).
O arquivo `wrangler.jsonc` já está configurado para a Cloudflare.

## Pré-requisitos

- Node.js 22 ou mais novo (https://nodejs.org)
- Uma conta gratuita na Cloudflare (https://dash.cloudflare.com/sign-up)

## Passo a passo

1. Descompacte este ZIP e entre na pasta:

   ```bash
   cd buenoti
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Faça login na Cloudflare (abre o navegador na primeira vez):

   ```bash
   npx wrangler login
   ```

4. Gere a versão de produção e publique:

   ```bash
   npm run deploy
   ```

   O comando faz o build (gera `.output/server/index.mjs` e `.output/public`)
   e envia tudo para a Cloudflare em uma única etapa.

5. No final aparece o endereço do seu site, no formato:

   ```
   https://buenoti.<sua-conta>.workers.dev
   ```

## Testar antes de publicar

```bash
npm run build
npm run preview
```

Ou rodar em modo de desenvolvimento:

```bash
npm run dev
```

## Apontar o buenoti.com.br

No painel da Cloudflare (https://dash.cloudflare.com):

1. **Workers & Pages** → o serviço `buenoti` já aparece na lista.
2. Abra o serviço → aba **Settings** → **Domains & Routes** → **Add custom domain**.
3. Digite `buenoti.com.br`. Como o DNS já está na Cloudflare, os registros
   são criados automaticamente — não precisa mexer em DNS manualmente.
4. Repita para `www.buenoti.com.br`.
5. Depois remova o redirecionamento antigo de `buenoti.com.br`
   para `buenoti.lovable.app` (em **Rules** → **Redirect Rules**), se existir.

## Observações

- O plano Free do Cloudflare Workers tem limite de 100 mil requisições por dia,
  suficiente para um site institucional.
- Telefones, WhatsApp e e-mail ficam em `src/components/site/data.ts`.
- A foto da capa está em `src/assets/hero.jpg`.
