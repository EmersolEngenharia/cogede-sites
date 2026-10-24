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

No fim de cada deploy o workflow lê o `version.txt` (gravado com o commit) direto no VPS e depois pelo DNS público. Se o domínio servir outra coisa, o job falha.

### Primeiro deploy

1. Backup no servidor (SSH com o usuário da assinatura):

   ```sh
   cd /var/www/vhosts/cogede.com.br
   tar czf ~/backup-sites-$(date +%F).tgz httpdocs parcerias.cogede.com.br
   ```

2. Actions › Deploy dos sites › Run workflow, com **simular** marcado. O log do passo "Enviar" lista o que seria enviado e, nas linhas `*deleting`, o que seria apagado. Confira que nada de fora do site aparece ali.
3. Rode de novo com **simular** desmarcado e abra os dois domínios no navegador.
4. Só então crie a variável `DEPLOY_VPS = true`.

Rollback: refaça o deploy de um commit anterior (revert na `main`) ou restaure o backup:

```sh
cd /var/www/vhosts/cogede.com.br
tar xzf ~/backup-sites-AAAA-MM-DD.tgz httpdocs      # ou parcerias.cogede.com.br
```

### Servidor

- Certificados Let's Encrypt emitidos pelo Plesk, com redirecionamento 301 de HTTP para HTTPS.
- `parcerias/public/.htaccess` manda qualquer rota para o `index.html` (SPA). Se o Plesk servir só pelo nginx, a mesma regra vai em *Apache & nginx Settings › Additional nginx directives*:

  ```nginx
  location / {
      try_files $uri $uri/ /index.html;
  }
  ```
