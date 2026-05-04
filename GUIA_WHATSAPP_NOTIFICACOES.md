# Guia: Notificações de Compra no WhatsApp (100% GRÁTIS)

## 📋 Visão Geral
Este guia mostra como configurar notificações automáticas no WhatsApp **totalmente gratuito** quando alguém faz uma compra no seu site.

**Seu número WhatsApp:** +258848628400

---

## 🔧 PASSO 1: Criar Conta Twilio (Gratuita - Sem Cartão)

1. Acesse [twilio.com](https://www.twilio.com/)
2. Clique em **"Sign Up"** 
3. Preencha com seu email
4. **Confirme o email** (não precisa cartão de crédito para sandbox)
5. Faça login

---

## 💬 PASSO 2: Ativar WhatsApp Sandbox (Completamente Grátis)

### 2.1 - Acessar o Sandbox

1. No dashboard Twilio, à esquerda, clique em **"Messaging"**
2. Clique em **"Services"**
3. Clique em **"+ Create Messaging Service"**
4. Nome: *"Frango Realeza"*
5. Clique em **"Create"**
6. Na seção de **Senders**, clique em **"+ Add Sender"**
7. Escolha **"WhatsApp"**
8. Clique em **"Connect WhatsApp Business Account"** ou **"Use the Twilio WhatsApp Sandbox"**
9. Escolha **"Use the Twilio WhatsApp Sandbox"** (gratuito!)

### 2.2 - Conectar seu Número

1. Você receberá um número Twilio + código (ex: `join correct-joke`)
2. **Abra seu WhatsApp** (+258857534125)
3. **Envie uma mensagem** para o número Twilio com o código indicado
4. Pronto! Seu número está vinculado ao sandbox

### 2.3 - Pegar seus Dados de Acesso

1. Volte ao Dashboard Twilio → **Account** (canto inferior esquerdo)
2. Você verá:
   - **Account SID**: `ACxxxxxxxxxxxxx`
   - **Auth Token**: `copie_aqui`
3. **SALVE ESTES VALORES**

---

## 🔗 PASSO 3: Configurar Webhook (Make.com Grátis)

### 3.1 - Criar Conta Make.com

1. Acesse [make.com](https://www.make.com/)
2. Clique em **"Sign up"** 
3. Confirme o email
4. Faça login

### 3.2 - Criar Scenario com Webhook

1. Clique em **"+ Create New Scenario"**
2. Procure por **"Webhooks"**
3. Selecione **"Webhooks"** → **"Custom Webhook"**
4. Escolha método **"POST"**
5. Clique em **"Save"** 
6. **COPIE A URL** apresentada (tipo: `https://hook.make.com/xxxxx/xxxxx`)

### 3.3 - Adicionar Ação de Envio (HTTP)

1. Clique no **"+"** para adicionar próxima ação
2. Procure por **"HTTP"** e selecione **"Make a Request"**
3. Configure assim:

```
URL: https://api.twilio.com/2010-04-01/Accounts/{SEU_ACCOUNT_SID}/Messages.json

Método: POST

Headers:
- Content-Type: application/x-www-form-urlencoded
- Authorization: Basic {ENCODE_BASE64}

Body (x-www-form-urlencoded):
- From: whatsapp:+14155238886
- To: whatsapp:+258848628400
- Body: 🎉 NOVA COMPRA - Total: {{51.total}} MZN {{1.timestamp}}
```

### 3.4 - Gerar Base64 para Autenticação

1. Use um site como [base64encode.org](https://www.base64encode.org/)
2. Encode isto: `{ACCOUNT_SID}:{AUTH_TOKEN}`
3. Exemplo: se SID é `AC123` e Token é `xyz`, encode: `AC123:xyz`
4. Resultado vai ser: `QUMxMjM6eHl6`

---

## 📝 PASSO 4: Inserir URL no Script

1. Abra o arquivo `script.js`
2. Procure por:
```javascript
const WEBHOOK_URL = 'INSIRA_AQUI_SUA_URL_DO_WEBHOOK';
```

3. Substitua pela sua URL do Make.com:
```javascript
const WEBHOOK_URL = 'https://hook.make.com/xxxxx/xxxxx';
```

4. **Salve** (Ctrl+S)

---

## ✅ PASSO 5: Testar (Está Funcionando!)

1. Abra seu site
2. Adicione produtos ao carrinho
3. Clique em **"Finalizar Compra"**
4. **Verifique seu WhatsApp!** 📱

---

## 💰 CUSTOS

| Serviço | Custo | Limite |
|---------|-------|--------|
| Twilio Sandbox | **GRÁTIS** | Ilimitado* |
| Make.com | **GRÁTIS** | 1000 execuções/mês |
| **TOTAL** | **0,00 MZN** | ✅ Bastante |

*Twilio Sandbox para testes/desenvolvimento é 100% gratuito e ilimitado

---

## 🎯 Alternativa: Se Quiser Produção (Pagar Pouco)

Se depois quiser sair do Sandbox (para enviar para qualquer número):

1. **Criar conta WhatsApp Business via Meta**
2. **Adicionar cartão de crédito no Twilio** 
3. **Mensagens custam ~0,0100-0,0200 USD cada** (muito barato!)

---

## 🚨 Troubleshooting

| Problema | Solução |
|----------|---------|
| Não recebe mensagem | Verificar se confirmou o número no WhatsApp Sandbox |
| Erro de autenticação | Verificar se o Base64 foi codificado corretamente |
| URL webhook inválida | Copiar novamente a URL completa do Make.com |

---

## 📞 Suporte

- **Twilio Docs:** https://www.twilio.com/docs/whatsapp
- **Make.com Docs:** https://www.make.com/docs
- **Testar Base64:** https://www.base64encode.org/

---

**✅ Configuração 100% Gratuita Concluída!**
