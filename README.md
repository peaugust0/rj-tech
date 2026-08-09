# RJ TECH — Portfolio

Landing page profissional da **RJ TECH** para divulgação de serviços de TI freelance.

## Como rodar localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Build estático (GitHub Pages)

```bash
npm run build
```

Gera a pasta `out/` (site estático). No deploy automático, o GitHub Actions define `NEXT_PUBLIC_BASE_PATH` com o nome do repositório.

## Publicar no GitHub Pages

1. Faça push para a branch `main`.
2. Em **Settings → Pages**, em *Source*, escolha **GitHub Actions**.
3. O workflow `.github/workflows/deploy-pages.yml` builda e publica sozinho.
4. Site em: `https://<seu-usuario>.github.io/rj-tech/`

O preview social (Facebook/WhatsApp) usa o banner em `public/images/banner-rj-tech.png`.

## Contato no site

WhatsApp: `(21) 97347-0393` → `https://wa.me/5521973470393`

## Stack

- Next.js (App Router) + export estático
- TypeScript
- Tailwind CSS
- GitHub Pages + Actions
