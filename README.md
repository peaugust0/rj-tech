# RJ TECH — Portfolio

Landing page profissional da **RJ TECH**.

**Site:** https://rjtechnology.store

## Como rodar localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Build estático

```bash
npm run build
```

Gera a pasta `out/`.

## Domínio (Hostinger + GitHub Pages)

O site publica via GitHub Actions. No DNS da Hostinger (zona de `rjtechnology.store`):

| Tipo | Nome/Host | Valor |
|------|-----------|--------|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `peaugust0.github.io` |

Remova apontamentos antigos da Hostinger (parking, "Coming Soon", etc.) que conflitem com `@`.

Depois que o DNS propagar, em **GitHub → Settings → Pages** ative **Enforce HTTPS**.

## Contato no site

WhatsApp: `(21) 97347-0393` → `https://wa.me/5521973470393`

## Stack

- Next.js (export estático)
- TypeScript + Tailwind CSS
- GitHub Pages + domínio customizado
