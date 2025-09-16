# 🎯 Google Tag Manager - Guia Completo

## 📋 **O que é GTM?**

Google Tag Manager é uma ferramenta gratuita que permite gerenciar tags de marketing e analytics sem precisar modificar o código do site.

### **✅ Vantagens:**
- **Sem código**: Adiciona/remove tags sem tocar no HTML
- **Deploy automático**: Funciona perfeitamente com Netlify
- **Flexibilidade**: Múltiplas tags em um só lugar
- **Performance**: Carregamento otimizado
- **Debug**: Ferramentas de teste integradas

---

## 🚀 **Setup Inicial**

### **1. Criar Conta GTM**
1. Acesse: https://tagmanager.google.com
2. Clique em "Criar conta"
3. Configure:
   - **Nome da conta**: Cohiba Premium
   - **País**: Brasil
   - **Nome do contêiner**: Cohiba Website
   - **Plataforma**: Web

### **2. Obter ID do GTM**
- Após criar, você receberá um ID: `GTM-XXXXXXX`
- Substitua `GTM-XXXXXXX` no código HTML

### **3. Configurar no Site**
```html
<!-- No <head> -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXXXXX');</script>

<!-- No <body> -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
```

---

## 📊 **Tags Recomendadas**

### **1. Google Analytics 4 (GA4)**
```javascript
// Configuração no GTM
Tag Type: Google Analytics: GA4 Configuration
Measurement ID: G-XXXXXXXXXX

// Eventos personalizados
- page_view
- newsletter_signup
- button_click
- product_view
- scroll_depth
```

### **2. Facebook Pixel**
```javascript
// Configuração no GTM
Tag Type: Facebook Pixel
Pixel ID: XXXXXXXXXX

// Eventos
- PageView
- Lead (newsletter signup)
- ViewContent (product view)
- CustomEvent (button clicks)
```

### **3. Google Ads**
```javascript
// Configuração no GTM
Tag Type: Google Ads: Global site tag
Conversion ID: AW-XXXXXXXXX

// Conversões
- Newsletter signup
- Product view
- Button click
```

### **4. LinkedIn Insight Tag**
```javascript
// Configuração no GTM
Tag Type: LinkedIn Insight Tag
Partner ID: XXXXXXXXX

// Eventos
- PageView
- Lead
- CustomEvent
```

---

## 🎯 **Eventos Implementados**

### **1. Newsletter Signup**
```javascript
dataLayer.push({
    'event': 'newsletter_signup',
    'event_category': 'engagement',
    'event_label': 'newsletter_form',
    'value': 1
});
```

### **2. Button Clicks**
```javascript
dataLayer.push({
    'event': 'button_click',
    'event_category': 'engagement',
    'event_label': 'Ver Detalhes',
    'button_type': 'primary',
    'value': 1
});
```

### **3. Product Views**
```javascript
dataLayer.push({
    'event': 'product_view',
    'event_category': 'ecommerce',
    'event_label': 'Cohiba Esplendidos',
    'product_name': 'Cohiba Esplendidos',
    'value': 1
});
```

### **4. Scroll Depth**
```javascript
// Implementar com GTM Scroll Depth Trigger
- 25% da página
- 50% da página
- 75% da página
- 90% da página
```

---

## 🔧 **Configuração no GTM**

### **1. Triggers (Gatilhos)**

#### **Page View**
- **Tipo**: All Pages
- **Condição**: All Pages

#### **Newsletter Signup**
- **Tipo**: Custom Event
- **Event Name**: newsletter_signup

#### **Button Click**
- **Tipo**: Custom Event
- **Event Name**: button_click

#### **Product View**
- **Tipo**: Custom Event
- **Event Name**: product_view

#### **Scroll Depth**
- **Tipo**: Scroll Depth
- **Percentages**: 25, 50, 75, 90

### **2. Variables (Variáveis)**

#### **Built-in Variables**
- Page URL
- Page Title
- Event
- Event Category
- Event Label
- Event Value

#### **Custom Variables**
```javascript
// Button Text
Variable Type: Data Layer Variable
Data Layer Variable Name: event_label

// Product Name
Variable Type: Data Layer Variable
Data Layer Variable Name: product_name

// Button Type
Variable Type: Data Layer Variable
Data Layer Variable Name: button_type
```

