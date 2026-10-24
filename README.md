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

Secrets (Settings › Secrets and variables › Actions):

- `VPS_HOST`: 185.215.180.60
- `VPS_USER`: `cogede.com.br_3cv2huszng`, usuário de sistema da assinatura cogede.com.br no Plesk (o mesmo do painel)
- `VPS_SSH_KEY_B64`: chave privada em base64 numa linha (ou `VPS_SSH_KEY` em texto)

A chave é própria deste repositório, separada da do `cogede-app`: ed25519 com comentário `github-actions-cogede-sites`, autorizada em `/var/www/vhosts/cogede.com.br/.ssh/authorized_keys`. A privada só existe no secret. Para trocar a chave, gere uma nova no servidor, ponha a pública no `authorized_keys`, grave a privada no secret (`base64 -w0` da privada piped em `gh secret set VPS_SSH_KEY_B64`), apague a privada do servidor e tire a linha antiga do `authorized_keys`.

Variável `DEPLOY_VPS = true` (ligada desde 24/10/2026) faz o deploy automático a cada push. Sem ela, só pelo botão.

No fim de cada deploy o workflow lê o `version.txt` (gravado com o commit) direto no VPS e depois pelo DNS público. Se o domínio servir outra coisa, o job falha.

### Backup e rollback

Antes de uma mudança arriscada (como mexer nas exclusões do rsync), faça um backup e rode o workflow com **simular** marcado. O log do passo "Enviar" lista o que seria enviado e, nas linhas `*deleting`, o que seria apagado.

Backup no servidor (como root):

```sh
cd /var/www/vhosts/cogede.com.br
tar czf /root/backup-cogede-sites-$(date +%F-%H%M).tgz httpdocs parcerias.cogede.com.br
```

O backup de antes do primeiro deploy pelo Actions é `/root/backup-cogede-sites-2026-10-24-1058.tgz`.

Rollback: refaça o deploy de um commit anterior (revert na `main`) ou restaure o backup:

```sh
cd /var/www/vhosts/cogede.com.br
tar xzf /root/backup-cogede-sites-AAAA-MM-DD-HHMM.tgz httpdocs      # ou parcerias.cogede.com.br
```

### Servidor

- Certificados Let's Encrypt emitidos pelo Plesk, com redirecionamento 301 de HTTP para HTTPS.
- `parcerias/public/.htaccess` manda qualquer rota para o `index.html` (SPA). Se o Plesk servir só pelo nginx, a mesma regra vai em *Apache & nginx Settings › Additional nginx directives*:

  ```nginx
  location / {
      try_files $uri $uri/ /index.html;
  }
  ```
