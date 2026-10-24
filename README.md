# COGEDE — sites

Sites públicos da COGEDE (Cooperativa de Geração Distribuída Emersol), todos hospedados no VPS (Plesk, 185.215.180.60) dentro da assinatura `cogede.com.br`.

| Pasta | Domínio | O que é | Raiz no servidor |
| --- | --- | --- | --- |
| `institucional/` | https://www.cogede.com.br | Site institucional, HTML estático | `/var/www/vhosts/cogede.com.br/httpdocs` |
| `parcerias/` | https://parcerias.cogede.com.br | Landing page para donos de usina alugarem para a cooperativa (Vite + React + Tailwind, veio do Lovable) | `/var/www/vhosts/cogede.com.br/parcerias.cogede.com.br` |

O painel de gestão (`painel.cogede.com.br`) continua no repositório próprio, `EmersolEngenharia/cogede-app`.

## Desenvolvimento

`institucional/` não tem build: é editar o `index.html` e as imagens.

`parcerias/` requer Node 22:

```sh
cd parcerias
npm ci
npm run dev        # http://localhost:8080
npm run build      # gera parcerias/dist/
```

## Publicação

O workflow `.github/workflows/deploy.yml` publica pela branch `main`, só o site cuja pasta mudou (ou os dois pelo botão "Run workflow"). Envia por rsync/SSH e confere no fim se o domínio serve o conteúdo novo com certificado válido.

Secrets (Settings › Secrets and variables › Actions), os mesmos do `cogede-app`:

- `VPS_HOST`: 185.215.180.60
- `VPS_USER`: usuário de sistema da assinatura cogede.com.br no Plesk
- `VPS_SSH_KEY_B64`: chave privada em base64 numa linha (ou `VPS_SSH_KEY` em texto)

Variável `DEPLOY_VPS = true` liga o deploy automático a cada push. Sem ela, só pelo botão.

### Servidor

- Certificados Let's Encrypt emitidos pelo Plesk, com redirecionamento 301 de HTTP para HTTPS.
- `parcerias/public/.htaccess` manda qualquer rota para o `index.html` (SPA). Se o Plesk servir só pelo nginx, a mesma regra vai em *Apache & nginx Settings › Additional nginx directives*:

  ```nginx
  location / {
      try_files $uri $uri/ /index.html;
  }
  ```