---

## 📈 **Métricas Importantes**

### **1. Engajamento**
- **Newsletter signups**: Conversões de email
- **Button clicks**: Interação com CTAs
- **Scroll depth**: Engajamento com conteúdo
- **Time on page**: Tempo de permanência

### **2. Conversões**
- **Lead generation**: Newsletter signups
- **Product interest**: Product views
- **CTA performance**: Button click rates

### **3. Comportamento**
- **Page views**: Páginas mais visitadas
- **User journey**: Fluxo de navegação
- **Exit pages**: Páginas de saída

---

## 🛠️ **Ferramentas de Debug**

### **1. GTM Preview Mode**
1. Clique em "Preview" no GTM
2. Acesse seu site
3. Veja eventos em tempo real

### **2. Google Analytics Debug**
```javascript
// Adicionar no console
gtag('config', 'G-XXXXXXXXXX', {
    debug_mode: true
});
```

### **3. Facebook Pixel Helper**
- Extensão do Chrome
- Verifica eventos do Facebook

---

## 📊 **Relatórios e Dashboards**

### **1. Google Analytics 4**
- **Engagement**: Eventos personalizados
- **Conversions**: Newsletter signups
- **Ecommerce**: Product views
- **User journey**: Fluxo de navegação

### **2. Facebook Ads Manager**
- **Conversions**: Leads gerados
- **Custom events**: Interações específicas
- **Audience insights**: Comportamento dos usuários

### **3. Google Ads**
- **Conversions**: ROI de campanhas
- **Remarketing**: Audiences personalizadas
- **Performance**: Eficiência de anúncios

---

## 🔒 **Privacidade e LGPD**

### **1. Cookie Consent**
```javascript
// Implementar banner de cookies
- Google Analytics
- Facebook Pixel
- Google Ads
- LinkedIn Insight
```

### **2. Data Layer para Consent**
```javascript
dataLayer.push({
    'event': 'consent_update',
    'analytics_storage': 'granted',
    'ad_storage': 'granted',
    'functionality_storage': 'granted'
});
```

### **3. Privacy Policy**
- Informar sobre cookies
- Explicar uso dos dados
- Direito de opt-out

---

## 🚀 **Deploy com Netlify**

### **1. Configuração Automática**
- GTM funciona perfeitamente com deploy automático
- Não precisa de configuração adicional
- Tags carregam automaticamente

### **2. Environment Variables**
```bash
# No Netlify
GTM_ID=GTM-XXXXXXX
GA_ID=G-XXXXXXXXXX
FB_PIXEL_ID=XXXXXXXXXX
```

### **3. Preview Deployments**
- Testar tags em preview
- Verificar funcionamento
- Debug antes do deploy

---

## 📱 **Mobile Tracking**

### **1. Responsive Design**
- GTM funciona em todos os dispositivos
- Eventos são trackeados igualmente
- Performance otimizada

### **2. Mobile-Specific Events**
```javascript
// Touch events
- Touch start
- Touch end
- Swipe gestures

// Mobile engagement
- App-like behavior
- Touch-friendly interactions
```

---

## 🎯 **Próximos Passos**

### **1. Implementação**
1. ✅ Criar conta GTM
2. ✅ Configurar no site
3. ✅ Implementar eventos básicos
4. 🔄 Configurar GA4
5. 🔄 Configurar Facebook Pixel
6. 🔄 Configurar Google Ads

### **2. Otimização**
1. 🔄 A/B testing
2. 🔄 Conversion optimization
3. 🔄 Remarketing campaigns
4. 🔄 Audience building

### **3. Monitoramento**
1. 🔄 Weekly reports
2. 🔄 Performance analysis
3. 🔄 ROI tracking
4. 🔄 Continuous optimization

---

## 📞 **Suporte e Recursos**

### **Documentação Oficial**
- **GTM**: https://developers.google.com/tag-manager
- **GA4**: https://developers.google.com/analytics
- **Facebook**: https://developers.facebook.com/docs/pixel

### **Comunidade**
- **GTM Community**: https://www.en.advertisercommunity.com
- **Stack Overflow**: Tag "google-tag-manager"
- **YouTube**: GTM Tutorials

---

**🎉 Com GTM configurado, você terá controle total sobre o tracking do seu site!**


