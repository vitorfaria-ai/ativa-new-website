# 🚀 Guia de Deploy - Luxury Brand Website

## 📋 **Opções de Deploy Recomendadas**

### **Opção 1: GitHub + Netlify (MAIS FÁCIL)**

#### Passo a Passo:

1. **Criar conta no GitHub**
   ```bash
   # Acesse: https://github.com
   # Crie uma conta gratuita
   ```

2. **Criar repositório**
   ```bash
   # Clique em "New repository"
   # Nome: luxury-brand-website
   # Público ou privado
   # Não inicialize com README
   ```

3. **Subir arquivos para GitHub**
   ```bash
   # No terminal, na pasta do projeto:
   git init
   git add .
   git commit -m "Primeira versão do site"
   git branch -M main
   git remote add origin https://github.com/SEU_USUARIO/luxury-brand-website.git
   git push -u origin main
   ```

4. **Conectar com Netlify**
   - Acesse: https://netlify.com
   - Faça login com GitHub
   - Clique em "New site from Git"
   - Selecione seu repositório
   - Deploy automático!

#### Vantagens:
- ✅ Deploy automático a cada push
- ✅ URL personalizada (seu-dominio.com)
- ✅ SSL gratuito
- ✅ CDN global
- ✅ Preview de mudanças

---

### **Opção 2: GitHub + Vercel**

1. **Mesmo processo do GitHub**
2. **Acesse: https://vercel.com**
3. **Importe repositório**
4. **Deploy automático**

---

### **Opção 3: FTP Tradicional**

#### Usando FileZilla:

1. **Baixe FileZilla**: https://filezilla-project.org
2. **Conecte com sua hospedagem**:
   ```
   Host: seu-dominio.com ou IP do servidor
   Usuário: seu-usuario-ftp
   Senha: sua-senha-ftp
   Porta: 21 (ou 22 para SFTP)
   ```

3. **Upload dos arquivos**:
   ```
   Pasta local → Pasta pública (public_html, www, etc.)
   ```

---

## 🔧 **Configuração de Domínio**

### **Para Netlify/Vercel:**
1. Vá nas configurações do projeto
2. Seção "Domain management"
3. Adicione seu domínio personalizado
4. Configure DNS conforme instruções

### **Para Hospedagem Tradicional:**
1. Aponte DNS para seu servidor
2. Configure subdomínio se necessário

---

## 📝 **Fluxo de Trabalho Recomendado**

### **Para Desenvolvimento:**
```bash
# 1. Fazer alterações localmente
# 2. Testar no navegador
# 3. Commit no GitHub
git add .
git commit -m "Descrição da alteração"
git push origin main
# 4. Deploy automático acontece
```

### **Para Manutenção:**
```bash
# 1. Clone o repositório
git clone https://github.com/SEU_USUARIO/luxury-brand-website.git

# 2. Fazer alterações
# 3. Commit e push
git add .
git commit -m "Correção: descrição"
git push origin main
```

---

## 🛠️ **Ferramentas Úteis**

### **Para Desenvolvimento:**
- **VS Code** - Editor recomendado
- **Live Server** - Preview local
- **GitHub Desktop** - Interface gráfica para Git

### **Para Deploy:**
- **Netlify** - Deploy automático
- **Vercel** - Deploy automático
- **FileZilla** - FTP tradicional

---

## 🔒 **Segurança e Performance**

### **Otimizações Recomendadas:**
1. **Comprimir imagens** antes do upload
2. **Minificar CSS/JS** para produção
3. **Configurar cache** no servidor
4. **Usar HTTPS** sempre

### **Backup:**
- Mantenha cópia local dos arquivos
- Use GitHub como backup principal
- Configure backup automático da hospedagem

---

## 📞 **Suporte**

### **Problemas Comuns:**

**Site não carrega:**
- Verificar se arquivo `index.html` está na pasta raiz
- Verificar permissões de arquivos (644)
- Verificar configuração de DNS

**CSS não aplica:**
- Verificar caminho dos arquivos CSS
- Verificar se arquivo `styles.css` foi uploadado
- Verificar console do navegador para erros

**JavaScript não funciona:**
- Verificar se arquivo `script.js` foi uploadado
- Verificar console do navegador para erros
- Verificar se HTTPS está configurado

---

## 🎯 **Recomendação Final**

**Para seu caso, recomendo: GitHub + Netlify**

**Por quê?**
- ✅ Mais fácil de manter
- ✅ Deploy automático
- ✅ Gratuito
- ✅ Performance excelente
- ✅ SSL gratuito
- ✅ Fácil de fazer alterações

**Próximos passos:**
1. Criar conta no GitHub
2. Subir arquivos
3. Conectar com Netlify
4. Configurar domínio
5. Pronto! 🎉

